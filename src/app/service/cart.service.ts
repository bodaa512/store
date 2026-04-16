import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/iproduct';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  
  // BehaviorSubjects allow components to subscribe to the latest value instantly
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  private totalItemsSubject = new BehaviorSubject<number>(0);
  private totalPriceSubject = new BehaviorSubject<number>(0);

  cart$ = this.cartSubject.asObservable();
  totalItems$ = this.totalItemsSubject.asObservable();
  totalPrice$ = this.totalPriceSubject.asObservable();

  constructor() { }

  addToCart(product: IProduct) {
    const itemIndex = this.cartItems.findIndex(p => p.id === product.id);
    
    if (itemIndex > -1) {
      this.cartItems[itemIndex].qty++;
      this.cartItems[itemIndex].total = this.cartItems[itemIndex].qty * this.cartItems[itemIndex].price;
    } else {
      this.cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1,
        total: product.price
      });
    }
    
    this.updateState();
  }

  clearCart() {
    this.cartItems = [];
    this.updateState();
  }

  private updateState() {
    this.cartSubject.next([...this.cartItems]);
    
    const count = this.cartItems.reduce((acc, item) => acc + item.qty, 0);
    this.totalItemsSubject.next(count);
    
    const price = this.cartItems.reduce((acc, item) => acc + item.total, 0);
    this.totalPriceSubject.next(price);
  }
}
