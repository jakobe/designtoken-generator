#!/usr/bin/env node
const { spawn } = require('child_process');

const [, , ...args] = process.argv;
// console.log('args:', args);

// TODO: Do we need to differ on Windows?
//const sass = spawn(/^win/.test(process.platform) ? 'npx.cmd' : 'npx'
const sass = spawn('npx', ['sass', '--no-source-map', ...args]);
sass.stdout.on('data', (data) => {
	console.log(data.toString());
});

sass.stderr.on('data', (data) => {
	console.error(data.toString());
});

sass.on('close', (code) => {
	if (code === 0) {
		console.log(
			`🌈 Hooray! Generated design tokens from '${args[0]}' into '${args[1]}'.\nNow go build something awesome! 🌈`
		);
	}
});
