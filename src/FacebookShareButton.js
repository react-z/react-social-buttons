import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FacebookShareButton extends Component {
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

    let fbsharebutton = ReactDOM.findDOMNode(this.refs.fbsharebutton)
    let fbscript = document.createElement('script')
    fbscript.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0'
    fbscript.id = 'facebook-jssdk'
    fbscript.onload = this.renderWidget.bind(this)
    fbsharebutton.parentNode.appendChild(fbscript)

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
      let elem = document.getElementById('fbbutton')
      if (elem.getAttribute('fb-xfbml-state') === null) {
        FB.XFBML.parse()
      }
    }, 1000)
  }

  render() {
    return (
      <div
        id="fbsharebutton"
        ref="fbsharebutton"
        className="fb-share-button"
        data-href={this.props.url}
        data-layout="button_count"
      />
    )
  }
}
