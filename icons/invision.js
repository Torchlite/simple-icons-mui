var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M14.55 0H1.45C.65 0 0 .65 0 1.45v13.1C0 15.35.65 16 1.45 16h13.1c.8 0 1.45-.65 1.45-1.45V1.45C16 .65 15.35 0 14.55 0zM3.32 10.192c-.057.244-.086.508-.086.723 0 .848.46 1.41 1.438 1.41.81 0 1.468-.48 1.94-1.257l-.288 1.16h1.61l.92-3.69c.23-.935.675-1.42 1.35-1.42.532 0 .863.33.863.877 0 .158-.014.33-.072.517l-.474 1.696c-.07.245-.1.49-.1.72 0 .804.48 1.393 1.47 1.393.85 0 1.53-.54 1.9-1.85l-.63-.24c-.31.88-.59 1.04-.8 1.04-.21 0-.33-.14-.33-.43 0-.13.03-.27.07-.44l.46-1.65c.12-.39.16-.73.16-1.05 0-1.23-.75-1.88-1.65-1.88-.85 0-1.71.77-2.14 1.57l.32-1.44H6.77L6.424 7.2h1.15l-.708 2.834C6.31 11.268 5.29 11.288 5.16 11.26c-.21-.048-.345-.128-.345-.402 0-.157.03-.384.1-.657l1.08-4.27H3.262L2.917 7.2h1.136l-.733 2.994zm2.027-5.158c.532 0 .978-.417.978-.963 0-.54-.446-.96-.978-.96s-.977.42-.977.97.445.97.977.97z' })
	);
}