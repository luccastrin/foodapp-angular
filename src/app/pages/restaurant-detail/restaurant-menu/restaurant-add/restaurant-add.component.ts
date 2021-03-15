import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/restaurants/menu.model';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.scss']
})
export class RestaurantAddComponent implements OnInit {
  @Input() menuDetail: Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
