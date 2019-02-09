//import { RouterModule, Routes } from '@angular/router';
import { Routes } from '@angular/router';

import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {PortafolioComponent} from './components/portafolio/portafolio.component';

export const APP_ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'portafolio/:id', component: PortafolioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash: false});
