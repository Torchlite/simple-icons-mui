var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M8 0C3.582 0 0 3.582 0 8c0 3.39 2.108 6.285 5.084 7.45-.07-.633-.133-1.604.028-2.295.146-.625.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.11.646-1.943 1.448-1.943.683 0 1.012.513 1.012 1.127 0 .687-.436 1.713-.662 2.664-.19.797.4 1.445 1.185 1.445 1.42 0 2.514-1.498 2.514-3.662 0-1.91-1.376-3.25-3.342-3.25-2.276 0-3.61 1.71-3.61 3.47 0 .69.263 1.43.593 1.83.066.08.075.15.057.23-.06.25-.196.8-.223.91-.035.15-.115.18-.268.11C3.516 10.46 2.89 9 2.89 7.82c0-2.52 1.834-4.84 5.287-4.84 2.774 0 4.932 1.98 4.932 4.62 0 2.76-1.74 4.98-4.16 4.98-.81 0-1.57-.42-1.84-.92l-.5 1.9c-.18.698-.67 1.57-1 2.1.75.23 1.54.357 2.37.357 4.41 0 8-3.58 8-8s-3.59-8-8-8z', 'fill-rule': 'nonzero' })
	);
}