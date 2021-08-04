import * as fromAuth from './auth.actions';

describe('loadAuths', () => {
  it('should return an action', () => {
    expect(fromAuth.auth_is_logged_in().type).toBe('[APP_AUTH] verify auth user');
  });
});
