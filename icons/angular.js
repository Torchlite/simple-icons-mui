var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ ariaLabelledby: 'title', role: 'img', viewBox: '0 0 24 24', fillRule: 'evenodd', xmlns: 'http://www.w3.org/2000/svg' }, props),
		React.createElement(
			'title',
			null,
			'Angular'
		),
		React.createElement('path', { d: 'M10.19 13.067h3.62L12 8.772' }),
		React.createElement('path', { d: 'M12 2L2.096 5.486l1.51 12.925L12 23.002l8.394-4.588 1.51-12.926L12 2zm6.18 16.023h-2.308l-1.244-3.066H9.372l-1.244 3.066h-2.31L12 4.32l6.18 13.703z' })
	);
}