var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' }, props),
		React.createElement('path', { d: 'M14.64 4.96L13.07 0H2.9L1.35 4.96c-.9 2.87.02 6.13 2.54 8L8 15.98l4.1-3.03c2.5-1.87 3.45-5.12 2.54-8L10.54 8l1.56 4.96L8 9.9l-4.1 3.05L5.47 8 1.35 4.97l5.08-.03L8 0l1.57 4.93 5.07.03z', 'fill-rule': 'evenodd' })
	);
}