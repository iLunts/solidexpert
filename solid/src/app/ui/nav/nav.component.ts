import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  isShowMenu = false;

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    if (this.isShowMenu) {
      this.isShowMenu = false;
    } else {
      this.isShowMenu = true;
    }
  }

}
