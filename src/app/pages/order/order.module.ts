import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { orderRoutingModule } from './order.routing.module';
import { OrderItemComponent } from './order-item/order-item.component';

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemComponent
  ],
  imports: [
    CommonModule,
    orderRoutingModule
  ]
})
export class OrderModule { }
