import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Field, Form, reduxForm } from 'redux-form';

import { FormTitle } from '../../forms/FormTitle';
import { InputDate } from '../../forms/InputDate';
import { InputTime } from '../../forms/InputTime';
import { Select } from '../../forms/Select';
import { SubmitButton } from '../../forms/SubmitButton';
import mealsActions from "../../../data/meals/actions";
import mealsSelectors from "../../../data/meals/selectors";


export class FiltersComponent extends Component {
  render = () => (
    <section>
      <Form
        onSubmit={this.props.handleSubmit}
        className="form"
      >
        <FormTitle title="Filters" />

        {this.props.users.length > 1 && (
          <Field
            name="owner__email"
            label="User"
            component={Select}
            options={this.props.users}
          />
        )}
        <Field name="date__gte" label="Date from" component={InputDate} />
        <Field name="date__lte" label="Date to" component={InputDate} />
        <Field name="time__gte" label="Time from" component={InputTime} />
        <Field name="time__lte" label="Time to" component={InputTime} />

        <SubmitButton label="Apply filters" />
      </Form>
    </section>
  );
}

const mapStateToProps = (state) => ({
  initialValues: mealsSelectors.getFilters(state).toJS(),
});

export const Filters = compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'FilterMeals',
    onSubmit: async (values, dispatch) => {
      await dispatch(mealsActions.setFilters(values));
    },
  }),
)(FiltersComponent);
