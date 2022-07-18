/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "a {\n    text-decoration: none;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 100px 4fr 1fr;\n    grid-template-columns: minmax(150px, 10vw) 1fr;\n    margin: 0;\n    height: 100vh;\n}\n\nheader {\n    display: grid;\n    background-color: #1F2937;\n    grid-column: 1 / 3;\n    max-height: 100px;\n}\n\n.rightLinks,\n.rightLinks>a {\n    display: flex;\n    margin-left: auto;\n    gap: 20px;\n    color: #E5E7EB;\n    align-items: center;\n    margin-right: 20px;\n}\n\nheader>img {\n    max-width: 100px;\n    max-height: 100px;\n    grid-column: 1;\n}\n\nheader>h2 {\n    grid-column: 2;\n    color: #E5E7EB;\n}\n\nheader>.rightLinks {\n    grid-column: 3;\n}\n\n.tasks {\n    grid-column: 1;\n    grid-row: 2 / -1;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    background-color: #1F2937;\n    padding: 10px;\n}\n\n.tasks>p {\n    text-align: center;\n    color: #E5E7EB;\n}\n\n.tasks>a {\n    padding: 0;\n    margin-left: 5px;\n    text-align: left;\n    color: #E5E7EB;\n}\n\n#cards {\n    margin: 20px;\n    display: grid;\n    grid-column: 2;\n    grid-template-columns: repeat(auto-fit, 200px);\n    grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 40px;\n}\n\n.project>p {\n    margin: 10px;\n    max-width: 200px;\n}\n\n.project>img,\n.project>*>img {\n    border: 0.25em;\n    border-color: #3882F6;\n    border-style: solid;\n    border-radius: 20px;\n    width: 200px;\n    height: 200px;\n    object-fit: cover;\n}\n\nbody>footer {\n    position: sticky;\n    top: 100vh;\n    background-color: #1F2937;\n    color: #F9FAF8;\n    text-align: center;\n    grid-column: 1 / 3;\n}\n\n@keyframes TransitioningBackground {\n    0% {\n        background-position: 1% 0%;\n    }\n\n    50% {\n        background-position: 99% 100%;\n    }\n\n    100% {\n        background-position: 1% 0%;\n    }\n}\n\n/* \nThe following CSS shamelessly borrowed from \nhttps://blog.bitsrc.io/pure-css-to-make-a-button-shine-and-gently-change-colors-over-time-5b685d9c6a7e \nPaige Niedringhaus\n*/\n\n#add_task {\n    font-size: 1rem;\n    font-weight: 600;\n    color: black;\n    text-align: center;\n    /* width: 200px;\n    height: 60px; */\n    border-radius: 5px;\n    /* for shine & gradient effects to work */\n    position: relative;\n    overflow: hidden;\n    /* for background color shift */\n    background-image: linear-gradient(270deg, rgba(2, 151, 157, 0.7), rgba(229, 231, 235, 0.7));\n    background-size: 200% 200%;\n    animation: TransitioningBackground 10s ease infinite;\n    /* to ease the button growth on hover */\n    transition: 0.6s;\n}\n\n/* psuedo-element shine animation left side */\n#add_task::before {\n    content: '';\n    display: block;\n    position: absolute;\n    background: rgb(0, 0, 0);\n    width: 60px;\n    height: 100%;\n    top: 0;\n    filter: blur(30px);\n    transform: translateX(-100px) skewX(-15deg);\n}\n\n/* psuedo-element shine animation right side */\n#add_task::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: rgb(0, 0, 0);\n    width: 30px;\n    height: 100%;\n    top: 0;\n    filter: blur(5px);\n    transform: translateX(-100px) skewX(-15deg);\n}\n\n/* grow button and change background gradient on hover */\n#add_task:hover {\n    background-image: linear-gradient(270deg, rgba(2, 151, 157, 0.7), rgba(229, 231, 235, 0.7));\n    transform: scale(1.2);\n    cursor: pointer;\n}\n\n/* psuedo-elements for right- and left-side shine animations */\n#add_task::before,\n#add_task::after {\n    transform: translateX(300px) skewX(-15deg);\n    transition: 0.7s;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,8CAA8C;IAC9C,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,iBAAiB;IACjB,SAAS;IACT,cAAc;IACd,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,cAAc;IACd,8CAA8C;IAC9C,wDAAwD;IACxD,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;;IAEI,cAAc;IACd,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI;QACI,0BAA0B;IAC9B;;IAEA;QACI,6BAA6B;IACjC;;IAEA;QACI,0BAA0B;IAC9B;AACJ;;AAEA;;;;CAIC;;AAED;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB;mBACe;IACf,kBAAkB;IAClB,yCAAyC;IACzC,kBAAkB;IAClB,gBAAgB;IAChB,+BAA+B;IAC/B,2FAA2F;IAC3F,0BAA0B;IAC1B,oDAAoD;IACpD,uCAAuC;IACvC,gBAAgB;AACpB;;AAEA,6CAA6C;AAC7C;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,MAAM;IACN,kBAAkB;IAClB,2CAA2C;AAC/C;;AAEA,8CAA8C;AAC9C;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,MAAM;IACN,iBAAiB;IACjB,2CAA2C;AAC/C;;AAEA,wDAAwD;AACxD;IACI,2FAA2F;IAC3F,qBAAqB;IACrB,eAAe;AACnB;;AAEA,8DAA8D;AAC9D;;IAEI,0CAA0C;IAC1C,gBAAgB;AACpB","sourcesContent":["a {\n    text-decoration: none;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 100px 4fr 1fr;\n    grid-template-columns: minmax(150px, 10vw) 1fr;\n    margin: 0;\n    height: 100vh;\n}\n\nheader {\n    display: grid;\n    background-color: #1F2937;\n    grid-column: 1 / 3;\n    max-height: 100px;\n}\n\n.rightLinks,\n.rightLinks>a {\n    display: flex;\n    margin-left: auto;\n    gap: 20px;\n    color: #E5E7EB;\n    align-items: center;\n    margin-right: 20px;\n}\n\nheader>img {\n    max-width: 100px;\n    max-height: 100px;\n    grid-column: 1;\n}\n\nheader>h2 {\n    grid-column: 2;\n    color: #E5E7EB;\n}\n\nheader>.rightLinks {\n    grid-column: 3;\n}\n\n.tasks {\n    grid-column: 1;\n    grid-row: 2 / -1;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    background-color: #1F2937;\n    padding: 10px;\n}\n\n.tasks>p {\n    text-align: center;\n    color: #E5E7EB;\n}\n\n.tasks>a {\n    padding: 0;\n    margin-left: 5px;\n    text-align: left;\n    color: #E5E7EB;\n}\n\n#cards {\n    margin: 20px;\n    display: grid;\n    grid-column: 2;\n    grid-template-columns: repeat(auto-fit, 200px);\n    grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 40px;\n}\n\n.project>p {\n    margin: 10px;\n    max-width: 200px;\n}\n\n.project>img,\n.project>*>img {\n    border: 0.25em;\n    border-color: #3882F6;\n    border-style: solid;\n    border-radius: 20px;\n    width: 200px;\n    height: 200px;\n    object-fit: cover;\n}\n\nbody>footer {\n    position: sticky;\n    top: 100vh;\n    background-color: #1F2937;\n    color: #F9FAF8;\n    text-align: center;\n    grid-column: 1 / 3;\n}\n\n@keyframes TransitioningBackground {\n    0% {\n        background-position: 1% 0%;\n    }\n\n    50% {\n        background-position: 99% 100%;\n    }\n\n    100% {\n        background-position: 1% 0%;\n    }\n}\n\n/* \nThe following CSS shamelessly borrowed from \nhttps://blog.bitsrc.io/pure-css-to-make-a-button-shine-and-gently-change-colors-over-time-5b685d9c6a7e \nPaige Niedringhaus\n*/\n\n#add_task {\n    font-size: 1rem;\n    font-weight: 600;\n    color: black;\n    text-align: center;\n    /* width: 200px;\n    height: 60px; */\n    border-radius: 5px;\n    /* for shine & gradient effects to work */\n    position: relative;\n    overflow: hidden;\n    /* for background color shift */\n    background-image: linear-gradient(270deg, rgba(2, 151, 157, 0.7), rgba(229, 231, 235, 0.7));\n    background-size: 200% 200%;\n    animation: TransitioningBackground 10s ease infinite;\n    /* to ease the button growth on hover */\n    transition: 0.6s;\n}\n\n/* psuedo-element shine animation left side */\n#add_task::before {\n    content: '';\n    display: block;\n    position: absolute;\n    background: rgb(0, 0, 0);\n    width: 60px;\n    height: 100%;\n    top: 0;\n    filter: blur(30px);\n    transform: translateX(-100px) skewX(-15deg);\n}\n\n/* psuedo-element shine animation right side */\n#add_task::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: rgb(0, 0, 0);\n    width: 30px;\n    height: 100%;\n    top: 0;\n    filter: blur(5px);\n    transform: translateX(-100px) skewX(-15deg);\n}\n\n/* grow button and change background gradient on hover */\n#add_task:hover {\n    background-image: linear-gradient(270deg, rgba(2, 151, 157, 0.7), rgba(229, 231, 235, 0.7));\n    transform: scale(1.2);\n    cursor: pointer;\n}\n\n/* psuedo-elements for right- and left-side shine animations */\n#add_task::before,\n#add_task::after {\n    transform: translateX(300px) skewX(-15deg);\n    transition: 0.7s;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/cardCreator.js":
/*!****************************!*\
  !*** ./src/cardCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ card)
/* harmony export */ });
// Expand this function to create a full-fledged element on the page
// that has all the funcionality required of a ToDo/Task object
function card(container_element, card_class, TaskObject) {
    let container = document.getElementById(container_element);


    let card = document.createElement("div");
    card.setAttribute("class", card_class);
    // Add "priority" as class attr to allow sorting later?
    card.setAttribute("class", TaskObject.priority);
    card.setAttribute("id", TaskObject.id);

    let name_of_card = document.createElement("h3");
    name_of_card.textContent = TaskObject.name;
    card.appendChild(name_of_card);

    let description_of_card = document.createElement("p");
    description_of_card.textContent = TaskObject.description;
    card.appendChild(description_of_card);

    let due_date = document.createElement("p");
    due_date.textContent = TaskObject.due;
    card.appendChild(due_date);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "Completed";
    checkbox.id = `${TaskObject.id}_checkbox`;
    checkbox.value = TaskObject.completed;
    checkbox.addEventListener("click", (e) => {
        if (TaskObject.completed == false) {
            checkbox.value = true;
            TaskObject.completed = true;
        } else {
            checkbox.value = false;
            TaskObject.completed = false;
        };
    })
    card.appendChild(checkbox);

    container.appendChild(card);

    return card;
};

