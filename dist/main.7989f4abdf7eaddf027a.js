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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Quicksand/Quicksand-VariableFont_wght.ttf */ "./src/assets/Quicksand/Quicksand-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/josh-kahen-KL9IanHzSE4-unsplash.jpg */ "./src/assets/josh-kahen-KL9IanHzSE4-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n  }\n  html, body {\n    height: 100%;\n  }\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  input, button, textarea, select {\n    font: inherit;\n  }\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  #root, #__next {\n    isolation: isolate;\n  }\n\n  @font-face {\n    font-family: quicksand;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  }\n\n  * {\n    font-family: quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n  /*  MAIN CONTENT */\n\n  body {\n      display: grid;\n      grid-template-rows: 1fr;\n      font-family: quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      font-weight: 600;\n      /* background-image: url(./assets/josh-kahen-KL9IanHzSE4-unsplash.jpg); */\n      background: black;\n      min-width: fit-content;\n  }\n\n  #main-content {\n      display: grid;\n      width: 90vw;\n      height: 85vh;\n      align-self: center;\n      justify-self: center;\n      border-radius: 100px;\n      grid-template-rows: 0.1fr 0.5fr 0.7fr;\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n      border: 2px solid wheat;\n      box-shadow: -10px 10px 10px rgba(245, 222, 179, 0.575);\n      min-width: fit-content;\n      min-height: fit-content;\n  }\n\n  #main-content > div {\n    display: grid;\n  }\n\n/* SEARCHBAR */\n\n.searchbox-div {\n  justify-content: center;\n  align-items: center;\n  min-width: fit-content;\n  min-height: fit-content;\n}\n.searchbox-div > form {\n  min-width: 1%;\n}\n#main-content > div.searchbox-div > form > input[type=submit]:nth-child(2) {\n  background-color: black;\n  color: white;\n  min-width: 5vw;\n  font-size: max(14px, 1.9vmin);\n  margin-left: 10px;\n}\n\n#main-content > div.searchbox-div > form > input[type=search]:nth-child(1) {\n  min-width: 20%;\n  width: 52%;\n  min-height: 2.2vh;\n  font-size: max(14px, 2vmin);\n  background-color: rgba(231, 224, 224, 0);\n  color: white;\n}\n\n#main-content > div.searchbox-div > form > input[type=search]:nth-child(1)::placeholder {\n  color: white;\n}\n\n\n/* CURRENT CONDITIONS */\n\n  .current-conditions-div {\n    background-color: rgba(248, 9, 9, 0.267);\n    width: 17%;\n    font-size: 1.7vmin;\n    justify-self: center;\n    align-content: center;\n    justify-content: center;\n    gap: -50px;\n    border-radius: 60px;\n    border: 2px solid wheat;\n    gap: 5px;\n    color: white;\n    padding: 15px;\n    min-width: fit-content;\n    min-height: fit-content;\n  }\n  .current-conditions-div > span:nth-child(1) {\n  font-size: 30px;\n  } \n\n  .current-conditions-div > span {\n    width: 100%;\n    height: 100%;\n  }\n\n\n  /* WEEKLY FORECAST */\n\n  .weekly-forecast-div {\n    grid-auto-flow: column;\n  }\n\n  .weekly-forecast-div > div {\n    display: grid;\n    align-self: center;\n    justify-content: center;\n    justify-self: center;\n    justify-items: center;\n    margin-bottom: 10px;\n\n    font-size: 2vmin ;\n    color: white;\n    border: 2px solid wheat;\n    border-radius: 10px;\n    padding: 10px 5px 10px 10px;\n    height: 40%;\n    width: 90%;\n    min-width: 50%;\n    min-height: 50%;\n  }\n\n  .weekly-forecast-div > div > span:nth-child(3)::before {\n    content: 'Feels like: ' \n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;AACD;IACI,sBAAsB;EACxB;EACA;IACE,SAAS;EACX;EACA;IACE,YAAY;EACd;EACA;IACE,gBAAgB;IAChB,mCAAmC;EACrC;EACA;IACE,cAAc;IACd,eAAe;EACjB;EACA;IACE,aAAa;EACf;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;IACtB,4CAA4D;EAC9D;;EAEA;IACE,mJAAmJ;EACrJ;EACA,kBAAkB;;EAElB;MACI,aAAa;MACb,uBAAuB;MACvB,mJAAmJ;MACnJ,gBAAgB;MAChB,yEAAyE;MACzE,iBAAiB;MACjB,sBAAsB;EAC1B;;EAEA;MACI,aAAa;MACb,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,oBAAoB;MACpB,oBAAoB;MACpB,qCAAqC;MACrC,yDAAmE;MACnE,uBAAuB;MACvB,sDAAsD;MACtD,sBAAsB;MACtB,uBAAuB;EAC3B;;EAEA;IACE,aAAa;EACf;;AAEF,cAAc;;AAEd;EACE,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,cAAc;EACd,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,iBAAiB;EACjB,2BAA2B;EAC3B,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;;AAGA,uBAAuB;;EAErB;IACE,wCAAwC;IACxC,UAAU;IACV,kBAAkB;IAClB,oBAAoB;IACpB,qBAAqB;IACrB,uBAAuB;IACvB,UAAU;IACV,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;EACzB;EACA;EACA,eAAe;EACf;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;;EAGA,oBAAoB;;EAEpB;IACE,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,qBAAqB;IACrB,mBAAmB;;IAEnB,iBAAiB;IACjB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,WAAW;IACX,UAAU;IACV,cAAc;IACd,eAAe;EACjB;;EAEA;IACE;EACF","sourcesContent":["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n  }\n  html, body {\n    height: 100%;\n  }\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  input, button, textarea, select {\n    font: inherit;\n  }\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  #root, #__next {\n    isolation: isolate;\n  }\n\n  @font-face {\n    font-family: quicksand;\n    src: url(./assets/Quicksand/Quicksand-VariableFont_wght.ttf);\n  }\n\n  * {\n    font-family: quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n  /*  MAIN CONTENT */\n\n  body {\n      display: grid;\n      grid-template-rows: 1fr;\n      font-family: quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      font-weight: 600;\n      /* background-image: url(./assets/josh-kahen-KL9IanHzSE4-unsplash.jpg); */\n      background: black;\n      min-width: fit-content;\n  }\n\n  #main-content {\n      display: grid;\n      width: 90vw;\n      height: 85vh;\n      align-self: center;\n      justify-self: center;\n      border-radius: 100px;\n      grid-template-rows: 0.1fr 0.5fr 0.7fr;\n      background-image: url(./assets/josh-kahen-KL9IanHzSE4-unsplash.jpg);\n      border: 2px solid wheat;\n      box-shadow: -10px 10px 10px rgba(245, 222, 179, 0.575);\n      min-width: fit-content;\n      min-height: fit-content;\n  }\n\n  #main-content > div {\n    display: grid;\n  }\n\n/* SEARCHBAR */\n\n.searchbox-div {\n  justify-content: center;\n  align-items: center;\n  min-width: fit-content;\n  min-height: fit-content;\n}\n.searchbox-div > form {\n  min-width: 1%;\n}\n#main-content > div.searchbox-div > form > input[type=submit]:nth-child(2) {\n  background-color: black;\n  color: white;\n  min-width: 5vw;\n  font-size: max(14px, 1.9vmin);\n  margin-left: 10px;\n}\n\n#main-content > div.searchbox-div > form > input[type=search]:nth-child(1) {\n  min-width: 20%;\n  width: 52%;\n  min-height: 2.2vh;\n  font-size: max(14px, 2vmin);\n  background-color: rgba(231, 224, 224, 0);\n  color: white;\n}\n\n#main-content > div.searchbox-div > form > input[type=search]:nth-child(1)::placeholder {\n  color: white;\n}\n\n\n/* CURRENT CONDITIONS */\n\n  .current-conditions-div {\n    background-color: rgba(248, 9, 9, 0.267);\n    width: 17%;\n    font-size: 1.7vmin;\n    justify-self: center;\n    align-content: center;\n    justify-content: center;\n    gap: -50px;\n    border-radius: 60px;\n    border: 2px solid wheat;\n    gap: 5px;\n    color: white;\n    padding: 15px;\n    min-width: fit-content;\n    min-height: fit-content;\n  }\n  .current-conditions-div > span:nth-child(1) {\n  font-size: 30px;\n  } \n\n  .current-conditions-div > span {\n    width: 100%;\n    height: 100%;\n  }\n\n\n  /* WEEKLY FORECAST */\n\n  .weekly-forecast-div {\n    grid-auto-flow: column;\n  }\n\n  .weekly-forecast-div > div {\n    display: grid;\n    align-self: center;\n    justify-content: center;\n    justify-self: center;\n    justify-items: center;\n    margin-bottom: 10px;\n\n    font-size: 2vmin ;\n    color: white;\n    border: 2px solid wheat;\n    border-radius: 10px;\n    padding: 10px 5px 10px 10px;\n    height: 40%;\n    width: 90%;\n    min-width: 50%;\n    min-height: 50%;\n  }\n\n  .weekly-forecast-div > div > span:nth-child(3)::before {\n    content: 'Feels like: ' \n  }"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/modules/async-factory-function-required-properties.js":
/*!*******************************************************************!*\
  !*** ./src/modules/async-factory-function-required-properties.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requiredWeatherPropertiesFactoryFunction": () => (/* binding */ requiredWeatherPropertiesFactoryFunction)
