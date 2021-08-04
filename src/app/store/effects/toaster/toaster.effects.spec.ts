import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ToasterEffects } from './toaster.effects';

describe('ToasterEffects', () => {
  let actions$: Observable<any>;
  let effects: ToasterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToasterEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(ToasterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
