var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 12.8c-2.187 0-4.107-1.493-4.64-3.6-.053-.24.08-.507.32-.56.24-.053.507.08.56.32.453 1.707 2 2.907 3.76 2.907 1.76 0 3.307-1.2 3.76-2.907.053-.24.32-.4.56-.32.24.053.4.32.32.56-.533 2.107-2.453 3.6-4.64 3.6z' })
	);
}