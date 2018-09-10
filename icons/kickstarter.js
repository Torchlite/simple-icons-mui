'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ 'aria-labelledby': 'simpleicons-kickstarter-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
		_ref,
		_ref2
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(
	'title',
	{ id: 'simpleicons-kickstarter-icon' },
	'Kickstarter icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M9.604 8.18l4.4-6.38C14.838.6 15.91 0 17.231 0c1.072 0 2.002.381 2.789 1.144.783.765 1.176 1.675 1.176 2.738 0 .784-.207 1.479-.624 2.079l-3.967 5.769 4.853 6.153c.484.612.727 1.33.727 2.15 0 1.086-.381 2.018-1.145 2.798-.762.779-1.686 1.169-2.771 1.169-1.189 0-2.097-.387-2.721-1.16l-5.943-7.417v4.089c0 1.168-.202 2.074-.607 2.722C8.261 23.411 7.195 24 5.785 24c-1.282 0-2.276-.436-2.979-1.299-.66-.799-.99-1.856-.99-3.172V4.365c0-1.245.336-2.274 1.004-3.083C3.518.428 4.488 0 5.726 0c1.179 0 2.16.428 2.946 1.282.438.475.715.953.831 1.44.07.3.105.858.105 1.68V8.18h-.004z' });