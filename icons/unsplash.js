'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ 'aria-labelledby': 'simpleicons-unsplash-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-unsplash-icon' },
	'Unsplash icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M15.6,13.575 C15.6,15.6 13.95,17.175 12,17.175 C10.05,17.175 8.4,15.6 8.4,13.575 C8.4,11.55 10.05,9.975 12,9.975 C14.025,10.05 15.6,11.625 15.6,13.575 Z M24,8.025 L24,19.2 C24,20.925 22.575,22.425 20.775,22.425 L3.225,22.425 C1.425,22.425 0,21 0,19.2 L0,7.95 C0,6.225 1.425,4.725 3.225,4.725 L6,4.725 L6.6,3 C6.9,2.175 7.875,1.5 8.775,1.5 L15.225,1.5 C16.125,1.5 17.1,2.175 17.4,3 L18,4.8 L20.775,4.8 C22.575,4.8 24,6.225 24,8.025 Z M17.55,13.65 C17.55,10.575 15.075,8.025 11.925,8.025 C8.85,8.025 6.3,10.575 6.3,13.65 C6.3,16.725 8.775,19.275 11.925,19.275 C15.075,19.2 17.55,16.725 17.55,13.65 Z' });