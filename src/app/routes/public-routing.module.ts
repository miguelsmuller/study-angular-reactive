import { Routes } from '@angular/router';

import { PublicComponent } from '@core/layouts/public/public.component';

export const PublicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('src/app/pages/public/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'register',
        loadChildren: () => import('src/app/pages/public/auth/register/register.module').then((m) => m.RegisterModule),
      },
    ],
  },
];
