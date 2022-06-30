import { CartOrderService } from "./cart-order.service";

describe('CartOrderService', () => {
  let component: CartOrderService;
  let mockShoppingCartService: any;

  beforeEach(() => {
    mockShoppingCartService = {
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn(),
      removeItem: jest.fn(),
      total: jest.fn(),
    }

    component = new CartOrderService(mockShoppingCartService);
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  })
})