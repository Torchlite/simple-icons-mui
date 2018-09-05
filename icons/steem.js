'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-steem-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-steem-icon' },
	'Steem icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M3.927 2.596c.264.045-.397 1.778-.028 3.76.318 1.697 4.313 8.275 4.148 10.529-.128 1.418-3.408 4.74-3.753 4.52-.377-.105.996-2.361.486-4.244C4.19 14.97.673 9.301.677 6.798c0-1.832 3.011-4.32 3.25-4.202zM11.44.005c.336.058-.506 2.271-.034 4.791.405 2.17 5.501 10.555 5.292 13.432-.166 1.809-4.348 6.043-4.789 5.76-.479-.131 1.271-3.008.622-5.406-.755-2.796-5.238-10.026-5.235-13.218 0-2.338 3.842-5.509 4.144-5.359zm7.754 2.591c.27.045-.393 1.778-.023 3.761.318 1.697 4.313 8.275 4.148 10.529-.125 1.418-3.408 4.74-3.754 4.52-.377-.105.996-2.361.488-4.244-.594-2.192-4.11-7.861-4.105-10.363 0-1.832 3.014-4.32 3.248-4.202h-.002z' });