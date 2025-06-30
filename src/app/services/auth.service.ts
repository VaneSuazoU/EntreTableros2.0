import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private key = 'usuario';

  private usuarioSubject = new BehaviorSubject<any>(this.getUsuarioLocal());

  usuario$ = this.usuarioSubject.asObservable();

  private getUsuarioLocal(): any {
    const raw = localStorage.getItem(this.key);
    try {
      const user = JSON.parse(raw || 'null');
      // Validar que el usuario tenga los campos requeridos
      if (user && user.correo && user.rol) {
        return user;
      }
      // Si no es válido, limpiarlo
      if (user) {
        localStorage.removeItem(this.key);
      }
      return null;
    } catch {
      // Si hay error al parsear, limpiar el localStorage
      localStorage.removeItem(this.key);
      return null;
    }
  }

  login(usuario: any): void {
    localStorage.setItem(this.key, JSON.stringify(usuario));
    this.usuarioSubject.next(usuario);
  }

  logout(): void {
    localStorage.removeItem(this.key);
    this.usuarioSubject.next(null);
  }

  getUsuario(): any {
    return this.usuarioSubject.value;
  }

  estaLogueado(): boolean {
    const user = this.getUsuario();
    return !!(user && user.correo && user.rol);
  }

  esAdmin(): boolean {
    const user = this.getUsuario();
    return user?.rol === 'admin';
  }

  obtenerUsuario(): any {
    const sesion = localStorage.getItem('usuario');
    if (sesion) {
      try {
        return JSON.parse(sesion);
      } catch {
        return null;
      }
    }
    return null;
  }
}
