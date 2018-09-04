'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-khanacademy-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-khanacademy-icon' },
	'Khan Academy icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M2.469 22.395S-1.229 13.553 5.401 6.96C11.415.969 20.5.041 22.076 0c0 0 2.438 8.006-3.651 17.081-6.083 9.075-14.521 6.614-14.521 6.614s8.336-10.626 7.332-10.561c-.701.041-5.076 4.856-8.768 9.263' });