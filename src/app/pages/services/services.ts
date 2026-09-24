import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Content } from '../../core/services/content';
import { Seo } from '../../core/services/seo';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';
import { PageHero } from '../../shared/components/page-hero/page-hero';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { ServiceCard } from '../../shared/components/service-card/service-card';
import { Reveal } from '../../shared/directives/reveal';

@Component({
  imports: [RouterLink, PageHero, SectionHeading, ServiceCard, CtaBanner, Reveal],
  selector: 'app-services',
  styleUrl: './services.scss',
  templateUrl: './services.html',
})
export class Services {
  protected readonly services = inject(Content).services;

  constructor() {
    inject(Seo).update({
      title: 'Services',
      description:
        'Custom software development, AI agents, Power Platform app delivery and cybersecurity services.',
    });
  }
}
