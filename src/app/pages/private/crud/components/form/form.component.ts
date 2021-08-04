import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { AppState } from '@store/store.module';
import { IProduct } from '@shared/schemas/product';

import * as ProductSelector from '../../state/product.selectors';
import { addProduct, upsertProduct, deleteProduct } from '../../state/product.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private store: Store<AppState>, private activeRoute: ActivatedRoute, private router: Router) {}

  /********************/
  /*    PROPERTIES    */
  /********************/
  @ViewChild('viewForm') viewForm!: NgForm;
  public reactiveForm!: FormGroup;

  /****************************/
  /*    DYNAMIC PROPERTIES    */
  /****************************/
  public get formId() {
    return this.reactiveForm.get('id');
  }
  public get formName() {
    return this.reactiveForm.get('name');
  }
  public get formCreatedAt() {
    return this.reactiveForm.get('createdAt');
  }
  public get formIsEnabled() {
    return this.reactiveForm.get('isEnabled');
  }
  public get formPhotoURL() {
    return this.reactiveForm.get('photoURL');
  }

  /********************/
  /*    LIFE CYCLE    */
  /********************/
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      id: new FormControl({ value: null, disabled: true }),
      name: new FormControl(null, [Validators.required]),
      createdAt: new FormControl(null, [Validators.required]),
      isEnabled: new FormControl(true),
      photoURL: new FormControl(null, [Validators.required]),
    });

    this.activeRoute.queryParams.subscribe((params) => {
      if (params['id']) {
        this.setForm(params.id);
      } else {
        this.setEmpty();
      }
    });
  }

  /***************************/
  /*    HANDLER WITH FORM    */
  /***************************/
  private setForm(id: string): void {
    this.store
      .pipe(
        select(ProductSelector.selectEntityById(id)),
        tap((product) => {
          if (product) {
            this.reactiveForm.patchValue({ ...product });
          }
        })
      )
      .subscribe();
  }
  private setEmpty(): void {
    if (this.viewForm) {
      this.viewForm.resetForm();
    }
    this.router.navigate(['/app/crud']);
  }

  /*********************************/
  /*    HANDLER WITH SUBMISSION    */
  /*********************************/
  public submitForm(): void {
    if (this.reactiveForm.valid) {
      if (!this.formId?.value) {
        this.submitFormInsert();
      } else {
        this.submitFormUpdate();
      }
      this.setEmpty();
    }
  }

  private submitFormInsert(): void {
    let objectFromForm: IProduct = { ...this.reactiveForm.value };
    this.store.dispatch(addProduct({ product: objectFromForm }));
  }

  private submitFormUpdate(): void {
    let objectFromForm: IProduct = { ...this.reactiveForm.value };
    objectFromForm.id = this.formId?.value;
    this.store.dispatch(upsertProduct({ product: objectFromForm }));
  }

  /*****************************/
  /*    HANDLER WITH DELETE    */
  /*****************************/
  public deleteItem(): void {
    this.store.dispatch(deleteProduct({ id: this.formId?.value }));
  }
}
