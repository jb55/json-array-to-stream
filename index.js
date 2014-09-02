
var json = require('JSONStream');

process.stdin
.pipe(json.parse('*'))
.pipe(json.stringify(false))
.pipe(process.stdout)
