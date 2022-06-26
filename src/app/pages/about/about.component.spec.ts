import { AboutComponent } from "./about.component";

describe('AboutComponent', () => {
  let component: AboutComponent;

  beforeEach(() => {
    component = new AboutComponent();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
})