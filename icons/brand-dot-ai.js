'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ 'aria-labelledby': 'simpleicons-brandai-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
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
	{ id: 'simpleicons-brandai-icon' },
	'Brand.ai icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M23.958 11.26C23.58 5.004 18.404.045 12.062.006h-.142C9.68.022 7.584.646 5.795 1.73c-1.652.998-3.043 2.384-4.048 4.033C.76 7.378.15 9.25.023 11.253.008 11.5 0 11.747 0 12c0 .25.01.5.025.746.123 2.003.734 3.873 1.723 5.49 1 1.648 2.384 3.03 4.024 4.033 1.798 1.074 3.897 1.705 6.13 1.72h.18c6.343-.043 11.498-4.99 11.89-11.24.014-.24.03-.496.03-.735s0-.495-.016-.734l-.027-.022zm-11.956 4.38v3.83c.096 2.34-.57 2.73-1.37 2.766-.034 0-.066.003-.1.004-4.556-.645-8.158-4.257-8.784-8.823-.066-.464-.1-.938-.1-1.42 0-.48.034-.953.1-1.418.625-4.56 4.218-8.17 8.77-8.82l.115.01c.8.043 1.465.43 1.37 2.764v3.828c-.01 1.573.895 3.072 1.857 3.64-.962.56-1.868 1.875-1.858 3.634z' });