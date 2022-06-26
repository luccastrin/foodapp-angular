import { HeaderComponent } from "./header.component";

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  })
})