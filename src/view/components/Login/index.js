import React from 'react';

import { RedirectMeals } from '../../redirects';

import { LoginForm } from './LoginForm';


export const Login = () => (
  <div className="page">
    <RedirectMeals />

    <LoginForm />
  </div>
);
