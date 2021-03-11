import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RestaurantsComponent } from './restaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RestaurantsComponent
  ]
})
export class RestaurantsModule { }
