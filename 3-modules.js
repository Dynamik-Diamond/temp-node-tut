// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (Only share minimum)

const { john, peter } = require('./4-name');
const sayHi = require('./5-utilies');
const data = require('./6-alt');

require('./7-mindGreande');

sayHi(john);
sayHi(peter);
sayHi('susan');
