var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M8.007 2.65l.007-.008c.333-.32.685-.62 1.062-.887.148-.105.3-.205.457-.3.136-.08.275-.155.417-.224.11-.05.22-.1.333-.14.1-.04.205-.07.31-.1.16-.04.322-.08.487-.09h.182c.047 0 .094 0 .14.01.1.01.2.03.297.06.08.03.16.06.24.1.05.03.09.06.14.09.08.06.15.12.21.19.05.07.11.13.15.2.1.16.18.33.24.5.02.05.03.1.05.16.02.07.03.14.05.21.02.09.03.18.05.27l.03.34c.01.14.01.29.01.44 0 .19-.01.38-.03.57-.03.24-.06.47-.1.7-.03.14-.05.28-.08.42l-.06.24.13.04c.24.07.47.15.71.24.18.07.37.15.55.24.16.08.32.16.47.25.17.1.33.2.48.32.13.1.26.21.38.32.09.09.17.18.25.28.06.08.12.17.17.26.07.13.12.26.16.4.02.08.03.17.03.26 0 .05 0 .11-.01.17-.01.09-.03.19-.06.28-.02.09-.06.17-.1.25-.09.17-.2.33-.33.48-.04.05-.08.09-.12.13-.06.06-.11.11-.17.16-.07.06-.15.13-.23.18-.1.08-.2.15-.3.21-.13.09-.27.17-.41.24-.18.09-.35.18-.53.26-.18.08-.36.15-.55.22-.16.06-.32.11-.48.16l-.05.02c.02.08.04.16.05.24.02.12.05.24.07.36.04.24.08.49.1.73.01.19.02.38.02.56 0 .15-.01.3-.02.44-.01.12-.02.23-.04.35-.02.09-.03.19-.05.28l-.06.22c-.04.12-.09.25-.14.37-.05.09-.1.19-.16.28-.06.09-.13.17-.21.25-.09.09-.19.16-.29.22-.08.04-.17.08-.25.1-.14.04-.28.06-.42.068-.19.006-.38-.02-.57-.06-.12-.027-.23-.06-.34-.1-.13-.04-.25-.094-.37-.15-.15-.066-.29-.14-.43-.22-.16-.09-.32-.19-.47-.3-.39-.27-.76-.58-1.1-.91l-.08.07c-.16.15-.32.29-.48.43-.17.13-.34.26-.52.39-.16.11-.32.21-.49.31-.16.09-.33.17-.49.24-.12.05-.24.1-.36.14-.12.036-.23.07-.35.09-.19.04-.37.06-.56.056-.15 0-.3-.02-.44-.07-.09-.024-.18-.06-.26-.11-.06-.03-.11-.07-.16-.11-.04-.03-.07-.06-.1-.09-.03-.02-.05-.04-.07-.07-.14-.15-.25-.32-.33-.51l-.03-.09c-.01-.04-.03-.08-.04-.11-.02-.05-.03-.11-.05-.16-.02-.07-.03-.13-.05-.2-.02-.09-.04-.174-.05-.263-.01-.11-.03-.23-.03-.34-.01-.15-.01-.29-.01-.44 0-.19.01-.38.03-.56.02-.24.06-.47.1-.71l.12-.57-.2-.06c-.24-.073-.47-.16-.7-.25-.16-.06-.31-.13-.47-.21-.14-.07-.28-.14-.42-.23-.18-.1-.347-.21-.508-.33-.13-.1-.26-.21-.39-.33C.56 9.2.47 9.1.39 9 .32 8.91.257 8.817.2 8.718c-.05-.09-.09-.186-.126-.284C.064 8.39.05 8.344.04 8.3.015 8.208.002 8.113 0 8.018c0-.06.002-.12.008-.178.006-.044.013-.09.023-.133L.06 7.6c.064-.21.175-.406.31-.58.018-.026.037-.05.057-.074.026-.032.053-.063.08-.093.038-.042.077-.082.118-.122l.17-.15c.075-.06.15-.12.228-.18.1-.07.204-.14.31-.21.13-.08.266-.16.404-.23.176-.09.356-.17.54-.25.33-.14.668-.25 1.012-.35l.08-.02c-.05-.21-.1-.42-.14-.63-.04-.22-.08-.45-.1-.68-.02-.18-.03-.36-.04-.55-.01-.14 0-.29 0-.44 0-.11.01-.22.03-.33.01-.09.02-.18.04-.27.01-.07.03-.14.05-.21.01-.05.03-.11.05-.16l.04-.1c.01-.03.02-.06.04-.09.08-.18.18-.36.32-.51.03-.03.06-.06.1-.09.03-.03.06-.05.09-.08.04-.03.09-.06.14-.09.08-.04.16-.08.25-.1.1-.03.2-.05.3-.06.03 0 .06-.01.09-.01h.15l.11.01c.16.02.32.05.48.09.1.03.21.06.31.1.11.04.21.09.32.14.16.08.31.16.46.25.16.1.32.2.48.31.18.13.36.27.54.42.14.12.27.24.41.36l.09.09zm4.007 8.198c-.117.027-.235.053-.353.076-.27.055-.54.102-.81.142-.29.042-.58.077-.88.105-.04.01-.08.01-.12.02-.18.27-.38.54-.58.79-.21.28-.43.55-.66.8l-.1.11c.3.29.61.56.95.8.14.1.28.19.42.28.12.08.25.14.38.21.11.05.22.1.34.14.09.03.18.06.28.08.08.02.16.04.24.04.07.01.14.01.2.01.1 0 .21-.02.3-.06l.08-.04c.06-.03.11-.08.15-.13.06-.07.11-.15.16-.23.02-.02.03-.05.05-.08l.05-.12c.02-.05.04-.1.05-.16.02-.07.04-.13.05-.2.02-.09.03-.18.05-.27.02-.09.02-.19.03-.29.01-.22.01-.44-.01-.66-.01-.21-.04-.43-.07-.64-.03-.17-.06-.35-.1-.52l-.04-.17zm-7.993.03l-.06.29c-.07.332-.12.668-.15 1.007-.02.224-.02.45-.02.674.01.09.01.19.02.29.01.09.03.17.04.26.01.06.03.13.04.19.02.05.03.1.05.15.02.04.03.08.05.12l.05.09c.01.02.02.04.04.06l.03.05.03.04c.06.08.12.15.21.2l.06.03c.05.02.09.04.14.05.07.01.13.02.2.02s.14 0 .2-.01c.08-.01.16-.03.24-.04.1-.02.19-.05.28-.08.11-.04.21-.08.32-.13.15-.07.29-.14.42-.22.15-.09.3-.19.45-.29.15-.11.3-.22.44-.34.09-.07.17-.14.26-.22.07-.07.15-.13.22-.2l.03-.03-.17-.19c-.23-.26-.45-.53-.67-.8-.18-.23-.36-.47-.53-.71h-.06c-.31-.03-.62-.06-.92-.1-.28-.04-.56-.09-.84-.14l-.33-.07zm4.95.362c-.3.014-.61.02-.92.022-.29 0-.58-.004-.88-.015l-.1-.003.21.262c.2.246.4.486.61.72.05.057.1.114.16.17l.08-.09c.21-.237.41-.483.61-.735.08-.1.17-.21.25-.33zm.5-5.762c-.31-.024-.63-.04-.95-.048-.15-.004-.3-.006-.46-.007h-.07c-.15 0-.29.002-.44.006-.33 0-.66.02-.99.04-.19.28-.37.56-.55.85-.2.33-.39.67-.57 1.01-.11.21-.22.43-.33.65.12.24.24.48.37.71.19.35.39.69.59 1.03.17.26.34.53.51.78l.6.03c.29.01.57.01.86.01.49 0 .98-.02 1.46-.05.17-.25.33-.51.49-.76.35-.58.68-1.17.97-1.78-.1-.21-.2-.41-.31-.61-.14-.27-.29-.53-.44-.78-.21-.36-.43-.72-.67-1.07l-.04-.06zm-4.74 3.33c-.07.18-.15.366-.22.55-.11.285-.21.572-.3.86.17.04.35.072.52.102.25.044.51.08.76.112.07.01.14.017.21.024-.11-.173-.22-.348-.32-.524-.22-.368-.43-.744-.63-1.125zm6.57-.026c-.1.197-.21.39-.31.585-.12.216-.24.43-.37.644-.08.15-.17.29-.26.44l.15-.02c.25-.03.5-.07.74-.11.2-.03.41-.07.61-.12-.08-.27-.18-.54-.29-.81-.07-.2-.16-.4-.24-.59zm-7.74-2.8l-.22.066c-.24.075-.49.16-.72.258-.14.058-.28.12-.42.19-.15.073-.29.152-.44.24-.12.075-.25.158-.36.248-.09.066-.17.136-.25.212-.07.063-.13.13-.19.2-.04.055-.08.11-.12.17-.03.05-.06.1-.08.154-.03.073-.05.15-.05.23v.06c0 .088.03.176.06.257l.02.043.03.052.04.07.06.085.08.096c.03.04.07.078.1.115.05.046.09.09.14.134.06.05.11.097.17.143.08.06.16.12.24.176.1.07.2.14.31.2.14.08.28.15.42.22.17.08.35.16.52.23.16.06.31.12.46.16l.23.07.21-.63c.13-.35.26-.69.41-1.03l.18-.38-.17-.38c-.15-.34-.29-.7-.42-1.05-.07-.19-.14-.39-.2-.59zm8.91.01c-.05.172-.11.343-.17.513-.12.358-.26.712-.42 1.06l-.19.425.24.52c.15.325.28.654.4.987.07.172.13.346.18.52l.12-.036c.14-.04.27-.08.4-.13.27-.09.53-.2.78-.33.16-.07.31-.16.45-.25.13-.07.25-.16.37-.25.09-.06.17-.13.25-.21.07-.06.14-.14.2-.21.05-.05.09-.11.13-.17.03-.05.06-.1.08-.15.04-.07.06-.15.06-.24.01-.02.01-.04 0-.07 0-.05-.01-.11-.03-.16-.02-.07-.05-.13-.09-.19l-.03-.06-.05-.07c-.02-.03-.05-.06-.07-.09-.03-.03-.06-.07-.1-.11-.04-.04-.09-.08-.13-.12-.06-.05-.12-.1-.19-.15-.07-.06-.15-.11-.22-.16-.1-.07-.2-.13-.31-.19-.13-.07-.27-.14-.41-.2-.16-.08-.33-.14-.5-.21-.23-.09-.47-.16-.71-.23zM8 6.56c.79 0 1.43.64 1.43 1.43 0 .787-.64 1.427-1.43 1.427-.79 0-1.43-.64-1.43-1.428 0-.79.64-1.43 1.43-1.43zm2.336-.99c.176.274.345.554.508.837.15.262.298.527.44.795.085-.202.167-.406.245-.612.09-.253.18-.508.26-.766-.17-.04-.34-.075-.52-.107-.32-.06-.63-.108-.95-.148zm-4.67-.003c-.145.018-.288.038-.432.06-.245.037-.49.08-.733.13-.09.018-.19.038-.28.06.09.275.18.548.28.817.07.19.15.38.23.567.18-.34.37-.69.57-1.02.13-.2.25-.41.38-.61zm6.313-.402l.03-.133c.04-.174.07-.348.1-.524.04-.228.06-.46.08-.69.01-.225.02-.452.01-.678-.01-.102-.01-.205-.03-.306-.01-.09-.03-.177-.04-.264-.02-.068-.03-.135-.05-.2-.02-.05-.03-.1-.05-.15L12 2.104l-.037-.078c-.013-.024-.025-.048-.04-.07-.01-.02-.022-.04-.035-.058-.01-.013-.018-.027-.027-.04-.05-.08-.13-.15-.21-.2-.02-.017-.05-.03-.08-.04-.07-.03-.15-.044-.23-.05-.02 0-.04 0-.06-.002h-.02c-.02 0-.04 0-.07.003-.06 0-.12.01-.18.02-.07.01-.15.03-.22.05l-.27.09c-.1.04-.2.09-.31.14-.13.06-.25.14-.38.21-.13.08-.27.17-.4.27-.32.23-.62.49-.91.77l.13.14c.26.28.5.57.73.87.17.21.33.44.49.66l.41.04c.3.03.6.08.9.13.28.04.56.1.83.16zM7.53 3.137c-.015-.013-.03-.026-.043-.04-.13-.12-.262-.24-.4-.354-.15-.127-.307-.25-.468-.365-.15-.102-.29-.198-.44-.288-.13-.078-.27-.15-.4-.217-.1-.047-.2-.09-.3-.13-.09-.034-.19-.064-.28-.09-.07-.02-.14-.034-.21-.047-.07-.01-.13-.018-.19-.022l-.07-.002h-.01c-.02 0-.04 0-.06.002-.1.005-.2.023-.29.062-.03.013-.06.028-.09.046-.06.037-.11.084-.15.135-.06.07-.11.147-.15.228l-.04.084c-.02.03-.03.07-.04.11-.02.05-.04.09-.05.14-.01.06-.03.13-.04.19-.01.08-.03.16-.04.25-.01.09-.02.19-.02.29-.01.22 0 .44.01.66.02.34.08.68.15 1.02.02.11.05.22.07.33.1-.03.21-.05.31-.07.24-.05.49-.1.74-.13.27-.05.55-.08.82-.11l.25-.03c.16-.23.33-.45.5-.67.22-.28.45-.56.69-.82l.18-.2zm.478.488l-.163.18c-.214.24-.42.486-.618.738l-.17.22c.124-.007.247-.012.37-.015.16-.005.32-.007.48-.008h.116c.144 0 .288.002.432.005.165.004.33.01.494.017l-.16-.2c-.21-.272-.43-.538-.66-.794L8 3.625z' })
	);
}