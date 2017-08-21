var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M16 8c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8 2.425c-.257.13-.604.194-1.04.194-.174 0-.43-.02-.772-.07-.342-.04-.6-.06-.772-.06-.637 0-.956.19-.956.58 0 .23.144.41.432.54.288.13.654.19 1.098.19.66 0 1.483-.33 2.02-.82l.01-.01c.538.49 1.328.83 1.99.83.444 0 .81-.07 1.098-.2.288-.14.432-.32.432-.55 0-.39-.32-.59-.956-.59-.173 0-.43.02-.77.06-.343.04-.6.06-.772.06-.438 0-.785-.06-1.042-.19zm0-5.903c.515-.45 1.146-.677 1.893-.677.592 0 1.088.11 1.487.333l.604-.703 1.067.97-.73.535c.26.387.39.844.39 1.37 0 .753-.23 1.354-.68 1.805-.46.45-1.03.675-1.73.675-.11 0-.26-.01-.44-.03l-.26-.04c-.03 0-.13.045-.33.133-.19.088-.28.18-.28.274 0 .164.14.246.43.246.13 0 .34-.03.64-.092.3-.06.56-.09.77-.09 1.5 0 2.25.61 2.25 1.81 0 .67-.3 1.19-.9 1.57-.6.38-1.32.57-2.17.57-.7 0-1.36-.14-1.98-.43-.61.29-1.27.44-1.98.44-.84 0-1.57-.19-2.17-.57-.6-.38-.9-.9-.9-1.57 0-1.2.75-1.81 2.25-1.81.22 0 .47.03.78.1.3.06.51.1.64.1.28 0 .43-.08.43-.24 0-.09-.09-.19-.29-.27-.19-.08-.3-.13-.33-.13l-.26.04c-.18.02-.33.03-.44.03-.7 0-1.28-.22-1.74-.67-.46-.45-.69-1.05-.69-1.81 0-.52.13-.98.38-1.37l-.73-.53 1.06-.97.61.7c.4-.22.9-.33 1.49-.33.75 0 1.38.23 1.9.68zm0 4.043c.103-.078.214-.142.332-.19-.12-.08-.23-.163-.332-.252-.1.09-.212.172-.332.25.118.05.23.114.332.192zm-.79-2.47c-.036-.257-.142-.475-.32-.652-.22-.222-.51-.333-.863-.333-.337 0-.612.115-.824.345-.21.23-.317.512-.317.846 0 .41.098.72.296.95.197.23.48.35.845.35.366 0 .657-.12.873-.35.174-.19.278-.43.312-.72-.006-.07-.01-.15-.01-.22s.004-.13.008-.2zm1.58.427c.033.29.137.53.31.72.216.236.507.354.873.354s.648-.115.845-.345c.198-.23.297-.54.297-.95 0-.33-.106-.61-.318-.84-.212-.23-.487-.34-.824-.34-.354 0-.64.11-.863.34-.177.18-.284.4-.32.65.005.07.007.13.007.2 0 .08-.003.16-.008.23z' })
	);
}