import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-cta-banner',
  styleUrl: './cta-banner.scss',
  templateUrl: './cta-banner.html',
})
export class CtaBanner {
  readonly heading = input('Ready to modernise your IT?');
  readonly description = input('Book a free 30-minute consultation with one of our specialists.');
  readonly ctaLabel = input('Talk to an expert');
  readonly ctaLink = input('/contact');
}
