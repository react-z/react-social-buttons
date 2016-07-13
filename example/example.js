import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import {
  TwitterButton,
  FacebookLikeButton,
  FacebookShareButton,
  FacebookMessengerButton,
  GoogleButton,
  GoogleHangoutButton,
  PinterestButton,
  WhatsAppButton
} from '../lib/main.js'; /* 'react-social-buttons' */

class TestComponent extends Component {

  isBrowser () {
    return !(typeof document === "undefined" || typeof window === "undefined");
  }

 render () {
   let url = ''
   if (this.isBrowser()) {
     url = window.location.href;
   }

   const whatsAppProps = {
     msg: url,
     button: <img
      src={'http://4.bp.blogspot.com/-lpSFmxRBGHk/VS_qaC4lVpI/' +
        'AAAAAAAADVA/_w2ak19mhYU/s1600/whatsapp-share-button.png'}
      width={100}
     />
   };

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
       <br />
       <WhatsAppButton {...whatsAppProps} />
     </div>
   )
 }
}

ReactDOM.render( <TestComponent />, document.getElementById('root') )
