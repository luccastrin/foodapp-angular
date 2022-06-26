import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/models/cart-item.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() detail: CartItem[];
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increaseQuantity(item) {
    this.increase.emit(item)
  }

  decreaseQuantity(item) {
    this.decrease.emit(item);
  }

  removeItem(item) {
    this.remove.emit(item);
  }

}
