#!/usr/bin/env node
const rockstar = require('./rockstar');
const fs = require('fs');
const path = require('path');

function promisify(fn, ...args) {
	return new Promise((resolve, reject) => fn(...args, (err, result) => {
		if (err) {
			reject(err)
		} else {
			resolve(result)
		}
	}))
}

const filename = process.argv[2]

promisify(fs.readFile, filename, 'utf-8')
.then(rockstar.compile)
.then(code => promisify(fs.writeFile, path.join('output', filename.replace('.rock', '.js')), code))
.then(null, e => {
	console.error(e)
	process.exit(1)
});