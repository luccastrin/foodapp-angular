import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { Observable, of } from "rxjs";
import { RestaurantsService } from "src/app/shared/services/restaurant.service";
import { RestaurantsComponent } from "./restaurants.component"

describe('RestaurantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;
  let mockRestaurantService;
  let restaurantsMock = [
    {
      id: "bread-bakery",
      name: "Bread & Bakery",
      category: "Padaria",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/images/restaurants/breadbakery.png",
      about: "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
      hours: "Funciona de segunda à sexta, de 8h às 23h"
    }
  ];

  beforeEach(() => {
    mockRestaurantService = jasmine.createSpyObj<RestaurantsService>(['getRestaurants']);

    TestBed.configureTestingModule({
      declarations: [RestaurantsComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: RestaurantsService,
          useValue: mockRestaurantService
        }
      ]
    });

    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;

  });

  it('Deve criar o component', () => {
    expect(component).toBeTruthy();
  });

  it('Deve popular a listagem de restaurantes', () => {
    // Arrange
    let result = mockRestaurantService.getRestaurants.and.returnValue(of({ body: restaurantsMock }))

    // Act
    component.populateRestaurants();
    component.ngOnInit();

    // Assert
    expect(result).toHaveBeenCalledTimes(2);
  })
})