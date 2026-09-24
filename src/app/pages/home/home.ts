import { Component, computed, inject } from '@angular/core';
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

  protected readonly stats = this.content.stats;
  protected readonly testimonials = this.content.testimonials;
  protected readonly featuredServices = computed(() => this.content.services().slice(0, 6));
  protected readonly featuredCaseStudies = computed(() => this.content.caseStudies().slice(0, 3));

  constructor() {
    inject(Seo).update({
      title: 'IT Services & Consulting',
      description:
        'Cloud, cybersecurity, managed IT and custom software services for growing businesses.',
    });
  }
}
