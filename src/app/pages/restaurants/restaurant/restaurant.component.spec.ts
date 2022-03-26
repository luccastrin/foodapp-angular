import { RestaurantComponent } from "./restaurant.component";

describe('RestaurantComponent', () => {
  let component: RestaurantComponent;

  beforeEach(() => {
    component = new RestaurantComponent()
  })

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
})