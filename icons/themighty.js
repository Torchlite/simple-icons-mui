var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { 'fill-rule': 'evenodd', d: 'M12.781 0H9.826L8.029 9.325 6.201 0H3.233c.144.146.223.423.26.715v14.14c0 .415-.07.923-.283 1.145.676-.142 1.538-.277 2.276-.407V6.25L7.145 14.5c.047.306.09.723-.014.799a95.152 95.152 0 0 1 1.696-.244c-.07-.107-.043-.435-.003-.707l1.636-8.248v8.73c.703-.082 1.577-.16 2.313-.233l.008-.004c-.217-.219-.287-.733-.287-1.15V1.15c0-.418.07-.931.287-1.151z' })
	);
}