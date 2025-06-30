import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';
  error: string = '';

  // Lista de usuarios simulados
  usuariosValidos = [
    {
      correo: 'admin@entretableros.cl',
      contrasena: 'Admin123!',
      rol: 'admin'
    },
    {
      correo: 'usuario@entretableros.cl',
      contrasena: 'Usuario123!',
      rol: 'usuario'
    }
  ];

  constructor(private router: Router, private auth: AuthService) {}

  iniciarSesion() {
    const usuario = this.usuariosValidos.find(
      u => u.correo === this.correo && u.contrasena === this.contrasena
    );

    if (usuario) {
      this.auth.login(usuario);
      this.router.navigate(['/foro']);
    } else {
      this.error = 'Correo o contraseña incorrectos.';
    }
  }
}
