import ReactDOM from 'react-dom'
import React, { Component } from 'react'

export default class PinterestButton extends Component {
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
    const pinbutton = ReactDOM.findDOMNode(this.refs.pinbutton)
    const pinscript = document.createElement('script')
    pinscript.src = '//assets.pinterest.com/js/pinit.js'
    pinscript.id = 'pinit-script'
    pinbutton.parentNode.appendChild(pinscript)

    this.setState({ initalized: true })
  }

  componentWillUnmount() {
    let elem = document.getElementById('pinit-script')
    if (elem !== undefined) {
      elem.parentNode.removeChild(elem)
    }
  }

  render() {
    return (
      <a
        ref="pinbutton"
        id="pinbutton"
        data-pin-do="buttonBookmark"
        href="//www.pinterest.com/pin/create/button/"
      >
        <img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png" />
      </a>
    )
  }
}
