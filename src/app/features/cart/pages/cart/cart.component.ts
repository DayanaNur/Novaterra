import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems$;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cart$;
  }

  increase(item: any) {
    this.cartService.increase(item.product.id);
  }

  decrease(item: any) {
    this.cartService.decrease(item.product.id);
  }

  remove(item: any) {
    this.cartService.remove(item.product.id);
  }

  clearCart() {
    this.cartService.clear();
  }

  getTotal() {
    return this.cartService.getTotal();
  }
}
