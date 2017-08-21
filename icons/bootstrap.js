var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' }, props),
		React.createElement('path', { d: 'M13.333 0H2.667A2.675 2.675 0 0 0 0 2.667v10.666C0 14.8 1.2 16 2.667 16h10.666C14.8 16 16 14.8 16 13.333V2.667C16 1.2 14.8 0 13.333 0zm-1.458 11.237a2.07 2.07 0 0 1-.615.823c-.28.23-.635.413-1.072.55-.436.135-.954.203-1.555.203H4.345V3.477H8.88c.838 0 1.51.19 2.014.575.505.385.758.962.758 1.74 0 .47-.115.872-.345 1.207-.23.33-.56.59-.988.77v.03c.57.12 1.01.39 1.3.81.29.42.44.95.44 1.59 0 .36-.07.7-.2 1.02zm-1.85-2.3c-.273-.25-.658-.372-1.154-.372H5.99v2.912h2.89c.495 0 .882-.128 1.154-.387.275-.256.413-.622.413-1.093-.002-.46-.14-.815-.413-1.06zm-.4-1.883c.263-.223.393-.544.393-.962 0-.47-.117-.803-.353-.994-.235-.19-.575-.288-1.02-.288H5.98v2.576h2.666c.392 0 .72-.113.98-.332z' })
	);
}