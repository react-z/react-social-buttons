import React from 'react'
let { RouteHandler, Link } = require('react-router')

/* from 'react-social-buttons' in your app */
import { 
         TwitterButton, 
         FacebookLikeButton,
         FacebookShareButton, 
         FacebookMessengerButton,
         GoogleButton, 
         GoogleHangoutButton,
         PinterestButton 
       } from '../../../../lib/main.js'  

class SocialButtons extends React.Component {

 constructor(props) {
    super(props)
  }

  isBrowser () {
    return !(typeof document === "undefined" || typeof window === "undefined");
  }

  render() {

    let url = ''
    if (this.isBrowser()) {
      url = window.location.href;
    }

    return (
      <div id="buttons">
        <FacebookLikeButton url={url} />
        <br />
        <FacebookShareButton url={url} />
        <br />
        <FacebookMessengerButton url={url} />
        <br />
        <TwitterButton url={url} text="this page is cool"/>
        <br />
        <GoogleButton url={url} />
        <br />
        <GoogleHangoutButton url={url} />
        <br />
        <PinterestButton url={url} />
      </div>
    )
  }

}

module.exports = SocialButtons