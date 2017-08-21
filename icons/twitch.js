var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement(
			'g',
			{ 'fill-rule': 'nonzero' },
			React.createElement('path', { d: 'M1.393 0L.35 2.783v11.13h3.824V16h2.088l2.085-2.088h3.13L15.65 9.74V0H1.394zm1.39 1.39H14.26v7.653l-2.435 2.435H8l-2.085 2.085v-2.085H2.783V1.39z' }),
			React.createElement('path', { d: 'M6.61 8.348H8V4.175H6.61v4.173zm3.824 0h1.39V4.175h-1.39v4.173z' })
		)
	);
}