import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import { TwitterButton, FacebookLikeButton, FacebookShareButton, FacebookMessengerButton,
         GoogleButton, GoogleHangoutButton, PinterestButton } from '../lib/main.js' /* 'react-social-buttons' */

class TestComponent extends Component {

  isBrowser () {
    return !(typeof document === "undefined" || typeof window === "undefined");
  }

 render () {
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

ReactDOM.render( <TestComponent />, document.getElementById('root') )
