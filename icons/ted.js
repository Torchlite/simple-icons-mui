var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M1.62 6.59H0V5.11h5.02v1.48H3.4v4.3H1.62v-4.3zm3.677-1.48h4.873v1.48H7.078v.722h3.092v1.376H7.078v.72h3.092v1.483H5.297V5.11zm6.953 4.3h.697c1.11 0 1.272-.9 1.272-1.443 0-.364-.12-1.376-1.41-1.376h-.57v2.82zm-1.78-4.3h2.922C15.32 5.11 16 6.533 16 7.99c0 1.773-.94 2.9-2.956 2.9H10.47V5.108z', 'fill-rule': 'nonzero' })
	);
}