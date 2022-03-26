import { RestaurantEvaluationComponent } from "./restaurant-evaluation.component";

describe('RestaurantEvaluationComponent', () => {
  let component: RestaurantEvaluationComponent;
  let mockRestaurantService: any;
  let mockRouteActivated: any;

  beforeEach(() => {
    mockRestaurantService = {
      getReviewsById: jest.fn()
    }

    mockRouteActivated = {
      snapshot: {
        paramMap: 'id'
      }
    }

    component = new RestaurantEvaluationComponent(mockRouteActivated, mockRestaurantService)
  })

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
})