import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ApisComponent } from './apis/apis.component';
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inicio', component: InicioComponent },
        {path: 'apis', component: ApisComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirige a /login por defecto
  ];