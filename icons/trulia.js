'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ 'aria-labelledby': 'simpleicons-trulia-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-trulia-icon' },
	'Trulia icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M12 0C8.19.021 5.729 2.58 5.729 6.445c0 3.201 2.088 5.94 3.277 10.1.684 2.385 1.052 5.303 1.242 7.455h3.504c.192-2.152.558-5.07 1.241-7.455 1.189-4.16 3.277-6.898 3.277-10.1C18.271 2.58 15.81.021 12 0zm.02 9.852c-1.584 0-2.869-1.286-2.869-2.869 0-1.582 1.285-2.867 2.869-2.867 1.585 0 2.869 1.283 2.869 2.867s-1.285 2.869-2.869 2.869z' });