import { Injectable } from '@angular/core';
import { PRODUCTS } from './products-list';
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(shortcut: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.shortcut === shortcut));
  }
}

