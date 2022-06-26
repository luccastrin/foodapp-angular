import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Menu } from 'src/app/shared/models/restaurants/menu.model';

import { RestaurantsService } from 'src/app/shared/services/restaurants.service';
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
      console.log('getMenuById', response)
      this.menuDetails = response;
      // console.log(this.menuDetails);
    })
  }
}