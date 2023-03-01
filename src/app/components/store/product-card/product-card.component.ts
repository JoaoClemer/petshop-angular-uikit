import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input() product: Product;

}
