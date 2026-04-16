import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ChildComponent } from '../child/child'
import { IProduct } from '../../models/iproduct'
import { CartService, CartItem } from '../../service/cart.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './parent.html'
})
export class ParentComponent {

  searchPrice: number | null = null;
  cart$: Observable<CartItem[]>;
  total$: Observable<number>;

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.cart$;
    this.total$ = this.cartService.totalPrice$;
  }

  handleAddToCart(product: IProduct) {
    this.cartService.addToCart(product);
    
    // Tiny toast notification for CV flexing
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Added to cart',
      showConfirmButton: false,
      timer: 1500
    });
  }

  checkout() {
    Swal.fire({
      title: 'Processing Order...',
      text: 'Please wait while we secure your payment.',
      icon: 'info',
      timer: 2000,
      showConfirmButton: false,
      willClose: () => {
        this.cartService.clearCart();
        Swal.fire({
          title: 'Payment Successful!',
          text: 'Thank you for your purchase. Your premium products are on the way!',
          icon: 'success',
          confirmButtonText: 'Awesome'
        });
      }
    });
  }
}