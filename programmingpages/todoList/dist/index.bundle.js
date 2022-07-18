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
    constructor(modal_id, parent_element, activation_button_id) {
        this.id = modal_id;
        this.parent = document.getElementById(parent_element);
        this.activation_button = document.getElementById(activation_button_id)
        this.array_of_fields = [];
        this.submit_buttons_array = [];
        this.clear_buttons_array = [];
        this.modal = document.createElement("modal");
        this.modal.setAttribute("id", this.id);

        this.activation_button.addEventListener("click", (e) => {
            if (this.parent.style.display == "none") {
                this.parent.style.display = "grid";
            } else {
                this.parent.style.display = "none";
            };
        });

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
        label_for_input.class = "field_label";

        this.array_of_fields.push(label_for_input);
        this.array_of_fields.push(input_to_add);
        //Do I need to save that id anywhere other than the array?

    };

    append_to_parent() {
        for (let x = 0; x < this.array_of_fields.length; x++) {
            this.parent.appendChild(this.array_of_fields[x]);
        };
    }

    toggle_hidden() {
        if (this.parent.style.display == "none") {
            this.parent.style.display = "grid";
            this.parent.removeAttribute("class", "hidden");
        } else {
            this.parent.style.display = "none";
            this.parent.setAttribute("class", "hidden");
        };
    };

    add_buttons() {
        let clear_form_button = document.createElement("button");
        clear_form_button.textContent = "Clear Form";
        this.clear_buttons_array.push(clear_form_button);

        let create_another_button = document.createElement("button");
        this.submit_buttons_array.push(create_another_button);
        this.clear_buttons_array.push(create_another_button);
        create_another_button.textContent = "Create Another";

        let submit_button = document.createElement("button");
        this.submit_buttons_array.push(submit_button);
        this.clear_buttons_array.push(submit_button);
        submit_button.textContent = "Submit";
        submit_button.addEventListener("click", (e) => {
            this.toggle_hidden();
        })

        let close_popup_button = document.createElement("button");
        close_popup_button.textContent = "Close";
        close_popup_button.addEventListener("click", (e) => {
            this.toggle_hidden();
        });

        this.parent.appendChild(clear_form_button);
        this.parent.appendChild(submit_button);
        this.parent.appendChild(create_another_button);
    };

    return_submit_button_objects() {
        return this.submit_buttons_array;
    };

    clear_fields() {
        for (let x = 0; x < this.array_of_fields.length; x++) {
            if (this.array_of_fields[x].class == "input_field") {
                this.array_of_fields[x].value = "";
            };
        };
    };

    return_field_values() {
        let values_of_fields = [];
        for (let x = 0; x < this.array_of_fields.length; x++) {
            if (this.array_of_fields[x].class == "input_field") {
                values_of_fields.push(this.array_of_fields[x].value);
            };
            // the below if / else is commented out because I'm not sure that I 
            // want the labels transferred out into the array. For now, just the values.
            //     if (this.array_of_fields[x].class == "input_field") {
            //         values_of_fields.push(this.array_of_fields[x].value);
            //     } else {
            //         values_of_fields.push(this.array_of_fields[x].textContent);
            //     }
            // };
        };

        return values_of_fields;
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

let popup_modal = new _classPopup_js__WEBPACK_IMPORTED_MODULE_3__["default"]("popup_modal", "modal", "add_task");
for (let x = 0; x < modal_fields_array.length; x++) {
    popup_modal.add_input(modal_fields_array[x], "text");
};
popup_modal.append_to_parent();
popup_modal.add_buttons();


// for (let x = 0; x < popup_modal.clear_buttons_array.length; x++) {
//     popup_modal.clear_buttons_array[x].addEventListener("click", (e) => {
//         popup_modal.clear_fields();
//     });
// };

function card_from_input() {
    values_of_input_fields = [];
    values_of_input_fields.push(popup_modal.return_field_values());
    if (values_of_input_fields[0][0] != "") {
        if (values_of_input_fields[0][1] != "") {
            if (values_of_input_fields[0][2] != "") {
                if (values_of_input_fields[0][3] != "") {
                    let new_task = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](...values_of_input_fields[0]);
                    (0,_cardCreator_js__WEBPACK_IMPORTED_MODULE_2__["default"])("cards", "project", new_task);
                }
            }
        }
    }
    console.log(values_of_input_fields);
    popup_modal.clear_fields();
}


let submit_buttons = [];
submit_buttons.push(popup_modal.submit_buttons_array);
for (let x = 0; x < popup_modal.submit_buttons_array.length; x++) {
    submit_buttons[0][x].addEventListener("click", (e) => {
        card_from_input();
    });
};
// now I have an event listener (created here) to pull the array of values and store it
// in values_of_input_fields[0].

// This is erased each time the thingy is called. The values are in the order of
// fieldname, value_of_field, fieldname, value_of_field etc etc...

// i can use this unmodified to create cards with custom name fields. I should do this.
// I can use the order of the array as it is for now.

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
(0,_cardCreator_js__WEBPACK_IMPORTED_MODULE_2__["default"])("cards", "project", exampleTask);
(0,_cardCreator_js__WEBPACK_IMPORTED_MODULE_2__["default"])("cards", "project", example_task_with_spaces);

// create a separate module for the popup form input, to create new tasks from the
// #add_task button. Use the "library" input form as an example to work from.

