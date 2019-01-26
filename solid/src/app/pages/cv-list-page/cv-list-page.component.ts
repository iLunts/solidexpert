import { Developer } from './developer';
import { DevService } from './dev.service';
import { Component, OnInit } from '@angular/core';
import { SPECIALIZATIONS } from './list-specialization';

import { LEVELS } from './list-level';

@Component({
  selector: 'app-cv-list-page',
  templateUrl: './cv-list-page.component.html',
  styleUrls: ['./cv-list-page.component.less']
})
export class CvListPageComponent implements OnInit {

  totalCv = 77;
  developers: Developer[];
  specializations = SPECIALIZATIONS;
  levels = LEVELS ;

  isShowSearch = false;

  constructor(private devService: DevService) { }

  ngOnInit() {
    this.getDev();
  }

  getDev(): void {
    this.devService.getDev()
      .subscribe(developers => this.developers = developers);
  }

  showSearch() {
    if (this.isShowSearch) {
      this.isShowSearch = false;
    } else {
      this.isShowSearch = true;
    }
  }
}
