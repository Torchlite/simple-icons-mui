var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { d: 'M8 0L1.07 4v8L8 16l6.93-4V4L8 0zm4 11.06c0 .47-.43.86-1.02.86-.42 0-.9-.17-1.2-.54l-4-4.76v4.44c0 .48-.38.86-.85.86h-.05c-.48 0-.86-.4-.86-.86V4.94c0-.47.42-.86 1-.86.43 0 .92.17 1.22.54l3.98 4.76V4.94c0-.48.4-.86.86-.86h.05c.48 0 .86.4.86.86v6.12z' })
	);
}