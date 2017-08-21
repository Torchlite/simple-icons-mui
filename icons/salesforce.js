var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { d: 'M6.67 3.62c.5-.53 1.23-.87 2.03-.87 1.04 0 1.97.6 2.46 1.47.42-.2.9-.3 1.4-.3 1.9 0 3.44 1.56 3.44 3.48s-1.54 3.48-3.45 3.48c-.23 0-.46-.03-.68-.07-.43.78-1.25 1.3-2.2 1.3-.4 0-.77-.1-1.1-.25-.44 1.03-1.46 1.75-2.65 1.75-1.24 0-2.3-.78-2.7-1.88-.18.04-.36.05-.55.05-1.47 0-2.67-1.2-2.67-2.7 0-1 .54-1.87 1.34-2.34-.17-.38-.26-.8-.26-1.23 0-1.72 1.4-3.1 3.1-3.1 1.02 0 1.9.47 2.48 1.2' })
	);
}