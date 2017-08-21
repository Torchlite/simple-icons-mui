var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M7.21 15.725c-1.658.542-1.824.456-2.573-1.867l-1.835-5.68c-.436-1.345-1.77-4.97-1.995-5.666C.392 1.22.392 1.15 2.827.357c1.91-.626 1.986-.605 2.68 1.548.56 1.735.918 3.132 1.49 4.904l1.563 4.83L13.553 10c.985-.325 1.314-.31 1.59.902l.202.915c.23 1.066-.308 1.337-.877 1.522L7.21 15.72z', 'fill-rule': 'nonzero' })
	);
}