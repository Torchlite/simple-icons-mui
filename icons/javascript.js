'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' }, props),
		_ref
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement('path', { d: 'M0 0h16v16H0V0zm14.69 12.184c-.117-.73-.593-1.343-2.003-1.915-.49-.23-1.035-.39-1.198-.76-.06-.22-.07-.34-.03-.47.1-.43.61-.56 1.01-.44.26.08.5.28.65.6.69-.45.69-.45 1.17-.75-.18-.28-.27-.4-.39-.52-.42-.47-.98-.71-1.89-.69l-.47.06c-.45.11-.88.35-1.14.67-.76.86-.54 2.36.38 2.98.91.68 2.24.83 2.41 1.47.16.78-.58 1.03-1.31.94-.54-.12-.84-.39-1.17-.89l-1.22.7c.14.32.3.46.54.74 1.16 1.17 4.06 1.11 4.58-.67.02-.06.16-.47.05-1.1zM8.7 7.354H7.202c0 1.292-.006 2.576-.006 3.87 0 .822.042 1.576-.092 1.807-.22.46-.786.4-1.044.32-.264-.13-.398-.31-.553-.57-.042-.07-.074-.13-.085-.13l-1.217.75c.203.42.5.78.883 1.01.57.34 1.336.45 2.138.27.522-.15.972-.46 1.207-.94.34-.62.268-1.38.265-2.23.008-1.37 0-2.74 0-4.12z', fillRule: 'evenodd' });