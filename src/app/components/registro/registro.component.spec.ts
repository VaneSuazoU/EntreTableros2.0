import { render, screen } from '@testing-library/angular';
import { RegistroComponent } from './registro.component';
import { FormsModule } from '@angular/forms';

describe('RegistroComponent', () => {
  it('debería cargar el formulario de registro', async () => {
    await render(RegistroComponent, {
      imports: [FormsModule]
    });
    expect(screen.getByLabelText(/nombre/i)).toBeTruthy();
    expect(screen.getByText(/registrarse/i)).toBeTruthy();
  });
});
