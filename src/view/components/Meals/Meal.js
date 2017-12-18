import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import mealSelectors from '../../../data/meals/selectors';
import { SubmitButton } from '../../forms/SubmitButton';
import { Container, Modal } from '../../generics';

import { UpdateForm } from './UpdateForm';
import { DeleteForm } from './DeleteForm';


class MealComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdate: false,
      showDelete: false,
    };
  }

  static propTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object,
  };

  render = () => (
    <Container>
      <article className="meal">
        <div>
          <p>{this.props.item.get('user')}</p>
          <p>{this.props.item.get('date')}</p>
          <p>{this.props.item.get('time')}</p>
          <p>Calories: {this.props.item.get('calories')}</p>
        </div>
        <div>
          {this.props.item.get('text')}
        </div>
        <div>
          <form className="action-button" onSubmit={e => {
            e.preventDefault();
            this.setState({ showUpdate: true });
          }}>
            <SubmitButton label="update" />
          </form>

          <form className="action-button" onSubmit={e => {
            e.preventDefault();
            this.setState({ showDelete: true });
          }}>
            <SubmitButton label="delete" />
          </form>
        </div>
      </article>

      {this.state.showUpdate && (
        <Modal triggerClose={() => this.setState({ showUpdate: false })}>
          <UpdateForm
            initialValues={this.props.item.toJS()}
            afterSubmitSuccess={() => this.setState({ showUpdate: false })}
            id={this.props.item.get('id')}
          />
        </Modal>
      )}

      {this.state.showDelete && (
        <Modal triggerClose={() => {}}>
          <DeleteForm
            id={this.props.item.get('id')}
          />
        </Modal>
      )}
    </Container>
  );
}

const mapStateToProps = (state, props) => ({
  item: mealSelectors.getItem(state, props.id),
});

export const Meal = connect(mapStateToProps)(MealComponent);
