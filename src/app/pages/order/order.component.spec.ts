import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OrderComponent } from "../order/order.component";

describe('OrderComponent', () => {
  let component: OrderComponent;
  let mockCartOrderService: any;
  let formOrder: any;
  let fb = new FormBuilder();
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

  beforeEach(() => {
    mockCartOrderService = {
      getDetailArr: jest.fn(),
      getIncreaseQuantity: jest.fn(),
      getDrecreaseQuantity: jest.fn(),
      getRemoveItem: jest.fn(),
      getTotal: jest.fn(),
    }

    component = new OrderComponent(mockCartOrderService, fb)
  })

  it('Should create the component', () => {
    component.formContent = formOrder;
    expect(component).toBeTruthy();
  });

  it('should pass in the ngOnInit method', () => {
    component.formContent = formOrder;
    component.ngOnInit();
    expect(component.formContent).toBeTruthy();
  });

  it('should validate the inputs', () => {
    component.formContent = formOrder;
    const touched = true;
    component.inputValidation('name');
    expect(touched).toBeTruthy();
  });

  describe('formValidation method', () => {

    it('should not validate the form and disable a button', () => {
      component.formContent = formOrder;
      component.formValidation();
      expect(component.formContent).toBeTruthy();
      expect(component.formValidation()).toBe('button-disabled');
    });
  });

  it('should get the return of the detail cart', () => {
    jest.spyOn(mockCartOrderService, 'getDetailArr');
    component.getDetailFromCart();
    expect(mockCartOrderService.getDetailArr).toHaveBeenCalled();
  });

  it('should add quantity', () => {
    const cartItem = {
      id: 1,
      imagePath: '',
      name: '',
      description: '',
      price: '',
      restaurantId: '',
      cartItem: 1
    }
    jest.spyOn(mockCartOrderService, 'getIncreaseQuantity').mockReturnValue(10)
    component.addQuantity(cartItem as any);
    expect(mockCartOrderService.getIncreaseQuantity).toHaveBeenCalled();
  });

  it('should remove quantity', () => {
    const cartItem = {
      id: 1,
      imagePath: '',
      name: '',
      description: '',
      price: '',
      restaurantId: '',
      cartItem: 1
    }
    jest.spyOn(mockCartOrderService, 'getDrecreaseQuantity').mockReturnValue(10)
    component.removeQuantity(cartItem as any);
    expect(mockCartOrderService.getDrecreaseQuantity).toHaveBeenCalled();
  });

  it('should remove item', () => {
    const cartItem = {
      id: 1,
      imagePath: '',
      name: '',
      description: '',
      price: '',
      restaurantId: '',
      cartItem: 1
    }
    jest.spyOn(mockCartOrderService, 'getRemoveItem').mockReturnValue(10)
    component.removeItem(cartItem as any);
    expect(mockCartOrderService.getRemoveItem).toHaveBeenCalled();
  });

  it('should return the total item', () => {
    jest.spyOn(mockCartOrderService, 'getTotal').mockReturnValue(10)
    component.total();
    expect(mockCartOrderService.getTotal).toHaveBeenCalled();
  });
})