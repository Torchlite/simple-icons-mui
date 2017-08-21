var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M13.486 6.692L6.794 0l-1.36 1.36L7.95 3.872 2.513 9.308 9.206 16l1.36-1.36-2.515-2.513 5.44-5.435zm-7.95 2.82L9.58 5.47l.815.815-4.043 4.076-.815-.84z', 'fill-rule': 'nonzero' })
	);
}