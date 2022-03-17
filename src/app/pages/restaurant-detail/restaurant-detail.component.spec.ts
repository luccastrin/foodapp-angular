import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { RestaurantsService } from "src/app/shared/services/restaurant.service";
import { RestaurantDetailComponent } from "./restaurant-detail.component";

describe('RestaurantDetailComponent', () => {
  let component: RestaurantDetailComponent;
  let fixture: ComponentFixture<RestaurantDetailComponent>;
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
    mockRestaurantService = jasmine.createSpyObj(['getRestaurantsById']);

    TestBed.configureTestingModule({
      declarations: [RestaurantDetailComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: RestaurantsService,
          useValue: mockRestaurantService
        }
      ]
    });

    fixture = TestBed.createComponent(RestaurantDetailComponent);
    component = fixture.componentInstance;

  });

  it('Deve criar o component', () => {
    expect(component).toBeTruthy(true);
  });

  xit('Deve popular restaurantes a partir do seu id', () => {
    // Arrange
    let result = mockRestaurantService.getRestaurantsById.and.returnValue(of(restaurantsMock));

    // Act
    component.populateRestaurantById(1);
    component.ngOnInit();

    // Assert
    expect(result).toHaveBeenCalledTimes(2);
    expect(Object.values(component.restaurantDetail)).toEqual(Object.values(restaurantsMock));
  })
})
