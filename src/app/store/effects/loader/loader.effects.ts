import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as AuthActions from '@store/actions/auth.actions';

@Injectable()
export class LoaderEffects {
  constructor(private actions$: Actions) {}

  loaderOn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.auth_login),
        tap(() => {
          // do something
        })
      ),
    { dispatch: false }
  );

  loaderOff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.auth_login_success, AuthActions.auth_login_failure),
        tap(() => {
          // do something
        })
      ),
    { dispatch: false }
  );
}
