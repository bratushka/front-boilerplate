import { Constants } from './constants';


export class Selectors {
  static isLoggedIn = (state) => {
    return state[Constants.MODULE_NAME]
      .get(Constants.PATHS.loggedIn())
    ;
  };
}
