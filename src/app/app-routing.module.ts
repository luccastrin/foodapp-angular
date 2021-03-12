import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'restaurant-detail',
    loadChildren: () => import('./pages/restaurant-detail/restaurant-detail.module').then(m => m.RestaurantDetailModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./pages/restaurants/restaurants.module').then(m => m.RestaurantsModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
