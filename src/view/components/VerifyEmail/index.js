import React, { Component } from 'react';
import { connect } from 'react-redux';

import userActions from '../../../data/user/actions';
import { RedirectMeals } from '../../redirects';

import loadingImage from '../../static/loading.gif';
import './styles.css';


class VerifyEmailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidMount = async () => {
    try{
      await this.props.verifyEmail(this.props.match.params.token);
    } catch(_) {
      this.setState({ error: true });
    }
  };

  render = () => (
    <div className="verify-email">
      <RedirectMeals />

      {this.state.error ? (
        <p>Sorry, Mario, your princess is in another castle.</p>
      ) : (
        <img src={loadingImage} alt="" className="verify-email__image" />
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  verifyEmail: (token) => dispatch(userActions.verifyEmail(token)),
});

export const VerifyEmail = connect(null, mapDispatchToProps)(VerifyEmailComponent);
