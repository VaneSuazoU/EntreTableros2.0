import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatePipe
  ],
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  usuarioActual: any = null;
  mensaje: string = '';
  publicaciones: any[] = [];

  constructor(private auth: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.auth.usuario$.subscribe((usuario: any) => {
      this.usuarioActual = usuario;
    });

    this.http.get<any[]>('/publicaciones_users.json').subscribe({
      next: (data) => this.publicaciones = data,
      error: (err) => {
        console.warn('No se pudo cargar publicaciones_users.json', err);
        this.publicaciones = [];
      }
    });
  }

  publicar(): void {
    if (!this.mensaje.trim()) return;

    const nueva = {
      username: this.usuarioActual?.nombre || 'Usuario',
      content: this.mensaje,
      date: new Date(),
      likes: 0
    };

    this.publicaciones.unshift(nueva);
    this.mensaje = '';
  }

  darLike(pub: any): void {
    pub.likes = (pub.likes || 0) + 1;
  }
}
