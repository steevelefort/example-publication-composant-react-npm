"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    children,
    isOpen,
    setIsOpen
  } = _ref;
  return isOpen ? /*#__PURE__*/_react.default.createElement("div", {
    className: "myModalContainer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "myModal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "myModalClose",
    onClick: () => {
      setIsOpen(false);
    }
  }, "\u274E"), children)) : null;
};
var _default = Modal;
exports.default = _default;