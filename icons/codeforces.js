var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M3 5c.552 0 1 .448 1 1v7c0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1V6c0-.552.448-1 1-1h2zm6-3c.552 0 1 .448 1 1v10c0 .552-.448 1-1 1H7c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h2zm6 5c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1h-2c-.552 0-1-.448-1-1V8c0-.552.448-1 1-1h2z' })
	);
}