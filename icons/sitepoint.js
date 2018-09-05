'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-sitepoint-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-sitepoint-icon' },
	'SitePoint icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M2.471 10.533l1.771 1.688 5.598 5.141 2.4-2.291c.21-.297.194-.705-.046-.985L9.99 12.184l.01-.005-2.371-2.266c-.279-.314-.27-.78.021-1.079l6.39-6.076L11.146 0 2.475 8.238c-.664.633-.664 1.66 0 2.295h-.004zm19.056 2.937l-1.77-1.691-5.595-5.142-2.411 2.291c-.221.3-.207.705.045.985l2.205 1.891h-.006l2.369 2.265c.27.314.27.766-.029 1.064l-6.391 6.075L12.855 24l8.67-8.238c.664-.633.666-1.659 0-2.295l.002.003z' });