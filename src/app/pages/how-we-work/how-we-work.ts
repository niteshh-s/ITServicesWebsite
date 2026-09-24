import { Component, inject } from '@angular/core';
import { Content } from '../../core/services/content';
import { Seo } from '../../core/services/seo';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';
import { PageHero } from '../../shared/components/page-hero/page-hero';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { Reveal } from '../../shared/directives/reveal';

@Component({
  imports: [PageHero, SectionHeading, CtaBanner, Reveal],
  selector: 'app-how-we-work',
  styleUrl: './how-we-work.scss',
  templateUrl: './how-we-work.html',
})
export class HowWeWork {
  private readonly content = inject(Content);

  protected readonly process = this.content.process;
  protected readonly engagementModels = this.content.engagementModels;
  protected readonly exclusions = this.content.exclusions;

  protected readonly guarantees = [
    {
      title: 'You talk to the people building it',
      body: 'There is no account manager between you and the engineer. Whoever scopes your work is whoever delivers it.',
    },
    {
      title: 'Fixed-price discovery, always first',
      body: 'We will not quote a build before we understand the problem. Discovery is scoped and priced up front, and the output is yours either way.',
    },
    {
      title: 'You own everything',
      body: 'Source code, infrastructure definitions, documentation and cloud accounts are in your name from day one. Leaving us should be easy.',
    },
    {
      title: 'We say no when it is not our work',
      body: 'We are specialists, not a full-service agency. If your problem sits outside what we do well, we will tell you and point you elsewhere.',
    },
  ];

  constructor() {
    inject(Seo).update({
      title: 'How We Work',
      description:
        'Our delivery process, engagement models and the commitments we make on every project.',
    });
  }
}
