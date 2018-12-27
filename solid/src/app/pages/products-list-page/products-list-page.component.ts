import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.less']
})
export class ProductsListPageComponent implements OnInit {

  productList=[
    {
      title: 'PRODUCTS',
      subtitle: 'Are you tired of switching between your email client, excel file, calendar and phone in the course of one interaction? This is where CRM comes into play.',
      text: 'To date, customer relations management (CRM) continues to be one of the most powerful tools for business automation. A well-tailored customized CRM system centralizes your communication in one place and gives you an advantage to manage all pipeline in a more efficient way.',
      background_image: 'https://sevenstars.nl/assets/img/wemakeitspark/image06.jpg',
    },
    {
      title: 'SolidExCRM.com',
      subtitle: 'CRM for your business',
      text: '',
      background_image: 'https://sevenstars.nl/assets/img/wemakeitspark/image02.jpg',
    },
    {
      title: 'Ineedatractor.com',
      subtitle: 'A modern online service and a mobile application to rent construction equipment and specialized vehicles.',
      text: '',
      background_image: '/assets/img/product-list/ineedatractor.jpg',
    },
    // {
    //   title: '',
    //   subtitle: '',
    //   text: '',
    //   background_image: '',
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

}
