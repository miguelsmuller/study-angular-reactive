import { Action, createReducer, on } from '@ngrx/store';

export const appFeatureKey = 'app';

export interface State {
  isLoading: boolean;
  inErro: unknown | boolean;
}

export const initialState: State = {
  isLoading: false,
  inErro: false,
};

export const reducer = createReducer(initialState);
