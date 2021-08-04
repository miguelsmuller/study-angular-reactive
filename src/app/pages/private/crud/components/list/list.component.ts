import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@store/store.module';
import { IProduct } from '@shared/schemas/product';

import * as ProductSelector from '../../state/product.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  view$: Observable<IProduct[]> = new Observable<IProduct[]>();
  @Output() selecteProduct = new EventEmitter<string>();

  ngOnInit(): void {
    this.view$ = this.store.pipe(select(ProductSelector.selectAllProducts));
  }

  setItem(productId: string): void {
    this.selecteProduct.emit(productId);
  }
}
