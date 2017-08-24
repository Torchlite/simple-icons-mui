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

var _ref = _react2.default.createElement('path', { d: 'M12.533 6.84L8.77 10.45c-.213.204-.486.306-.76.306-.273 0-.547-.102-.76-.306L3.488 6.84c-.437-.418-.45-1.113-.032-1.55.42-.438 1.114-.452 1.55-.033l3.005 2.88 3.01-2.88c.44-.42 1.13-.405 1.55.032.42.43.41 1.13-.03 1.55zm3.388-5.028c-.2-.572-.75-.956-1.36-.956H1.45c-.6 0-1.144.376-1.357.936-.063.166-.095.34-.095.515v4.828l.055.96c.232 2.184 1.365 4.092 3.12 5.423.03.024.063.047.095.07l.02.015c.94.687 1.992 1.152 3.128 1.382.524.105 1.06.16 1.592.16.492 0 .986-.046 1.472-.136.058-.02.116-.03.175-.04.016 0 .033-.01.05-.02 1.088-.24 2.098-.69 3.004-1.35l.02-.02.09-.07c1.75-1.33 2.88-3.24 3.12-5.43l.05-.96V2.3c0-.167-.02-.333-.08-.495z', 'fill-rule': 'nonzero' });