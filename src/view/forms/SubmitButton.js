import React from 'react';
import PropTypes from 'prop-types';

import './SubmitButton.css';


export const SubmitButton = ({
  label,
  disabled,
}) => (
  <div>
    <input
      className="submit-button"
      type="submit"
      disabled={disabled}
      defaultValue={label}
    />
  </div>
);
SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
};
SubmitButton.defaultProps = {
  label: 'Submit',
  disabled: false,
};
