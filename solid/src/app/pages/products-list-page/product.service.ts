import { Injectable } from '@angular/core';
import { PRODUCTS } from './products-list';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(shortcut: any): Observable<Product> {
    return of(PRODUCTS.find(product => product.shortcut === shortcut));
  }
}
