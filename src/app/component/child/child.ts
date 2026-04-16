import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardDirective } from '../../directives/directives';
import { IProduct } from '../../models/iproduct';
import productsData from '../../component/data/data';
import { CartService } from '../../service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardDirective],
  templateUrl: './child.html'
})
export class ChildComponent implements OnChanges {

  @Input() searchPrice: number | null = null;
  
  products: IProduct[] = productsData;
  filteredProducts: IProduct[] = [];
  selectedCategory: number | null = null;

  categories = [
    { id: null, name: 'All' },
    { id: 1, name: 'Clothing' },
    { id: 2, name: 'Gadgets' },
    { id: 3, name: 'Accessories' }
  ];

  constructor(private cartService: CartService) {}

  ngOnChanges() {
    this.applyFilters();
  }

  setCategory(catId: number | null) {
    this.selectedCategory = catId;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(p => {
      const matchPrice = (this.searchPrice === null || this.searchPrice === 0) ? true : p.price <= this.searchPrice;
      const matchCategory = (this.selectedCategory === null) ? true : p.categoryID === this.selectedCategory;
      return matchPrice && matchCategory;
    });
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

    prod.quantity--; // Decrement stock dynamically
    this.cartService.addToCart(prod);
    
    Swal.fire({
      toast: true,
      position: 'bottom-end',
      icon: 'success',
      title: `${prod.name} added!`,
      showConfirmButton: false,
      timer: 1500
    });
  }

}