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

var _ref = _react2.default.createElement('path', { d: 'M8 0c-.884 0-1.6.716-1.6 1.6v5.6c0 .883.716 1.6 1.6 1.6.884 0 1.6-.717 1.6-1.6V3.474c1.864.66 3.2 2.436 3.2 4.526 0 2.65-2.15 4.8-4.8 4.8S3.2 10.65 3.2 8c0-1.326.537-2.526 1.406-3.394.625-.625.625-1.638 0-2.263s-1.638-.625-2.263 0C.896 3.79 0 5.79 0 8c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8', 'fill-rule': 'nonzero' });