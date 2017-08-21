var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M9.844 13.506c0 1.213.18 1.393 1.956 1.528V16H4.2v-.966c1.777-.135 1.956-.315 1.956-1.528V2.472c0-1.19-.18-1.393-1.956-1.528V0h7.6v.944c-1.776.135-1.956.337-1.956 1.528v11.034z', 'fill-rule': 'nonzero' })
	);
}