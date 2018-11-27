import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})

export class SliderComponent implements OnInit {

  slides = [
    {image: 'assets/img/page-dev/dev-slide-1.jpg',
     index: 1,
     text: 'Slide--1'},
    {image: 'assets/img/page-dev/dev-slide-2.jpg',
     index: 2,
     text: 'Slide--2'},
    {image: 'assets/img/page-dev/dev-slide-3.jpg',
     index: 3,
     text: 'Slide--3'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
