'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-ted-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-ted-icon' },
	'TED icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M2.431 9.886H0V7.665h7.53v2.221H5.1v6.45H2.431v-6.45zm5.514-2.221h7.31v2.221h-4.638v1.083h4.638v2.063h-4.638v1.08h4.638v2.225h-7.31V7.665zm10.43 6.451h1.046c1.664 0 1.907-1.352 1.907-2.166 0-.545-.179-2.063-2.115-2.063h-.854v4.23l.016-.001zm-2.67-6.451h4.384C22.98 7.665 24 9.8 24 11.985c0 2.66-1.409 4.351-4.434 4.351h-3.861V7.663v.002z' });