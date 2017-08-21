var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { d: 'M11.994 9.048H8.995v2.997H7.018V9.042H3.955V7.01h2.999V3.994H8.93V7.01h2.999l.064 2.038zM13.97.038H1.978C.906.013 0 .914 0 2.006V14.02C0 15.105.9 16 2.003 16h11.994A2.01 2.01 0 0 0 16 14.006V1.994C16 .894 15.1 0 13.997 0l-.026.038z' })
	);
}