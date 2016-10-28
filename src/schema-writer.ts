import { Collection } from './graphml-parser';
import { writeFile } from 'fs-extra';
import { resolve, join } from 'path';
import * as chalck from 'chalk';
import * as pluralize from 'pluralize';

export class Writer {
    constructor() {
        //
    }

    write(collections: Collection[], destination: string = '..') {
        let p: string;
        p = resolve(destination);
        let promises: Promise<any>[] = collections.map((s: Collection) => this.exectute(p, s.collName, s.collectionDef));
        return new Promise((resolve, reject) => {
            Promise.all(promises)
            .then(() => {
                console.log(chalck.magenta(`Done writing all ${collections.length} collection interfaces!`));
                resolve(true);
            })
            .catch(err => reject(err));
        });
    }

    protected exectute(baseDest: string, collName: string, def: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let path: string = join(baseDest, `${collName}.interface.ts`);
            let data = `import { ObjectID } from 'mongodb'; \r\ninterface ${this.getInterfaceName(collName)} ${def}`;
            writeFile(path, data, (err) => {
                if (err) reject(err);
                console.log(chalck.green(`written >> ${collName}.interface.ts`));
                resolve(true);
            });
        });
    }

    protected getInterfaceName(collName: string): string {
        let sing: string = pluralize.singular(collName);
        let cap: string = sing.split('').map((c,i) => i === 0 ? c.toUpperCase() : c).join('');
        let intname: string = `I${cap}`;
        return intname
    }
}