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

var PinterestButton = function (_React$Component) {
  _inherits(PinterestButton, _React$Component);

  function PinterestButton(props) {
    _classCallCheck(this, PinterestButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PinterestButton).call(this, props));

    _this.state = { initalized: false };
    return _this;
  }

  _createClass(PinterestButton, [{
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
      var pinbutton = _reactDom2.default.findDOMNode(this.refs.pinbutton);
      var pinscript = document.createElement("script");
      pinscript.src = "//assets.pinterest.com/js/pinit.js";
      pinscript.id = 'pinit-script';
      pinscript.onload = this.renderWidget.bind(this);
      pinbutton.parentNode.appendChild(pinscript);

      this.setState({ initalized: true });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var elem = document.getElementById("pinit-script");
      if (elem !== undefined) {
        //elem.parentNode.removeChild(elem);
      }
    }
  }, {
    key: 'renderWidget',
    value: function renderWidget() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        { ref: 'pinbutton',
          id: 'pinbutton',
          'data-pin-do': 'buttonBookmark',
          href: '//www.pinterest.com/pin/create/button/' },
        _react2.default.createElement('img', { src: '//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png' })
      );
    }
  }]);

  return PinterestButton;
}(_react2.default.Component);

exports.default = PinterestButton;