import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  isShowMenu = false;

  constructor(protected router: Router) {
    this.router.events.subscribe( x => {
      this.isShowMenu = false;
    });
   }

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
