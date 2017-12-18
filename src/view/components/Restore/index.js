import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, reduxForm, SubmissionError } from 'redux-form';

import { RedirectMeals } from '../../redirects';
import userActions from '../../../data/user/actions';
import { URI } from '../../constants';
import { FormError } from '../../forms/FormError';
import { FormTitle } from '../../forms/FormTitle';
import { InputPassword } from '../../forms/InputPassword';
import { SubmitButton } from '../../forms/SubmitButton';
import { FormLinks } from '../../forms/FormLinks';


const RestoreComponent = ({
  handleSubmit,
  error,
}) => (
  <div className="login-form__wrapper">
    <RedirectMeals />

    <Form onSubmit={handleSubmit} className="form login-form">
      <FormTitle title="New password" />
      <FormError errors={error} />

      <Field name="password" label="Password" component={InputPassword} />
      <SubmitButton />

      <FormLinks links={[
        { title: 'Login', to: URI.LOGIN },
        { title: 'Register', to: URI.REGISTER },
      ]} />
    </Form>
  </div>
);
RestoreComponent.propTypes = {
  handleSubmit: PropTypes.func,
  error: PropTypes.arrayOf(PropTypes.string),
};

export const Restore = reduxForm({
  form: 'RestoreForm',
  onSubmit: async (values, dispatch, props) => {
    try {
      await dispatch(userActions.restorePassword(props.match.params.token, values.password));
    } catch(err) {
      throw new SubmissionError(err || { _error: ['Something went wrong'] });
    }
  },
})(RestoreComponent);
