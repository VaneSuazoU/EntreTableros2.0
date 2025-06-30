import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario: any = {
    nombre: '',
    email: '',
    password: '',
    repetir: '',
    direccion: '',
    username: '',
    nacimiento: ''
  };

  verPassword = false;
  verRepeat = false;

  registrar(form: any) {
    if (!form.valid) {
      alert('Formulario incompleto o con errores.');
      return;
    }

    if (!this.passwordValida(this.usuario.password)) {
      alert('La contraseña no cumple con los requisitos de seguridad.');
      return;
    }

    if (this.usuario.password !== this.usuario.repetir) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    if (!this.validarEdad(this.usuario.nacimiento)) {
      alert('Debes tener al menos 13 años.');
      return;
    }

    console.log('Usuario registrado:', this.usuario);
    alert('¡Registro exitoso!');
    this.limpiar();
  }

  passwordValida(password: string): boolean {
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    return pattern.test(password);
  }

  validarEdad(fecha: string): boolean {
    const nacimiento = new Date(fecha);
    const hoy = new Date();
    const edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    return edad > 13 || (edad === 13 && mes >= 0);
  }

  limpiar() {
    this.usuario = {
      nombre: '',
      email: '',
      password: '',
      repetir: '',
      direccion: '',
      username: '',
      nacimiento: ''
    };
  }
}
