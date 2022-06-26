import { ShoppingCartService } from "./shopping-cart.service";

describe('ShoppingCartService', () => {
  let component: ShoppingCartService;

  beforeEach(() => {
    component = new ShoppingCartService();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  })
})