import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    const correoLower = this.correo.trim().toLowerCase();
    const pass = this.contrasena;

    // 1. Usuarios de prueba hardcodeados
    const usuariosFijos = [
      { correo: 'admin@entre.cl', contrasena: 'admin123' },
      { correo: 'user@entre.cl', contrasena: 'user123' }
    ];

    const matchFijo = usuariosFijos.find(u => u.correo === correoLower && u.contrasena === pass);

    if (matchFijo) {
      localStorage.setItem('usuarioActual', JSON.stringify(matchFijo));  // guarda sesión
      Swal.fire('Bienvenido/a', `Has ingresado como ${correoLower}`, 'success').then(() => {
        this.router.navigate(['/perfil']);
      });
      return;
    }

    // 2. Verifica en localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const matchLocal = usuariosGuardados.find((u: any) => u.correo === correoLower && u.contrasena === pass);

    if (matchLocal) {
      localStorage.setItem('usuarioActual', JSON.stringify(matchLocal));  // guarda sesión
      Swal.fire('Bienvenido/a', `Has ingresado como ${correoLower}`, 'success').then(() => {
        this.router.navigate(['/perfil']);
      });
    } else {
      Swal.fire('Error', 'Correo o contraseña incorrectos', 'error');
    }
  }
}
