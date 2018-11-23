import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' },

    // { path: 'order', component: HomePageComponent, pathMatch: 'full' },

    // { path: '**', component: HomePageComponent },
    { path: 'development', component: DevelopmentPageComponent }
];


export let route = RouterModule.forRoot(routes);
