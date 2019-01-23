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
      We investigated different companies in the market, but we were hesitating about the partnership with
      anybody we had on our checklist till we came across SolidExpert. It was exactly what we were looking
      for since they delivered the product meeting all our expectations. We do recommend SolidExpert as a
      trusted, reliable and initiative company able to solve non-routine tasks and build mission-critical
      apps.`,
      name: 'Joe Spencer,',
      position: 'IT Director',
      company: 'PhotoBrief',
      logoPath: '/assets/svg/main-gallery/photobrief.svg'
    },
    {
      mention:
      `Initially, we reached out to SolidExpert for assistance with CRM system, and very quickly realized
      that they are a trustworthy business partner. They have demonstrated both technical competence and
      business domain knowledge. With that expertise, they have been able to develop a CRM system with the
      functionality that helps our company to grow. We have been very happy with the results of their work
      and recommended them as a well-qualified and competent entity able to build a custom CRM system of
      any complexity.`,
      name: 'Marvin Gutierrez,',
      position: 'IT Manager',
      company: 'SolidEx CRM',
      logoPath: '/assets/svg/main-gallery/logo-gray.svg'
    },
    {
      mention:
      `We strongly recommend SolidExpert to anyone looking to develop a complex project.
      The management of their team is professional and the skills of those we worked with were beyond
      expectations. Knowing this, we were very comfortable with the flexibility of scaling up as needed,
      and expanding into other technologies. We are pleased to work with SolidExpert and plan to collaborate with them further.`,
      name: 'Fernando Sullivan,',
      position: 'CIO',
      company: 'SalesInteract',
      logoPath: '/assets/img/main-gallery/salesinteract.png'
    },
    {
      mention:
      `Cooperation with SolidExpert has been a very productive and satisfying experience for us.
      We appreciate their proactive approach and ability to suggest improvements to a prospective
      solution on both technical and business levels. At every stage SolidExpert have proven to be
      a highly professional, qualified and dedicated team. We highly recommend SolidExpert to any
      company looking for a dependable partner.`,
      name: 'Ekaterina Peryshkova,',
      position: 'Project Manager',
      company: 'ABW.by',
      logoPath: '/assets/img/main-gallery/abw.png'
    },
    {
      mention:
      `Many words come to my mind when considering the partnership with SolidExpert, but i think that the
       key point that gravitated us towards them is their being clientele-focused. Their team evaluated
       our vision, our product, asked spot-on questions.....i was immersed in real collaboration. What
       began as a trial relationship has evolved into an ongoing partnership that will continue growing.`,
      name: 'Kohen Lendon,',
      position: 'Team Lead',
      company: 'joinUz.nl',
      logoPath: '/assets/svg/main-gallery/joinuz.svg'
    },
  ];

  constructor() {}

  ngOnInit() {}
}
