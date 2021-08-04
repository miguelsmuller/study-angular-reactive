import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { AppLayoutsModule } from '@core/app.layouts.module';
import { AppState, reducers } from '@store/store.module';
import * as fromAuthActions from '@store/actions/auth.actions';

import { AppComponent } from './app.component';

describe(`[${AppComponent.name}]`, () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [AppLayoutsModule, RouterTestingModule, StoreModule.forRoot(reducers)],
      providers: [provideMockStore<AppState>()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create the AppComponent', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should dispatch "AuthIsLoggedIn" action when NgOnInit', () => {
    const spy = spyOn(store, 'dispatch');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith({ type: fromAuthActions.auth_is_logged_in.type });
  });
});
