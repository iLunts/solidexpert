import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './ui/header/header.component';
import { RouterModule } from '@angular/router';
import { route } from './routing';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    DevelopmentPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
