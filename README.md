## react-social-buttons

[![npm version](https://badge.fury.io/js/detectie.svg)](https://badge.fury.io/js/detectie)

social buttons component for react, includes google, facebook, twitter, pinterest and more

``` js
import { FacebookButton, TwitterButton } from 'react-social-buttons';

class App {
  render {
    let url = "https://github.com";

    return (
      <div>
        <FacebookButton url={url} />
        <TwitterButton url={url} />
      </div>
    );
  }
}
```

## Running Tests

**modify test.js for any tests**

    npm install
    npm test

**to run tests in the browser...**

`npm install webpack -g`

compile test.js to a bundle with webpack

	webpack ./test/test.js ./test/test-bundle.js

open test.html to view the tests in the browser

## License

[MIT](http://isekivacenz.mit-license.org/)