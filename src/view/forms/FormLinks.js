import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './FormLinks.css';


export const FormLinks = ({
  links,
}) => (
  <div className="form-links">
    {links.map(({title, to}) => (
      <Link key={title} to={to}>{title}</Link>
    ))}
  </div>
);
FormLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
