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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = {"graphml":{"$":{"xmlns":"http://graphml.graphdrawing.org/xmlns","xmlns:java":"http://www.yworks.com/xml/yfiles-common/1.0/java","xmlns:sys":"http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0","xmlns:x":"http://www.yworks.com/xml/yfiles-common/markup/2.0","xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","xmlns:y":"http://www.yworks.com/xml/graphml","xmlns:yed":"http://www.yworks.com/xml/yed/3","xsi:schemaLocation":"http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd"},"key":[{"$":{"attr.name":"Description","attr.type":"string","for":"graph","id":"d0"}},{"$":{"for":"port","id":"d1","yfiles.type":"portgraphics"}},{"$":{"for":"port","id":"d2","yfiles.type":"portgeometry"}},{"$":{"for":"port","id":"d3","yfiles.type":"portuserdata"}},{"$":{"attr.name":"url","attr.type":"string","for":"node","id":"d4"}},{"$":{"attr.name":"description","attr.type":"string","for":"node","id":"d5"}},{"$":{"for":"node","id":"d6","yfiles.type":"nodegraphics"}},{"$":{"for":"graphml","id":"d7","yfiles.type":"resources"}},{"$":{"attr.name":"url","attr.type":"string","for":"edge","id":"d8"}},{"$":{"attr.name":"description","attr.type":"string","for":"edge","id":"d9"}},{"$":{"for":"edge","id":"d10","yfiles.type":"edgegraphics"}}],"graph":[{"$":{"edgedefault":"directed","id":"G"},"data":[{"$":{"key":"d0"}}],"node":[{"$":{"id":"n0"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"413.9482371592683","width":"422.3131029710987","x":"1494.408924704927","y":"2870.329423009978"}}],"y:Fill":[{"$":{"color":"#555AA5","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"submissions","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"103.03515625","x":"159.63897336054924","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    subTime?: Date;\r\n    returnTime?: Date;\r\n    coverLetter?: string;\r\n    type?: string;\r\n    status?: string;\r\n    notes?: ObjectID[];\r\n    _work?: ObjectID;\r\n    _agent?: ObjectID;\r\n    _editor?:ObjectID;\r\n    _publisher?: ObjectID;\r\n    _writer?:ObjectID;\r\n    _market?: ObjectID;\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"274.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#CCFFFF","verticalTextPosition":"top","visible":"true","width":"261.30859375","x":"80.50225461054924","y":"69.97411857963425"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n1"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"229.956549009049","width":"285.5449099943776","x":"4646.005719605985","y":"2962.325267085088"}}],"y:Fill":[{"$":{"color":"#2F719D","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"conversations","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"115.05859375","x":"85.24315812218902","y":"4.0"}},{"_":"{\r\n    _id: ObjectID;\r\n    _participants: {\r\n        profile: string;\r\n        id: ObjectID;\r\n    };\r\n    messages: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"148.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#CCFFFF","verticalTextPosition":"top","visible":"true","width":"251.412109375","x":"17.066400309689016","y":"40.97827450452451"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n2"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"440.6232309811485","width":"417.7183553030568","x":"2039.650742983392","y":"1348.7820489556025"}}],"y:Fill":[{"$":{"color":"#49FF00","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"messages","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"86.037109375","x":"165.8406229640284","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    _conversation?: ObjectID;\r\n    _from: {\r\n        profile: string;\r\n        id: ObjectID;\r\n    };\r\n    payload: {\r\n        text: string;\r\n        pictures?: ObjectID[]\r\n    }\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"220.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#000000","verticalTextPosition":"top","visible":"true","width":"290.998046875","x":"63.3601542140284","y":"110.31161549057424"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n3"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"517.0424043855182","width":"379.30869036253694","x":"2021.7222421203187","y":"3969.6219992797014"}}],"y:Fill":[{"$":{"color":"#FF5557","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"users","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"48.015625","x":"165.64653268126858","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    username: string;\r\n    email: string;\r\n    password: string;\r\n    name: {\r\n        first: string;\r\n        last: string;\r\n    };\r\n    website: {\r\n        name: string;\r\n        url: string;\r\n    };\r\n    blog: {\r\n        name: string;\r\n        url: string;\r\n    }\r\n    twitter: string;\r\n    facebook: string;\r\n    picture: {\r\n        current: ObjectID;\r\n        others: ObjectID[];\r\n    }\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"436.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#5B0000","verticalTextPosition":"top","visible":"true","width":"271.205078125","x":"54.05180611876858","y":"40.52120219275912"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n4"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"824.3952065349865","width":"372.2295495655118","x":"30.00030458232348","y":"7896.6604162198955"}}],"y:Fill":[{"$":{"color":"#828282","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"writers","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"56.998046875","x":"157.6157513452559","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID,\r\n    email?: string,\r\n    name: {\r\n        first: string,\r\n        middle?: string,\r\n        last: string\r\n    },\r\n    bio: string,\r\n    website?: {\r\n        name: string;\r\n        url: string;\r\n    };\r\n    blog: {\r\n        name: string;\r\n        url: string;\r\n    };\r\n    twitter: string;\r\n    facebook: string;\r\n    picture?: {\r\n        current: ObjectID;\r\n        others: ObjectID[];\r\n    };\r\n    _projects: {\r\n        role: string;\r\n        id: ObjectID;\r\n    }[];\r\n    _outlines?: ObjectID[];\r\n    _characters?: ObjectID[];\r\n    _locations?: ObjectID[];\r\n    _timelines?: ObjectID[];\r\n    _conversations?: ObjectID[];\r\n    _works?: ObjectID[];\r\n    _pictures?: {\r\n        current?: ObjectID;\r\n        others?: ObjectID[];\r\n    };\r\n    _submissions?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"706.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#000000","verticalTextPosition":"top","visible":"true","width":"320.6875","x":"25.771024782755887","y":"59.19760326749292"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n5"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"909.7174982136085","width":"618.2604484017936","x":"6799.205490084817","y":"3773.2844523656563"}}],"y:Fill":[{"$":{"color":"#00967A","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"editors","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"58.0263671875","x":"280.1170406071469","y":"4.0"}},{"_":"{\r\n    _id: ObjectID;\r\n    _uid: ObjectID;\r\n    name: {\r\n        first: string;\r\n        middle: string;\r\n        last: string;\r\n    };\r\n    bio: string;\r\n    independent: boolean;\r\n    _publisher?: ObjectID;\r\n    _picture?: {\r\n        current: ObjectID;\r\n        others: ObjectID[];\r\n    };\r\n    website?: {\r\n        name: string;\r\n        url: string;\r\n    }\r\n    blog?: {\r\n        name: string;\r\n        url: string;\r\n    }\r\n    twitter?: string;\r\n    facebook?: string;\r\n    email?: string;\r\n    genres: ObjectID[]\r\n    submissionWindow: {\r\n        allYear: boolean;\r\n        periods: {from: Date; to: Date; }[]\r\n    }\r\n    isOpenToSubs: boolean;\r\n    isOpenToSpontaneousSubs: boolean;\r\n    subsMustBeAgented: boolean;\r\n    preferredCommunicationMeans: string[];\r\n    acceptedCommunicationMeans: string[];\r\n    _organisations?: ObjectID[];\r\n    _markets: ObjectID[];\r\n    _calls: ObjectID[];\r\n    _conversations: ObjectID[];\r\n    _comments: ObjectID[];\r\n    _submissions: ObjectID[];\r\n    _queries: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"796.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#003300","verticalTextPosition":"top","visible":"true","width":"429.548828125","x":"94.35581013839692","y":"56.858749106804225"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n6"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"835.1724782927835","width":"619.6798826448448","x":"7994.440217407736","y":"6087.237855496655"}}],"y:Fill":[{"$":{"color":"#1400FF","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"agents","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"58.0439453125","x":"280.8179686661724","y":"4.0"}},{"_":"{\r\n_id?: ObjectID;\r\n    name: {\r\n        first: string;\r\n        middle: string;\r\n        last: string;\r\n    };\r\n    bio: string;\r\n    independent: boolean;\r\n    agency?: ObjectID;\r\n    picture?: {\r\n        current: ObjectID;\r\n        others: ObjectID[];\r\n    };\r\n    website?: {\r\n        name: string;\r\n        url: string;\r\n    }\r\n    blog?: {\r\n        name: string;\r\n        url: string;\r\n    }\r\n    twitter?: string;\r\n    facebook?: string;\r\n    email?: string;\r\n    genres: ObjectID[]\r\n    submissionWindow: {\r\n        allYear: boolean;\r\n        periods: {from: Date; to: Date; }[]\r\n    }\r\n    isOpenToSubs: boolean;\r\n    isOpenToSpontaneousSubs: boolean;\r\n    preferredCommunicationMeans: string[];\r\n    acceptedCommunicationMeans: string[];\r\n    subsIn: ObjectID[],\r\n    subsOut: ObjectID[],\r\n    queriesIn: ObjectID[],\r\n    queriesOut: ObjectID[]\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"706.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#00FFFF","verticalTextPosition":"top","visible":"true","width":"429.548828125","x":"95.06552725992242","y":"64.58623914639156"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n7"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"952.6187989345307","width":"684.6235789390646","x":"5107.729877197135","y":"8970.511834349247"}}],"y:Fill":[{"$":{"color":"#800000","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"publishers","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"86.0458984375","x":"299.2888402507824","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    _uid?: ObjectID;\r\n    email: string;\r\n    name: string;\r\n    bio: string;\r\n    website: {\r\n        url: string;\r\n        name: string;\r\n    };\r\n    blog: {\r\n        url: string;\r\n        name: string;\r\n    };\r\n    twitter: string;\r\n    facebook: string;\r\n    picture: {\r\n        current: ObjectID;\r\n        others: ObjectID[]\r\n    };\r\n    accepted: {\r\n        languages: string[];\r\n        genres: ObjectID[];\r\n        lengths: {name: string; length: number}[];\r\n        subMedia: string[];\r\n    };\r\n    isOpenToSubs: boolean;\r\n    isOpenToSpontaneousSubs: boolean;\r\n    subsMustBeAgented: boolean;\r\n    submissionWindow: {\r\n        allYear: boolean;\r\n        periods?: {from?: Date, to?: Date}[]\r\n    }\r\n    country: string;\r\n    print: boolean;\r\n    media: string[];\r\n    _projects: {\r\n        role: string;\r\n        id: ObjectID;\r\n    };\r\n    _markets: ObjectID[];\r\n    _calls: ObjectID[];\r\n    _editors: ObjectID[];\r\n    _comments: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"814.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FF99CC","verticalTextPosition":"top","visible":"true","width":"498.82421875","x":"92.89968009453241","y":"69.3093994672654"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n8"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"608.6952558180285","width":"369.044580441995","x":"10937.495170096463","y":"3923.7955735634464"}}],"y:Fill":[{"$":{"color":"#6D322D","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"reviewers","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"81.0185546875","x":"144.0130128772471","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    _uid: ObjectID;\r\n    email: string;\r\n    name: {\r\n        first: string;\r\n        last: string;\r\n    };\r\n    bio: string;\r\n    website: {\r\n        url: string;\r\n        name: string;\r\n    };\r\n    blog: {\r\n        url: string;\r\n        name: string;\r\n    };\r\n    twitter: string;\r\n    facebook: string;\r\n    picture: {\r\n        current: ObjectID;\r\n        others: ObjectID[]\r\n    };\r\n    preferredGenres: ObjectID[];\r\n    _reviews?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"472.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#DDC7A5","verticalTextPosition":"top","visible":"true","width":"320.6875","x":"24.178540220997093","y":"68.34762790901414"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n9"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"200.96859132701047","width":"292.09001748189667","x":"8697.57522935429","y":"1961.5953884641926"}}],"y:Fill":[{"$":{"color":"#008000","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"comments","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"87.021484375","x":"102.5342665534481","y":"4.0"}},{"_":"{\r\n    _id: ObjectID;\r\n    body: string;\r\n    _replies: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"94.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#CCFFCC","verticalTextPosition":"top","visible":"true","width":"251.412109375","x":"20.338954053448106","y":"53.484295663505236"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n10"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"229.95654900904879","width":"267.9202976989693","x":"5142.45929559496","y":"0.0"}}],"y:Fill":[{"$":{"color":"#3800FF","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"pictures","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"67.0263671875","x":"100.44696525573454","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    title: string;\r\n    type?: string;\r\n    url: string;\r\n    _notes?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"130.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#99CCFF","verticalTextPosition":"top","visible":"true","width":"241.515625","x":"13.20233634948454","y":"49.97827450452439"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n11"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"245.3488083818936","width":"302.05676997042724","x":"5036.550980094151","y":"448.31602219039064"}}],"y:Fill":[{"$":{"color":"#FF008E","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"notes","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"48.033203125","x":"127.01178342271396","y":"4.0"}},{"_":"{\r\n    _id: ObjectID;\r\n    title?: string;\r\n    body: string;\r\n    _pictures?: ObjectID[];\r\n    _tags?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"130.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FFCBE5","verticalTextPosition":"top","visible":"true","width":"271.205078125","x":"15.425845922713961","y":"57.6744041909468"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n12"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"481.40023918098564","width":"321.9730730555874","x":"5440.380130138873","y":"7265.26017703891"}}],"y:Fill":[{"$":{"color":"#073A5F","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"projects","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"67.0263671875","x":"127.47335293404376","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    name: string;\r\n    picture?: {\r\n        current: ObjectID;\r\n        others: ObjectID[];\r\n    }\r\n    _creators: {\r\n        profile: string;\r\n        id: ObjectID;\r\n    }[];\r\n    _contributors: {\r\n        profile: string;\r\n        id: ObjectID;\r\n    }[];\r\n    _notes: ObjectID[];\r\n    _works?: ObjectID[];\r\n    _calls?:ObjectID[];\r\n    _pictures?: ObjectID[];\r\n    _notes?: ObjectID[];\r\n    _stages?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"400.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#CCFFFF","verticalTextPosition":"top","visible":"true","width":"271.205078125","x":"25.38399746529376","y":"40.70011959049316"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n13"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"263.96284069008124","width":"295.4202976989691","x":"1046.4882638489282","y":"7373.978876284363"}}],"y:Fill":[{"$":{"color":"#808000","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"outlines","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"66.0419921875","x":"114.68915275573454","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    title?: string;\r\n    partBased: boolean;\r\n    parts?: IPart[];\r\n    chapters?: IChapter[];\r\n    _notes?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"148.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FFFF99","verticalTextPosition":"top","visible":"true","width":"261.30859375","x":"17.05585197448454","y":"57.98142034504053"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n14"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"441.17523719837254","width":"389.2573505650073","x":"582.2304517016233","y":"2856.7159229904264"}}],"y:Fill":[{"$":{"color":"#00A4DE","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"locations","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"75.0419921875","x":"157.10767918875365","y":"4.0"}},{"_":"{\r\n    _id: ObjectID;\r\n    name: string;\r\n    isReal: boolean;\r\n    isOnEearth: boolean;\r\n    coordinates?: {\r\n        longitude?: number;\r\n        latitude?: number;\r\n    };\r\n    description?: string;\r\n    notes?: ObjectID[];\r\n    picture: {\r\n        current: ObjectID;\r\n        others: ObjectID[];\r\n    }\r\n    _comments?: ObjectID[];\r\n    _notes?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"328.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#CCFFFF","verticalTextPosition":"top","visible":"true","width":"271.205078125","x":"59.02613622000365","y":"56.5876185991865"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n15"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"1091.9618215520875","width":"453.57466142080364","x":"2051.7225899245186","y":"2531.3226308135686"}}],"y:Fill":[{"$":{"color":"#AB9841","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"characters","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"88.0322265625","x":"182.77121742915187","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    name: {\r\n        first: string;\r\n        middle: string[];\r\n        last: string;\r\n    };\r\n    picture: {\r\n        current: ObjectID;\r\n        others: ObjectID[];\r\n    };\r\n    birth: {\r\n        date: Date;\r\n        place: string;\r\n        location?: ObjectID;\r\n        project?: ObjectID;\r\n    };\r\n    death: {\r\n        date: Date;\r\n        place: string;\r\n        location?: ObjectID;\r\n        project?: ObjectID;\r\n    };\r\n    category: string;\r\n    role: string;\r\n    species: {\r\n        human: boolean;\r\n        other?: string;\r\n        ethnicity?: string;\r\n    };\r\n    gender: {\r\n        binary: boolean;\r\n        female?: boolean;\r\n        other?: string;\r\n    };\r\n    traits: {\r\n        physical: string[];\r\n        psychological: string[];\r\n        assets: string[];\r\n        flaws: string[];\r\n        likes: string[];\r\n        dislikes: string[];\r\n        motivations: string[];\r\n        obstacles: string[];\r\n    };\r\n    _notes: ObjectID[];\r\n    _pictures?: ObjectID[];\r\n    _stages?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"886.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FFFF99","verticalTextPosition":"top","visible":"true","width":"320.6875","x":"66.44358071040187","y":"102.98091077604386"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n16"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"442.8623906988987","width":"349.6211903625367","x":"6359.583849263176","y":"5113.327970218625"}}],"y:Fill":[{"$":{"color":"#333399","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"queries","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"63.0361328125","x":"143.29252877501858","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    _from: {\r\n        profile: string;\r\n        id: ObjectID;\r\n    };\r\n    name: string;\r\n    tagline: string;\r\n    body: string;\r\n    versions: {\r\n        num: number;\r\n        id: ObjectID;\r\n    };\r\n    status: string;\r\n    _notes?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"292.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#CC99FF","verticalTextPosition":"top","visible":"true","width":"241.515625","x":"54.05278268126858","y":"75.4311953494489"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n17"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"392.5523262895442","width":"339.47307305558786","x":"10523.021399980142","y":"2881.0273784448405"}}],"y:Fill":[{"$":{"color":"#D64700","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"reviews","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"65.013671875","x":"137.22970059029467","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    title: string;\r\n    tagline: string;\r\n    rating: number;\r\n    summary: string;\r\n    body?: string;\r\n    images: ObjectID[];\r\n    isExclusive: boolean;\r\n    isPaidReview: boolean;\r\n    url?: string;\r\n    notes?: ObjectID[];\r\n    _reviewers: ObjectID[];\r\n    _notes?: ObjectID[];\r\n    _comments?: ObjectID[];\r\n    _tags?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"310.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FFFF99","verticalTextPosition":"top","visible":"true","width":"271.205078125","x":"34.13399746529467","y":"41.276163144772"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n18"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"340.7244534662672","width":"285.54490999437706","x":"8659.120402145669","y":"9933.130633283778"}}],"y:Fill":[{"$":{"color":"#FF004E","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"organisations","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"111.068359375","x":"87.2382753096881","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    email: string;\r\n    name: string;\r\n    type: string;\r\n    picture: {\r\n        current: ObjectID,\r\n        others: ObjectID[]\r\n    }\r\n    _creator: ObjectID;\r\n    _manager?: ObjectID;\r\n    _members: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"238.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FF99CC","verticalTextPosition":"top","visible":"true","width":"261.30859375","x":"12.118158122188106","y":"51.362226733133866"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n19"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"729.0075705102963","width":"356.54738965866784","x":"3689.5175750119356","y":"6140.320309387898"}}],"y:Fill":[{"$":{"color":"#FF660F","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"works","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"51.00390625","x":"152.7717417043341","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    title: string;\r\n    subtitle?: string;\r\n    fiction: boolean;\r\n    type: string;\r\n    genres: ObjectID[];\r\n    subgenres: ObjectID[];\r\n    description: string;\r\n    picture: {\r\n        current: ObjectID;\r\n        others: ObjectID[];\r\n    };\r\n    stages: ObjectID[];\r\n    deadlines?: {\r\n        current: IDeadline;\r\n        others: IDeadline[];\r\n    };\r\n    targets?: { \r\n        current: ITarget;\r\n        others: ITarget[];\r\n    };\r\n    _characters?: ObjectID[];\r\n    _sessions?: ObjectID[];\r\n    _genres?: ObjectID[];\r\n    _subgenres?:ObjectID[];\r\n    _locations?:ObjectID[];\r\n    _outline?: ObjectID[];\r\n    _timeline?: ObjectID[];\r\n    _chapters?: ObjectID[];\r\n    _pictures?: ObjectID[];\r\n    _comments?: ObjectID[];\r\n    _notes?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"616.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FFCC99","verticalTextPosition":"top","visible":"true","width":"290.998046875","x":"32.77467139183409","y":"56.503785255148614"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n20"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"239.97016844412587","width":"321.9730730555873","x":"1067.4352888690319","y":"958.8118805114767"}}],"y:Fill":[{"$":{"color":"#7FCA1F","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"genres","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"59.037109375","x":"131.46798184029376","y":"4.0"}},{"_":"{\r\n_id: ObjectID;\r\nname: string;\r\ntype: string;\r\n_subgenres?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"112.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#223922","verticalTextPosition":"top","visible":"true","width":"241.515625","x":"40.22872402779376","y":"63.98508422206294"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n21"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"229.9565490090489","width":"242.6180404982058","x":"1052.4350273699447","y":"456.012151876813"}}],"y:Fill":[{"$":{"color":"#404D8E","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"subgenres","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"88.05859375","x":"77.27972337410301","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    degree: number;\r\n    type: string;\r\n    name: string;\r\n    parent: ObjectID;\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"130.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#B2B2CC","verticalTextPosition":"top","visible":"true","width":"211.826171875","x":"15.395934311603014","y":"49.97827450452445"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n22"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"1130.63256553751","width":"640.6164377298944","x":"2610.297733516005","y":"4769.442882799319"}}],"y:Fill":[{"$":{"color":"#FF0046","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"sessions","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"74.03125","x":"283.2925938649473","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    _creator: {\r\n        profile: string;\r\n        id: ObjectID;\r\n    };\r\n    name: string;\r\n    started: Date;\r\n    ended: Date;\r\n    pauses: ISessionPause[];\r\n    strokes: number;\r\n    chars: {\r\n        withSpaces: number,\r\n        withoutSpaces: number\r\n    };\r\n    words: {\r\n        count: number,\r\n        longest: {\r\n            count: number;\r\n            string: string\r\n        },\r\n        shortest: {\r\n            count: number;\r\n            string: string\r\n        }\r\n    };\r\n    sentences: {\r\n        count: number,\r\n        longest: {\r\n            count: number,\r\n            string: string\r\n        },\r\n        shortest: {\r\n            count: number,\r\n            string: string\r\n        }\r\n    };\r\n    paragraphs: {\r\n        count: number,\r\n        longest: {\r\n            count: number,\r\n            string: string\r\n        },\r\n        shortest: {\r\n            count: number,\r\n            string: string\r\n        }\r\n    };\r\n    stats: ISessionStatUnit[];\r\n    wordmap: ISessionWordMapUnit[];\r\n    keymap: ISessionKeyMapUnit[];\r\n    _notes?: ObjectID[];\r\n    _works?: ObjectID[];\r\n    _chapters?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"994.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FFFFFF","verticalTextPosition":"top","visible":"true","width":"350.376953125","x":"145.11974230244732","y":"68.31628276875472"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n23"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"938.3888373622356","width":"859.5115051136781","x":"9064.665676014589","y":"4865.5647468869565"}}],"y:Fill":[{"$":{"color":"#53590A","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"markets","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"68.0107421875","x":"395.75038146308907","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    email: string;\r\n    name: string;\r\n    name2: string;\r\n    independent: boolean;\r\n    publisher?: ObjectID;\r\n    picture: {\r\n        current: ObjectID;\r\n        others: ObjectID[];\r\n    };\r\n    website: {\r\n        name: string;\r\n        url: string;\r\n    };\r\n    blog: {\r\n        name: string;\r\n        url: string;\r\n    };\r\n    type: string;\r\n    accepted: {\r\n        languages: string[];\r\n        genres: ObjectID[];\r\n        lengths: {name: string; length: number; }[];\r\n        subMedia: string[];\r\n    };\r\n    submissionWindow: {\r\n        allYear: boolean;\r\n        periods: {from: Date; to: Date}[];\r\n    };\r\n    country: string;\r\n    print: boolean;\r\n    format: string[];\r\n    _editors: ObjectID[];\r\n    _publishers?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"652.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FFFF99","verticalTextPosition":"top","visible":"true","width":"518.6171875","x":"170.44715880683907","y":"143.1944186811179"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n24"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"245.34880838189338","width":"267.9202976989691","x":"1091.4882638489282","y":"1939.4052799367512"}}],"y:Fill":[{"$":{"color":"#0046FF","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"stages","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"57.033203125","x":"105.44354728698454","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    type: string;\r\n    order: number;\r\n    name: string;\r\n    started: Date;\r\n    ended: Date;\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"148.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#CCFFFF","verticalTextPosition":"top","visible":"true","width":"192.033203125","x":"37.94354728698454","y":"48.67440419094669"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n25"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"294.36453587621327","width":"327.2596704545613","x":"7562.18008540764","y":"8161.675751549282"}}],"y:Fill":[{"$":{"color":"#000066","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"calls","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"40.0087890625","x":"143.62544069603064","y":"4.0"}},{"_":"{\r\n_id: ObjectID;\r\ntitle: string;\r\nsubtitle?: string;\r\nfrom?: Date;\r\nuntil?: Date;\r\n_subsIn?: ObjectID[];\r\n_comments?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"166.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#CCFFFF","verticalTextPosition":"top","visible":"true","width":"231.619140625","x":"47.82026491478064","y":"64.18226793810663"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n26"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"217.75000000000023","width":"295.4512879340848","x":"3349.066022699624","y":"5225.8841655680735"}}],"y:Fill":[{"$":{"color":"#990000","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"parts","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"44.0166015625","x":"125.71734318579229","y":"4.0"}},{"_":"{\r\n_id: ObjectID;\r\norder: number;\r\n_chapters: ObjectID[];\r\n_notes: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"112.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FF99CC","verticalTextPosition":"top","visible":"true","width":"221.72265625","x":"36.86431584204229","y":"52.875"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n27"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"238.74647340206184","width":"303.60312187966633","x":"3325.91431207604","y":"4108.769964771429"}}],"y:Fill":[{"$":{"color":"#006666","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"chapters","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"73.0380859375","x":"115.28251797108305","y":"4.0"}},{"_":"{\r\n_id: ObjectID;\r\norder: number;\r\n_parts?: ObjectID[];\r\n_scenes?: ObjectID[];\r\n_notes?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"130.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#CCFFFF","verticalTextPosition":"top","visible":"true","width":"211.826171875","x":"45.88847500233305","y":"54.37323670103069"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n28"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"376.33301198453614","width":"335.1292820739691","x":"3749.5175018201585","y":"2889.1370355973445"}}],"y:Fill":[{"$":{"color":"#660066","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"scenes","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"61.0322265625","x":"137.04852775573454","y":"4.0"}},{"_":"{\r\n_id: ObjectID;\r\ntitle: string;\r\norder: number;\r\n_chapter?: ObjectID;\r\n_paragraphs: ObjectID[];\r\n_notes: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"148.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#CC99FF","verticalTextPosition":"top","visible":"true","width":"241.515625","x":"46.80682853698454","y":"114.16650599226796"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n29"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"245.34880838189383","width":"372.22954956551143","x":"3764.5177648997837","y":"1939.405279936751"}}],"y:Fill":[{"$":{"color":"#DA6A47","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"paragraphs","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"95.0634765625","x":"138.58303650150583","y":"4.0"}},{"_":"{\r\n_id: ObjectID;\r\norder: number;\r\n_sentences: ObjectID[];\r\n_notes?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"112.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FFCC99","verticalTextPosition":"top","visible":"true","width":"231.619140625","x":"70.30520447025583","y":"66.67440419094692"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n30"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"229.95654900904879","width":"252.49550725886593","x":"6269.583992402313","y":"1454.1153899416522"}}],"y:Fill":[{"$":{"color":"#761D48","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"sentences","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"86.0546875","x":"83.22040987943274","y":"4.0"}},{"_":"{\r\n_id: ObjectID;\r\norder: number;\r\n_words?: ObjectID[];\r\n_notes?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"112.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FF99CC","verticalTextPosition":"top","visible":"true","width":"201.9296875","x":"25.282909879432736","y":"58.97827450452451"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n31"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"203.69572582758838","width":"372.22954956551143","x":"5852.353876010895","y":"976.9491018197455"}}],"y:Fill":[{"$":{"color":"#805A5C","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"words","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"52.0146484375","x":"160.10745056400538","y":"4.0"}},{"_":"{\r\n_id: ObjectID;\r\norder: number;\r\nnotes?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"94.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FFCC99","verticalTextPosition":"top","visible":"true","width":"192.033203125","x":"90.09817322025538","y":"54.84786291379419"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n32"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"441.17523719837254","width":"389.2573505650072","x":"4226.747912019084","y":"2856.7159229904264"}}],"y:Fill":[{"$":{"color":"#3D3A19","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"events","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"57.033203125","x":"166.11207372000354","y":"4.0"}},{"_":"{\r\n    _id: ObjectID;\r\n    label: string;\r\n    start: Date;\r\n    end: Date;\r\n    color: string;\r\n    _characters?: ObjectID[];\r\n    _locations?: ObjectID[];\r\n    _notes?: ObjectID[];\r\n    _picture: {\r\n        icon: ObjectID;\r\n        others: ObjectID[];\r\n    };\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"256.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#CCFFCC","verticalTextPosition":"top","visible":"true","width":"290.998046875","x":"49.129651845003536","y":"92.5876185991865"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n33"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"217.75000000000034","width":"302.6702976989691","x":"507.2303273409916","y":"7397.085296629402"}}],"y:Fill":[{"$":{"color":"#E000FF","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"timelines","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"75.0244140625","x":"113.82294181823454","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID,\r\n    name: string;\r\n_events: ObjectID[];\r\n_notes?: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"112.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#470047","verticalTextPosition":"top","visible":"true","width":"201.9296875","x":"50.37030509948454","y":"52.875"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n34"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"309.1884756194917","width":"313.84361352288556","x":"10104.177399587765","y":"2922.709303779867"}}],"y:Fill":[{"$":{"color":"#6D955F","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"products","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"73.0380859375","x":"120.40276379269199","y":"4.0"}},{"_":"{\r\n    _id: ObjectID;\r\n    name: string;\r\n    price: number;\r\n    _picture: {\r\n        current: ObjectID;\r\n        others: ObjectID[];\r\n    };\r\n    _categories: ObjectID[];\r\n    _comments: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"202.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#003300","verticalTextPosition":"top","visible":"true","width":"281.1015625","x":"16.371025511441985","y":"53.594237809745664"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n35"},"data":[{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"198.1196179407279","width":"268.8680404982058","x":"11366.540186100105","y":"979.7371557631757"}}],"y:Fill":[{"$":{"color":"#B7AC00","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"categories","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"87.0478515625","x":"90.9100944678521","y":"4.0"}},{"_":"{\r\n    _id: ObjectID;\r\n    name: string;\r\n    _picture: ObjectID;\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"94.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#FFFFDB","verticalTextPosition":"top","visible":"true","width":"231.619140625","x":"18.624449936602105","y":"52.059808970363974"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n36"},"data":[{"$":{"key":"d5"}},{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"423.0321031387816","width":"321.9730730555875","x":"7537.466638075381","y":"2865.7874900202223"}}],"y:Fill":[{"$":{"color":"#FF99CC","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#00FFFF","type":"line","width":"7.0"}}],"y:NodeLabel":[{"_":"posts","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"47.0224609375","x":"137.47530605904376","y":"4.0"}},{"_":"{\r\n    _id?: ObjectID;\r\n    title: string;\r\n    body: string;\r\n    pictures: ObjectID[];\r\n    links?: {\r\n        label: string;\r\n        url: string;\r\n    }[];\r\n    _tags?: ObjectID[];\r\n    _mentions?: {\r\n        profile: string;\r\n        id: ObjectID;\r\n    }[];\r\n    _comments: ObjectID[];\r\n    _stages: ObjectID[];\r\n    _notes: ObjectID[];\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"328.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#800000","verticalTextPosition":"top","visible":"true","width":"261.30859375","x":"30.33223965279376","y":"47.516051569390584"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]},{"$":{"id":"n37"},"data":[{"$":{"key":"d5"}},{"$":{"key":"d6"},"y:GenericNode":[{"$":{"configuration":"com.yworks.entityRelationship.big_entity"},"y:Geometry":[{"$":{"height":"161.86961794072795","width":"242.61804049820603","x":"5894.659630544547","y":"34.04346553416042"}}],"y:Fill":[{"$":{"color":"#8AF4D0","transparent":"false"}}],"y:BorderStyle":[{"$":{"color":"#000000","type":"line","width":"1.0"}}],"y:NodeLabel":[{"_":"tags","$":{"alignment":"center","autoSizePolicy":"content","backgroundColor":"#B7C9E3","configuration":"com.yworks.entityRelationship.label.name","fontFamily":"Dialog","fontSize":"18","fontStyle":"plain","hasLineColor":"false","height":"26.0517578125","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"t","textColor":"#000000","verticalTextPosition":"bottom","visible":"true","width":"38.0224609375","x":"102.29778978035301","y":"4.0"}},{"_":"{\r\n    _id: ObjectID;\r\n    body: string;\r\n}","$":{"alignment":"left","autoSizePolicy":"content","configuration":"com.yworks.entityRelationship.label.attributes","fontFamily":"Consolas","fontSize":"18","fontStyle":"plain","hasBackgroundColor":"false","hasLineColor":"false","height":"76.0","horizontalTextPosition":"center","iconTextGap":"4","modelName":"internal","modelPosition":"c","textColor":"#005151","verticalTextPosition":"top","visible":"true","width":"182.13671875","x":"30.240660874103014","y":"42.934808970363974"}}],"y:StyleProperties":[{"y:Property":[{"$":{"class":"java.lang.Boolean","name":"y.view.ShadowNodePainter.SHADOW_PAINTING","value":"true"}}]}]}]}]}],"edge":[{"$":{"id":"e0","source":"n3","target":"n1"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"189.65441269841267","sy":"-2.014724605032825E-4","tx":"-5.000174603173946","ty":"114.9784584103877"},"y:Point":[{"$":{"x":"2920.606","y":"4228.143"}},{"$":{"x":"2920.606","y":"3472.0"}},{"$":{"x":"4783.778","y":"3472.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF5557","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e1","source":"n4","target":"n1"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"186.11492063492065","sy":"-1.9487388271954842E-5","tx":"-1.746031739457976E-4","ty":"-114.97854158961263"},"y:Point":[{"$":{"x":"1009.0","y":"8308.858"}},{"$":{"x":"1009.0","y":"2443.0"}},{"$":{"x":"4788.778","y":"2443.0"}}]}],"y:LineStyle":[{"$":{"color":"#828282","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e2","source":"n5","target":"n1"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"2.8571428629220463E-4","sy":"-454.8592014724604","tx":"-5.000174603173946","ty":"-114.97854158961263"},"y:Point":[{"$":{"x":"7108.336","y":"2769.0"}},{"$":{"x":"4783.778","y":"2769.0"}}]}],"y:LineStyle":[{"$":{"color":"#00967A","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e3","source":"n6","target":"n1"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-1.5873015763645526E-4","sy":"-417.58609464304664","tx":"4.999825396826054","ty":"-114.97854158961263"},"y:Point":[{"$":{"x":"8304.28","y":"2685.0"}},{"$":{"x":"4793.778","y":"2685.0"}}]}],"y:LineStyle":[{"$":{"color":"#1400FF","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e4","source":"n7","target":"n1"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"342.3113333333331","sy":"4.999766183487736","tx":"-1.746031739457976E-4","ty":"114.9784584103877"},"y:Point":[{"$":{"x":"7942.0","y":"9451.821"}},{"$":{"x":"7942.0","y":"3305.391"}},{"$":{"x":"4788.778","y":"3305.391"}}]}],"y:LineStyle":[{"$":{"color":"#800000","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e5","source":"n8","target":"n1"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.6031746023800224E-4","sy":"-304.3472014724607","tx":"9.999825396826054","ty":"-114.97854158961263"},"y:Point":[{"$":{"x":"11122.017","y":"2815.0"}},{"$":{"x":"4798.778","y":"2815.0"}}]}],"y:LineStyle":[{"$":{"color":"#6D322D","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e6","source":"n1","target":"n2"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-10.000174603173946","sy":"-114.9782745045245","tx":"5.0","ty":"-220.31161549057424"},"y:Point":[{"$":{"x":"4778.778","y":"545.99"}},{"$":{"x":"2253.5099206349205","y":"545.99"}}]}],"y:LineStyle":[{"$":{"color":"#2F719D","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e7","source":"n3","target":"n9"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"189.65441269841267","sy":"-2.014724605032825E-4","tx":"146.0447619047627","ty":"5.000315872302053"},"y:Point":[{"$":{"x":"2920.606","y":"4228.143"}},{"$":{"x":"2920.606","y":"3472.0"}},{"$":{"x":"9067.166","y":"3472.0"}},{"$":{"x":"9067.166","y":"2067.08"}}]}],"y:LineStyle":[{"$":{"color":"#FF5557","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e8","source":"n4","target":"n9"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"186.11492063492065","sy":"-1.9487388271954842E-5","tx":"-2.380952373641776E-4","ty":"100.48431587230198"},"y:Point":[{"$":{"x":"1009.0","y":"8308.858"}},{"$":{"x":"1009.0","y":"2443.0"}},{"$":{"x":"8843.62","y":"2443.0"}}]}],"y:LineStyle":[{"$":{"color":"#828282","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e9","source":"n5","target":"n9"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"2.8571428629220463E-4","sy":"-454.8592014724604","tx":"146.0447619047627","ty":"3.158723020533216E-4"},"y:Point":[{"$":{"x":"7108.336","y":"2769.0"}},{"$":{"x":"9007.165","y":"2769.0"}},{"$":{"x":"9007.165","y":"2062.08"}}]}],"y:LineStyle":[{"$":{"color":"#00967A","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e10","source":"n6","target":"n9"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-1.5873015763645526E-4","sy":"-417.58609464304664","tx":"4.999761904762636","ty":"100.48431587230198"},"y:Point":[{"$":{"x":"8304.28","y":"2685.0"}},{"$":{"x":"8848.62","y":"2685.0"}}]}],"y:LineStyle":[{"$":{"color":"#1400FF","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e11","source":"n7","target":"n9"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"342.3113333333331","sy":"4.999766183487736","tx":"-146.04523809523744","ty":"-4.999684127697947"},"y:Point":[{"$":{"x":"7942.0","y":"9451.821"}},{"$":{"x":"7942.0","y":"2057.08"}}]}],"y:LineStyle":[{"$":{"color":"#800000","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e12","source":"n8","target":"n9"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.6031746023800224E-4","sy":"-304.3472014724607","tx":"146.0447619047627","ty":"-4.999684127697947"},"y:Point":[{"$":{"x":"11122.017","y":"2815.0"}},{"$":{"x":"9499.421","y":"2815.0"}},{"$":{"x":"9499.421","y":"2057.08"}}]}],"y:LineStyle":[{"$":{"color":"#6D322D","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e13","source":"n2","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"0.0","sy":"-220.31161549057424","tx":"-133.96014884948454","ty":"4.999725495475602"},"y:Point":[{"$":{"x":"2248.5099206349205","y":"119.978"}}]}],"y:LineStyle":[{"$":{"color":"#49FF00","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e14","source":"n11","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"14.99963492063489","sy":"-122.67442638133747","tx":"4.999555555555162","ty":"114.9787254954756"},"y:Point":[{"$":{"x":"5202.579","y":"286.0"}},{"$":{"x":"5281.419","y":"286.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF008E","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e15","source":"n4","target":"n33"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"186.11492063492065","sy":"-1.9487388271954842E-5","tx":"151.3355238095238","ty":"-2.9662940232810797E-4"},"y:Point":[{"$":{"x":"1009.0","y":"8308.858"}},{"$":{"x":"1009.0","y":"7505.96"}}]}],"y:LineStyle":[{"$":{"color":"#828282","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e16","source":"n4","target":"n15"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"186.11492063492065","sy":"-1.9487388271954842E-5","tx":"-4.999920634920272","ty":"-545.9805415896126"},"y:Point":[{"$":{"x":"1009.0","y":"8308.858"}},{"$":{"x":"1009.0","y":"2443.0"}},{"$":{"x":"2273.51","y":"2443.0"}}]}],"y:LineStyle":[{"$":{"color":"#828282","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e17","source":"n4","target":"n13"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"186.11492063492065","sy":"-1.9487388271954842E-5","tx":"-147.7104126984127","ty":"-2.966294032376027E-4"},"y:Point":[{"$":{"x":"1009.0","y":"8308.858"}},{"$":{"x":"1009.0","y":"7505.96"}}]}],"y:LineStyle":[{"$":{"color":"#828282","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e18","source":"n4","target":"n12"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"186.11492063492065","sy":"-1.9487388271954842E-5","tx":"-160.98666666666668","ty":"-2.966294032376027E-4"},"y:Point":[{"$":{"x":"1009.0","y":"8308.858"}},{"$":{"x":"1009.0","y":"2443.0"}},{"$":{"x":"1442.0","y":"2443.0"}},{"$":{"x":"1442.0","y":"7505.96"}}]}],"y:LineStyle":[{"$":{"color":"#828282","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e19","source":"n4","target":"n14"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"186.11492063492065","sy":"-1.9487388271954842E-5","tx":"194.62887301587307","ty":"4.584103871820844E-4"},"y:Point":[{"$":{"x":"1009.0","y":"8308.858"}},{"$":{"x":"1009.0","y":"3077.304"}}]}],"y:LineStyle":[{"$":{"color":"#828282","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e20","source":"n8","target":"n17"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.6031746023800224E-4","sy":"-304.3472014724607","tx":"6.349206341837998E-5","ty":"-196.2765415896124"},"y:Point":[{"$":{"x":"11122.017","y":"2815.0"}},{"$":{"x":"10692.758","y":"2815.0"}}]}],"y:LineStyle":[{"$":{"color":"#6D322D","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e21","source":"n4","target":"n0"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"186.11492063492065","sy":"-1.9487388271954842E-5","tx":"-211.15647619047604","ty":"4.5841038763683173E-4"},"y:Point":[{"$":{"x":"1009.0","y":"8308.858"}},{"$":{"x":"1009.0","y":"2443.0"}},{"$":{"x":"1442.0","y":"2443.0"}},{"$":{"x":"1442.0","y":"3077.304"}}]}],"y:LineStyle":[{"$":{"color":"#828282","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e22","source":"n4","target":"n16"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"186.11492063492065","sy":"-1.9487388271954842E-5","tx":"4.999555555556071","ty":"-221.43116556807308"},"y:Point":[{"$":{"x":"1009.0","y":"8308.858"}},{"$":{"x":"1009.0","y":"2443.0"}},{"$":{"x":"6539.394","y":"2443.0"}}]}],"y:LineStyle":[{"$":{"color":"#828282","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e23","source":"n6","target":"n0"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-1.5873015763645526E-4","sy":"-417.58609464304664","tx":"-4.7619047609259724E-4","ty":"206.97445841038734"},"y:Point":[{"$":{"x":"8304.28","y":"2685.0"}},{"$":{"x":"2925.606","y":"2685.0"}},{"$":{"x":"2925.606","y":"3775.784"}},{"$":{"x":"1705.565","y":"3775.784"}}]}],"y:LineStyle":[{"$":{"color":"#1400FF","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e24","source":"n6","target":"n16"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-1.5873015763645526E-4","sy":"-417.58609464304664","tx":"-5.000444444443929","ty":"-221.43116556807308"},"y:Point":[{"$":{"x":"8304.28","y":"2685.0"}},{"$":{"x":"6529.394","y":"2685.0"}}]}],"y:LineStyle":[{"$":{"color":"#1400FF","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e25","source":"n5","target":"n0"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"2.8571428629220463E-4","sy":"-454.8592014724604","tx":"4.999523809523907","ty":"-206.97454158961227"},"y:Point":[{"$":{"x":"7108.336","y":"2769.0"}},{"$":{"x":"2920.606","y":"2769.0"}},{"$":{"x":"2920.606","y":"2518.823"}},{"$":{"x":"1710.565","y":"2518.823"}}]}],"y:LineStyle":[{"$":{"color":"#00967A","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e26","source":"n17","target":"n9"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.999936507936582","sy":"-196.2765415896124","tx":"4.999761904762636","ty":"-100.48468412769785"},"y:Point":[{"$":{"x":"10687.758","y":"336.0"}},{"$":{"x":"8848.62","y":"336.0"}}]}],"y:LineStyle":[{"$":{"color":"#D64700","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_one_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e27","source":"n18","target":"n6"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-142.77285714285608","sy":"1.3998308895679656E-4","tx":"-309.8401587301587","ty":"-9.464304730499862E-5"},"y:Point":[{"$":{"x":"7478.0","y":"10103.493"}},{"$":{"x":"7478.0","y":"6504.824"}}]}],"y:LineStyle":[{"$":{"color":"#FF004E","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e28","source":"n18","target":"n4"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-142.77285714285608","sy":"1.3998308895679656E-4","tx":"-7.936507935824011E-5","ty":"-412.1980194873886"},"y:Point":[{"$":{"x":"7478.0","y":"10103.493"}},{"$":{"x":"7478.0","y":"4727.0"}},{"$":{"x":"216.115","y":"4727.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF004E","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e29","source":"n18","target":"n7"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-142.77285714285608","sy":"1.3998308895679656E-4","tx":"342.3113333333331","ty":"-2.3381651226372924E-4"},"y:Point":[{"$":{"x":"7478.0","y":"10103.493"}},{"$":{"x":"7478.0","y":"9446.821"}}]}],"y:LineStyle":[{"$":{"color":"#FF004E","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e30","source":"n18","target":"n5"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-142.77285714285608","sy":"1.3998308895679656E-4","tx":"2.8571428629220463E-4","ty":"454.8587985275399"},"y:Point":[{"$":{"x":"7478.0","y":"10103.493"}},{"$":{"x":"7478.0","y":"4727.0"}},{"$":{"x":"7108.336","y":"4727.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF004E","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e31","source":"n18","target":"n8"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-142.77285714285608","sy":"1.3998308895679656E-4","tx":"-4.6031746023800224E-4","ty":"304.34779852753945"},"y:Point":[{"$":{"x":"7478.0","y":"10103.493"}},{"$":{"x":"7478.0","y":"4727.0"}},{"$":{"x":"11122.017","y":"4727.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF004E","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e32","source":"n19","target":"n9"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"-2.380952373641776E-4","ty":"-100.48468412769785"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"5253.5","y":"2359.0"}},{"$":{"x":"5253.5","y":"1865.0"}},{"$":{"x":"8843.62","y":"1865.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e33","source":"n19","target":"n22"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"4.761904801853234E-5","ty":"-565.3161655680733"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"2930.606","y":"2359.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e34","source":"n19","target":"n20"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"1.7460317440054496E-4","ty":"119.98503526646027"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"5253.5","y":"2359.0"}},{"$":{"x":"5253.5","y":"1865.0"}},{"$":{"x":"1228.422","y":"1865.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e35","source":"n20","target":"n21"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"124.57817460317438","sy":"-119.98496473353964","tx":"121.3089523809524","ty":"-4.263813374336678E-4"},"y:Point":[{"$":{"x":"1353.0","y":"570.99"}}]}],"y:LineStyle":[{"$":{"color":"#7FCA1F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e36","source":"n19","target":"n21"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"-118.80904761904776","ty":"114.97857361866261"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"5253.5","y":"2359.0"}},{"$":{"x":"5253.5","y":"1865.0"}},{"$":{"x":"1054.935","y":"1865.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e37","source":"n12","target":"n19"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-160.98666666666668","sy":"4.999703370596762","tx":"178.27373015873036","ty":"-9.464304730499862E-5"},"y:Point":[{"$":{"x":"5389.0","y":"7510.96"}},{"$":{"x":"5389.0","y":"6504.824"}}]}],"y:LineStyle":[{"$":{"color":"#073A5F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e38","source":"n13","target":"n19"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"147.71058730158734","sy":"4.999703370596762","tx":"-178.27326984126967","ty":"-9.464304730499862E-5"},"y:Point":[{"$":{"x":"3668.0","y":"7510.96"}},{"$":{"x":"3668.0","y":"6504.824"}}]}],"y:LineStyle":[{"$":{"color":"#808000","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_one","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e39","source":"n19","target":"n15"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"7.936507972772233E-5","ty":"-545.9805415896126"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"2278.51","y":"2359.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e40","source":"n33","target":"n19"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.7619047609259724E-4","sy":"108.87470337059767","tx":"178.27373015873036","ty":"4.999905356952695"},"y:Point":[{"$":{"x":"658.565","y":"8973.012"}},{"$":{"x":"4632.0","y":"8973.012"}},{"$":{"x":"4632.0","y":"6509.824"}}]}],"y:LineStyle":[{"$":{"color":"#E000FF","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_one","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e41","source":"n19","target":"n14"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"-1.269841269504468E-4","ty":"-220.587541589613"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"776.859","y":"2359.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e42","source":"n19","target":"n16"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"-4.444444439286599E-4","ty":"-221.43116556807308"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"6534.394","y":"2359.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e43","source":"n19","target":"n0"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"-4.7619047609259724E-4","ty":"-206.97454158961227"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"1705.565","y":"2359.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e44","source":"n12","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-160.98666666666668","sy":"4.999703370596762","tx":"112.58055555555529","ty":"114.9787254954756"},"y:Point":[{"$":{"x":"5389.0","y":"7510.96"}}]}],"y:LineStyle":[{"$":{"color":"#073A5F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e45","source":"n19","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"74.68855555555547","ty":"114.9787254954756"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"5253.5","y":"2359.0"}},{"$":{"x":"5253.5","y":"1865.0"}},{"$":{"x":"5351.108","y":"1865.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e46","source":"n4","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"186.11492063492065","sy":"-1.9487388271954842E-5","tx":"-133.96044444444487","ty":"-2.745045243983668E-4"},"y:Point":[{"$":{"x":"1009.0","y":"8308.858"}},{"$":{"x":"1009.0","y":"2443.0"}},{"$":{"x":"1442.0","y":"2443.0"}},{"$":{"x":"1442.0","y":"114.978"}}]}],"y:LineStyle":[{"$":{"color":"#828282","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e47","source":"n14","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-5.0001269841269504","sy":"-220.587541589613","tx":"-88.84044444444498","ty":"114.9787254954756"},"y:Point":[{"$":{"x":"771.859","y":"386.0"}},{"$":{"x":"5187.579","y":"386.0"}}]}],"y:LineStyle":[{"$":{"color":"#00A4DE","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e48","source":"n15","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"191.35907936507965","sy":"-545.9805415896126","tx":"117.58055555555529","ty":"114.9787254954756"},"y:Point":[{"$":{"x":"2469.869","y":"827.0"}},{"$":{"x":"5394.0","y":"827.0"}}]}],"y:LineStyle":[{"$":{"color":"#AB9841","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e49","source":"n20","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"124.57817460317438","sy":"-119.98496473353964","tx":"-133.96044444444487","ty":"-5.000274504524398"},"y:Point":[{"$":{"x":"1353.0","y":"109.978"}}]}],"y:LineStyle":[{"$":{"color":"#7FCA1F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e50","source":"n21","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"0.0","sy":"-114.97827450452445","tx":"-133.96014884948454","ty":"-10.000274504524398"},"y:Point":[{"$":{"x":"1173.7440476190477","y":"104.978"}}]}],"y:LineStyle":[{"$":{"color":"#404D8E","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e51","source":"n7","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"342.3113333333331","sy":"4.999766183487736","tx":"133.9605555555554","ty":"-108.43527450452439"},"y:Point":[{"$":{"x":"7942.0","y":"9451.821"}},{"$":{"x":"7942.0","y":"6.543"}}]}],"y:LineStyle":[{"$":{"color":"#800000","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e52","source":"n3","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"189.65441269841267","sy":"-2.014724605032825E-4","tx":"4.999555555555162","ty":"-114.97827450452439"},"y:Point":[{"$":{"x":"2920.606","y":"4228.143"}},{"$":{"x":"2920.606","y":"3472.0"}},{"$":{"x":"11647.908","y":"3472.0"}},{"$":{"x":"11647.908","y":"-17.5"}},{"$":{"x":"5281.419","y":"-17.5"}}]}],"y:LineStyle":[{"$":{"color":"#FF5557","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e53","source":"n17","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.999936507936582","sy":"-196.2765415896124","tx":"-4.444444448381546E-4","ty":"114.9787254954756"},"y:Point":[{"$":{"x":"10687.758","y":"336.0"}},{"$":{"x":"5276.419","y":"336.0"}}]}],"y:LineStyle":[{"$":{"color":"#D64700","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e54","source":"n5","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"2.8571428629220463E-4","sy":"-454.8592014724604","tx":"133.9605555555554","ty":"-113.43527450452439"},"y:Point":[{"$":{"x":"7108.336","y":"2769.0"}},{"$":{"x":"9007.165","y":"2769.0"}},{"$":{"x":"9007.165","y":"1.5430000000000001"}}]}],"y:LineStyle":[{"$":{"color":"#00967A","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e55","source":"n6","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-1.5873015763645526E-4","sy":"-417.58609464304664","tx":"133.9605555555554","ty":"-98.43527450452439"},"y:Point":[{"$":{"x":"8304.28","y":"2685.0"}},{"$":{"x":"9002.165","y":"2685.0"}},{"$":{"x":"9002.165","y":"16.543"}}]}],"y:LineStyle":[{"$":{"color":"#1400FF","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e56","source":"n8","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.6031746023800224E-4","sy":"-304.3472014724607","tx":"-4.444444448381546E-4","ty":"-114.97827450452439"},"y:Point":[{"$":{"x":"11122.017","y":"2815.0"}},{"$":{"x":"9499.421","y":"2815.0"}},{"$":{"x":"9499.421","y":"-12.5"}},{"$":{"x":"5276.419","y":"-12.5"}}]}],"y:LineStyle":[{"$":{"color":"#6D322D","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e57","source":"n18","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-142.77285714285608","sy":"1.3998308895679656E-4","tx":"133.9605555555554","ty":"-93.43527450452439"},"y:Point":[{"$":{"x":"7478.0","y":"10103.493"}},{"$":{"x":"7478.0","y":"21.543"}}]}],"y:LineStyle":[{"$":{"color":"#FF004E","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e58","source":"n19","target":"n23"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"-4.2857142761931755E-4","ty":"-469.1941655680748"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"9494.421","y":"2359.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e59","source":"n23","target":"n5"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-429.75542857142864","sy":"390.2408344319256","tx":"309.1302857142864","ty":"-2.014724605032825E-4"},"y:Point":[{"$":{"x":"7711.0","y":"5725.0"}},{"$":{"x":"7711.0","y":"4228.143"}}]}],"y:LineStyle":[{"$":{"color":"#53590A","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e60","source":"n7","target":"n23"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"342.3113333333331","sy":"4.999766183487736","tx":"-429.75542857142864","ty":"-1.655680744079291E-4"},"y:Point":[{"$":{"x":"7942.0","y":"9451.821"}},{"$":{"x":"7942.0","y":"5334.759"}}]}],"y:LineStyle":[{"$":{"color":"#800000","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_one","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e61","source":"n18","target":"n23"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-142.77285714285608","sy":"1.3998308895679656E-4","tx":"4.999571428572381","ty":"-469.1941655680748"},"y:Point":[{"$":{"x":"7478.0","y":"10103.493"}},{"$":{"x":"7478.0","y":"4727.0"}},{"$":{"x":"9499.421","y":"4727.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF004E","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e62","source":"n17","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.999936507936582","sy":"-196.2765415896124","tx":"4.99963492063489","ty":"-122.67442638133747"},"y:Point":[{"$":{"x":"10687.758","y":"336.0"}},{"$":{"x":"5192.579","y":"336.0"}}]}],"y:LineStyle":[{"$":{"color":"#D64700","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e63","source":"n19","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"-3.6507936511043226E-4","ty":"122.67457361866252"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"5253.5","y":"2359.0"}},{"$":{"x":"5253.5","y":"1865.0"}},{"$":{"x":"5187.579","y":"1865.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e64","source":"n13","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"147.71058730158734","sy":"4.999703370596762","tx":"-151.02836507936445","ty":"-5.000426381337434"},"y:Point":[{"$":{"x":"3668.0","y":"7510.96"}},{"$":{"x":"3668.0","y":"565.99"}}]}],"y:LineStyle":[{"$":{"color":"#808000","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e65","source":"n33","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.7619047609259724E-4","sy":"108.87470337059767","tx":"-151.02836507936445","ty":"-4.263813374336678E-4"},"y:Point":[{"$":{"x":"658.565","y":"8973.012"}},{"$":{"x":"4632.0","y":"8973.012"}},{"$":{"x":"4632.0","y":"570.99"}}]}],"y:LineStyle":[{"$":{"color":"#E000FF","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e66","source":"n12","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-160.98666666666668","sy":"4.999703370596762","tx":"151.02863492063534","ty":"-4.263813374336678E-4"},"y:Point":[{"$":{"x":"5389.0","y":"7510.96"}},{"$":{"x":"5389.0","y":"570.99"}}]}],"y:LineStyle":[{"$":{"color":"#073A5F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e67","source":"n14","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-5.0001269841269504","sy":"-220.587541589613","tx":"9.99963492063489","ty":"-122.67442638133747"},"y:Point":[{"$":{"x":"771.859","y":"386.0"}},{"$":{"x":"5197.579","y":"386.0"}}]}],"y:LineStyle":[{"$":{"color":"#00A4DE","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e68","source":"n15","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"191.35907936507965","sy":"-545.9805415896126","tx":"4.99963492063489","ty":"122.67457361866252"},"y:Point":[{"$":{"x":"2469.869","y":"827.0"}},{"$":{"x":"5192.579","y":"827.0"}}]}],"y:LineStyle":[{"$":{"color":"#AB9841","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e69","source":"n22","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"320.308047619048","sy":"-1.655680734984344E-4","tx":"-151.02836507936445","ty":"-15.000426381337434"},"y:Point":[{"$":{"x":"3289.0","y":"5334.759"}},{"$":{"x":"3289.0","y":"555.99"}}]}],"y:LineStyle":[{"$":{"color":"#FF0046","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e70","source":"n10","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-5.000444444444838","sy":"114.97827450452439","tx":"83.83963492063504","ty":"-122.6744041909468"}}],"y:LineStyle":[{"$":{"color":"#3800FF","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e71","source":"n19","target":"n24"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"-4.1269841267421725E-4","ty":"-122.6746841276979"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"5253.5","y":"2359.0"}},{"$":{"x":"5253.5","y":"1865.0"}},{"$":{"x":"1225.448","y":"1865.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e72","source":"n12","target":"n24"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-160.98666666666668","sy":"4.999703370596762","tx":"-4.1269841267421725E-4","ty":"122.67431587230203"},"y:Point":[{"$":{"x":"5389.0","y":"7510.96"}},{"$":{"x":"5389.0","y":"2354.0"}},{"$":{"x":"1225.448","y":"2354.0"}}]}],"y:LineStyle":[{"$":{"color":"#073A5F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e73","source":"n13","target":"n24"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"147.71058730158734","sy":"4.999703370596762","tx":"133.96058730158734","ty":"-4.999684127697947"},"y:Point":[{"$":{"x":"3668.0","y":"7510.96"}},{"$":{"x":"3668.0","y":"2057.08"}}]}],"y:LineStyle":[{"$":{"color":"#808000","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e74","source":"n33","target":"n24"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.7619047609259724E-4","sy":"108.87470337059767","tx":"4.999587301587326","ty":"122.67431587230203"},"y:Point":[{"$":{"x":"658.565","y":"8973.012"}},{"$":{"x":"4632.0","y":"8973.012"}},{"$":{"x":"4632.0","y":"2349.0"}},{"$":{"x":"1230.448","y":"2349.0"}}]}],"y:LineStyle":[{"$":{"color":"#E000FF","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e75","source":"n15","target":"n24"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"191.35907936507965","sy":"-545.9805415896126","tx":"133.96058730158734","ty":"3.158723020533216E-4"},"y:Point":[{"$":{"x":"2469.869","y":"827.0"}},{"$":{"x":"1437.0","y":"827.0"}},{"$":{"x":"1437.0","y":"2062.08"}}]}],"y:LineStyle":[{"$":{"color":"#AB9841","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e76","source":"n14","target":"n24"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-5.0001269841269504","sy":"-220.587541589613","tx":"-133.9604126984127","ty":"3.158723020533216E-4"},"y:Point":[{"$":{"x":"771.859","y":"386.0"}},{"$":{"x":"968.988","y":"386.0"}},{"$":{"x":"968.988","y":"2062.08"}}]}],"y:LineStyle":[{"$":{"color":"#00A4DE","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e77","source":"n23","target":"n25"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-429.75542857142864","sy":"390.2408344319256","tx":"-14.809920634920672","ty":"-147.18201948738806"},"y:Point":[{"$":{"x":"7711.0","y":"5725.0"}}]}],"y:LineStyle":[{"$":{"color":"#53590A","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e78","source":"n7","target":"n25"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"342.3113333333331","sy":"4.999766183487736","tx":"163.63007936507893","ty":"-1.9487388271954842E-5"},"y:Point":[{"$":{"x":"7942.0","y":"9451.821"}},{"$":{"x":"7942.0","y":"8308.858"}}]}],"y:LineStyle":[{"$":{"color":"#800000","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e79","source":"n25","target":"n9"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-163.62992063492038","sy":"-1.9487388271954842E-5","tx":"-146.04523809523744","ty":"3.158723020533216E-4"},"y:Point":[{"$":{"x":"6755.0","y":"8308.858"}},{"$":{"x":"6755.0","y":"2062.08"}}]}],"y:LineStyle":[{"$":{"color":"#000066","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e80","source":"n25","target":"n0"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-163.62992063492038","sy":"-1.9487388271954842E-5","tx":"-5.000476190476093","ty":"206.97445841038734"},"y:Point":[{"$":{"x":"6755.0","y":"8308.858"}},{"$":{"x":"6755.0","y":"6881.828"}},{"$":{"x":"1700.565","y":"6881.828"}}]}],"y:LineStyle":[{"$":{"color":"#000066","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e81","source":"n25","target":"n16"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-163.62992063492038","sy":"-1.9487388271954842E-5","tx":"174.81055555555577","ty":"-1.655680734984344E-4"},"y:Point":[{"$":{"x":"6755.0","y":"8308.858"}},{"$":{"x":"6755.0","y":"5334.759"}}]}],"y:LineStyle":[{"$":{"color":"#000066","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e82","source":"n25","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-163.62992063492038","sy":"-1.9487388271954842E-5","tx":"133.9605555555554","ty":"-103.43527450452439"},"y:Point":[{"$":{"x":"6755.0","y":"8308.858"}},{"$":{"x":"6755.0","y":"11.543"}}]}],"y:LineStyle":[{"$":{"color":"#000066","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e83","source":"n25","target":"n12"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-163.62992063492038","sy":"-1.9487388271954842E-5","tx":"160.98633333333328","ty":"-2.966294032376027E-4"},"y:Point":[{"$":{"x":"6755.0","y":"8308.858"}},{"$":{"x":"6755.0","y":"7505.96"}}]}],"y:LineStyle":[{"$":{"color":"#000066","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_one","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e84","source":"n25","target":"n5"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-163.62992063492038","sy":"-1.9487388271954842E-5","tx":"-309.130714285714","ty":"-2.014724605032825E-4"},"y:Point":[{"$":{"x":"6755.0","y":"8308.858"}},{"$":{"x":"6755.0","y":"4228.143"}}]}],"y:LineStyle":[{"$":{"color":"#000066","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e85","source":"n26","target":"n27"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"147.7253333333333","sy":"-1.655680734984344E-4","tx":"151.80112698412677","ty":"4.999798527540406"},"y:Point":[{"$":{"x":"3659.0","y":"5334.759"}},{"$":{"x":"3659.0","y":"4233.143"}}]}],"y:LineStyle":[{"$":{"color":"#990000","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e86","source":"n27","target":"n28"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.999873015873163","sy":"-119.37320147245919","tx":"-1.4285714314610232E-4","ty":"188.16645841038735"},"y:Point":[{"$":{"x":"3472.716","y":"3703.0"}},{"$":{"x":"3917.082","y":"3703.0"}}]}],"y:LineStyle":[{"$":{"color":"#006666","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e87","source":"n28","target":"n29"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-1.4285714314610232E-4","sy":"-188.16654158961228","tx":"186.11446031746073","ty":"3.158723020533216E-4"},"y:Point":[{"$":{"x":"3917.082","y":"2774.0"}},{"$":{"x":"4422.0","y":"2774.0"}},{"$":{"x":"4422.0","y":"2062.08"}}]}],"y:LineStyle":[{"$":{"color":"#660066","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e88","source":"n29","target":"n30"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"4.6031746023800224E-4","sy":"-122.6746841276979","tx":"2.5396825458301464E-4","ty":"114.97833555382317"},"y:Point":[{"$":{"x":"3950.633","y":"1778.0"}},{"$":{"x":"6395.832","y":"1778.0"}}]}],"y:LineStyle":[{"$":{"color":"#DA6A47","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e89","source":"n30","target":"n31"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-126.24774603174592","sy":"3.3555382333361194E-4","tx":"186.1143492063493","ty":"3.526646037244063E-5"},"y:Point":[{"$":{"x":"6251.0","y":"1569.094"}},{"$":{"x":"6251.0","y":"1078.797"}}]}],"y:LineStyle":[{"$":{"color":"#761D48","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e90","source":"n19","target":"n27"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-130.77326984126967","sy":"-364.5040946430472","tx":"1.2698412683675997E-4","ty":"-119.37320147245919"},"y:Point":[{"$":{"x":"3737.018","y":"2359.0"}},{"$":{"x":"3477.716","y":"2359.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF660F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e91","source":"n22","target":"n27"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"320.308047619048","sy":"-1.655680734984344E-4","tx":"-151.80187301587284","ty":"-2.014724595937878E-4"},"y:Point":[{"$":{"x":"3289.0","y":"5334.759"}},{"$":{"x":"3289.0","y":"4228.143"}}]}],"y:LineStyle":[{"$":{"color":"#FF0046","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e92","source":"n26","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"147.7253333333333","sy":"-1.655680734984344E-4","tx":"-151.02836507936445","ty":"-20.000426381337434"},"y:Point":[{"$":{"x":"3659.0","y":"5334.759"}},{"$":{"x":"3659.0","y":"550.99"}}]}],"y:LineStyle":[{"$":{"color":"#990000","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e93","source":"n27","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.999873015873163","sy":"-119.37320147245919","tx":"-3.6507936511043226E-4","ty":"-122.67442638133747"},"y:Point":[{"$":{"x":"3472.716","y":"3703.0"}},{"$":{"x":"569.73","y":"3703.0"}},{"$":{"x":"569.73","y":"435.816"}},{"$":{"x":"5187.579","y":"435.816"}}]}],"y:LineStyle":[{"$":{"color":"#006666","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e94","source":"n28","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-1.4285714314610232E-4","sy":"-188.16654158961228","tx":"-151.02836507936445","ty":"-10.000426381337434"},"y:Point":[{"$":{"x":"3917.082","y":"2774.0"}},{"$":{"x":"4422.0","y":"2774.0"}},{"$":{"x":"4422.0","y":"560.99"}}]}],"y:LineStyle":[{"$":{"color":"#660066","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e95","source":"n29","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"4.6031746023800224E-4","sy":"-122.6746841276979","tx":"-44.079365079364834","ty":"122.67457361866252"},"y:Point":[{"$":{"x":"3950.633","y":"1778.0"}},{"$":{"x":"5143.5","y":"1778.0"}}]}],"y:LineStyle":[{"$":{"color":"#DA6A47","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e96","source":"n30","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-126.24774603174592","sy":"3.3555382333361194E-4","tx":"151.02863492063534","ty":"4.999573618662566"},"y:Point":[{"$":{"x":"6251.0","y":"1569.094"}},{"$":{"x":"6251.0","y":"575.99"}}]}],"y:LineStyle":[{"$":{"color":"#761D48","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e97","source":"n31","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-186.11477478275538","sy":"0.0","tx":"65.92063492063517","ty":"122.6744041909468"},"y:Point":[{"$":{"x":"5253.5","y":"1078.7969647335397"}}]}],"y:LineStyle":[{"$":{"color":"#805A5C","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e98","source":"n27","target":"n15"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.999873015873163","sy":"-119.37320147245919","tx":"7.936507972772233E-5","ty":"545.9804584103877"},"y:Point":[{"$":{"x":"3472.716","y":"3703.0"}},{"$":{"x":"2278.51","y":"3703.0"}}]}],"y:LineStyle":[{"$":{"color":"#006666","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e99","source":"n27","target":"n14"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.999873015873163","sy":"-119.37320147245919","tx":"-1.269841269504468E-4","ty":"220.58745841038717"},"y:Point":[{"$":{"x":"3472.716","y":"3703.0"}},{"$":{"x":"776.859","y":"3703.0"}}]}],"y:LineStyle":[{"$":{"color":"#006666","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e100","source":"n13","target":"n27"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"147.71058730158734","sy":"4.999703370596762","tx":"151.80112698412677","ty":"-2.014724595937878E-4"},"y:Point":[{"$":{"x":"3668.0","y":"7510.96"}},{"$":{"x":"3668.0","y":"4228.143"}}]}],"y:LineStyle":[{"$":{"color":"#808000","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e101","source":"n32","target":"n11"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"5.6234126984127215","sy":"-220.5876185991865","tx":"-151.02838498521396","ty":"-117.47827450452445"},"y:Point":[{"$":{"x":"4427.0","y":"453.512151876813"}}]}],"y:LineStyle":[{"$":{"color":"#3D3A19","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e102","source":"n27","target":"n32"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.999873015873163","sy":"-119.37320147245919","tx":"4.126984131289646E-4","ty":"220.58745841038717"},"y:Point":[{"$":{"x":"3472.716","y":"3703.0"}},{"$":{"x":"4421.377","y":"3703.0"}}]}],"y:LineStyle":[{"$":{"color":"#006666","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e103","source":"n33","target":"n32"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.7619047609259724E-4","sy":"108.87470337059767","tx":"194.62841269841283","ty":"4.584103871820844E-4"},"y:Point":[{"$":{"x":"658.565","y":"8973.012"}},{"$":{"x":"4632.0","y":"8973.012"}},{"$":{"x":"4632.0","y":"3077.304"}}]}],"y:LineStyle":[{"$":{"color":"#E000FF","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e104","source":"n34","target":"n35"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-2.063492065644823E-4","sy":"-154.59454158961262","tx":"-2.063492065644823E-4","ty":"-99.05996473353969"},"y:Point":[{"$":{"x":"10261.099","y":"223.0"}},{"$":{"x":"11500.974","y":"223.0"}}]}],"y:LineStyle":[{"$":{"color":"#6D955F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"crows_foot_many_mandatory"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e105","source":"n34","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-2.063492065644823E-4","sy":"-154.59454158961262","tx":"133.9605555555554","ty":"108.02172549547561"},"y:Point":[{"$":{"x":"10261.099","y":"223.0"}}]}],"y:LineStyle":[{"$":{"color":"#6D955F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e106","source":"n35","target":"n10"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"4.9997936507934355","sy":"-99.05980897036397","tx":"-5.000444444444838","ty":"-114.97827450452439"},"y:Point":[{"$":{"x":"11505.974","y":"-22.5"}},{"$":{"x":"5271.419","y":"-22.5"}}]}],"y:LineStyle":[{"$":{"color":"#B7AC00","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e107","source":"n34","target":"n9"},"data":[{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-2.063492065644823E-4","sy":"-154.59454158961262","tx":"9.999761904762636","ty":"-100.48468412769785"},"y:Point":[{"$":{"x":"10261.099","y":"223.0"}},{"$":{"x":"8853.62","y":"223.0"}}]}],"y:LineStyle":[{"$":{"color":"#6D955F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e108","source":"n16","target":"n5"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"174.81059518126858","sy":"4.999834431926502","tx":"-4.999714285713708","ty":"454.85874910680377"},"y:Point":[{"$":{"x":"7103.336","y":"5339.759"}}]}],"y:LineStyle":[{"$":{"color":"#333399","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e109","source":"n7","target":"n36"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"342.3113333333331","sy":"4.999766183487736","tx":"160.98682539682522","ty":"4.584103871820844E-4"},"y:Point":[{"$":{"x":"7942.0","y":"9451.821"}},{"$":{"x":"7942.0","y":"3077.304"}}]}],"y:LineStyle":[{"$":{"color":"#800000","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e110","source":"n18","target":"n36"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-142.77285714285608","sy":"1.3998308895679656E-4","tx":"-160.98617460317473","ty":"4.584103871820844E-4"},"y:Point":[{"$":{"x":"7478.0","y":"10103.493"}},{"$":{"x":"7478.0","y":"3077.304"}}]}],"y:LineStyle":[{"$":{"color":"#FF004E","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e111","source":"n23","target":"n36"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-429.75542857142864","sy":"390.2408344319256","tx":"12.546825396825625","ty":"211.51645841038726"},"y:Point":[{"$":{"x":"7711.0","y":"5725.0"}}]}],"y:LineStyle":[{"$":{"color":"#53590A","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e112","source":"n5","target":"n36"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"2.8571428629220463E-4","sy":"-454.8592014724604","tx":"-5.000174603173946","ty":"-211.5165415896131"},"y:Point":[{"$":{"x":"7108.336","y":"2769.0"}},{"$":{"x":"7693.453","y":"2769.0"}}]}],"y:LineStyle":[{"$":{"color":"#00967A","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e113","source":"n6","target":"n36"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-1.5873015763645526E-4","sy":"-417.58609464304664","tx":"4.999825396826054","ty":"-211.5165415896131"},"y:Point":[{"$":{"x":"8304.28","y":"2685.0"}},{"$":{"x":"7703.453","y":"2685.0"}}]}],"y:LineStyle":[{"$":{"color":"#1400FF","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e114","source":"n4","target":"n36"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"186.11492063492065","sy":"-1.9487388271954842E-5","tx":"-1.746031739457976E-4","ty":"-211.5165415896131"},"y:Point":[{"$":{"x":"1009.0","y":"8308.858"}},{"$":{"x":"1009.0","y":"2443.0"}},{"$":{"x":"7698.453","y":"2443.0"}}]}],"y:LineStyle":[{"$":{"color":"#828282","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e115","source":"n8","target":"n36"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.6031746023800224E-4","sy":"-304.3472014724607","tx":"9.999825396826054","ty":"-211.5165415896131"},"y:Point":[{"$":{"x":"11122.017","y":"2815.0"}},{"$":{"x":"7708.453","y":"2815.0"}}]}],"y:LineStyle":[{"$":{"color":"#6D322D","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e116","source":"n36","target":"n9"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-10.000174603173946","sy":"-211.5165415896131","tx":"-5.000238095237364","ty":"100.48431587230198"},"y:Point":[{"$":{"x":"7688.453","y":"2270.0"}},{"$":{"x":"8838.62","y":"2270.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF99CC","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e117","source":"n36","target":"n24"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-10.000174603173946","sy":"-211.5165415896131","tx":"-5.000412698412674","ty":"122.67431587230203"},"y:Point":[{"$":{"x":"7688.453","y":"2270.0"}},{"$":{"x":"1220.448","y":"2270.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF99CC","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e118","source":"n36","target":"n11"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-10.000174603173946","sy":"-211.5165415896131","tx":"-147.07936507936483","ty":"122.67457361866252"},"y:Point":[{"$":{"x":"7688.453","y":"2270.0"}},{"$":{"x":"5040.5","y":"2270.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF99CC","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e119","source":"n36","target":"n37"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-10.000174603173946","sy":"-211.5165415896131","tx":"121.3093492063499","ty":"-2.745045243983668E-4"},"y:Point":[{"$":{"x":"7688.453","y":"2270.0"}},{"$":{"x":"6237.083","y":"2270.0"}},{"$":{"x":"6237.083","y":"114.978"}}]}],"y:LineStyle":[{"$":{"color":"#FF99CC","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e120","source":"n34","target":"n37"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-2.063492065644823E-4","sy":"-154.59454158961262","tx":"-9.99965079365029","ty":"80.93472549547562"},"y:Point":[{"$":{"x":"10261.099","y":"223.0"}},{"$":{"x":"6005.969","y":"223.0"}}]}],"y:LineStyle":[{"$":{"color":"#6D955F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e121","source":"n15","target":"n37"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"191.35907936507965","sy":"-545.9805415896126","tx":"-4.999650793650289","ty":"80.93472549547562"},"y:Point":[{"$":{"x":"2469.869","y":"827.0"}},{"$":{"x":"6010.969","y":"827.0"}}]}],"y:LineStyle":[{"$":{"color":"#AB9841","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e122","source":"n12","target":"n37"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-160.98666666666668","sy":"4.999703370596762","tx":"3.492063497105846E-4","ty":"80.93472549547562"},"y:Point":[{"$":{"x":"5389.0","y":"7510.96"}},{"$":{"x":"5389.0","y":"964.449"}},{"$":{"x":"6015.969","y":"964.449"}}]}],"y:LineStyle":[{"$":{"color":"#073A5F","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e123","source":"n11","target":"n37"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"14.99963492063489","sy":"-122.67442638133747","tx":"10.00034920634971","ty":"80.93472549547562"},"y:Point":[{"$":{"x":"5202.579","y":"286.0"}},{"$":{"x":"6025.969","y":"286.0"}}]}],"y:LineStyle":[{"$":{"color":"#FF008E","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]},{"$":{"id":"e124","source":"n17","target":"n37"},"data":[{"$":{"key":"d9"}},{"$":{"key":"d10"},"y:PolyLineEdge":[{"y:Path":[{"$":{"sx":"-4.999936507936582","sy":"-196.2765415896124","tx":"5.000349206349711","ty":"80.93472549547562"},"y:Point":[{"$":{"x":"10687.758","y":"336.0"}},{"$":{"x":"6020.969","y":"336.0"}}]}],"y:LineStyle":[{"$":{"color":"#D64700","type":"line","width":"1.0"}}],"y:Arrows":[{"$":{"source":"crows_foot_many_mandatory","target":"none"}}],"y:BendStyle":[{"$":{"smoothed":"false"}}]}]}]}]}],"data":[{"$":{"key":"d7"},"y:Resources":[""]}]}}

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var path_1 = __webpack_require__(1);
var schema_writer_1 = __webpack_require__(15);
var chalk = __webpack_require__(39);
var args = process.argv.filter(function (a, i) { return i > 1; });
var path;
console.log(args);
if (args.length > 0) {
    //load schema with arg1 as path and go to second step -- check if an out path was provided
    path = args[0];
    console.log(path);
}
else {
    path = 'storyient-mongo.graphml';
}
var p = path_1.resolve(path);
var schema = __webpack_require__(0);
var graph = schema.graphml.graph[0];
var data = (_a = []).concat.apply(_a, graph.node.map(function (d) { return d['data']; }).map(function (d) { return d[0]['y:GenericNode']; })).filter(function (d) { return d != undefined; }).map(function (d) { return d['y:NodeLabel']; });
var fschema = data.map(function (datum) { return Object.assign({}, { collName: datum[0]['_'], collectionDef: datum[1]['_'] }); }).filter(function (s) { return ('collName' in s && 'collectionDef' in s); });
schema_writer_1.SchemaWriter.write(fschema)
    .then(function () {
    console.log(chalk.cyan('Process completed successfully!'));
    process.exit(0);
})
    .catch(function (err) {
    console.log(chalk.red(err));
    process.exit(1);
});
var _a;


/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("graceful-fs");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {
  mkdirs: __webpack_require__(7),
  mkdirsSync: __webpack_require__(6),
  // alias
  mkdirp: __webpack_require__(7),
  mkdirpSync: __webpack_require__(6),
  ensureDir: __webpack_require__(7),
  ensureDirSync: __webpack_require__(6)
}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var jsonFile = __webpack_require__(35)

module.exports = {
  // jsonfile exports
  readJson: jsonFile.readFile,
  readJSON: jsonFile.readFile,
  readJsonSync: jsonFile.readFileSync,
  readJSONSync: jsonFile.readFileSync,
  writeJson: jsonFile.writeFile,
  writeJSON: jsonFile.writeFile,
  writeJsonSync: jsonFile.writeFileSync,
  writeJSONSync: jsonFile.writeFileSync,
  spaces: 2 // default in fs-extra
}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var fs = __webpack_require__(3)
var path = __webpack_require__(1)
var invalidWin32Path = __webpack_require__(12).invalidWin32Path

var o777 = parseInt('0777', 8)

function mkdirsSync (p, opts, made) {
  if (!opts || typeof opts !== 'object') {
    opts = { mode: opts }
  }

  var mode = opts.mode
  var xfs = opts.fs || fs

  if (process.platform === 'win32' && invalidWin32Path(p)) {
    var errInval = new Error(p + ' contains invalid WIN32 path characters.')
    errInval.code = 'EINVAL'
    throw errInval
  }

  if (mode === undefined) {
    mode = o777 & (~process.umask())
  }
  if (!made) made = null

  p = path.resolve(p)

  try {
    xfs.mkdirSync(p, mode)
    made = made || p
  } catch (err0) {
    switch (err0.code) {
      case 'ENOENT':
        if (path.dirname(p) === p) throw err0
        made = mkdirsSync(path.dirname(p), opts, made)
        mkdirsSync(p, opts, made)
        break

      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        var stat
        try {
          stat = xfs.statSync(p)
        } catch (err1) {
          throw err0
        }
        if (!stat.isDirectory()) throw err0
        break
    }
  }

  return made
}

module.exports = mkdirsSync


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var fs = __webpack_require__(3)
var path = __webpack_require__(1)
var invalidWin32Path = __webpack_require__(12).invalidWin32Path

var o777 = parseInt('0777', 8)

function mkdirs (p, opts, callback, made) {
  if (typeof opts === 'function') {
    callback = opts
    opts = {}
  } else if (!opts || typeof opts !== 'object') {
    opts = { mode: opts }
  }

  if (process.platform === 'win32' && invalidWin32Path(p)) {
    var errInval = new Error(p + ' contains invalid WIN32 path characters.')
    errInval.code = 'EINVAL'
    return callback(errInval)
  }

  var mode = opts.mode
  var xfs = opts.fs || fs

  if (mode === undefined) {
    mode = o777 & (~process.umask())
  }
  if (!made) made = null

  callback = callback || function () {}
  p = path.resolve(p)

  xfs.mkdir(p, mode, function (er) {
    if (!er) {
      made = made || p
      return callback(null, made)
    }
    switch (er.code) {
      case 'ENOENT':
        if (path.dirname(p) === p) return callback(er)
        mkdirs(path.dirname(p), opts, function (er, made) {
          if (er) callback(er, made)
          else mkdirs(p, opts, callback, made)
        })
        break

      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        xfs.stat(p, function (er2, stat) {
          // if the stat fails, then that's super weird.
          // let the original error be the failure reason.
          if (er2 || !stat.isDirectory()) callback(er, made)
          else callback(null, made)
        })
        break
    }
  })
}

module.exports = mkdirs


/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

// imported from ncp (this is temporary, will rewrite)

var fs = __webpack_require__(3)
var path = __webpack_require__(1)
var utimes = __webpack_require__(33)

function ncp (source, dest, options, callback) {
  if (!callback) {
    callback = options
    options = {}
  }

  var basePath = process.cwd()
  var currentPath = path.resolve(basePath, source)
  var targetPath = path.resolve(basePath, dest)

  var filter = options.filter
  var transform = options.transform
  var clobber = options.clobber !== false
  var dereference = options.dereference
  var preserveTimestamps = options.preserveTimestamps === true

  var errs = null

  var started = 0
  var finished = 0
  var running = 0
  // this is pretty useless now that we're using graceful-fs
  // consider removing
  var limit = options.limit || 512

  startCopy(currentPath)

  function startCopy (source) {
    started++
    if (filter) {
      if (filter instanceof RegExp) {
        if (!filter.test(source)) {
          return doneOne(true)
        }
      } else if (typeof filter === 'function') {
        if (!filter(source)) {
          return doneOne(true)
        }
      }
    }
    return getStats(source)
  }

  function getStats (source) {
    var stat = dereference ? fs.stat : fs.lstat
    if (running >= limit) {
      return setImmediate(function () {
        getStats(source)
      })
    }
    running++
    stat(source, function (err, stats) {
      if (err) return onError(err)

      // We need to get the mode from the stats object and preserve it.
      var item = {
        name: source,
        mode: stats.mode,
        mtime: stats.mtime, // modified time
        atime: stats.atime, // access time
        stats: stats // temporary
      }

      if (stats.isDirectory()) {
        return onDir(item)
      } else if (stats.isFile() || stats.isCharacterDevice() || stats.isBlockDevice()) {
        return onFile(item)
      } else if (stats.isSymbolicLink()) {
        // Symlinks don't really need to know about the mode.
        return onLink(source)
      }
    })
  }

  function onFile (file) {
    var target = file.name.replace(currentPath, targetPath)
    isWritable(target, function (writable) {
      if (writable) {
        copyFile(file, target)
      } else {
        if (clobber) {
          rmFile(target, function () {
            copyFile(file, target)
          })
        } else {
          doneOne()
        }
      }
    })
  }

  function copyFile (file, target) {
    var readStream = fs.createReadStream(file.name)
    var writeStream = fs.createWriteStream(target, { mode: file.mode })

    readStream.on('error', onError)
    writeStream.on('error', onError)

    if (transform) {
      transform(readStream, writeStream, file)
    } else {
      writeStream.on('open', function () {
        readStream.pipe(writeStream)
      })
    }

    writeStream.once('finish', function () {
      fs.chmod(target, file.mode, function (err) {
        if (err) return onError(err)
        if (preserveTimestamps) {
          utimes.utimesMillis(target, file.atime, file.mtime, function (err) {
            if (err) return onError(err)
            return doneOne()
          })
        } else {
          doneOne()
        }
      })
    })
  }

  function rmFile (file, done) {
    fs.unlink(file, function (err) {
      if (err) return onError(err)
      return done()
    })
  }

  function onDir (dir) {
    var target = dir.name.replace(currentPath, targetPath)
    isWritable(target, function (writable) {
      if (writable) {
        return mkDir(dir, target)
      }
      copyDir(dir.name)
    })
  }

  function mkDir (dir, target) {
    fs.mkdir(target, dir.mode, function (err) {
      if (err) return onError(err)
      // despite setting mode in fs.mkdir, doesn't seem to work
      // so we set it here.
      fs.chmod(target, dir.mode, function (err) {
        if (err) return onError(err)
        copyDir(dir.name)
      })
    })
  }

  function copyDir (dir) {
    fs.readdir(dir, function (err, items) {
      if (err) return onError(err)
      items.forEach(function (item) {
        startCopy(path.join(dir, item))
      })
      return doneOne()
    })
  }

  function onLink (link) {
    var target = link.replace(currentPath, targetPath)
    fs.readlink(link, function (err, resolvedPath) {
      if (err) return onError(err)
      checkLink(resolvedPath, target)
    })
  }

  function checkLink (resolvedPath, target) {
    if (dereference) {
      resolvedPath = path.resolve(basePath, resolvedPath)
    }
    isWritable(target, function (writable) {
      if (writable) {
        return makeLink(resolvedPath, target)
      }
      fs.readlink(target, function (err, targetDest) {
        if (err) return onError(err)

        if (dereference) {
          targetDest = path.resolve(basePath, targetDest)
        }
        if (targetDest === resolvedPath) {
          return doneOne()
        }
        return rmFile(target, function () {
          makeLink(resolvedPath, target)
        })
      })
    })
  }

  function makeLink (linkPath, target) {
    fs.symlink(linkPath, target, function (err) {
      if (err) return onError(err)
      return doneOne()
    })
  }

  function isWritable (path, done) {
    fs.lstat(path, function (err) {
      if (err) {
        if (err.code === 'ENOENT') return done(true)
        return done(false)
      }
      return done(false)
    })
  }

  function onError (err) {
    if (options.stopOnError) {
      return callback(err)
    } else if (!errs && options.errs) {
      errs = fs.createWriteStream(options.errs)
    } else if (!errs) {
      errs = []
    }
    if (typeof errs.write === 'undefined') {
      errs.push(err)
    } else {
      errs.write(err.stack + '\n\n')
    }
    return doneOne()
  }

  function doneOne (skipped) {
    if (!skipped) running--
    finished++
    if ((started === finished) && (running === 0)) {
      if (callback !== undefined) {
        return errs ? callback(errs) : callback(null)
      }
    }
  }
}

module.exports = ncp


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var fs = __webpack_require__(3)
var path = __webpack_require__(1)
var jsonFile = __webpack_require__(5)
var mkdir = __webpack_require__(4)

function outputJsonSync (file, data, options) {
  var dir = path.dirname(file)

  if (!fs.existsSync(dir)) {
    mkdir.mkdirsSync(dir)
  }

  jsonFile.writeJsonSync(file, data, options)
}

module.exports = outputJsonSync


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var fs = __webpack_require__(3)
var path = __webpack_require__(1)
var jsonFile = __webpack_require__(5)
var mkdir = __webpack_require__(4)

function outputJson (file, data, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  var dir = path.dirname(file)

  fs.exists(dir, function (itDoes) {
    if (itDoes) return jsonFile.writeJson(file, data, options, callback)

    mkdir.mkdirs(dir, function (err) {
      if (err) return callback(err)
      jsonFile.writeJson(file, data, options, callback)
    })
  })
}

module.exports = outputJson


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict'
var path = __webpack_require__(1)

// get drive on windows
function getRootPath (p) {
  p = path.normalize(path.resolve(p)).split(path.sep)
  if (p.length > 0) return p[0]
  else return null
}

// http://stackoverflow.com/a/62888/10333 contains more accurate
// TODO: expand to include the rest
var INVALID_PATH_CHARS = /[<>:"|?*]/

function invalidWin32Path (p) {
  var rp = getRootPath(p)
  p = p.replace(rp, '')
  return INVALID_PATH_CHARS.test(p)
}

module.exports = {
  getRootPath: getRootPath,
  invalidWin32Path: invalidWin32Path
}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var rimraf = __webpack_require__(14)

function removeSync (dir) {
  return rimraf.sync(dir)
}

function remove (dir, callback) {
  return callback ? rimraf(dir, callback) : rimraf(dir, function () {})
}

module.exports = {
  remove: remove,
  removeSync: removeSync
}


/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("rimraf");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var fs_extra_1 = __webpack_require__(28);
var path_1 = __webpack_require__(1);
var chalck = __webpack_require__(39);
var pluralize = __webpack_require__(44);
var SchemaWriter = (function () {
    function SchemaWriter() {
    }
    SchemaWriter.write = function (schemas, destination) {
        if (destination === void 0) { destination = '..'; }
        console.log(schemas);
        var p;
        p = path_1.resolve(destination);
        var promises = schemas.map(function (s) { return exectute(p, s.collName, s.collectionDef); });
        return new Promise(function (resolve, reject) {
            Promise.all(promises)
                .then(function () {
                console.log(chalck.magenta("Done writing all " + schemas.length + " schemas!"));
                resolve(true);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    return SchemaWriter;
}());
exports.SchemaWriter = SchemaWriter;
function exectute(baseDest, collName, def) {
    return new Promise(function (resolve, reject) {
        var path = path_1.join(baseDest, collName + ".interface.ts");
        var data = "import { ObjectID } from 'mongodb'; \r\ninterface " + getInterfaceName(collName) + " " + def;
        fs_extra_1.writeFile(path, data, function (err) {
            if (err)
                reject(err);
            console.log(chalck.green("written >> " + collName + ".interface.ts"));
            resolve(true);
        });
    });
}
function getInterfaceName(collName) {
    var sing = pluralize.singular(collName);
    var cap = sing.split('').map(function (c, i) { return i === 0 ? c.toUpperCase() : c; }).join('');
    var intname = "I" + cap;
    return intname;
}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

var fs = __webpack_require__(3)

var BUF_LENGTH = 64 * 1024
var _buff = new Buffer(BUF_LENGTH)

function copyFileSync (srcFile, destFile, options) {
  var clobber = options.clobber
  var preserveTimestamps = options.preserveTimestamps

  if (fs.existsSync(destFile)) {
    if (clobber) {
      fs.chmodSync(destFile, parseInt('777', 8))
      fs.unlinkSync(destFile)
    } else {
      throw Error('EEXIST')
    }
  }

  var fdr = fs.openSync(srcFile, 'r')
  var stat = fs.fstatSync(fdr)
  var fdw = fs.openSync(destFile, 'w', stat.mode)
  var bytesRead = 1
  var pos = 0

  while (bytesRead > 0) {
    bytesRead = fs.readSync(fdr, _buff, 0, BUF_LENGTH, pos)
    fs.writeSync(fdw, _buff, 0, bytesRead)
    pos += bytesRead
  }

  if (preserveTimestamps) {
    fs.futimesSync(fdw, stat.atime, stat.mtime)
  }

  fs.closeSync(fdr)
  fs.closeSync(fdw)
}

module.exports = copyFileSync


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var fs = __webpack_require__(3)
var path = __webpack_require__(1)
var copyFileSync = __webpack_require__(16)
var mkdir = __webpack_require__(4)

function copySync (src, dest, options) {
  if (typeof options === 'function' || options instanceof RegExp) {
    options = {filter: options}
  }

  options = options || {}
  options.recursive = !!options.recursive

  // default to true for now
  options.clobber = 'clobber' in options ? !!options.clobber : true
  options.dereference = 'dereference' in options ? !!options.dereference : false
  options.preserveTimestamps = 'preserveTimestamps' in options ? !!options.preserveTimestamps : false

  options.filter = options.filter || function () { return true }

  var stats = (options.recursive && !options.dereference) ? fs.lstatSync(src) : fs.statSync(src)
  var destFolder = path.dirname(dest)
  var destFolderExists = fs.existsSync(destFolder)
  var performCopy = false

  if (stats.isFile()) {
    if (options.filter instanceof RegExp) performCopy = options.filter.test(src)
    else if (typeof options.filter === 'function') performCopy = options.filter(src)

    if (performCopy) {
      if (!destFolderExists) mkdir.mkdirsSync(destFolder)
      copyFileSync(src, dest, {clobber: options.clobber, preserveTimestamps: options.preserveTimestamps})
    }
  } else if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) mkdir.mkdirsSync(dest)
    var contents = fs.readdirSync(src)
    contents.forEach(function (content) {
      var opts = options
      opts.recursive = true
      copySync(path.join(src, content), path.join(dest, content), opts)
    })
  } else if (options.recursive && stats.isSymbolicLink()) {
    var srcPath = fs.readlinkSync(src)
    fs.symlinkSync(srcPath, dest)
  }
}

module.exports = copySync


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {
  copySync: __webpack_require__(17)
}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

var fs = __webpack_require__(3)
var path = __webpack_require__(1)
var ncp = __webpack_require__(9)
var mkdir = __webpack_require__(4)

function copy (src, dest, options, callback) {
  if (typeof options === 'function' && !callback) {
    callback = options
    options = {}
  } else if (typeof options === 'function' || options instanceof RegExp) {
    options = {filter: options}
  }
  callback = callback || function () {}
  options = options || {}

  // don't allow src and dest to be the same
  var basePath = process.cwd()
  var currentPath = path.resolve(basePath, src)
  var targetPath = path.resolve(basePath, dest)
  if (currentPath === targetPath) return callback(new Error('Source and destination must not be the same.'))

  fs.lstat(src, function (err, stats) {
    if (err) return callback(err)

    var dir = null
    if (stats.isDirectory()) {
      var parts = dest.split(path.sep)
      parts.pop()
      dir = parts.join(path.sep)
    } else {
      dir = path.dirname(dest)
    }

    fs.exists(dir, function (dirExists) {
      if (dirExists) return ncp(src, dest, options, callback)
      mkdir.mkdirs(dir, function (err) {
        if (err) return callback(err)
        ncp(src, dest, options, callback)
      })
    })
  })
}

module.exports = copy


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {
  copy: __webpack_require__(19)
}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var fs = __webpack_require__(8)
var path = __webpack_require__(1)
var mkdir = __webpack_require__(4)
var remove = __webpack_require__(13)

function emptyDir (dir, callback) {
  callback = callback || function () {}
  fs.readdir(dir, function (err, items) {
    if (err) return mkdir.mkdirs(dir, callback)

    items = items.map(function (item) {
      return path.join(dir, item)
    })

    deleteItem()

    function deleteItem () {
      var item = items.pop()
      if (!item) return callback()
      remove.remove(item, function (err) {
        if (err) return callback(err)
        deleteItem()
      })
    }
  })
}

function emptyDirSync (dir) {
  var items
  try {
    items = fs.readdirSync(dir)
  } catch (err) {
    return mkdir.mkdirsSync(dir)
  }

  items.forEach(function (item) {
    item = path.join(dir, item)
    remove.removeSync(item)
  })
}

module.exports = {
  emptyDirSync: emptyDirSync,
  emptydirSync: emptyDirSync,
  emptyDir: emptyDir,
  emptydir: emptyDir
}


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var path = __webpack_require__(1)
var fs = __webpack_require__(3)
var mkdir = __webpack_require__(4)

function createFile (file, callback) {
  function makeFile () {
    fs.writeFile(file, '', function (err) {
      if (err) return callback(err)
      callback()
    })
  }

  fs.exists(file, function (fileExists) {
    if (fileExists) return callback()
    var dir = path.dirname(file)
    fs.exists(dir, function (dirExists) {
      if (dirExists) return makeFile()
      mkdir.mkdirs(dir, function (err) {
        if (err) return callback(err)
        makeFile()
      })
    })
  })
}

function createFileSync (file) {
  if (fs.existsSync(file)) return

  var dir = path.dirname(file)
  if (!fs.existsSync(dir)) {
    mkdir.mkdirsSync(dir)
  }

  fs.writeFileSync(file, '')
}

module.exports = {
  createFile: createFile,
  createFileSync: createFileSync,
  // alias
  ensureFile: createFile,
  ensureFileSync: createFileSync
}


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

var file = __webpack_require__(22)
var link = __webpack_require__(24)
var symlink = __webpack_require__(27)

module.exports = {
  // file
  createFile: file.createFile,
  createFileSync: file.createFileSync,
  ensureFile: file.createFile,
  ensureFileSync: file.createFileSync,
  // link
  createLink: link.createLink,
  createLinkSync: link.createLinkSync,
  ensureLink: link.createLink,
  ensureLinkSync: link.createLinkSync,
  // symlink
  createSymlink: symlink.createSymlink,
  createSymlinkSync: symlink.createSymlinkSync,
  ensureSymlink: symlink.createSymlink,
  ensureSymlinkSync: symlink.createSymlinkSync
}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

var path = __webpack_require__(1)
var fs = __webpack_require__(3)
var mkdir = __webpack_require__(4)

function createLink (srcpath, dstpath, callback) {
  function makeLink (srcpath, dstpath) {
    fs.link(srcpath, dstpath, function (err) {
      if (err) return callback(err)
      callback(null)
    })
  }

  fs.exists(dstpath, function (destinationExists) {
    if (destinationExists) return callback(null)
    fs.lstat(srcpath, function (err, stat) {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureLink')
        return callback(err)
      }

      var dir = path.dirname(dstpath)
      fs.exists(dir, function (dirExists) {
        if (dirExists) return makeLink(srcpath, dstpath)
        mkdir.mkdirs(dir, function (err) {
          if (err) return callback(err)
          makeLink(srcpath, dstpath)
        })
      })
    })
  })
}

function createLinkSync (srcpath, dstpath, callback) {
  var destinationExists = fs.existsSync(dstpath)
  if (destinationExists) return undefined

  try {
    fs.lstatSync(srcpath)
  } catch (err) {
    err.message = err.message.replace('lstat', 'ensureLink')
    throw err
  }

  var dir = path.dirname(dstpath)
  var dirExists = fs.existsSync(dir)
  if (dirExists) return fs.linkSync(srcpath, dstpath)
  mkdir.mkdirsSync(dir)

  return fs.linkSync(srcpath, dstpath)
}

module.exports = {
  createLink: createLink,
  createLinkSync: createLinkSync,
  // alias
  ensureLink: createLink,
  ensureLinkSync: createLinkSync
}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var path = __webpack_require__(1)
// path.isAbsolute shim for Node.js 0.10 support
path.isAbsolute = (path.isAbsolute) ? path.isAbsolute : __webpack_require__(41)
var fs = __webpack_require__(3)

/**
 * Function that returns two types of paths, one relative to symlink, and one
 * relative to the current working directory. Checks if path is absolute or
 * relative. If the path is relative, this function checks if the path is
 * relative to symlink or relative to current working directory. This is an
 * initiative to find a smarter `srcpath` to supply when building symlinks.
 * This allows you to determine which path to use out of one of three possible
 * types of source paths. The first is an absolute path. This is detected by
 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
 * see if it exists. If it does it's used, if not an error is returned
 * (callback)/ thrown (sync). The other two options for `srcpath` are a
 * relative url. By default Node's `fs.symlink` works by creating a symlink
 * using `dstpath` and expects the `srcpath` to be relative to the newly
 * created symlink. If you provide a `srcpath` that does not exist on the file
 * system it results in a broken symlink. To minimize this, the function
 * checks to see if the 'relative to symlink' source file exists, and if it
 * does it will use it. If it does not, it checks if there's a file that
 * exists that is relative to the current working directory, if does its used.
 * This preserves the expectations of the original fs.symlink spec and adds
 * the ability to pass in `relative to current working direcotry` paths.
 */

function symlinkPaths (srcpath, dstpath, callback) {
  if (path.isAbsolute(srcpath)) {
    return fs.lstat(srcpath, function (err, stat) {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureSymlink')
        return callback(err)
      }
      return callback(null, {
        'toCwd': srcpath,
        'toDst': srcpath
      })
    })
  } else {
    var dstdir = path.dirname(dstpath)
    var relativeToDst = path.join(dstdir, srcpath)
    return fs.exists(relativeToDst, function (exists) {
      if (exists) {
        return callback(null, {
          'toCwd': relativeToDst,
          'toDst': srcpath
        })
      } else {
        return fs.lstat(srcpath, function (err, stat) {
          if (err) {
            err.message = err.message.replace('lstat', 'ensureSymlink')
            return callback(err)
          }
          return callback(null, {
            'toCwd': srcpath,
            'toDst': path.relative(dstdir, srcpath)
          })
        })
      }
    })
  }
}

function symlinkPathsSync (srcpath, dstpath) {
  var exists
  if (path.isAbsolute(srcpath)) {
    exists = fs.existsSync(srcpath)
    if (!exists) throw new Error('absolute srcpath does not exist')
    return {
      'toCwd': srcpath,
      'toDst': srcpath
    }
  } else {
    var dstdir = path.dirname(dstpath)
    var relativeToDst = path.join(dstdir, srcpath)
    exists = fs.existsSync(relativeToDst)
    if (exists) {
      return {
        'toCwd': relativeToDst,
        'toDst': srcpath
      }
    } else {
      exists = fs.existsSync(srcpath)
      if (!exists) throw new Error('relative srcpath does not exist')
      return {
        'toCwd': srcpath,
        'toDst': path.relative(dstdir, srcpath)
      }
    }
  }
}

module.exports = {
  'symlinkPaths': symlinkPaths,
  'symlinkPathsSync': symlinkPathsSync
}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var fs = __webpack_require__(3)

function symlinkType (srcpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type
  if (type) return callback(null, type)
  fs.lstat(srcpath, function (err, stats) {
    if (err) return callback(null, 'file')
    type = (stats && stats.isDirectory()) ? 'dir' : 'file'
    callback(null, type)
  })
}

function symlinkTypeSync (srcpath, type) {
  if (type) return type
  try {
    var stats = fs.lstatSync(srcpath)
  } catch (e) {
    return 'file'
  }
  return (stats && stats.isDirectory()) ? 'dir' : 'file'
}

module.exports = {
  symlinkType: symlinkType,
  symlinkTypeSync: symlinkTypeSync
}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

var path = __webpack_require__(1)
var fs = __webpack_require__(3)
var _mkdirs = __webpack_require__(4)
var mkdirs = _mkdirs.mkdirs
var mkdirsSync = _mkdirs.mkdirsSync

var _symlinkPaths = __webpack_require__(25)
var symlinkPaths = _symlinkPaths.symlinkPaths
var symlinkPathsSync = _symlinkPaths.symlinkPathsSync

var _symlinkType = __webpack_require__(26)
var symlinkType = _symlinkType.symlinkType
var symlinkTypeSync = _symlinkType.symlinkTypeSync

function createSymlink (srcpath, dstpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type

  fs.exists(dstpath, function (destinationExists) {
    if (destinationExists) return callback(null)
    symlinkPaths(srcpath, dstpath, function (err, relative) {
      if (err) return callback(err)
      srcpath = relative.toDst
      symlinkType(relative.toCwd, type, function (err, type) {
        if (err) return callback(err)
        var dir = path.dirname(dstpath)
        fs.exists(dir, function (dirExists) {
          if (dirExists) return fs.symlink(srcpath, dstpath, type, callback)
          mkdirs(dir, function (err) {
            if (err) return callback(err)
            fs.symlink(srcpath, dstpath, type, callback)
          })
        })
      })
    })
  })
}

function createSymlinkSync (srcpath, dstpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type

  var destinationExists = fs.existsSync(dstpath)
  if (destinationExists) return undefined

  var relative = symlinkPathsSync(srcpath, dstpath)
  srcpath = relative.toDst
  type = symlinkTypeSync(relative.toCwd, type)
  var dir = path.dirname(dstpath)
  var exists = fs.existsSync(dir)
  if (exists) return fs.symlinkSync(srcpath, dstpath, type)
  mkdirsSync(dir)
  return fs.symlinkSync(srcpath, dstpath, type)
}

module.exports = {
  createSymlink: createSymlink,
  createSymlinkSync: createSymlinkSync,
  // alias
  ensureSymlink: createSymlink,
  ensureSymlinkSync: createSymlinkSync
}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var assign = __webpack_require__(32)

var fse = {}
var gfs = __webpack_require__(3)

// attach fs methods to fse
Object.keys(gfs).forEach(function (key) {
  fse[key] = gfs[key]
})

var fs = fse

assign(fs, __webpack_require__(20))
assign(fs, __webpack_require__(18))
assign(fs, __webpack_require__(4))
assign(fs, __webpack_require__(13))
assign(fs, __webpack_require__(29))
assign(fs, __webpack_require__(30))
assign(fs, __webpack_require__(21))
assign(fs, __webpack_require__(23))
assign(fs, __webpack_require__(31))
assign(fs, __webpack_require__(34))

module.exports = fs

// maintain backwards compatibility for awhile
var jsonfile = {}
Object.defineProperty(jsonfile, 'spaces', {
  get: function () {
    return fs.spaces // found in ./json
  },
  set: function (val) {
    fs.spaces = val
  }
})

module.exports.jsonfile = jsonfile // so users of fs-extra can modify jsonFile.spaces


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

var jsonFile = __webpack_require__(5)

jsonFile.outputJsonSync = __webpack_require__(10)
jsonFile.outputJson = __webpack_require__(11)
// aliases
jsonFile.outputJSONSync = __webpack_require__(10)
jsonFile.outputJSON = __webpack_require__(11)

module.exports = jsonFile


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

// most of this code was written by Andrew Kelley
// licensed under the BSD license: see
// https://github.com/andrewrk/node-mv/blob/master/package.json

// this needs a cleanup

var fs = __webpack_require__(3)
var ncp = __webpack_require__(9)
var path = __webpack_require__(1)
var rimraf = __webpack_require__(14)
var mkdirp = __webpack_require__(4).mkdirs

function mv (source, dest, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  var shouldMkdirp = ('mkdirp' in options) ? options.mkdirp : true
  var clobber = ('clobber' in options) ? options.clobber : false

  var limit = options.limit || 16

  if (shouldMkdirp) {
    mkdirs()
  } else {
    doRename()
  }

  function mkdirs () {
    mkdirp(path.dirname(dest), function (err) {
      if (err) return callback(err)
      doRename()
    })
  }

  function doRename () {
    if (clobber) {
      fs.rename(source, dest, function (err) {
        if (!err) return callback()

        if (err.code === 'ENOTEMPTY' || err.code === 'EEXIST') {
          rimraf(dest, function (err) {
            if (err) return callback(err)
            options.clobber = false // just clobbered it, no need to do it again
            mv(source, dest, options, callback)
          })
          return
        }

        // weird Windows shit
        if (err.code === 'EPERM') {
          setTimeout(function () {
            rimraf(dest, function (err) {
              if (err) return callback(err)
              options.clobber = false
              mv(source, dest, options, callback)
            })
          }, 200)
          return
        }

        if (err.code !== 'EXDEV') return callback(err)
        moveAcrossDevice(source, dest, clobber, limit, callback)
      })
    } else {
      fs.link(source, dest, function (err) {
        if (err) {
          if (err.code === 'EXDEV' || err.code === 'EISDIR' || err.code === 'EPERM') {
            moveAcrossDevice(source, dest, clobber, limit, callback)
            return
          }
          callback(err)
          return
        }
        fs.unlink(source, callback)
      })
    }
  }
}

function moveAcrossDevice (source, dest, clobber, limit, callback) {
  fs.stat(source, function (err, stat) {
    if (err) {
      callback(err)
      return
    }

    if (stat.isDirectory()) {
      moveDirAcrossDevice(source, dest, clobber, limit, callback)
    } else {
      moveFileAcrossDevice(source, dest, clobber, limit, callback)
    }
  })
}

function moveFileAcrossDevice (source, dest, clobber, limit, callback) {
  var outFlags = clobber ? 'w' : 'wx'
  var ins = fs.createReadStream(source)
  var outs = fs.createWriteStream(dest, {flags: outFlags})

  ins.on('error', function (err) {
    ins.destroy()
    outs.destroy()
    outs.removeListener('close', onClose)

    // may want to create a directory but `out` line above
    // creates an empty file for us: See #108
    // don't care about error here
    fs.unlink(dest, function () {
      // note: `err` here is from the input stream errror
      if (err.code === 'EISDIR' || err.code === 'EPERM') {
        moveDirAcrossDevice(source, dest, clobber, limit, callback)
      } else {
        callback(err)
      }
    })
  })

  outs.on('error', function (err) {
    ins.destroy()
    outs.destroy()
    outs.removeListener('close', onClose)
    callback(err)
  })

  outs.once('close', onClose)
  ins.pipe(outs)

  function onClose () {
    fs.unlink(source, callback)
  }
}

function moveDirAcrossDevice (source, dest, clobber, limit, callback) {
  var options = {
    stopOnErr: true,
    clobber: false,
    limit: limit
  }

  function startNcp () {
    ncp(source, dest, options, function (errList) {
      if (errList) return callback(errList[0])
      rimraf(source, callback)
    })
  }

  if (clobber) {
    rimraf(dest, function (err) {
      if (err) return callback(err)
      startNcp()
    })
  } else {
    startNcp()
  }
}

module.exports = {
  move: mv
}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

var path = __webpack_require__(1)
var fs = __webpack_require__(3)
var mkdir = __webpack_require__(4)

function outputFile (file, data, encoding, callback) {
  if (typeof encoding === 'function') {
    callback = encoding
    encoding = 'utf8'
  }

  var dir = path.dirname(file)
  fs.exists(dir, function (itDoes) {
    if (itDoes) return fs.writeFile(file, data, encoding, callback)

    mkdir.mkdirs(dir, function (err) {
      if (err) return callback(err)

      fs.writeFile(file, data, encoding, callback)
    })
  })
}

function outputFileSync (file, data, encoding) {
  var dir = path.dirname(file)
  if (fs.existsSync(dir)) {
    return fs.writeFileSync.apply(fs, arguments)
  }
  mkdir.mkdirsSync(dir)
  fs.writeFileSync.apply(fs, arguments)
}

module.exports = {
  outputFile: outputFile,
  outputFileSync: outputFileSync
}


/***/ },
/* 32 */
/***/ function(module, exports) {

// simple mutable assign
function assign () {
  var args = [].slice.call(arguments).filter(function (i) { return i })
  var dest = args.shift()
  args.forEach(function (src) {
    Object.keys(src).forEach(function (key) {
      dest[key] = src[key]
    })
  })

  return dest
}

module.exports = assign


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

var fs = __webpack_require__(3)
var path = __webpack_require__(1)
var os = __webpack_require__(40)

// HFS, ext{2,3}, FAT do not, Node.js v0.10 does not
function hasMillisResSync () {
  var tmpfile = path.join('millis-test-sync' + Date.now().toString() + Math.random().toString().slice(2))
  tmpfile = path.join(os.tmpdir(), tmpfile)

  // 550 millis past UNIX epoch
  var d = new Date(1435410243862)
  fs.writeFileSync(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141')
  var fd = fs.openSync(tmpfile, 'r+')
  fs.futimesSync(fd, d, d)
  fs.closeSync(fd)
  return fs.statSync(tmpfile).mtime > 1435410243000
}

function hasMillisRes (callback) {
  var tmpfile = path.join('millis-test' + Date.now().toString() + Math.random().toString().slice(2))
  tmpfile = path.join(os.tmpdir(), tmpfile)

  // 550 millis past UNIX epoch
  var d = new Date(1435410243862)
  fs.writeFile(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141', function (err) {
    if (err) return callback(err)
    fs.open(tmpfile, 'r+', function (err, fd) {
      if (err) return callback(err)
      fs.futimes(fd, d, d, function (err) {
        if (err) return callback(err)
        fs.close(fd, function (err) {
          if (err) return callback(err)
          fs.stat(tmpfile, function (err, stats) {
            if (err) return callback(err)
            callback(null, stats.mtime > 1435410243000)
          })
        })
      })
    })
  })
}

function timeRemoveMillis (timestamp) {
  if (typeof timestamp === 'number') {
    return Math.floor(timestamp / 1000) * 1000
  } else if (timestamp instanceof Date) {
    return new Date(Math.floor(timestamp.getTime() / 1000) * 1000)
  } else {
    throw new Error('fs-extra: timeRemoveMillis() unknown parameter type')
  }
}

function utimesMillis (path, atime, mtime, callback) {
  // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
  fs.open(path, 'r+', function (err, fd) {
    if (err) return callback(err)
    fs.futimes(fd, atime, mtime, function (err) {
      if (err) return callback(err)
      fs.close(fd, callback)
    })
  })
}

module.exports = {
  hasMillisRes: hasMillisRes,
  hasMillisResSync: hasMillisResSync,
  timeRemoveMillis: timeRemoveMillis,
  utimesMillis: utimesMillis
}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

var klaw = __webpack_require__(37)

module.exports = {
  walk: klaw
}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

var _fs
try {
  _fs = __webpack_require__(3)
} catch (_) {
  _fs = __webpack_require__(8)
}

function readFile (file, options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }

  if (typeof options === 'string') {
    options = {encoding: options}
  }

  options = options || {}
  var fs = options.fs || _fs

  var shouldThrow = true
  // DO NOT USE 'passParsingErrors' THE NAME WILL CHANGE!!!, use 'throws' instead
  if ('passParsingErrors' in options) {
    shouldThrow = options.passParsingErrors
  } else if ('throws' in options) {
    shouldThrow = options.throws
  }

  fs.readFile(file, options, function (err, data) {
    if (err) return callback(err)

    data = stripBom(data)

    var obj
    try {
      obj = JSON.parse(data, options ? options.reviver : null)
    } catch (err2) {
      if (shouldThrow) {
        err2.message = file + ': ' + err2.message
        return callback(err2)
      } else {
        return callback(null, null)
      }
    }

    callback(null, obj)
  })
}

function readFileSync (file, options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {encoding: options}
  }

  var fs = options.fs || _fs

  var shouldThrow = true
  // DO NOT USE 'passParsingErrors' THE NAME WILL CHANGE!!!, use 'throws' instead
  if ('passParsingErrors' in options) {
    shouldThrow = options.passParsingErrors
  } else if ('throws' in options) {
    shouldThrow = options.throws
  }

  var content = fs.readFileSync(file, options)
  content = stripBom(content)

  try {
    return JSON.parse(content, options.reviver)
  } catch (err) {
    if (shouldThrow) {
      err.message = file + ': ' + err.message
      throw err
    } else {
      return null
    }
  }
}

function writeFile (file, obj, options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }
  options = options || {}
  var fs = options.fs || _fs

  var spaces = typeof options === 'object' && options !== null
    ? 'spaces' in options
    ? options.spaces : this.spaces
    : this.spaces

  var str = ''
  try {
    str = JSON.stringify(obj, options ? options.replacer : null, spaces) + '\n'
  } catch (err) {
    if (callback) return callback(err, null)
  }

  fs.writeFile(file, str, options, callback)
}

function writeFileSync (file, obj, options) {
  options = options || {}
  var fs = options.fs || _fs

  var spaces = typeof options === 'object' && options !== null
    ? 'spaces' in options
    ? options.spaces : this.spaces
    : this.spaces

  var str = JSON.stringify(obj, options.replacer, spaces) + '\n'
  // not sure if fs.writeFileSync returns anything, but just in case
  return fs.writeFileSync(file, str, options)
}

function stripBom (content) {
  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
  if (Buffer.isBuffer(content)) content = content.toString('utf8')
  content = content.replace(/^\uFEFF/, '')
  return content
}

var jsonfile = {
  spaces: null,
  readFile: readFile,
  readFileSync: readFileSync,
  writeFile: writeFile,
  writeFileSync: writeFileSync
}

module.exports = jsonfile


/***/ },
/* 36 */
/***/ function(module, exports) {

// simple mutable assign (extracted from fs-extra)
// I really like object-assign package, but I wanted a lean package with zero deps
function _assign () {
  var args = [].slice.call(arguments).filter(function (i) { return i })
  var dest = args.shift()
  args.forEach(function (src) {
    Object.keys(src).forEach(function (key) {
      dest[key] = src[key]
    })
  })

  return dest
}

// thank you baby Jesus for Node v4 and Object.assign
module.exports = Object.assign || _assign


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(38)
var fs
try {
  fs = __webpack_require__(3)
} catch (e) {
  fs = __webpack_require__(8)
}
var path = __webpack_require__(1)
var Readable = __webpack_require__(42).Readable
var util = __webpack_require__(43)
var assign = __webpack_require__(36)

function Walker (dir, options) {
  assert.strictEqual(typeof dir, 'string', '`dir` parameter should be of type string. Got type: ' + typeof dir)
  var defaultStreamOptions = { objectMode: true }
  var defaultOpts = { queueMethod: 'shift', pathSorter: undefined, filter: undefined }
  options = assign(defaultOpts, options, defaultStreamOptions)

  Readable.call(this, options)
  this.root = path.resolve(dir)
  this.paths = [this.root]
  this.options = options
  this.fs = options.fs || fs // mock-fs
}
util.inherits(Walker, Readable)

Walker.prototype._read = function () {
  if (this.paths.length === 0) return this.push(null)
  var self = this
  var pathItem = this.paths[this.options.queueMethod]()

  self.fs.lstat(pathItem, function (err, stats) {
    var item = { path: pathItem, stats: stats }
    if (err) return self.emit('error', err, item)
    if (!stats.isDirectory()) return self.push(item)

    self.fs.readdir(pathItem, function (err, pathItems) {
      if (err) {
        self.push(item)
        return self.emit('error', err, item)
      }

      pathItems = pathItems.map(function (part) { return path.join(pathItem, part) })
      if (self.options.filter) pathItems = pathItems.filter(self.options.filter)
      if (self.options.pathSorter) pathItems.sort(self.options.pathSorter)
      pathItems.forEach(function (pi) { self.paths.push(pi) })

      self.push(item)
    })
  })
}

function walk (root, options) {
  return new Walker(root, options)
}

module.exports = walk


/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = require("assert");

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("chalk");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("os");

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = require("path-is-absolute");

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("stream");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("util");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (true) {
    // Node.
    module.exports = pluralize();
  } else if (typeof define === 'function' && define.amd) {
    // AMD, registers as an anonymous module.
    define(function () {
      return pluralize();
    });
  } else {
    // Browser global.
    root.pluralize = pluralize();
  }
})(this, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Title case a string.
   *
   * @param  {string} str
   * @return {string}
   */
  function toTitleCase (str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  }

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule (rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase (word, token) {
    // Upper cased words. E.g. "HELLO".
    if (word === word.toUpperCase()) {
      return token.toUpperCase();
    }

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return toTitleCase(token);
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate (str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {String}   token
   * @param  {String}   word
   * @param  {Array}    collection
   * @return {String}
   */
  function sanitizeWord (token, word, collection) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = collection.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = collection[len];

      // If the rule passes, return the replacement.
      if (rule[0].test(word)) {
        return word.replace(rule[0], function (match, index, word) {
          var result = interpolate(rule[1], arguments);

          if (match === '') {
            return restoreCase(word[index - 1], result);
          }

          return restoreCase(match, result);
        });
      }
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord (replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {String}  word
   * @param  {Number}  count
   * @param  {Boolean} inclusive
   * @return {String}
   */
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {String} single
   * @param {String} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['was', 'were'],
    ['has', 'have'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['looey', 'looies'],
    ['thief', 'thieves'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['whiskey', 'whiskies']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/(m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'],
    [/(^analy)(?:sis|ses)$/i, '$1sis'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/ies$/i, 'y'],
    [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
    [/\b(mon|smil)ies$/i, '$1ey'],
    [/(m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'],
    [/(e[mn]u)s?$/i, '$1'],
    [/(movie|twelve)s$/i, '$1'],
    [/(cris|test|diagnos)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'advice',
    'adulthood',
    'agenda',
    'aid',
    'alcohol',
    'ammo',
    'athletics',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'commerce',
    'cod',
    'cooperation',
    'corps',
    'digestion',
    'debris',
    'diabetes',
    'energy',
    'equipment',
    'elk',
    'excretion',
    'expertise',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'news',
    'pike',
    'plankton',
    'pliers',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'species',
    'staff',
    'swine',
    'trout',
    'traffic',
    'transporation',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    // Regexes.
    /pox$/i, // "chickpox", "smallpox"
    /ois$/i,
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /sheep$/i,
    /measles$/i,
    /[^aeiou]ese$/i // "chinese", "japanese"
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map