import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

interface Publicacion {
  username: string;
  content: string;
  date: string;
  likes: number;
}

@Component({
  standalone: true,
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css'],
  imports: [CommonModule, FormsModule, NgIf, NgFor]
})
export class ForoComponent implements OnInit {
  publicaciones: Publicacion[] = [];
  mensaje: string = '';
  usuarioActual: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.usuarioActual = localStorage.getItem('usuarioActual');

    // Cargar publicaciones desde JSON externo
    this.http.get<Publicacion[]>('/assets/publicaciones_users.json').subscribe(data => {
      this.publicaciones = data.reverse();
    });

    // Agregar publicaciones locales también
    const publicacionesLocales = JSON.parse(localStorage.getItem('publicaciones') || '[]');
    this.publicaciones.unshift(...publicacionesLocales);
  }

  publicar(): void {
    if (!this.mensaje.trim() || !this.usuarioActual) return;

    const nueva: Publicacion = {
      username: this.usuarioActual,
      content: this.mensaje,
      date: new Date().toISOString(),
      likes: 0
    };

    this.publicaciones.unshift(nueva);

    const existentes = JSON.parse(localStorage.getItem('publicaciones') || '[]');
    existentes.unshift(nueva);
    localStorage.setItem('publicaciones', JSON.stringify(existentes));

    this.mensaje = '';
  }

  darLike(pub: Publicacion): void {
    pub.likes = (pub.likes || 0) + 1;

    const publicacionesLocales: Publicacion[] = JSON.parse(localStorage.getItem('publicaciones') || '[]');
    const index = publicacionesLocales.findIndex((p: Publicacion) =>
      p.username === pub.username &&
      p.content === pub.content &&
      p.date === pub.date
    );
    if (index !== -1) {
      publicacionesLocales[index].likes = pub.likes;
      localStorage.setItem('publicaciones', JSON.stringify(publicacionesLocales));
    }
  }
}
