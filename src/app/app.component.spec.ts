import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should return invalid formLogin', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mockData = {
      usuario: '',
      password: '',
    };

    app.formLogin.setValue(mockData);
    expect(app.formLogin.invalid).toBe(true);
  });
  it('should return valid formLogin', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mockData = {
      usuario: 'usuario1',
      password: '1234',
    };

    app.formLogin.setValue(mockData);
    expect(app.formLogin.valid).toBe(true);
  });
});
