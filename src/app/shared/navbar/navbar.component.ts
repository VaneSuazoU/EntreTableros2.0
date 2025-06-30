import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  isNavbarCollapsed = true;
  estaLogueado = false;
  esAdmin = false;

  private sub: Subscription;

  constructor(public auth: AuthService, private router: Router) {
    this.sub = this.auth.usuario$.subscribe(user => {
      // CAMBIO: Usar la misma lógica que el AuthService
      this.estaLogueado = !!(user && user.correo && user.rol);
      this.esAdmin = user?.rol === 'admin';
    });
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  cerrarSesion(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}