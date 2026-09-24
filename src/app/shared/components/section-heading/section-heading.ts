import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-section-heading',
  styleUrl: './section-heading.scss',
  templateUrl: './section-heading.html',
})
export class SectionHeading {
  readonly eyebrow = input<string>();
  readonly heading = input.required<string>();
  readonly description = input<string>();
  readonly align = input<'left' | 'center'>('center');
}
