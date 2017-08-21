var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { d: 'M9.367 1.834l3.29 1.9A1.43 1.43 0 0 1 14.93 4a1.43 1.43 0 0 1-.903 2.1v3.8a1.422 1.422 0 0 1 .899 2.1 1.428 1.428 0 0 1-2.302.236l-3.27 1.888A1.428 1.428 0 0 1 8 16a1.425 1.425 0 0 1-1.368-1.83l-3.29-1.898A1.427 1.427 0 1 1 1.973 9.9l.001-3.8A1.428 1.428 0 0 1 1.07 4a1.428 1.428 0 0 1 2.271-.27l3.291-1.9A1.425 1.425 0 0 1 8 0a1.425 1.425 0 0 1 1.367 1.834zm-.343.585a1.432 1.432 0 0 1-.038.038l4.307 7.46a1.44 1.44 0 0 1 .055-.015V6.097a1.424 1.424 0 0 1-1.026-1.774L9.024 2.419zm-2.01.039a1.432 1.432 0 0 1-.04-.04L3.677 4.32a1.424 1.424 0 0 1-1.025 1.776v3.806l.056.015 4.307-7.46zm1.384.338a1.43 1.43 0 0 1-.795 0l-4.307 7.46a1.437 1.437 0 0 1 .4.694h8.607a1.43 1.43 0 0 1 .402-.696L8.398 2.796zm.657 10.818l3.276-1.892a1.439 1.439 0 0 1-.026-.094h-8.61l-.015.055 3.293 1.901c.259-.269.623-.436 1.027-.436.418 0 .794.18 1.055.466z' })
	);
}