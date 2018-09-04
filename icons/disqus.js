'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-disqus-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-disqus-icon' },
	'Disqus icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M12.438 23.654c-2.853 0-5.46-1.04-7.476-2.766L0 21.568l1.917-4.733C1.25 15.36.875 13.725.875 12 .875 5.564 6.05.346 12.44.346 18.82.346 24 5.564 24 12c0 6.438-5.176 11.654-11.562 11.654zm6.315-11.687v-.033c0-3.363-2.373-5.76-6.462-5.76H7.877V17.83h4.35c4.12 0 6.525-2.5 6.525-5.863h.004zm-6.415 2.998h-1.29V9.04h1.29c1.897 0 3.157 1.08 3.157 2.945v.03c0 1.884-1.26 2.95-3.157 2.95z' });