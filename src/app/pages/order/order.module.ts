import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { orderRoutingModule } from './order.routing.module';

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    orderRoutingModule
  ]
})
export class OrderModule { }
