export class Constants {
  static MODULE_NAME = 'user';

  static ACTIONS = {
    LOGIN: `${Constants.MODULE_NAME}/LOGIN`,
    LOGOUT: `${Constants.MODULE_NAME}/LOGOUT`,
  };

  static PATHS = {
    loggedIn: () => 'loggedIn',
  };
}
