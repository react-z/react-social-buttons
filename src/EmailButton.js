import ReactDOM from 'react-dom'
import React, { Component } from 'react'

export default class EmailButton extends Component {
  render() {
    const props = this.props;
    const href = `mailto:?body=${props.body}&subject=${props.subject}&` +
      `cc=${props.cc}&bcc=${props.bcc}`;

    return (
      <a
        style={props.style}
        href={href}
      >
        {props.button}
      </a>
    );
  };
}

/*
EmailButton.propTypes = {
  style: PropTypes.string,
  subject: PropTypes.string,
  cc: PropTypes.string,
  bcc: PropTypes.string,
  body: PropTypes.string.isRequired,
  button: PropTypes.node.isRequired,
};
*/
