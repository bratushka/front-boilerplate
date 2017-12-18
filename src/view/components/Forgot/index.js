import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, reduxForm, SubmissionError } from 'redux-form';

import { RedirectMeals } from '../../redirects';
import userActions from '../../../data/user/actions';
import { URI } from '../../constants';
import { FormError } from '../../forms/FormError';
import { FormTitle } from '../../forms/FormTitle';
import { InputText } from '../../forms/InputText';
import { SubmitButton } from '../../forms/SubmitButton';
import { FormLinks } from '../../forms/FormLinks';


const ForgotComponent = ({
  handleSubmit,
  error,
  submitSucceeded,
}) => (
  <div className="login-form__wrapper">
    <RedirectMeals />

    {submitSucceeded ? (
      <div>
        <h1>Please check your email</h1>
        <p>
          You should have already received the link to restore the password.
        </p>
      </div>
    ) : (
      <Form onSubmit={handleSubmit} className="form login-form">
        <FormTitle title="Forgot password" />
        <FormError errors={error} />

        <Field name="email" label="email" component={InputText} />
        <SubmitButton />

        <FormLinks links={[
          { title: 'Login', to: URI.LOGIN },
          { title: 'Register', to: URI.REGISTER },
        ]} />
      </Form>
    )}
  </div>
);
ForgotComponent.propTypes = {
  handleSubmit: PropTypes.func,
  error: PropTypes.arrayOf(PropTypes.string),
  submitSucceeded: PropTypes.bool,
};

export const Forgot = reduxForm({
  form: 'ForgotForm',
  onSubmit: async (values) => {
    try {
      await userActions.resetPassword(values.email);
    } catch(err) {
      throw new SubmissionError({ _error: ['Please check if the email is correct'] });
    }
  },
})(ForgotComponent);
