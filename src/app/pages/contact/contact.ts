import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Content } from '../../core/services/content';
import { Seo } from '../../core/services/seo';
import { PageHero } from '../../shared/components/page-hero/page-hero';

@Component({
  imports: [ReactiveFormsModule, PageHero],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  protected readonly contact = inject(Content).contact;
  protected readonly services = inject(Content).services;
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    service: [''],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  constructor() {
    inject(Seo).update({
      title: 'Contact',
      description: 'Get in touch to discuss your project, support needs or IT roadmap.',
    });
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // No backend yet - wire this up to a form service (Formspree, Azure Function, etc.).
    this.submitted.set(true);
    this.form.reset();
  }

  protected invalid(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && (control.touched || control.dirty);
  }
}
