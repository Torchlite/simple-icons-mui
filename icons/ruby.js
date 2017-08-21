var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M13.437.056c2.023.35 2.595 1.732 2.553 3.18l.01-.02-.91 11.925-11.83.81h.01C2.288 15.91.1 15.82 0 12.76l1.096-2 1.88 4.39.335.782 1.87-6.096-.02.005.01-.02 6.17 1.97-.93-3.62-.66-2.6 5.88-.38-.41-.34L11 1.41 13.44.05zM0 12.726v.018-.02zm3.42-9.343C5.794 1.028 8.858-.364 10.034.823c1.175 1.185-.07 4.07-2.448 6.424C5.21 9.602 2.184 11.07 1.01 9.885c-1.177-1.185.03-4.145 2.408-6.5z' })
	);
}