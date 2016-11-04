import { resolve, normalize } from 'path';
import { createInterface, ReadLine } from 'readline';
import { Writer } from './schema-writer';
import { Interface, Extractor } from './extractor';
import { GraphParser, Graph } from './graphml-parser';
import { inspect } from 'util';
import * as chalk from 'chalk';
let args: string[] = process.argv.filter((a, i) => i > 1);

let parser: GraphParser = new GraphParser();
let writer: Writer = new Writer();
let extract: Extractor;

let path: string;
let out: string;

if (args.length > 0) {
    //load schema with arg1 as path and go to second step -- check if an out path was provided
    path = args[0];

    //if a out path was provided and is valid, write to that path. if not report error if any and ask for valid path.
    out = resolve('.');
    args[1] !== undefined ? out = resolve(args[1]) : out;
    let p: string = resolve(path);
    execute(p, out);
} else {
    const line: ReadLine = createInterface({input: process.stdin, output: process.stdout});
    // launch assistant
        //--ask where to load graph schema from
        line.question(chalk.yellow('Where should we look for a .graphml file?\r\n'), (answer: string) => {
            Promise.resolve(resolve(answer))
            .then((pin: string) => {
                console.info(chalk.gray(`We'll read the .graphml file from: ${pin}`));
                line.question(chalk.yellow('Where should we save the resulting interface files?\r\n'), (answer: string) => {
                    Promise.resolve(resolve(answer))
                    .then((pout: string) => {
                        console.info(chalk.gray(`We'll save the resulting interface files to: ${pout}\r\n`));
                        line.question(chalk.yellow(`Does this look right to you? (yes/no)\r\n`), (answer: string) => {
                            if (answer.trim() === 'no') {
                                console.log('Change the paths as appropriate and try again.');
                                process.exit(0);
                            }

                            if (answer.trim() !== 'yes') {
                                console.log('Please answer with yes or no. (Type the words in their entirety)');
                                process.exit(0);
                            }

                            execute(pin, pout);
                        });
                    })
                    .catch(err => {
                        console.log(chalk.red('Sorry, but that path is invalid. Try again.'));
                        process.exit(1);
                    });
                });
            })
            .catch(err => {
                console.log(chalk.red('Sorry, but that path is invalid. Try again.'));
                process.exit(1);
            });
        });
}

function execute(pin: string, pout: string): void {
    extract = new Extractor(pin);
    extract.generateInterfaces()
    .then((data: Interface[]) => {
		writer.write(data, pout)
	    .then(() => {
	        console.log(chalk.cyan('Process completed successfully!'));
	        process.exit(0);
	    })
        .catch((err) => {
	        console.log(chalk.red(err));
	        process.exit(1);
	    });
    })
    .catch((err) => {
        console.log(chalk.red(err));
        process.exit(1);
    });
}