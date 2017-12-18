import generateStore from '../store';
import { Actions } from './actions';
import { Constants } from './constants';
import { Selectors } from './selectors';


describe(`${Constants.MODULE_NAME} module`, () => {
  it('login action', () => {
    const store = generateStore();
    expect(Selectors.isLoggedIn(store.getState())).toBeFalsy();

    store.dispatch(Actions.login());
    expect(Selectors.isLoggedIn(store.getState())).toBeTruthy();
  });

  it('logout action', () => {
    const store = generateStore();
    store.dispatch(Actions.login());
    expect(Selectors.isLoggedIn(store.getState())).toBeTruthy();

    store.dispatch(Actions.logout());
    expect(Selectors.isLoggedIn(store.getState())).toBeFalsy();
  });
});
