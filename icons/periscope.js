var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M8.09 16c1.25 0 6.21-5.626 6.21-9.397C14.3 2.993 11.48 0 8.09 0 4.52 0 1.7 2.992 1.7 6.603 1.7 10.373 6.66 16 8.09 16zM7.093 2.564c.323-.08.663-.123 1.016-.123 2 0 3.72 1.7 3.72 3.91 0 1.99-1.72 3.69-3.73 3.69-2.23 0-3.95-1.7-3.95-3.69 0-.93.3-1.76.82-2.42v.02c0 .83.67 1.49 1.5 1.49S8 4.76 8 3.93c0-.612-.373-1.138-.906-1.368z' })
	);
}