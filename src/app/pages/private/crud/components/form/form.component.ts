import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AppState } from '@store/store.module';
import { IProduct, emptyProduct } from '@shared/schemas/product';
import * as ProductSelector from '../../state/product.selectors';
import { addProduct, upsertProduct, deleteProduct } from '../../state/product.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {}

  private productId_: string | null = null;
  public productData$: Observable<IProduct | null> = new Observable<IProduct | null>();
  public productForm = this.formBuilder.group({
    id: [{ value: '', disabled: true }],
    name: [{ value: '' }, [Validators.required]],
    createdAt: [{ value: '' }, [Validators.required]],
    isEnabled: [{ value: true }, [Validators.required]],
    photoURL: [{ value: '' }, [Validators.required]],
  });

  /****************************/
  /*    DYNAMIC PROPERTIES    */
  /****************************/
  @Input() public set productId(id: string | null) {
    this.productId_ = id;
    this.handlerFormData(id);
  }
  public get productId(): string | null {
    return this.productId_;
  }

  /***************************/
  /*    HANDLER WITH FORM    */
  /***************************/
  public deleteItem(id: string): void {
    this.store.dispatch(deleteProduct({ id }));
  }

  /***************************/
  /*    HANDLER WITH FORM    */
  /***************************/
  private handlerFormData(id: string | null): void {
    if (id) this.setData(id);
    else this.setEmpty();
  }
  private setData(id: string): void {
    this.productData$ = this.store.pipe(
      select(ProductSelector.selectEntityById(id)),
      tap((product) => {
        if (product) {
          this.productForm.patchValue(product);
        }
      })
    );
  }
  private setEmpty(): void {
    this.productData$ = of(emptyProduct);
    this.productForm.patchValue(emptyProduct);
  }

  /*********************************/
  /*    HANDLER WITH SUBMISSION    */
  /*********************************/
  public submitForm(): void {
    if (this.productForm.valid && !this.productId) this.submitFormInsert();
    else if (this.productForm.valid && this.productId) this.submitFormUpdate();
    this.setEmpty();
  }
  private submitFormInsert(): void {
    const product = { ...this.productForm.value };
    this.store.dispatch(addProduct({ product }));
  }
  private submitFormUpdate(): void {
    const product = { ...this.productForm.value, id: this.productForm.get('id')?.value };
    this.store.dispatch(upsertProduct({ product }));
  }
}