/* harmony export */ });
/* harmony import */ var _async_fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-fetch-weather-data */ "./src/modules/async-fetch-weather-data.js");
/* harmony import */ var _async_fetch_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async-fetch-location */ "./src/modules/async-fetch-location.js");
/* harmony import */ var _async_fetch_time_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./async-fetch-time-date */ "./src/modules/async-fetch-time-date.js");




const requiredWeatherPropertiesFactoryFunction =
  async function requiredWeatherPropertiesFactoryFunction(city) {
    try {
      // Grab necessary objects via Promises.

      const weatherObject = await (0,_async_fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherConditions)(city);
      const locationObject = await (0,_async_fetch_location__WEBPACK_IMPORTED_MODULE_1__.fetchLocation)(city);
      const timeAndDateObject = await (0,_async_fetch_time_date__WEBPACK_IMPORTED_MODULE_2__.timeAndDate)(city);

      //Return only the necessary properties for my project.

      const sevenDayForecast = weatherObject.daily;
      const currentForecast = weatherObject.current;
      const nameOfCity = locationObject.name;
      const nameOfState = locationObject.state;
      const nameOfCountry = locationObject.country;
      const timeAndDateOfCountry = timeAndDateObject;

      return {
        sevenDayForecast,
        currentForecast,
        nameOfCity,
        nameOfState,
        nameOfCountry,
        timeAndDateOfCountry,
      };
    } catch (err) {
      console.log('err');
    }
  };


/***/ }),

/***/ "./src/modules/async-fetch-location.js":
/*!*********************************************!*\
  !*** ./src/modules/async-fetch-location.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchLocation": () => (/* binding */ fetchLocation)
/* harmony export */ });
const fetchLocation = async function fetchLocation(city) {
  try {
    // Fetch the Geocode for the city I need. A necessary step to convert a city's location to longitude and latitude of said location.

    const responseGeocodingAPI = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=d0fb988627c0d201253cf73bc57e0cef`,
      { mode: 'cors' }
    );
    const dataGeocodingAPI = await responseGeocodingAPI.json();
    return dataGeocodingAPI[0];
  } catch (error) {
    console.log(error);
  }
};


/***/ }),

/***/ "./src/modules/async-fetch-time-date.js":
/*!**********************************************!*\
  !*** ./src/modules/async-fetch-time-date.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeAndDate": () => (/* binding */ timeAndDate)
/* harmony export */ });
/* harmony import */ var _async_fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-fetch-weather-data */ "./src/modules/async-fetch-weather-data.js");

const timeAndDate = async function timeAndDate(location) {
  try {
    const weatherOfCity = await (0,_async_fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherConditions)(location);

    const responseTimeAndDate = await fetch(
      `
      https://timezoneapi.io/api/timezone/?${weatherOfCity.timezone}&token=ahIrLoPNyzpsONTLdmOI
`,
      {
        mode: 'cors',
      }
    );

    const dataTimeAndDate = await responseTimeAndDate.json();

    return dataTimeAndDate;
  } catch (err) {
    console.log(err);
  }
};


/***/ }),

/***/ "./src/modules/async-fetch-weather-data.js":
/*!*************************************************!*\
  !*** ./src/modules/async-fetch-weather-data.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeatherConditions": () => (/* binding */ fetchWeatherConditions)
/* harmony export */ });
/* harmony import */ var _async_fetch_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-fetch-location */ "./src/modules/async-fetch-location.js");

const fetchWeatherConditions = async function fetchWeatherConditions(
  city
) {
  try {
    // Use returned object of fetchLocation(city) to setup the responseWeatherAPI fetch because lon and lat are needed parameters.
    const dataOfGeocodingAPI = await (0,_async_fetch_location__WEBPACK_IMPORTED_MODULE_0__.fetchLocation)(city);

    const longitudeOfCity = dataOfGeocodingAPI.lon;
    const latitudeOfCity = dataOfGeocodingAPI.lat;
    const nameOfCity = dataOfGeocodingAPI.name;
    const stateOfCity = dataOfGeocodingAPI.state;

    const responseWeatherAPI = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitudeOfCity}&lon=${longitudeOfCity}&exclude={part}&units=metric&appid=d0fb988627c0d201253cf73bc57e0cef`,
      { mode: 'cors' }
    );
    const dataWeatherAPI = await responseWeatherAPI.json();
    return dataWeatherAPI;
  } catch (err) {
    console.log(err);
  }
};


/***/ }),

/***/ "./src/modules/dynamic-ui-current-conditions.js":
/*!******************************************************!*\
  !*** ./src/modules/dynamic-ui-current-conditions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCurrentConditions": () => (/* binding */ createCurrentConditions),
/* harmony export */   "displayCurrentConditions": () => (/* binding */ displayCurrentConditions)
/* harmony export */ });
const createCurrentConditions = function createCurrentConditions(
  currentCondition,
  city,
  currentDate,
  currentTime,
  currentTemp,
  feelsLike,
  humidity,
  windSpeed
) {
  const currentConditionsDiv = document.querySelector(
    '.current-conditions-div'
  );
  const elementArray = [];

  let today = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const getDate = function getDate() {
    let date;
    let month = months[today.getMonth()];
    let day = days[today.getDate()];
    return (date =
      day +
      ',' +
      ' ' +
      month +
      ' ' +
      today.getDate() +
      ',' +
      ' ' +
      today.getFullYear());
  };

  const getTime = function getTime() {
    let hour = today.getHours();
    let minutes = today.getMinutes();
    return hour + ':' + minutes;
  };

  const elementTextContent = [
    currentCondition,
    city,
    currentDate,
    currentTime,
    currentTemp,
    feelsLike,
    humidity,
    windSpeed,
  ];

  const elementArrayFunction = function elementArrayFunction() {
    for (let i = 0; i < 8; i++) {
      elementArray[i] = document.createElement('span');
      currentConditionsDiv.append(elementArray[i]);
      elementArray[i].textContent = elementTextContent[i];
    }
  };
  elementArrayFunction();

  const [
    currentConditionsSpan,
    citySpan,
    dateSpan,
    currentTimeSpan,
    currentTempSpan,
    feelsLikeSpan,
    humiditySpan,
    windSpeedSpan,
  ] = elementArray;
};

