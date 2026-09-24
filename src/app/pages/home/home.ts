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
  protected readonly services = this.content.services;
  protected readonly heroImage = this.content.defaultHeroImage;
  protected readonly featuredCaseStudies = computed(() => this.content.caseStudies().slice(0, 3));

  protected readonly process = [
    {
      title: 'Discover',
      description:
        'Workshops to map the process, agree success measures and size the smallest valuable release.',
    },
    {
      title: 'Design',
      description:
        'Architecture options, prototypes and a costed delivery plan you can take to the board.',
    },
    {
      title: 'Build',
      description:
        'A dedicated squad shipping working software every two weeks, with tests in the pipeline.',
    },
    {
      title: 'Run',
      description:
        'Monitoring, support and a roadmap of improvements once the system is live.',
    },
  ];

  constructor() {
    inject(Seo).update({
      title: 'IT Services & Consulting',
      description:
        'App development, custom software, cloud, cybersecurity and managed IT services for growing businesses.',
    });
  }
}
