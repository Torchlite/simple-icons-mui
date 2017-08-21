var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M8 3.575l1.65-2.018s2.83.06 5.647 1.37c-.722 1.09-2.154 1.625-2.154 1.625-.097-.96-.77-1.194-2.904-1.194L8 16 5.746 3.356c-2.12 0-2.792.236-2.89 1.195 0 0-1.43-.53-2.153-1.62C3.52 1.62 6.35 1.56 6.35 1.56L8 3.574l-.003.002H8v-.002zm0-2.6c2.277-.02 4.884.352 7.552 1.52.357-.645.448-.93.448-.93C13.083.408 10.352.01 8 0 5.648.01 2.917.407 0 1.566c0 0 .13.35.448.93C3.116 1.326 5.723.956 8 .973z' })
	);
}