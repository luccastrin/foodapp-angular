import { Menu } from "src/app/shared/models/restaurants/menu.model";

export class CartItem {
  constructor(
    public menuItem: Menu,
    public quantity: number = 1
  ) { }
}