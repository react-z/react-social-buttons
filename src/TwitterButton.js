import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TwitterButton extends Component {
  static get propTypes() {
    return {
      url: PropTypes.string.isRequired,
      props: PropTypes.string
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
    var twitterbutton = ReactDOM.findDOMNode(this.refs.twitterbutton)
    var twitterscript = document.createElement('script')
    twitterscript.src = '//platform.twitter.com/widgets.js'
    twitterscript.id = 'twitter-wjs'
    twitterscript.onload = this.renderWidget.bind(this)
    twitterbutton.parentNode.appendChild(twitterscript)

    this.setState({ initalized: true })
  }

  componentWillUnmount() {
    let elem = document.getElementById('twitter-wjs')
    if (elem !== undefined) {
      elem.parentNode.removeChild(elem)
    }
  }

  renderWidget() {
    let text = ''
    if (this.props.text != undefined) {
      text = this.props.text
    }

    twttr.widgets.createShareButton(
      this.props.url,
      ReactDOM.findDOMNode(this.refs.twitterbutton),
      { text: text }
    )
  }

  render() {
    return <div ref="twitterbutton" />
  }
}
