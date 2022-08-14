 class Evaluator {

     variableDeclarator(node, environment){
        const id=node.id;
        const value = node.value;
        console.log("variableDeclarator", node);

        environment.push({id, value});   
    }
    readIdentifier(node){
        return node.name;
    }
}
module.exports = Evaluator;