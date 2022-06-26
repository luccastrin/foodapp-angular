import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-restaurant-cart',
  templateUrl: './restaurant-cart.component.html',
  styleUrls: ['./restaurant-cart.component.scss']
})
export class RestaurantCartComponent implements OnInit {

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.getDetailFromSibling();
  }

  getDetailFromSibling() {
    return this.shoppingCartService.detailArr;
  }

  totalDetailPrice() {
    return this.shoppingCartService.total();
  }

  clearDetailPrice() {
    return this.shoppingCartService.clear();
  }

  decrease(item) {
    return this.shoppingCartService.decreaseQuantityCart(item);
  }

  deleteItem(item) {
    return this.shoppingCartService.removeItem(item)
  }
}
