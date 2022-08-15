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
    expect(body.length).toBeGreaterThan(0); 
})
test('inspect', ()=>{
    console.log('look at first node', body[0])
    console.log('look at body[0].declarations.id', body[0].declarations[0].id)
    console.log('look at body[0].declarations.id', body[0].declarations[0].id.name)

})
test(' get the name from id node', ()=>{
    const node = body[0].declarations[0].id;

    const ev = new Evaluator();
    const name = ev.readIdentifier(node);
    expect(name).toBe("a");
})
test('when  id get the value', ()=>{
    const node = body[0].declarations[0].init;
    const ev = new Evaluator();
    const value = ev.readLiteral(node);
    expect(value).toBe("hello");
})

test('when variable declarator store the id and value', ()=>{
    const node = body[0].declarations[0];
    //console.log(node)
    let environment=[];
    const ev = new Evaluator();
    ev.variableDeclarator(node, environment); 

    expect(environment[0].id).toBe( 'a'); 
    expect(environment[0].value).toBe('hello');
})

test('another node is an identifier', ()=>{
    let environment=[];
    const ev = new Evaluator();
    ev.evalNodes(body, environment); 
    console.log(environment);
    const result = environment.some(element=>element={ id: 'b', value: 6 })
    expect(result).toBeDefined; 
    //expect(environment[2].value).toBe(6);
})