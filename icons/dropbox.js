'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		_ref
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(
	'g',
	{ 'fill-rule': 'nonzero' },
	_react2.default.createElement('path', { d: 'M4.707.56L0 3.63l3.254 2.606L8 3.308 4.707.558zM0 8.844l4.707 3.073L8 9.17 3.254 6.237 0 8.844zm8 .326l3.293 2.748L16 8.845l-3.254-2.607L8 9.168zm8-5.538L11.293.56 8 3.307l4.746 2.93L16 3.632z' }),
	_react2.default.createElement('path', { d: 'M8.01 9.76L4.707 12.5l-1.414-.922v1.035L8.01 15.44l4.716-2.827v-1.035l-1.413.923L8.01 9.76z' })
);