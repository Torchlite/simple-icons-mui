const _ = require('lodash');
const cheerio = require('cheerio');
const fs = require('fs');
const humps = require('humps');
const sanitize = require('sanitize-filename');

const sourcePath = `${__dirname}/node_modules/simple-icons/icons`;
const destinationPath = `${__dirname}/icons`;

const componentTemplate = _.template(_.trim(`
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function (props) {
	return (
		<SvgIcon <%= props %>{...props}>
			<%= markup %>
		</SvgIcon>
	);
}
`));

if (!fs.existsSync(destinationPath)) {
	fs.mkdirSync(destinationPath);
}

fs.readdirSync(sourcePath).forEach(file => {
	const $ = cheerio.load(fs.readFileSync(`${sourcePath}/${file}`, 'utf8'));
	const svg = $('svg');
	const name = sanitize(file.substr(0, file.lastIndexOf('.')) || file);
	const markup = svg.html().replace('fill-rule', 'fillRule');
	let props = '';
	_.forEach(_.get(svg, '0.attribs', {}), (value, key) => {
		props = props + `${humps.camelize(key)}="${value}" `;
	});
	const component = componentTemplate({ name, markup, props });

	fs.writeFileSync(`${destinationPath}/${name}.js`, component);
});
