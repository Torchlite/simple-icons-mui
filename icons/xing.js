var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M12.126 0c-.345 0-.494.217-.618.44 0 0-4.97 8.816-5.135 9.105.01.016 3.28 6.015 3.28 6.015.113.205.29.44.644.44H12.6c.14 0 .25-.052.308-.147.06-.1.06-.23-.005-.357L9.65 9.552c-.003-.004-.003-.01 0-.015L14.76.504c.063-.128.064-.258.004-.357-.06-.095-.168-.147-.307-.147h-2.33zM2.432 3.16c-.14 0-.256.05-.315.144-.06.1-.052.226.013.354l1.56 2.7c.003.006.003.01 0 .014L1.24 10.7c-.065.126-.062.254 0 .353.057.095.16.157.3.157h2.308c.345 0 .51-.232.63-.445l2.49-4.406-1.586-2.77c-.115-.21-.29-.44-.642-.44H2.432z' })
	);
}