import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantsComponent } from './restaurants.component';

describe('RestaurantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsComponent]
    });

    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
