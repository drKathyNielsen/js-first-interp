const Getnodes = require("./../getnodes");
let body ;

beforeAll( ()=>{
    var getnodes = new Getnodes();

    const program = getnodes.loadfile('./test/sample.js')
    body = getnodes.parse(program)

    return body;
})

test('nodes parsed', ()=>{
    expect(body.length).toBe(2); 
    console.log(body)
})
