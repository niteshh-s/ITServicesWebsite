import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Content } from '../../core/services/content';
import { Seo } from '../../core/services/seo';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { ServiceCard } from '../../shared/components/service-card/service-card';

@Component({
  imports: [RouterLink, SectionHeading, ServiceCard, CtaBanner],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  private readonly content = inject(Content);

  protected readonly commitments = this.content.commitments;
  protected readonly services = this.content.services;
  protected readonly team = this.content.team;
  protected readonly process = this.content.process;
  protected readonly heroImage = this.content.defaultHeroImage;

  constructor() {
    inject(Seo).update({
      title: 'Software, AI, Low-Code & Security Specialists',
      description:
        'A three-person team of senior specialists covering custom software development, AI agents grounded in your business data, Power Platform delivery and cybersecurity.',
    });
  }
}
