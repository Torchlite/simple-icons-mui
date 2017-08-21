var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M11.84 5.44v5.44h2.56v.64h-2.56v1.28H16V5.44h-4.16zm-4.8 0v5.44H9.6v.64H7.04v1.28h4.16V5.44H7.04zM2.56 3.2v2.24H0v5.44h4.16V3.2h-1.6zM6.4 5.44H4.8v5.44h1.6V5.44zm8 4.16h-.96V6.72h.96V9.6zm-11.84 0H1.6V6.72h.96V9.6zm7.04 0h-.96V6.72h.96V9.6zM6.4 3.2H4.8v1.6h1.6V3.2z' })
	);
}