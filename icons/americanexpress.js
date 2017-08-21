var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M10.923 10.96V9.083h1.492v.388h-1.047v.34h1.022v.39h-1.022v.38h1.047v.39h-1.492zm3.2-.99c.086.09.133.205.133.398 0 .403-.25.59-.702.59h-.87v-.4h.866c.085 0 .145-.012.183-.047.03-.02.053-.07.053-.12 0-.05-.024-.1-.055-.12-.03-.03-.08-.04-.15-.04-.42-.01-.94.02-.94-.58 0-.27.17-.56.64-.56h.9v.4h-.82c-.08 0-.13.01-.18.04-.05.03-.06.08-.06.14 0 .07.04.12.1.14.05.02.1.02.17.02l.25.01c.24.01.41.05.51.15zm-3.765.118c.1.037.18.103.22.157.062.092.072.177.073.343v.37h-.44v-.233c0-.113.01-.28-.07-.367-.06-.067-.16-.083-.32-.083h-.48v.684h-.45V9.08h1.03c.23 0 .4.01.54.09.14.084.23.2.23.415 0 .3-.2.45-.32.498zm-3.474.7l-.687-.763.687-.74v1.504zm-1.773-.22H4.02v-.372H5v-.383h-.98v-.34h1.12l.49.546-.51.55zm2.8-.618h-.58v-.478h.59c.16 0 .28.066.28.23 0 .162-.1.248-.28.248zm2.18-.095c-.06.035-.13.038-.22.038h-.54v-.42h.55c.08 0 .16 0 .22.033.06.03.1.088.1.17 0 .08-.03.144-.09.18zm-1.42-.153c0 .52-.38.63-.78.63h-.56v.627h-.87l-.55-.62-.57.62H3.57V9.08h1.797l.55.615.568-.616h1.43c.354 0 .752.1.752.62zm7.24 1.018c-.11.16-.32.24-.6.24h-.86v-.403h.86c.09 0 .15-.01.18-.046.03-.02.06-.07.06-.12 0-.05-.02-.1-.05-.12-.03-.03-.08-.04-.15-.04-.42-.01-.94.02-.94-.58 0-.27.18-.56.64-.56h.9v-.37h-.83c-.25 0-.43.06-.56.16v-.16H13.3c-.197 0-.427.05-.535.16v-.16h-2.18v.16c-.174-.12-.468-.15-.603-.15H8.53v.16c-.136-.13-.442-.15-.63-.15H6.29l-.37.4-.345-.4h-2.41v2.62H5.53l.38-.4.36.41h1.456v-.61h.143c.19.01.42 0 .62-.09v.71h1.2v-.68h.05c.07 0 .08 0 .08.08v.6h3.65c.23 0 .47-.06.61-.17v.17h1.15c.24 0 .47-.03.65-.12V16H0V8.1h.764l.172-.416h.386l.17.417h1.504v-.31l.135.32h.78l.14-.32v.32h3.73v-.69h.07c.05.01.07.01.07.09v.59h1.93v-.16c.16.09.4.16.72.16h.81l.18-.41h.39l.17.42h1.57v-.39l.24.4h1.26V5.49h-1.24v.31l-.17-.31H12.5v.31l-.16-.31H10.6c-.29 0-.543.04-.747.153V5.49H8.66v.152c-.13-.12-.308-.158-.505-.158h-4.34l-.292.675-.3-.68H1.858v.31l-.15-.31H.54L0 6.73V0h15.906v9.483h-.815c-.08 0-.13.003-.18.034-.04.03-.06.076-.06.135 0 .07.04.12.1.14.05.016.1.02.18.02l.24.008c.25.006.41.048.51.15.02.015.03.03.05.047v.004c.06.09.09.19.09.35 0 .15-.03.26-.09.35zM6.66 7.732h-1.5V5.858h1.494v.39H5.607v.338h1.02v.384h-1.02v.375h1.047v.387zm2.82 0h-.46V5.858h.456v1.874zm-.717-1.37c0 .3-.2.454-.316.5.098.038.182.104.22.158.064.093.075.177.075.344v.368H8.29v-.236c0-.113.01-.275-.072-.365-.065-.06-.165-.08-.326-.08h-.48v.69h-.45V5.86h1.03c.227 0 .395.006.54.09.14.083.226.206.226.415zm6.007 1.37h-.635l-.847-1.407v1.407h-.91l-.175-.418h-.926l-.17.418h-.522c-.217 0-.492-.048-.647-.207-.158-.16-.24-.375-.24-.716 0-.28.05-.54.242-.74.144-.15.37-.22.68-.22h.43v.4h-.422c-.163 0-.256.02-.344.11-.077.08-.13.23-.13.42 0 .2.04.34.124.44.07.07.194.09.312.09h.2l.63-1.48h.67l.757 1.77V5.86h.68l.787 1.305V5.858h.457v1.874zm-14.763 0l.8-1.874h.665l.76 1.775V5.858h.73l.585 1.27.538-1.27h.744v1.874h-.46l-.01-1.468-.65 1.468h-.39l-.65-1.47v1.47h-.91l-.17-.418H.66l-.173.418h-.48zm1.43-.81l-.307-.746-.305.747h.61zm10.614 0l-.31-.746-.31.747h.62zm-3.87-.296c-.06.037-.13.038-.22.038h-.55v-.416h.55c.08 0 .16.004.22.034.06.027.1.085.1.166 0 .082-.03.148-.09.178z' })
	);
}