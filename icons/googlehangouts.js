var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M8 0C4.133 0 1 3.133 1 7c0 3.667 3.333 6.667 7 6.667V16c4.233-2.067 7-5.467 7-9 0-3.867-3.133-7-7-7zM4.667 8h1.666v1.667c.734 0 1.334-.734 1.334-1.667V5h-3v3zm4-3v3h1.666v1.667c.734 0 1.334-.734 1.334-1.667V5h-3z' })
	);
}