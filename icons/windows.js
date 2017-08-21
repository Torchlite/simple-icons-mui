var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd' }, props),
		React.createElement('path', { d: 'M0 2.3l6.5-.9v6.3H0m7.3-6.4L16 0v7.6H7.3M0 8.4h6.5v6.3L0 13.8m7.3-5.4H16V16l-8.6-1.2' })
	);
}