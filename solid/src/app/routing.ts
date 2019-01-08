import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
// import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';


const routes: Routes = [
    // { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'development', component: DevelopmentPageComponent },
    // { path: 'products', component: ProductsPageComponent },
    { path: 'products', component: ProductsListPageComponent },
    { path: 'services', component: ServicesPageComponent },
    { path: 'contact', component: ContactUsPageComponent },
    { path: '', component: MainPageComponent },
    // { path: 'order', component: HomePageComponent, pathMatch: 'full' },
    // { path: '**', component: HomePageComponent },
];

export let route = RouterModule.forRoot(routes);