/***/ }),

/***/ "./src/classPopup.js":
/*!***************************!*\
  !*** ./src/classPopup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HiddenModalElement)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _cardCreator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardCreator.js */ "./src/cardCreator.js");

// I don't necessarily want this module to depend on Task or Card. I want
// to be able to use it for any popup form on any page.
// So instead of importing, I need to allow it to be created with calls
// to those functions. The integration should be done in index.js.....




// Make a class to hold the form and its labels
// Should I create the HiddenFormElement, then add a 
// method to add fields? I think so.
class HiddenModalElement {
    constructor(modal_id, parent_element, activation_button_id, array_to_export_to) {
        this.id = modal_id;
        this.parent = document.getElementById(parent_element);
        this.activation_button = document.getElementById(activation_button_id)
        this.array_of_children = [];
        this.submit_buttons_array = [];
        this.modal = document.createElement("modal");
        this.modal.setAttribute("id", this.id);

        this.activation_button.addEventListener("click", (e) => {
            if (this.parent.style.display == "none") {
                this.parent.style.display = "grid";
            } else {
                this.parent.style.display = "none";
            };
        });

        this.array_to_export_to = array_to_export_to;
        this.parent.style.display = "none";
    };

    add_input(new_input, type = "text") {

        let input_to_add = document.createElement("input");
        input_to_add.type = type;
        let input_spaces_removed = new_input.replace(/ /g, "");
        input_to_add.id = input_spaces_removed.toLowerCase();
        input_to_add.class = "input_field";

        let label_for_input = document.createElement("label");
        label_for_input.htmlFor = input_to_add;
        label_for_input.textContent = new_input;

        this.array_of_children.push(label_for_input);
        this.array_of_children.push(input_to_add);
        //Do I need to save that id anywhere other than the array?

    };

