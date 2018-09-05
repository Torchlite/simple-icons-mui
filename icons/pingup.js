'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-pingup-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-pingup-icon' },
	'Pingup icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M13.667 0H1.721v24h7.536V9.717h-2.76c-.504 0-.65-.314-.32-.698l4.324-5.044c.327-.384.867-.384 1.195 0l4.324 5.044c.314.384.18.698-.33.698h-2.759v6.676h.73c6.225 0 8.617-4.309 8.617-8.481C22.291 3.906 19.666 0 13.667 0' });