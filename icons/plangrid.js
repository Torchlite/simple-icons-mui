var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { d: 'M11.067 0c1.733 0 2.84.006 3.885 1.05C15.993 2.094 16 3.196 16 4.934v6.134c0 1.733-.007 2.84-1.05 3.885C13.906 15.994 12.804 16 11.066 16H4.933c-1.733 0-2.84-.006-3.885-1.05C.007 13.907 0 12.804 0 11.066V4.933C0 3.2.007 2.093 1.05 1.048 2.094.007 3.196 0 4.934 0h6.134zm2.932 7.434C13.714 4.386 11.122 2.001 8 2.001A6 6 0 0 0 2 8c0 3.2 2.502 5.823 5.657 6h4.757A1.59 1.59 0 0 0 14 12.413v-4.98zm-1.523 5.726a.683.683 0 1 1 0-1.366.683.683 0 0 1 0 1.366zM8 12.633A4.639 4.639 0 0 1 3.367 8 4.638 4.638 0 0 1 8 3.367 4.638 4.638 0 0 1 12.633 8 4.639 4.639 0 0 1 8 12.633z' })
	);
}