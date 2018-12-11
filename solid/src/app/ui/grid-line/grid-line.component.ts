import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-line',
  templateUrl: './grid-line.component.html',
  styleUrls: ['./grid-line.component.less']
})
export class GridLineComponent implements OnInit {

  @Input() count: any = 6;
  @Input() color: string = 'rgba(0, 0, 0, .1)';

  constructor() { }

  ngOnInit() {
  }

}
