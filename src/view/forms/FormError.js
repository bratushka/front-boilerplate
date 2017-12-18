import React from 'react';
import PropTypes from 'prop-types';

import './FormError.css';


export const FormError = ({
  errors,
}) => !errors ? null : (
  <div className="form-error">
    <ul>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  </div>
);
FormError.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};
