const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	help: {
		type: `boolean`,
		default: false,
		alias: `h`,
		desc: `show help`
	},
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	type: {
		type: `string`,
		alias: `s`,
		desc: `path directory to current file`
	},
	convert: {
		type: `string`,
		alias: `t`,
		desc: `Convert to JSON representation`
	},
	moveFile: {
		type: `string`,
		alias: `o`,
		desc: `move file to`
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `myshooltan-test`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
