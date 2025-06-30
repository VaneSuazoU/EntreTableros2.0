import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usuario: any = null;
  accesoPermitido: boolean = false;
  seccionActiva: string = 'juegos';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const sesion = localStorage.getItem('usuario');
    if (sesion) {
      try {
        this.usuario = JSON.parse(sesion);
        this.accesoPermitido = this.usuario.rol === 'admin';
      } catch {
        this.router.navigate(['/']);
      }
    } else {
      this.router.navigate(['/']);
    }
  }
}
