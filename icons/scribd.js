var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M9.897 14.03c0-1.415 1.047-2.625 2.36-2.87-.062-1.314-.616-2.216-1.478-2.893-.87-.677-2.08-1.19-3.39-1.703C5.97 6.01 4.91 5.518 4.91 4.45c0-.9.78-1.578 2.09-1.578.8 0 1.315.123 1.58.266 0 .062-.02.144-.06.206-.04.082-.06.184-.06.328 0 .902.655 1.702 1.824 1.702 1.067 0 1.703-.8 1.703-1.97 0-.983-.555-1.845-1.458-2.44C9.61.37 8.33 0 6.88 0c-1.5.103-2.79.656-3.692 1.477-.903.82-1.436 1.928-1.436 3.24 0 1.457.513 2.4 1.354 3.12.84.717 2.05 1.23 3.507 1.742 1.58.51 2.503 1.04 2.503 2.09 0 1.06-.923 1.7-2.38 1.7-.76 0-1.415-.13-1.97-.51.145-.27.145-.54.145-.8 0-.76-.67-1.71-1.84-1.71-1.04 0-1.82.8-1.82 1.97 0 .98.62 1.91 1.63 2.56.99.68 2.38 1.11 3.88 1.11 1.32 0 2.51-.25 3.43-.91-.14-.27-.26-.66-.26-1.07zm4.862 0c0 1.047-.85 1.847-1.85 1.847s-1.83-.8-1.83-1.846c0-1 .82-1.82 1.82-1.82s1.84.82 1.84 1.83z', 'fill-rule': 'nonzero' })
	);
}