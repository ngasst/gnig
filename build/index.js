require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("chalk");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("fs-extra");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var XML = __webpack_require__(7);
var fs_extra_1 = __webpack_require__(2);
var chalk = __webpack_require__(0);
var GraphParser = (function () {
    function GraphParser() {
    }
    GraphParser.prototype.getGraph = function (path) {
        var Parser = new XML.Parser();
        return new Promise(function (resolve, reject) {
            fs_extra_1.readFile(path, function (err, data) {
                if (err) {
                    console.info(chalk.red("An error occured. This probably means you entered a path that doesn't point to a valid .graphml file. \n Please correct this and try again"));
                    reject(false);
                    process.exit(1);
                }
                Parser.parseString(data.toString(), function (err, result) {
                    if (err) {
                        console.info(chalk.red("An error occured. This means we couldn't parse the .graphml file you provided. \n Please make sure of its integrity and try again."));
                        reject(false);
                        process.exit();
                    }
                    resolve(result.graphml.graph);
                });
            });
        });
    };
    GraphParser.prototype.parse = function (p) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(function () {
                return _this.getGraph(p);
            })
                .then(function (g) {
                var graph = g[0];
                var labels = (_a = []).concat.apply(_a, graph.node.map(function (d) { return d['data']; }).map(function (d) { return d[0]['y:GenericNode']; })).filter(function (d) { return d != undefined; }).map(function (d) { return d['y:NodeLabel']; });
                var collections = labels.map(function (datum) { return Object.assign({}, { collName: datum[0]['_'], collectionDef: datum[1]['_'] }); }).filter(function (s) { return ('collName' in s && 'collectionDef' in s); });
                resolve(collections);
                var _a;
            })
                .catch(function (err) { return reject(err); });
        });
    };
    return GraphParser;
}());
exports.GraphParser = GraphParser;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var fs_extra_1 = __webpack_require__(2);
var path_1 = __webpack_require__(1);
var chalk = __webpack_require__(0);
var pluralize = __webpack_require__(6);
var Writer = (function () {
    function Writer() {
        //
    }
    Writer.prototype.write = function (collections, destination) {
        var _this = this;
        if (destination === void 0) { destination = '..'; }
        var p;
        p = path_1.resolve(destination);
        var promises = collections.map(function (s) { return _this.exectute(p, s.collName, s.collectionDef); });
        return new Promise(function (resolve, reject) {
            Promise.all(promises)
                .then(function () {
                console.log(chalk.magenta("Done writing all " + collections.length + " collection interfaces!"));
                resolve(true);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    Writer.prototype.exectute = function (baseDest, collName, def) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = path_1.join(baseDest, collName + ".interface.ts");
            var data = "import { ObjectID } from 'mongodb'; \r\ninterface " + _this.getInterfaceName(collName) + " " + def;
            fs_extra_1.writeFile(path, data, function (err) {
                if (err) {
                    console.info(chalk.red("An error occured.\nThis probably means you entered a path to a directory that doesn't exist. \nPlease correct this and try again"));
                    reject(false);
                    process.exit(1);
                }
                ;
                console.log(chalk.green("written >> " + collName + ".interface.ts"));
                resolve(true);
            });
        });
    };
    Writer.prototype.getInterfaceName = function (collName) {
        var sing = pluralize.singular(collName);
        var cap = sing.split('').map(function (c, i) { return i === 0 ? c.toUpperCase() : c; }).join('');
        var intname = "I" + cap;
        return intname;
    };
    return Writer;
}());
exports.Writer = Writer;


/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("readline");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("pluralize");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("xml2js");

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var path_1 = __webpack_require__(1);
var readline_1 = __webpack_require__(5);
var schema_writer_1 = __webpack_require__(4);
var graphml_parser_1 = __webpack_require__(3);
var chalk = __webpack_require__(0);
var args = process.argv.filter(function (a, i) { return i > 1; });
var parser = new graphml_parser_1.GraphParser();
var writer = new schema_writer_1.Writer();
var path;
var out;
if (args.length > 0) {
    //load schema with arg1 as path and go to second step -- check if an out path was provided
    path = args[0];
    //if a out path was provided and is valid, write to that path. if not report error if any and ask for valid path.
    out = path_1.resolve('.');
    args[1] !== undefined ? out = path_1.resolve(args[1]) : out;
    var p = path_1.resolve(path);
    execute(p, out);
}
else {
    var line_1 = readline_1.createInterface({ input: process.stdin, output: process.stdout });
    // launch assistant
    //--ask where to load graph schema from
    line_1.question(chalk.yellow('Where should we look for a .graphml file?\n'), function (answer) {
        Promise.resolve(path_1.resolve(answer))
            .then(function (pin) {
            console.info(chalk.gray("We'll read the .graphml file from: " + pin));
            line_1.question(chalk.yellow('Where should we save the resulting interface files?\n'), function (answer) {
                Promise.resolve(path_1.resolve(answer))
                    .then(function (pout) {
                    console.info(chalk.gray("We'll save the resulting interface files to: " + pout + "\n"));
                    line_1.question(chalk.yellow('Does this look right to you? (yes/no)'), function (answer) {
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
                    .catch(function (err) {
                    console.log(chalk.red('Sorry, but that path is invalid. Try again.'));
                    process.exit(1);
                });
            });
        })
            .catch(function (err) {
            console.log(chalk.red('Sorry, but that path is invalid. Try again.'));
            process.exit(1);
        });
    });
}
function execute(pin, pout) {
    parser.parse(pin)
        .then(function (data) {
        writer.write(data, pout)
            .then(function () {
            console.log(chalk.cyan('Process completed successfully!'));
            process.exit(0);
        })
            .catch(function (err) {
            console.log(chalk.red(err));
            process.exit(1);
        });
    })
        .catch(function (err) {
        console.log(chalk.red(err));
    });
}


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map