import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@store/store.module';
import { loadAllProducts } from '../crud/state/product.actions';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent {
  constructor(private store: Store<AppState>) {}

  refreshList(): void {
    this.store.dispatch(loadAllProducts());
  }

  newItem(): void {}
}
