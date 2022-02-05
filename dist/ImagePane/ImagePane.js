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

var _jsxRuntime = require("react/jsx-runtime");

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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: (0, _clsx.default)(className, _ImagePaneModule.default['image-container']),
      onClick: () => setOpen(prev => !prev),
      src: src,
      alt: alt
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _clsx.default)(_ImagePaneModule.default.container, contentClassName, open && _ImagePaneModule.default.open),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: _ImagePaneModule.default.close,
        onClick: () => setOpen(prev => !prev),
        children: "+"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _clsx.default)(_ImagePaneModule.default.faint),
        children: content === null || content === void 0 ? void 0 : content.tag
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _clsx.default)(_ImagePaneModule.default.dots, _ImagePaneModule.default.top)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _clsx.default)(_ImagePaneModule.default.dots, _ImagePaneModule.default.bottom)
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _clsx.default)(_ImagePaneModule.default.content, open && _ImagePaneModule.default.open),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: content === null || content === void 0 ? void 0 : content.tag
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          children: content === null || content === void 0 ? void 0 : content.title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: content === null || content === void 0 ? void 0 : content.description
        }), children]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: (0, _clsx.default)(_ImagePaneModule.default.image, open && _ImagePaneModule.default.open),
        src: src,
        alt: alt
      })]
    })]
  });
}

var _default = ImagePane;
exports.default = _default;