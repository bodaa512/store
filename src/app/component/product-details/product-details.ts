import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ProductService } from '../../service/product.service'
import { IProduct } from '../../models/iproduct'
import { CartService } from '../../service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html'
})

export class ProductDetailsComponent implements OnInit {

  product: IProduct | undefined

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.product = this.productService.getProductByID(id)
  }

  addToCart(prod: IProduct) {
    if (prod.quantity <= 0) {
      Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: 'error',
        title: 'Sorry, this item is out of stock!',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }

    prod.quantity--; // Decrement stock
    this.cartService.addToCart(prod);
    
    Swal.fire({
      toast: true,
      position: 'bottom-end',
      icon: 'success',
      title: `${prod.name} added to cart!`,
      showConfirmButton: false,
      timer: 1500
    });
  }

}