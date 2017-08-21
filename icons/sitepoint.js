var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M1.647 7.022l1.18 1.125 3.732 3.427 1.6-1.527c.14-.198.13-.47-.03-.657L6.66 8.122l.006-.003-1.58-1.51c-.186-.21-.18-.52.014-.72l4.26-4.05L7.43 0 1.65 5.492c-.443.422-.443 1.107 0 1.53zM14.352 8.98l-1.18-1.128-3.73-3.427-1.608 1.527c-.147.2-.137.47.03.657l1.47 1.26H9.33l1.58 1.51c.18.21.18.51-.02.71l-4.26 4.05L8.57 16l5.78-5.492c.443-.422.444-1.106 0-1.53z' })
	);
}