import React from 'react';
import PropTypes from 'prop-types';

import './InputError.css';


export const InputError = ({
  errors,
}) => !errors ? null : (
  <div className="input-error">
    <ul>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  </div>
);
InputError.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};
