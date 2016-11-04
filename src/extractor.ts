import { GraphParser, Graph, Node, Edge } from './graphml-parser';
import { resolve as pResolve, join } from 'path';
import * as chalk from 'chalk';

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
		                name: n.label.split('').map((c, i) => i === 0 ? c.toLowerCase() : c).join('').concat('.neo.interface.ts'),
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
        .filter((e: Edge) => (e.source === node.id && e.label.length > 1))
        .map((e: Edge) => {
            let dest: Node = nodes.filter((n, i) => n.id === e.target)[0];
			let method: Method = {
                name: e.label.split('_')
                	.map((w, i) => i === 0 ? w.split('').map((c, i) => i === 0 ? c.toLowerCase() : c).join('') : w)
                	.map(w => w.split('').map((c, i) => i !== 0 ? c.toLowerCase() : c).join(''))
                    .join('')
                    .concat(dest.label)
            };
            return method;
        })
        .sort();

        return methods;
    }


}

export interface Interface {
    name: string;
    label: string;
	methods: Method[];
}

interface Method {
    name: string;
}