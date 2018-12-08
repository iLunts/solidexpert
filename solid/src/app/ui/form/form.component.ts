import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  firstName = '';
  lastName = '';
  contactInfo_Phone_1 = '';
  contactInfo_Email_1 = '';
  message = '';
  company = '';
  constructor(protected http: HttpClient) { }

  ngOnInit() {
  }
  click() {

    const body = new HttpParams()
    //  .set('is_company',"false")
     .set('firstName', this.firstName)
     .set('lastName', this.lastName)
     .set('contactInfo_Phone_1', this.contactInfo_Phone_1)
     .set('contactInfo_Email_1', this.contactInfo_Email_1)
     .set('message', this.message)
     .set('company', this.company)
     .set('return_url', 'http://solidexpert.ltd')
     .set('web_form_key', '3a51d614-03b1-43b9-bca2-a3ff717ca08e')
     .set('notify_list', '61560477-f93c-11e8-94e2-6e81647443e7')
     .set('managers_list', '61560477-f93c-11e8-94e2-6e81647443e7,53a72559-aa04-4ae5-89e2-898cb8fc8f23')
     .set('share_type', '0');

      return this.http.post('http://office.solidexpert.ltd/products/crm/httphandlers/webtoleadfromhandler.ashx',
     body.toString(),
     {
       headers: new HttpHeaders()
         .set('Content-Type', 'application/x-www-form-urlencoded')
     }
   ).subscribe(x => {});
  }
}
