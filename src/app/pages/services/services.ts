import { Component, inject } from '@angular/core';
import { Content } from '../../core/services/content';
import { Seo } from '../../core/services/seo';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { ServiceCard } from '../../shared/components/service-card/service-card';

@Component({
  imports: [SectionHeading, ServiceCard, CtaBanner],
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
        'Cloud, managed IT, cybersecurity, software development, data and consulting services.',
    });
  }
}
