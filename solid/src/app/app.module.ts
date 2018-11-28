import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './ui/header/header.component';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SliderComponent } from './ui/slider/slider.component';
import { RouterModule } from '@angular/router';
import { route } from './routing';
import { CvGeneratorPageComponent } from './pages/cv-generator-page/cv-generator-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    DevelopmentPageComponent,
    SliderComponent,
    ProductsPageComponent,
    ProjectsPageComponent,
    ContactUsPageComponent,
    CvGeneratorPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    route,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
