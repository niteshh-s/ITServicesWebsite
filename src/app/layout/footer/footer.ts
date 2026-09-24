import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Content } from '../../core/services/content';

@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  private readonly content = inject(Content);

  protected readonly companyName = this.content.companyName;
  protected readonly tagline = this.content.tagline;
  protected readonly services = this.content.services;
  protected readonly navLinks = this.content.navLinks;
  protected readonly contact = this.content.contact;
  protected readonly year = new Date().getFullYear();
}
