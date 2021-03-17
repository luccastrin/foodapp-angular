import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants.rounting.module';
import { HttpClientModule } from '@angular/common/http';

import { RestaurantsService } from '../../shared/services/restaurant.service';

import { RestaurantsComponent } from './restaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantDetailComponent } from '../restaurant-detail/restaurant-detail.component';
import { RestaurantInformationComponent } from '../restaurant-detail/restaurant-information/restaurant-information.component';
import { RestaurantAddComponent } from '../restaurant-detail/restaurant-menu/restaurant-add/restaurant-add.component';
import { RestaurantCartComponent } from '../restaurant-detail/restaurant-menu/restaurant-cart/restaurant-cart.component';
import { RestaurantEvaluationComponent } from '../restaurant-detail/restaurant-evaluation/restaurant-evaluation.component';
import { RestaurantMenuComponent } from '../restaurant-detail/restaurant-menu/restaurant-menu.component';

@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    RestaurantInformationComponent,
    RestaurantAddComponent,
    RestaurantCartComponent,
    RestaurantEvaluationComponent,
    RestaurantMenuComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    HttpClientModule
  ],
  exports: [
    RestaurantsComponent,
    RestaurantComponent
  ],
  providers: [
    RestaurantsService,
  ]
})
export class RestaurantsModule { }
