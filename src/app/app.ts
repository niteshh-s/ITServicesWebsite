import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

/** Height of the sticky header plus the service-page sub-navigation bar. */
const STICKY_OFFSET = 132;

@Component({
  imports: [RouterOutlet, RouterLink, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  constructor() {
    // Router anchor scrolling uses window.scrollTo, which ignores CSS scroll-margin.
    inject(ViewportScroller).setOffset([0, STICKY_OFFSET]);
  }
}
