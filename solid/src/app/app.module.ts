import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { CvGeneratorPageComponent } from './pages/cv-generator-page/cv-generator-page.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SliderComponent } from './ui/slider/slider.component';
import { FormComponent } from './ui/form/form.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { route } from './routing';
import { ButtonFormComponent } from './ui/button-form/button-form.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavComponent } from './ui/nav/nav.component';
import { GridLineComponent } from './ui/grid-line/grid-line.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    DevelopmentPageComponent,
    ProductsPageComponent,
    ServicesPageComponent,
    ContactUsPageComponent,
    CvGeneratorPageComponent,
    SliderComponent,
    FooterComponent,
    FormComponent,
    ButtonFormComponent,
    MainPageComponent,
    NavComponent,
    GridLineComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    route,
    CarouselModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
