import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function messenger(props) {
	return (
		<SvgIcon viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" {...props}>
			<path d="M8 0C3.582 0 0 3.316 0 7.407c0 2.332 1.163 4.41 2.98 5.77V16l2.725-1.495c.727.2 1.497.31 2.295.31 4.418 0 8-3.317 8-7.408C16 3.317 12.418 0 8 0zm.795 9.975L6.758 7.802 2.783 9.975l4.372-4.642 2.087 2.173 3.926-2.173-4.373 4.642z" fill-rule="nonzero"></path>
		</SvgIcon>
	);
}