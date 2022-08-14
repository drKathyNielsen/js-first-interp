const acorn = require("acorn");

function getnodes(program) {
    const body = acorn.parse(program, {ecmaVersion: 2020}).body;
    return body;

}
module.exports = getnodes