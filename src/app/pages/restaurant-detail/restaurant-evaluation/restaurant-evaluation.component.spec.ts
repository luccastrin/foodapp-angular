import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { RestaurantsService } from "src/app/shared/services/restaurant.service";
import { RestaurantEvaluationComponent } from "./restaurant-evaluation.component";

describe('RestaurantEvaluationComponent', () => {
  let component: RestaurantEvaluationComponent;
  let fixture: ComponentFixture<RestaurantEvaluationComponent>;
  let mockRestaurantService;
  let reviewsMock = [
    {
      name: "Julia",
      date: "2017-01-23T18:25:43",
      rating: 4.5,
      comments: "Tudo muito bom, entrega no tempo certo",
      restaurantId: "bread-bakery"
    }
  ];

  beforeEach(() => {
    mockRestaurantService = jasmine.createSpyObj(['getReviewsById']);

    TestBed.configureTestingModule({
      declarations: [RestaurantEvaluationComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: RestaurantsService,
          useValue: mockRestaurantService
        },
      ]
    });

    fixture = TestBed.createComponent(RestaurantEvaluationComponent);
    component = fixture.componentInstance;

  });

  it('Deve criar o component', () => {
    expect(component).toBeTruthy(true);
  });

  xit('Deve popular a listagem de reviews a partir de um id', () => {
    // Arrange
    let result = mockRestaurantService.getReviewsById.and.returnValue(of(reviewsMock));

    // Act
    component.popularReviewsById(1);
    component.ngOnInit();

    // Assert
    expect(result).toHaveBeenCalledTimes(2);
    expect(Object.values(component.reviewsDetais)).toEqual(Object.values(reviewsMock));
  });
})
