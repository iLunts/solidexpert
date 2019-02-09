import {  Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../products-list-page/product';
import { ProductService } from '../products-list-page/product.service';



@Component({
  selector: 'app-poducts-details',
  templateUrl: './poducts-details.component.html',
  styleUrls: ['./poducts-details.component.less']
})
export class PoductsDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private prodctService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();

    console.log ('oninit', this.product);
  }

  getProduct(): void {
    const shortcut = +this.route.snapshot.paramMap.get('shortcut');
    this.prodctService.getProduct(shortcut)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }
}
