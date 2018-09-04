'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-yahoo-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-yahoo-icon' },
	'Yahoo! icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M13.508 24s-.84-.152-1.517-.152c-.609 0-1.523.152-1.523.152l.191-10.195C9.244 11.359 5.086 3.91 2.491 0c1.305.297 1.854.279 3.165 0l.02.034c1.652 2.926 4.179 7.005 6.315 10.54C14.1 7.101 17.42 1.678 18.32 0c1.02.268 2.049.258 3.189 0-1.201 1.617-5.566 9.173-8.205 13.805L13.5 24h.008z' });