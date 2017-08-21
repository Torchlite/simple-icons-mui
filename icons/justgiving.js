var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M15.81 6.616h-5.59l-3.266 3.28h4.485c-.59 1.316-1.91 2.04-3.44 2.04-2.07 0-3.76-1.78-3.76-3.848C4.24 6.013 5.93 4.28 8 4.28c.756 0 1.46.196 2.04.58l3.028-3.04C11.694.687 9.928 0 8 0 3.58 0 0 3.578 0 8c0 4.415 3.58 8 8 8s8-3.41 8-7.826c0-.597-.068-.9-.19-1.558z', 'fill-rule': 'nonzero' })
	);
}