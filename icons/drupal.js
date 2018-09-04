'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-drupal-icon', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, props),
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
	{ id: 'simpleicons-drupal-icon' },
	'Drupal icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M20.45 3.552C18.258 1.257 15.233.006 12 .006 5.431.006.007 5.428.007 12S5.43 23.994 12 23.994 23.995 18.572 23.995 12c0-3.233-1.251-6.258-3.546-8.448zM12 19.822c-3.65 0-6.57-2.92-6.57-6.57 0-3.025 2.085-5.111 3.858-6.884 1.252-1.252 2.4-2.4 2.712-3.755.313 1.252 1.46 2.399 2.712 3.65 1.773 1.774 3.859 3.86 3.859 6.884 0 3.65-2.92 6.571-6.571 6.675z' });