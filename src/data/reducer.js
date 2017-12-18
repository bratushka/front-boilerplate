import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import { userConstants, userReducer } from 'data/user';


const reducer = combineReducers({
  [userConstants.MODULE_NAME]: userReducer,

  router: routerReducer,
  form: formReducer,
});

export default reducer;
