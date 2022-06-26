import { RestaurantInformationComponent } from "./restaurant-information.component";

describe('RestaurantInformationComponent', () => {
  let component: RestaurantInformationComponent;

  beforeEach(() => {
    component = new RestaurantInformationComponent()
  })

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
})