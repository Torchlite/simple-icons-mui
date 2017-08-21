var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { d: 'M5.4 16h5.2v-3.9l-1.3-1.2H6.7l-1.3 1.2zM12.1 5.4l-1.2 1.3v2.6l1.2 1.3H16V5.4zM10.6 0H5.4v3.9l1.3 1.2h2.6l1.3-1.2zM16 16v-3.9l-1.2-1.2h-3.9V16zM1.2 0L0 1.2v3.9h5.1V0zM10.9 0v3.9l1.2 1.2H16V0zM8 8.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7M5.1 12.1l-1.2-1.2H0V16h3.9l1.2-1.2zM5.1 5.4H0v5.2h3.9l1.2-1.3z' })
	);
}