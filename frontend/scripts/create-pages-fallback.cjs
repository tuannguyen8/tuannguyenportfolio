const { copyFileSync } = require('node:fs');
const path = require('node:path');

const distDirectory = path.resolve(__dirname, '../dist');

copyFileSync(
	path.join(distDirectory, 'index.html'),
	path.join(distDirectory, '404.html'),
);

console.log('Created GitHub Pages routing fallback.');
