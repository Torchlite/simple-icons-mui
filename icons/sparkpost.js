var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M10.8 6c-.9.6-1.2 1.8-1.1 2.6C8.2 7.1 12 2.9 7.7 0 10.1 3.6 4 6.5 4 11.6c0 2 1.3 3.8 4 4.4 2.7-.6 4-2.4 4-4.4 0-3-1.8-4-1.2-5.6zM8 13.9c-1.2 0-2.3-1-2.3-2.3 0-1.2 1-2.3 2.3-2.3 1.2 0 2.3 1 2.3 2.3-.1 1.3-1.1 2.3-2.3 2.3zM-6.6 33.5c-.8.6-1.2 1.9-1.1 2.7-1.4-1.6 2.3-5.8-2-8.6 2.4 3.6-3.7 6.5-3.7 11.6 0 2 1.3 3.8 4 4.4 2.7-.6 4-2.4 4-4.4 0-3.1-1.8-4.1-1.2-5.7zm-2.8 7.9c-1.2 0-2.3-1-2.3-2.3 0-1.2 1-2.3 2.3-2.3 1.2 0 2.3 1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3zM-14.7 33.5c-.8.6-1.2 1.9-1.1 2.7-1.4-1.6 2.3-5.8-2-8.6 2.4 3.6-3.7 6.5-3.7 11.6 0 2 1.3 3.8 4 4.4 2.7-.6 4-2.4 4-4.4.1-3.1-1.7-4.1-1.2-5.7zm-2.8 8.3c-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6 1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.1 2.6-2.6 2.6z', 'fill-rule': 'nonzero' })
	);
}