var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M14.716 16H1.263C.568 16 0 15.432 0 14.737V11.79c0-.695.568-1.264 1.263-1.264h3.79v-4.21c0-.695.568-1.263 1.263-1.263h4.22v-3.77C10.536.58 11.116 0 11.82 0h2.897C15.42 0 16 .58 16 1.284v13.432C16 15.42 15.42 16 14.716 16z' })
	);
}