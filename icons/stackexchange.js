var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M14.484 10.385v.69c0 1.17-.93 2.118-2.066 2.118h-.603L9.095 16v-2.807H3.58c-1.136 0-2.066-.948-2.066-2.12v-.688h12.968zM1.516 6.975h12.882v2.653H1.516V6.975zm0-3.427h12.882V6.2H1.516V3.548zM12.383 0c1.12 0 2.015.947 2.015 2.118v.69H1.516v-.69C1.516.948 2.446 0 3.582 0h8.8z' })
	);
}