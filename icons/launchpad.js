'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-launchpad-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-launchpad-icon' },
	'Launchpad icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M21.999 18.676l-4.432-2.556-4.783 2.764V24l9.215-5.324zM11.216 24v-5.119l-4.785-2.762-4.43 2.557L11.216 24zm.779-6.475l4.789-2.765V9.236l-4.785-2.76-4.783 2.76v5.527l4.781 2.761-.002.001zM1.22 6.682v10.641l4.432-2.559V9.239L1.219 6.68l.001.002zm19.615 1.121l-2.484 1.436v5.522l4.43 2.559V6.678l-1.946 1.125zM2.001 5.324l4.435 2.559 4.781-2.762V.003L2.001 5.324zm15.566 2.559l4.434-2.559L12.782 0v5.121l4.785 2.762z' });