import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.less']
})
export class ContactUsPageComponent implements OnInit {
  requestForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.requestForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', ],
      privacy: ['', Validators.requiredTrue],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.requestForm.controls; }

  onSubmit() {

    // stop here if form is invalid
    if (this.requestForm.invalid) {
      return;
    }

    alert('Thx!!! :-)');
    this.requestForm.reset();
  }
}
