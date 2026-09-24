import { Service, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BRAND } from '../brand';

export interface PageMeta {
  title: string;
  description?: string;
  image?: string;
}

@Service()
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  update({ title, description, image }: PageMeta): void {
    const fullTitle = `${title} | ${BRAND.name}`;
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ property: 'og:site_name', content: BRAND.name });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });

    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ name: 'twitter:description', content: description });
    }

    if (image) {
      this.meta.updateTag({ property: 'og:image', content: image });
      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    }
  }
}
