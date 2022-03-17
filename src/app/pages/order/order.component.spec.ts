import { ComponentFixture, TestBed } from "@angular/core/testing"
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { RestaurantsService } from "src/app/shared/services/restaurant.service";
import { OrderComponent } from "./order.component";

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let mockRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        {
          provide: RestaurantsService,
          useValue: mockRestaurantService
        }
      ]
    });

    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;

  });

  it('Deve criar o component', () => {
    expect(OrderComponent).toBeTruthy(true);
  });

  it('Deve inicializar o formulário no método OnInit', () => {
    // Arrange

    // Act
    component.createForm();
    component.ngOnInit();

    // Assert
    expect(component).toBeTruthy();
  });

  it('Deve checar a validade do formulário se estiver vazio', () => {
    // Arrange
    let validForm = component.formContent.valid;
    console.log(validForm);

    // Act
    component.createForm();
    fixture.detectChanges();

    // Assert
    expect(validForm).toBeFalsy();
    expect(component.createForm).toHaveBeenCalled();
  });
})
