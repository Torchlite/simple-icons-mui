var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M6.406 5.453L9.34 1.2C9.895.4 10.61 0 11.49 0c.715 0 1.335.254 1.86.762.522.51.784 1.117.784 1.826 0 .523-.138.986-.416 1.386L11.073 7.82l3.235 4.102c.323.408.485.886.485 1.433 0 .724-.254 1.345-.763 1.865-.508.52-1.124.78-1.848.78-.793 0-1.398-.258-1.814-.774l-3.962-4.944v2.726c0 .778-.135 1.383-.405 1.814C5.51 15.607 4.8 16 3.86 16c-.855 0-1.518-.29-1.987-.866-.44-.532-.66-1.237-.66-2.114V2.91c0-.83.224-1.516.67-2.055C2.348.285 2.995 0 3.82 0c.786 0 1.44.285 1.964.855.292.316.477.635.554.96.047.2.07.572.07 1.12v2.518z' })
	);
}