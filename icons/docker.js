var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M3.212 11.518c-.456 0-.87-.373-.87-.828 0-.455.373-.828.87-.828.496 0 .87.373.87.828 0 .455-.415.828-.87.828zm10.677-4.51c-.09-.663-.5-1.2-1.04-1.615l-.21-.166-.17.207c-.33.373-.46 1.035-.42 1.53.04.374.16.746.37 1.036-.17.083-.38.166-.54.248-.38.124-.75.166-1.12.166H.06l-.04.248c-.08.787.04 1.614.375 2.36l.166.29v.04c1 1.656 2.78 2.4 4.72 2.4 3.73 0 6.79-1.613 8.24-5.09.95.042 1.91-.207 2.36-1.117l.12-.207-.2-.124c-.54-.33-1.28-.373-1.9-.207zm-5.34-.663H6.93V7.96h1.62V6.344zm0-2.028H6.93V5.93h1.62V4.318zm0-2.07H6.93V3.86h1.62V2.248zm1.98 4.098H8.92V7.96h1.614V6.344zm-6 0H2.92V7.96h1.614V6.344zm2.02 0h-1.6V7.96h1.61V6.344zm-4.02 0H.93V7.96h1.62V6.344zm4.02-2.028h-1.6V5.93h1.61V4.318zm-2.03 0h-1.6V5.93h1.61V4.318z', 'fill-rule': 'nonzero' })
	);
}