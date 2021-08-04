import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@shared/libraries/material.module';

import { PrivateComponent } from './layouts/private/private.component';
import { PublicComponent } from './layouts/public/public.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, HttpClientModule],
  declarations: [PrivateComponent, PublicComponent, MenuComponent, FooterComponent],
  exports: [PrivateComponent, PublicComponent],
})
export class AppLayoutsModule {}
