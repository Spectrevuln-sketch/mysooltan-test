#!/usr/bin/env node

/**
 * myshooltan-test
 * mengambil file linux log dengan node js
 *
 * @author Gerry Raditya Kusmana Yahya <https://github.com/Spectrevuln-sketch>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const handler = require('./handler/handler')
const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;
(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	console.log(flags.help)
	if (flags.help) return cli.showHelp(0);
	if (input[0] && !input.includes(`help`) && !flags.moveFile) return handler.ReadFilePath(input[0])
	if (flags.convert === 'json') return handler.ConvertToJson(flags.convert)
	if (flags.convert === 'text') return handler.ConvertToString(flags.convert)
	if (flags.moveFile) return handler.MoveFiles(input[0], flags.moveFile)
	// debug && log(flags);
})();
