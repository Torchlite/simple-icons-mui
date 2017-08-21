var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M13.185 0L4.692 16H1.246L9.738 0h3.447zm1.57 13.2c0 1.512-1.227 2.738-2.74 2.738-1.512 0-2.738-1.226-2.738-2.738s1.226-2.738 2.738-2.738c1.513 0 2.74 1.226 2.74 2.738z' })
	);
}