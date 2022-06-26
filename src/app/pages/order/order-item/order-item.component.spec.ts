import { OrderItemComponent } from "./order-item.component";

describe('OrderItemComponent', () => {
  let component: OrderItemComponent;

  beforeEach(() => {
    component = new OrderItemComponent()
  })

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
})