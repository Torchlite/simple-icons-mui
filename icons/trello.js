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

var _ref = _react2.default.createElement('path', { d: 'M2 0C.895 0 0 .896 0 2v12c0 1.105.896 2 2 2h12c1.105 0 2-.896 2-2V2c0-1.105-.896-2-2-2H2zm8 2.08c-.53 0-.96.43-.96.96v5.08c0 .53.43.96.96.96h2.96c.53 0 .96-.43.96-.96V3.04c0-.53-.43-.96-.96-.96H10zm-6.96 0c-.53 0-.96.43-.96.96v9.08c0 .53.43.96.96.96H6c.53 0 .96-.43.96-.96V3.04c0-.53-.43-.96-.96-.96H3.04z' });