    append_to_parent() {
        for (let x = 0; x < this.array_of_children.length; x++) {
            this.parent.appendChild(this.array_of_children[x]);
        };
    }

    make_hidden() {
        this.parent.style.display = "none";
        this.parent.setAttribute("class", "hidden");
    };

    add_buttons() {
        let clear_form_button = document.createElement("button");
        clear_form_button.textContent = "Clear Form";
        clear_form_button.addEventListener("click", (e) => {
            for (let x = 0; x < this.array_of_children.length; x++) {
                if (this.array_of_children[x].class == "input_field") {
                    this.array_of_children[x].value = "";
                };
            }
        });

        let create_another_button = document.createElement("button");
        this.submit_buttons_array.push(create_another_button);
        create_another_button.textContent = "Create Another";
        create_another_button.addEventListener("click", (e) => {
            for (let x = 0; x < this.array_of_children.length; x++) {
                if (this.array_of_children[x].class == "input_field") {
                    this.array_of_children[x].value = "";
                };
            };
        });

        let submit_button = document.createElement("button");
        this.submit_buttons_array.push(submit_button);
        submit_button.textContent = "Submit";
        submit_button.addEventListener("click", (e) => {
            this.parent.style.display = "none";
            for (let x = 0; x < this.array_of_children.length; x++) {
                if (this.array_of_children[x].class == "input_field") {
                    this.array_of_children[x].value = "";
                };
            };
        });

        let close_popup_button = document.createElement("button");
        close_popup_button.textContent = "Close";
        close_popup_button.addEventListener("click", (e) => this.parent.style.display = "none");
        close_popup_button.addEventListener("click", (e) => {
            for (let x = 0; x < this.array_of_children.length; x++) {
                if (this.array_of_children[x].class == "input_field") {
                    this.array_of_children[x].value = "";
                };
            }
        });

        this.parent.appendChild(clear_form_button);
        this.parent.appendChild(submit_button);
        this.parent.appendChild(create_another_button);
    };
};

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
// expand the attributes and functions of the Task class to handle
// creation and deletion of each object. Where to put the array or
// dictionary that holds all of the Tasks until they are saved to
// local storage?

class Task {
    // priority of 0 is the highest priority
    // need to figure out a better way for default value of task_name to prevent
    // duplication and html id conflicts
    constructor(task_name = "Task", description = "", due = 0, priority = 0, completed = false) {
        this.name = task_name;
        this.id = task_name.toLowerCase().replace(/\s/g, "");
        this.description = description;
        this.due = due;
        this.priority = priority;
        this.completed = completed;
    };
    // Validate each attribute to prevent invalid values
    // is that SOP for using classes? Prevent creation of object
    // if input value is invalid?

    // make a deleter method for the class to remove it from existence?
    // or does that go elsewheres? local_storage?
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _cardCreator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardCreator.js */ "./src/cardCreator.js");
/* harmony import */ var _classPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classPopup.js */ "./src/classPopup.js");



// import { TaskInputFieldCreator, PopupFormButtons } from "./popupForm.js";


// a manual use of the Task class to create a Task object.
let exampleTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Testtask", "Description of task", "Aug 1", "0");

let example_task_with_spaces = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Test Task", "This task has spaces", "Aug 1", "2");

let modal_fields_array = [
    "Task Name",
    "Description of Task",
    "Due Date",
    "Priority",
];

let values_of_input_fields = [];

let popup_modal = new _classPopup_js__WEBPACK_IMPORTED_MODULE_3__["default"]("popup_modal", "modal", "add_task", values_of_input_fields);
for (let x = 0; x < modal_fields_array.length; x++) {
    popup_modal.add_input(modal_fields_array[x], "text");
};
popup_modal.append_to_parent();
popup_modal.add_buttons();
popup_modal.make_hidden();
console.log(popup_modal.submit_buttons_array)




// the function below isn't going to work, since while the values are exported, they
// can only be exported when the user clicks on the "submit" type of button. So....
// I need an event listener. Where to put it? And it needs to call the card() function
// when the button is pressed, to create the card!?


// card("cards", "project", ());
// Now that the modal pops up and disappears with no issues, and the inputs
// appear as well, its also time to give the modal the ability to create an object using
// the Task class creator, and append that to the DOM. That should be... called
// by and in the modal module? IDK. Or here?

// Once the modal is able to create a task, automate the creation of a card.
// Would that be within the Task module? As a method of the Task class?

// Should the modal simply return a list of strings (The information for a Task object),
// which would then
// be used by Task? I think so. I would have to refactor Task to accept an array
// instead of multiple args.

// Then create a card using the Task object! Automate that... how?


// invoking a new card with object of class Task, allowing card function
// to handle creation and appending of Task to DOM.
;(0,_cardCreator_js__WEBPACK_IMPORTED_MODULE_2__["default"])("cards", "project", exampleTask);
(0,_cardCreator_js__WEBPACK_IMPORTED_MODULE_2__["default"])("cards", "project", example_task_with_spaces);

