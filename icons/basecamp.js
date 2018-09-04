'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-basecamp-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-basecamp-icon' },
	'Basecamp icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M12 2C5.54 2 .48 10.22 0 17.16 2.028 20.68 6.915 22 12 22s9.975-1.32 12-4.84C23.52 10.218 18.46 2 12 2zm.15 18.4c-9.54 0-10.456-4.034-10.456-4.034l.18-.976S4.5 9.72 6.15 9.72s2.34 2.34 3.69 2.34 4.274-5.19 5.324-5.19c1.047 0 2.82 1.95 4.27 3.75 1.45 1.802 2.878 4.887 2.878 4.887l-.008.034.15.886S21.688 20.4 12.148 20.4z' });