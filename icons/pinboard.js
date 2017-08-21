var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' }, props),
		React.createElement(
			'title',
			null,
			'Shape'
		),
		React.createElement('path', { 'fill-rule': 'nonzero', d: 'M8.901 9.723L5.895 12.8l.48-2.708-4.09-5.045L0 5.169 5.053 0v1.969l4.81 4.43 3.008-.737-3.126 3.322L16 16z' })
	);
}