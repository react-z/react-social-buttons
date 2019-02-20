import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RedditButton extends Component {
  static get propTypes() {
    return {
      url: PropTypes.string.isRequired,
      button: PropTypes.node.isRequired
    }
  }

  redirectToReddit() {
    window.location.href =
      `//www.reddit.com/submit?url=` + `${encodeURIComponent(window.location)}`

    return false
  }

  render() {
    const props = this.props

    return (
      <a href={'//www.reddit.com/submit'} onClick={this.redirectToReddit}>
        {props.button}
      </a>
    )
  }
}
