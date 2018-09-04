'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-quantopian-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
		_ref,
		_ref2
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(
	'title',
	{ id: 'simpleicons-quantopian-icon' },
	'Quantopian icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M1.5 0h21c.828 0 1.5.672 1.5 1.5v21c0 .828-.672 1.5-1.5 1.5h-21C.672 24 0 23.328 0 22.5v-21C0 .672.672 0 1.5 0zM3 3v18h18V3H3zm2.4 10.8h2.4v4.8H5.4v-4.8zM9 9h2.4v9.6H9V9zm3.6 2.4H15v7.2h-2.4v-7.2zm3.599-6h2.4v13.2h-2.4V5.4z' });