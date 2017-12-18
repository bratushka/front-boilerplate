import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import userSelectors from '../../data/user/selectors';
import { URI } from '../constants';


function mapStateToProps(state) {
  return {
    isLoggedIn: userSelectors.isLoggedIn(state),
  };
}

export const PureRedirectLogin = ({
  isLoggedIn,
}) => (
  !isLoggedIn && <Redirect to={URI.LOGIN} />
);

PureRedirectLogin.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export const RedirectLogin = connect(mapStateToProps)(PureRedirectLogin);
