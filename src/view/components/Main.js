import React from 'react';
// import { Route } from 'react-router-dom';

// import { URI } from '../../view/constants';

// import { Home } from './Home';
// import { Header } from './Header';
// import { Login } from './Login';
// import { Register } from './Register';
// import { VerifyEmail } from './VerifyEmail';
// import { Forgot } from './Forgot';
// import { Restore } from './Restore';
// import { Meals } from './Meals';
// import { Settings } from './Settings';

import 'reset-css';
import './Main.css';


export function Main() {
  return (
    <div className="viewport">
      {/*<Header />*/}

      <main>
        {/*<Route exact path={URI.HOME} component={Home} />*/}
        {/*<Route exact path={URI.LOGIN} component={Login} />*/}
        {/*<Route exact path={URI.REGISTER} component={Register} />*/}
        {/*<Route exact path={URI.VERIFY} component={VerifyEmail} />*/}
        {/*<Route exact path={URI.FORGOT_PASSWORD} component={Forgot} />*/}
        {/*<Route exact path={URI.RESTORE_PASSWORD} component={Restore} />*/}
        {/*<Route exact path={URI.MEALS} component={Meals} />*/}
        {/*<Route exact path={URI.SETTINGS} component={Settings} />*/}
      </main>
    </div>
  );
}
