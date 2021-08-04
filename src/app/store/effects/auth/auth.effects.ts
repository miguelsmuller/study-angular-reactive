import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AuthActions from '@store/actions/auth.actions';
import { IAuthService } from '@core/services/auth/iauth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: IAuthService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.auth_login),
      concatMap((action) =>
        this.authService.login().pipe(
          map((user) => AuthActions.auth_login_success({ user: user })),
          catchError((error) => of(AuthActions.auth_login_failure({ error: error })))
        )
      )
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.auth_logout),
      concatMap((action) =>
        this.authService.logout().pipe(
          map((user) => AuthActions.auth_logout_success()),
          catchError((error) => of(AuthActions.auth_logout_failure()))
        )
      )
    );
  });

  is_logged_in$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.auth_is_logged_in),
      concatMap((action) =>
        this.authService.isLoggedIn().pipe(
          map((user) => AuthActions.auth_is_logged_in_success({ user: user })),
          catchError((error) => of(AuthActions.auth_is_logged_in_failure()))
        )
      )
    );
  });

  login_success$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.auth_login_success, AuthActions.auth_is_logged_in_success),
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
        })
      );
    },
    { dispatch: false }
  );

  logout_success$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.auth_logout_success),
        map(() => {
          localStorage.removeItem('user');
        })
      );
    },
    { dispatch: false }
  );
}