// A function that I pass onto searchbox-to-weather.js to display the current conditions.

const displayCurrentConditions = function displayCurrentConditions(
  myWeatherObject
) {
  const currentCondition =
    myWeatherObject.currentForecast.weather[0].description;
  const city = myWeatherObject.nameOfCity;
  const currentDate =
    myWeatherObject.timeAndDateOfCountry.data.datetime.day_full +
    ', ' +
    myWeatherObject.timeAndDateOfCountry.data.datetime.month_full +
    ' ' +
    myWeatherObject.timeAndDateOfCountry.data.datetime.day +
    ' ' +
    myWeatherObject.timeAndDateOfCountry.data.datetime.year;
  const currentTime = myWeatherObject.timeAndDateOfCountry.data.datetime.time;
  const currentTemp = Math.round(myWeatherObject.currentForecast.temp) + '°C';
  const feelsLike =
    'Feels Like: ' +
    Math.round(myWeatherObject.currentForecast.feels_like) +
    '°C';

  const humidity =
    'Humidity: ' + Math.floor(myWeatherObject.currentForecast.humidity) + '%';
  const windSpeed = `Wind Speed: ${myWeatherObject.currentForecast.wind_speed} km/h`;

  // might make current condition and seven day forecast two different objects so I can reuse these names.
  createCurrentConditions(
    currentCondition,
    city,
    currentDate,
    currentTime,
    currentTemp,
    feelsLike,
    humidity,
    windSpeed
  );
};


/***/ }),

/***/ "./src/modules/dynamic-ui-weekly-forecast.js":
/*!***************************************************!*\
  !*** ./src/modules/dynamic-ui-weekly-forecast.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeeklyForecast": () => (/* binding */ createWeeklyForecast),
/* harmony export */   "displayWeeklyForecast": () => (/* binding */ displayWeeklyForecast)
/* harmony export */ });
//Write the function for creating weekly divs, and displaying them. These are to be passed onto searchbox-to-weather.js

const createWeeklyForecast = function createWeeklyForecast(
  nameOfDay,
  tempOfDay,
  feelsLikeOfDay,
  conditionOfDay
) {
  const weeklyForecastDiv = document.querySelector('.weekly-forecast-div');
  const dailyStatsArray = [];
  const day = document.createElement('div');
  const weatherDayStats = [
    nameOfDay,
    tempOfDay,
    feelsLikeOfDay,
    conditionOfDay,
  ];

  for (let i = 0; i < 4; i += 1) {
    dailyStatsArray[i] = document.createElement('span');
    dailyStatsArray[i].textContent = weatherDayStats[i];
    day.append(dailyStatsArray[i]);
  }

  day.setAttribute('class', `day-div ${nameOfDay}`);
  weeklyForecastDiv.append(day);
};

const displayWeeklyForecast = function displayWeeklyForecast(
  myWeatherObject
) {
  const nameOfDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  for (let i = 0; i < 7; i += 1) {
    createWeeklyForecast(
      nameOfDays[i],
      Math.round(myWeatherObject.sevenDayForecast[i].temp.day) + '°C',
      Math.round(myWeatherObject.sevenDayForecast[i].feels_like.day) + '°C',
      myWeatherObject.sevenDayForecast[i].weather[0].description
    );
  }
};


/***/ }),

/***/ "./src/modules/local-storage.js":
/*!**************************************!*\
  !*** ./src/modules/local-storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onLoadDisplay": () => (/* binding */ onLoadDisplay)
/* harmony export */ });
/* harmony import */ var _dynamic_ui_current_conditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-ui-current-conditions */ "./src/modules/dynamic-ui-current-conditions.js");
/* harmony import */ var _dynamic_ui_weekly_forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-ui-weekly-forecast */ "./src/modules/dynamic-ui-weekly-forecast.js");



const onLoadDisplay = function onLoadDisplay() {
  const currentCity = JSON.parse(localStorage.getItem('city'));

  (0,_dynamic_ui_current_conditions__WEBPACK_IMPORTED_MODULE_0__.displayCurrentConditions)(currentCity);
  (0,_dynamic_ui_weekly_forecast__WEBPACK_IMPORTED_MODULE_1__.displayWeeklyForecast)(currentCity);
};


/***/ }),

/***/ "./src/modules/searchbox-to-weather.js":
/*!*********************************************!*\
  !*** ./src/modules/searchbox-to-weather.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchboxToWeather": () => (/* binding */ searchboxToWeather)
/* harmony export */ });
/* harmony import */ var _async_factory_function_required_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-factory-function-required-properties */ "./src/modules/async-factory-function-required-properties.js");
/* harmony import */ var _dynamic_ui_current_conditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-ui-current-conditions */ "./src/modules/dynamic-ui-current-conditions.js");
/* harmony import */ var _dynamic_ui_weekly_forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-ui-weekly-forecast */ "./src/modules/dynamic-ui-weekly-forecast.js");




const searchboxToWeather = function searchboxToWeather(
  currentConditionsDiv,
  weeklyForecastDiv
) {
  // create appropriate divs
  const mainContent = document.querySelector('#main-content');
  const searchboxDiv = document.querySelector('.searchbox-div');
  const form = document.createElement('form');
  const searchbox = document.createElement('input');
  const submitButton = document.createElement('input');

  searchbox.setAttribute('type', 'search');
  submitButton.setAttribute('type', 'submit');

  submitButton.textContent = 'submit';
  searchbox.setAttribute('placeholder', 'Search for a city..');
  searchbox.setAttribute('required', true);
  searchbox.setAttribute(
    'oninvalid',
    "this.setCustomValidity('Please enter a valid city')"
  );
  searchbox.setAttribute('oninput', "this.setCustomValidity('')");
  searchbox.setAttribute('pattern', '^[A-Za-z ]+$');

  searchboxDiv.append(form);
  form.append(searchbox);
  form.append(submitButton);

  // add an event listener onto the form, the function passed needs to be asynchronous to get the correct value.
  // Where the bulk of rendering items on the browser happens.
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchboxValue = searchbox.value;
    const myWeatherObject = await (0,_async_factory_function_required_properties__WEBPACK_IMPORTED_MODULE_0__.requiredWeatherPropertiesFactoryFunction)(
      searchboxValue
    );

    currentConditionsDiv.textContent = '';
    weeklyForecastDiv.textContent = '';

    (0,_dynamic_ui_current_conditions__WEBPACK_IMPORTED_MODULE_1__.displayCurrentConditions)(myWeatherObject);
    (0,_dynamic_ui_weekly_forecast__WEBPACK_IMPORTED_MODULE_2__.displayWeeklyForecast)(myWeatherObject);
    // Set local storage when user submits city. This will be used to load up the same city when they reload page.
    localStorage.setItem('city', JSON.stringify(myWeatherObject));
  });

  // to have myWeatherObject properties properly display onto the page UI, why don't I just pass down each of those properties through
  // a function's parameters? i.e. myWeatherUI(myWeatherObject.name, myWeatherObject.country, etc.)
  // myWeatherUI has a bunch of code inside, on the right hand side of assignment we will use these arguments. We can import myWeatherUI from another module onto here.
  // on the press of "Submit" button, that's when it will create the UI, by invoking the myWeatherUI() function, which contains a bunch of .createElement()
};


/***/ }),

/***/ "./src/assets/Quicksand/Quicksand-VariableFont_wght.ttf":
/*!**************************************************************!*\
  !*** ./src/assets/Quicksand/Quicksand-VariableFont_wght.ttf ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92e1d0f3321b53e20d2b.ttf";

/***/ }),

