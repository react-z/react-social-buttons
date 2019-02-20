import ReactDOM from 'react-dom'
import React, { Component } from 'react'

export default class GoogleHangoutButton extends Component {
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

    let ghbutton = ReactDOM.findDOMNode(this.refs.ghbutton)
    let gpscript = document.createElement('script')
    gpscript.src = '//apis.google.com/js/platform.js'
    gpscript.id = 'gapi'
    gpscript.onload = this.renderWidget.bind(this)
    ghbutton.parentNode.appendChild(gpscript)

    this.setState({ initalized: true })
  }

  componentWillUnmount() {
    let elem = document.getElementById('gapi')
    if (elem !== undefined) {
      elem.parentNode.removeChild(elem)
    }
  }

  renderWidget() {
    gapi.hangout.render('ghbutton', {
      topic: 'cats',
      render: 'createhangout',
      hangout_type: 'onair',
      initial_apps: [
        {
          app_id: '184219133185',
          start_data: 'dQw4w9WgXcQ',
          app_type: 'ROOM_APP'
        }
      ],
      widget_size: 72
    })
  }

  render() {
    return <div ref="ghbutton" id="ghbutton" />
  }
}
