const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log('Hello pluto')
}, 'pluto is deprecated, its not a planet anymore');

helloPluto();