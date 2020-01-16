//index.js
const testAddon = require('./build/Debug/testaddon.node');
console.log('addon',testAddon);
console.log(testAddon.hello())
module.exports = testAddon;
