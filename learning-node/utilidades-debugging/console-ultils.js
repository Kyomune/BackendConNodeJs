

// console.log("Un %s y un %s", "perrito", "gatito");


// console.info('Hello world');
// console.warn('hello error');

// console.assert(42 === '42')

// console.trace('hello');

const util = require('util');
const debuglog = util.debuglog('foo'); UU-->> //se debe de definir la variable de entorno NODE_DEBUG = foo para que funcione

debuglog('Hello from foo')