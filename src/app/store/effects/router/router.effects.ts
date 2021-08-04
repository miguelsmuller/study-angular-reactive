import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import * as AuthActions from '@store/actions/auth.actions';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router) {}

  goDashboard$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.auth_login_success),
        tap((action) => {
          // do something
        }),
        tap(() => this.router.navigate(['/app/dashboard']))
      ),
    { dispatch: false }
  );

  goHome$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.auth_logout_success),
        tap((action) => {
          // do something
        }),
        tap(() => this.router.navigate(['/home']))
      );
    },
    { dispatch: false }
  );
}
