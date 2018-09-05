'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-lanyrd-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-lanyrd-icon' },
	'Lanyrd icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M10.814 23.586c-2.486.814-2.736.686-3.859-2.801l-2.753-8.519c-.653-2.018-2.654-7.455-2.991-8.498C.588 1.829.588 1.723 4.24.534c2.865-.938 2.979-.906 4.02 2.322.84 2.604 1.377 4.699 2.236 7.357l2.344 7.246L20.329 15c1.479-.488 1.973-.465 2.386 1.352l.305 1.373c.344 1.6-.463 2.006-1.317 2.283L10.814 23.58v.006z' });