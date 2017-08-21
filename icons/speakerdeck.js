var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M1.067 14C.477 14 0 13.525 0 12.94V3.06C0 2.475.478 2 1.067 2h13.866c.588 0 1.065.475 1.065 1.06H16v9.88c0 .585-.478 1.06-1.067 1.06H1.067zm9.957-3.88H4.978c-.387-.007-.7-.32-.7-.707h-.005V6.587h.006c0-.386.31-.7.69-.706h6.04c.38.01.7.32.7.71v2.83h-.01c0 .39-.31.7-.7.71zM7.48 6.934L5.7 8.008l1.766 1.057.013-2.13zm1.04 2.13L10.3 7.99 8.532 6.935l-.01 2.13z' })
	);
}