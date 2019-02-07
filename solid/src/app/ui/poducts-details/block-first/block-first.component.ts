import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgwWowService } from 'ngx-wow';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-block-first',
  templateUrl: './block-first.component.html',
  styleUrls: ['./block-first.component.less']
})
export class BlockFirstComponent implements OnInit {


  private wowSubscription: Subscription;

  constructor(private router: Router, private wowService: NgwWowService) {
    this.router.events.pipe (filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init();

    });

  }

  ngOnInit() {
    // you can subscribe to WOW observable to react when an element is revealed
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item: HTMLElement) => {
        // do whatever you want with revealed element
      });
  }

  // ngOnDestroy() {
  //   // unsubscribe (if necessary) to WOW observable to prevent memory leaks
  //   this.wowSubscription.unsubscribe();
  // }


}
