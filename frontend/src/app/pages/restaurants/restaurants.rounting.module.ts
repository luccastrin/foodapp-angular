import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantDetailComponent } from '../restaurant-detail/restaurant-detail.component';
import { RestaurantEvaluationComponent } from '../restaurant-detail/restaurant-evaluation/restaurant-evaluation.component';
import { RestaurantMenuComponent } from '../restaurant-detail/restaurant-menu/restaurant-menu.component';
import { RestaurantsComponent } from './restaurants.component';

const restaurantsRoutes: Routes = [
  {
    path: '',
    component: RestaurantsComponent,
  },
  {
    path: 'restaurant-detail/:id',
    component: RestaurantDetailComponent,
    children: [
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      },
      {
        path: 'menu',
        component: RestaurantMenuComponent
      },
      {
        path: 'evaluation',
        component: RestaurantEvaluationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(restaurantsRoutes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }