import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

export default class WhatsAppButton extends Component {
  render () {
    const props = this.props;

    return (
      <a href={`whatsapp://send?text=${props.msg}`}>
        {props.button}
      </a>
    );
  };
}

WhatsAppButton.propTypes = {
  msg: PropTypes.string.isRequired,
  button: PropTypes.node.isRequired,
};
