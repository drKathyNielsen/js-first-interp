const Getnodes = require("./../getnodes");
const Evaluator=require( "./../evaluator");

let body ;


beforeAll( ()=>{

    var getnodes = new Getnodes();


    const program = getnodes.loadfile('./test/sample.js')
    body = getnodes.parse(program)

    return body;
})

test('nodes parsed', ()=>{
    expect(body.length).toBe(2); 
    //console.log(body)
})
test('when variable declaration navigate to child node', ()=>{
    console.log('look at first node', body[0])
    console.log('look at body[0].declarations.id', body[0].declarations[0].id)
    console.log('look at body[0].declarations.id', body[0].declarations[0].id.name)

})
test(' get the name from id node', ()=>{
    const node = body[0].declarations[0].id;
    //console.log(node)
    const ev = new Evaluator();
    const name = ev.readIdentifier(node);
    expect(name).toBe("a");
})
test('when  id get the value', ()=>{
    const node = body[0].declarations[0].init;
    //console.log(node)
    const ev = new Evaluator();
    const value = ev.readLiteral(node);
    expect(value).toBe("hello");
})

test('when variable declarator store the id and value', ()=>{
    const node = body[0].declarations[0];
    console.log(node)
    let environment=[];
    const ev = new Evaluator();
    ev.variableDeclarator(node, environment); 
    console.log(environment)
    expect(environment[0].id).toBe( 'a'); 
    expect(environment[0].value).toBe('hello');
})