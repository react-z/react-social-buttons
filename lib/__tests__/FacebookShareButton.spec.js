"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _main = require("../main.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('FacebookShareButton renders the correct elements and props', function () {
  var url = 'https://mysite.com';
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_main.FacebookShareButton, {
    url: url
  }));
  expect(wrapper.instance().props.url).toEqual(url);
  expect(wrapper.find('.fb-share-button').length).toEqual(1); // console.log(wrapper.debug())
});