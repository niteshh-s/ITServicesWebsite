import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-cta-banner',
  styleUrl: './cta-banner.scss',
  templateUrl: './cta-banner.html',
})
export class CtaBanner {
  readonly heading = input('Start with a 30-minute call');
  readonly description = input(
    'Tell us about the application, automation or security problem you are facing. If we are not the right fit, we will say so.',
  );
  readonly ctaLabel = input('Get in touch');
  readonly ctaLink = input('/contact');
}
