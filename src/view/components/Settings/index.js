import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, Form, reduxForm, SubmissionError } from 'redux-form';
import classNames from 'classnames';

import { RedirectLogin } from '../../redirects';
import userActions from '../../../data/user/actions';
import userSelectors from '../../../data/user/selectors';
import { FormError } from '../../forms/FormError';
import { FormTitle } from '../../forms/FormTitle';
import { InputNumber } from '../../forms/InputNumber';
import { SubmitButton } from '../../forms/SubmitButton';
import { formErrorAdapter } from '../../../utils/formErrorAdapter';
import { Container } from '../../generics';

import './styles.css';


class SettingsComponent extends Component {
  componentDidMount = async () => {
    await this.props.getSettings();
    this.props.change('daily_calories', this.props.dailyCalories);
  };

  render = () => {
    const balance = this.props.dailyCalories - this.props.consumedCalories;
    const board = {
      className: classNames('balance', {
        alert: balance < 0,
        warning: balance === 0,
        ok: balance > 0,
      }),
      text: classNames({
        'You eat too much': balance < 0,
        'You\'ve eaten enough for today': balance === 0,
        'Good job!': balance > 0,
      }),
    };

    return (
      <div className="login-form__wrapper">
        <RedirectLogin />

        <Form onSubmit={this.props.handleSubmit} className="form">
          <FormTitle title="Settings" />
          {this.props.error && <FormError errors={this.props.error} />}

          <Field
            name="daily_calories"
            label="Max calories per day"
            component={InputNumber}
          />

          <SubmitButton label="Save changes" />
        </Form>

        <Container>
          <div className={board.className}>
            <Container>
              <p>{board.text}</p>
              {balance > 0 && <p>You can eat {balance} more calories today!</p>}
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dailyCalories: userSelectors.dailyCalories(state),
  consumedCalories: userSelectors.consumedCalories(state),
});

const mapDispatchToProps = (dispatch) => ({
  getSettings: () => dispatch(userActions.getMyAccount()),
});

export const Settings = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'SettingsForm',
    onSubmit: async (values, dispatch) => {
      try {
        await dispatch(userActions.updateMyAccount(values));
      } catch(err) {
        throw new SubmissionError(formErrorAdapter(err));
      }
    },
  }),
)(SettingsComponent);
