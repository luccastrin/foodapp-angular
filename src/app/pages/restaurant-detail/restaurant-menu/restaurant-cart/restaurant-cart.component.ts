import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/restaurants/menu.model';

import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-restaurant-cart',
  templateUrl: './restaurant-cart.component.html',
  styleUrls: ['./restaurant-cart.component.scss']
})
export class RestaurantCartComponent implements OnInit {
  detailData: Menu[];

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
}
