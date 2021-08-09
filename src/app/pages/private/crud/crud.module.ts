import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { CrudComponent } from './crud.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

import * as fromProduct from './state/product.reducer';
import { ProductEffects } from './state/product.effects';
import { DataBaseAbstractService } from '@core/services/database/database.abstract.service';
import { ProductService } from '@core/services/database/product.service';

@NgModule({
  declarations: [CrudComponent, ListComponent, FormComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProduct.productsFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects]),
    RouterModule.forChild([
      { path: '', component: CrudComponent },
      { path: ':id', component: CrudComponent },
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
  ],
  providers: [
    { provide: DataBaseAbstractService, useClass: ProductService },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
})
export class CrudModule {}
