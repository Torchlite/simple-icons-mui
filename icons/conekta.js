var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' }, props),
		React.createElement('path', { d: 'M5.5 13L1.8 8l3.7-5 2.3 3.1L6.3 8l1.5 2z' }),
		React.createElement('path', { d: 'M8.3 16l5.9-8-5.9-8H3.7l6 8-6 8z' })
	);
}