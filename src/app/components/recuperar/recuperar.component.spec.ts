import { render, screen } from '@testing-library/angular';
import { RecuperarComponent } from './recuperar.component';
import { FormsModule } from '@angular/forms';

describe('RecuperarComponent', () => {
  it('debería mostrar input para correo electrónico', async () => {
    await render(RecuperarComponent, {
      imports: [FormsModule]
    });
    expect(screen.getByLabelText(/correo/i)).toBeTruthy();
  });
});
