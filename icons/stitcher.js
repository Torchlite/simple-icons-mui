var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M11.987 4.625h-.24v6.75h.24v-6.75zm-.497.75h-.24v5.25h.24v-5.25zm-.744 0H0v5.25h10.746v-5.25zm5.254 0h-3.005v5.25H16v-5.25zm-3.504 0h-.24v5.25h.24v-5.25z' })
	);
}