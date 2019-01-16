import { Component, OnInit } from '@angular/core';
import { SPECIALIZATIONS } from './list-specialization';
import { DEVELOPERS } from './list-developers';
import { LEVELS } from './list-level';

@Component({
  selector: 'app-cv-list-page',
  templateUrl: './cv-list-page.component.html',
  styleUrls: ['./cv-list-page.component.less']
})
export class CvListPageComponent implements OnInit {

  developers = DEVELOPERS;
  specializations = SPECIALIZATIONS;
  levels = LEVELS ;

  totalCv = 50;

  constructor() {}

  ngOnInit() {}
}
