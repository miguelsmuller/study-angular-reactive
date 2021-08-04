import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GithubService } from '@core/services/github/github.service';
import { SafePipe } from '@shared/pipes/safe.pipe';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, SafePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
  providers: [GithubService],
})
export class HomeModule {}
