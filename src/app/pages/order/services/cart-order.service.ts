import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'src/app/pages/restaurant-detail/services/shopping-cart.service';

@Injectable({ providedIn: 'root' })
export class CartOrderService {

  constructor(private shoppingCartService: ShoppingCartService) { }

  getDetailArr() {
    return this.shoppingCartService.detailArr;
  }

  getIncreaseQuantity(item) {
    return this.shoppingCartService.increaseQuantity(item)
  }

  getDrecreaseQuantity(item) {
    return this.shoppingCartService.decreaseQuantity(item);
  }

  getRemoveItem(item) {
    return this.shoppingCartService.removeItem(item)
  }

  getTotal() {
    return this.shoppingCartService.total();
  }
}