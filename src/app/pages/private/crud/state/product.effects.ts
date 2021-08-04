import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as ProductActions from './product.actions';
import { concatMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IDataBaseService } from '@core/services/database/idatabase.service';
import { IProduct } from '@shared/schemas/product';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private serviceProduct: IDataBaseService<IProduct>) {}

  /**************************/
  /*    GET ALL PRODUCTS    */
  /**************************/
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadAllProducts),
      concatMap((action) =>
        this.serviceProduct.getAll().pipe(
          map((products) => ProductActions.loadAllProductsSuccess({ products: products })),
          catchError((error) => of(ProductActions.loadAllProductsFailure({ error: error })))
        )
      )
    );
  });

  /****************************/
  /*    GET SINGLE PRODUCT    */
  /****************************/
  loadProductItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadSingleProduct),
      concatMap((action) =>
        this.serviceProduct.getSingle(action.id).pipe(
          map((product) => ProductActions.loadSingleProductSuccess({ product: product })),
          catchError((error) => of(ProductActions.loadSingleProductFailure({ error: error })))
        )
      )
    );
  });

  /*****************************/
  /*    ADD SINGLE PRODUCT    */
  /*****************************/
  addProductItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addProduct),
      concatMap((action) =>
        this.serviceProduct.insert(action.product).pipe(
          map((product) => ProductActions.addProductSuccess({ product: product })),
          catchError((error) => of(ProductActions.addProductFailure({ error: error })))
        )
      )
    );
  });

  /*******************************/
  /*    UPDATE SINGLE PRODUCT    */
  /*******************************/
  updateProductItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.upsertProduct),
      concatMap((action) =>
        this.serviceProduct.update(action.product).pipe(
          map((product) => ProductActions.upsertProductSuccess({ product: product })),
          catchError((error) => of(ProductActions.upsertProductFailure({ error: error })))
        )
      )
    );
  });

  /*******************************/
  /*    UPDATE SINGLE PRODUCT    */
  /*******************************/
  removeProductItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      concatMap((action) =>
        this.serviceProduct.remove(action.id).pipe(
          map(() => ProductActions.deleteProductSuccess({ id: action.id })),
          catchError((error) => of(ProductActions.deleteProductFailure({ error: error })))
        )
      )
    );
  });
}
