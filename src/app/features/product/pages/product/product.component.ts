import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

@Component({
  standalone: true,
  template: `
    <h2>Product details</h2>
    <p>Eco score: 90</p>
    <p>Description...</p>
  `
})

export class ProductComponent {

}
