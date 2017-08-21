var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M8 0C3.583 0 0 3.582 0 8s3.583 8 8 8 8-3.582 8-8-3.583-8-8-8zm.998 7.11c.124.102.283.163.457.163.4 0 .727-.326.727-.728 0-.4-.326-.727-.727-.727-.402 0-.728.326-.728.727 0 .174.06.333.162.457l-.89.89L7.11 7c.102-.124.163-.283.163-.457 0-.4-.326-.727-.728-.727-.4 0-.727.326-.727.727 0 .402.326.728.727.728.174 0 .333-.06.457-.16l.89.89-.89.89c-.125-.1-.283-.16-.457-.16-.4 0-.727.33-.727.73 0 .4.326.73.727.73.402 0 .728-.32.728-.72 0-.17-.06-.33-.162-.45l.89-.9.89.89c-.1.13-.16.29-.16.46 0 .4.33.73.73.73.4 0 .73-.32.73-.72 0-.4-.32-.72-.72-.72-.17 0-.33.06-.45.16L8.11 8 9 7.11z' })
	);
}