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

var _ref = _react2.default.createElement('path', { d: 'M8 14.555c-3.626 0-6.566-2.94-6.566-6.563C1.434 4.367 4.374 1.43 8 1.43c3.624 0 6.563 2.937 6.563 6.562 0 3.624-2.93 6.563-6.564 6.563zM8 0C3.58 0-.004 3.584-.004 8S3.582 16 8 16c4.416 0 8-3.584 8-8S12.424-.008 8 0zm-.867 10.196L4.798 8l2.335-2.204V3.74L2.626 8l4.507 4.253v-2.057zm1.74-6.457v2.05L11.206 8 8.87 10.196v2.057L13.38 8 8.87 3.74', fillRule: 'nonzero' });