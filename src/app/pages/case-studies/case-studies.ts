import { Component, inject } from '@angular/core';
import { Content } from '../../core/services/content';
import { Seo } from '../../core/services/seo';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';

@Component({
  imports: [CtaBanner],
  selector: 'app-case-studies',
  styleUrl: './case-studies.scss',
  templateUrl: './case-studies.html',
})
export class CaseStudies {
  protected readonly caseStudies = inject(Content).caseStudies;

  constructor() {
    inject(Seo).update({
      title: 'Case Studies',
      description: 'Real projects, measurable outcomes across retail, healthcare and logistics.',
    });
  }
}
