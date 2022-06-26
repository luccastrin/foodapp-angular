import { Component, Input, OnInit } from '@angular/core';

import { Restaurants } from 'src/app/shared/models/restaurants/restaurants.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant: Restaurants;

  constructor() { }

  ngOnInit(): void {}
  
}
