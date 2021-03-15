import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Reviews } from 'src/app/shared/models/restaurants/review.model';
import { Menu } from 'src/app/shared/models/restaurants/menu.model';

import { RestaurantsService } from 'src/app/shared/services/restaurant.service';

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
  ) { }

  ngOnInit(): void {
    this.idPathMenu = this.route.parent.snapshot.paramMap.get('id');

    this.popularMenuById(this.idPathMenu);
  }

  popularMenuById(id) {
    this.restaurantsService.getMenuById(id).subscribe(response => {
      console.log('menu ', response);
      this.menuDetails = response
    })
  }
}