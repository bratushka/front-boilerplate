import React from 'react';

import { RedirectLogin, RedirectMeals } from '../../redirects';


export const Home = () => (
  <div>
    <RedirectLogin />
    <RedirectMeals />
  </div>
);
