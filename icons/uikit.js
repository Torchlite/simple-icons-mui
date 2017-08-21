var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' }, props),
		React.createElement('path', { d: 'M11.803 2.195L9.064 3.854l3.159 1.798v4.718L7.98 12.728 3.808 10.37V6.713L1.07 5.304V12l6.812 4 7.06-4V4.001l-3.139-1.806zm-1.269-.66L7.881 0 5.115 1.712l2.688 1.479 2.731-1.656z' })
	);
}