var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M12.8 3.196l.152-.287V0h-2.91l-.29.293L8.38 2.91l-.432.29h-4.9v3.995h2.694l.24.29-2.783 5.32-.16.286V16h2.91l.29-.293 1.38-2.617.43-.29h4.9V8.805h-2.7l-.24-.292 2.79-5.317z', 'fill-rule': 'nonzero' })
	);
}