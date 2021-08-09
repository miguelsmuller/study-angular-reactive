import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppFirebaseModule } from '@core/app.firebase.module';
import { AppLayoutsModule } from '@core/app.layouts.module';
import { AppRoutingModule } from '@core/app.routing.module';
import { AppStoreModule } from '@core/app.store.module';

import { AppComponent } from './app.component';

import { IAuthService } from '@core/services/auth/iauth.service';
import { FireBaseService } from './@core/services/auth/firebase.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppFirebaseModule,
    AppLayoutsModule,
    AppRoutingModule,
    AppStoreModule,
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: IAuthService,
      useClass: FireBaseService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