/***/ "./src/assets/josh-kahen-KL9IanHzSE4-unsplash.jpg":
/*!********************************************************!*\
  !*** ./src/assets/josh-kahen-KL9IanHzSE4-unsplash.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f0123fcc75e19860ac7.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _modules_searchbox_to_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/searchbox-to-weather */ "./src/modules/searchbox-to-weather.js");
/* harmony import */ var _modules_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/local-storage */ "./src/modules/local-storage.js");




const currentConditionsDiv = document.querySelector('.current-conditions-div');
const weeklyForecastDiv = document.querySelector('.weekly-forecast-div');

(0,_modules_searchbox_to_weather__WEBPACK_IMPORTED_MODULE_1__.searchboxToWeather)(currentConditionsDiv, weeklyForecastDiv);

const localWeatherData = JSON.parse(localStorage.getItem('city'));

const loadLS = (function loadLocalWeatherData() {
  try {
    if (localWeatherData !== 'null' || localWeatherData !== 'undefined') {
      window.onload = (0,_modules_local_storage__WEBPACK_IMPORTED_MODULE_2__.onLoadDisplay)();
    } else {
      return;
    }
  } catch (err) {
    return;
  }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQytDO0FBQ1o7O0FBRXhEO0FBQ0E7O0FBRUEsaUZBQWtCOztBQUVsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUVBQWE7QUFDbkMsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hc3luYy1mYWN0b3J5LWZ1bmN0aW9uLXJlcXVpcmVkLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FzeW5jLWZldGNoLWxvY2F0aW9uLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hc3luYy1mZXRjaC10aW1lLWRhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FzeW5jLWZldGNoLXdlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZHluYW1pYy11aS1jdXJyZW50LWNvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2R5bmFtaWMtdWktd2Vla2x5LWZvcmVjYXN0LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zZWFyY2hib3gtdG8td2VhdGhlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvUXVpY2tzYW5kL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9qb3NoLWthaGVuLUtMOUlhbkh6U0U0LXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAgSm9zaCdzIEN1c3RvbSBDU1MgUmVzZXRcXG4gIGh0dHBzOi8vd3d3Lmpvc2h3Y29tZWF1LmNvbS9jc3MvY3VzdG9tLWNzcy1yZXNldC9cXG4qL1xcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIGh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICB9XFxuICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gIH1cXG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgfVxcbiAgI3Jvb3QsICNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxuICB9XFxuXFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgfVxcblxcbiAgKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBxdWlja3NhbmQsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIC8qICBNQUlOIENPTlRFTlQgKi9cXG5cXG4gIGJvZHkge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZCwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2pvc2gta2FoZW4tS0w5SWFuSHpTRTQtdW5zcGxhc2guanBnKTsgKi9cXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgI21haW4tY29udGVudCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICB3aWR0aDogOTB2dztcXG4gICAgICBoZWlnaHQ6IDg1dmg7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMC41ZnIgMC43ZnI7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcXG4gICAgICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDEwcHggcmdiYSgyNDUsIDIyMiwgMTc5LCAwLjU3NSk7XFxuICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gICNtYWluLWNvbnRlbnQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcblxcbi8qIFNFQVJDSEJBUiAqL1xcblxcbi5zZWFyY2hib3gtZGl2IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuLnNlYXJjaGJveC1kaXYgPiBmb3JtIHtcXG4gIG1pbi13aWR0aDogMSU7XFxufVxcbiNtYWluLWNvbnRlbnQgPiBkaXYuc2VhcmNoYm94LWRpdiA+IGZvcm0gPiBpbnB1dFt0eXBlPXN1Ym1pdF06bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWluLXdpZHRoOiA1dnc7XFxuICBmb250LXNpemU6IG1heCgxNHB4LCAxLjl2bWluKTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jbWFpbi1jb250ZW50ID4gZGl2LnNlYXJjaGJveC1kaXYgPiBmb3JtID4gaW5wdXRbdHlwZT1zZWFyY2hdOm50aC1jaGlsZCgxKSB7XFxuICBtaW4td2lkdGg6IDIwJTtcXG4gIHdpZHRoOiA1MiU7XFxuICBtaW4taGVpZ2h0OiAyLjJ2aDtcXG4gIGZvbnQtc2l6ZTogbWF4KDE0cHgsIDJ2bWluKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCAyMjQsIDIyNCwgMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNtYWluLWNvbnRlbnQgPiBkaXYuc2VhcmNoYm94LWRpdiA+IGZvcm0gPiBpbnB1dFt0eXBlPXNlYXJjaF06bnRoLWNoaWxkKDEpOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbi8qIENVUlJFTlQgQ09ORElUSU9OUyAqL1xcblxcbiAgLmN1cnJlbnQtY29uZGl0aW9ucy1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgOSwgOSwgMC4yNjcpO1xcbiAgICB3aWR0aDogMTclO1xcbiAgICBmb250LXNpemU6IDEuN3ZtaW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC01MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICAuY3VycmVudC1jb25kaXRpb25zLWRpdiA+IHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIH0gXFxuXFxuICAuY3VycmVudC1jb25kaXRpb25zLWRpdiA+IHNwYW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcblxcbiAgLyogV0VFS0xZIEZPUkVDQVNUICovXFxuXFxuICAud2Vla2x5LWZvcmVjYXN0LWRpdiB7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICB9XFxuXFxuICAud2Vla2x5LWZvcmVjYXN0LWRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogMnZtaW4gO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoZWF0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDEwcHg7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgbWluLWhlaWdodDogNTAlO1xcbiAgfVxcblxcbiAgLndlZWtseS1mb3JlY2FzdC1kaXYgPiBkaXYgPiBzcGFuOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ0ZlZWxzIGxpa2U6ICcgXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFDRDtJQUNJLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLDRDQUE0RDtFQUM5RDs7RUFFQTtJQUNFLG1KQUFtSjtFQUNySjtFQUNBLGtCQUFrQjs7RUFFbEI7TUFDSSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1KQUFtSjtNQUNuSixnQkFBZ0I7TUFDaEIseUVBQXlFO01BQ3pFLGlCQUFpQjtNQUNqQixzQkFBc0I7RUFDMUI7O0VBRUE7TUFDSSxhQUFhO01BQ2IsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLG9CQUFvQjtNQUNwQixxQ0FBcUM7TUFDckMseURBQW1FO01BQ25FLHVCQUF1QjtNQUN2QixzREFBc0Q7TUFDdEQsc0JBQXNCO01BQ3RCLHVCQUF1QjtFQUMzQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFRixjQUFjOztBQUVkO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osY0FBYztFQUNkLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isd0NBQXdDO0VBQ3hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBR0EsdUJBQXVCOztFQUVyQjtJQUNFLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7RUFDQTtFQUNBLGVBQWU7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7OztFQUdBLG9CQUFvQjs7RUFFcEI7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0U7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAgSm9zaCdzIEN1c3RvbSBDU1MgUmVzZXRcXG4gIGh0dHBzOi8vd3d3Lmpvc2h3Y29tZWF1LmNvbS9jc3MvY3VzdG9tLWNzcy1yZXNldC9cXG4qL1xcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIGh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICB9XFxuICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gIH1cXG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgfVxcbiAgI3Jvb3QsICNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxuICB9XFxuXFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZDtcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvUXVpY2tzYW5kL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbiAgfVxcblxcbiAgKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBxdWlja3NhbmQsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIC8qICBNQUlOIENPTlRFTlQgKi9cXG5cXG4gIGJvZHkge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZCwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2pvc2gta2FoZW4tS0w5SWFuSHpTRTQtdW5zcGxhc2guanBnKTsgKi9cXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgI21haW4tY29udGVudCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICB3aWR0aDogOTB2dztcXG4gICAgICBoZWlnaHQ6IDg1dmg7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMC41ZnIgMC43ZnI7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2pvc2gta2FoZW4tS0w5SWFuSHpTRTQtdW5zcGxhc2guanBnKTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcXG4gICAgICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDEwcHggcmdiYSgyNDUsIDIyMiwgMTc5LCAwLjU3NSk7XFxuICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gICNtYWluLWNvbnRlbnQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcblxcbi8qIFNFQVJDSEJBUiAqL1xcblxcbi5zZWFyY2hib3gtZGl2IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuLnNlYXJjaGJveC1kaXYgPiBmb3JtIHtcXG4gIG1pbi13aWR0aDogMSU7XFxufVxcbiNtYWluLWNvbnRlbnQgPiBkaXYuc2VhcmNoYm94LWRpdiA+IGZvcm0gPiBpbnB1dFt0eXBlPXN1Ym1pdF06bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWluLXdpZHRoOiA1dnc7XFxuICBmb250LXNpemU6IG1heCgxNHB4LCAxLjl2bWluKTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jbWFpbi1jb250ZW50ID4gZGl2LnNlYXJjaGJveC1kaXYgPiBmb3JtID4gaW5wdXRbdHlwZT1zZWFyY2hdOm50aC1jaGlsZCgxKSB7XFxuICBtaW4td2lkdGg6IDIwJTtcXG4gIHdpZHRoOiA1MiU7XFxuICBtaW4taGVpZ2h0OiAyLjJ2aDtcXG4gIGZvbnQtc2l6ZTogbWF4KDE0cHgsIDJ2bWluKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCAyMjQsIDIyNCwgMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNtYWluLWNvbnRlbnQgPiBkaXYuc2VhcmNoYm94LWRpdiA+IGZvcm0gPiBpbnB1dFt0eXBlPXNlYXJjaF06bnRoLWNoaWxkKDEpOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbi8qIENVUlJFTlQgQ09ORElUSU9OUyAqL1xcblxcbiAgLmN1cnJlbnQtY29uZGl0aW9ucy1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgOSwgOSwgMC4yNjcpO1xcbiAgICB3aWR0aDogMTclO1xcbiAgICBmb250LXNpemU6IDEuN3ZtaW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC01MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICAuY3VycmVudC1jb25kaXRpb25zLWRpdiA+IHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIH0gXFxuXFxuICAuY3VycmVudC1jb25kaXRpb25zLWRpdiA+IHNwYW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcblxcbiAgLyogV0VFS0xZIEZPUkVDQVNUICovXFxuXFxuICAud2Vla2x5LWZvcmVjYXN0LWRpdiB7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICB9XFxuXFxuICAud2Vla2x5LWZvcmVjYXN0LWRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogMnZtaW4gO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoZWF0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDEwcHg7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgbWluLWhlaWdodDogNTAlO1xcbiAgfVxcblxcbiAgLndlZWtseS1mb3JlY2FzdC1kaXYgPiBkaXYgPiBzcGFuOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ0ZlZWxzIGxpa2U6ICcgXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZldGNoV2VhdGhlckNvbmRpdGlvbnMgfSBmcm9tICcuL2FzeW5jLWZldGNoLXdlYXRoZXItZGF0YSc7XG5pbXBvcnQgeyBmZXRjaExvY2F0aW9uIH0gZnJvbSAnLi9hc3luYy1mZXRjaC1sb2NhdGlvbic7XG5pbXBvcnQgeyB0aW1lQW5kRGF0ZSB9IGZyb20gJy4vYXN5bmMtZmV0Y2gtdGltZS1kYXRlJztcblxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkV2VhdGhlclByb3BlcnRpZXNGYWN0b3J5RnVuY3Rpb24gPVxuICBhc3luYyBmdW5jdGlvbiByZXF1aXJlZFdlYXRoZXJQcm9wZXJ0aWVzRmFjdG9yeUZ1bmN0aW9uKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgLy8gR3JhYiBuZWNlc3Nhcnkgb2JqZWN0cyB2aWEgUHJvbWlzZXMuXG5cbiAgICAgIGNvbnN0IHdlYXRoZXJPYmplY3QgPSBhd2FpdCBmZXRjaFdlYXRoZXJDb25kaXRpb25zKGNpdHkpO1xuICAgICAgY29uc3QgbG9jYXRpb25PYmplY3QgPSBhd2FpdCBmZXRjaExvY2F0aW9uKGNpdHkpO1xuICAgICAgY29uc3QgdGltZUFuZERhdGVPYmplY3QgPSBhd2FpdCB0aW1lQW5kRGF0ZShjaXR5KTtcblxuICAgICAgLy9SZXR1cm4gb25seSB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXMgZm9yIG15IHByb2plY3QuXG5cbiAgICAgIGNvbnN0IHNldmVuRGF5Rm9yZWNhc3QgPSB3ZWF0aGVyT2JqZWN0LmRhaWx5O1xuICAgICAgY29uc3QgY3VycmVudEZvcmVjYXN0ID0gd2VhdGhlck9iamVjdC5jdXJyZW50O1xuICAgICAgY29uc3QgbmFtZU9mQ2l0eSA9IGxvY2F0aW9uT2JqZWN0Lm5hbWU7XG4gICAgICBjb25zdCBuYW1lT2ZTdGF0ZSA9IGxvY2F0aW9uT2JqZWN0LnN0YXRlO1xuICAgICAgY29uc3QgbmFtZU9mQ291bnRyeSA9IGxvY2F0aW9uT2JqZWN0LmNvdW50cnk7XG4gICAgICBjb25zdCB0aW1lQW5kRGF0ZU9mQ291bnRyeSA9IHRpbWVBbmREYXRlT2JqZWN0O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZXZlbkRheUZvcmVjYXN0LFxuICAgICAgICBjdXJyZW50Rm9yZWNhc3QsXG4gICAgICAgIG5hbWVPZkNpdHksXG4gICAgICAgIG5hbWVPZlN0YXRlLFxuICAgICAgICBuYW1lT2ZDb3VudHJ5LFxuICAgICAgICB0aW1lQW5kRGF0ZU9mQ291bnRyeSxcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyJyk7XG4gICAgfVxuICB9O1xuIiwiZXhwb3J0IGNvbnN0IGZldGNoTG9jYXRpb24gPSBhc3luYyBmdW5jdGlvbiBmZXRjaExvY2F0aW9uKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICAvLyBGZXRjaCB0aGUgR2VvY29kZSBmb3IgdGhlIGNpdHkgSSBuZWVkLiBBIG5lY2Vzc2FyeSBzdGVwIHRvIGNvbnZlcnQgYSBjaXR5J3MgbG9jYXRpb24gdG8gbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSBvZiBzYWlkIGxvY2F0aW9uLlxuXG4gICAgY29uc3QgcmVzcG9uc2VHZW9jb2RpbmdBUEkgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9JmxpbWl0PTEmYXBwaWQ9ZDBmYjk4ODYyN2MwZDIwMTI1M2NmNzNiYzU3ZTBjZWZgLFxuICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICk7XG4gICAgY29uc3QgZGF0YUdlb2NvZGluZ0FQSSA9IGF3YWl0IHJlc3BvbnNlR2VvY29kaW5nQVBJLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YUdlb2NvZGluZ0FQSVswXTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBmZXRjaFdlYXRoZXJDb25kaXRpb25zIH0gZnJvbSAnLi9hc3luYy1mZXRjaC13ZWF0aGVyLWRhdGEnO1xuZXhwb3J0IGNvbnN0IHRpbWVBbmREYXRlID0gYXN5bmMgZnVuY3Rpb24gdGltZUFuZERhdGUobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyT2ZDaXR5ID0gYXdhaXQgZmV0Y2hXZWF0aGVyQ29uZGl0aW9ucyhsb2NhdGlvbik7XG5cbiAgICBjb25zdCByZXNwb25zZVRpbWVBbmREYXRlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgXG4gICAgICBodHRwczovL3RpbWV6b25lYXBpLmlvL2FwaS90aW1lem9uZS8/JHt3ZWF0aGVyT2ZDaXR5LnRpbWV6b25lfSZ0b2tlbj1haElyTG9QTnl6cHNPTlRMZG1PSVxuYCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBkYXRhVGltZUFuZERhdGUgPSBhd2FpdCByZXNwb25zZVRpbWVBbmREYXRlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhVGltZUFuZERhdGU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBmZXRjaExvY2F0aW9uIH0gZnJvbSAnLi9hc3luYy1mZXRjaC1sb2NhdGlvbic7XG5leHBvcnQgY29uc3QgZmV0Y2hXZWF0aGVyQ29uZGl0aW9ucyA9IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckNvbmRpdGlvbnMoXG4gIGNpdHlcbikge1xuICB0cnkge1xuICAgIC8vIFVzZSByZXR1cm5lZCBvYmplY3Qgb2YgZmV0Y2hMb2NhdGlvbihjaXR5KSB0byBzZXR1cCB0aGUgcmVzcG9uc2VXZWF0aGVyQVBJIGZldGNoIGJlY2F1c2UgbG9uIGFuZCBsYXQgYXJlIG5lZWRlZCBwYXJhbWV0ZXJzLlxuICAgIGNvbnN0IGRhdGFPZkdlb2NvZGluZ0FQSSA9IGF3YWl0IGZldGNoTG9jYXRpb24oY2l0eSk7XG5cbiAgICBjb25zdCBsb25naXR1ZGVPZkNpdHkgPSBkYXRhT2ZHZW9jb2RpbmdBUEkubG9uO1xuICAgIGNvbnN0IGxhdGl0dWRlT2ZDaXR5ID0gZGF0YU9mR2VvY29kaW5nQVBJLmxhdDtcbiAgICBjb25zdCBuYW1lT2ZDaXR5ID0gZGF0YU9mR2VvY29kaW5nQVBJLm5hbWU7XG4gICAgY29uc3Qgc3RhdGVPZkNpdHkgPSBkYXRhT2ZHZW9jb2RpbmdBUEkuc3RhdGU7XG5cbiAgICBjb25zdCByZXNwb25zZVdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXRpdHVkZU9mQ2l0eX0mbG9uPSR7bG9uZ2l0dWRlT2ZDaXR5fSZleGNsdWRlPXtwYXJ0fSZ1bml0cz1tZXRyaWMmYXBwaWQ9ZDBmYjk4ODYyN2MwZDIwMTI1M2NmNzNiYzU3ZTBjZWZgLFxuICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICk7XG4gICAgY29uc3QgZGF0YVdlYXRoZXJBUEkgPSBhd2FpdCByZXNwb25zZVdlYXRoZXJBUEkuanNvbigpO1xuICAgIHJldHVybiBkYXRhV2VhdGhlckFQSTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVDdXJyZW50Q29uZGl0aW9ucyA9IGZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRDb25kaXRpb25zKFxuICBjdXJyZW50Q29uZGl0aW9uLFxuICBjaXR5LFxuICBjdXJyZW50RGF0ZSxcbiAgY3VycmVudFRpbWUsXG4gIGN1cnJlbnRUZW1wLFxuICBmZWVsc0xpa2UsXG4gIGh1bWlkaXR5LFxuICB3aW5kU3BlZWRcbikge1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5jdXJyZW50LWNvbmRpdGlvbnMtZGl2J1xuICApO1xuICBjb25zdCBlbGVtZW50QXJyYXkgPSBbXTtcblxuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBtb250aHMgPSBbXG4gICAgJ0phbnVhcnknLFxuICAgICdGZWJydWFyeScsXG4gICAgJ01hcmNoJyxcbiAgICAnQXByaWwnLFxuICAgICdNYXknLFxuICAgICdKdW5lJyxcbiAgICAnSnVseScsXG4gICAgJ0F1Z3VzdCcsXG4gICAgJ1NlcHRlbWJlcicsXG4gICAgJ09jdG9iZXInLFxuICAgICdOb3ZlbWJlcicsXG4gICAgJ0RlY2VtYmVyJyxcbiAgXTtcbiAgY29uc3QgZGF5cyA9IFtcbiAgICAnU3VuZGF5JyxcbiAgICAnTW9uZGF5JyxcbiAgICAnVHVlc2RheScsXG4gICAgJ1dlZG5lc2RheScsXG4gICAgJ1RodXJzZGF5JyxcbiAgICAnRnJpZGF5JyxcbiAgICAnU2F0dXJkYXknLFxuICBdO1xuXG4gIGNvbnN0IGdldERhdGUgPSBmdW5jdGlvbiBnZXREYXRlKCkge1xuICAgIGxldCBkYXRlO1xuICAgIGxldCBtb250aCA9IG1vbnRoc1t0b2RheS5nZXRNb250aCgpXTtcbiAgICBsZXQgZGF5ID0gZGF5c1t0b2RheS5nZXREYXRlKCldO1xuICAgIHJldHVybiAoZGF0ZSA9XG4gICAgICBkYXkgK1xuICAgICAgJywnICtcbiAgICAgICcgJyArXG4gICAgICBtb250aCArXG4gICAgICAnICcgK1xuICAgICAgdG9kYXkuZ2V0RGF0ZSgpICtcbiAgICAgICcsJyArXG4gICAgICAnICcgK1xuICAgICAgdG9kYXkuZ2V0RnVsbFllYXIoKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGltZSA9IGZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gICAgbGV0IGhvdXIgPSB0b2RheS5nZXRIb3VycygpO1xuICAgIGxldCBtaW51dGVzID0gdG9kYXkuZ2V0TWludXRlcygpO1xuICAgIHJldHVybiBob3VyICsgJzonICsgbWludXRlcztcbiAgfTtcblxuICBjb25zdCBlbGVtZW50VGV4dENvbnRlbnQgPSBbXG4gICAgY3VycmVudENvbmRpdGlvbixcbiAgICBjaXR5LFxuICAgIGN1cnJlbnREYXRlLFxuICAgIGN1cnJlbnRUaW1lLFxuICAgIGN1cnJlbnRUZW1wLFxuICAgIGZlZWxzTGlrZSxcbiAgICBodW1pZGl0eSxcbiAgICB3aW5kU3BlZWQsXG4gIF07XG5cbiAgY29uc3QgZWxlbWVudEFycmF5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbGVtZW50QXJyYXlGdW5jdGlvbigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgZWxlbWVudEFycmF5W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY3VycmVudENvbmRpdGlvbnNEaXYuYXBwZW5kKGVsZW1lbnRBcnJheVtpXSk7XG4gICAgICBlbGVtZW50QXJyYXlbaV0udGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dENvbnRlbnRbaV07XG4gICAgfVxuICB9O1xuICBlbGVtZW50QXJyYXlGdW5jdGlvbigpO1xuXG4gIGNvbnN0IFtcbiAgICBjdXJyZW50Q29uZGl0aW9uc1NwYW4sXG4gICAgY2l0eVNwYW4sXG4gICAgZGF0ZVNwYW4sXG4gICAgY3VycmVudFRpbWVTcGFuLFxuICAgIGN1cnJlbnRUZW1wU3BhbixcbiAgICBmZWVsc0xpa2VTcGFuLFxuICAgIGh1bWlkaXR5U3BhbixcbiAgICB3aW5kU3BlZWRTcGFuLFxuICBdID0gZWxlbWVudEFycmF5O1xufTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IEkgcGFzcyBvbnRvIHNlYXJjaGJveC10by13ZWF0aGVyLmpzIHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgY29uZGl0aW9ucy5cblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucyA9IGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucyhcbiAgbXlXZWF0aGVyT2JqZWN0XG4pIHtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9XG4gICAgbXlXZWF0aGVyT2JqZWN0LmN1cnJlbnRGb3JlY2FzdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBjb25zdCBjaXR5ID0gbXlXZWF0aGVyT2JqZWN0Lm5hbWVPZkNpdHk7XG4gIGNvbnN0IGN1cnJlbnREYXRlID1cbiAgICBteVdlYXRoZXJPYmplY3QudGltZUFuZERhdGVPZkNvdW50cnkuZGF0YS5kYXRldGltZS5kYXlfZnVsbCArXG4gICAgJywgJyArXG4gICAgbXlXZWF0aGVyT2JqZWN0LnRpbWVBbmREYXRlT2ZDb3VudHJ5LmRhdGEuZGF0ZXRpbWUubW9udGhfZnVsbCArXG4gICAgJyAnICtcbiAgICBteVdlYXRoZXJPYmplY3QudGltZUFuZERhdGVPZkNvdW50cnkuZGF0YS5kYXRldGltZS5kYXkgK1xuICAgICcgJyArXG4gICAgbXlXZWF0aGVyT2JqZWN0LnRpbWVBbmREYXRlT2ZDb3VudHJ5LmRhdGEuZGF0ZXRpbWUueWVhcjtcbiAgY29uc3QgY3VycmVudFRpbWUgPSBteVdlYXRoZXJPYmplY3QudGltZUFuZERhdGVPZkNvdW50cnkuZGF0YS5kYXRldGltZS50aW1lO1xuICBjb25zdCBjdXJyZW50VGVtcCA9IE1hdGgucm91bmQobXlXZWF0aGVyT2JqZWN0LmN1cnJlbnRGb3JlY2FzdC50ZW1wKSArICfCsEMnO1xuICBjb25zdCBmZWVsc0xpa2UgPVxuICAgICdGZWVscyBMaWtlOiAnICtcbiAgICBNYXRoLnJvdW5kKG15V2VhdGhlck9iamVjdC5jdXJyZW50Rm9yZWNhc3QuZmVlbHNfbGlrZSkgK1xuICAgICfCsEMnO1xuXG4gIGNvbnN0IGh1bWlkaXR5ID1cbiAgICAnSHVtaWRpdHk6ICcgKyBNYXRoLmZsb29yKG15V2VhdGhlck9iamVjdC5jdXJyZW50Rm9yZWNhc3QuaHVtaWRpdHkpICsgJyUnO1xuICBjb25zdCB3aW5kU3BlZWQgPSBgV2luZCBTcGVlZDogJHtteVdlYXRoZXJPYmplY3QuY3VycmVudEZvcmVjYXN0LndpbmRfc3BlZWR9IGttL2hgO1xuXG4gIC8vIG1pZ2h0IG1ha2UgY3VycmVudCBjb25kaXRpb24gYW5kIHNldmVuIGRheSBmb3JlY2FzdCB0d28gZGlmZmVyZW50IG9iamVjdHMgc28gSSBjYW4gcmV1c2UgdGhlc2UgbmFtZXMuXG4gIGNyZWF0ZUN1cnJlbnRDb25kaXRpb25zKFxuICAgIGN1cnJlbnRDb25kaXRpb24sXG4gICAgY2l0eSxcbiAgICBjdXJyZW50RGF0ZSxcbiAgICBjdXJyZW50VGltZSxcbiAgICBjdXJyZW50VGVtcCxcbiAgICBmZWVsc0xpa2UsXG4gICAgaHVtaWRpdHksXG4gICAgd2luZFNwZWVkXG4gICk7XG59O1xuIiwiLy9Xcml0ZSB0aGUgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIHdlZWtseSBkaXZzLCBhbmQgZGlzcGxheWluZyB0aGVtLiBUaGVzZSBhcmUgdG8gYmUgcGFzc2VkIG9udG8gc2VhcmNoYm94LXRvLXdlYXRoZXIuanNcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVdlZWtseUZvcmVjYXN0ID0gZnVuY3Rpb24gY3JlYXRlV2Vla2x5Rm9yZWNhc3QoXG4gIG5hbWVPZkRheSxcbiAgdGVtcE9mRGF5LFxuICBmZWVsc0xpa2VPZkRheSxcbiAgY29uZGl0aW9uT2ZEYXlcbikge1xuICBjb25zdCB3ZWVrbHlGb3JlY2FzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrbHktZm9yZWNhc3QtZGl2Jyk7XG4gIGNvbnN0IGRhaWx5U3RhdHNBcnJheSA9IFtdO1xuICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgd2VhdGhlckRheVN0YXRzID0gW1xuICAgIG5hbWVPZkRheSxcbiAgICB0ZW1wT2ZEYXksXG4gICAgZmVlbHNMaWtlT2ZEYXksXG4gICAgY29uZGl0aW9uT2ZEYXksXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICBkYWlseVN0YXRzQXJyYXlbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGFpbHlTdGF0c0FycmF5W2ldLnRleHRDb250ZW50ID0gd2VhdGhlckRheVN0YXRzW2ldO1xuICAgIGRheS5hcHBlbmQoZGFpbHlTdGF0c0FycmF5W2ldKTtcbiAgfVxuXG4gIGRheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYGRheS1kaXYgJHtuYW1lT2ZEYXl9YCk7XG4gIHdlZWtseUZvcmVjYXN0RGl2LmFwcGVuZChkYXkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlXZWVrbHlGb3JlY2FzdCA9IGZ1bmN0aW9uIGRpc3BsYXlXZWVrbHlGb3JlY2FzdChcbiAgbXlXZWF0aGVyT2JqZWN0XG4pIHtcbiAgY29uc3QgbmFtZU9mRGF5cyA9IFtcbiAgICAnTW9uZGF5JyxcbiAgICAnVHVlc2RheScsXG4gICAgJ1dlZG5lc2RheScsXG4gICAgJ1RodXJzZGF5JyxcbiAgICAnRnJpZGF5JyxcbiAgICAnU2F0dXJkYXknLFxuICAgICdTdW5kYXknLFxuICBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XG4gICAgY3JlYXRlV2Vla2x5Rm9yZWNhc3QoXG4gICAgICBuYW1lT2ZEYXlzW2ldLFxuICAgICAgTWF0aC5yb3VuZChteVdlYXRoZXJPYmplY3Quc2V2ZW5EYXlGb3JlY2FzdFtpXS50ZW1wLmRheSkgKyAnwrBDJyxcbiAgICAgIE1hdGgucm91bmQobXlXZWF0aGVyT2JqZWN0LnNldmVuRGF5Rm9yZWNhc3RbaV0uZmVlbHNfbGlrZS5kYXkpICsgJ8KwQycsXG4gICAgICBteVdlYXRoZXJPYmplY3Quc2V2ZW5EYXlGb3JlY2FzdFtpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucyB9IGZyb20gJy4vZHluYW1pYy11aS1jdXJyZW50LWNvbmRpdGlvbnMnO1xuaW1wb3J0IHsgZGlzcGxheVdlZWtseUZvcmVjYXN0IH0gZnJvbSAnLi9keW5hbWljLXVpLXdlZWtseS1mb3JlY2FzdCc7XG5cbmV4cG9ydCBjb25zdCBvbkxvYWREaXNwbGF5ID0gZnVuY3Rpb24gb25Mb2FkRGlzcGxheSgpIHtcbiAgY29uc3QgY3VycmVudENpdHkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5JykpO1xuXG4gIGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucyhjdXJyZW50Q2l0eSk7XG4gIGRpc3BsYXlXZWVrbHlGb3JlY2FzdChjdXJyZW50Q2l0eSk7XG59O1xuIiwiaW1wb3J0IHsgcmVxdWlyZWRXZWF0aGVyUHJvcGVydGllc0ZhY3RvcnlGdW5jdGlvbiB9IGZyb20gJy4vYXN5bmMtZmFjdG9yeS1mdW5jdGlvbi1yZXF1aXJlZC1wcm9wZXJ0aWVzJztcbmltcG9ydCB7IGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucyB9IGZyb20gJy4vZHluYW1pYy11aS1jdXJyZW50LWNvbmRpdGlvbnMnO1xuaW1wb3J0IHsgZGlzcGxheVdlZWtseUZvcmVjYXN0IH0gZnJvbSAnLi9keW5hbWljLXVpLXdlZWtseS1mb3JlY2FzdCc7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hib3hUb1dlYXRoZXIgPSBmdW5jdGlvbiBzZWFyY2hib3hUb1dlYXRoZXIoXG4gIGN1cnJlbnRDb25kaXRpb25zRGl2LFxuICB3ZWVrbHlGb3JlY2FzdERpdlxuKSB7XG4gIC8vIGNyZWF0ZSBhcHByb3ByaWF0ZSBkaXZzXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGVudCcpO1xuICBjb25zdCBzZWFyY2hib3hEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoYm94LWRpdicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCBzZWFyY2hib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIHNlYXJjaGJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc2VhcmNoJyk7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ3N1Ym1pdCc7XG4gIHNlYXJjaGJveC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCBmb3IgYSBjaXR5Li4nKTtcbiAgc2VhcmNoYm94LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgc2VhcmNoYm94LnNldEF0dHJpYnV0ZShcbiAgICAnb25pbnZhbGlkJyxcbiAgICBcInRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGNpdHknKVwiXG4gICk7XG4gIHNlYXJjaGJveC5zZXRBdHRyaWJ1dGUoJ29uaW5wdXQnLCBcInRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkoJycpXCIpO1xuICBzZWFyY2hib3guc2V0QXR0cmlidXRlKCdwYXR0ZXJuJywgJ15bQS1aYS16IF0rJCcpO1xuXG4gIHNlYXJjaGJveERpdi5hcHBlbmQoZm9ybSk7XG4gIGZvcm0uYXBwZW5kKHNlYXJjaGJveCk7XG4gIGZvcm0uYXBwZW5kKHN1Ym1pdEJ1dHRvbik7XG5cbiAgLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIG9udG8gdGhlIGZvcm0sIHRoZSBmdW5jdGlvbiBwYXNzZWQgbmVlZHMgdG8gYmUgYXN5bmNocm9ub3VzIHRvIGdldCB0aGUgY29ycmVjdCB2YWx1ZS5cbiAgLy8gV2hlcmUgdGhlIGJ1bGsgb2YgcmVuZGVyaW5nIGl0ZW1zIG9uIHRoZSBicm93c2VyIGhhcHBlbnMuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2VhcmNoYm94VmFsdWUgPSBzZWFyY2hib3gudmFsdWU7XG4gICAgY29uc3QgbXlXZWF0aGVyT2JqZWN0ID0gYXdhaXQgcmVxdWlyZWRXZWF0aGVyUHJvcGVydGllc0ZhY3RvcnlGdW5jdGlvbihcbiAgICAgIHNlYXJjaGJveFZhbHVlXG4gICAgKTtcblxuICAgIGN1cnJlbnRDb25kaXRpb25zRGl2LnRleHRDb250ZW50ID0gJyc7XG4gICAgd2Vla2x5Rm9yZWNhc3REaXYudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucyhteVdlYXRoZXJPYmplY3QpO1xuICAgIGRpc3BsYXlXZWVrbHlGb3JlY2FzdChteVdlYXRoZXJPYmplY3QpO1xuICAgIC8vIFNldCBsb2NhbCBzdG9yYWdlIHdoZW4gdXNlciBzdWJtaXRzIGNpdHkuIFRoaXMgd2lsbCBiZSB1c2VkIHRvIGxvYWQgdXAgdGhlIHNhbWUgY2l0eSB3aGVuIHRoZXkgcmVsb2FkIHBhZ2UuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdHknLCBKU09OLnN0cmluZ2lmeShteVdlYXRoZXJPYmplY3QpKTtcbiAgfSk7XG5cbiAgLy8gdG8gaGF2ZSBteVdlYXRoZXJPYmplY3QgcHJvcGVydGllcyBwcm9wZXJseSBkaXNwbGF5IG9udG8gdGhlIHBhZ2UgVUksIHdoeSBkb24ndCBJIGp1c3QgcGFzcyBkb3duIGVhY2ggb2YgdGhvc2UgcHJvcGVydGllcyB0aHJvdWdoXG4gIC8vIGEgZnVuY3Rpb24ncyBwYXJhbWV0ZXJzPyBpLmUuIG15V2VhdGhlclVJKG15V2VhdGhlck9iamVjdC5uYW1lLCBteVdlYXRoZXJPYmplY3QuY291bnRyeSwgZXRjLilcbiAgLy8gbXlXZWF0aGVyVUkgaGFzIGEgYnVuY2ggb2YgY29kZSBpbnNpZGUsIG9uIHRoZSByaWdodCBoYW5kIHNpZGUgb2YgYXNzaWdubWVudCB3ZSB3aWxsIHVzZSB0aGVzZSBhcmd1bWVudHMuIFdlIGNhbiBpbXBvcnQgbXlXZWF0aGVyVUkgZnJvbSBhbm90aGVyIG1vZHVsZSBvbnRvIGhlcmUuXG4gIC8vIG9uIHRoZSBwcmVzcyBvZiBcIlN1Ym1pdFwiIGJ1dHRvbiwgdGhhdCdzIHdoZW4gaXQgd2lsbCBjcmVhdGUgdGhlIFVJLCBieSBpbnZva2luZyB0aGUgbXlXZWF0aGVyVUkoKSBmdW5jdGlvbiwgd2hpY2ggY29udGFpbnMgYSBidW5jaCBvZiAuY3JlYXRlRWxlbWVudCgpXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzZWFyY2hib3hUb1dlYXRoZXIgfSBmcm9tICcuL21vZHVsZXMvc2VhcmNoYm94LXRvLXdlYXRoZXInO1xuaW1wb3J0IHsgb25Mb2FkRGlzcGxheSB9IGZyb20gJy4vbW9kdWxlcy9sb2NhbC1zdG9yYWdlJztcblxuY29uc3QgY3VycmVudENvbmRpdGlvbnNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1jb25kaXRpb25zLWRpdicpO1xuY29uc3Qgd2Vla2x5Rm9yZWNhc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vla2x5LWZvcmVjYXN0LWRpdicpO1xuXG5zZWFyY2hib3hUb1dlYXRoZXIoY3VycmVudENvbmRpdGlvbnNEaXYsIHdlZWtseUZvcmVjYXN0RGl2KTtcblxuY29uc3QgbG9jYWxXZWF0aGVyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdHknKSk7XG5cbmNvbnN0IGxvYWRMUyA9IChmdW5jdGlvbiBsb2FkTG9jYWxXZWF0aGVyRGF0YSgpIHtcbiAgdHJ5IHtcbiAgICBpZiAobG9jYWxXZWF0aGVyRGF0YSAhPT0gJ251bGwnIHx8IGxvY2FsV2VhdGhlckRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB3aW5kb3cub25sb2FkID0gb25Mb2FkRGlzcGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm47XG4gIH1cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=