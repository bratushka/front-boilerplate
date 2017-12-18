import React from 'react';
import PropTypes from 'prop-types';

import './FormTitle.css';


export const FormTitle = ({
  title,
}) => (
  <div className="form-title">
    <h2>
      {title}
    </h2>
  </div>
);
FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
