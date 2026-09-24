import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Content } from '../../core/services/content';
import { Seo } from '../../core/services/seo';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { ServiceCard } from '../../shared/components/service-card/service-card';
import { Reveal } from '../../shared/directives/reveal';

@Component({
  imports: [RouterLink, SectionHeading, ServiceCard, CtaBanner, Reveal],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  private readonly content = inject(Content);

  protected readonly commitments = this.content.commitments;
  protected readonly services = this.content.services;
  protected readonly process = this.content.process;
  protected readonly heroImage = this.content.defaultHeroImage;

  protected readonly reasons = [
    {
      title: 'Senior engineers on your project',
      body: 'The people who scope the work are the people who deliver it. Nothing gets quietly reassigned to whoever is on the bench.',
    },
    {
      title: 'Fixed-price discovery first',
      body: 'We will not quote a build before we understand the problem. Discovery is scoped and priced up front, and the output is yours either way.',
    },
    {
      title: 'You own everything we build',
      body: 'Source code, infrastructure definitions and cloud accounts are in your name from day one. There is no lock-in to leave.',
    },
    {
      title: 'Security is not an afterthought',
      body: 'Threat modelling, access control and audit are designed in from the start, whether the project is an application or an AI agent.',
    },
  ];

  constructor() {
    inject(Seo).update({
      title: 'Software, AI, Low-Code & Security Specialists',
      description:
        'Web and mobile application development, AI agents grounded in your business data, and cybersecurity services.',
    });
  }
}
