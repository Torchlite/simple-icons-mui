var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement(
			'title',
			null,
			'Letterboxd icon'
		),
		React.createElement('path', { d: 'M8.29 16.752V7.2H6.546V4.8h6.328v2.4h-1.746v9.574h3.925v-2.618h2.839V19.2H6.545v-2.448h1.746zM0 12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0 0 5.372 0 12z' })
	);
}