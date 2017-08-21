var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M3.15 1.54v13.204c0 .894.903 1.5 1.726 1.16l6.9-2.87c.65-.27 1.075-.907 1.075-1.614V3.122l-1.59-.092v7.563c0 .56-.35 1.06-.87 1.25l-4.37 1.583V2.94c0-.627.55-1.114 1.17-1.044l5.68.64V1.5L4.97.027C4.02-.15 3.15.577 3.15 1.54', 'fill-rule': 'nonzero' })
	);
}