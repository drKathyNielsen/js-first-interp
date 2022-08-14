const acorn = require("acorn");
const fs = require('fs')

class Getnodes{
    loadfile(filename){

        const buffer = fs.readFileSync('./test/sample.js', {encoding:'utf8', flag:'r'}).toString()
        return buffer
    }

    parse(program) {
        const body = acorn.parse(program, {ecmaVersion: 2020}).body;
        return body;

    }   
}
module.exports = Getnodes