import { Interface } from './extractor';
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
                console.log(chalk.magenta(`Done writing all ${interfaces.length} neo interfaces!`));
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
        let meths: string = i.methods.map(m => `${m.name}: () => any`).reduce((acc, val) => acc.concat(`\r\n\t${val};`), '');
        let content: string = `export interface I${i.label}Neo {${meths}\r\n}
        `;
        return content;
    }
}