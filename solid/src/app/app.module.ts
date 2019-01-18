
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { route } from './routing';
import { ButtonFormComponent } from './ui/button-form/button-form.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavComponent } from './ui/nav/nav.component';
import { GridLineComponent } from './ui/grid-line/grid-line.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
<<<<<<< HEAD
import { CvListPageComponent } from './pages/cv-list-page/cv-list-page.component';
import { Ng2StickyModule } from 'ng2-sticky';
=======
import { CvPreviewComponent } from './pages/cv-preview/cv-preview.component';
import { CvHeaderComponent } from './pages/cv-preview/cv-header/cv-header.component';
import { CvFooterComponent } from './pages/cv-preview/cv-footer/cv-footer.component';
import { CvBodyComponent } from './pages/cv-preview/cv-body/cv-body.component';
>>>>>>> feature/cv-generator-page



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
    ProductsListPageComponent,
<<<<<<< HEAD
    CvListPageComponent
=======
    CvPreviewComponent,
    CvHeaderComponent,
    CvFooterComponent,
    CvBodyComponent,
>>>>>>> feature/cv-generator-page
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    route,
    CarouselModule.forRoot(),
    InlineSVGModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule.forRoot(),
    Ng2StickyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
