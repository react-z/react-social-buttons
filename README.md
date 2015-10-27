## react-social-buttons

[![npm version](https://badge.fury.io/js/react-social-buttons.svg)](https://badge.fury.io/js/react-social-buttons)

social buttons component for react, includes google, facebook, twitter, pinterest and more

![](https://raw.githubusercontent.com/StevenIseki/react-social-buttons/master/examples/screenshot.png)

## Install

``` js
npm install react-social-buttons --save
```

## Use

``` js
import { FacebookLikeButton, TwitterButton } from 'react-social-buttons';

class App {
  render {
    let url = "https://github.com";

    return (
      <div>
        <FacebookLikeButton url={url} />
        <TwitterButton url={url} />
      </div>
    );
  }
}
```
## Examples

**[simple example](https://github.com/StevenIseki/react-social-buttons/tree/master/examples/simple)**

    npm run start-simple

then open `http://127.0.0.1:5000`

**[react router example](https://github.com/StevenIseki/react-social-buttons/tree/master/examples/react-router)**

    npm run start-rr

then open `http://127.0.0.1:5000`

there is a home route which lists some books, each book has some social buttons

## Development

**build src to lib**

    npm run build

**run tests**

    npm install
    npm test

**to run tests in the browser...**

`npm install webpack -g`

compile test.js to a bundle with webpack

	webpack ./test/test.js ./test/test-bundle.js

open test.html to view the tests in the browser

## License

[MIT](http://isekivacenz.mit-license.org/)