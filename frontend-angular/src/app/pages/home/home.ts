import { Component } from '@angular/core';
import { DashBoard } from '../../components/dash-board/dash-board';

@Component({
  selector: 'app-home',
  imports: [DashBoard],
  template: `
    <section class="h-full pt-12 sm:pt-3">
      <app-dash-board />
    </section>
  `,
})
export class Home {}
