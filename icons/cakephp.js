'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		_ref
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement('path', { d: 'M0 9.25v2.497c0 1.378 3.58 2.495 8 2.495v-2.495c-4.42 0-8-1.12-8-2.496zm14.256 1.555L8 9.25v2.497l6.256 1.555c1.09-.427 1.744-.967 1.744-1.555V9.25c0 .588-.655 1.128-1.744 1.555zM8 6.755V9.25c-4.418 0-8-1.118-8-2.496v-2.5c0-1.377 3.58-2.496 8-2.496 4.417 0 8 1.12 8 2.496v2.5c0 .587-.654 1.127-1.744 1.554L8 6.754z' });