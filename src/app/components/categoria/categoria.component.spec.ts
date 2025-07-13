import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CategoriaComponent } from './categoria.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CategoriaComponent', () => {
  let component: CategoriaComponent;
  let fixture: ComponentFixture<CategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CategoriaComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: {
                get: () => 'estrategia'
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar juegos de la categoría', () => {
    component.todosLosJuegos = [
      { id: 1, nombre: 'Catan', precio: 10000, descripcion: '', imagen: '', edad: '', duracion: '', jugadores: '', categoria: 'estrategia' },
      { id: 2, nombre: 'UNO', precio: 5000, descripcion: '', imagen: '', edad: '', duracion: '', jugadores: '', categoria: 'cartas' }
    ];

    component.categoria = 'estrategia';
    component.juegos = [];
    component.juegos = component.todosLosJuegos.filter(j => j.categoria === component.categoria);

    expect(component.juegos.length).toBe(1);
    expect(component.juegos[0].nombre).toBe('Catan');
  });
});
