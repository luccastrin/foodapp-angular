import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Restaurants } from '../models/restaurants/restaurants.model';
import { Menu } from '../models/restaurants/menu.model';
import { Reviews } from '../models/restaurants/review.model';

// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get<Restaurants[]>(`http://localhost:3000/restaurants`);
  }

  getRestaurantsById(id: string) {
    return this.http.get<Restaurants>(`http://localhost:3000/restaurants/${id}`);
  }

  getMenuById(id: string) {
    return this.http.get<Menu[]>(`http://localhost:3000/restaurants/${id}/menu/`);
  }

  getReviewsById(id: string) {
    return this.http.get<Reviews[]>(`http://localhost:3000/restaurants/${id}/reviews/`);
  }
}