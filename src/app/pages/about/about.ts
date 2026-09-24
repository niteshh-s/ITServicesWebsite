import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Content } from '../../core/services/content';
import { Seo } from '../../core/services/seo';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';
import { PageHero } from '../../shared/components/page-hero/page-hero';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';

@Component({
  imports: [RouterLink, PageHero, SectionHeading, CtaBanner],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  private readonly content = inject(Content);

  protected readonly companyName = this.content.companyName;
  protected readonly commitments = this.content.commitments;
  protected readonly team = this.content.team;

  protected readonly values = [
    {
      title: 'Specialists, not generalists',
      body: 'Senior people with no bench to keep busy. We take on a limited number of projects so none of them get the junior treatment.',
    },
    {
      title: 'We understand the domain, not just the code',
      body: 'For regulated work in banking and financial services, we bring the domain and compliance context with us rather than learning it on your budget.',
    },
    {
      title: 'Honest about scope',
      body: 'We turn down work that sits outside our four practices. Telling you we cannot help costs us one project; pretending otherwise costs you a lot more.',
    },
    {
      title: 'Transparent by default',
      body: 'Fixed-price discovery, clear estimates, and an invoice that matches what we said it would be.',
    },
    {
      title: 'No lock-in',
      body: 'Code, infrastructure and accounts are in your name from day one. If you want to take it in-house, we will help you do it.',
    },
  ];

  constructor() {
    inject(Seo).update({
      title: 'About Us',
      description:
        'Senior specialists covering software engineering, AI agents, low-code delivery and cybersecurity.',
    });
  }
}
