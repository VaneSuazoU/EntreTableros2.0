import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ForoComponent } from './components/foro/foro.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { AdminComponent } from './components/admin/admin.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'categoria/:cat', component: CategoriaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'foro', component: ForoComponent, canActivate: [authGuard] },
  { path: 'recuperar', component: RecuperarComponent },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
