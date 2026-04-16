import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: []
})
export class NavbarComponent {
  totalItems$: Observable<number>;

  constructor(private cartService: CartService) {
    this.totalItems$ = this.cartService.totalItems$;
  }
}
