var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M13.024 6.096c-.916 0-1.422.675-1.53 1.41h3.072c-.084-.7-.578-1.41-1.542-1.41m-1.506 2.41c.157.77.795 1.313 1.687 1.313.482 0 1.18-.18 1.59-.61l.783.9c-.71.74-1.77.95-2.493.95-1.76 0-3.133-1.27-3.133-3.07 0-1.69 1.264-3.08 3.048-3.08 1.722 0 3 1.32 3 3.07v.51h-4.482zm-4.326 2.552V7.265c0-.65-.288-1.024-.89-1.024-.543 0-.904.39-1.145.67v4.16H3.59v-3.8c0-.65-.276-1.02-.878-1.02-.542 0-.917.39-1.145.67v4.16H0V5h1.567v.767c.265-.31.867-.84 1.807-.84.83 0 1.397.35 1.65 1.06.35-.508 1-1.06 1.94-1.06 1.133 0 1.795.673 1.795 1.974v4.16H7.19z', 'fill-rule': 'nonzero' })
	);
}