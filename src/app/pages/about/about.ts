import { Component, inject } from '@angular/core';
import { Content } from '../../core/services/content';
import { Seo } from '../../core/services/seo';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';
import { PageHero } from '../../shared/components/page-hero/page-hero';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';

@Component({
  imports: [PageHero, SectionHeading, CtaBanner],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  private readonly content = inject(Content);

  protected readonly companyName = this.content.companyName;
  protected readonly stats = this.content.stats;
  protected readonly team = this.content.team;

  protected readonly values = [
    {
      title: 'Pragmatic, not dogmatic',
      body: 'We recommend the simplest solution that solves the problem and scales with you.',
    },
    {
      title: 'Transparent by default',
      body: 'Clear estimates, clear reporting and no surprises on the invoice.',
    },
    {
      title: 'Security first',
      body: 'Every design decision is reviewed against your risk and compliance requirements.',
    },
    {
      title: 'Long-term partners',
      body: 'Most of our clients have been with us for more than five years.',
    },
  ];

  constructor() {
    inject(Seo).update({
      title: 'About Us',
      description: 'Who we are, how we work and the team behind the projects.',
    });
  }
}
