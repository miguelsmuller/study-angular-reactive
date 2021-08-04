import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppCommonModule } from '@core/app.common.module';
import { AppFirebaseModule } from '@core/app.firebase.module';
import { AppLayoutsModule } from '@core/app.layouts.module';
import { AppRoutingModule } from '@core/app.routing.module';
import { AppStoreModule } from '@core/app.store.module';

import { AuthAbstractService } from '@core/services/auth/auth.abstract.service';
import { AuthService } from './@core/services/auth/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [AppCommonModule, AppFirebaseModule, AppLayoutsModule, AppRoutingModule, AppStoreModule],
  providers: [
    {
      provide: AuthAbstractService,
      useClass: AuthService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
