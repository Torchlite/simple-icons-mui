var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 14 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M0 0h14l-1.273 14.375L6.984 16l-5.71-1.625L0 0zm4.687 6.5l-.155-1.812 6.706.002.154-1.748-8.784-.002.465 5.34h6.084l-.217 2.284L7 11.1l-1.97-.54-.125-1.406h-1.74l.22 2.78L7 12.9l3.586-.962.496-5.438H4.687z' })
	);
}