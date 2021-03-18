import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/restaurants/menu.model';

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
    // console.log(this.shoppingCartService.detailArr)
    return this.shoppingCartService.detailArr;
  }

  totalDetailPrice() {
    console.log(this.shoppingCartService.total());
    return this.shoppingCartService.total();
  }

  clearDetailPrice() {
    return this.shoppingCartService.clear();
  }
}
