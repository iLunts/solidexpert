import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'development', component: DevelopmentPageComponent },
    { path: 'products', component: ProductsPageComponent },
    { path: 'projects', component: ProjectsPageComponent },
    { path: 'contact', component: ContactUsPageComponent }
    // { path: 'order', component: HomePageComponent, pathMatch: 'full' },
    // { path: '**', component: HomePageComponent },
];

export let route = RouterModule.forRoot(routes);
