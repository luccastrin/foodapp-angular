import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { RestaurantsService } from "src/app/shared/services/restaurant.service";
import { RestaurantAddComponent } from "./restaurant-add.component";

describe('OrderComponent', () => {
  let component: RestaurantAddComponent;
  let fixture: ComponentFixture<RestaurantAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantAddComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(RestaurantAddComponent);
    component = fixture.componentInstance;

  });

  it('Deve criar o component', () => {
    expect(RestaurantAddComponent).toBeTruthy(true);
  })
})

