'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

exports.default = function (props) {
	return _react2.default.createElement(_SvgIcon2.default, _extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props), _ref);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var _ref = _react2.default.createElement('path', { d: 'M15.594 4.374c-1.85.054-4.084-1.398-4.95-1.945-.08-.05-.097-.1-.18-.14-.09-.05-.184-.1-.278-.15v5.34h-.002c.003.48-.204.98-.503 1.46l-.02.04c-.86 1.4-2.68 2.21-4.39 1.63-1.66-.56-2.1-2.17-1.22-3.59L4.08 7c.85-1.39 2.67-2.21 4.38-1.63.13.043.252.096.37.154V1.66c-.614-.165-1.26-.26-1.945-.26C2.935 1.4 0 4.357 0 8v.047C0 11.69 2.91 14.6 6.837 14.6c3.95 0 6.884-2.957 6.884-6.6v-.047c0-.284-.02-.563-.05-.837 2.06-.536 2.91-2.666 1.93-2.742', fillRule: 'nonzero' });