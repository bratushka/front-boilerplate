import React from 'react';
import PropTypes from 'prop-types';

import { InputError } from './InputError'

import './InputText.css';


export const InputText = ({
  input,
  meta,
  label,
  type,
}) => (
  <div className="input-text">
    <label htmlFor={input.name}>{label}</label>
    <input type={type} id={input.name} {...input} />

    <InputError errors={meta.error} />
  </div>
);
InputText.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
};
InputText.defaultProps = {
  type: 'text',
};
