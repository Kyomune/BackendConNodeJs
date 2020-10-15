const fs = require('fs');

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const consoleFile = new console.Console(out, err);

setInterval(() => {
    consoleFile.table(new Date());
    consoleFile.error(new Error('ooops'))
}, 2000)