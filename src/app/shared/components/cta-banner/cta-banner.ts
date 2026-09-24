import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-cta-banner',
  styleUrl: './cta-banner.scss',
  templateUrl: './cta-banner.html',
})
export class CtaBanner {
  readonly heading = input('Ready to build something that lasts?');
  readonly description = input(
    'Tell us about your application, platform or support challenge and we will map out the options.',
  );
  readonly ctaLabel = input('Start a conversation');
  readonly ctaLink = input('/contact');
}
