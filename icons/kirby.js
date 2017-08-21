var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M8 0L.952 4v8L8 16l7.048-4V4L8 0zm3.14 8.17L9.165 9.235v.146h1.976v1.55H4.86V9.39h1.97v-.15L4.855 8.17V6.26L8 7.955l3.143-1.696v1.91z', 'fill-rule': 'nonzero' })
	);
}