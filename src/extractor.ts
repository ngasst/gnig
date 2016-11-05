import { GraphParser, Graph, Node, Edge } from './graphml-parser';
import { resolve as pResolve, join } from 'path';
import * as chalk from 'chalk';
import { inspect } from 'util';

export class Extractor {
	protected parser: GraphParser;
    protected path: string;
    constructor(path: string) {
        this.parser = new GraphParser();
        this.path = path;
        
    }

    generateInterfaces(): Promise<Interface[]> {
        return new Promise((resolve, reject) => {
			this.parser.parse(this.path)
	        .then((g: Graph) => {
	            let nodes: Node[] = g.nodes;
		        let edges: Edge[] = g.edges;
		
		        let interfaces: Interface[] = nodes.map((n: Node) => {
					let interf: Interface = {
		                name: n.label.split('').map((c, i) => i === 0 ? c.toLowerCase() : c).join('').concat('.neo.ts'),
		                label: n.label,
		                methods: this.extractMethods(n, edges, nodes)
		            }
		            return interf;
		        });
		
		        resolve(interfaces);
	        })
	        .catch(err => {
                console.error(chalk.red(err));
                reject(err);
            });
        });
    }

    protected extractMethods(node: Node, edges: Edge[], nodes: Node[]) {
        let methods: Method[] = edges
        .filter((e: Edge) => e.source === node.id)
        .map((e: Edge) => {
            let dest: Node = nodes.filter((n, i) => n.id === e.target)[0];
            let name: string = e.label.split('_')
                	.map((w, i) => i === 0 ? w.split('').map((c, i) => i === 0 ? c.toLowerCase() : c).join('') : w)
                	.map(w => w.split('').map((c, i) => i !== 0 ? c.toLowerCase() : c).join(''))
                    .join('')
                    .concat(dest.label);
            let params = e.properties.toString().match(new RegExp(/([a-z_]+:\s?[a-z_]+)/, 'g')) === null ? [] : e.properties.toString().match(new RegExp(/([a-z_]+:\s?[a-z_]+)/, 'g'));
			let method: Method = {
                name: name,
                params: params,
                from: node.label,
                to: nodes.filter((n: Node) => n.id === e.target)[0].label,
                relation: e.label              
            };
            return method;
        });

        return methods;
    }

    protected extractRelationships(edges: Edge[]) {
		let relationships: string[] = edges
        .map((e: Edge) => e.label);

        return relationships;
    }

}
/*
test('c:/users/ndany/web/storyient/storyient-neo.graphml');
function test(path: string) {
    let ex: Extractor = new Extractor(path);
    ex.generateInterfaces()
    .then(i => {
        console.log(inspect(i[2], true, 5, true));
    })
    .catch(err => console.log(err));
}*/

export interface Interface {
    name: string;
    label: string;
	methods: Method[];
}

export interface Method {
    name: string;
    params: string[];
    from: string;
    to: string;
    relation: string;
}