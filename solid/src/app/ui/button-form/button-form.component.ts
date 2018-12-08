import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-form',
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.less']
})
export class ButtonFormComponent implements OnInit {
  isShownForm = false;

  constructor() { }

  ngOnInit() {
  }

  shownForm() {
    if (this.isShownForm) {
      this.isShownForm = false;
    } else {
      this.isShownForm = true;
    }
  }

}
