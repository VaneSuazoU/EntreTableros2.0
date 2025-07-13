import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Juego {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  edad: string;
  duracion: string;
  jugadores: string;
  categoria: string;
}

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoria: string = '';
  juegos: Juego[] = [];
  todosLosJuegos: Juego[] = [];

  esAdmin: boolean = false;
  mostrarFormulario: boolean = false;
  modoEdicion: boolean = false;

  juegoActual: Juego = this.juegoVacio();

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    // ✅ Lee la categoría desde la ruta dinámica (ej: /categoria/estrategia)
    this.route.paramMap.subscribe(params => {
      this.categoria = (params.get('cat') || '').toLowerCase();
      this.cargarJuegos();
    });

    // ✅ Detecta si el usuario es admin
    const sesion = localStorage.getItem('usuario');
    if (sesion) {
      try {
        const usuario = JSON.parse(sesion);
        this.esAdmin = usuario.rol === 'admin';
      } catch {
        this.esAdmin = false;
      }
    }
  }

  cargarJuegos(): void {
    this.http.get<Juego[]>('https://vanesuazou.github.io/EntreTableros_API/data.json')
      .subscribe((data: Juego[]) => {
        this.todosLosJuegos = data;
        this.juegos = this.todosLosJuegos.filter(j => j.categoria === this.categoria);
      });
  }

  volver(): void {
    this.router.navigate(['/']);
  }

  agregarJuego(): void {
    this.mostrarFormulario = true;
    this.modoEdicion = false;
    this.juegoActual = this.juegoVacio();
  }

  guardarNuevoJuego(): void {
    if (!this.juegoActual.nombre || !this.juegoActual.precio) return;

    this.juegoActual.id = this.generarNuevoId();
    this.juegos.push({ ...this.juegoActual });
    this.resetFormulario();
  }

  editarJuego(juego: Juego): void {
    this.mostrarFormulario = true;
    this.modoEdicion = true;
    this.juegoActual = { ...juego };
  }

  guardarEdicion(): void {
    const index = this.juegos.findIndex(j => j.id === this.juegoActual.id);
    if (index !== -1) {
      this.juegos[index] = { ...this.juegoActual };
    }
    this.resetFormulario();
  }

  eliminarJuego(id: number): void {
    this.juegos = this.juegos.filter(j => j.id !== id);
  }

  resetFormulario(): void {
    this.mostrarFormulario = false;
    this.modoEdicion = false;
    this.juegoActual = this.juegoVacio();
  }

  private generarNuevoId(): number {
    const ids = this.juegos.map(j => j.id);
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }

  private juegoVacio(): Juego {
    return {
      id: 0,
      nombre: '',
      precio: 0,
      descripcion: '',
      imagen: '',
      edad: '',
      duracion: '',
      jugadores: '',
      categoria: this.categoria
    };
  }
}
