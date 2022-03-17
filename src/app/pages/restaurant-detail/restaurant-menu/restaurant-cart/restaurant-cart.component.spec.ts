import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { RestaurantCartComponent } from "./restaurant-cart.component";

describe('OrderComponent', () => {
  let component: RestaurantCartComponent;
  let fixture: ComponentFixture<RestaurantCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantCartComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(RestaurantCartComponent);
    component = fixture.componentInstance;

  });

  it('Deve criar o component', () => {
    expect(RestaurantCartComponent).toBeTruthy(true);
  })
})

