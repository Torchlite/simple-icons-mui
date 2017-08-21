import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function spotlight(props) {
	return (
		<SvgIcon viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" {...props}>
			<path d="M15.723 6.884l-.423-.82c-.127-.237-.213-.495-.254-.76l-.142-.905c-.12-.79-.616-1.48-1.327-1.84l-.82-.41c-.237-.13-.456-.28-.65-.47l-.648-.67c-.57-.56-1.37-.83-2.17-.7l-.9.15c-.27.04-.54.04-.81 0l-.9-.15C5.9.2 5.1.46 4.54 1.02l-.65.65c-.187.196-.407.354-.65.466l-.82.41C1.7 2.9 1.203 3.59 1.09 4.382l-.14.903c-.043.267-.13.525-.255.763l-.43.82c-.37.705-.37 1.55 0 2.256l.422.82c.124.238.21.495.252.762l.14.903c.12.79.61 1.47 1.33 1.83l.82.41c.24.12.45.27.65.46l.65.65c.56.56 1.37.83 2.16.7l.9-.16c.26-.04.53-.04.8 0l.9.15c.79.13 1.6-.14 2.16-.71l.65-.65c.18-.2.4-.36.65-.47l.82-.41c.71-.36 1.21-1.05 1.32-1.84l.14-.91c.04-.27.12-.53.25-.76l.42-.82c.35-.71.35-1.54-.02-2.25zM8.83 7.38h-.013c-.263.126-.513.277-.75.45-.33.27-.61.6-.818.975-.08.124-.15.257-.2.395-.24.59-.38 1.215-.43 1.85-.06.494-.05.992.02 1.483.02.154.07.306.12.452.2.522.57.96 1.35.847.27-.05.53-.14.78-.268V10.95c-.41.044-.79.086-1.18.143-.02.21-.01.45-.02.677.17 0 .49-.028.63-.028v.876c0 .1 0 .2-.03.296-.06.145-.21.23-.37.198-.21-.028-.38-.242-.47-.41-.31-.608-.2-1.612-.09-2.276.07-.458.23-.897.48-1.29.22-.38.57-.664.99-.797 0-.19 0-.46-.02-.67 0-.1-.01-.2-.03-.3zm2.587 5.42c.226-.17.43-.37.607-.592-.156-.41-.283-.847-.41-1.285-.166-.573-.284-1.158-.353-1.75-.04-.368-.05-.75-.07-1.13-.01-.523 0-1.03.03-1.554-.2.15-.44.32-.65.48-.03.01-.06.04-.08.07-.01.04-.01.09 0 .14 0 .75.04 1.55.06 2.21-.18.08-.36.18-.55.25-.07-.78-.12-1.48-.17-2.28-.25.08-.48.19-.72.28.06.37.12.72.14 1.06.06.54.1 1.09.1 1.64 0 .15 0 .32-.01.48-.03.34-.01.68-.04 1-.04.63-.04 1.32-.04 1.93.13-.06.26-.15.38-.2.13-.06.26-.13.38-.2 0-.24.02-.43.02-.64.02-.79.04-1.46.02-2.15.21-.1.42-.2.65-.3.16.9.45 1.69.74 2.5zm-5.974.58c-.748-.367-1.44-.805-1.977-1.398.46-.76.86-1.553 1.2-2.372.38-.883.637-1.815.763-2.768.29-.1.6-.17.89-.268.02.014 0 .056 0 .085-.05.21-.1.4-.16.62-.17.67-.4 1.35-.62 2-.31.87-.67 1.71-1.03 2.51.41.34.85.64 1.33.89-.12.24-.25.47-.4.69zm.283-1.34c-.198-.1-.367-.213-.55-.312C5.71 10.245 6.26 8.763 6.67 7.18c.212.114.438.213.635.34-.1.41-.226.805-.34 1.186-.112.38-.24.763-.366 1.144-.3.748-.51 1.497-.88 2.187v.002zm7.653-5.55c-.13.056-.24.14-.37.197-.1-.328-.26-.638-.45-.918-.26.86-.22 1.85-.13 2.76.02.23.06.45.11.67.12.6.33 1.19.62 1.73-.19.25-.38.48-.58.73-.05-.06-.09-.13-.11-.2-.1-.21-.19-.42-.27-.64-.11-.29-.2-.59-.27-.89-.17-.64-.28-1.29-.34-1.95-.04-.66-.01-1.32.1-1.98.05-.34.12-.65.21-.98.02-.06.04-.12.05-.18-.03-.06-.06-.1-.1-.15-.18-.23-.35-.41-.55-.62-.04-.04-.08-.08-.13-.11-.04-.04-.08-.07-.12-.11.02-.06.05-.11.09-.16.1-.16.22-.31.34-.45h.01c.49.28.95.8 1.31 1.3.38.52.68 1.1.89 1.72-.12.05-.23.11-.36.18zm-10.2 4.347c.53-.775.73-1.732.55-2.654-.07-.278-.16-.547-.29-.805-.13-.265-.21-.546-.26-.834-.04-.396.03-.75.28-.932-.1-.31-.17-.622-.27-.918-.55.282-.94.805-.94 1.595 0 .48.18.79.35 1.14.11.23.21.47.29.72.1.26.14.55.13.83-.04.45-.24.88-.55 1.21-.05.04-.09.09-.13.14 0 .01.04.06.05.1.11.22.21.44.32.66.01.04.03.08.05.11.04-.01.07-.04.1-.07.1-.1.19-.2.27-.31zM4.24 3.24c.107-.08.226-.148.352-.196.255-.123.547-.148.82-.07.157.07.293.183.394.324.31.395.38 1.1.21 1.708-.17.698-.664 1.275-1.326 1.554.042.593.1 1.285.155 1.934-.156.085-.31.184-.48.283-.05.033-.1.062-.156.084-.19-1.69-.38-3.44-.57-5.09.17-.19.37-.37.59-.52zm2.753-.324c.327-.362.763-.61 1.242-.706.083-.017.168-.026.253-.028.33-.024.658.03.96.156.806.304 1.357 1.06 1.4 1.92l.003.127c0 1.217-1 2.22-2.22 2.22-.12 0-.24-.01-.36-.03-.42-.073-.81-.264-1.13-.552-.43-.377-.69-.912-.72-1.483-.03-.596.18-1.18.58-1.624zM7.67 5.43c.27.254.632.39 1.003.38.358 0 .7-.148.946-.41.26-.234.41-.566.42-.917v-.198c-.02-.367-.18-.713-.45-.96-.29-.263-.67-.397-1.05-.368-.34.015-.67.162-.9.41-.32.296-.48.727-.43 1.158.02.35.18.677.44.905zm-3.13-.72c.042.367.056.777.098 1.087.41-.17.65-.508.692-1.03.014-.16.014-.32 0-.48-.028-.297-.084-.566-.395-.55-.1.01-.197.044-.282.097-.076.032-.14.086-.184.156-.01.052 0 .104.01.155.01.212.04.408.05.565z"></path>
		</SvgIcon>
	);
}