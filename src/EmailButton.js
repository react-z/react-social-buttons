import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class EmailButton extends Component {
  static get propTypes() {
    return {
      style: PropTypes.string,
      subject: PropTypes.string,
      cc: PropTypes.string,
      bcc: PropTypes.string,
      body: PropTypes.string.isRequired,
      button: PropTypes.node.isRequired
    }
  }

  render() {
    const props = this.props
    const href =
      `mailto:?body=${props.body}&subject=${props.subject}&` +
      `cc=${props.cc}&bcc=${props.bcc}`

    return (
      <a style={props.style} href={href}>
        {props.button}
      </a>
    )
  }
}
