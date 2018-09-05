'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-slickpic-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
		_ref,
		_ref2,
		_ref3
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(
	'title',
	{ id: 'simpleicons-slickpic-icon' },
	'SlickPic icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M21.483 18.308L6.056 14.085l2.52-9.201L24 9.104l-2.517 9.204zm-13.414-5.37l12.263 3.354 1.654-6.033L9.72 6.9l-1.65 6.034v.004z' });

var _ref3 = _react2.default.createElement('path', { d: 'M8.526 15.795l-4.891 1.311-1.625-6.045 4.146-1.11.501-1.835L0 9.902l2.478 9.215 9.178-2.467' });