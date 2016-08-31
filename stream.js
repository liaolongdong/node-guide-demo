var fs = require('fs');
fs.createReadStream('./temp/test.gif')
	.pipe(process.stdout);
