import { createAction, props } from '@ngrx/store';

import { IUser } from '@shared/schemas/user';

export const auth_is_logged_in = createAction('[APP_AUTH] verify auth user');
export const auth_is_logged_in_success = createAction('[APP_AUTH_EFFECT] auth user found', props<{ user: IUser }>());
export const auth_is_logged_in_failure = createAction('[APP_AUTH_EFFECT] auth user not found');

export const auth_login = createAction('[APP_AUTH] Do Login');
export const auth_login_success = createAction('[APP_AUTH_EFFECT] login success', props<{ user: IUser }>());
export const auth_login_failure = createAction('[APP_AUTH_EFFECT] login failure', props<{ error: boolean }>());

export const auth_logout = createAction('[APP_AUTH] Do Logout');
export const auth_logout_success = createAction('[APP_AUTH_EFFECT] logout success');
export const auth_logout_failure = createAction('[APP_AUTH_EFFECT] logout failure');
