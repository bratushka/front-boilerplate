import React, { Component } from 'react';
import { connect } from 'react-redux';

import accountActions from '../../../data/user/actions';
import accountSelectors from '../../../data/user/selectors';
import mealsActions from '../../../data/meals/actions';
import mealsSelectors from '../../../data/meals/selectors';
import { Container, Pagination, Modal } from '../../generics';
import { RedirectLogin } from '../../redirects';
import { SubmitButton } from '../../forms/SubmitButton';

import { Meal } from './Meal';
import { CreateForm } from './CreateForm';
import { Filters } from './Filters';

import './styles.css';


class MealsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      creationForm: false,
      filters: false,
    };
  }

  componentDidMount = () => {
    this.props.getMeals(1);
    this.props.getUsers();
  };

  componentWillUnmount = () => {
    this.props.resetFilters();
  };

  getUserOptions = () => this.props
    .users
    .map(user => ({ value: user }))
    .toArray()
  ;

  render = () => (
    <Container>
      <RedirectLogin />

      <div>
        <form className="action-button" onSubmit={e => {
          e.preventDefault();
          this.setState({ creationForm: true });
        }}>
          <SubmitButton label="New meal" />
        </form>

        <form className="action-button" onSubmit={e => {
          e.preventDefault();
          this.setState({ filters: !this.state.filters });
        }}>
          <SubmitButton label="Filters" />
        </form>

        <div />
      </div>

      {this.state.filters && <Filters users={this.getUserOptions()} />}

      <div className="meals">
        {this.props.items.keySeq().toList().map(id => (
          <Meal key={id} id={id} />
        ))}
      </div>

      <Pagination
        current={this.state.currentPage}
        total={this.props.totalPages}
        onClick={page => {
          this.setState({ currentPage: page });
          this.props.getMeals(page);
        }}
      />

      {this.state.creationForm && (
        <Modal triggerClose={() => this.setState({ creationForm: false })}>
          <CreateForm afterSubmitSuccess={() => this.setState({ creationForm: false })} />
        </Modal>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  items: mealsSelectors.getItems(state),
  totalPages: mealsSelectors.getTotalPages(state),
  users: accountSelectors.users(state),
});

const mapDispatchToProps = dispatch => ({
  getMyAccount: () => dispatch(accountActions.getMyAccount()),
  getUsers: () => dispatch(accountActions.getUsers()),
  getMeals: (page) => dispatch(mealsActions.getMeals(page)),
  resetFilters: () => dispatch(mealsActions.setFilters()),
});

export const Meals = connect(mapStateToProps, mapDispatchToProps)(MealsComponent);
