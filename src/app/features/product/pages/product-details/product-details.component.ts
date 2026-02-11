import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../../../core/models/product.model';
import { CartService } from '../../../../core/services/cart.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
addToCart() {
  this.cartService.addToCart(this.product);
}

isInCart() {
  return this.cartService.isInCart(this.product.id);
}

  // временно — те же данные, что и в marketplace
  products: Product[] = [
  {
    id: 1,
    name: 'Reusable Water Bottle',
    description: 'Eco-friendly reusable bottle',
    price: 15,
    ecoScore: 85,
    category: 'Home',
    rating: 4.5,
    image: 'assets/products/bottle.jpeg'
  },
  {
    id: 2,
    name: 'Bamboo Toothbrush',
    description: 'Biodegradable toothbrush',
    price: 4,
    ecoScore: 92,
    category: 'Personal Care',
    rating: 4.8,
    image: 'assets/products/toothbrush.jpeg'
  },
  {
    id: 3,
    name: 'Reusable Shopping Bag',
    description: 'Durable eco shopping bag',
    price: 6,
    ecoScore: 88,
    category: 'Lifestyle',
    rating: 4.6,
    image: 'assets/products/bag.jpeg'
  }
];


  constructor(private route: ActivatedRoute , private cartService: CartService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id)!;
  }
}