// figure out how to use local_storage module to save the added task to user's local
// storage.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsNEJBQTRCLEdBQUcsVUFBVSxvQkFBb0Isd0NBQXdDLHFEQUFxRCxnQkFBZ0Isb0JBQW9CLEdBQUcsWUFBWSxvQkFBb0IsZ0NBQWdDLHlCQUF5Qix3QkFBd0IsR0FBRyxpQ0FBaUMsb0JBQW9CLHdCQUF3QixnQkFBZ0IscUJBQXFCLDBCQUEwQix5QkFBeUIsR0FBRyxnQkFBZ0IsdUJBQXVCLHdCQUF3QixxQkFBcUIsR0FBRyxlQUFlLHFCQUFxQixxQkFBcUIsR0FBRyx3QkFBd0IscUJBQXFCLEdBQUcsWUFBWSxxQkFBcUIsdUJBQXVCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLGdDQUFnQyxvQkFBb0IsR0FBRyxjQUFjLHlCQUF5QixxQkFBcUIsR0FBRyxjQUFjLGlCQUFpQix1QkFBdUIsdUJBQXVCLHFCQUFxQixHQUFHLFlBQVksbUJBQW1CLG9CQUFvQixxQkFBcUIscURBQXFELCtEQUErRCxnQkFBZ0IsR0FBRyxnQkFBZ0IsbUJBQW1CLHVCQUF1QixHQUFHLG1DQUFtQyxxQkFBcUIsNEJBQTRCLDBCQUEwQiwwQkFBMEIsbUJBQW1CLG9CQUFvQix3QkFBd0IsR0FBRyxpQkFBaUIsdUJBQXVCLGlCQUFpQixnQ0FBZ0MscUJBQXFCLHlCQUF5Qix5QkFBeUIsR0FBRyx3Q0FBd0MsVUFBVSxxQ0FBcUMsT0FBTyxhQUFhLHdDQUF3QyxPQUFPLGNBQWMscUNBQXFDLE9BQU8sR0FBRyxxTUFBcU0sc0JBQXNCLHVCQUF1QixtQkFBbUIseUJBQXlCLHNCQUFzQixvQkFBb0IsMkJBQTJCLHlFQUF5RSx1QkFBdUIsd0lBQXdJLGlDQUFpQywyREFBMkQscUVBQXFFLEdBQUcsdUVBQXVFLGtCQUFrQixxQkFBcUIseUJBQXlCLCtCQUErQixrQkFBa0IsbUJBQW1CLGFBQWEseUJBQXlCLGtEQUFrRCxHQUFHLHVFQUF1RSxrQkFBa0IscUJBQXFCLHlCQUF5QiwrQkFBK0Isa0JBQWtCLG1CQUFtQixhQUFhLHdCQUF3QixrREFBa0QsR0FBRyxnRkFBZ0Ysa0dBQWtHLDRCQUE0QixzQkFBc0IsR0FBRywyR0FBMkcsaURBQWlELHVCQUF1QixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksT0FBTyxZQUFZLGFBQWEsNkJBQTZCLDRCQUE0QixHQUFHLFVBQVUsb0JBQW9CLHdDQUF3QyxxREFBcUQsZ0JBQWdCLG9CQUFvQixHQUFHLFlBQVksb0JBQW9CLGdDQUFnQyx5QkFBeUIsd0JBQXdCLEdBQUcsaUNBQWlDLG9CQUFvQix3QkFBd0IsZ0JBQWdCLHFCQUFxQiwwQkFBMEIseUJBQXlCLEdBQUcsZ0JBQWdCLHVCQUF1Qix3QkFBd0IscUJBQXFCLEdBQUcsZUFBZSxxQkFBcUIscUJBQXFCLEdBQUcsd0JBQXdCLHFCQUFxQixHQUFHLFlBQVkscUJBQXFCLHVCQUF1QixvQkFBb0IsNkJBQTZCLGdCQUFnQixnQ0FBZ0Msb0JBQW9CLEdBQUcsY0FBYyx5QkFBeUIscUJBQXFCLEdBQUcsY0FBYyxpQkFBaUIsdUJBQXVCLHVCQUF1QixxQkFBcUIsR0FBRyxZQUFZLG1CQUFtQixvQkFBb0IscUJBQXFCLHFEQUFxRCwrREFBK0QsZ0JBQWdCLEdBQUcsZ0JBQWdCLG1CQUFtQix1QkFBdUIsR0FBRyxtQ0FBbUMscUJBQXFCLDRCQUE0QiwwQkFBMEIsMEJBQTBCLG1CQUFtQixvQkFBb0Isd0JBQXdCLEdBQUcsaUJBQWlCLHVCQUF1QixpQkFBaUIsZ0NBQWdDLHFCQUFxQix5QkFBeUIseUJBQXlCLEdBQUcsd0NBQXdDLFVBQVUscUNBQXFDLE9BQU8sYUFBYSx3Q0FBd0MsT0FBTyxjQUFjLHFDQUFxQyxPQUFPLEdBQUcscU1BQXFNLHNCQUFzQix1QkFBdUIsbUJBQW1CLHlCQUF5QixzQkFBc0Isb0JBQW9CLDJCQUEyQix5RUFBeUUsdUJBQXVCLHdJQUF3SSxpQ0FBaUMsMkRBQTJELHFFQUFxRSxHQUFHLHVFQUF1RSxrQkFBa0IscUJBQXFCLHlCQUF5QiwrQkFBK0Isa0JBQWtCLG1CQUFtQixhQUFhLHlCQUF5QixrREFBa0QsR0FBRyx1RUFBdUUsa0JBQWtCLHFCQUFxQix5QkFBeUIsK0JBQStCLGtCQUFrQixtQkFBbUIsYUFBYSx3QkFBd0Isa0RBQWtELEdBQUcsZ0ZBQWdGLGtHQUFrRyw0QkFBNEIsc0JBQXNCLEdBQUcsMkdBQTJHLGlEQUFpRCx1QkFBdUIsR0FBRyxtQkFBbUI7QUFDdnBSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDNEI7QUFDUTs7O0FBR3BDO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLGlDQUFpQztBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGlDQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsaUNBQWlDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNPO0FBQ1E7QUFDcEMsWUFBWSwwQ0FBMEM7QUFDTjs7QUFFaEQ7QUFDQSxzQkFBc0IsZ0RBQUk7O0FBRTFCLG1DQUFtQyxnREFBSTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNCQUFzQixzREFBa0I7QUFDeEMsZ0JBQWdCLCtCQUErQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsbUJBQW1CLDRDQUE0QztBQUMvRDtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdEQUFJO0FBQzNDLG9CQUFvQiwyREFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBNkM7QUFDN0Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLDJEQUFJO0FBQ0osMkRBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2FyZENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2xhc3NQb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTUwcHgsIDEwdncpIDFmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ucmlnaHRMaW5rcyxcXG4ucmlnaHRMaW5rcz5hIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGdhcDogMjBweDtcXG4gICAgY29sb3I6ICNFNUU3RUI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuaGVhZGVyPmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG59XFxuXFxuaGVhZGVyPmgyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGNvbG9yOiAjRTVFN0VCO1xcbn1cXG5cXG5oZWFkZXI+LnJpZ2h0TGlua3Mge1xcbiAgICBncmlkLWNvbHVtbjogMztcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAyIC8gLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjkzNztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhc2tzPnAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRTVFN0VCO1xcbn1cXG5cXG4udGFza3M+YSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiAjRTVFN0VCO1xcbn1cXG5cXG4jY2FyZHMge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4ucHJvamVjdD5wIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJvamVjdD5pbWcsXFxuLnByb2plY3Q+Kj5pbWcge1xcbiAgICBib3JkZXI6IDAuMjVlbTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzg4MkY2O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5ib2R5PmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XFxuICAgIGNvbG9yOiAjRjlGQUY4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuQGtleWZyYW1lcyBUcmFuc2l0aW9uaW5nQmFja2dyb3VuZCB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDElIDAlO1xcbiAgICB9XFxuXFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5OSUgMTAwJTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDElIDAlO1xcbiAgICB9XFxufVxcblxcbi8qIFxcblRoZSBmb2xsb3dpbmcgQ1NTIHNoYW1lbGVzc2x5IGJvcnJvd2VkIGZyb20gXFxuaHR0cHM6Ly9ibG9nLmJpdHNyYy5pby9wdXJlLWNzcy10by1tYWtlLWEtYnV0dG9uLXNoaW5lLWFuZC1nZW50bHktY2hhbmdlLWNvbG9ycy1vdmVyLXRpbWUtNWI2ODVkOWM2YTdlIFxcblBhaWdlIE5pZWRyaW5naGF1c1xcbiovXFxuXFxuI2FkZF90YXNrIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogZm9yIHNoaW5lICYgZ3JhZGllbnQgZWZmZWN0cyB0byB3b3JrICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLyogZm9yIGJhY2tncm91bmQgY29sb3Igc2hpZnQgKi9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyLCAxNTEsIDE1NywgMC43KSwgcmdiYSgyMjksIDIzMSwgMjM1LCAwLjcpKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XFxuICAgIGFuaW1hdGlvbjogVHJhbnNpdGlvbmluZ0JhY2tncm91bmQgMTBzIGVhc2UgaW5maW5pdGU7XFxuICAgIC8qIHRvIGVhc2UgdGhlIGJ1dHRvbiBncm93dGggb24gaG92ZXIgKi9cXG4gICAgdHJhbnNpdGlvbjogMC42cztcXG59XFxuXFxuLyogcHN1ZWRvLWVsZW1lbnQgc2hpbmUgYW5pbWF0aW9uIGxlZnQgc2lkZSAqL1xcbiNhZGRfdGFzazo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpIHNrZXdYKC0xNWRlZyk7XFxufVxcblxcbi8qIHBzdWVkby1lbGVtZW50IHNoaW5lIGFuaW1hdGlvbiByaWdodCBzaWRlICovXFxuI2FkZF90YXNrOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpIHNrZXdYKC0xNWRlZyk7XFxufVxcblxcbi8qIGdyb3cgYnV0dG9uIGFuZCBjaGFuZ2UgYmFja2dyb3VuZCBncmFkaWVudCBvbiBob3ZlciAqL1xcbiNhZGRfdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMiwgMTUxLCAxNTcsIDAuNyksIHJnYmEoMjI5LCAyMzEsIDIzNSwgMC43KSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBwc3VlZG8tZWxlbWVudHMgZm9yIHJpZ2h0LSBhbmQgbGVmdC1zaWRlIHNoaW5lIGFuaW1hdGlvbnMgKi9cXG4jYWRkX3Rhc2s6OmJlZm9yZSxcXG4jYWRkX3Rhc2s6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KSBza2V3WCgtMTVkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyw4Q0FBOEM7SUFDOUMsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsOENBQThDO0lBQzlDLHdEQUF3RDtJQUN4RCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTs7OztDQUlDOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCO21CQUNlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQiwyRkFBMkY7SUFDM0YsMEJBQTBCO0lBQzFCLG9EQUFvRDtJQUNwRCx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0FBQ3BCOztBQUVBLDZDQUE2QztBQUM3QztJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsMkNBQTJDO0FBQy9DOztBQUVBLDhDQUE4QztBQUM5QztJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixpQkFBaUI7SUFDakIsMkNBQTJDO0FBQy9DOztBQUVBLHdEQUF3RDtBQUN4RDtJQUNJLDJGQUEyRjtJQUMzRixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQSw4REFBOEQ7QUFDOUQ7O0lBRUksMENBQTBDO0lBQzFDLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgMTB2dykgMWZyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxufVxcblxcbi5yaWdodExpbmtzLFxcbi5yaWdodExpbmtzPmEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBjb2xvcjogI0U1RTdFQjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5oZWFkZXI+aW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG5oZWFkZXI+aDIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgY29sb3I6ICNFNUU3RUI7XFxufVxcblxcbmhlYWRlcj4ucmlnaHRMaW5rcyB7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAtMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFza3M+cCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNFNUU3RUI7XFxufVxcblxcbi50YXNrcz5hIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6ICNFNUU3RUI7XFxufVxcblxcbiNjYXJkcyB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbi5wcm9qZWN0PnAge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxufVxcblxcbi5wcm9qZWN0PmltZyxcXG4ucHJvamVjdD4qPmltZyB7XFxuICAgIGJvcmRlcjogMC4yNWVtO1xcbiAgICBib3JkZXItY29sb3I6ICMzODgyRjY7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbmJvZHk+Zm9vdGVyIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjkzNztcXG4gICAgY29sb3I6ICNGOUZBRjg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIFRyYW5zaXRpb25pbmdCYWNrZ3JvdW5kIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMSUgMCU7XFxuICAgIH1cXG5cXG4gICAgNTAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk5JSAxMDAlO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMSUgMCU7XFxuICAgIH1cXG59XFxuXFxuLyogXFxuVGhlIGZvbGxvd2luZyBDU1Mgc2hhbWVsZXNzbHkgYm9ycm93ZWQgZnJvbSBcXG5odHRwczovL2Jsb2cuYml0c3JjLmlvL3B1cmUtY3NzLXRvLW1ha2UtYS1idXR0b24tc2hpbmUtYW5kLWdlbnRseS1jaGFuZ2UtY29sb3JzLW92ZXItdGltZS01YjY4NWQ5YzZhN2UgXFxuUGFpZ2UgTmllZHJpbmdoYXVzXFxuKi9cXG5cXG4jYWRkX3Rhc2sge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNjBweDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiBmb3Igc2hpbmUgJiBncmFkaWVudCBlZmZlY3RzIHRvIHdvcmsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAvKiBmb3IgYmFja2dyb3VuZCBjb2xvciBzaGlmdCAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDIsIDE1MSwgMTU3LCAwLjcpLCByZ2JhKDIyOSwgMjMxLCAyMzUsIDAuNykpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMjAwJTtcXG4gICAgYW5pbWF0aW9uOiBUcmFuc2l0aW9uaW5nQmFja2dyb3VuZCAxMHMgZWFzZSBpbmZpbml0ZTtcXG4gICAgLyogdG8gZWFzZSB0aGUgYnV0dG9uIGdyb3d0aCBvbiBob3ZlciAqL1xcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xcbn1cXG5cXG4vKiBwc3VlZG8tZWxlbWVudCBzaGluZSBhbmltYXRpb24gbGVmdCBzaWRlICovXFxuI2FkZF90YXNrOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcXG59XFxuXFxuLyogcHN1ZWRvLWVsZW1lbnQgc2hpbmUgYW5pbWF0aW9uIHJpZ2h0IHNpZGUgKi9cXG4jYWRkX3Rhc2s6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcXG59XFxuXFxuLyogZ3JvdyBidXR0b24gYW5kIGNoYW5nZSBiYWNrZ3JvdW5kIGdyYWRpZW50IG9uIGhvdmVyICovXFxuI2FkZF90YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyLCAxNTEsIDE1NywgMC43KSwgcmdiYSgyMjksIDIzMSwgMjM1LCAwLjcpKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHBzdWVkby1lbGVtZW50cyBmb3IgcmlnaHQtIGFuZCBsZWZ0LXNpZGUgc2hpbmUgYW5pbWF0aW9ucyAqL1xcbiNhZGRfdGFzazo6YmVmb3JlLFxcbiNhZGRfdGFzazo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7XFxuICAgIHRyYW5zaXRpb246IDAuN3M7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gRXhwYW5kIHRoaXMgZnVuY3Rpb24gdG8gY3JlYXRlIGEgZnVsbC1mbGVkZ2VkIGVsZW1lbnQgb24gdGhlIHBhZ2Vcbi8vIHRoYXQgaGFzIGFsbCB0aGUgZnVuY2lvbmFsaXR5IHJlcXVpcmVkIG9mIGEgVG9Eby9UYXNrIG9iamVjdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FyZChjb250YWluZXJfZWxlbWVudCwgY2FyZF9jbGFzcywgVGFza09iamVjdCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJfZWxlbWVudCk7XG5cbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjYXJkX2NsYXNzKTtcbiAgICAvLyBBZGQgXCJwcmlvcml0eVwiIGFzIGNsYXNzIGF0dHIgdG8gYWxsb3cgc29ydGluZyBsYXRlcj9cbiAgICBjYXJkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFRhc2tPYmplY3QucHJpb3JpdHkpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgVGFza09iamVjdC5pZCk7XG5cbiAgICBsZXQgbmFtZV9vZl9jYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG5hbWVfb2ZfY2FyZC50ZXh0Q29udGVudCA9IFRhc2tPYmplY3QubmFtZTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKG5hbWVfb2ZfY2FyZCk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25fb2ZfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uX29mX2NhcmQudGV4dENvbnRlbnQgPSBUYXNrT2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25fb2ZfY2FyZCk7XG5cbiAgICBsZXQgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkdWVfZGF0ZS50ZXh0Q29udGVudCA9IFRhc2tPYmplY3QuZHVlO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlX2RhdGUpO1xuXG4gICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tib3gubmFtZSA9IFwiQ29tcGxldGVkXCI7XG4gICAgY2hlY2tib3guaWQgPSBgJHtUYXNrT2JqZWN0LmlkfV9jaGVja2JveGA7XG4gICAgY2hlY2tib3gudmFsdWUgPSBUYXNrT2JqZWN0LmNvbXBsZXRlZDtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKFRhc2tPYmplY3QuY29tcGxldGVkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBjaGVja2JveC52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICBUYXNrT2JqZWN0LmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2JveC52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgVGFza09iamVjdC5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9KVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4vLyBJIGRvbid0IG5lY2Vzc2FyaWx5IHdhbnQgdGhpcyBtb2R1bGUgdG8gZGVwZW5kIG9uIFRhc2sgb3IgQ2FyZC4gSSB3YW50XG4vLyB0byBiZSBhYmxlIHRvIHVzZSBpdCBmb3IgYW55IHBvcHVwIGZvcm0gb24gYW55IHBhZ2UuXG4vLyBTbyBpbnN0ZWFkIG9mIGltcG9ydGluZywgSSBuZWVkIHRvIGFsbG93IGl0IHRvIGJlIGNyZWF0ZWQgd2l0aCBjYWxsc1xuLy8gdG8gdGhvc2UgZnVuY3Rpb25zLiBUaGUgaW50ZWdyYXRpb24gc2hvdWxkIGJlIGRvbmUgaW4gaW5kZXguanMuLi4uLlxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiXG5pbXBvcnQgY2FyZCBmcm9tIFwiLi9jYXJkQ3JlYXRvci5qc1wiO1xuXG5cbi8vIE1ha2UgYSBjbGFzcyB0byBob2xkIHRoZSBmb3JtIGFuZCBpdHMgbGFiZWxzXG4vLyBTaG91bGQgSSBjcmVhdGUgdGhlIEhpZGRlbkZvcm1FbGVtZW50LCB0aGVuIGFkZCBhIFxuLy8gbWV0aG9kIHRvIGFkZCBmaWVsZHM/IEkgdGhpbmsgc28uXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaWRkZW5Nb2RhbEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsX2lkLCBwYXJlbnRfZWxlbWVudCwgYWN0aXZhdGlvbl9idXR0b25faWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IG1vZGFsX2lkO1xuICAgICAgICB0aGlzLnBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudF9lbGVtZW50KTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFjdGl2YXRpb25fYnV0dG9uX2lkKVxuICAgICAgICB0aGlzLmFycmF5X29mX2ZpZWxkcyA9IFtdO1xuICAgICAgICB0aGlzLnN1Ym1pdF9idXR0b25zX2FycmF5ID0gW107XG4gICAgICAgIHRoaXMuY2xlYXJfYnV0dG9uc19hcnJheSA9IFtdO1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1vZGFsXCIpO1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuaWQpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGlvbl9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH07XG5cbiAgICBhZGRfaW5wdXQobmV3X2lucHV0LCB0eXBlID0gXCJ0ZXh0XCIpIHtcblxuICAgICAgICBsZXQgaW5wdXRfdG9fYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dF90b19hZGQudHlwZSA9IHR5cGU7XG4gICAgICAgIGxldCBpbnB1dF9zcGFjZXNfcmVtb3ZlZCA9IG5ld19pbnB1dC5yZXBsYWNlKC8gL2csIFwiXCIpO1xuICAgICAgICBpbnB1dF90b19hZGQuaWQgPSBpbnB1dF9zcGFjZXNfcmVtb3ZlZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpbnB1dF90b19hZGQuY2xhc3MgPSBcImlucHV0X2ZpZWxkXCI7XG5cbiAgICAgICAgbGV0IGxhYmVsX2Zvcl9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWxfZm9yX2lucHV0Lmh0bWxGb3IgPSBpbnB1dF90b19hZGQ7XG4gICAgICAgIGxhYmVsX2Zvcl9pbnB1dC50ZXh0Q29udGVudCA9IG5ld19pbnB1dDtcbiAgICAgICAgbGFiZWxfZm9yX2lucHV0LmNsYXNzID0gXCJmaWVsZF9sYWJlbFwiO1xuXG4gICAgICAgIHRoaXMuYXJyYXlfb2ZfZmllbGRzLnB1c2gobGFiZWxfZm9yX2lucHV0KTtcbiAgICAgICAgdGhpcy5hcnJheV9vZl9maWVsZHMucHVzaChpbnB1dF90b19hZGQpO1xuICAgICAgICAvL0RvIEkgbmVlZCB0byBzYXZlIHRoYXQgaWQgYW55d2hlcmUgb3RoZXIgdGhhbiB0aGUgYXJyYXk/XG5cbiAgICB9O1xuXG4gICAgYXBwZW5kX3RvX3BhcmVudCgpIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmFycmF5X29mX2ZpZWxkcy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5hcnJheV9vZl9maWVsZHNbeF0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRvZ2dsZV9oaWRkZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBhZGRfYnV0dG9ucygpIHtcbiAgICAgICAgbGV0IGNsZWFyX2Zvcm1fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2xlYXJfZm9ybV9idXR0b24udGV4dENvbnRlbnQgPSBcIkNsZWFyIEZvcm1cIjtcbiAgICAgICAgdGhpcy5jbGVhcl9idXR0b25zX2FycmF5LnB1c2goY2xlYXJfZm9ybV9idXR0b24pO1xuXG4gICAgICAgIGxldCBjcmVhdGVfYW5vdGhlcl9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnN1Ym1pdF9idXR0b25zX2FycmF5LnB1c2goY3JlYXRlX2Fub3RoZXJfYnV0dG9uKTtcbiAgICAgICAgdGhpcy5jbGVhcl9idXR0b25zX2FycmF5LnB1c2goY3JlYXRlX2Fub3RoZXJfYnV0dG9uKTtcbiAgICAgICAgY3JlYXRlX2Fub3RoZXJfYnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgQW5vdGhlclwiO1xuXG4gICAgICAgIGxldCBzdWJtaXRfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5zdWJtaXRfYnV0dG9uc19hcnJheS5wdXNoKHN1Ym1pdF9idXR0b24pO1xuICAgICAgICB0aGlzLmNsZWFyX2J1dHRvbnNfYXJyYXkucHVzaChzdWJtaXRfYnV0dG9uKTtcbiAgICAgICAgc3VibWl0X2J1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICAgIHN1Ym1pdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZV9oaWRkZW4oKTtcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgY2xvc2VfcG9wdXBfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2xvc2VfcG9wdXBfYnV0dG9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuICAgICAgICBjbG9zZV9wb3B1cF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZV9oaWRkZW4oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQoY2xlYXJfZm9ybV9idXR0b24pO1xuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZChzdWJtaXRfYnV0dG9uKTtcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlX2Fub3RoZXJfYnV0dG9uKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuX3N1Ym1pdF9idXR0b25fb2JqZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0X2J1dHRvbnNfYXJyYXk7XG4gICAgfTtcblxuICAgIGNsZWFyX2ZpZWxkcygpIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmFycmF5X29mX2ZpZWxkcy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXJyYXlfb2ZfZmllbGRzW3hdLmNsYXNzID09IFwiaW5wdXRfZmllbGRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlfb2ZfZmllbGRzW3hdLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybl9maWVsZF92YWx1ZXMoKSB7XG4gICAgICAgIGxldCB2YWx1ZXNfb2ZfZmllbGRzID0gW107XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5hcnJheV9vZl9maWVsZHMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFycmF5X29mX2ZpZWxkc1t4XS5jbGFzcyA9PSBcImlucHV0X2ZpZWxkXCIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNfb2ZfZmllbGRzLnB1c2godGhpcy5hcnJheV9vZl9maWVsZHNbeF0udmFsdWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRoZSBiZWxvdyBpZiAvIGVsc2UgaXMgY29tbWVudGVkIG91dCBiZWNhdXNlIEknbSBub3Qgc3VyZSB0aGF0IEkgXG4gICAgICAgICAgICAvLyB3YW50IHRoZSBsYWJlbHMgdHJhbnNmZXJyZWQgb3V0IGludG8gdGhlIGFycmF5LiBGb3Igbm93LCBqdXN0IHRoZSB2YWx1ZXMuXG4gICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMuYXJyYXlfb2ZfZmllbGRzW3hdLmNsYXNzID09IFwiaW5wdXRfZmllbGRcIikge1xuICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZXNfb2ZfZmllbGRzLnB1c2godGhpcy5hcnJheV9vZl9maWVsZHNbeF0udmFsdWUpO1xuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHZhbHVlc19vZl9maWVsZHMucHVzaCh0aGlzLmFycmF5X29mX2ZpZWxkc1t4XS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdmFsdWVzX29mX2ZpZWxkcztcbiAgICB9O1xufTtcblxuIiwiLy8gZXhwYW5kIHRoZSBhdHRyaWJ1dGVzIGFuZCBmdW5jdGlvbnMgb2YgdGhlIFRhc2sgY2xhc3MgdG8gaGFuZGxlXG4vLyBjcmVhdGlvbiBhbmQgZGVsZXRpb24gb2YgZWFjaCBvYmplY3QuIFdoZXJlIHRvIHB1dCB0aGUgYXJyYXkgb3Jcbi8vIGRpY3Rpb25hcnkgdGhhdCBob2xkcyBhbGwgb2YgdGhlIFRhc2tzIHVudGlsIHRoZXkgYXJlIHNhdmVkIHRvXG4vLyBsb2NhbCBzdG9yYWdlP1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICAvLyBwcmlvcml0eSBvZiAwIGlzIHRoZSBoaWdoZXN0IHByaW9yaXR5XG4gICAgLy8gbmVlZCB0byBmaWd1cmUgb3V0IGEgYmV0dGVyIHdheSBmb3IgZGVmYXVsdCB2YWx1ZSBvZiB0YXNrX25hbWUgdG8gcHJldmVudFxuICAgIC8vIGR1cGxpY2F0aW9uIGFuZCBodG1sIGlkIGNvbmZsaWN0c1xuICAgIGNvbnN0cnVjdG9yKHRhc2tfbmFtZSA9IFwiVGFza1wiLCBkZXNjcmlwdGlvbiA9IFwiXCIsIGR1ZSA9IDAsIHByaW9yaXR5ID0gMCwgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGFza19uYW1lO1xuICAgICAgICB0aGlzLmlkID0gdGFza19uYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlID0gZHVlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH07XG4gICAgLy8gVmFsaWRhdGUgZWFjaCBhdHRyaWJ1dGUgdG8gcHJldmVudCBpbnZhbGlkIHZhbHVlc1xuICAgIC8vIGlzIHRoYXQgU09QIGZvciB1c2luZyBjbGFzc2VzPyBQcmV2ZW50IGNyZWF0aW9uIG9mIG9iamVjdFxuICAgIC8vIGlmIGlucHV0IHZhbHVlIGlzIGludmFsaWQ/XG5cbiAgICAvLyBtYWtlIGEgZGVsZXRlciBtZXRob2QgZm9yIHRoZSBjbGFzcyB0byByZW1vdmUgaXQgZnJvbSBleGlzdGVuY2U/XG4gICAgLy8gb3IgZG9lcyB0aGF0IGdvIGVsc2V3aGVyZXM/IGxvY2FsX3N0b3JhZ2U/XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIlxuaW1wb3J0IGNhcmQgZnJvbSBcIi4vY2FyZENyZWF0b3IuanNcIjtcbi8vIGltcG9ydCB7IFRhc2tJbnB1dEZpZWxkQ3JlYXRvciwgUG9wdXBGb3JtQnV0dG9ucyB9IGZyb20gXCIuL3BvcHVwRm9ybS5qc1wiO1xuaW1wb3J0IEhpZGRlbk1vZGFsRWxlbWVudCBmcm9tIFwiLi9jbGFzc1BvcHVwLmpzXCJcblxuLy8gYSBtYW51YWwgdXNlIG9mIHRoZSBUYXNrIGNsYXNzIHRvIGNyZWF0ZSBhIFRhc2sgb2JqZWN0LlxubGV0IGV4YW1wbGVUYXNrID0gbmV3IFRhc2soXCJUZXN0dGFza1wiLCBcIkRlc2NyaXB0aW9uIG9mIHRhc2tcIiwgXCJBdWcgMVwiLCBcIjBcIik7XG5cbmxldCBleGFtcGxlX3Rhc2tfd2l0aF9zcGFjZXMgPSBuZXcgVGFzayhcIlRlc3QgVGFza1wiLCBcIlRoaXMgdGFzayBoYXMgc3BhY2VzXCIsIFwiQXVnIDFcIiwgXCIyXCIpO1xuXG5sZXQgbW9kYWxfZmllbGRzX2FycmF5ID0gW1xuICAgIFwiVGFzayBOYW1lXCIsXG4gICAgXCJEZXNjcmlwdGlvbiBvZiBUYXNrXCIsXG4gICAgXCJEdWUgRGF0ZVwiLFxuICAgIFwiUHJpb3JpdHlcIixcbl07XG5cbmxldCB2YWx1ZXNfb2ZfaW5wdXRfZmllbGRzID0gW107XG5cbmxldCBwb3B1cF9tb2RhbCA9IG5ldyBIaWRkZW5Nb2RhbEVsZW1lbnQoXCJwb3B1cF9tb2RhbFwiLCBcIm1vZGFsXCIsIFwiYWRkX3Rhc2tcIik7XG5mb3IgKGxldCB4ID0gMDsgeCA8IG1vZGFsX2ZpZWxkc19hcnJheS5sZW5ndGg7IHgrKykge1xuICAgIHBvcHVwX21vZGFsLmFkZF9pbnB1dChtb2RhbF9maWVsZHNfYXJyYXlbeF0sIFwidGV4dFwiKTtcbn07XG5wb3B1cF9tb2RhbC5hcHBlbmRfdG9fcGFyZW50KCk7XG5wb3B1cF9tb2RhbC5hZGRfYnV0dG9ucygpO1xuXG5cbi8vIGZvciAobGV0IHggPSAwOyB4IDwgcG9wdXBfbW9kYWwuY2xlYXJfYnV0dG9uc19hcnJheS5sZW5ndGg7IHgrKykge1xuLy8gICAgIHBvcHVwX21vZGFsLmNsZWFyX2J1dHRvbnNfYXJyYXlbeF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4vLyAgICAgICAgIHBvcHVwX21vZGFsLmNsZWFyX2ZpZWxkcygpO1xuLy8gICAgIH0pO1xuLy8gfTtcblxuZnVuY3Rpb24gY2FyZF9mcm9tX2lucHV0KCkge1xuICAgIHZhbHVlc19vZl9pbnB1dF9maWVsZHMgPSBbXTtcbiAgICB2YWx1ZXNfb2ZfaW5wdXRfZmllbGRzLnB1c2gocG9wdXBfbW9kYWwucmV0dXJuX2ZpZWxkX3ZhbHVlcygpKTtcbiAgICBpZiAodmFsdWVzX29mX2lucHV0X2ZpZWxkc1swXVswXSAhPSBcIlwiKSB7XG4gICAgICAgIGlmICh2YWx1ZXNfb2ZfaW5wdXRfZmllbGRzWzBdWzFdICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXNfb2ZfaW5wdXRfZmllbGRzWzBdWzJdICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzX29mX2lucHV0X2ZpZWxkc1swXVszXSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdfdGFzayA9IG5ldyBUYXNrKC4uLnZhbHVlc19vZl9pbnB1dF9maWVsZHNbMF0pO1xuICAgICAgICAgICAgICAgICAgICBjYXJkKFwiY2FyZHNcIiwgXCJwcm9qZWN0XCIsIG5ld190YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2codmFsdWVzX29mX2lucHV0X2ZpZWxkcyk7XG4gICAgcG9wdXBfbW9kYWwuY2xlYXJfZmllbGRzKCk7XG59XG5cblxubGV0IHN1Ym1pdF9idXR0b25zID0gW107XG5zdWJtaXRfYnV0dG9ucy5wdXNoKHBvcHVwX21vZGFsLnN1Ym1pdF9idXR0b25zX2FycmF5KTtcbmZvciAobGV0IHggPSAwOyB4IDwgcG9wdXBfbW9kYWwuc3VibWl0X2J1dHRvbnNfYXJyYXkubGVuZ3RoOyB4KyspIHtcbiAgICBzdWJtaXRfYnV0dG9uc1swXVt4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY2FyZF9mcm9tX2lucHV0KCk7XG4gICAgfSk7XG59O1xuLy8gbm93IEkgaGF2ZSBhbiBldmVudCBsaXN0ZW5lciAoY3JlYXRlZCBoZXJlKSB0byBwdWxsIHRoZSBhcnJheSBvZiB2YWx1ZXMgYW5kIHN0b3JlIGl0XG4vLyBpbiB2YWx1ZXNfb2ZfaW5wdXRfZmllbGRzWzBdLlxuXG4vLyBUaGlzIGlzIGVyYXNlZCBlYWNoIHRpbWUgdGhlIHRoaW5neSBpcyBjYWxsZWQuIFRoZSB2YWx1ZXMgYXJlIGluIHRoZSBvcmRlciBvZlxuLy8gZmllbGRuYW1lLCB2YWx1ZV9vZl9maWVsZCwgZmllbGRuYW1lLCB2YWx1ZV9vZl9maWVsZCBldGMgZXRjLi4uXG5cbi8vIGkgY2FuIHVzZSB0aGlzIHVubW9kaWZpZWQgdG8gY3JlYXRlIGNhcmRzIHdpdGggY3VzdG9tIG5hbWUgZmllbGRzLiBJIHNob3VsZCBkbyB0aGlzLlxuLy8gSSBjYW4gdXNlIHRoZSBvcmRlciBvZiB0aGUgYXJyYXkgYXMgaXQgaXMgZm9yIG5vdy5cblxuLy8gY2FyZChcImNhcmRzXCIsIFwicHJvamVjdFwiLCAoKSk7XG4vLyBOb3cgdGhhdCB0aGUgbW9kYWwgcG9wcyB1cCBhbmQgZGlzYXBwZWFycyB3aXRoIG5vIGlzc3VlcywgYW5kIHRoZSBpbnB1dHNcbi8vIGFwcGVhciBhcyB3ZWxsLCBpdHMgYWxzbyB0aW1lIHRvIGdpdmUgdGhlIG1vZGFsIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBhbiBvYmplY3QgdXNpbmdcbi8vIHRoZSBUYXNrIGNsYXNzIGNyZWF0b3IsIGFuZCBhcHBlbmQgdGhhdCB0byB0aGUgRE9NLiBUaGF0IHNob3VsZCBiZS4uLiBjYWxsZWRcbi8vIGJ5IGFuZCBpbiB0aGUgbW9kYWwgbW9kdWxlPyBJREsuIE9yIGhlcmU/XG5cbi8vIE9uY2UgdGhlIG1vZGFsIGlzIGFibGUgdG8gY3JlYXRlIGEgdGFzaywgYXV0b21hdGUgdGhlIGNyZWF0aW9uIG9mIGEgY2FyZC5cbi8vIFdvdWxkIHRoYXQgYmUgd2l0aGluIHRoZSBUYXNrIG1vZHVsZT8gQXMgYSBtZXRob2Qgb2YgdGhlIFRhc2sgY2xhc3M/XG5cbi8vIFNob3VsZCB0aGUgbW9kYWwgc2ltcGx5IHJldHVybiBhIGxpc3Qgb2Ygc3RyaW5ncyAoVGhlIGluZm9ybWF0aW9uIGZvciBhIFRhc2sgb2JqZWN0KSxcbi8vIHdoaWNoIHdvdWxkIHRoZW5cbi8vIGJlIHVzZWQgYnkgVGFzaz8gSSB0aGluayBzby4gSSB3b3VsZCBoYXZlIHRvIHJlZmFjdG9yIFRhc2sgdG8gYWNjZXB0IGFuIGFycmF5XG4vLyBpbnN0ZWFkIG9mIG11bHRpcGxlIGFyZ3MuXG5cbi8vIFRoZW4gY3JlYXRlIGEgY2FyZCB1c2luZyB0aGUgVGFzayBvYmplY3QhIEF1dG9tYXRlIHRoYXQuLi4gaG93P1xuXG5cbi8vIGludm9raW5nIGEgbmV3IGNhcmQgd2l0aCBvYmplY3Qgb2YgY2xhc3MgVGFzaywgYWxsb3dpbmcgY2FyZCBmdW5jdGlvblxuLy8gdG8gaGFuZGxlIGNyZWF0aW9uIGFuZCBhcHBlbmRpbmcgb2YgVGFzayB0byBET00uXG5jYXJkKFwiY2FyZHNcIiwgXCJwcm9qZWN0XCIsIGV4YW1wbGVUYXNrKTtcbmNhcmQoXCJjYXJkc1wiLCBcInByb2plY3RcIiwgZXhhbXBsZV90YXNrX3dpdGhfc3BhY2VzKTtcblxuLy8gY3JlYXRlIGEgc2VwYXJhdGUgbW9kdWxlIGZvciB0aGUgcG9wdXAgZm9ybSBpbnB1dCwgdG8gY3JlYXRlIG5ldyB0YXNrcyBmcm9tIHRoZVxuLy8gI2FkZF90YXNrIGJ1dHRvbi4gVXNlIHRoZSBcImxpYnJhcnlcIiBpbnB1dCBmb3JtIGFzIGFuIGV4YW1wbGUgdG8gd29yayBmcm9tLlxuXG4vLyBmaWd1cmUgb3V0IGhvdyB0byB1c2UgbG9jYWxfc3RvcmFnZSBtb2R1bGUgdG8gc2F2ZSB0aGUgYWRkZWQgdGFzayB0byB1c2VyJ3MgbG9jYWxcbi8vIHN0b3JhZ2UuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=