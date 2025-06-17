import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  imports: [CommonModule, FormsModule]
})
export class RegistroComponent {
  usuario = {
    nombre: '',
    username: '',
    email: '',
    password: '',
    repetir: '',
    nacimiento: '',
    direccion: ''
  };

  verPassword = false;
  verRepeat = false;

  registrar(form: NgForm): void {
    if (!form.valid || !this.validarEdad(this.usuario.nacimiento) || !this.validarPassword(this.usuario.password)) {
      alert('Por favor revisa los campos con errores.');
      return;
    }

    if (this.usuario.password !== this.usuario.repetir) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const existe = usuarios.some((u: any) => u.email === this.usuario.email || u.username === this.usuario.username);
    if (existe) {
      alert('Ya existe un usuario con ese correo o nombre de usuario.');
      return;
    }

    const { nombre, username, email, password, nacimiento, direccion } = this.usuario;
    const nuevoUsuario = { nombre, username, email, password, nacimiento, direccion };


    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('¡Registro exitoso!');
    this.limpiar();
  }

  limpiar(): void {
    this.usuario = {
      nombre: '',
      username: '',
      email: '',
      password: '',
      repetir: '',
      nacimiento: '',
      direccion: ''
    };
    this.verPassword = false;
    this.verRepeat = false;
  }

  validarEdad(fecha: string): boolean {
    const nacimiento = new Date(fecha);
    const hoy = new Date();
    const edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad > 13 || (edad === 13 && hoy >= new Date(nacimiento.setFullYear(hoy.getFullYear())));
  }

  validarPassword(pw: string): boolean {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,18}$/;
    return regex.test(pw);
  }
}
