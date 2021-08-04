/* eslint-disable prettier/prettier */

import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IProduct } from '@shared/schemas/product';
import * as ProductActions from './product.actions';

export const productsFeatureKey = 'products';

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>({
  sortComparer: sortByName,
  selectId: selectIdentifier,
});

export interface State extends EntityState<IProduct> {
  // additional entities state properties
}

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function sortByName(a: IProduct, b: IProduct): number {
  return a.name.localeCompare(b.name);
}

export function selectIdentifier(a: IProduct): string {
  return a.id;
}

export const reducer = createReducer(
  initialState,

  on(ProductActions.loadAllProductsSuccess,
    (state, action) => adapter.setAll(action.products, state)
  ),
  on(ProductActions.loadSingleProductSuccess,
    (state, action) => adapter.addOne(action.product, state)
  ),
  on(ProductActions.addProductSuccess,
    (state, action) => adapter.addOne(action.product, state)
  ),
  on(ProductActions.upsertProductSuccess,
    (state, action) => adapter.upsertOne(action.product, state)
  ),
  on(ProductActions.deleteProductSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),

  on(ProductActions.loadAllProducts,
    ProductActions.loadSingleProduct,
    ProductActions.addProduct,
    ProductActions.upsertProduct,
    ProductActions.deleteProduct,
    (state, action) => {
       return { ...state };
    }
  ),

  on(ProductActions.loadAllProductsFailure,
     ProductActions.loadSingleProductFailure,
     ProductActions.addProductFailure,
     ProductActions.upsertProductFailure,
     ProductActions.deleteProductFailure,
     (state, action) => {
      return { ...state };
    }
  ),

  on(ProductActions.clearProducts,
    (state) => adapter.removeAll(state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
