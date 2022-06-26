import { of } from "rxjs";
import { RestaurantsComponent } from "./restaurants.component";

describe('RestaurantsComponent', () => {
  let component: RestaurantsComponent;
  let mockRestaurantService: any;

  beforeEach(() => {
    mockRestaurantService = {
      getRestaurants: jest.fn()
    }

    component = new RestaurantsComponent(mockRestaurantService)
  })

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should pass in ngOnInit', () => {
    jest.spyOn(mockRestaurantService, 'getRestaurants').mockReturnValue(of({ teste: 'teste' }));

    component.populateRestaurants();

    expect(mockRestaurantService.getRestaurants).toHaveBeenCalled();
  });
})