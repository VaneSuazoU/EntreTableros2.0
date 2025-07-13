import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería iniciar sesión con credenciales válidas y redirigir', () => {
    component.correo = 'admin@entre.cl';
    component.contrasena = 'Admin123!';

    component.iniciarSesion();

    const sesion = JSON.parse(localStorage.getItem('usuario')!);
    expect(sesion).toBeTruthy();
    expect(sesion.rol).toBe('admin');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });

  afterEach(() => {
    localStorage.clear(); // limpia sesión después de cada prueba
  });
});
