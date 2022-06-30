import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Restaurants } from '../models/restaurants/restaurants.model';
import { Menu } from '../models/restaurants/menu.model';
import { Reviews } from '../models/restaurants/review.model';
import { environment } from '../../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get<Restaurants[]>(`${environment.apiBase}/restaurants`);
  }

  getRestaurantsById(id: number) {
    return this.http.get<Restaurants>(`${environment.apiBase}/restaurants/${id}`);
  }

  getMenuById(id: number) {
    return this.http.get<Menu[]>(`${environment.apiBase}/restaurants/${id}/menu/`);
  }

  getReviewsById(id: number) {
    return this.http.get<Reviews>(`${environment.apiBase}/restaurants/${id}/reviews/`);
  }
}