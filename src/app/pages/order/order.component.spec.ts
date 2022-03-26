import { FormBuilder, Validators } from "@angular/forms";
import { OrderComponent } from "../order/order.component";

describe('OrderComponent', () => {
  let component: OrderComponent;
  let mockCartOrderService: any;
  let formOrder: any;
  let fb = new FormBuilder();

  beforeEach(() => {
    mockCartOrderService = {
      getDetailArr: jest.fn(),
      getIncreaseQuantity: jest.fn(),
      getDrecreaseQuantity: jest.fn(),
      getRemoveItem: jest.fn(),
      getTotal: jest.fn(),
    }

    formOrder = fb.group({
      name: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      confirm: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      radios: fb.group({
        radio_button: ['', Validators.required]
      })
    });

    component = new OrderComponent(mockCartOrderService, fb)
  })

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
})