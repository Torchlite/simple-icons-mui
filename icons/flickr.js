var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M0 8c0 2.05 1.662 3.71 3.71 3.71 2.05 0 3.713-1.66 3.713-3.71S5.76 4.29 3.71 4.29C1.663 4.29 0 5.95 0 8zm8.577 0c0 2.05 1.662 3.71 3.712 3.71C14.33 11.71 16 10.05 16 8s-1.662-3.71-3.71-3.71c-2.05 0-3.713 1.66-3.713 3.71z' })
	);
}