var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M2.517 6.08v1.842c0 .615-.272.87-.91.87-.64 0-.91-.255-.91-.87V6H.08C.028 6 0 6.027 0 6.08v1.872C0 8.982.655 9.34 1.606 9.34c.95 0 1.606-.36 1.606-1.388V6h-.615c-.053 0-.08.027-.08.08zm8.914.454c.05 0 .08-.016.1-.053l.18-.44c.01-.02 0-.04-.02-.04H9.2c-.233 0-.32.07-.32.23v2.86c0 .14.067.2.245.2h2.31c.05 0 .073-.01.09-.05l.178-.44c.01-.02 0-.04-.026-.04H9.56v-.59c0-.2.11-.29.41-.29h.916c.05 0 .074-.01.09-.05l.173-.42c.01-.03 0-.04-.03-.04H9.56v-.83h1.87zM7.07 7.552c.27-.14.38-.406.38-.72C7.45 6.11 6.86 6 6.25 6h-1.4c-.232 0-.32.07-.32.23v2.858c0 .134.068.195.246.195h1.72c.65 0 1.113-.252 1.113-.907 0-.393-.17-.726-.54-.824zm-.644 1.203H5.213v-.6c0-.203.11-.293.41-.293h.803c.387 0 .494.147.494.45 0 .302-.107.443-.494.443zM5.213 6.528h1.085c.363 0 .464.136.464.42 0 .283-.1.42-.464.42H5.213v-.84zm10.78 2.698l-.737-1.264c.367-.094.662-.336.662-.95 0-.797-.494-1.012-1.31-1.012h-1.405c-.232 0-.32.07-.32.23V9.2c0 .054.028.08.082.08h.6v-.957c0-.2.112-.292.41-.292h.606l.67 1.2c.02.04.04.06.09.06h.63c.05 0 .05-.03.03-.05zM14.71 7.522h-1.145v-.994h1.143c.425 0 .52.164.52.497 0 .336-.095.497-.52.497z' })
	);
}