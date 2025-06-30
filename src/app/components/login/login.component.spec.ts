import { render, screen, fireEvent } from '@testing-library/angular';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  it('debería mostrar error si el usuario no existe', async () => {
    const { fixture } = await render(LoginComponent, {
      imports: [FormsModule],
      providers: [
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') }
        }
      ]
    });

    const btn = screen.getByText('Iniciar Sesión');
    fireEvent.click(btn);

    fixture.detectChanges();
    const alert = await screen.findByText(/credenciales/i);
    expect(alert).toBeTruthy();
  });
});
