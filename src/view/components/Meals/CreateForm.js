import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, reduxForm, SubmissionError } from 'redux-form';

import { formErrorAdapter } from '../../../utils/formErrorAdapter';
import mealsActions from '../../../data/meals/actions';
import { FormError } from '../../forms/FormError';
import { FormTitle } from '../../forms/FormTitle';
import { TextField } from '../../forms/TextField';
import { InputDate } from '../../forms/InputDate';
import { InputTime } from '../../forms/InputTime';
import { InputNumber } from '../../forms/InputNumber';
import { SubmitButton } from '../../forms/SubmitButton';


const CreateFormComponent = ({
  handleSubmit,
  error,
}) => (
  <Form onSubmit={handleSubmit} className="form meal-form">
    <FormTitle title="New meal" />
    <FormError errors={error} />

    <Field name="date" label="Date" component={InputDate} />
    <Field name="time" label="Time" component={InputTime} />
    <Field name="calories" label="Calories" component={InputNumber} />
    <Field name="text" label="Text" component={TextField} />
    <SubmitButton />
  </Form>
);
CreateFormComponent.propTypes = {
  afterSubmitSuccess: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  error: PropTypes.arrayOf(PropTypes.string),
};

export const CreateForm = reduxForm({
  form: 'CreateFormMeal',
  onSubmit: async (values, dispatch, props) => {
    try {
      await dispatch(mealsActions.createMeal(
        values.date,
        values.time,
        values.text,
        values.calories
      ));
      props.afterSubmitSuccess();
    } catch(err) {
      throw new SubmissionError(formErrorAdapter(err));
    }
  },
})(CreateFormComponent);
