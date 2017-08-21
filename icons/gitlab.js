var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M15.97 9.058l-.895-2.756L13.3.842c-.09-.282-.488-.282-.58 0L10.946 6.3H5.054L3.28.842C3.188.56 2.79.56 2.7.84L.924 6.3.03 9.058c-.082.25.008.526.22.682L8 15.37l7.75-5.63c.212-.156.302-.43.22-.682' })
	);
}