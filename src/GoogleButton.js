import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class GoogleButton extends Component {
  static get propTypes() {
    return {
      url: PropTypes.string
    }
  }

  constructor(props) {
    super(props)
    this.state = { initalized: false }
  }

  componentDidMount() {
    this.init()
  }

  init() {
    if (this.state.initalized) {
      return
    }

    let gpbutton = ReactDOM.findDOMNode(this.refs.gpbutton)
    let gpscript = document.createElement('script')
    gpscript.src = '//apis.google.com/js/platform.js'
    gpscript.id = 'gapi'
    gpscript.onload = this.renderWidget.bind(this)
    gpbutton.parentNode.appendChild(gpscript)

    this.setState({ initalized: true })
  }

  componentWillUnmount() {
    let elem = document.getElementById('gapi')
    if (elem !== undefined) {
      elem.parentNode.removeChild(elem)
    }
  }

  renderWidget() {
    gapi.plusone.render('gpbutton')
  }

  render() {
    return (
      <div
        ref="gpbutton"
        id="gpbutton"
        className="g-plusone"
        data-annotation="bubble"
        data-align="left"
        data-width="300"
        data-size="standard"
        data-recommendations="true"
        data-href={this.props.url}
      />
    )
  }
}
