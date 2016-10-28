import { resolve } from 'path';
import { SchemaWriter } from './schema-writer';
import * as chalk from 'chalk';
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

let fschema: any = data.map((datum: string[]) => Object.assign({}, {collName: datum[0]['_'], collectionDef: datum[1]['_']})).filter(s => ('collName' in s && 'collectionDef' in s));

SchemaWriter.write(fschema)
.then(() => {
    console.log(chalk.cyan('Process completed successfully!'));
    process.exit(0);
})
.catch((err) => {
    console.log(chalk.red(err));
    process.exit(1);
})

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

export interface Schema {
    collName: string;
    collectionDef: string;
}