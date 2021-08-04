import * as fromApp from './app.actions';

describe('loadApps', () => {
  it('should return an action', () => {
    expect(fromApp.toogle_sidebar().type).toBe('[APP] Toogle Sidebar');
  });
});
