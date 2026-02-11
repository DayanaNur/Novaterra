import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

  // 👇 ВСТАВИТЬ СЮДА
  constructor(private cartService: CartService) {}

  // 👇 И ЭТО СЮДА
  addToCart() {
    this.cartService.addToCart(this.product);
  }
isInCart(): boolean {
  return this.cartService.isInCart(this.product.id);
}


}
