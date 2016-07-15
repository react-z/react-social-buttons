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

var RedditButton = function (_Component) {
  _inherits(RedditButton, _Component);

  function RedditButton() {
    _classCallCheck(this, RedditButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RedditButton).apply(this, arguments));
  }

  _createClass(RedditButton, [{
    key: 'redirectToReddit',
    value: function redirectToReddit() {
      window.location.href = '//www.reddit.com/submit?url=' + ('' + encodeURIComponent(window.location));

      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      return _react2.default.createElement(
        'a',
        { href: '//www.reddit.com/submit',
          onClick: this.redirectToReddit.bind(this) },
        props.button
      );
    }
  }]);

  return RedditButton;
}(_react.Component);

exports.default = RedditButton;


RedditButton.propTypes = {
  url: _react.PropTypes.string.isRequired,
  button: _react.PropTypes.node.isRequired
};