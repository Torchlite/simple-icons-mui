var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { d: 'M1.62 7.574c0-.248.202-.47.45-.47h4.645c.18-.002.324-.146.324-.325v-.97c0-.18-.146-.325-.325-.325H1.62C.725 5.485 0 6.21 0 7.103V8.9c0 .894.724 1.62 1.617 1.62h3.348c.248 0 .45.22.45.47v.855c0 .248-.202.472-.45.472H.324c-.18 0-.323.144-.323.323v.97c0 .178.144.323.323.323H5.42c.893 0 1.617-.724 1.617-1.617v-1.798c0-.893-.724-1.618-1.618-1.618H2.07c-.248 0-.45-.223-.45-.47v-.002-.854zM15.678 5.488h-3.35V3.684h3.347c.177 0 .322-.145.322-.324v-.97c0-.18-.144-.324-.323-.324h-3.346c-.893 0-1.617.725-1.617 1.618v1.804H9.16c-.18 0-.323.145-.323.323v.973c0 .178.144.323.322.323h1.55v5.301c0 .16.066.19.202.19.326 0 1.416-.607 1.416-1.125V7.106h3.35c.177 0 .322-.145.322-.323V5.81c0-.177-.145-.322-.322-.322z' })
	);
}