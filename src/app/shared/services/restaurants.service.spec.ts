import { RestaurantsService } from './restaurants.service';

describe('RestaurantService', () => {
  let component: RestaurantsService;
  let mockHttpClientService: any;

  beforeEach(() => {
    mockHttpClientService = {
      get: jest.fn()
    }

    component = new RestaurantsService(mockHttpClientService);
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  })
})