const getnodes = require("./getnodes");

const program="let a=5   print(a)";
const fs = require('fs')
const buffer = fs.readFileSync('./test/sample.js', {encoding:'utf8', flag:'r'}).toString()
console.log (buffer)
const body = getnodes(buffer)
//console.log(body)