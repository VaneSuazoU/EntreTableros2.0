import { render, screen } from '@testing-library/angular';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  it('debería mostrar nombre del sitio', async () => {
    await render(NavbarComponent);
    expect(screen.getByText('EntreTableros')).toBeTruthy();
  });
});
