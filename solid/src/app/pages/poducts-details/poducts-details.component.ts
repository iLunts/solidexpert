import {  Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-poducts-details',
  templateUrl: './poducts-details.component.html',
  styleUrls: ['./poducts-details.component.less']
})
export class PoductsDetailsComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta ) { }


  ngOnInit() {

    this.titleService.setTitle('Solid Products');

    this.meta.updateTag(
      { 
        name: 'description', 
        content: `A modern online services for your business` 
      }
      );
  }

}
