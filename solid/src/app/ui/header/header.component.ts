import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
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
