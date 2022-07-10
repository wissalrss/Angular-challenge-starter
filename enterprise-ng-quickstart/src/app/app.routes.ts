import { OccupancyComponent } from './statistics/occupancy/occupancy.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutDemoComponent } from './about/about.demo';

import { HomePageDemoComponent } from './homepage/homepage.demo';



export const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }, // default
  { path: 'about', component: AboutDemoComponent },
  { path: 'homepage', component: HomePageDemoComponent },
  { path: 'occupancy', component: OccupancyComponent }, //Occupancy route 
];

/**
 * To test the application using the hashing routing strategy, swap the two lines below.
 */
// export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
