import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as AuthActions from '@store/actions/auth.actions';

@Injectable()
export class ToasterEffects {
  constructor(private actions$: Actions) {}

  checkingLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.auth_login),
        tap((action) => {
          // do something
        })
      ),
    { dispatch: false }
  );

  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.auth_login_success),
        tap((action) => {
          // do something
        })
      ),
    { dispatch: false }
  );

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.auth_login_failure),
        tap(() => {
          // do something
        })
      ),
    { dispatch: false }
  );
}
