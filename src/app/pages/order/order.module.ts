import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderComponent } from './order.component';
import { orderRoutingModule } from './order.routing.module';
import { OrderItemComponent } from './order-item/order-item.component';

import { CartOrderService } from './services/cart-order.service';

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemComponent
  ],
  imports: [
    CommonModule,
    orderRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CartOrderService,
  ]
})
export class OrderModule { }
