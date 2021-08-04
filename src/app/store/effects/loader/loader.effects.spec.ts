import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoaderEffects } from './loader.effects';

describe('LoaderEffects', () => {
  let actions$: Observable<any>;
  let effects: LoaderEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoaderEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LoaderEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
