import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.less']
})
export class ServicesPageComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta ) { }


  ngOnInit() {

    this.titleService.setTitle('Solid Services');

    this.meta.updateTag(
      {
        name: 'description',
        content: `We make apps that easily integrate with what people need and expect from a trusted
        digital product. Our team is experiences to support you with both native or cross-platform mobile
        development.`
      }
    );
  }
}
