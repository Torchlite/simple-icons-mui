var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M13.254 6.73l1.708-2.967C15.622 4.926 16 6.27 16 7.703c0 1.92-.678 3.683-1.806 5.062H9.78l1.36-2.36H9.343L11.46 6.73h1.794zm-1.547-3.495L6.222 12.76l.002.005H1.806C.676 11.385 0 9.623 0 7.703c0-1.435.38-2.78 1.04-3.945l2.864 4.975 3.163-5.498h4.64z' })
	);
}