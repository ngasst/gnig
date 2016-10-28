import * as XML from 'xml2js';
import { readFile } from 'fs-extra';
export class GraphParser {
    parseFromPath(path: string) {
        let Parser: XML.Parser = new XML.Parser();
        return new Promise((resolve, reject) => {
            readFile(path, (err, data: Buffer) => {
                if (err) reject(err);
                Parser.parseString(data.toString(), (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                });
            });
        });
    }
}