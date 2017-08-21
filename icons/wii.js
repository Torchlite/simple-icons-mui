var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16', fillRule: 'evenodd' }, props),
		React.createElement('path', { d: 'M11.936 4.174a.879.879 0 0 0-.896.874.884.884 0 0 0 .896.87c.522 0 .936-.386.936-.87 0-.488-.414-.874-.936-.874zm3.14 0c-.498 0-.907.386-.907.874 0 .474.409.87.908.87.511 0 .923-.386.923-.87 0-.488-.412-.874-.923-.874zm-9.893.362c-.499 0-.835.249-1.009.81-.162.572-1.196 4.548-1.196 4.548L1.62 4.598H0s1.556 5.643 1.768 6.304c.161.51.56.924 1.134.924.672 0 .985-.488 1.122-.924.15-.45 1.159-4.174 1.159-4.174s1.01 3.726 1.146 4.174c.15.436.46.924 1.121.924.586 0 .971-.414 1.147-.924.21-.66 1.771-6.304 1.771-6.304H8.735L7.388 9.894S6.355 5.918 6.18 5.346c-.162-.563-.514-.81-.998-.81zm6.005 2.242v4.997h1.549V6.778zm3.128 0v4.997h1.546V6.778H14.32z' })
	);
}