import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../../shared/services/restaurants.service';

import { Restaurants } from '../../shared/models/restaurants/restaurants.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  idPathRestaurants: number;
  restaurantDetail: Restaurants;

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
  ) { }

  ngOnInit(): void {
    this.idPathRestaurants = +this.route.snapshot.paramMap.get('id');
    this.populateRestaurantById(this.idPathRestaurants);
  }

  populateRestaurantById(id: number) {
    this.restaurantsService.getRestaurantsById(id).subscribe(response => {
      this.restaurantDetail = response;
    })
  }
}
