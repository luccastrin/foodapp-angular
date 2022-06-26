import { RestaurantMenuComponent } from "./restaurant-menu.component";

describe('RestaurantMenuComponent', () => {
  let component: RestaurantMenuComponent;
  let mockRestaurantService: any;
  let mockRouteActivated: any;

  beforeEach(() => {
    mockRestaurantService = {
      getRestaurants: jest.fn()
    }

    mockRouteActivated = {
      snapshot: {
        paramMap: 'id'
      }
    }


    component = new RestaurantMenuComponent(mockRouteActivated, mockRestaurantService)
  })

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
})