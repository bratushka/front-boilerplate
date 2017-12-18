import Immutable from 'immutable';

import { Constants } from './constants';


const initialState = Immutable.fromJS({
  loggedIn: false,
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.ACTIONS.LOGIN:
      return state.withMutations(mutable => {
        mutable.set(Constants.PATHS.loggedIn(), true);

        return mutable;
      });

    case Constants.ACTIONS.LOGOUT:
      return state.withMutations(mutable => {
        mutable.set(Constants.PATHS.loggedIn(), false);

        return mutable;
      });

    default:
      return state;
  }
};
