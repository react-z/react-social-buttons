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

var FacebookButton = (function (_React$Component) {
  function FacebookButton(props) {
    _classCallCheck(this, FacebookButton);

    _get(Object.getPrototypeOf(FacebookButton.prototype), 'constructor', this).call(this, props);
    this.state = { initalized: false };
  }

  _inherits(FacebookButton, _React$Component);

  _createClass(FacebookButton, [{
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

      var fbbutton = _react2['default'].findDOMNode(this.refs.fbbutton);
      var fbscript = document.createElement('script');
      fbscript.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=230650050380161';
      fbscript.id = 'facebook-jssdk';
      fbscript.onload = this.renderWidget.bind(this);
      fbbutton.parentNode.appendChild(fbscript);

      this.setState({ initalized: true });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var elem = document.getElementById('facebook-jssdk');
      if (elem !== undefined) {}
    }
  }, {
    key: 'renderWidget',
    value: function renderWidget() {
      if (this.props.type == 'share') {

        FB.XFBML.parse(_react2['default'].findDOMNode(this.refs.fbbutton));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', { ref: 'fbbutton', className: 'fb-like', 'data-href': this.props.url, 'data-layout': 'standard', 'data-action': 'like', 'data-show-faces': 'true', 'data-share': 'true' });
    }
  }]);

  return FacebookButton;
})(_react2['default'].Component);

exports['default'] = FacebookButton;
module.exports = exports['default'];

//elem.parentNode.removeChild(elem);