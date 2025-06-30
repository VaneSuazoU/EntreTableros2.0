import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuarioActual: any = null;
  esAdmin: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const sesion = localStorage.getItem('usuario');
    if (sesion) {
      try {
        const usuario = JSON.parse(sesion);
        this.usuarioActual = usuario;
        this.esAdmin = usuario.rol === 'admin';
      } catch (error) {
        localStorage.removeItem('usuario');
        this.usuarioActual = null;
        this.esAdmin = false;
      }
    }
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    this.usuarioActual = null;
    this.esAdmin = false;
    this.router.navigate(['/login']);
  }
}
