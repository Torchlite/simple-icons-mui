var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { d: 'M14.322 12.205L4.037 9.39l1.68-6.134L16 6.07l-1.678 6.135zM5.38 8.625l8.175 2.236 1.102-4.022L6.48 4.6l-1.1 4.023v.002z' }),
		React.createElement('path', { d: 'M5.684 10.53l-3.26.874-1.084-4.03 2.764-.74.334-1.224L0 6.602l1.652 6.143L7.77 11.1' })
	);
}