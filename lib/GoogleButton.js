'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var GoogleButton = (function (_React$Component) {
  function GoogleButton(props) {
    _classCallCheck(this, GoogleButton);

    _get(Object.getPrototypeOf(GoogleButton.prototype), 'constructor', this).call(this, props);
    this.state = { initalized: false };
  }

  _inherits(GoogleButton, _React$Component);

  _createClass(GoogleButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.init();
    }
  }, {
    key: 'init',
    value: function init() {
      if (this.state.initalized) {
        return;
      }

      var gpbutton = _react2['default'].findDOMNode(this.refs.gpbutton);
      var gpscript = document.createElement('script');
      gpscript.src = '//apis.google.com/js/platform.js';
      gpscript.id = 'gapi';
      gpscript.onload = this.renderWidget.bind(this);
      gpbutton.parentNode.appendChild(gpscript);

      // {"parsetags": "explicit"}
      // you can pass attributes in as key:value pairs in a call to gapi.plusone.render.
      gapi.plusone.render('gplus-button');

      this.setState({ initalized: true });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'renderWidget',
    value: function renderWidget() {
      if (this.props.type == 'share') {

        FB.XFBML.parse(_react2['default'].findDOMNode(this.refs.gpbutton));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', { ref: 'gpbutton', id: 'gplus-button', 'data-href': this.props.url });
    }
  }]);

  return GoogleButton;
})(_react2['default'].Component);

exports['default'] = GoogleButton;
module.exports = exports['default'];