import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class WhatsAppButton extends Component {
  static get propTypes() {
    return {
      msg: PropTypes.string.isRequired,
      button: PropTypes.node.isRequired
    }
  }

  render() {
    const props = this.props

    return <a href={`whatsapp://send?text=${props.msg}`}>{props.button}</a>
  }
}
