import { Developer } from './developer';
import { DevService } from './dev.service';
import { Component, OnInit } from '@angular/core';
import { SPECIALIZATIONS } from './list-specialization';

import { LEVELS } from './list-level';
import { Title, Meta } from '@angular/platform-browser';

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

  constructor(private devService: DevService, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.getDev();

    this.titleService.setTitle('Solid Developers');

    this.meta.updateTag(
      {
        name: 'description',
        content: `Free developers`
      }
      );
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
