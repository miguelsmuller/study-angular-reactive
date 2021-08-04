import { Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { PrivateComponent } from '@core/layouts/private/private.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['home']);

export const PrivateRoutes: Routes = [
  {
    path: 'app',
    component: PrivateComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('src/app/pages/private/dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
      {
        path: 'crud',
        loadChildren: () => import('src/app/pages/private/crud/crud.module').then((m) => m.CrudModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
    ],
  },
];
