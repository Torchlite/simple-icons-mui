'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' }, props),
		_ref
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement('path', { d: 'M8 0C3.582 0 0 3.58 0 8s3.582 8 8 8c4.42 0 8-3.58 8-8s-3.58-8-8-8zm0 12.103c-2.158 0-3.91-1.75-3.91-3.91 0-1.802 1.22-3.318 2.877-3.772v1.14C5.914 5.97 5.17 7 5.17 8.2c0 1.563 1.267 2.83 2.83 2.83 1.563 0 2.83-1.267 2.83-2.83 0-1.2-.744-2.223-1.796-2.636V4.42c1.657.455 2.876 1.97 2.876 3.773 0 2.16-1.75 3.91-3.91 3.91zm-.56-3.416h1.12V3.114H7.44v5.573z', fillRule: 'evenodd' });