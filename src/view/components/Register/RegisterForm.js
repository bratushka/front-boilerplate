import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, reduxForm, SubmissionError } from 'redux-form';

import userActions from '../../../data/user/actions';
import { formErrorAdapter } from '../../../utils/formErrorAdapter';
import { URI } from '../../constants';
import { FormError } from '../../forms/FormError';
import { FormTitle } from '../../forms/FormTitle';
import { InputPassword } from '../../forms/InputPassword';
import { InputText } from '../../forms/InputText';
import { SubmitButton } from '../../forms/SubmitButton';
import { FormLinks } from '../../forms/FormLinks';


const RegisterFormComponent = ({
  handleSubmit,
  error,
  submitSucceeded,
}) => (
  <div className="login-form__wrapper">
    {submitSucceeded ? (
      <div>
        <h1>Thank you for registering</h1>
        <p>
          Soon you will receive an email with instructions
          to proceed your registration.
        </p>
      </div>
    ) : (
      <Form onSubmit={handleSubmit} className="form login-form">
        <FormTitle title="Registration" />
        <FormError errors={error} />

        <Field name="email" label="Email" component={InputText} />
        <Field name="password" label="Password" component={InputPassword} />
        <SubmitButton />

        <FormLinks links={[
          { title: 'Login', to: URI.LOGIN },
          { title: 'Forgot password', to: URI.FORGOT_PASSWORD },
        ]} />
      </Form>
    )}
  </div>
);
RegisterFormComponent.propTypes = {
  handleSubmit: PropTypes.func,
  error: PropTypes.arrayOf(PropTypes.string),
};

export const RegisterForm = reduxForm({
  form: 'RegisterForm',
  onSubmit: async (values) => {
    try {
      await userActions.register(values.email, values.password);
    } catch(err) {
      throw new SubmissionError(formErrorAdapter(err));
    }
  },
})(RegisterFormComponent);
