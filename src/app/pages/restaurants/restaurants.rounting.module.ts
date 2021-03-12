import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsComponent } from './restaurants.component';

const restaurantsRoutes: Routes = [
  { path: '', component: RestaurantsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(restaurantsRoutes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }