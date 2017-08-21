var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M14.236 12.472c.974 0 1.764.79 1.764 1.764S15.21 16 14.236 16c-.973 0-1.764-.79-1.764-1.764 0-.973.79-1.764 1.764-1.764zM8 6.236c.973 0 1.764.79 1.764 1.764 0 .973-.79 1.764-1.764 1.764-.973 0-1.764-.79-1.764-1.764 0-.973.79-1.764 1.764-1.764zm6.236 0C15.21 6.236 16 7.026 16 8c0 .973-.79 1.764-1.764 1.764-.973 0-1.764-.79-1.764-1.764 0-.973.79-1.764 1.764-1.764zM8 0c.973 0 1.764.79 1.764 1.764 0 .973-.79 1.764-1.764 1.764-.973 0-1.764-.79-1.764-1.764S7.026 0 8 0zM1.764 0c.973 0 1.764.79 1.764 1.764 0 .973-.79 1.764-1.764 1.764S0 2.738 0 1.764.79 0 1.764 0zm12.472 0C15.21 0 16 .79 16 1.764c0 .973-.79 1.764-1.764 1.764-.973 0-1.764-.79-1.764-1.764S13.262 0 14.236 0z' })
	);
}