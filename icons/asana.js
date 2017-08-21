var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M12.52 8.435c-1.922 0-3.48 1.558-3.48 3.48s1.558 3.48 3.48 3.48 3.48-1.56 3.48-3.48-1.558-3.48-3.48-3.48zm-9.04 0C1.558 8.435 0 9.993 0 11.915s1.558 3.48 3.48 3.48 3.48-1.558 3.48-3.48-1.558-3.48-3.48-3.48zm8-4.35c0 1.922-1.558 3.48-3.48 3.48s-3.48-1.558-3.48-3.48c0-1.92 1.558-3.48 3.48-3.48s3.48 1.56 3.48 3.48z' })
	);
}