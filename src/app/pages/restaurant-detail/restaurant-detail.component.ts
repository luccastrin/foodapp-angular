import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../../shared/services/restaurant.service';

import { Restaurants } from '../../shared/models/restaurants/restaurants.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  idPathRestaurants: string;
  restaurantDetail: Restaurants;

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
  ) { }

  ngOnInit(): void {
    this.idPathRestaurants = this.route.snapshot.paramMap.get('id');
    this.populateRestaurantById(this.idPathRestaurants)
  }

  populateRestaurantById(id) {
    this.restaurantsService.getRestaurantsById(id).subscribe(response => {
      this.restaurantDetail = response
      // console.log(this.restaurantDetail);
    })
  }
}
