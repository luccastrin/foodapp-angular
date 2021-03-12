import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-cart',
  templateUrl: './restaurant-cart.component.html',
  styleUrls: ['./restaurant-cart.component.scss']
})
export class RestaurantCartComponent implements OnInit {
  productNameSize = '(3x) Cup Cake';

  constructor() { }

  ngOnInit(): void {
  }

}
