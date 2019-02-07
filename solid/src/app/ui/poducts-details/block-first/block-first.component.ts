import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-block-first',
  templateUrl: './block-first.component.html',
  styleUrls: ['./block-first.component.less']
})
export class BlockFirstComponent implements OnInit {

 @Input() product;

  constructor() { }

  ngOnInit() {
  }

}
