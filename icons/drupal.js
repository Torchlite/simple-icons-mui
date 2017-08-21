var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M13.65 2.35C12.14.837 10.134 0 8 0 3.593 0 0 3.593 0 8s3.593 8 8 8 8-3.593 8-8c0-2.133-.838-4.14-2.35-5.65zM8 13.192c-2.413 0-4.38-1.968-4.38-4.38 0-2.045 1.37-3.416 2.577-4.623.8-.8 1.575-1.58 1.803-2.44.23.86.99 1.63 1.803 2.43C11.01 5.39 12.38 6.76 12.38 8.8c0 2.41-1.966 4.38-4.38 4.38z', 'fill-rule': 'nonzero' })
	);
}