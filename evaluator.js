 class Evaluator {

    evalNodes(nodes, environment){
        for(const node of nodes){
            this.evalNode(node, environment);
        
        if (node.declarations) this.evalNodes(node.declarations, environment)
        }
    }
    evalNode(node, environment) {
         switch (node.type) {
             case 'VariableDeclarator': this.variableDeclarator(node, environment);
         }
     }

    variableDeclarator(node, environment){
        const id=this.readIdentifier (node.id);
        const value = this.readLiteral(node.init);
        //console.log("variableDeclarator", node);

        environment.push({id, value});   
    }
    readIdentifier(node){
        //console.log("readIdentifier", node);
        return node.name;
    }
    readLiteral(node){
        //console.log("readLiteral", node);
        return node.value;
    }
}
module.exports = Evaluator;