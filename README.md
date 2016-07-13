## react-social-buttons

[![npm version](https://badge.fury.io/js/react-social-buttons.svg)](https://badge.fury.io/js/react-social-buttons)

social buttons component for react, includes google, facebook, twitter, pinterest and more

![](https://raw.githubusercontent.com/StevenIseki/react-social-buttons/master/example/screenshot.png)

## Install

``` js
npm install react-social-buttons --save
```

## Versions

#### `1.0.3` uses React `^0.13.1`

#### `1.0.5` uses React `^15.1.0`

## Use

``` js
import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';
import {
  TwitterButton,
  FacebookLikeButton,
  FacebookShareButton,
  FacebookMessengerButton,
  GoogleButton,
  GoogleHangoutButton,
  PinterestButton,
  WhatsAppButton
} from 'react-social-buttons';

class TestComponent extends Component {

  isBrowser () {
    return !(typeof document === "undefined" || typeof window === "undefined");
  }

 render () {
   let url = ''
   if (this.isBrowser()) { url = window.location.href; }

   let whatsAppProps = {
     msg: 'test',
     button: <span>{'Your custom content'}</span>,
   };

   return (
     <div id="buttons">
       <FacebookLikeButton url={url} />
       <FacebookShareButton url={url} />
       <FacebookMessengerButton url={url} />
       <TwitterButton url={url} text="this page is cool"/>
       <GoogleButton url={url} />
       <GoogleHangoutButton url={url} />
       <PinterestButton url={url} />
       <WhatsAppButton {...whatsAppProps} />
     </div>
   )
 }
}

ReactDOM.render( <TestComponent />, document.getElementById('root') )
```

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
