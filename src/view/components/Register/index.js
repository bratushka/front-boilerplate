import React from 'react';

import { RedirectMeals } from '../../redirects';

import { RegisterForm } from './RegisterForm';


export const Register = () => (
  <div className="page">
    <RedirectMeals />

    <RegisterForm />
  </div>
);
