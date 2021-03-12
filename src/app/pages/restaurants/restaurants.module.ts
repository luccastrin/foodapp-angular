import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants.rounting.module';

import { RestaurantsComponent } from './restaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule
  ],
  exports: [
    RestaurantsComponent
  ]
})
export class RestaurantsModule { }
