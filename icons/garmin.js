'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' }, props),
		_ref
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement('path', { d: 'M14.68 15.11H1.323c-.514 0-.925-.257-1.13-.668a1.254 1.254 0 0 1 0-1.336L6.87 1.548c.257-.411.668-.668 1.13-.668.514 0 .925.257 1.13.668l6.679 11.558c.257.411.257.925 0 1.336-.206.463-.617.668-1.13.668z', fillRule: 'evenodd' });