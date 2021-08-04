import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from '@store/actions/auth.actions';
import { IUser } from '@shared/schemas/user';

export const authFeatureKey = 'auth';

export interface State {
  user: IUser | null;
}

export const initialState: State = {
  user: null,
};

export const reducer = createReducer(
  initialState,

  on(
    AuthActions.auth_login,
    AuthActions.auth_logout,
    AuthActions.auth_is_logged_in,
    AuthActions.auth_logout_failure,
    (state) => state
  ),

  on(AuthActions.auth_login_success, AuthActions.auth_is_logged_in_success, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(
    AuthActions.auth_login_failure,
    AuthActions.auth_logout_success,
    AuthActions.auth_is_logged_in_failure,
    (state, action) => {
      return {
        ...state,
        user: null,
      };
    }
  )
);
