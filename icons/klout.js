var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M16 14.218l-5.22-2.623H0V1.782h16v12.436zm-12.156-4.12H1.566l2.628-3.51-2.426-3.38h2.224l1.773 2.59h.786v1.598h-.78l-1.92 2.702zm8.312 0l-1.92-2.702h-1.31v2.702h-1.82v-6.89h1.822v2.59h1.31l1.772-2.59h2.22l-2.423 3.38 2.627 3.51h-2.278z' })
	);
}