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
      mention: `A few years ago we decided to improve our business with the help of modern technologies.
       We investigated  different solutions on the market, but no one  product fully satisfied us until we
       found a solution from the SolidExpert. That was exactly what we were looking for. This is truly the
       best solution for our business segment!`,
      name: 'Joe Spencer',
      position: 'Director',
      company: 'PhotoBrief',
      logoPath: '/assets/svg/main-gallery/photobrief.svg'
    },
    {
      mention:
      `Collaboration with SolidExpert has been a very productive and satisfying experience for us.
      They have shown technical competence, business domain expertise and also a real understanding of our needs.
      With that understanding, they have been able to develop CRM system, that really helps our business to grow.
      Technical support is always in touch and ready to help in any difficult situation. We hope for further successful
      work with SolidExpert.`,
      name: 'Marvin Gutierrez',
      position: 'Manager',
      company: 'SolidEx CRM',
      logoPath: '/assets/svg/main-gallery/logo-gray.svg'
    },
    {
      mention:
      `We strongly recommend SolidExpert to anyone looking to develop a complex project.
       Besides being experts in web development, their team is very experienced, reliable and hard-working and will
       do their best to help customers to embody their expectations into the best solutions.
       We really enjoyed working with the company that strives to meet the needs of their customers.
       We will definitely work with SolidExpert at the same software development projects in the future.`,
      name: 'Fernando Sullivan',
      position: 'Chief',
      company: 'SalesInteract',
      logoPath: '/assets/img/main-gallery/salesinteract.png'
    },
    {
      mention:
      `We made the right decision when seeked to SolidExpert. They are competent, professional,
       meet deadlines and react flexibly to changing project requirements. We highly recommend this company.`,
      name: 'Ekaterina',
      position: 'Project Manager',
      company: 'ABW.by',
      logoPath: '/assets/img/main-gallery/abw.png'
    },
    {
      mention:
      `SolidExpert  has proved to be excellent. We were impressed by the qualifications and skills
       of their specialists. The SolidExpert team  helped us to improve our business and meet the needs and requirements of our customers.`,
      name: 'Koen',
      position: 'Project Manager',
      company: 'joinUz.nl',
      logoPath: '/assets/svg/main-gallery/joinuz.svg'
    },
  ];

  constructor() {}

  ngOnInit() {}
}
