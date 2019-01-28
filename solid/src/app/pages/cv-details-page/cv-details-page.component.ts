import { Developer } from './../cv-list-page/developer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DevService } from '../cv-list-page/dev.service';

@Component({
  selector: 'app-cv-details-page',
  templateUrl: './cv-details-page.component.html',
  styleUrls: ['./cv-details-page.component.less']
})
export class CvDetailsPageComponent implements OnInit {

  developer: Developer;

  constructor(
    private route: ActivatedRoute,
    private heroService: DevService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDevId();
  }

  getDevId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getDevId(id)
      .subscribe(developer => this.developer = developer);
  }

  goBack(): void {
    this.location.back();
  }

}
