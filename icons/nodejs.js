'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', xlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 16 16' }, props),
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
	'defs',
	null,
	_react2.default.createElement('path', { id: 'a', d: 'M7.623.101l-6.246 3.62A.757.757 0 0 0 1 4.377v7.244c0 .27.144.52.377.655L7.624 15.9a.754.754 0 0 0 .754 0l6.245-3.623a.76.76 0 0 0 .377-.655V4.377c0-.27-.144-.52-.378-.656L8.378.1a.757.757 0 0 0-.756 0' })
);

var _ref2 = _react2.default.createElement('use', { href: '#a', 'fill-rule': 'evenodd' });