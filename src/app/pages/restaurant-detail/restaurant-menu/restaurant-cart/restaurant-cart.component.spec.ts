import { RestaurantCartComponent } from "./restaurant-cart.component";

describe('RestaurantCartComponent', () => {
  let component: RestaurantCartComponent;
  let mockShoppingCartService: any;

  beforeEach(() => {
    mockShoppingCartService = {
      total: jest.fn(),
      clear: jest.fn(),
      decreaseQuantityCart: jest.fn(),
      removeItem: jest.fn(),
    }

    component = new RestaurantCartComponent(mockShoppingCartService)
  })

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
})