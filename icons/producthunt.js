var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { d: 'M9.07 5.6H6.8V8h2.27a1.2 1.2 0 0 0 0-2.4z' }),
		React.createElement('path', { d: 'M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm1.07 9.6H6.8V12H5.2V4h3.87a2.8 2.8 0 0 1 0 5.6z' })
	);
}