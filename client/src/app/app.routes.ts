import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
  
    { // Lazy Load component
      path: 'not-found',
      loadComponent: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent)
    },
    {
      path: 'login',
      loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
    },
    {
      path: 'server-error',
      loadComponent: () => import('./server-error/server-error.component').then(c => c.ServerErrorComponent)
    }
  ];