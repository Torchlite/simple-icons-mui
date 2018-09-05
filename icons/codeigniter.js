'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-codeigniter-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-codeigniter-icon' },
	'CodeIgniter icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M8.49 24c-1.54-.68-2.586-2.146-2.723-3.824.09-1.727 1.002-3.305 2.45-4.246-.238.58-.18 1.24.15 1.77.376.525 1.022.777 1.655.646.902-.254 1.43-1.19 1.176-2.092-.09-.316-.27-.602-.516-.818-1.02-.83-1.532-2.133-1.35-3.436.175-.69.557-1.314 1.096-1.785-.405 1.08.737 2.146 1.504 2.67 1.36.816 2.67 1.713 3.924 2.686 1.37 1.08 2.117 2.77 2 4.5-.308 1.84-1.61 3.36-3.385 3.93 3.55-.79 7.21-3.61 7.28-7.61-.07-3.2-1.98-6.072-4.9-7.38h-.13c.065.157.096.326.09.496.01-.11.01-.22 0-.33.016.13.016.26 0 .39-.222.91-1.14 1.47-2.052 1.248-.364-.09-.69-.295-.924-.59-1.17-1.5 0-3.207.196-4.857.12-2.11-.844-4.127-2.554-5.36.856 1.427-.284 3.3-1.113 4.366-.83 1.066-2.03 1.86-3.008 2.79-1.054.98-2.02 2.058-2.887 3.21-1.874 2.29-2.61 5.31-2 8.205.836 2.79 3.155 4.886 6.015 5.43H8.5z' });