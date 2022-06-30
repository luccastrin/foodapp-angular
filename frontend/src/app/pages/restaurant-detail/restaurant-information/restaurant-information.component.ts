import { Component, Input, OnInit } from '@angular/core';
import { Restaurants } from 'src/app/shared/models/restaurants/restaurants.model';

@Component({
  selector: 'app-restaurant-information',
  templateUrl: './restaurant-information.component.html',
  styleUrls: ['./restaurant-information.component.scss']
})
export class RestaurantInformationComponent implements OnInit {
  @Input() restaurantDetail: Restaurants;

  constructor() { }

  ngOnInit(): void {
  }

}
