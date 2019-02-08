import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cv-generator-page',
  templateUrl: './cv-generator-page.component.html',
  styleUrls: ['./cv-generator-page.component.less']
})
export class CvGeneratorPageComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {

    this.titleService.setTitle('Solid CV-generator');

    this.meta.updateTag(
      {
        name: 'description',
        content: `CV-generator`
      }
      );
  }

}
