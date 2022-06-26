import { RestaurantDetailComponent } from "./restaurant-detail.component";

describe('RestaurantDetailComponent', () => {
  let component: RestaurantDetailComponent;
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

    component = new RestaurantDetailComponent(mockRouteActivated, mockRestaurantService)
  })

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
})