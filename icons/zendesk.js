var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M7.39 14.063H0L7.39 5.14v8.923zm8.61 0H8.61c0-2.043 1.652-3.696 3.695-3.696 2.042 0 3.695 1.655 3.695 3.696zM8.61 10.86V1.936H16L8.61 10.86zM7.39 1.936c0 2.04-1.654 3.696-3.695 3.696C1.655 5.632 0 3.978 0 1.937h7.39z' })
	);
}