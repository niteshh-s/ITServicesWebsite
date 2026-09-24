import {
  Directive,
  ElementRef,
  OnDestroy,
  Service,
  afterNextRender,
  inject,
  input,
  numberAttribute,
} from '@angular/core';

const OPTIONS: IntersectionObserverInit = { threshold: 0.12, rootMargin: '0px 0px -8% 0px' };

/** If the observer never reports back, show everything rather than leave the page blank. */
const FAIL_OPEN_MS = 2500;

/** One shared observer for every revealed element on the page. */
@Service()
export class RevealObserver {
  private observer: IntersectionObserver | null = null;
  private readonly targets = new Map<Element, () => void>();
  private reported = false;

  observe(element: Element, onEnter: () => void): void {
    this.targets.set(element, onEnter);
    this.ensureObserver().observe(element);
  }

  unobserve(element: Element): void {
    this.targets.delete(element);
    this.observer?.unobserve(element);
  }

  private ensureObserver(): IntersectionObserver {
    if (this.observer) return this.observer;

    this.observer = new IntersectionObserver((entries) => {
      this.reported = true;
      for (const entry of entries) {
        if (entry.isIntersecting) this.release(entry.target);
      }
    }, OPTIONS);

    setTimeout(() => {
      if (this.reported) return;
      for (const element of [...this.targets.keys()]) this.release(element);
    }, FAIL_OPEN_MS);

    return this.observer;
  }

  private release(element: Element): void {
    this.targets.get(element)?.();
    this.unobserve(element);
  }
}

/**
 * Fades an element in the first time it scrolls into view.
 *
 * The bound value is a stagger index, so sibling items in a grid reveal in
 * sequence: `<article [appReveal]="2">`.
 */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class Reveal implements OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly observer = inject(RevealObserver);

  readonly appReveal = input(0, { transform: numberAttribute });

  constructor() {
    afterNextRender(() => this.start());
  }

  ngOnDestroy(): void {
    this.observer.unobserve(this.host.nativeElement);
  }

  private start(): void {
    const element = this.host.nativeElement;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.show();
      return;
    }

    element.style.transitionDelay = `${Math.min(this.appReveal(), 6) * 80}ms`;
    this.observer.observe(element, () => this.show());
  }

  private show(): void {
    this.host.nativeElement.classList.add('reveal--visible');
  }
}
