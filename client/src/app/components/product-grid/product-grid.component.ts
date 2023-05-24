import { Component } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent {
  books: any[] = [
    { author:'Author', name: 'book 1', price: '$19.99', imageUrl: 'https://placehold.co/200x200' },
    { author:'Author', name: 'book 2', price: '$29.99', imageUrl: 'https://placehold.co/200x200' },
    { author:'Author', name: 'book 3', price: '$39.99', imageUrl: 'https://placehold.co/200x200' },
    { author:'Author', name: 'book 3', price: '$39.99', imageUrl: 'https://placehold.co/200x200' },
    // Add more products as needed
  ];
}
