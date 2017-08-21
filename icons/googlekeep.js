var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { d: 'M13.33 5.33C13.33 2.4 10.93 0 8 0S2.67 2.4 2.67 5.33c0 1.7.8 3.26 2.13 4.27v5.32h1.08V16h4.24v-1.08h1.08V9.6c1.34-1 2.13-2.58 2.13-4.27zm-7.46 8.52V12.8h4.26v1.05H5.87zm0-2.13v-1.05h4.26v1.05H5.87zm4.5-2.84l-.24.16v.56H5.87v-.56l-.23-.16c-1.2-.8-1.9-2.12-1.9-3.55 0-2.35 1.9-4.26 4.26-4.26s4.26 1.9 4.26 4.26c0 1.43-.7 2.76-1.9 3.55z' })
	);
}