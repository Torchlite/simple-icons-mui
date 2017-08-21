var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M8.292 15.77c-1.902 0-3.64-.695-4.984-1.844L0 14.378l1.278-3.155C.833 10.24.583 9.15.583 8c0-4.29 3.45-7.77 7.71-7.77C12.548.23 16 3.71 16 8c0 4.292-3.45 7.77-7.708 7.77zm4.21-7.792v-.022c0-2.242-1.582-3.84-4.308-3.84H5.25v7.77h2.9c2.747 0 4.35-1.666 4.35-3.908zM8.225 9.976h-.86v-3.95h.86c1.265 0 2.105.72 2.105 1.964v.02c0 1.256-.84 1.966-2.104 1.966z', 'fill-rule': 'nonzero' })
	);
}