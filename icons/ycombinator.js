var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' }, props),
		React.createElement('path', { d: 'M0 16V0h16v16H0zM4.634 3.931L7.375 9.07v3.376H8.43V9.132l2.766-5.2H10.03L8.392 7.182c-.248.497-.459.956-.459.956s-.198-.472-.434-.956L5.887 3.931H4.634z', 'fill-rule': 'evenodd' })
	);
}