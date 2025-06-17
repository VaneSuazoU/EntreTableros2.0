import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [CommonModule]
})
export class AdminComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const usuario = localStorage.getItem('usuarioActual');

    // 🚨 Si no es admin, redirige
    if (usuario !== 'admin@entre.cl') {
      this.router.navigate(['/']);
      return;
    }

    // Cargar usuarios si es admin
    const data = localStorage.getItem('usuarios');
    this.usuarios = data ? JSON.parse(data) : [];
  }
}
