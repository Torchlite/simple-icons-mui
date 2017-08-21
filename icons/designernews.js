var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M7.514 7.988c0-2.555-1.57-4.287-4.56-4.287H0v8.6h3.016c2.903 0 4.498-1.75 4.498-4.31zM5.37 8c0 1.844-.946 2.642-2.467 2.642H2.13V5.358h.773C4.36 5.358 5.37 6.193 5.37 8zM16 12.3V3.7h-1.98v4.81L10.853 3.7h-2.07v8.6h1.982V7.152l3.39 5.146H16z' })
	);
}