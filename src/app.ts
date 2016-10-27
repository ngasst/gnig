import { resolve } from 'path';
let args: string[] = process.argv.filter((a, i) => i > 1);

let path: string;
console.log(args);

if (args.length > 0) {
    //load schema with arg1 as path and go to second step -- check if an out path was provided
    path = args[0];
    console.log(path);
    //if a out path was provided and is valid, write to that path. if not report error if any and ask for valid path.
} else {
    path = 'storyient-mongo.graphml';
    // launch assistant
        //--ask where to load graph schema from

        //--ask where to store the text schemas
}
let p: string = resolve(path);
let schema: Gml = require('../storyient-mongo.graphml');

let graph: Graph = schema.graphml.graph[0];

let data = [].concat(...graph.node.map(d => d['data']).map(d => d[0]['y:GenericNode'])).filter(d => d != undefined).map(d => d['y:NodeLabel']);

let fschema = data.map((datum: string[]) => Object.assign({}, {collName: datum[0]['_'], collectionDef: datum[1]['_']}));

let final = fschema.map(sc => {
    let raw: string = sc.collectionDef;
    let clean: string = raw.replace(new RegExp(/(_?[\w]*??:\??)/g), "$1");
    return Object.assign({}, sc, {collectionDef: clean});
});

console.log(final);

interface Gml {
    graphml: {
        '$': any;
        key: any[];
        graph: Graph[];
        data: Object[];
    }
}

interface Graph {
    '$': {
        edgedefault: string;
        id: string;
    };
    data: Object[];
    node: Node[];
    edge: Object[];
}

interface Node {
    '$': {
        id: string;
    };
    data: Object[];
}