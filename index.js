const Getnodes = require("./getnodes");
const getnodes = new Getnodes();
const program = getnodes.loadfile('./test/sample.js')
const body = getnodes.parse(program)
//console.log(body)
