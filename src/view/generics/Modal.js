import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './Modal.css';


const modalRoot = document.getElementById('modal');

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = 'modal';

    this.background = document.createElement('div');
    this.background.className = 'modal__background';
    this.background.onclick = props.triggerClose;

    this.dialog = document.createElement('div');
    this.dialog.className = 'modal__dialog';

    this.el.appendChild(this.background);
    this.el.appendChild(this.dialog);
  }

  static propTypes = {
    triggerClose: PropTypes.func.isRequired,
  };

  componentDidMount = () => modalRoot.appendChild(this.el);

  componentWillUnmount = () => modalRoot.removeChild(this.el);

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.dialog,
    );
  }
}
