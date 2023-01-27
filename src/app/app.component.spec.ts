import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
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

    const miBoton = fixture.debugElement.query(By.css('#btn-login'));
    miBoton.nativeElement.click();

    const loginValid = false;
    expect(app.loginValid).toEqual(loginValid);
  });
  it('should return valid formLogin', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mockData = {
      usuario: 'usuario1',
      password: '1234',
    };
    app.formLogin.setValue(mockData);

    const miBoton = fixture.debugElement.query(By.css('#btn-login'));
    miBoton.nativeElement.click();

    const loginValid = true;

    expect(app.loginValid).toEqual(loginValid);
  });
});
