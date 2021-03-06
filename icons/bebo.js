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

var _ref = _react2.default.createElement('path', { d: 'M13.836 7.725c-.31-.717-.745-1.357-1.29-1.9C12 5.282 11.36 4.85 10.64 4.54c-.717-.31-1.495-.466-2.31-.466L5.112 4.07c-.404 0-.733-.33-.734-.733l-.002-2.03C4.378.577 3.788 0 3.036 0c-.74 0-1.343.603-1.343 1.343l.004 8.688c0 .82.157 1.6.468 2.32.313.72.746 1.36 1.287 1.91.544.54 1.184.98 1.902 1.29.72.31 1.5.47 2.315.47h.66c.81 0 1.59-.15 2.31-.46.72-.31 1.36-.74 1.9-1.28.54-.54.97-1.18 1.28-1.9.31-.71.47-1.49.47-2.31 0-.81-.16-1.59-.47-2.31zm-2.214 2.31c0 .446-.085.875-.254 1.276-.17.41-.408.76-.707 1.05-.3.3-.65.54-1.05.71-.4.17-.83.26-1.28.26h-.65c-.45 0-.88-.08-1.28-.25-.39-.16-.75-.4-1.05-.7-.3-.29-.53-.65-.7-1.05-.16-.4-.25-.83-.25-1.28v-1.9c0-.36.14-.71.4-.97s.61-.4.98-.4h2.57c.45 0 .88.09 1.28.25.4.17.76.41 1.05.71.3.3.54.66.71 1.05.17.4.26.83.26 1.28z' });