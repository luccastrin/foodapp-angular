import { WelcomeComponent } from "./welcome.component";

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;

  beforeEach(() => {
    component = new WelcomeComponent();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  })
})