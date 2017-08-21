var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M14.15 2.76l-.003 2.22H7.08c-.146 0-.265.12-.265.266 0 .147.12.266.265.266l1.84-.01c2.897 0 5.245 2.35 5.245 5.246 0 2.898-2.348 5.246-5.246 5.246L1.83 16l.003-2.25h7.09c1.658 0 3.003-1.344 3.003-3.003 0-1.66-1.345-3.004-3.004-3.004l-1.848-.02c-1.373 0-2.484-1.11-2.484-2.48C4.59 3.87 5.7 2.76 7.072 2.76h7.07zM1.84 13.228l-.003-2.22H8.91c.14 0 .255-.117.255-.258 0-.142-.115-.257-.256-.257H7.08c-2.897 0-5.245-2.35-5.245-5.247S4.183 0 7.08 0l7.067.002.004 2.233-7.07.003c-1.66 0-3 1.345-3 3.004 0 1.66 1.35 3.003 3.01 3.003l1.85.02c1.37 0 2.48 1.112 2.48 2.482s-1.11 2.48-2.48 2.48h-7.1z' })
	);
}