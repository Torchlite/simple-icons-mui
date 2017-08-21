var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M15.89 2.847c-.193-.275-.572-.343-.848-.15L.11 13.154c.11.157.29.26.497.26h14.785c.336 0 .608-.273.608-.61V3.187c-.002-.117-.038-.235-.11-.34zM.958 2.697c-.275-.193-.655-.126-.848.15-.072.103-.108.222-.11.34v9.635l7.11-5.824-6.152-4.3z' })
	);
}