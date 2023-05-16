const path = require('path');
const from = '/Users/username/Documents';
const to = '/Users/username/Documents/demo.txt';
const relPath = path.relative(from, to);
console.log(relPath);
