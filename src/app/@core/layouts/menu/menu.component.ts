import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState } from '@store/store.module';
import { auth_login, auth_logout } from '@store/actions/auth.actions';
import * as fromAuthSelectors from '@store/selectors/auth.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public loggedIn$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loggedIn$ = this.store.pipe(select(fromAuthSelectors.selectIsAdmin));
  }

  loginHandler(): void {
    this.store.dispatch(auth_login());
  }

  logoutHandler(): void {
    this.store.dispatch(auth_logout());
  }
}
