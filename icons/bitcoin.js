var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M15.76 9.936c-1.068 4.286-5.41 6.894-9.696 5.825C1.78 14.7-.83 10.35.24 6.07 1.308 1.78 5.65-.83 9.934.238c4.287 1.07 6.895 5.41 5.827 9.7zM11.527 6.86c.16-1.064-.65-1.637-1.76-2.02l.36-1.44-.878-.22-.35 1.405c-.23-.058-.47-.112-.71-.166L8.54 3l-.88-.22-.36 1.443c-.19-.045-.377-.088-.56-.133l-1.21-.3-.233.938s.65.15.637.158c.357.09.42.324.41.51l-.985 3.95c-.05.11-.16.27-.41.21.01.013-.64-.16-.64-.16l-.44 1.006 1.14.284.62.162-.36 1.46.88.217.36-1.443c.24.065.47.125.7.182L6.87 12.7l.88.22.363-1.457c1.497.283 2.622.17 3.096-1.185.38-1.09-.02-1.72-.81-2.13.57-.13 1-.508 1.12-1.288zM9.52 9.673c-.27 1.09-2.106.5-2.7.353l.48-1.933c.596.15 2.504.443 2.22 1.58zm.272-2.83c-.247.993-1.775.49-2.27.366l.436-1.76c.496.12 2.092.35 1.834 1.39z' })
	);
}