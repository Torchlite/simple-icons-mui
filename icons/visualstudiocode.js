var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { d: 'M15.896 1.32L12.596 0l-7.18 7-4.37-3.34-.95.47v7.76l.94.46 4.37-3.33L12.603 16l3.3-1.3V1.33l-.008-.01zm-14.38 8.5V6.18l2.02 1.8-2.02 1.83v.01zm6.48-1.83l4.05-3.03v6.08l-4.05-3.05z' })
	);
}