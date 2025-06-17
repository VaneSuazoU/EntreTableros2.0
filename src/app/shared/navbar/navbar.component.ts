import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent {
  esAdmin: boolean = false;
  usuarioActual: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.actualizarEstado();
  }

  actualizarEstado() {
    this.usuarioActual = localStorage.getItem('usuarioActual');
    this.esAdmin = this.usuarioActual === 'admin@entre.cl';
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioActual');
    this.usuarioActual = null;
    this.esAdmin = false;
    this.router.navigate(['/']);
  }
}
