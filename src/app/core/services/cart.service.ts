import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

addToCart(product: Product) {
  const exists = this.items.some(i => i.product.id === product.id);

  if (!exists) {
    this.items.push({ product, quantity: 1 });
    this.cartSubject.next([...this.items]);
  }
}
isInCart(productId: number): boolean {
  return this.items.some(i => i.product.id === productId);
}


  remove(productId: number) {
    this.items = this.items.filter(i => i.product.id !== productId);
    this.cartSubject.next([...this.items]);
  }

  increase(productId: number) {
    const item = this.items.find(i => i.product.id === productId);
    if (item) item.quantity++;
    this.cartSubject.next([...this.items]);
  }

  decrease(productId: number) {
    const item = this.items.find(i => i.product.id === productId);
    if (item && item.quantity > 1) item.quantity--;
    this.cartSubject.next([...this.items]);
  }

  clear() {
    this.items = [];
    this.cartSubject.next([]);
  }

  getTotal(): number {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  getCount(): number {
    return this.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }
}
