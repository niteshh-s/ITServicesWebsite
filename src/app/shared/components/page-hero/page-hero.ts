import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-page-hero',
  styleUrl: './page-hero.scss',
  templateUrl: './page-hero.html',
})
export class PageHero {
  readonly title = input.required<string>();
  readonly tagline = input<string>();
  readonly image = input.required<string>();
}
