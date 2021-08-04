import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@env/environment';
import { reducers, metaReducers } from '@store/store.module';
import { AppEffects } from '@store/effects/app/app.effects';
import { AuthEffects } from '@store/effects/auth/auth.effects';
import { LoaderEffects } from '@store/effects/loader/loader.effects';
import { ToasterEffects } from '@store/effects/toaster/toaster.effects';
import { RouterEffects } from '@store/effects/router/router.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects, AuthEffects, LoaderEffects, ToasterEffects, RouterEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }) : [],
  ],
  exports: [StoreModule, EffectsModule, StoreDevtoolsModule],
  providers: [],
})
export class AppStoreModule {}
