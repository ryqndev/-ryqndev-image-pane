"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.symbol.description.js");

var _clsx = _interopRequireDefault(require("clsx"));

var _react = require("react");

var _ImagePaneModule = _interopRequireDefault(require("./ImagePane.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ImagePane(_ref) {
  let {
    className,
    src,
    alt,
    content,
    children,
    contentClassName
  } = _ref;
  const [open, setOpen] = (0, _react.useState)(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: (0, _clsx.default)(className, _ImagePaneModule.default['image-container']),
    onClick: () => setOpen(prev => !prev),
    src: src,
    alt: alt
  }), /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx.default)(_ImagePaneModule.default.container, contentClassName, open && _ImagePaneModule.default.open)
  }, /*#__PURE__*/React.createElement("button", {
    className: _ImagePaneModule.default.close,
    onClick: () => setOpen(prev => !prev)
  }, "+"), /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx.default)(_ImagePaneModule.default.faint)
  }, content === null || content === void 0 ? void 0 : content.tag), /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx.default)(_ImagePaneModule.default.dots, _ImagePaneModule.default.top)
  }), /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx.default)(_ImagePaneModule.default.dots, _ImagePaneModule.default.bottom)
  }), /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx.default)(_ImagePaneModule.default.content, open && _ImagePaneModule.default.open)
  }, /*#__PURE__*/React.createElement("span", null, content === null || content === void 0 ? void 0 : content.tag), /*#__PURE__*/React.createElement("h2", null, content === null || content === void 0 ? void 0 : content.title), /*#__PURE__*/React.createElement("p", null, content === null || content === void 0 ? void 0 : content.description), children), /*#__PURE__*/React.createElement("img", {
    className: (0, _clsx.default)(_ImagePaneModule.default.image, open && _ImagePaneModule.default.open),
    src: src,
    alt: alt
  })));
}

var _default = ImagePane;
exports.default = _default;