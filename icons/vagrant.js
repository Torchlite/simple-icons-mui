'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ 'aria-labelledby': 'simpleicons-vagrant-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-vagrant-icon' },
	'Vagrant icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M5.672 6.774V4.917l3.164-1.822L3.56.005.397 1.852v2.263L7.52 21.41 12 23.995v-6.496l2.107-1.224-.024-.015 4.245-9.486V4.917l5.275-3.065L20.439.005l-5.272 3.087h-.003V5.202L12 12.584v2.467l-2.11 1.224zm3.164-3.66L8.814 3.1 5.672 4.917v1.857l4.218 9.501L12 15.234v-2.65L8.836 5.202zm9.492 1.803v1.857l-4.22 9.101L12 17.332v6.663l4.521-2.607L23.603 4.05V1.852z' });