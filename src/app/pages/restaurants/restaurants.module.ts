import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RestaurantsComponent } from './restaurants.component';

@NgModule({
  declarations: [
    RestaurantsComponent
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
