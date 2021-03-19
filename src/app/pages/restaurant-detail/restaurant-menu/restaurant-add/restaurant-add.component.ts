import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from 'src/app/shared/models/restaurants/menu.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.scss']
})
export class RestaurantAddComponent implements OnInit {
  @Input() menuDetail: Menu;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addingDataToCart() {
    this.shoppingCartService.addDetail(this.menuDetail);
    console.log('add', this.shoppingCartService)
  }
}
