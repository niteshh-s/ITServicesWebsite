import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceItem } from '../../../core/models/content.models';

@Component({
  imports: [RouterLink],
  selector: 'app-service-card',
  styleUrl: './service-card.scss',
  templateUrl: './service-card.html',
})
export class ServiceCard {
  readonly service = input.required<ServiceItem>();
  readonly index = input('01');
}
