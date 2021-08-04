import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as ProductReducer from './product.reducer';
import * as ProductModel from '@shared/schemas/product';
import { IProduct } from '@shared/schemas/product';

export const selectProductsState = createFeatureSelector<ProductReducer.State>(ProductReducer.productsFeatureKey);

//Select all Products
export const selectAllProducts = createSelector(selectProductsState, ProductReducer.selectAll);

//Select all Entities
export const selectAllEntities = createSelector(selectProductsState, ProductReducer.selectEntities);

//Check if Entity is in store by id
export const entityExists = (id: string) =>
  createSelector(selectAllEntities, (entities) => {
    return entities[id] == undefined ? false : true;
  });

// Get Entity by id
export const selectEntityById = (id: string) =>
  createSelector(selectAllEntities, (entities) => {
    const response = entities[id];
    if (response == undefined) {
      return null;
    } else {
      return response;
    }
  });
