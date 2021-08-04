import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '@env/environment';

import * as fromApp from './reducers/app.reducer';
import * as fromAuth from './reducers/auth.reducer';
import * as fromProduct from '../pages/private/crud/state/product.reducer';

export interface AppState {
  [fromApp.appFeatureKey]: fromApp.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromProduct.productsFeatureKey]: fromProduct.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromApp.appFeatureKey]: fromApp.reducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromProduct.productsFeatureKey]: fromProduct.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
