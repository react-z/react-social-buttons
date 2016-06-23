'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FacebookLikeButton = function (_React$Component) {
  _inherits(FacebookLikeButton, _React$Component);

  function FacebookLikeButton(props) {
    _classCallCheck(this, FacebookLikeButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FacebookLikeButton).call(this, props));

    _this.state = { initalized: false };
    return _this;
  }

  _createClass(FacebookLikeButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: 'init',
    value: function init() {
      if (this.state.initalized) {
        return;
      }

      var fbbutton = _reactDom2.default.findDOMNode(this.refs.fbbutton);
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
      if (elem !== undefined) {
        elem.parentNode.removeChild(elem);
      }
    }
  }, {
    key: 'renderWidget',
    value: function renderWidget() {
      /*
         need to detect if it has already been parsed.
         if coming from react router it may need reparsing.
      */
      setTimeout(function () {
        var elem = document.getElementById('fbbutton');
        if (elem.getAttribute('fb-xfbml-state') === null) {
          FB.XFBML.parse();
        }
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'fbbutton',
        ref: 'fbbutton',
        className: 'fb-like',
        'data-href': this.props.url,
        'data-layout': 'standard',
        'data-action': 'like',
        'data-show-faces': 'true',
        'data-share': 'true' });
    }
  }]);

  return FacebookLikeButton;
}(_react2.default.Component);

exports.default = FacebookLikeButton;