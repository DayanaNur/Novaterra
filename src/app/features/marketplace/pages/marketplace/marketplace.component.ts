import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {
  products = [
    {
      id: 1,
      name: 'Reusable Water Bottle',
      price: 15,
      ecoScore: 85
    },
    {
      id: 2,
      name: 'Bamboo Toothbrush',
      price: 5,
      ecoScore: 90
    }
  ];
}
