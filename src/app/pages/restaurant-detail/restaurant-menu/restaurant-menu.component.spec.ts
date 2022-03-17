import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { RestaurantsService } from "src/app/shared/services/restaurant.service";
import { RestaurantMenuComponent } from "./restaurant-menu.component";

describe('RestaurantMenuComponent', () => {
  let component: RestaurantMenuComponent;
  let fixture: ComponentFixture<RestaurantMenuComponent>;
  let mockRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantMenuComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: RestaurantsService,
          useValue: mockRestaurantService
        }
      ]
    });

    fixture = TestBed.createComponent(RestaurantMenuComponent);
    component = fixture.componentInstance;

  });

  it('Deve criar o component', () => {
    expect(RestaurantMenuComponent).toBeTruthy(true);
  })
})
