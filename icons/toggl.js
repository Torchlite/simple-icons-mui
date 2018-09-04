'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-toggl-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-toggl-icon' },
	'Toggl icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M12 0C5.373 0 0 5.37 0 12s5.373 12 12 12c6.63 0 12-5.37 12-12S18.63 0 12 0zm-.84 4.67h1.68v8.36h-1.68V4.67zM12 18.155c-3.24-.002-5.865-2.63-5.864-5.868 0-2.64 1.767-4.956 4.314-5.655v1.71c-1.628.64-2.698 2.21-2.695 3.96 0 2.345 1.903 4.244 4.248 4.243 2.344-.002 4.244-1.903 4.243-4.248 0-1.745-1.07-3.312-2.694-3.95V6.63c2.55.7 4.314 3.018 4.314 5.66 0 3.24-2.626 5.864-5.865 5.864z' });