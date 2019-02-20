import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FacebookMessengerButton extends Component {
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

    let fbsendbutton = ReactDOM.findDOMNode(this.refs.fbsendbutton)
    let fbscript = document.createElement('script')
    fbscript.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0'
    fbscript.id = 'facebook-jssdk'
    fbscript.onload = this.renderWidget.bind(this)
    fbsendbutton.parentNode.appendChild(fbscript)

    this.setState({ initalized: true })
  }

  componentWillUnmount() {
    let elem = document.getElementById('facebook-jssdk')
    if (elem !== undefined) {
      elem.parentNode.removeChild(elem)
    }
  }

  renderWidget() {
    /*
       need to detect if it has already been parsed.
       if coming from react router it may need reparsing.
    */
    setTimeout(function() {
      let elem = document.getElementById('fbsendbutton')
      if (elem.getAttribute('fb-xfbml-state') === null) {
        FB.XFBML.parse()
      }
    }, 1000)
  }

  render() {
    return (
      <div
        id="fbsendbutton"
        ref="fbsendbutton"
        className="fb-send"
        data-href={this.props.url}
      />
    )
  }
}
