import * as XML from 'xml2js';
import { readFile } from 'fs-extra';
import * as chalk from 'chalk';
export class GraphParser {
    protected getGraph(path: string): Promise<Graph> {
        let parser: XML.Parser = new XML.Parser();
        return new Promise((resolve, reject) => {
            readFile(path, (err, data: Buffer) => {
                if (err) {
                    console.info(chalk.red(`An error occured. This probably means you entered a path that doesn't point to a valid .graphml file.\nPlease correct this and try again`));
                    reject(false);
                    process.exit(1);
                }
                parser.parseString(data.toString(), (err, result) => {
                    if (err) {
                        console.info(chalk.red(`An error occured. This means we couldn't parse the .graphml file you provided.\nPlease make sure of its integrity and try again.`));
                        reject(false);
                        process.exit();
                    }
                    resolve(result);
                });
            });
        });
    }

    parse(p: string): Promise<Graph> {
        return new Promise((resolve, reject) => {
        	this.getGraph(p)
            .then((data: Graph) => {
				let worked: any = Object.assign({}, {nodes: data['graphml']['graph']['0']['node'], edges: data['graphml']['graph']['0']['edge']});
		        let nodes: any[] = worked.nodes;
		        let edges: any[] = worked.edges;
		        let cleanNodes: any[] = nodes.map(n => Object.assign({}, {label: n['data'][0]['y:GenericNode'][0]['y:NodeLabel'][0]['_'] , properties: n['data'][0]['y:GenericNode'][0]['y:NodeLabel'][1]['_'], id: n['$']['id']}));
		        //console.log(edges[0]['data'][0]['y:PolyLineEdge'][0]['y:EdgeLabel'][0]['_']);
		        let cleanEdges: any[] = edges.map(e => {
		            	let edge: any;
			            if ('y:PolyLineEdge' in e['data'][0] && 'y:EdgeLabel' in e['data'][0]['y:PolyLineEdge'][0]) {
			                let label: string = e['data'][0]['y:PolyLineEdge'][0]['y:EdgeLabel'][0]['_'].match(new RegExp(/[(A-Z)]+/, 'g')).join('_');
			                let props = e['data'][0]['y:PolyLineEdge'][0]['y:EdgeLabel'][0]['_'].replace(label, '');
							edge = Object.assign({}, 
				            {
				                id: e['$']['id'],
				                source: e['$']['source'],
				                target: e['$']['target'],
				                label: label,
				                properties: props
				            });
			            } else {
				        	edge = Object.assign({}, 
				            {
				                id: e['$']['id'],
				                source: e['$']['source'],
				                target: e['$']['target'],
				                label: '',
				                properties: {}
				            });
			            }
				            return edge;
				        
			        });
					
			        let cleanData: any = Object.assign({}, {nodes: cleanNodes, edges: cleanEdges});
					resolve(cleanData);
            });
	    });
	}
}

export interface Node {
    label: string;
    id: string;
    incoming?: Edge[];
    outgoing?: Edge[];
}

export interface Edge {
	source: string;
    target: string;
    label: string;
    properties: Object;
}

export interface Graph {
    nodes: Node[];
    edges: Edge[];
} 