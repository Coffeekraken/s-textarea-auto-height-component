'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _sNativeWebComponent = require('coffeekraken-sugar/js/core/sNativeWebComponent');

var _sNativeWebComponent2 = _interopRequireDefault(_sNativeWebComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_native) {
  _inherits(Component, _native);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'componentMount',


    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */
    value: function componentMount() {
      _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'componentMount', this).call(this);

      // listen for keydown event on the component
      this.addEventListener('keydown', this._onKeydown.bind(this));

      // set the height for the first time
      this.setTextareaHeight();
    }

    /**
     * On keydown
     * @param   {KeyboardEvent}    e    The keydown event
     */

  }, {
    key: '_onKeydown',
    value: function _onKeydown(e) {
      var _this2 = this;

      setTimeout(function () {
        _this2.setTextareaHeight();
      });
    }

    /**
     * Set the textarea height depending on the content
     */

  }, {
    key: 'setTextareaHeight',
    value: function setTextareaHeight() {
      var _this3 = this;

      // disable all transition during the resize
      this.style.transition = 'none';

      // set the height to 1px
      // so we will have a scroll and we will be able to get
      // his height to apply as the component height
      this.style.height = '1px';

      // calculate the height to apply
      var height = this.scrollHeight + 2;

      // apply the new height to the textarea
      this.style.height = height + 'px';

      // enable back the transitions
      setTimeout(function () {
        _this3.style.transition = '';
      });
    }
  }], [{
    key: 'defaultProps',

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
      return {};
    }
  }]);

  return Component;
}((0, _sNativeWebComponent2.default)(window.HTMLTextAreaElement));

exports.default = Component;