const getnodes = require("./../getnodes");
const fs = require('fs')
const buffer = fs.readFileSync('./test/sample.js', {encoding:'utf8', flag:'r'}).toString()
//const program="let a='hello'   print(a)";

const body = getnodes(buffer)
console.log(body)
test('get nodes for program', ()=>{
    expect(body.length).toBe(2); 
})