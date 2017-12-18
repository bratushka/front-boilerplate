import React from 'react';
import PropTypes from 'prop-types';

import { InputError } from './InputError'

import './Select.css';


export const Select = ({
  input,
  meta,
  label,
  options,
}) => (
  <div className="select">
    <label htmlFor={input.name}>{label}</label>
    <select id={input.name} {...input}>
      <option />
      {options.map(({ title, value }) => (
        <option value={value} key={value}>{title || value}</option>
      ))}
    </select>

    <InputError errors={meta.error} />
  </div>
);
Select.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
