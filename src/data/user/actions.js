import { Constants } from './constants';


export class Actions {
  static login = () => ({
    type: Constants.ACTIONS.LOGIN,
  });

  static logout = () => ({
    type: Constants.ACTIONS.LOGOUT,
  });
}
