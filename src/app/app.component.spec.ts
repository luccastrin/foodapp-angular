import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
    expect(component.title).toBe('foodapp')
  })
})