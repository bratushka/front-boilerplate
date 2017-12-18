import axios from 'axios';

import { JWT } from './JWT';


class ApiTemplate {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  URI = {
    login: '/accounts/login/',
    verifyJWT: '/accounts/verify-jwt/',
    register: '/accounts/register/',
    verifyEmail: (token) => `/accounts/verify-email/${token}/`,
    resetPassword: '/accounts/reset-password/',
    restorePassword: '/accounts/restore-password/',
    myAccount: '/accounts/my-account/',
    users: '/accounts/users/',

    meals: '/meals/meals/',
    meal: (id) => `/meals/meals/${id}/`,
  };

  getClient = (extraHeaders) => {
    const client = axios.create({
      baseURL: this.baseUrl,
      headers: {
        ...axios.defaults.headers,
        ...extraHeaders,
      },
    });

    const token = JWT.get();
    if (token) {
      client.defaults.headers.common['Authorization'] = `JWT ${token}`;
    } else {
      delete client.defaults.headers.common['Authorization'];
    }

    return client;
  };

  register = (email, password) => {
    const client = this.getClient();
    const payload = { email, password };

    return client.post(this.URI.register, payload);
  };

  verifyEmail = (token) => {
    const client = this.getClient();

    return client.post(this.URI.verifyEmail(token));
  };

  resetPassword = (email) => {
    const client = this.getClient();
    const payload = { email };

    return client.post(this.URI.resetPassword, payload);
  };

  restorePassword = (token, password) => {
    const client = this.getClient();
    const payload = { token, password };

    return client.post(this.URI.restorePassword, payload);
  };

  login = (email, password) => {
    const client = this.getClient();
    const payload = { email, password };

    return client.post(this.URI.login, payload);
  };

  verifyJWT = () => {
    const client = this.getClient();
    const payload = { token: JWT.get() };

    return client.post(this.URI.verifyJWT, payload);
  };

  getMyAccount = () => {
    const client = this.getClient();

    return client.get(this.URI.myAccount);
  };

  updateMyAccount = (data) => {
    const client = this.getClient();

    return client.put(this.URI.myAccount, data);
  };

  getUsers = () => {
    const client = this.getClient();

    return client.get(this.URI.users);
  };

  getMeals = (page, limit, filters) => {
    const client = this.getClient();
    const params = {
      limit: limit,
      offset: limit * (page - 1),
      ...filters,
    };

    return client.get(this.URI.meals, { params });
  };

  createMeal = (date, time, text, calories) => {
    const client = this.getClient();
    const payload = {
      date,
      time,
      text,
      calories,
    };

    return client.post(this.URI.meals, payload);
  };

  updateMeal = (id, date, time, text, calories) => {
    const client = this.getClient();
    const payload = {
      date,
      time,
      text,
      calories,
    };

    return client.put(this.URI.meal(id), payload);
  };

  deleteMeal = (id) => {
    const client = this.getClient();

    return client.delete(this.URI.meal(id));
  };
}

export const BASE_URL = 'http://localhost:5000';
export const API = new ApiTemplate(`${BASE_URL}/api`);
