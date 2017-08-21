var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { 'fill-rule': 'evenodd', d: 'M1 0h14l-1.273 14.375L7.984 16l-5.71-1.625L1 0zm11.393 2.942L3.608 2.94l.142 1.748 6.75.001-.17 1.811H5.903l.159 1.716h4.122l-.244 2.348L8 11.1l-1.97-.539-.125-1.407h-1.74l.194 2.57L8 12.859l3.582-1.02.811-8.897z' })
	);
}