'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-eventbrite-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-eventbrite-icon' },
	'Eventbrite icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M8.128 0h11.011c.176 0 .264.09.264.267v4.124c0 .18-.09.267-.264.267H9.422c-.177 0-.265.09-.265.27v4.491c.045.18.135.27.266.27h8.617c.179 0 .269.09.269.27v3.982c0 .18-.09.27-.269.27H9.429c-.134 0-.221.09-.266.27V19c0 .179.09.269.265.269h10.046c.135 0 .224.075.27.21.06.225.104.494.119.837.015.346-.015.72-.119 1.154-.104.434-.285.837-.54 1.197-.254.374-.673.689-1.242.944-.585.254-1.288.389-2.096.389H4.399c-.178 0-.266-.091-.266-.269V3.997c0-1.107.389-2.052 1.164-2.829C6.076.389 7.017 0 8.128 0z' });