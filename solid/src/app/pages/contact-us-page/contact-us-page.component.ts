import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.less']
})
export class ContactUsPageComponent implements OnInit {
  requestForm: FormGroup;

  userName = '';
  userPhone = '';
  userEmail = '';
  userMessage = '';

  constructor(private formBuilder: FormBuilder, protected http: HttpClient) {}

  ngOnInit() {
    this.requestForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userMessage: [''],
      telephone: [''],
      privacy: ['', Validators.requiredTrue]
    });
  }

  // convenience getter for easy access to form fields
  get f() : any {
    return this.requestForm.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.requestForm.invalid) {
      return;
    }

    alert('Thanks alot');
    this.requestForm.reset();
  }

  send() {

    const value = this.requestForm.value;

    console.log(value);

    const arr = value.name.split(' ');

    let firstName = '';
    let lastName = '';
    if (arr.length > 1) {
      firstName = arr[0];
      lastName = arr[1];
    } else {
      firstName = arr[0];
      lastName = '';
    }

    const body = new HttpParams()
      .set('is_company', 'false')
      .set('firstName', firstName)
      .set('lastName', lastName)
      .set('contactInfo_Phone_1', value.telephone)
      .set('contactInfo_Email_1', value.email)
      .set('message', this.userMessage)
      .set('return_url', 'http://solidexpert.ltd')
      .set('web_form_key', '3a51d614-03b1-43b9-bca2-a3ff717ca08e')
      .set('notify_list', '61560477-f93c-11e8-94e2-6e81647443e7')
      .set(
        'managers_list',
        '61560477-f93c-11e8-94e2-6e81647443e7,53a72559-aa04-4ae5-89e2-898cb8fc8f23'
      )
      .set('share_type', '0');

    return this.http
      .post(
        'http://office.solidexpert.ltd/products/crm/httphandlers/webtoleadfromhandler.ashx',
        body.toString(),
        {
          headers: new HttpHeaders().set(
            'Content-Type',
            'application/x-www-form-urlencoded'
          )
        }
      )
      .subscribe(x => {});
  }
}
