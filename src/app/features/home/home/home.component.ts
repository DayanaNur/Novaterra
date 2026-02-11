import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { Product } from '../../../core/models/product.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent , RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {

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


}
