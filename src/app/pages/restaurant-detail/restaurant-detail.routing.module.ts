import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantDetailComponent } from './restaurant-detail.component';
import { RestaurantEvaluationComponent } from './restaurant-evaluation/restaurant-evaluation.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';

const restaurantDetailRoutes: Routes = [
  {
    path: '',
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
  imports: [RouterModule.forChild(restaurantDetailRoutes)],
  exports: [RouterModule]
})
export class RestaurantDetailRoutingModule { }
