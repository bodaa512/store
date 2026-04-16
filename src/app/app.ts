import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from './component/navbar/navbar';
import { FooterComponent } from './component/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="container my-4" style="flex: 1;">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class App { }