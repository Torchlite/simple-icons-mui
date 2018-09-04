'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-visualstudiocode-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-visualstudiocode-icon' },
	'Visual Studio Code icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M24 2.5v19L18 24 0 18.5v-.561l18 1.545V0zM1 13.111L4.385 10 1 6.889l1.418-.827L5.853 8.65 12 3l3 1.456v11.088L12 17l-6.147-5.65-3.434 2.589zM7.644 10L12 13.283V6.717z' });