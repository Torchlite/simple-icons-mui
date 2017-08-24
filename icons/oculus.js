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

var _ref = _react2.default.createElement('path', { d: 'M12.09 9.3c-.213.147-.45.236-.704.277-.255.04-.508.033-.762.033H5.376c-.255 0-.508.008-.763-.033-.254-.042-.49-.13-.705-.278-.428-.3-.685-.78-.685-1.3 0-.53.258-1.01.686-1.3.21-.15.45-.24.7-.28.25-.04.5-.04.76-.04h5.25c.25 0 .51-.01.76.03s.49.13.7.27c.43.29.68.78.68 1.3s-.26 1-.69 1.3zm2.116-5.037c-.563-.452-1.208-.764-1.91-.933-.4-.097-.803-.14-1.215-.153-.3-.01-.6-.007-.91-.007H5.84c-.305 0-.61-.003-.915.007-.412.014-.814.056-1.216.153-.7.17-1.35.482-1.91.934C.66 5.174 0 6.547 0 8c0 1.454.66 2.827 1.793 3.737.564.452 1.21.764 1.91.933.402.097.804.14 1.216.153.3.01.6.007.91.007h4.33c.3 0 .61.003.91-.007.41-.013.81-.056 1.21-.153.7-.17 1.34-.482 1.91-.934C15.34 10.826 16 9.453 16 8c0-1.454-.66-2.827-1.794-3.737z', 'fill-rule': 'nonzero' });