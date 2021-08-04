import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@store/store.module';
import { loadAllProducts } from '../crud/state/product.actions';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  public selectedProduct: string | null = null;

  ngOnInit(): void {
    this.store.dispatch(loadAllProducts());
    this.selectedProduct = null;
  }

  refreshList(): void {
    this.store.dispatch(loadAllProducts());
  }

  setProduct(producId: string | null): void {
    this.selectedProduct = producId;
  }
}
