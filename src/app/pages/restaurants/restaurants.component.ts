import { Component, OnInit } from '@angular/core';

import { Restaurants } from 'src/app/shared/models/restaurants/restaurants.model';
import { RestaurantsService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurants[];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
    this.populateRestaurants();
  }

  populateRestaurants() {
    this.restaurantsService.getRestaurants().subscribe(response => {
      this.restaurants = response;
    });
  }
}
