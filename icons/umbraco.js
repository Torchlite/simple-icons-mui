'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-umbraco-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-umbraco-icon' },
	'Umbraco icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M0 12C0 5.522 5.363.319 12 .319S24 5.522 24 12c0 6.476-5.363 11.681-12 11.681S0 18.477 0 12zm11.734 3.98c-1.168 0-2.123-.104-2.76-.211-.744-.158-1.223-.584-1.541-1.168-.266-.586-.424-1.539-.371-2.814 0-.689.053-1.327.104-1.965.108-.636.16-1.167.267-1.594l.105-.424v-.052c0-.105-.105-.213-.212-.213l-1.54-.212h-.052c-.105 0-.213.105-.266.16 0 .104-.053.159-.104.371-.108.478-.161.902-.267 1.486-.109.685-.163 1.378-.159 2.071 0 0-.053.159 0 1.434s.266 2.283.69 3.08c.425.742 1.116 1.326 2.124 1.645 1.01.32 2.389.479 4.142.479h.213c1.753 0 3.132-.158 4.14-.479 1.01-.318 1.701-.902 2.126-1.645.425-.795.638-1.805.69-3.08.053-1.275 0-1.434 0-1.434 0-.743-.104-1.435-.16-2.069-.105-.638-.158-1.063-.266-1.487-.053-.212-.053-.319-.105-.371 0-.107-.105-.16-.266-.16h-.053l-1.54.212c-.105 0-.213.107-.213.213v.052l.106.424c.106.427.158.957.266 1.593.105.639.105 1.275.105 1.965 0 1.275-.104 2.177-.371 2.814-.266.586-.795 1.01-1.539 1.168-.639.16-1.594.213-2.762.213h-.531v-.002z' });