import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PublicRoutes } from '../routes/public-routing.module';
import { PrivateRoutes } from '../routes/private-routing.module';

@NgModule({
  imports: [RouterModule.forRoot([...PublicRoutes, ...PrivateRoutes, { path: '**', redirectTo: 'home' }])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
