import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { URI } from '../constants';
import userSelectors from "../../data/user/selectors";


const RedirectMealsComponent = ({
  isLoggedIn,
}) => (
  isLoggedIn && <Redirect to={URI.MEALS} />
);
RedirectMealsComponent.propTypes = {
  isLoggedIn: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: userSelectors.isLoggedIn(state),
  };
}

export const RedirectMeals = connect(mapStateToProps)(RedirectMealsComponent);
