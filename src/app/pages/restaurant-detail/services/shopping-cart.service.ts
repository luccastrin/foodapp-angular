import { Injectable } from '@angular/core';
import { Menu } from 'src/app/shared/models/restaurants/menu.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  detailArr: CartItem[] = [];

  constructor() { }

  addDetail(detail: Menu) {
    let foundItem = this.detailArr.find(item => detail.id === item.menuItem.id);
    if (foundItem) {
      console.log('ooooooo');
      this.increaseQuantity(foundItem)
    } else {
      console.log('aaaaaaaa');
      this.detailArr.push(new CartItem(detail));
    }
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
  }

  total(): number {
    return this.detailArr
      .map(item => item.menuItem.price)
      .reduce((acc, curVal) => acc + curVal, 0)
  }

  clear() {
    return this.detailArr = [];
  }
}
