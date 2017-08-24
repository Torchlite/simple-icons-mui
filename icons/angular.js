'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'title', role: 'img', viewBox: '0 0 24 24', fillRule: 'evenodd', xmlns: 'http://www.w3.org/2000/svg' }, props),
		_ref,
		_ref2,
		_ref3
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(
	'title',
	null,
	'Angular'
);

var _ref2 = _react2.default.createElement('path', { d: 'M10.19 13.067h3.62L12 8.772' });

var _ref3 = _react2.default.createElement('path', { d: 'M12 2L2.096 5.486l1.51 12.925L12 23.002l8.394-4.588 1.51-12.926L12 2zm6.18 16.023h-2.308l-1.244-3.066H9.372l-1.244 3.066h-2.31L12 4.32l6.18 13.703z' });