var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M7.226 15.963C3.173 15.573 0 12.153 0 8c0-4.415 3.585-8 8-8s8 3.585 8 8c0 4.154-3.173 7.573-7.226 7.963v-4.698c1.48-.35 2.58-1.68 2.58-3.265 0-1.852-1.502-3.355-3.354-3.355S4.645 6.148 4.645 8c0 1.585 1.102 2.915 2.58 3.265v4.698zm-.258-9.77c.427 0 .774.347.774.775 0 .427-.347.774-.774.774-.428 0-.774-.347-.774-.774 0-.428.346-.774.774-.774z' })
	);
}