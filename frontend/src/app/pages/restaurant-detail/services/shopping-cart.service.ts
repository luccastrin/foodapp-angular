import { Injectable } from '@angular/core';
import { Menu } from 'src/app/shared/models/restaurants/menu.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  detailArr: CartItem[] = [];

  constructor() {
  }

  addDetail(detail: Menu) {
    let foundItem = this.detailArr.find(item => detail.id === item.menuItem.id);
    if (foundItem) {
      this.increaseQuantity(foundItem);
    } else {
      this.detailArr.push(new CartItem(detail));
    }
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem) {
    item.quantity--;
  }

  decreaseQuantityCart(item: CartItem) {
    if (item.quantity <= 1) {
      this.detailArr.splice(this.detailArr.indexOf(item), 1)
    } else {
      item.quantity--;
    }
  }

  removeItem(item: CartItem) {
    this.detailArr.splice(this.detailArr.indexOf(item), 1);
  }

  total() {
    return this.detailArr
      .map(item => item.quantity * item.menuItem.price)
      .reduce((acc, curVal) => acc + curVal, 0)
  }

  clear() {
    return this.detailArr = [];
  }
}
