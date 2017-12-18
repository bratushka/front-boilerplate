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

import './styles.css';


const LoginFormComponent = ({
  handleSubmit,
  error,
}) => (
  <div className="login-form__wrapper">
    <Form onSubmit={handleSubmit} className="form login-form">
      <FormTitle title="Login" />
      <FormError errors={error} />

      <Field name="email" label="Email" component={InputText} />
      <Field name="password" label="Password" component={InputPassword} />
      <SubmitButton />

      <FormLinks links={[
        { title: 'Register', to: URI.REGISTER },
        { title: 'Forgot password', to: URI.FORGOT_PASSWORD },
      ]} />
    </Form>
  </div>
);
LoginFormComponent.propTypes = {
  handleSubmit: PropTypes.func,
  error: PropTypes.arrayOf(PropTypes.string),
};

export const LoginForm = reduxForm({
  form: 'LoginForm',
  onSubmit: async (values, dispatch) => {
    try {
      await dispatch(userActions.login(values.email, values.password));
    } catch(err) {
      throw new SubmissionError(formErrorAdapter(err));
    }
  },
  initialValues: { email: 'admin@localhost', password: 'adminadmin'},
})(LoginFormComponent);
