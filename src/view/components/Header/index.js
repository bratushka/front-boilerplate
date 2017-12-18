import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { URI } from '../../constants';
import userActions from '../../../data/user/actions';
import userSelectors from '../../../data/user/selectors';

import './styles.css';


const mapStateToProps = state => ({
  isLoggedIn: userSelectors.isLoggedIn(state),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userActions.logout()),
});

export const HeaderComponent = ({
  isLoggedIn,
  logout,
}) => (
  <header className="header">
    <div>
      <Link to={URI.HOME}>TopTal</Link>
    </div>

    <div>
      {isLoggedIn &&<Link to={URI.SETTINGS}>Settings</Link>}
      <Link to={URI.LOGIN} onClick={logout}>{isLoggedIn ? 'Logout' : 'Login'}</Link>
    </div>
  </header>
);

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderComponent);
