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

    clear_fields_event_listener() {
        for (let x = 0; x < this.clear_buttons_array.length; x++) {
            this.clear_buttons_array[x].addEventListener("click", (e) => {
                for (let x = 0; x < this.array_of_fields.length; x++) {
                    if (this.array_of_fields[x].class == "input_field") {
                        this.array_of_fields[x].value = "";
                    };
                }
            });
        }
    };

    return_field_values() {
        let values_of_fields = [];
        for (let x = 0; x < this.array_of_fields.length; x++) {
            if (this.array_of_fields[x].class == "input_field") {
                values_of_fields.push(this.array_of_fields[x].value);
            } else {
                values_of_fields.push(this.array_of_fields[x].textContent);
            }
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
popup_modal.clear_fields_event_listener();

let submit_buttons = [];
submit_buttons.push(popup_modal.submit_buttons_array);
for (let x = 0; x < popup_modal.submit_buttons_array.length; x++) {
    submit_buttons[0][x].addEventListener("click", (e) => {
        values_of_input_fields = [];
        values_of_input_fields.push(popup_modal.return_field_values());
        console.log(values_of_input_fields);
    });
};

// let clear_buttons = popup_modal.clear_buttons_array;
// for (let x = 0; x < clear_buttons.length; x++) {
//     clear_buttons[x].addEventListener("click", (e) => {
//         popup_modal.clear_fields_event_listener();
//     });
// };



// add event listener here to export field values then clear fields using
// HiddenModalElement (export_fields) func


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
(0,_cardCreator_js__WEBPACK_IMPORTED_MODULE_2__["default"])("cards", "project", exampleTask);
(0,_cardCreator_js__WEBPACK_IMPORTED_MODULE_2__["default"])("cards", "project", example_task_with_spaces);

// create a separate module for the popup form input, to create new tasks from the
// #add_task button. Use the "library" input form as an example to work from.

// figure out how to use local_storage module to save the added task to user's local
// storage.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ087QUFDUTtBQUNwQyxZQUFZLDBDQUEwQztBQUNOOztBQUVoRDtBQUNBLHNCQUFzQixnREFBSTs7QUFFMUIsbUNBQW1DLGdEQUFJOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLHNEQUFrQjtBQUN4QyxnQkFBZ0IsK0JBQStCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBNkM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsMkRBQUk7QUFDSiwyREFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXJkQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jbGFzc1BvcHVwLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgMTB2dykgMWZyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxufVxcblxcbi5yaWdodExpbmtzLFxcbi5yaWdodExpbmtzPmEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBjb2xvcjogI0U1RTdFQjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5oZWFkZXI+aW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG5oZWFkZXI+aDIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgY29sb3I6ICNFNUU3RUI7XFxufVxcblxcbmhlYWRlcj4ucmlnaHRMaW5rcyB7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAtMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFza3M+cCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNFNUU3RUI7XFxufVxcblxcbi50YXNrcz5hIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6ICNFNUU3RUI7XFxufVxcblxcbiNjYXJkcyB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbi5wcm9qZWN0PnAge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxufVxcblxcbi5wcm9qZWN0PmltZyxcXG4ucHJvamVjdD4qPmltZyB7XFxuICAgIGJvcmRlcjogMC4yNWVtO1xcbiAgICBib3JkZXItY29sb3I6ICMzODgyRjY7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbmJvZHk+Zm9vdGVyIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjkzNztcXG4gICAgY29sb3I6ICNGOUZBRjg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIFRyYW5zaXRpb25pbmdCYWNrZ3JvdW5kIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMSUgMCU7XFxuICAgIH1cXG5cXG4gICAgNTAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk5JSAxMDAlO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMSUgMCU7XFxuICAgIH1cXG59XFxuXFxuLyogXFxuVGhlIGZvbGxvd2luZyBDU1Mgc2hhbWVsZXNzbHkgYm9ycm93ZWQgZnJvbSBcXG5odHRwczovL2Jsb2cuYml0c3JjLmlvL3B1cmUtY3NzLXRvLW1ha2UtYS1idXR0b24tc2hpbmUtYW5kLWdlbnRseS1jaGFuZ2UtY29sb3JzLW92ZXItdGltZS01YjY4NWQ5YzZhN2UgXFxuUGFpZ2UgTmllZHJpbmdoYXVzXFxuKi9cXG5cXG4jYWRkX3Rhc2sge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNjBweDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiBmb3Igc2hpbmUgJiBncmFkaWVudCBlZmZlY3RzIHRvIHdvcmsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAvKiBmb3IgYmFja2dyb3VuZCBjb2xvciBzaGlmdCAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDIsIDE1MSwgMTU3LCAwLjcpLCByZ2JhKDIyOSwgMjMxLCAyMzUsIDAuNykpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMjAwJTtcXG4gICAgYW5pbWF0aW9uOiBUcmFuc2l0aW9uaW5nQmFja2dyb3VuZCAxMHMgZWFzZSBpbmZpbml0ZTtcXG4gICAgLyogdG8gZWFzZSB0aGUgYnV0dG9uIGdyb3d0aCBvbiBob3ZlciAqL1xcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xcbn1cXG5cXG4vKiBwc3VlZG8tZWxlbWVudCBzaGluZSBhbmltYXRpb24gbGVmdCBzaWRlICovXFxuI2FkZF90YXNrOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcXG59XFxuXFxuLyogcHN1ZWRvLWVsZW1lbnQgc2hpbmUgYW5pbWF0aW9uIHJpZ2h0IHNpZGUgKi9cXG4jYWRkX3Rhc2s6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcXG59XFxuXFxuLyogZ3JvdyBidXR0b24gYW5kIGNoYW5nZSBiYWNrZ3JvdW5kIGdyYWRpZW50IG9uIGhvdmVyICovXFxuI2FkZF90YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyLCAxNTEsIDE1NywgMC43KSwgcmdiYSgyMjksIDIzMSwgMjM1LCAwLjcpKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHBzdWVkby1lbGVtZW50cyBmb3IgcmlnaHQtIGFuZCBsZWZ0LXNpZGUgc2hpbmUgYW5pbWF0aW9ucyAqL1xcbiNhZGRfdGFzazo6YmVmb3JlLFxcbiNhZGRfdGFzazo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7XFxuICAgIHRyYW5zaXRpb246IDAuN3M7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLDhDQUE4QztJQUM5QyxTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCw4Q0FBOEM7SUFDOUMsd0RBQXdEO0lBQ3hELFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBOzs7O0NBSUM7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7bUJBQ2U7SUFDZixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLDJGQUEyRjtJQUMzRiwwQkFBMEI7SUFDMUIsb0RBQW9EO0lBQ3BELHVDQUF1QztJQUN2QyxnQkFBZ0I7QUFDcEI7O0FBRUEsNkNBQTZDO0FBQzdDO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLGtCQUFrQjtJQUNsQiwyQ0FBMkM7QUFDL0M7O0FBRUEsOENBQThDO0FBQzlDO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLGlCQUFpQjtJQUNqQiwyQ0FBMkM7QUFDL0M7O0FBRUEsd0RBQXdEO0FBQ3hEO0lBQ0ksMkZBQTJGO0lBQzNGLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBLDhEQUE4RDtBQUM5RDs7SUFFSSwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1MHB4LCAxMHZ3KSAxZnI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjkzNztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLnJpZ2h0TGlua3MsXFxuLnJpZ2h0TGlua3M+YSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGNvbG9yOiAjRTVFN0VCO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbmhlYWRlcj5pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxufVxcblxcbmhlYWRlcj5oMiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBjb2xvcjogI0U1RTdFQjtcXG59XFxuXFxuaGVhZGVyPi5yaWdodExpbmtzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMiAvIC0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YXNrcz5wIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0U1RTdFQjtcXG59XFxuXFxuLnRhc2tzPmEge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogI0U1RTdFQjtcXG59XFxuXFxuI2NhcmRzIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDIwMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLnByb2plY3Q+cCB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnByb2plY3Q+aW1nLFxcbi5wcm9qZWN0Pio+aW1nIHtcXG4gICAgYm9yZGVyOiAwLjI1ZW07XFxuICAgIGJvcmRlci1jb2xvcjogIzM4ODJGNjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuYm9keT5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xcbiAgICBjb2xvcjogI0Y5RkFGODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbkBrZXlmcmFtZXMgVHJhbnNpdGlvbmluZ0JhY2tncm91bmQge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxJSAwJTtcXG4gICAgfVxcblxcbiAgICA1MCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTklIDEwMCU7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxJSAwJTtcXG4gICAgfVxcbn1cXG5cXG4vKiBcXG5UaGUgZm9sbG93aW5nIENTUyBzaGFtZWxlc3NseSBib3Jyb3dlZCBmcm9tIFxcbmh0dHBzOi8vYmxvZy5iaXRzcmMuaW8vcHVyZS1jc3MtdG8tbWFrZS1hLWJ1dHRvbi1zaGluZS1hbmQtZ2VudGx5LWNoYW5nZS1jb2xvcnMtb3Zlci10aW1lLTViNjg1ZDljNmE3ZSBcXG5QYWlnZSBOaWVkcmluZ2hhdXNcXG4qL1xcblxcbiNhZGRfdGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiA2MHB4OyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qIGZvciBzaGluZSAmIGdyYWRpZW50IGVmZmVjdHMgdG8gd29yayAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8qIGZvciBiYWNrZ3JvdW5kIGNvbG9yIHNoaWZ0ICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMiwgMTUxLCAxNTcsIDAuNyksIHJnYmEoMjI5LCAyMzEsIDIzNSwgMC43KSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAyMDAlO1xcbiAgICBhbmltYXRpb246IFRyYW5zaXRpb25pbmdCYWNrZ3JvdW5kIDEwcyBlYXNlIGluZmluaXRlO1xcbiAgICAvKiB0byBlYXNlIHRoZSBidXR0b24gZ3Jvd3RoIG9uIGhvdmVyICovXFxuICAgIHRyYW5zaXRpb246IDAuNnM7XFxufVxcblxcbi8qIHBzdWVkby1lbGVtZW50IHNoaW5lIGFuaW1hdGlvbiBsZWZ0IHNpZGUgKi9cXG4jYWRkX3Rhc2s6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xcbn1cXG5cXG4vKiBwc3VlZG8tZWxlbWVudCBzaGluZSBhbmltYXRpb24gcmlnaHQgc2lkZSAqL1xcbiNhZGRfdGFzazo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xcbn1cXG5cXG4vKiBncm93IGJ1dHRvbiBhbmQgY2hhbmdlIGJhY2tncm91bmQgZ3JhZGllbnQgb24gaG92ZXIgKi9cXG4jYWRkX3Rhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDIsIDE1MSwgMTU3LCAwLjcpLCByZ2JhKDIyOSwgMjMxLCAyMzUsIDAuNykpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogcHN1ZWRvLWVsZW1lbnRzIGZvciByaWdodC0gYW5kIGxlZnQtc2lkZSBzaGluZSBhbmltYXRpb25zICovXFxuI2FkZF90YXNrOjpiZWZvcmUsXFxuI2FkZF90YXNrOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBFeHBhbmQgdGhpcyBmdW5jdGlvbiB0byBjcmVhdGUgYSBmdWxsLWZsZWRnZWQgZWxlbWVudCBvbiB0aGUgcGFnZVxuLy8gdGhhdCBoYXMgYWxsIHRoZSBmdW5jaW9uYWxpdHkgcmVxdWlyZWQgb2YgYSBUb0RvL1Rhc2sgb2JqZWN0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJkKGNvbnRhaW5lcl9lbGVtZW50LCBjYXJkX2NsYXNzLCBUYXNrT2JqZWN0KSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcl9lbGVtZW50KTtcblxuXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2FyZF9jbGFzcyk7XG4gICAgLy8gQWRkIFwicHJpb3JpdHlcIiBhcyBjbGFzcyBhdHRyIHRvIGFsbG93IHNvcnRpbmcgbGF0ZXI/XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBUYXNrT2JqZWN0LnByaW9yaXR5KTtcbiAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFRhc2tPYmplY3QuaWQpO1xuXG4gICAgbGV0IG5hbWVfb2ZfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBuYW1lX29mX2NhcmQudGV4dENvbnRlbnQgPSBUYXNrT2JqZWN0Lm5hbWU7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChuYW1lX29mX2NhcmQpO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uX29mX2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbl9vZl9jYXJkLnRleHRDb250ZW50ID0gVGFza09iamVjdC5kZXNjcmlwdGlvbjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX29mX2NhcmQpO1xuXG4gICAgbGV0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlX2RhdGUudGV4dENvbnRlbnQgPSBUYXNrT2JqZWN0LmR1ZTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZV9kYXRlKTtcblxuICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrYm94Lm5hbWUgPSBcIkNvbXBsZXRlZFwiO1xuICAgIGNoZWNrYm94LmlkID0gYCR7VGFza09iamVjdC5pZH1fY2hlY2tib3hgO1xuICAgIGNoZWNrYm94LnZhbHVlID0gVGFza09iamVjdC5jb21wbGV0ZWQ7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChUYXNrT2JqZWN0LmNvbXBsZXRlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgY2hlY2tib3gudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgVGFza09iamVjdC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tib3gudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIFRhc2tPYmplY3QuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfSlcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgIHJldHVybiBjYXJkO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuLy8gSSBkb24ndCBuZWNlc3NhcmlseSB3YW50IHRoaXMgbW9kdWxlIHRvIGRlcGVuZCBvbiBUYXNrIG9yIENhcmQuIEkgd2FudFxuLy8gdG8gYmUgYWJsZSB0byB1c2UgaXQgZm9yIGFueSBwb3B1cCBmb3JtIG9uIGFueSBwYWdlLlxuLy8gU28gaW5zdGVhZCBvZiBpbXBvcnRpbmcsIEkgbmVlZCB0byBhbGxvdyBpdCB0byBiZSBjcmVhdGVkIHdpdGggY2FsbHNcbi8vIHRvIHRob3NlIGZ1bmN0aW9ucy4gVGhlIGludGVncmF0aW9uIHNob3VsZCBiZSBkb25lIGluIGluZGV4LmpzLi4uLi5cbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIlxuaW1wb3J0IGNhcmQgZnJvbSBcIi4vY2FyZENyZWF0b3IuanNcIjtcblxuXG4vLyBNYWtlIGEgY2xhc3MgdG8gaG9sZCB0aGUgZm9ybSBhbmQgaXRzIGxhYmVsc1xuLy8gU2hvdWxkIEkgY3JlYXRlIHRoZSBIaWRkZW5Gb3JtRWxlbWVudCwgdGhlbiBhZGQgYSBcbi8vIG1ldGhvZCB0byBhZGQgZmllbGRzPyBJIHRoaW5rIHNvLlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlkZGVuTW9kYWxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbF9pZCwgcGFyZW50X2VsZW1lbnQsIGFjdGl2YXRpb25fYnV0dG9uX2lkKSB7XG4gICAgICAgIHRoaXMuaWQgPSBtb2RhbF9pZDtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRfZWxlbWVudCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvbl9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhY3RpdmF0aW9uX2J1dHRvbl9pZClcbiAgICAgICAgdGhpcy5hcnJheV9vZl9maWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy5zdWJtaXRfYnV0dG9uc19hcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmNsZWFyX2J1dHRvbnNfYXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtb2RhbFwiKTtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLmlkKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRpb25fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgYWRkX2lucHV0KG5ld19pbnB1dCwgdHlwZSA9IFwidGV4dFwiKSB7XG5cbiAgICAgICAgbGV0IGlucHV0X3RvX2FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRfdG9fYWRkLnR5cGUgPSB0eXBlO1xuICAgICAgICBsZXQgaW5wdXRfc3BhY2VzX3JlbW92ZWQgPSBuZXdfaW5wdXQucmVwbGFjZSgvIC9nLCBcIlwiKTtcbiAgICAgICAgaW5wdXRfdG9fYWRkLmlkID0gaW5wdXRfc3BhY2VzX3JlbW92ZWQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaW5wdXRfdG9fYWRkLmNsYXNzID0gXCJpbnB1dF9maWVsZFwiO1xuXG4gICAgICAgIGxldCBsYWJlbF9mb3JfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsX2Zvcl9pbnB1dC5odG1sRm9yID0gaW5wdXRfdG9fYWRkO1xuICAgICAgICBsYWJlbF9mb3JfaW5wdXQudGV4dENvbnRlbnQgPSBuZXdfaW5wdXQ7XG4gICAgICAgIGxhYmVsX2Zvcl9pbnB1dC5jbGFzcyA9IFwiZmllbGRfbGFiZWxcIjtcblxuICAgICAgICB0aGlzLmFycmF5X29mX2ZpZWxkcy5wdXNoKGxhYmVsX2Zvcl9pbnB1dCk7XG4gICAgICAgIHRoaXMuYXJyYXlfb2ZfZmllbGRzLnB1c2goaW5wdXRfdG9fYWRkKTtcbiAgICAgICAgLy9EbyBJIG5lZWQgdG8gc2F2ZSB0aGF0IGlkIGFueXdoZXJlIG90aGVyIHRoYW4gdGhlIGFycmF5P1xuXG4gICAgfTtcblxuICAgIGFwcGVuZF90b19wYXJlbnQoKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5hcnJheV9vZl9maWVsZHMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuYXJyYXlfb2ZfZmllbGRzW3hdKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0b2dnbGVfaGlkZGVuKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgYWRkX2J1dHRvbnMoKSB7XG4gICAgICAgIGxldCBjbGVhcl9mb3JtX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNsZWFyX2Zvcm1fYnV0dG9uLnRleHRDb250ZW50ID0gXCJDbGVhciBGb3JtXCI7XG4gICAgICAgIHRoaXMuY2xlYXJfYnV0dG9uc19hcnJheS5wdXNoKGNsZWFyX2Zvcm1fYnV0dG9uKTtcblxuICAgICAgICBsZXQgY3JlYXRlX2Fub3RoZXJfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5zdWJtaXRfYnV0dG9uc19hcnJheS5wdXNoKGNyZWF0ZV9hbm90aGVyX2J1dHRvbik7XG4gICAgICAgIHRoaXMuY2xlYXJfYnV0dG9uc19hcnJheS5wdXNoKGNyZWF0ZV9hbm90aGVyX2J1dHRvbik7XG4gICAgICAgIGNyZWF0ZV9hbm90aGVyX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIEFub3RoZXJcIjtcblxuICAgICAgICBsZXQgc3VibWl0X2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMuc3VibWl0X2J1dHRvbnNfYXJyYXkucHVzaChzdWJtaXRfYnV0dG9uKTtcbiAgICAgICAgdGhpcy5jbGVhcl9idXR0b25zX2FycmF5LnB1c2goc3VibWl0X2J1dHRvbik7XG4gICAgICAgIHN1Ym1pdF9idXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBzdWJtaXRfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVfaGlkZGVuKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGNsb3NlX3BvcHVwX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNsb3NlX3BvcHVwX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcbiAgICAgICAgY2xvc2VfcG9wdXBfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVfaGlkZGVuKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKGNsZWFyX2Zvcm1fYnV0dG9uKTtcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQoc3VibWl0X2J1dHRvbik7XG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKGNyZWF0ZV9hbm90aGVyX2J1dHRvbik7XG4gICAgfTtcblxuICAgIHJldHVybl9zdWJtaXRfYnV0dG9uX29iamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdF9idXR0b25zX2FycmF5O1xuICAgIH07XG5cbiAgICBjbGVhcl9maWVsZHNfZXZlbnRfbGlzdGVuZXIoKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jbGVhcl9idXR0b25zX2FycmF5Lmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyX2J1dHRvbnNfYXJyYXlbeF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmFycmF5X29mX2ZpZWxkcy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hcnJheV9vZl9maWVsZHNbeF0uY2xhc3MgPT0gXCJpbnB1dF9maWVsZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5X29mX2ZpZWxkc1t4XS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuX2ZpZWxkX3ZhbHVlcygpIHtcbiAgICAgICAgbGV0IHZhbHVlc19vZl9maWVsZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmFycmF5X29mX2ZpZWxkcy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXJyYXlfb2ZfZmllbGRzW3hdLmNsYXNzID09IFwiaW5wdXRfZmllbGRcIikge1xuICAgICAgICAgICAgICAgIHZhbHVlc19vZl9maWVsZHMucHVzaCh0aGlzLmFycmF5X29mX2ZpZWxkc1t4XS52YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlc19vZl9maWVsZHMucHVzaCh0aGlzLmFycmF5X29mX2ZpZWxkc1t4XS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB2YWx1ZXNfb2ZfZmllbGRzO1xuICAgIH07XG59OyIsIi8vIGV4cGFuZCB0aGUgYXR0cmlidXRlcyBhbmQgZnVuY3Rpb25zIG9mIHRoZSBUYXNrIGNsYXNzIHRvIGhhbmRsZVxuLy8gY3JlYXRpb24gYW5kIGRlbGV0aW9uIG9mIGVhY2ggb2JqZWN0LiBXaGVyZSB0byBwdXQgdGhlIGFycmF5IG9yXG4vLyBkaWN0aW9uYXJ5IHRoYXQgaG9sZHMgYWxsIG9mIHRoZSBUYXNrcyB1bnRpbCB0aGV5IGFyZSBzYXZlZCB0b1xuLy8gbG9jYWwgc3RvcmFnZT9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgLy8gcHJpb3JpdHkgb2YgMCBpcyB0aGUgaGlnaGVzdCBwcmlvcml0eVxuICAgIC8vIG5lZWQgdG8gZmlndXJlIG91dCBhIGJldHRlciB3YXkgZm9yIGRlZmF1bHQgdmFsdWUgb2YgdGFza19uYW1lIHRvIHByZXZlbnRcbiAgICAvLyBkdXBsaWNhdGlvbiBhbmQgaHRtbCBpZCBjb25mbGljdHNcbiAgICBjb25zdHJ1Y3Rvcih0YXNrX25hbWUgPSBcIlRhc2tcIiwgZGVzY3JpcHRpb24gPSBcIlwiLCBkdWUgPSAwLCBwcmlvcml0eSA9IDAsIGNvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHRhc2tfbmFtZTtcbiAgICAgICAgdGhpcy5pZCA9IHRhc2tfbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZSA9IGR1ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9O1xuICAgIC8vIFZhbGlkYXRlIGVhY2ggYXR0cmlidXRlIHRvIHByZXZlbnQgaW52YWxpZCB2YWx1ZXNcbiAgICAvLyBpcyB0aGF0IFNPUCBmb3IgdXNpbmcgY2xhc3Nlcz8gUHJldmVudCBjcmVhdGlvbiBvZiBvYmplY3RcbiAgICAvLyBpZiBpbnB1dCB2YWx1ZSBpcyBpbnZhbGlkP1xuXG4gICAgLy8gbWFrZSBhIGRlbGV0ZXIgbWV0aG9kIGZvciB0aGUgY2xhc3MgdG8gcmVtb3ZlIGl0IGZyb20gZXhpc3RlbmNlP1xuICAgIC8vIG9yIGRvZXMgdGhhdCBnbyBlbHNld2hlcmVzPyBsb2NhbF9zdG9yYWdlP1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCJcbmltcG9ydCBjYXJkIGZyb20gXCIuL2NhcmRDcmVhdG9yLmpzXCI7XG4vLyBpbXBvcnQgeyBUYXNrSW5wdXRGaWVsZENyZWF0b3IsIFBvcHVwRm9ybUJ1dHRvbnMgfSBmcm9tIFwiLi9wb3B1cEZvcm0uanNcIjtcbmltcG9ydCBIaWRkZW5Nb2RhbEVsZW1lbnQgZnJvbSBcIi4vY2xhc3NQb3B1cC5qc1wiXG5cbi8vIGEgbWFudWFsIHVzZSBvZiB0aGUgVGFzayBjbGFzcyB0byBjcmVhdGUgYSBUYXNrIG9iamVjdC5cbmxldCBleGFtcGxlVGFzayA9IG5ldyBUYXNrKFwiVGVzdHRhc2tcIiwgXCJEZXNjcmlwdGlvbiBvZiB0YXNrXCIsIFwiQXVnIDFcIiwgXCIwXCIpO1xuXG5sZXQgZXhhbXBsZV90YXNrX3dpdGhfc3BhY2VzID0gbmV3IFRhc2soXCJUZXN0IFRhc2tcIiwgXCJUaGlzIHRhc2sgaGFzIHNwYWNlc1wiLCBcIkF1ZyAxXCIsIFwiMlwiKTtcblxubGV0IG1vZGFsX2ZpZWxkc19hcnJheSA9IFtcbiAgICBcIlRhc2sgTmFtZVwiLFxuICAgIFwiRGVzY3JpcHRpb24gb2YgVGFza1wiLFxuICAgIFwiRHVlIERhdGVcIixcbiAgICBcIlByaW9yaXR5XCIsXG5dO1xuXG5sZXQgdmFsdWVzX29mX2lucHV0X2ZpZWxkcyA9IFtdO1xuXG5sZXQgcG9wdXBfbW9kYWwgPSBuZXcgSGlkZGVuTW9kYWxFbGVtZW50KFwicG9wdXBfbW9kYWxcIiwgXCJtb2RhbFwiLCBcImFkZF90YXNrXCIpO1xuZm9yIChsZXQgeCA9IDA7IHggPCBtb2RhbF9maWVsZHNfYXJyYXkubGVuZ3RoOyB4KyspIHtcbiAgICBwb3B1cF9tb2RhbC5hZGRfaW5wdXQobW9kYWxfZmllbGRzX2FycmF5W3hdLCBcInRleHRcIik7XG59O1xucG9wdXBfbW9kYWwuYXBwZW5kX3RvX3BhcmVudCgpO1xucG9wdXBfbW9kYWwuYWRkX2J1dHRvbnMoKTtcbnBvcHVwX21vZGFsLmNsZWFyX2ZpZWxkc19ldmVudF9saXN0ZW5lcigpO1xuXG5sZXQgc3VibWl0X2J1dHRvbnMgPSBbXTtcbnN1Ym1pdF9idXR0b25zLnB1c2gocG9wdXBfbW9kYWwuc3VibWl0X2J1dHRvbnNfYXJyYXkpO1xuZm9yIChsZXQgeCA9IDA7IHggPCBwb3B1cF9tb2RhbC5zdWJtaXRfYnV0dG9uc19hcnJheS5sZW5ndGg7IHgrKykge1xuICAgIHN1Ym1pdF9idXR0b25zWzBdW3hdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICB2YWx1ZXNfb2ZfaW5wdXRfZmllbGRzID0gW107XG4gICAgICAgIHZhbHVlc19vZl9pbnB1dF9maWVsZHMucHVzaChwb3B1cF9tb2RhbC5yZXR1cm5fZmllbGRfdmFsdWVzKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXNfb2ZfaW5wdXRfZmllbGRzKTtcbiAgICB9KTtcbn07XG5cbi8vIGxldCBjbGVhcl9idXR0b25zID0gcG9wdXBfbW9kYWwuY2xlYXJfYnV0dG9uc19hcnJheTtcbi8vIGZvciAobGV0IHggPSAwOyB4IDwgY2xlYXJfYnV0dG9ucy5sZW5ndGg7IHgrKykge1xuLy8gICAgIGNsZWFyX2J1dHRvbnNbeF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4vLyAgICAgICAgIHBvcHVwX21vZGFsLmNsZWFyX2ZpZWxkc19ldmVudF9saXN0ZW5lcigpO1xuLy8gICAgIH0pO1xuLy8gfTtcblxuXG5cbi8vIGFkZCBldmVudCBsaXN0ZW5lciBoZXJlIHRvIGV4cG9ydCBmaWVsZCB2YWx1ZXMgdGhlbiBjbGVhciBmaWVsZHMgdXNpbmdcbi8vIEhpZGRlbk1vZGFsRWxlbWVudCAoZXhwb3J0X2ZpZWxkcykgZnVuY1xuXG5cbi8vIHRoZSBmdW5jdGlvbiBiZWxvdyBpc24ndCBnb2luZyB0byB3b3JrLCBzaW5jZSB3aGlsZSB0aGUgdmFsdWVzIGFyZSBleHBvcnRlZCwgdGhleVxuLy8gY2FuIG9ubHkgYmUgZXhwb3J0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIFwic3VibWl0XCIgdHlwZSBvZiBidXR0b24uIFNvLi4uLlxuLy8gSSBuZWVkIGFuIGV2ZW50IGxpc3RlbmVyLiBXaGVyZSB0byBwdXQgaXQ/IEFuZCBpdCBuZWVkcyB0byBjYWxsIHRoZSBjYXJkKCkgZnVuY3Rpb25cbi8vIHdoZW4gdGhlIGJ1dHRvbiBpcyBwcmVzc2VkLCB0byBjcmVhdGUgdGhlIGNhcmQhP1xuXG5cbi8vIGNhcmQoXCJjYXJkc1wiLCBcInByb2plY3RcIiwgKCkpO1xuLy8gTm93IHRoYXQgdGhlIG1vZGFsIHBvcHMgdXAgYW5kIGRpc2FwcGVhcnMgd2l0aCBubyBpc3N1ZXMsIGFuZCB0aGUgaW5wdXRzXG4vLyBhcHBlYXIgYXMgd2VsbCwgaXRzIGFsc28gdGltZSB0byBnaXZlIHRoZSBtb2RhbCB0aGUgYWJpbGl0eSB0byBjcmVhdGUgYW4gb2JqZWN0IHVzaW5nXG4vLyB0aGUgVGFzayBjbGFzcyBjcmVhdG9yLCBhbmQgYXBwZW5kIHRoYXQgdG8gdGhlIERPTS4gVGhhdCBzaG91bGQgYmUuLi4gY2FsbGVkXG4vLyBieSBhbmQgaW4gdGhlIG1vZGFsIG1vZHVsZT8gSURLLiBPciBoZXJlP1xuXG4vLyBPbmNlIHRoZSBtb2RhbCBpcyBhYmxlIHRvIGNyZWF0ZSBhIHRhc2ssIGF1dG9tYXRlIHRoZSBjcmVhdGlvbiBvZiBhIGNhcmQuXG4vLyBXb3VsZCB0aGF0IGJlIHdpdGhpbiB0aGUgVGFzayBtb2R1bGU/IEFzIGEgbWV0aG9kIG9mIHRoZSBUYXNrIGNsYXNzP1xuXG4vLyBTaG91bGQgdGhlIG1vZGFsIHNpbXBseSByZXR1cm4gYSBsaXN0IG9mIHN0cmluZ3MgKFRoZSBpbmZvcm1hdGlvbiBmb3IgYSBUYXNrIG9iamVjdCksXG4vLyB3aGljaCB3b3VsZCB0aGVuXG4vLyBiZSB1c2VkIGJ5IFRhc2s/IEkgdGhpbmsgc28uIEkgd291bGQgaGF2ZSB0byByZWZhY3RvciBUYXNrIHRvIGFjY2VwdCBhbiBhcnJheVxuLy8gaW5zdGVhZCBvZiBtdWx0aXBsZSBhcmdzLlxuXG4vLyBUaGVuIGNyZWF0ZSBhIGNhcmQgdXNpbmcgdGhlIFRhc2sgb2JqZWN0ISBBdXRvbWF0ZSB0aGF0Li4uIGhvdz9cblxuXG4vLyBpbnZva2luZyBhIG5ldyBjYXJkIHdpdGggb2JqZWN0IG9mIGNsYXNzIFRhc2ssIGFsbG93aW5nIGNhcmQgZnVuY3Rpb25cbi8vIHRvIGhhbmRsZSBjcmVhdGlvbiBhbmQgYXBwZW5kaW5nIG9mIFRhc2sgdG8gRE9NLlxuY2FyZChcImNhcmRzXCIsIFwicHJvamVjdFwiLCBleGFtcGxlVGFzayk7XG5jYXJkKFwiY2FyZHNcIiwgXCJwcm9qZWN0XCIsIGV4YW1wbGVfdGFza193aXRoX3NwYWNlcyk7XG5cbi8vIGNyZWF0ZSBhIHNlcGFyYXRlIG1vZHVsZSBmb3IgdGhlIHBvcHVwIGZvcm0gaW5wdXQsIHRvIGNyZWF0ZSBuZXcgdGFza3MgZnJvbSB0aGVcbi8vICNhZGRfdGFzayBidXR0b24uIFVzZSB0aGUgXCJsaWJyYXJ5XCIgaW5wdXQgZm9ybSBhcyBhbiBleGFtcGxlIHRvIHdvcmsgZnJvbS5cblxuLy8gZmlndXJlIG91dCBob3cgdG8gdXNlIGxvY2FsX3N0b3JhZ2UgbW9kdWxlIHRvIHNhdmUgdGhlIGFkZGVkIHRhc2sgdG8gdXNlcidzIGxvY2FsXG4vLyBzdG9yYWdlLlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9