var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement(
			'g',
			{ 'fill-rule': 'nonzero' },
			React.createElement('path', { d: 'M6.586 7.33l.69 2.057 2.137-.716-.69-2.05-2.137.72z' }),
			React.createElement('path', { d: 'M12.55 9.37l-1.037.347.36 1.073c.145.434-.09.904-.524 1.05-.1.03-.19.045-.29.042-.34-.01-.65-.226-.77-.566l-.36-1.072-2.14.716.36 1.072c.14.435-.09.905-.53 1.05-.1.032-.19.045-.29.043-.34-.01-.65-.226-.77-.566l-.36-1.08-1.04.35c-.1.03-.19.04-.29.04-.34-.01-.65-.23-.77-.57-.15-.44.09-.91.52-1.05l1.04-.35L5 7.84l-1.034.35c-.094.032-.19.045-.285.043-.33-.01-.65-.225-.76-.565-.14-.433.09-.903.53-1.05l1.04-.346-.36-1.07c-.14-.436.09-.906.53-1.05.44-.147.91.09 1.05.522l.36 1.072L8.2 5.03l-.36-1.07c-.14-.43.09-.9.526-1.05.435-.14.906.09 1.05.528l.36 1.08 1.037-.34c.434-.146.904.09 1.05.52.145.436-.09.906-.523 1.05l-1.038.35.69 2.057 1.034-.344c.435-.14.905.09 1.05.53.146.44-.09.91-.52 1.05zm2.78-3.57C13.68.304 11.298-.98 5.8.67.304 2.32-.98 4.7.67 10.2c1.65 5.497 4.03 6.78 9.53 5.13 5.497-1.65 6.78-4.03 5.13-9.53z' })
		)
	);
}