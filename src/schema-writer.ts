import { Interface, Method, Extractor } from './extractor';
import { writeFile } from 'fs-extra';
import { resolve, join } from 'path';
import * as chalk from 'chalk';
import * as pluralize from 'pluralize';

export class Writer {
    constructor() {
        //
    }

    write(interfaces: Interface[], destination: string = 'data/') {
        let p: string;
        p = resolve(destination);

        let promises: Promise<any>[] = interfaces.map((i: Interface) => this.execute(p, i.name, this.getContent(i)));
        return new Promise((resolve, reject) => {
            Promise.all(promises)
            .then(() => {
                console.log(chalk.magenta(`Done writing all ${interfaces.length} neo persistors!`));
                resolve(true);
            })
            .catch(err => reject(err));
        });
    }

    protected execute(baseDest: string, name: string, body: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let path: string = join(baseDest, `${name}`);
            writeFile(path, body, (err) => {
                if (err) {
                    console.info(chalk.red(`An error occured.\nThis probably means you entered a path to a directory that doesn't exist. \nPlease correct this and try again`));
                    reject(false);
                    process.exit(1);
                };
                console.log(chalk.green(`written >> ${name}`));
                resolve(true);
            });
        });
    }

    protected getContent(i: Interface): string {
        let meths: string = i.methods
        					 .filter(m => m.name.charAt(0) !== m.name.charAt(0).toUpperCase())
                             .sort((a: Method, b: Method) => {
                                 if (a.name.toUpperCase() < b.name.toUpperCase())
                                 	return -1;
                                 if (a.name.toUpperCase() > b.name.toUpperCase())
                                 	return 1;
                                 return 0;
                             })
        					 .map(m => {
                                 let fromid: string = m.from.toLowerCase().concat('Fid');
                                 let touid: string = m.to.toLowerCase().concat('Tid');
                                 let relptext: string = m.params.map(p => `${/([a-z_]+):/g.exec(p)[1]}: ${/([a-z_]+):/g.exec(p)[1]}`)
                                 								.reduce((acc: string, val: string) => acc.concat(`${val},`), '');
                                relptext = '{'.concat(relptext.slice(0, relptext.length - 1)).concat('}');
								let meth: string = `${m.name}(${fromid.concat(': ObjectID')}, ${touid.concat(': ObjectID')}, ${m.params.join(',')}): Promise<EdgeCreatedResponse> {\r\n\t\treturn this.createEdge({id: ${fromid}}, {id: ${touid}}, '${m.relation}', ${relptext}, '${m.to}');\r\n\t}\r\n`
                                return meth;
                             })
                             .reduce((acc, val) => acc.concat(`\r\n\t${val}`), '');
        let content: string = `import { ObjectID } from 'mongodb';\r\nimport { NeoPersistor, EdgeCreatedResponse } from '../main/neo.persistor';\r\n\r\nexport class ${i.label}Neo extends NeoPersistor {\r\n\tlabel: string;\r\n\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.label = '${i.label}';\r\n\t}\r\n${meths}\r\n}
        `;
        return content;
    }
}
/*test();
function test(){
    let w: Writer = new Writer();
    let e: Extractor = new Extractor('c:/users/ndany/web/storyient/storyient-neo.graphml');

    e.generateInterfaces()
    .then((i) => {
		w.write(i, resolve('data'))
        .then(() => {

        })
        .catch(e => console.log(e));
    })
    .catch(err => console.log(err));
}*/