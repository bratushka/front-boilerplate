import React from 'react';
import PropTypes from 'prop-types';
import { Form, reduxForm, SubmissionError } from 'redux-form';

import { formErrorAdapter } from '../../../utils/formErrorAdapter';
import { FormTitle } from '../../forms/FormTitle';
import { FormError } from '../../forms/FormError';
import { SubmitButton } from '../../forms/SubmitButton';

import mealsActions from "../../../data/meals/actions";


const DeleteFormComponent = ({
  handleSubmit,
  error,
}) => (
  <Form onSubmit={handleSubmit} className="form meal-form">
    <FormTitle title="Delete meal" />
    <FormError errors={error} />

    <SubmitButton label="Delete" />
  </Form>
);
DeleteFormComponent.propTypes = {
  id: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func,
  error: PropTypes.arrayOf(PropTypes.string),
};

export const DeleteForm = reduxForm({
  form: 'DeleteFormMeal',
  onSubmit: async (values, dispatch, props) => {
    try {
      await dispatch(mealsActions.deleteMeal(props.id));
    } catch(err) {
      throw new SubmissionError(formErrorAdapter(err));
    }
  },
})(DeleteFormComponent);
