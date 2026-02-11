import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,          // ⬅⬅⬅ ВОТ ЭТО БЫЛО ПРОПУЩЕНО
    ProductCardComponent
  ],
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})

export class MarketplaceComponent {

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


  // ===== FILTERS =====
  searchTerm: string = '';
  selectedCategory: string = '';
  minEcoScore: number = 0;

 get categories(): string[] {
  return [
    ...new Set(
      this.products
        .map(p => p.category)
        .filter((c): c is string => !!c)
    )
  ];
}


  // ===== FILTERED PRODUCTS =====
  get filteredProducts(): Product[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory ? product.category === this.selectedCategory : true) &&
      product.ecoScore >= this.minEcoScore
    );
  }
}
