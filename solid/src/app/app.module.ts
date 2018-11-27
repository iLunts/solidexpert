import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './ui/header/header.component';
import { RouterModule } from '@angular/router';
import { route } from './routing';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SliderComponent } from './ui/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    DevelopmentPageComponent,
    SliderComponent
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
