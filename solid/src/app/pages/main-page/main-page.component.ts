import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {


  constructor(private titleService: Title, private meta: Meta ) { }

  ngOnInit() {

      this.titleService.setTitle('SolidExpert');

      this.meta.addTag(
        {
           name: 'description', 
          content: 'Softwear companny SolideExpert - Web & Mobile Custom Software with Core Expertise in CRM Development & Implementation.' 
        }
      );
  }


}
