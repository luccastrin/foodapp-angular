import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantDetailRoutingModule } from './restaurant-detail.routing.module';

import { RestaurantDetailComponent } from './restaurant-detail.component';
import { RestaurantInformationComponent } from './restaurant-information/restaurant-information.component';
import { RestaurantAddComponent } from './restaurant-menu/restaurant-add/restaurant-add.component';
import { RestaurantCartComponent } from './restaurant-menu/restaurant-cart/restaurant-cart.component';
import { RestaurantEvaluationComponent } from './restaurant-evaluation/restaurant-evaluation.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';

@NgModule({
  declarations: [
    RestaurantDetailComponent,
    RestaurantInformationComponent,
    RestaurantAddComponent,
    RestaurantCartComponent,
    RestaurantEvaluationComponent,
    RestaurantMenuComponent
  ],
  imports: [
    CommonModule,
    RestaurantDetailRoutingModule
  ],
  exports: [
    RestaurantDetailComponent,
    RestaurantInformationComponent,
    RestaurantAddComponent,
    RestaurantCartComponent,
    RestaurantEvaluationComponent,
    RestaurantMenuComponent
  ]
})
export class RestaurantDetailModule { }
