import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-list-page',
  templateUrl: './cv-list-page.component.html',
  styleUrls: ['./cv-list-page.component.less']
})
export class CvListPageComponent implements OnInit {
  developers = [
    {
      firstName: 'Jon',
      lastName: 'Guerrero',
      specialization: 'Android',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.`
    },
    {
      firstName: 'Sam',
      lastName: 'Shadel',
      specialization: 'Java',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book.`
    },
    {
      firstName: 'Martin',
      lastName: 'Fusco',
      specialization: '.Net',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book.`
    },
    {
      firstName: 'Jess',
      lastName: 'Bundy',
      specialization: 'Front End',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.`
    },
    {
      firstName: 'Nicko',
      lastName: 'Sarkisian',
      specialization: 'Designer',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.`
    },
    {
      firstName: 'Goddart',
      lastName: 'Krichmar',
      specialization: 'Sale manager',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.`
    },
    {
      firstName: 'Mill',
      lastName: 'Maalouf',
      specialization: 'Phyton',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.`
    },
    {
      firstName: 'Stearne',
      lastName: 'Ayling',
      specialization: 'JavaScript',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.`
    }
    {
      firstName: 'Jon',
      lastName: 'Guerrero',
      specialization: 'Android',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.`
    },
    {
      firstName: 'Sam',
      lastName: 'Shadel',
      specialization: 'Java',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book.`
    },
    {
      firstName: 'Martin',
      lastName: 'Fusco',
      specialization: '.Net',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book.`
    },
    {
      firstName: 'Jess',
      lastName: 'Bundy',
      specialization: 'Front End',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.`
    },
    {
      firstName: 'Nicko',
      lastName: 'Sarkisian',
      specialization: 'Designer',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.`
    },
    {
      firstName: 'Goddart',
      lastName: 'Krichmar',
      specialization: 'Sale manager',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.`
    },
    {
      firstName: 'Mill',
      lastName: 'Maalouf',
      specialization: 'Phyton',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.`
    },
    {
      firstName: 'Stearne',
      lastName: 'Ayling',
      specialization: 'JavaScript',
      Info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.`
    }
  ];

  constructor() {}

  ngOnInit() {}
}
