var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M.814 0c-.02.062-.04.123-.04.205v15.487c0 .144.04.226.122.308l7.61-8.062L.814 0zM9.02 8.472l1.968 2.03-2.81 1.6s-3.57 2.03-5.538 3.16l6.38-6.79zm.533-.554l2.112 2.195c.33-.185 2.913-1.662 3.282-1.867.39-.225.35-.533.02-.697-.307-.17-2.89-1.65-3.28-1.89L9.552 7.92zm-.534-.533l1.99-2.113-2.84-1.62S3.54 1.004 2 .12l7.02 7.266z' })
	);
}