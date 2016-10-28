import * as XML from 'xml2js';
import { readFile } from 'fs-extra';
import * as chalk from 'chalk';
export class GraphParser {
    protected getGraph(path: string): Promise<Graph[]> {
        let Parser: XML.Parser = new XML.Parser();
        return new Promise((resolve, reject) => {
            readFile(path, (err, data: Buffer) => {
                if (err) {
                    console.info(chalk.red(`An error occured. This probably means you entered a path that doesn't point to a valid .graphml file. \n Please correct this and try again`));
                    reject(false);
                    process.exit(1);
                }
                Parser.parseString(data.toString(), (err, result) => {
                    if (err) {
                        console.info(chalk.red(`An error occured. This means we couldn't parse the .graphml file you provided. \n Please make sure of its integrity and try again.`));
                        reject(false);
                        process.exit();
                    }
                    resolve(result.graphml.graph);
                });
            });
        });
    }

    parse(p: string): Promise<Collection[]> {
        return new Promise((resolve, reject) => {
            Promise.resolve()
            .then(() => {
                return this.getGraph(p);
            })
            .then((g: Graph[]) => {
                let graph: Graph = g[0];
                let labels: Label[] = [].concat(...graph.node.map(d => d['data']).map(d => d[0]['y:GenericNode'])).filter(d => d != undefined).map(d => d['y:NodeLabel']);
                let collections: Collection[] = labels.map((datum: Label) => Object.assign({}, {collName: datum[0]['_'], collectionDef: datum[1]['_']})).filter(s => ('collName' in s && 'collectionDef' in s));
                resolve(collections);
            })
            .catch(err => reject(err));
        });
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

interface Label {
    _: string;
    '$': any;
}

interface Node {
    '$': {
        id: string;
    };
    data: Object[];
}

export interface Collection {
    collName: string;
    collectionDef: string;
}