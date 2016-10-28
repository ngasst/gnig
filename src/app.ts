import { resolve, normalize } from 'path';
import { Writer } from './schema-writer';
import { GraphParser, Collection } from './graphml-parser';
import { inspect } from 'util';
import * as chalk from 'chalk';
let args: string[] = process.argv.filter((a, i) => i > 1);

let parser: GraphParser = new GraphParser();
let writer: Writer = new Writer();

let path: string;

if (args.length > 0) {
    //load schema with arg1 as path and go to second step -- check if an out path was provided
    path = args[0];
    //if a out path was provided and is valid, write to that path. if not report error if any and ask for valid path.
} else {
    path = 'storyient-mongo.graphml';
    // launch assistant
        //--ask where to load graph schema from

        //--ask where to store the text schemas
}
let p: string = resolve(path);

parser.parse(p)
.then((data: Collection[]) => {
    writer.write(data)
    .then(() => {
        console.log(chalk.cyan('Process completed successfully!'));
        process.exit(0);
    })
    .catch((err) => {
        console.log(chalk.red(err));
        process.exit(1);
    })
})
.catch(err => {
    console.log(chalk.red(err));
});