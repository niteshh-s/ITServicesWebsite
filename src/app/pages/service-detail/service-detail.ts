import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Content } from '../../core/services/content';
import { Seo } from '../../core/services/seo';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';

@Component({
  imports: [RouterLink, CtaBanner],
  selector: 'app-service-detail',
  styleUrl: './service-detail.scss',
  templateUrl: './service-detail.html',
})
export class ServiceDetail {
  private readonly content = inject(Content);
  private readonly seo = inject(Seo);

  /** Bound from the `:slug` route parameter via withComponentInputBinding(). */
  readonly slug = input.required<string>();

  protected readonly service = computed(() => this.content.serviceBySlug(this.slug()));
  protected readonly otherServices = computed(() =>
    this.content.services().filter((item) => item.slug !== this.slug()),
  );

  constructor() {
    effect(() => {
      const service = this.service();
      this.seo.update({
        title: service?.title ?? 'Service not found',
        description: service?.summary,
      });
    });
  }
}
