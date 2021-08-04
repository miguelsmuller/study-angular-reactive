/* eslint-disable prettier/prettier */
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { IProduct } from '@shared/schemas/product';

/***************/
/*    BASIC    */
/***************/
export const loadAllProducts = createAction(
  '[CRUD] Load All Products'
);
export const loadSingleProduct = createAction(
  '[CRUD] Load Single Product', props<{ id: string }>()
);
export const addProduct = createAction(
  '[CRUD] Add Product', props<{ product: IProduct }>()
);
export const upsertProduct = createAction(
  '[CRUD] Upsert Product', props<{ product: IProduct }>()
);
export const deleteProduct = createAction(
  '[CRUD] Delete Product', props<{ id: string }>()
);


/*****************/
/*    SUCCESS    */
/*****************/
export const loadAllProductsSuccess = createAction(
  '[CRUD/EFFECT] Load All Products Success', props<{ products: IProduct[] }>()
);
export const loadSingleProductSuccess = createAction(
  '[CRUD/EFFECT] Load Single Product Success', props<{ product: IProduct }>()
);
export const addProductSuccess = createAction(
  '[CRUD/EFFECT] Add Product Success', props<{ product: IProduct }>()
);
export const upsertProductSuccess = createAction(
  '[CRUD/EFFECT] Upsert Product Success', props<{ product: IProduct }>()
);
export const deleteProductSuccess = createAction(
  '[CRUD/EFFECT] Delete Product Success', props<{ id: string }>()
);

/*****************/
/*    FAILURE    */
/*****************/
export const loadAllProductsFailure = createAction(
  '[CRUD/EFFECT] Load All Products Failure', props<{ error: boolean }>()
);
export const loadSingleProductFailure = createAction(
  '[CRUD/EFFECT] Load Single Product Failure', props<{ error: boolean }>()
);
export const addProductFailure = createAction(
  '[CRUD/EFFECT] Add Product Failure', props<{ error: boolean }>()
);
export const upsertProductFailure = createAction(
  '[CRUD/EFFECT] Upsert Product Failure', props<{ error: boolean }>()
);
export const deleteProductFailure = createAction(
  '[CRUD/EFFECT] Delete Product Failure', props<{ error: boolean }>()
);

/****************/
/*    OTHERS    */
/****************/
export const clearProducts = createAction('[CRUD] Clear Products');