// create a separate module for the popup form input, to create new tasks from the
// #add_task button. Use the "library" input form as an example to work from.

// figure out how to use local_storage module to save the added task to user's local
// storage.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDTztBQUNRO0FBQ3BDLFlBQVksMENBQTBDO0FBQ047O0FBRWhEO0FBQ0Esc0JBQXNCLGdEQUFJOztBQUUxQixtQ0FBbUMsZ0RBQUk7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzQkFBc0Isc0RBQWtCO0FBQ3hDLGdCQUFnQiwrQkFBK0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSw0REFBSTtBQUNKLDJEQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NhcmRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NsYXNzUG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1MHB4LCAxMHZ3KSAxZnI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjkzNztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLnJpZ2h0TGlua3MsXFxuLnJpZ2h0TGlua3M+YSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGNvbG9yOiAjRTVFN0VCO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbmhlYWRlcj5pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxufVxcblxcbmhlYWRlcj5oMiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBjb2xvcjogI0U1RTdFQjtcXG59XFxuXFxuaGVhZGVyPi5yaWdodExpbmtzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMiAvIC0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YXNrcz5wIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0U1RTdFQjtcXG59XFxuXFxuLnRhc2tzPmEge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogI0U1RTdFQjtcXG59XFxuXFxuI2NhcmRzIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDIwMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLnByb2plY3Q+cCB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnByb2plY3Q+aW1nLFxcbi5wcm9qZWN0Pio+aW1nIHtcXG4gICAgYm9yZGVyOiAwLjI1ZW07XFxuICAgIGJvcmRlci1jb2xvcjogIzM4ODJGNjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuYm9keT5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xcbiAgICBjb2xvcjogI0Y5RkFGODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbkBrZXlmcmFtZXMgVHJhbnNpdGlvbmluZ0JhY2tncm91bmQge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxJSAwJTtcXG4gICAgfVxcblxcbiAgICA1MCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTklIDEwMCU7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxJSAwJTtcXG4gICAgfVxcbn1cXG5cXG4vKiBcXG5UaGUgZm9sbG93aW5nIENTUyBzaGFtZWxlc3NseSBib3Jyb3dlZCBmcm9tIFxcbmh0dHBzOi8vYmxvZy5iaXRzcmMuaW8vcHVyZS1jc3MtdG8tbWFrZS1hLWJ1dHRvbi1zaGluZS1hbmQtZ2VudGx5LWNoYW5nZS1jb2xvcnMtb3Zlci10aW1lLTViNjg1ZDljNmE3ZSBcXG5QYWlnZSBOaWVkcmluZ2hhdXNcXG4qL1xcblxcbiNhZGRfdGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiA2MHB4OyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qIGZvciBzaGluZSAmIGdyYWRpZW50IGVmZmVjdHMgdG8gd29yayAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8qIGZvciBiYWNrZ3JvdW5kIGNvbG9yIHNoaWZ0ICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMiwgMTUxLCAxNTcsIDAuNyksIHJnYmEoMjI5LCAyMzEsIDIzNSwgMC43KSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAyMDAlO1xcbiAgICBhbmltYXRpb246IFRyYW5zaXRpb25pbmdCYWNrZ3JvdW5kIDEwcyBlYXNlIGluZmluaXRlO1xcbiAgICAvKiB0byBlYXNlIHRoZSBidXR0b24gZ3Jvd3RoIG9uIGhvdmVyICovXFxuICAgIHRyYW5zaXRpb246IDAuNnM7XFxufVxcblxcbi8qIHBzdWVkby1lbGVtZW50IHNoaW5lIGFuaW1hdGlvbiBsZWZ0IHNpZGUgKi9cXG4jYWRkX3Rhc2s6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xcbn1cXG5cXG4vKiBwc3VlZG8tZWxlbWVudCBzaGluZSBhbmltYXRpb24gcmlnaHQgc2lkZSAqL1xcbiNhZGRfdGFzazo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xcbn1cXG5cXG4vKiBncm93IGJ1dHRvbiBhbmQgY2hhbmdlIGJhY2tncm91bmQgZ3JhZGllbnQgb24gaG92ZXIgKi9cXG4jYWRkX3Rhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDIsIDE1MSwgMTU3LCAwLjcpLCByZ2JhKDIyOSwgMjMxLCAyMzUsIDAuNykpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogcHN1ZWRvLWVsZW1lbnRzIGZvciByaWdodC0gYW5kIGxlZnQtc2lkZSBzaGluZSBhbmltYXRpb25zICovXFxuI2FkZF90YXNrOjpiZWZvcmUsXFxuI2FkZF90YXNrOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsOENBQThDO0lBQzlDLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsU0FBUztJQUNULGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLDhDQUE4QztJQUM5Qyx3REFBd0Q7SUFDeEQsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQjttQkFDZTtJQUNmLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsMkZBQTJGO0lBQzNGLDBCQUEwQjtJQUMxQixvREFBb0Q7SUFDcEQsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtBQUNwQjs7QUFFQSw2Q0FBNkM7QUFDN0M7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLDJDQUEyQztBQUMvQzs7QUFFQSw4Q0FBOEM7QUFDOUM7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLDJDQUEyQztBQUMvQzs7QUFFQSx3REFBd0Q7QUFDeEQ7SUFDSSwyRkFBMkY7SUFDM0YscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUEsOERBQThEO0FBQzlEOztJQUVJLDBDQUEwQztJQUMxQyxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTUwcHgsIDEwdncpIDFmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ucmlnaHRMaW5rcyxcXG4ucmlnaHRMaW5rcz5hIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGdhcDogMjBweDtcXG4gICAgY29sb3I6ICNFNUU3RUI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuaGVhZGVyPmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG59XFxuXFxuaGVhZGVyPmgyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGNvbG9yOiAjRTVFN0VCO1xcbn1cXG5cXG5oZWFkZXI+LnJpZ2h0TGlua3Mge1xcbiAgICBncmlkLWNvbHVtbjogMztcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAyIC8gLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjkzNztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhc2tzPnAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRTVFN0VCO1xcbn1cXG5cXG4udGFza3M+YSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiAjRTVFN0VCO1xcbn1cXG5cXG4jY2FyZHMge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4ucHJvamVjdD5wIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJvamVjdD5pbWcsXFxuLnByb2plY3Q+Kj5pbWcge1xcbiAgICBib3JkZXI6IDAuMjVlbTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzg4MkY2O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5ib2R5PmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XFxuICAgIGNvbG9yOiAjRjlGQUY4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuQGtleWZyYW1lcyBUcmFuc2l0aW9uaW5nQmFja2dyb3VuZCB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDElIDAlO1xcbiAgICB9XFxuXFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5OSUgMTAwJTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDElIDAlO1xcbiAgICB9XFxufVxcblxcbi8qIFxcblRoZSBmb2xsb3dpbmcgQ1NTIHNoYW1lbGVzc2x5IGJvcnJvd2VkIGZyb20gXFxuaHR0cHM6Ly9ibG9nLmJpdHNyYy5pby9wdXJlLWNzcy10by1tYWtlLWEtYnV0dG9uLXNoaW5lLWFuZC1nZW50bHktY2hhbmdlLWNvbG9ycy1vdmVyLXRpbWUtNWI2ODVkOWM2YTdlIFxcblBhaWdlIE5pZWRyaW5naGF1c1xcbiovXFxuXFxuI2FkZF90YXNrIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogZm9yIHNoaW5lICYgZ3JhZGllbnQgZWZmZWN0cyB0byB3b3JrICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLyogZm9yIGJhY2tncm91bmQgY29sb3Igc2hpZnQgKi9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyLCAxNTEsIDE1NywgMC43KSwgcmdiYSgyMjksIDIzMSwgMjM1LCAwLjcpKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XFxuICAgIGFuaW1hdGlvbjogVHJhbnNpdGlvbmluZ0JhY2tncm91bmQgMTBzIGVhc2UgaW5maW5pdGU7XFxuICAgIC8qIHRvIGVhc2UgdGhlIGJ1dHRvbiBncm93dGggb24gaG92ZXIgKi9cXG4gICAgdHJhbnNpdGlvbjogMC42cztcXG59XFxuXFxuLyogcHN1ZWRvLWVsZW1lbnQgc2hpbmUgYW5pbWF0aW9uIGxlZnQgc2lkZSAqL1xcbiNhZGRfdGFzazo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpIHNrZXdYKC0xNWRlZyk7XFxufVxcblxcbi8qIHBzdWVkby1lbGVtZW50IHNoaW5lIGFuaW1hdGlvbiByaWdodCBzaWRlICovXFxuI2FkZF90YXNrOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpIHNrZXdYKC0xNWRlZyk7XFxufVxcblxcbi8qIGdyb3cgYnV0dG9uIGFuZCBjaGFuZ2UgYmFja2dyb3VuZCBncmFkaWVudCBvbiBob3ZlciAqL1xcbiNhZGRfdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMiwgMTUxLCAxNTcsIDAuNyksIHJnYmEoMjI5LCAyMzEsIDIzNSwgMC43KSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBwc3VlZG8tZWxlbWVudHMgZm9yIHJpZ2h0LSBhbmQgbGVmdC1zaWRlIHNoaW5lIGFuaW1hdGlvbnMgKi9cXG4jYWRkX3Rhc2s6OmJlZm9yZSxcXG4jYWRkX3Rhc2s6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KSBza2V3WCgtMTVkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEV4cGFuZCB0aGlzIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIGZ1bGwtZmxlZGdlZCBlbGVtZW50IG9uIHRoZSBwYWdlXG4vLyB0aGF0IGhhcyBhbGwgdGhlIGZ1bmNpb25hbGl0eSByZXF1aXJlZCBvZiBhIFRvRG8vVGFzayBvYmplY3RcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmQoY29udGFpbmVyX2VsZW1lbnQsIGNhcmRfY2xhc3MsIFRhc2tPYmplY3QpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyX2VsZW1lbnQpO1xuXG5cbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjYXJkX2NsYXNzKTtcbiAgICAvLyBBZGQgXCJwcmlvcml0eVwiIGFzIGNsYXNzIGF0dHIgdG8gYWxsb3cgc29ydGluZyBsYXRlcj9cbiAgICBjYXJkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFRhc2tPYmplY3QucHJpb3JpdHkpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgVGFza09iamVjdC5pZCk7XG5cbiAgICBsZXQgbmFtZV9vZl9jYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG5hbWVfb2ZfY2FyZC50ZXh0Q29udGVudCA9IFRhc2tPYmplY3QubmFtZTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKG5hbWVfb2ZfY2FyZCk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25fb2ZfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uX29mX2NhcmQudGV4dENvbnRlbnQgPSBUYXNrT2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25fb2ZfY2FyZCk7XG5cbiAgICBsZXQgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkdWVfZGF0ZS50ZXh0Q29udGVudCA9IFRhc2tPYmplY3QuZHVlO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlX2RhdGUpO1xuXG4gICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tib3gubmFtZSA9IFwiQ29tcGxldGVkXCI7XG4gICAgY2hlY2tib3guaWQgPSBgJHtUYXNrT2JqZWN0LmlkfV9jaGVja2JveGA7XG4gICAgY2hlY2tib3gudmFsdWUgPSBUYXNrT2JqZWN0LmNvbXBsZXRlZDtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKFRhc2tPYmplY3QuY29tcGxldGVkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBjaGVja2JveC52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICBUYXNrT2JqZWN0LmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2JveC52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgVGFza09iamVjdC5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9KVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4vLyBJIGRvbid0IG5lY2Vzc2FyaWx5IHdhbnQgdGhpcyBtb2R1bGUgdG8gZGVwZW5kIG9uIFRhc2sgb3IgQ2FyZC4gSSB3YW50XG4vLyB0byBiZSBhYmxlIHRvIHVzZSBpdCBmb3IgYW55IHBvcHVwIGZvcm0gb24gYW55IHBhZ2UuXG4vLyBTbyBpbnN0ZWFkIG9mIGltcG9ydGluZywgSSBuZWVkIHRvIGFsbG93IGl0IHRvIGJlIGNyZWF0ZWQgd2l0aCBjYWxsc1xuLy8gdG8gdGhvc2UgZnVuY3Rpb25zLiBUaGUgaW50ZWdyYXRpb24gc2hvdWxkIGJlIGRvbmUgaW4gaW5kZXguanMuLi4uLlxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiXG5pbXBvcnQgY2FyZCBmcm9tIFwiLi9jYXJkQ3JlYXRvci5qc1wiO1xuXG5cbi8vIE1ha2UgYSBjbGFzcyB0byBob2xkIHRoZSBmb3JtIGFuZCBpdHMgbGFiZWxzXG4vLyBTaG91bGQgSSBjcmVhdGUgdGhlIEhpZGRlbkZvcm1FbGVtZW50LCB0aGVuIGFkZCBhIFxuLy8gbWV0aG9kIHRvIGFkZCBmaWVsZHM/IEkgdGhpbmsgc28uXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaWRkZW5Nb2RhbEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsX2lkLCBwYXJlbnRfZWxlbWVudCwgYWN0aXZhdGlvbl9idXR0b25faWQsIGFycmF5X3RvX2V4cG9ydF90bykge1xuICAgICAgICB0aGlzLmlkID0gbW9kYWxfaWQ7XG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50X2VsZW1lbnQpO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25fYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYWN0aXZhdGlvbl9idXR0b25faWQpXG4gICAgICAgIHRoaXMuYXJyYXlfb2ZfY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5zdWJtaXRfYnV0dG9uc19hcnJheSA9IFtdO1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1vZGFsXCIpO1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuaWQpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGlvbl9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hcnJheV90b19leHBvcnRfdG8gPSBhcnJheV90b19leHBvcnRfdG87XG4gICAgICAgIHRoaXMucGFyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgYWRkX2lucHV0KG5ld19pbnB1dCwgdHlwZSA9IFwidGV4dFwiKSB7XG5cbiAgICAgICAgbGV0IGlucHV0X3RvX2FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRfdG9fYWRkLnR5cGUgPSB0eXBlO1xuICAgICAgICBsZXQgaW5wdXRfc3BhY2VzX3JlbW92ZWQgPSBuZXdfaW5wdXQucmVwbGFjZSgvIC9nLCBcIlwiKTtcbiAgICAgICAgaW5wdXRfdG9fYWRkLmlkID0gaW5wdXRfc3BhY2VzX3JlbW92ZWQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaW5wdXRfdG9fYWRkLmNsYXNzID0gXCJpbnB1dF9maWVsZFwiO1xuXG4gICAgICAgIGxldCBsYWJlbF9mb3JfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsX2Zvcl9pbnB1dC5odG1sRm9yID0gaW5wdXRfdG9fYWRkO1xuICAgICAgICBsYWJlbF9mb3JfaW5wdXQudGV4dENvbnRlbnQgPSBuZXdfaW5wdXQ7XG5cbiAgICAgICAgdGhpcy5hcnJheV9vZl9jaGlsZHJlbi5wdXNoKGxhYmVsX2Zvcl9pbnB1dCk7XG4gICAgICAgIHRoaXMuYXJyYXlfb2ZfY2hpbGRyZW4ucHVzaChpbnB1dF90b19hZGQpO1xuICAgICAgICAvL0RvIEkgbmVlZCB0byBzYXZlIHRoYXQgaWQgYW55d2hlcmUgb3RoZXIgdGhhbiB0aGUgYXJyYXk/XG5cbiAgICB9O1xuXG4gICAgYXBwZW5kX3RvX3BhcmVudCgpIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmFycmF5X29mX2NoaWxkcmVuLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmFycmF5X29mX2NoaWxkcmVuW3hdKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBtYWtlX2hpZGRlbigpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLnBhcmVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICB9O1xuXG4gICAgYWRkX2J1dHRvbnMoKSB7XG4gICAgICAgIGxldCBjbGVhcl9mb3JtX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNsZWFyX2Zvcm1fYnV0dG9uLnRleHRDb250ZW50ID0gXCJDbGVhciBGb3JtXCI7XG4gICAgICAgIGNsZWFyX2Zvcm1fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmFycmF5X29mX2NoaWxkcmVuLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJyYXlfb2ZfY2hpbGRyZW5beF0uY2xhc3MgPT0gXCJpbnB1dF9maWVsZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlfb2ZfY2hpbGRyZW5beF0udmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjcmVhdGVfYW5vdGhlcl9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnN1Ym1pdF9idXR0b25zX2FycmF5LnB1c2goY3JlYXRlX2Fub3RoZXJfYnV0dG9uKTtcbiAgICAgICAgY3JlYXRlX2Fub3RoZXJfYnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgQW5vdGhlclwiO1xuICAgICAgICBjcmVhdGVfYW5vdGhlcl9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYXJyYXlfb2ZfY2hpbGRyZW4ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcnJheV9vZl9jaGlsZHJlblt4XS5jbGFzcyA9PSBcImlucHV0X2ZpZWxkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheV9vZl9jaGlsZHJlblt4XS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzdWJtaXRfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5zdWJtaXRfYnV0dG9uc19hcnJheS5wdXNoKHN1Ym1pdF9idXR0b24pO1xuICAgICAgICBzdWJtaXRfYnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgc3VibWl0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5hcnJheV9vZl9jaGlsZHJlbi5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFycmF5X29mX2NoaWxkcmVuW3hdLmNsYXNzID09IFwiaW5wdXRfZmllbGRcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5X29mX2NoaWxkcmVuW3hdLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNsb3NlX3BvcHVwX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNsb3NlX3BvcHVwX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcbiAgICAgICAgY2xvc2VfcG9wdXBfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5wYXJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKTtcbiAgICAgICAgY2xvc2VfcG9wdXBfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmFycmF5X29mX2NoaWxkcmVuLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJyYXlfb2ZfY2hpbGRyZW5beF0uY2xhc3MgPT0gXCJpbnB1dF9maWVsZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlfb2ZfY2hpbGRyZW5beF0udmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKGNsZWFyX2Zvcm1fYnV0dG9uKTtcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQoc3VibWl0X2J1dHRvbik7XG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKGNyZWF0ZV9hbm90aGVyX2J1dHRvbik7XG4gICAgfTtcbn07IiwiLy8gZXhwYW5kIHRoZSBhdHRyaWJ1dGVzIGFuZCBmdW5jdGlvbnMgb2YgdGhlIFRhc2sgY2xhc3MgdG8gaGFuZGxlXG4vLyBjcmVhdGlvbiBhbmQgZGVsZXRpb24gb2YgZWFjaCBvYmplY3QuIFdoZXJlIHRvIHB1dCB0aGUgYXJyYXkgb3Jcbi8vIGRpY3Rpb25hcnkgdGhhdCBob2xkcyBhbGwgb2YgdGhlIFRhc2tzIHVudGlsIHRoZXkgYXJlIHNhdmVkIHRvXG4vLyBsb2NhbCBzdG9yYWdlP1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICAvLyBwcmlvcml0eSBvZiAwIGlzIHRoZSBoaWdoZXN0IHByaW9yaXR5XG4gICAgLy8gbmVlZCB0byBmaWd1cmUgb3V0IGEgYmV0dGVyIHdheSBmb3IgZGVmYXVsdCB2YWx1ZSBvZiB0YXNrX25hbWUgdG8gcHJldmVudFxuICAgIC8vIGR1cGxpY2F0aW9uIGFuZCBodG1sIGlkIGNvbmZsaWN0c1xuICAgIGNvbnN0cnVjdG9yKHRhc2tfbmFtZSA9IFwiVGFza1wiLCBkZXNjcmlwdGlvbiA9IFwiXCIsIGR1ZSA9IDAsIHByaW9yaXR5ID0gMCwgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGFza19uYW1lO1xuICAgICAgICB0aGlzLmlkID0gdGFza19uYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlID0gZHVlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH07XG4gICAgLy8gVmFsaWRhdGUgZWFjaCBhdHRyaWJ1dGUgdG8gcHJldmVudCBpbnZhbGlkIHZhbHVlc1xuICAgIC8vIGlzIHRoYXQgU09QIGZvciB1c2luZyBjbGFzc2VzPyBQcmV2ZW50IGNyZWF0aW9uIG9mIG9iamVjdFxuICAgIC8vIGlmIGlucHV0IHZhbHVlIGlzIGludmFsaWQ/XG5cbiAgICAvLyBtYWtlIGEgZGVsZXRlciBtZXRob2QgZm9yIHRoZSBjbGFzcyB0byByZW1vdmUgaXQgZnJvbSBleGlzdGVuY2U/XG4gICAgLy8gb3IgZG9lcyB0aGF0IGdvIGVsc2V3aGVyZXM/IGxvY2FsX3N0b3JhZ2U/XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIlxuaW1wb3J0IGNhcmQgZnJvbSBcIi4vY2FyZENyZWF0b3IuanNcIjtcbi8vIGltcG9ydCB7IFRhc2tJbnB1dEZpZWxkQ3JlYXRvciwgUG9wdXBGb3JtQnV0dG9ucyB9IGZyb20gXCIuL3BvcHVwRm9ybS5qc1wiO1xuaW1wb3J0IEhpZGRlbk1vZGFsRWxlbWVudCBmcm9tIFwiLi9jbGFzc1BvcHVwLmpzXCJcblxuLy8gYSBtYW51YWwgdXNlIG9mIHRoZSBUYXNrIGNsYXNzIHRvIGNyZWF0ZSBhIFRhc2sgb2JqZWN0LlxubGV0IGV4YW1wbGVUYXNrID0gbmV3IFRhc2soXCJUZXN0dGFza1wiLCBcIkRlc2NyaXB0aW9uIG9mIHRhc2tcIiwgXCJBdWcgMVwiLCBcIjBcIik7XG5cbmxldCBleGFtcGxlX3Rhc2tfd2l0aF9zcGFjZXMgPSBuZXcgVGFzayhcIlRlc3QgVGFza1wiLCBcIlRoaXMgdGFzayBoYXMgc3BhY2VzXCIsIFwiQXVnIDFcIiwgXCIyXCIpO1xuXG5sZXQgbW9kYWxfZmllbGRzX2FycmF5ID0gW1xuICAgIFwiVGFzayBOYW1lXCIsXG4gICAgXCJEZXNjcmlwdGlvbiBvZiBUYXNrXCIsXG4gICAgXCJEdWUgRGF0ZVwiLFxuICAgIFwiUHJpb3JpdHlcIixcbl07XG5cbmxldCB2YWx1ZXNfb2ZfaW5wdXRfZmllbGRzID0gW107XG5cbmxldCBwb3B1cF9tb2RhbCA9IG5ldyBIaWRkZW5Nb2RhbEVsZW1lbnQoXCJwb3B1cF9tb2RhbFwiLCBcIm1vZGFsXCIsIFwiYWRkX3Rhc2tcIiwgdmFsdWVzX29mX2lucHV0X2ZpZWxkcyk7XG5mb3IgKGxldCB4ID0gMDsgeCA8IG1vZGFsX2ZpZWxkc19hcnJheS5sZW5ndGg7IHgrKykge1xuICAgIHBvcHVwX21vZGFsLmFkZF9pbnB1dChtb2RhbF9maWVsZHNfYXJyYXlbeF0sIFwidGV4dFwiKTtcbn07XG5wb3B1cF9tb2RhbC5hcHBlbmRfdG9fcGFyZW50KCk7XG5wb3B1cF9tb2RhbC5hZGRfYnV0dG9ucygpO1xucG9wdXBfbW9kYWwubWFrZV9oaWRkZW4oKTtcbmNvbnNvbGUubG9nKHBvcHVwX21vZGFsLnN1Ym1pdF9idXR0b25zX2FycmF5KVxuXG5cblxuXG4vLyB0aGUgZnVuY3Rpb24gYmVsb3cgaXNuJ3QgZ29pbmcgdG8gd29yaywgc2luY2Ugd2hpbGUgdGhlIHZhbHVlcyBhcmUgZXhwb3J0ZWQsIHRoZXlcbi8vIGNhbiBvbmx5IGJlIGV4cG9ydGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBcInN1Ym1pdFwiIHR5cGUgb2YgYnV0dG9uLiBTby4uLi5cbi8vIEkgbmVlZCBhbiBldmVudCBsaXN0ZW5lci4gV2hlcmUgdG8gcHV0IGl0PyBBbmQgaXQgbmVlZHMgdG8gY2FsbCB0aGUgY2FyZCgpIGZ1bmN0aW9uXG4vLyB3aGVuIHRoZSBidXR0b24gaXMgcHJlc3NlZCwgdG8gY3JlYXRlIHRoZSBjYXJkIT9cblxuXG4vLyBjYXJkKFwiY2FyZHNcIiwgXCJwcm9qZWN0XCIsICgpKTtcbi8vIE5vdyB0aGF0IHRoZSBtb2RhbCBwb3BzIHVwIGFuZCBkaXNhcHBlYXJzIHdpdGggbm8gaXNzdWVzLCBhbmQgdGhlIGlucHV0c1xuLy8gYXBwZWFyIGFzIHdlbGwsIGl0cyBhbHNvIHRpbWUgdG8gZ2l2ZSB0aGUgbW9kYWwgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIGFuIG9iamVjdCB1c2luZ1xuLy8gdGhlIFRhc2sgY2xhc3MgY3JlYXRvciwgYW5kIGFwcGVuZCB0aGF0IHRvIHRoZSBET00uIFRoYXQgc2hvdWxkIGJlLi4uIGNhbGxlZFxuLy8gYnkgYW5kIGluIHRoZSBtb2RhbCBtb2R1bGU/IElESy4gT3IgaGVyZT9cblxuLy8gT25jZSB0aGUgbW9kYWwgaXMgYWJsZSB0byBjcmVhdGUgYSB0YXNrLCBhdXRvbWF0ZSB0aGUgY3JlYXRpb24gb2YgYSBjYXJkLlxuLy8gV291bGQgdGhhdCBiZSB3aXRoaW4gdGhlIFRhc2sgbW9kdWxlPyBBcyBhIG1ldGhvZCBvZiB0aGUgVGFzayBjbGFzcz9cblxuLy8gU2hvdWxkIHRoZSBtb2RhbCBzaW1wbHkgcmV0dXJuIGEgbGlzdCBvZiBzdHJpbmdzIChUaGUgaW5mb3JtYXRpb24gZm9yIGEgVGFzayBvYmplY3QpLFxuLy8gd2hpY2ggd291bGQgdGhlblxuLy8gYmUgdXNlZCBieSBUYXNrPyBJIHRoaW5rIHNvLiBJIHdvdWxkIGhhdmUgdG8gcmVmYWN0b3IgVGFzayB0byBhY2NlcHQgYW4gYXJyYXlcbi8vIGluc3RlYWQgb2YgbXVsdGlwbGUgYXJncy5cblxuLy8gVGhlbiBjcmVhdGUgYSBjYXJkIHVzaW5nIHRoZSBUYXNrIG9iamVjdCEgQXV0b21hdGUgdGhhdC4uLiBob3c/XG5cblxuLy8gaW52b2tpbmcgYSBuZXcgY2FyZCB3aXRoIG9iamVjdCBvZiBjbGFzcyBUYXNrLCBhbGxvd2luZyBjYXJkIGZ1bmN0aW9uXG4vLyB0byBoYW5kbGUgY3JlYXRpb24gYW5kIGFwcGVuZGluZyBvZiBUYXNrIHRvIERPTS5cbmNhcmQoXCJjYXJkc1wiLCBcInByb2plY3RcIiwgZXhhbXBsZVRhc2spO1xuY2FyZChcImNhcmRzXCIsIFwicHJvamVjdFwiLCBleGFtcGxlX3Rhc2tfd2l0aF9zcGFjZXMpO1xuXG4vLyBjcmVhdGUgYSBzZXBhcmF0ZSBtb2R1bGUgZm9yIHRoZSBwb3B1cCBmb3JtIGlucHV0LCB0byBjcmVhdGUgbmV3IHRhc2tzIGZyb20gdGhlXG4vLyAjYWRkX3Rhc2sgYnV0dG9uLiBVc2UgdGhlIFwibGlicmFyeVwiIGlucHV0IGZvcm0gYXMgYW4gZXhhbXBsZSB0byB3b3JrIGZyb20uXG5cbi8vIGZpZ3VyZSBvdXQgaG93IHRvIHVzZSBsb2NhbF9zdG9yYWdlIG1vZHVsZSB0byBzYXZlIHRoZSBhZGRlZCB0YXNrIHRvIHVzZXIncyBsb2NhbFxuLy8gc3RvcmFnZS5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==