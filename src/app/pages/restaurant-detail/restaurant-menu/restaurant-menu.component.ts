import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Menu } from 'src/app/shared/models/restaurants/menu.model';

import { RestaurantsService } from 'src/app/shared/services/restaurant.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {
  menuDetails: Menu[];
  idPathMenu: string;

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.idPathMenu = this.route.parent.snapshot.paramMap.get('id');

    this.popularMenuById(this.idPathMenu);
  }

  popularMenuById(id) {
    this.restaurantsService.getMenuById(id).subscribe(response => {
      this.menuDetails = response;
    })
  }
}