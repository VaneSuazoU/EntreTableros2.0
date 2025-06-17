import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css'],
  imports: [CommonModule, FormsModule]
})
export class RecuperarComponent {
  correo: string = '';

  recuperarCuenta() {
    if (this.validarCorreo(this.correo)) {
      // En el futuro acá se integrara el back
      Swal.fire('¡Listo!', 'Hemos enviado un enlace a tu correo para recuperar tu cuenta.', 'success');
    } else {
      Swal.fire('Error', 'Ingresa un correo válido para continuar.', 'error');
    }
  }

  validarCorreo(correo: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }
}
