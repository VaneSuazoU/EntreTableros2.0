import { render, screen } from '@testing-library/angular';
import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  it('debería renderizar información del perfil', async () => {
    await render(PerfilComponent);
    expect(screen.getByText(/información del perfil/i)).toBeTruthy();
  });
});
