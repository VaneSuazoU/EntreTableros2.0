import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  imports: [CommonModule, FormsModule]
})
export class PerfilComponent implements OnInit {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';

  ngOnInit(): void {
    // Simula datos de usuario (podrías luego obtenerlos de localStorage o backend)
    this.nombre = 'Vanessa Suazo';
    this.correo = 'vanessa@example.com';
    this.contrasena = '********';
  }

  guardarCambios() {
    Swal.fire('Datos actualizados', 'Tu perfil ha sido guardado exitosamente.', 'success');
  }
}
