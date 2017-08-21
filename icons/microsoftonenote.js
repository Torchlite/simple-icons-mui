var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M15.965 6.79v2.395c0 .093-.033.172-.1.24-.066.065-.146.1-.238.1h-.52V6.45h.52c.092 0 .172.034.238.1.067.067.1.146.1.24zm-.338 3.09c.092 0 .172.033.238.1.067.066.1.146.1.238v2.405c0 .093-.033.172-.1.24-.066.065-.146.098-.238.098h-.52V9.88h.52zm0-6.86c.092 0 .178.034.256.1.078.068.117.147.117.24v2.396c0 .098-.04.18-.117.243-.078.06-.164.09-.256.09h-.86v7.39c0 .09-.034.16-.104.22-.07.05-.15.08-.243.08H9.95v-1.51h3.472v-.72H9.95v-.85h3.472v-.68H9.95v-.87h3.472v-.67H9.95v-.85h3.472v-.67H9.95v-.87h3.472v-.68H9.95v-.85h3.472v-.71H9.95V2.16h4.592c.01 0 .05.03.112.09.064.063.102.14.113.23v.54h.86zM9.097.444v15.114L0 13.988V2.055L9.098.445zm-2.595 4.48l-1.067.07V6.98c-.012 1.163-.012 1.835 0 2.014l-2.127-3.88-1.086.043v5.504l.85.07V6.67l2.293 4.176 1.137.07v-5.99z', 'fill-rule': 'nonzero' })
	);
}