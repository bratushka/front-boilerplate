import React from 'react';
import PropTypes from 'prop-types';

import { InputError } from './InputError'

import './TextField.css';


export const TextField = ({
  input,
  meta,
  label,
}) => (
  <div className="text-field">
    <label htmlFor={input.name}>{label}</label>
    <textarea id={input.name} {...input} rows="5" />

    <InputError errors={meta.error} />
  </div>
);
TextField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
};
