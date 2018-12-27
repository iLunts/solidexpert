import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less'],
  encapsulation: ViewEncapsulation.None
})


export class SliderComponent implements OnInit {
  slides = [
    {
      mention: `It is a long established fact that a reader will be distracted by the readable content
      of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
      more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
      making it look like readable English. Many desktop publishing packages and web page editors now
      use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
      sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).`,
      name: 'Joe Spencer',
      position: 'Director',
      company: 'PhotoBrief',
      logoPath: '/assets/svg/main-gallery/photobrief.svg'
    },
    {
      mention:
      ` It is a long established fact that a reader will be distracted by the readable content
      of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
      more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
      making it look like readable English. `,
      name: 'Marvin Gutierrez',
      position: 'Manager',
      company: 'SolidEx CRM',
      logoPath: '/assets/svg/main-gallery/logo-gray.svg'
    },
    {
      mention:
      ` Many desktop publishing packages and web page editors now
      use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
      sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).
      It is a long established fact that a reader will be distracted by the readable content
      of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
      more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
      making it look like readable English. `,
      name: 'Fernando Sullivan',
      position: 'Chief',
      company: 'SalesInteract',
      logoPath: '/assets/img/main-gallery/salesinteract.png'
    },
    {
      mention:
        ` It is a long established fact that a reader will be distracted by the readable content
      of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
      more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
      making it look like readable English. `,
      name: 'Ekaterina',
      position: 'Project Manager',
      company: 'ABW.by',
      logoPath: '/assets/img/main-gallery/abw.png'
    },
    {
      mention:
        ` It is a long established fact that a reader will be distracted by the readable content
      of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
      more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
      making it look like readable English. `,
      name: 'Koen',
      position: 'Project Manager',
      company: 'joinUz.nl',
      logoPath: '/assets/svg/main-gallery/joinuz.svg'
    },
  ];

  constructor() {}

  ngOnInit() {}
}
