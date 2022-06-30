import { RestaurantAddComponent } from "./restaurant-add.component";

describe('RestaurantAddComponent', () => {
  let component: RestaurantAddComponent;
  let mockShoppingCartService: any;

  beforeEach(() => {
    mockShoppingCartService = {
      addDetail: jest.fn()
    }

    component = new RestaurantAddComponent(mockShoppingCartService)
  })

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
})