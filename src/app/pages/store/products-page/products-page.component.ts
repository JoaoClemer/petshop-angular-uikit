import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/products.model';
import { DataService } from 'src/app/services/data.services';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {
  public products$: Observable<Product[]>;
  constructor(private data: DataService) {

  }
  ngOnInit() {
    this.products$ = this.data.getProducts();
  }

}
