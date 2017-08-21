var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M10 15h3v1H3v-1h3v-4h1v4h2v-4h1v4zm-6-3.02V12c0 .74.2 1.432.552 2.027H3.43C3.152 13.407 3 12.72 3 12v-.02h1zM8 7c2.76 0 5 2.24 5 5 0 .72-.153 1.407-.43 2.027h-1.12c.35-.595.552-1.288.552-2.027 0-2.208-1.792-4-4-4V7zm3 3H5v1h6v-1zM8 8C5.792 8 4 6.208 4 4s1.792-4 4-4 4 1.792 4 4h-1c0-1.656-1.344-3-3-3S5 2.344 5 4s1.344 3 3 3v1zm0-6c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z' })
	);
}