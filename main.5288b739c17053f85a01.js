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
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=d0fb988627c0d201253cf73bc57e0cef`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQytDO0FBQ1o7O0FBRXhEO0FBQ0E7O0FBRUEsaUZBQWtCOztBQUVsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUVBQWE7QUFDbkMsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hc3luYy1mYWN0b3J5LWZ1bmN0aW9uLXJlcXVpcmVkLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FzeW5jLWZldGNoLWxvY2F0aW9uLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hc3luYy1mZXRjaC10aW1lLWRhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FzeW5jLWZldGNoLXdlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZHluYW1pYy11aS1jdXJyZW50LWNvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2R5bmFtaWMtdWktd2Vla2x5LWZvcmVjYXN0LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zZWFyY2hib3gtdG8td2VhdGhlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvUXVpY2tzYW5kL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9qb3NoLWthaGVuLUtMOUlhbkh6U0U0LXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAgSm9zaCdzIEN1c3RvbSBDU1MgUmVzZXRcXG4gIGh0dHBzOi8vd3d3Lmpvc2h3Y29tZWF1LmNvbS9jc3MvY3VzdG9tLWNzcy1yZXNldC9cXG4qL1xcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIGh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICB9XFxuICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gIH1cXG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgfVxcbiAgI3Jvb3QsICNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxuICB9XFxuXFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgfVxcblxcbiAgKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBxdWlja3NhbmQsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIC8qICBNQUlOIENPTlRFTlQgKi9cXG5cXG4gIGJvZHkge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZCwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2pvc2gta2FoZW4tS0w5SWFuSHpTRTQtdW5zcGxhc2guanBnKTsgKi9cXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgI21haW4tY29udGVudCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICB3aWR0aDogOTB2dztcXG4gICAgICBoZWlnaHQ6IDg1dmg7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMC41ZnIgMC43ZnI7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcXG4gICAgICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDEwcHggcmdiYSgyNDUsIDIyMiwgMTc5LCAwLjU3NSk7XFxuICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gICNtYWluLWNvbnRlbnQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcblxcbi8qIFNFQVJDSEJBUiAqL1xcblxcbi5zZWFyY2hib3gtZGl2IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuLnNlYXJjaGJveC1kaXYgPiBmb3JtIHtcXG4gIG1pbi13aWR0aDogMSU7XFxufVxcbiNtYWluLWNvbnRlbnQgPiBkaXYuc2VhcmNoYm94LWRpdiA+IGZvcm0gPiBpbnB1dFt0eXBlPXN1Ym1pdF06bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWluLXdpZHRoOiA1dnc7XFxuICBmb250LXNpemU6IG1heCgxNHB4LCAxLjl2bWluKTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jbWFpbi1jb250ZW50ID4gZGl2LnNlYXJjaGJveC1kaXYgPiBmb3JtID4gaW5wdXRbdHlwZT1zZWFyY2hdOm50aC1jaGlsZCgxKSB7XFxuICBtaW4td2lkdGg6IDIwJTtcXG4gIHdpZHRoOiA1MiU7XFxuICBtaW4taGVpZ2h0OiAyLjJ2aDtcXG4gIGZvbnQtc2l6ZTogbWF4KDE0cHgsIDJ2bWluKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCAyMjQsIDIyNCwgMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNtYWluLWNvbnRlbnQgPiBkaXYuc2VhcmNoYm94LWRpdiA+IGZvcm0gPiBpbnB1dFt0eXBlPXNlYXJjaF06bnRoLWNoaWxkKDEpOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbi8qIENVUlJFTlQgQ09ORElUSU9OUyAqL1xcblxcbiAgLmN1cnJlbnQtY29uZGl0aW9ucy1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgOSwgOSwgMC4yNjcpO1xcbiAgICB3aWR0aDogMTclO1xcbiAgICBmb250LXNpemU6IDEuN3ZtaW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC01MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICAuY3VycmVudC1jb25kaXRpb25zLWRpdiA+IHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIH0gXFxuXFxuICAuY3VycmVudC1jb25kaXRpb25zLWRpdiA+IHNwYW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcblxcbiAgLyogV0VFS0xZIEZPUkVDQVNUICovXFxuXFxuICAud2Vla2x5LWZvcmVjYXN0LWRpdiB7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICB9XFxuXFxuICAud2Vla2x5LWZvcmVjYXN0LWRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogMnZtaW4gO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoZWF0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDEwcHg7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgbWluLWhlaWdodDogNTAlO1xcbiAgfVxcblxcbiAgLndlZWtseS1mb3JlY2FzdC1kaXYgPiBkaXYgPiBzcGFuOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ0ZlZWxzIGxpa2U6ICcgXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFDRDtJQUNJLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLDRDQUE0RDtFQUM5RDs7RUFFQTtJQUNFLG1KQUFtSjtFQUNySjtFQUNBLGtCQUFrQjs7RUFFbEI7TUFDSSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1KQUFtSjtNQUNuSixnQkFBZ0I7TUFDaEIseUVBQXlFO01BQ3pFLGlCQUFpQjtNQUNqQixzQkFBc0I7RUFDMUI7O0VBRUE7TUFDSSxhQUFhO01BQ2IsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLG9CQUFvQjtNQUNwQixxQ0FBcUM7TUFDckMseURBQW1FO01BQ25FLHVCQUF1QjtNQUN2QixzREFBc0Q7TUFDdEQsc0JBQXNCO01BQ3RCLHVCQUF1QjtFQUMzQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFRixjQUFjOztBQUVkO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osY0FBYztFQUNkLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isd0NBQXdDO0VBQ3hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBR0EsdUJBQXVCOztFQUVyQjtJQUNFLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7RUFDQTtFQUNBLGVBQWU7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7OztFQUdBLG9CQUFvQjs7RUFFcEI7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0U7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAgSm9zaCdzIEN1c3RvbSBDU1MgUmVzZXRcXG4gIGh0dHBzOi8vd3d3Lmpvc2h3Y29tZWF1LmNvbS9jc3MvY3VzdG9tLWNzcy1yZXNldC9cXG4qL1xcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIGh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICB9XFxuICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gIH1cXG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgfVxcbiAgI3Jvb3QsICNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxuICB9XFxuXFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZDtcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvUXVpY2tzYW5kL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbiAgfVxcblxcbiAgKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBxdWlja3NhbmQsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIC8qICBNQUlOIENPTlRFTlQgKi9cXG5cXG4gIGJvZHkge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZCwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2pvc2gta2FoZW4tS0w5SWFuSHpTRTQtdW5zcGxhc2guanBnKTsgKi9cXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgI21haW4tY29udGVudCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICB3aWR0aDogOTB2dztcXG4gICAgICBoZWlnaHQ6IDg1dmg7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMC41ZnIgMC43ZnI7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2pvc2gta2FoZW4tS0w5SWFuSHpTRTQtdW5zcGxhc2guanBnKTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcXG4gICAgICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDEwcHggcmdiYSgyNDUsIDIyMiwgMTc5LCAwLjU3NSk7XFxuICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gICNtYWluLWNvbnRlbnQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcblxcbi8qIFNFQVJDSEJBUiAqL1xcblxcbi5zZWFyY2hib3gtZGl2IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuLnNlYXJjaGJveC1kaXYgPiBmb3JtIHtcXG4gIG1pbi13aWR0aDogMSU7XFxufVxcbiNtYWluLWNvbnRlbnQgPiBkaXYuc2VhcmNoYm94LWRpdiA+IGZvcm0gPiBpbnB1dFt0eXBlPXN1Ym1pdF06bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWluLXdpZHRoOiA1dnc7XFxuICBmb250LXNpemU6IG1heCgxNHB4LCAxLjl2bWluKTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jbWFpbi1jb250ZW50ID4gZGl2LnNlYXJjaGJveC1kaXYgPiBmb3JtID4gaW5wdXRbdHlwZT1zZWFyY2hdOm50aC1jaGlsZCgxKSB7XFxuICBtaW4td2lkdGg6IDIwJTtcXG4gIHdpZHRoOiA1MiU7XFxuICBtaW4taGVpZ2h0OiAyLjJ2aDtcXG4gIGZvbnQtc2l6ZTogbWF4KDE0cHgsIDJ2bWluKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCAyMjQsIDIyNCwgMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNtYWluLWNvbnRlbnQgPiBkaXYuc2VhcmNoYm94LWRpdiA+IGZvcm0gPiBpbnB1dFt0eXBlPXNlYXJjaF06bnRoLWNoaWxkKDEpOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbi8qIENVUlJFTlQgQ09ORElUSU9OUyAqL1xcblxcbiAgLmN1cnJlbnQtY29uZGl0aW9ucy1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgOSwgOSwgMC4yNjcpO1xcbiAgICB3aWR0aDogMTclO1xcbiAgICBmb250LXNpemU6IDEuN3ZtaW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC01MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICAuY3VycmVudC1jb25kaXRpb25zLWRpdiA+IHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIH0gXFxuXFxuICAuY3VycmVudC1jb25kaXRpb25zLWRpdiA+IHNwYW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcblxcbiAgLyogV0VFS0xZIEZPUkVDQVNUICovXFxuXFxuICAud2Vla2x5LWZvcmVjYXN0LWRpdiB7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICB9XFxuXFxuICAud2Vla2x5LWZvcmVjYXN0LWRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogMnZtaW4gO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoZWF0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDEwcHg7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgbWluLWhlaWdodDogNTAlO1xcbiAgfVxcblxcbiAgLndlZWtseS1mb3JlY2FzdC1kaXYgPiBkaXYgPiBzcGFuOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ0ZlZWxzIGxpa2U6ICcgXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZldGNoV2VhdGhlckNvbmRpdGlvbnMgfSBmcm9tICcuL2FzeW5jLWZldGNoLXdlYXRoZXItZGF0YSc7XG5pbXBvcnQgeyBmZXRjaExvY2F0aW9uIH0gZnJvbSAnLi9hc3luYy1mZXRjaC1sb2NhdGlvbic7XG5pbXBvcnQgeyB0aW1lQW5kRGF0ZSB9IGZyb20gJy4vYXN5bmMtZmV0Y2gtdGltZS1kYXRlJztcblxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkV2VhdGhlclByb3BlcnRpZXNGYWN0b3J5RnVuY3Rpb24gPVxuICBhc3luYyBmdW5jdGlvbiByZXF1aXJlZFdlYXRoZXJQcm9wZXJ0aWVzRmFjdG9yeUZ1bmN0aW9uKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgLy8gR3JhYiBuZWNlc3Nhcnkgb2JqZWN0cyB2aWEgUHJvbWlzZXMuXG5cbiAgICAgIGNvbnN0IHdlYXRoZXJPYmplY3QgPSBhd2FpdCBmZXRjaFdlYXRoZXJDb25kaXRpb25zKGNpdHkpO1xuICAgICAgY29uc3QgbG9jYXRpb25PYmplY3QgPSBhd2FpdCBmZXRjaExvY2F0aW9uKGNpdHkpO1xuICAgICAgY29uc3QgdGltZUFuZERhdGVPYmplY3QgPSBhd2FpdCB0aW1lQW5kRGF0ZShjaXR5KTtcblxuICAgICAgLy9SZXR1cm4gb25seSB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXMgZm9yIG15IHByb2plY3QuXG5cbiAgICAgIGNvbnN0IHNldmVuRGF5Rm9yZWNhc3QgPSB3ZWF0aGVyT2JqZWN0LmRhaWx5O1xuICAgICAgY29uc3QgY3VycmVudEZvcmVjYXN0ID0gd2VhdGhlck9iamVjdC5jdXJyZW50O1xuICAgICAgY29uc3QgbmFtZU9mQ2l0eSA9IGxvY2F0aW9uT2JqZWN0Lm5hbWU7XG4gICAgICBjb25zdCBuYW1lT2ZTdGF0ZSA9IGxvY2F0aW9uT2JqZWN0LnN0YXRlO1xuICAgICAgY29uc3QgbmFtZU9mQ291bnRyeSA9IGxvY2F0aW9uT2JqZWN0LmNvdW50cnk7XG4gICAgICBjb25zdCB0aW1lQW5kRGF0ZU9mQ291bnRyeSA9IHRpbWVBbmREYXRlT2JqZWN0O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZXZlbkRheUZvcmVjYXN0LFxuICAgICAgICBjdXJyZW50Rm9yZWNhc3QsXG4gICAgICAgIG5hbWVPZkNpdHksXG4gICAgICAgIG5hbWVPZlN0YXRlLFxuICAgICAgICBuYW1lT2ZDb3VudHJ5LFxuICAgICAgICB0aW1lQW5kRGF0ZU9mQ291bnRyeSxcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyJyk7XG4gICAgfVxuICB9O1xuIiwiZXhwb3J0IGNvbnN0IGZldGNoTG9jYXRpb24gPSBhc3luYyBmdW5jdGlvbiBmZXRjaExvY2F0aW9uKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICAvLyBGZXRjaCB0aGUgR2VvY29kZSBmb3IgdGhlIGNpdHkgSSBuZWVkLiBBIG5lY2Vzc2FyeSBzdGVwIHRvIGNvbnZlcnQgYSBjaXR5J3MgbG9jYXRpb24gdG8gbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSBvZiBzYWlkIGxvY2F0aW9uLlxuXG4gICAgY29uc3QgcmVzcG9uc2VHZW9jb2RpbmdBUEkgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mbGltaXQ9MSZhcHBpZD1kMGZiOTg4NjI3YzBkMjAxMjUzY2Y3M2JjNTdlMGNlZmAsXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhR2VvY29kaW5nQVBJID0gYXdhaXQgcmVzcG9uc2VHZW9jb2RpbmdBUEkuanNvbigpO1xuICAgIHJldHVybiBkYXRhR2VvY29kaW5nQVBJWzBdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGZldGNoV2VhdGhlckNvbmRpdGlvbnMgfSBmcm9tICcuL2FzeW5jLWZldGNoLXdlYXRoZXItZGF0YSc7XG5leHBvcnQgY29uc3QgdGltZUFuZERhdGUgPSBhc3luYyBmdW5jdGlvbiB0aW1lQW5kRGF0ZShsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJPZkNpdHkgPSBhd2FpdCBmZXRjaFdlYXRoZXJDb25kaXRpb25zKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlVGltZUFuZERhdGUgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBcbiAgICAgIGh0dHBzOi8vdGltZXpvbmVhcGkuaW8vYXBpL3RpbWV6b25lLz8ke3dlYXRoZXJPZkNpdHkudGltZXpvbmV9JnRva2VuPWFoSXJMb1BOeXpwc09OVExkbU9JXG5gLFxuICAgICAge1xuICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGFUaW1lQW5kRGF0ZSA9IGF3YWl0IHJlc3BvbnNlVGltZUFuZERhdGUuanNvbigpO1xuXG4gICAgcmV0dXJuIGRhdGFUaW1lQW5kRGF0ZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGZldGNoTG9jYXRpb24gfSBmcm9tICcuL2FzeW5jLWZldGNoLWxvY2F0aW9uJztcbmV4cG9ydCBjb25zdCBmZXRjaFdlYXRoZXJDb25kaXRpb25zID0gYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyQ29uZGl0aW9ucyhcbiAgY2l0eVxuKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIHJldHVybmVkIG9iamVjdCBvZiBmZXRjaExvY2F0aW9uKGNpdHkpIHRvIHNldHVwIHRoZSByZXNwb25zZVdlYXRoZXJBUEkgZmV0Y2ggYmVjYXVzZSBsb24gYW5kIGxhdCBhcmUgbmVlZGVkIHBhcmFtZXRlcnMuXG4gICAgY29uc3QgZGF0YU9mR2VvY29kaW5nQVBJID0gYXdhaXQgZmV0Y2hMb2NhdGlvbihjaXR5KTtcblxuICAgIGNvbnN0IGxvbmdpdHVkZU9mQ2l0eSA9IGRhdGFPZkdlb2NvZGluZ0FQSS5sb247XG4gICAgY29uc3QgbGF0aXR1ZGVPZkNpdHkgPSBkYXRhT2ZHZW9jb2RpbmdBUEkubGF0O1xuICAgIGNvbnN0IG5hbWVPZkNpdHkgPSBkYXRhT2ZHZW9jb2RpbmdBUEkubmFtZTtcbiAgICBjb25zdCBzdGF0ZU9mQ2l0eSA9IGRhdGFPZkdlb2NvZGluZ0FQSS5zdGF0ZTtcblxuICAgIGNvbnN0IHJlc3BvbnNlV2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdGl0dWRlT2ZDaXR5fSZsb249JHtsb25naXR1ZGVPZkNpdHl9JmV4Y2x1ZGU9e3BhcnR9JnVuaXRzPW1ldHJpYyZhcHBpZD1kMGZiOTg4NjI3YzBkMjAxMjUzY2Y3M2JjNTdlMGNlZmAsXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhV2VhdGhlckFQSSA9IGF3YWl0IHJlc3BvbnNlV2VhdGhlckFQSS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGFXZWF0aGVyQVBJO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUN1cnJlbnRDb25kaXRpb25zID0gZnVuY3Rpb24gY3JlYXRlQ3VycmVudENvbmRpdGlvbnMoXG4gIGN1cnJlbnRDb25kaXRpb24sXG4gIGNpdHksXG4gIGN1cnJlbnREYXRlLFxuICBjdXJyZW50VGltZSxcbiAgY3VycmVudFRlbXAsXG4gIGZlZWxzTGlrZSxcbiAgaHVtaWRpdHksXG4gIHdpbmRTcGVlZFxuKSB7XG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb25zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmN1cnJlbnQtY29uZGl0aW9ucy1kaXYnXG4gICk7XG4gIGNvbnN0IGVsZW1lbnRBcnJheSA9IFtdO1xuXG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICAnSmFudWFyeScsXG4gICAgJ0ZlYnJ1YXJ5JyxcbiAgICAnTWFyY2gnLFxuICAgICdBcHJpbCcsXG4gICAgJ01heScsXG4gICAgJ0p1bmUnLFxuICAgICdKdWx5JyxcbiAgICAnQXVndXN0JyxcbiAgICAnU2VwdGVtYmVyJyxcbiAgICAnT2N0b2JlcicsXG4gICAgJ05vdmVtYmVyJyxcbiAgICAnRGVjZW1iZXInLFxuICBdO1xuICBjb25zdCBkYXlzID0gW1xuICAgICdTdW5kYXknLFxuICAgICdNb25kYXknLFxuICAgICdUdWVzZGF5JyxcbiAgICAnV2VkbmVzZGF5JyxcbiAgICAnVGh1cnNkYXknLFxuICAgICdGcmlkYXknLFxuICAgICdTYXR1cmRheScsXG4gIF07XG5cbiAgY29uc3QgZ2V0RGF0ZSA9IGZ1bmN0aW9uIGdldERhdGUoKSB7XG4gICAgbGV0IGRhdGU7XG4gICAgbGV0IG1vbnRoID0gbW9udGhzW3RvZGF5LmdldE1vbnRoKCldO1xuICAgIGxldCBkYXkgPSBkYXlzW3RvZGF5LmdldERhdGUoKV07XG4gICAgcmV0dXJuIChkYXRlID1cbiAgICAgIGRheSArXG4gICAgICAnLCcgK1xuICAgICAgJyAnICtcbiAgICAgIG1vbnRoICtcbiAgICAgICcgJyArXG4gICAgICB0b2RheS5nZXREYXRlKCkgK1xuICAgICAgJywnICtcbiAgICAgICcgJyArXG4gICAgICB0b2RheS5nZXRGdWxsWWVhcigpKTtcbiAgfTtcblxuICBjb25zdCBnZXRUaW1lID0gZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgICBsZXQgaG91ciA9IHRvZGF5LmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXMgPSB0b2RheS5nZXRNaW51dGVzKCk7XG4gICAgcmV0dXJuIGhvdXIgKyAnOicgKyBtaW51dGVzO1xuICB9O1xuXG4gIGNvbnN0IGVsZW1lbnRUZXh0Q29udGVudCA9IFtcbiAgICBjdXJyZW50Q29uZGl0aW9uLFxuICAgIGNpdHksXG4gICAgY3VycmVudERhdGUsXG4gICAgY3VycmVudFRpbWUsXG4gICAgY3VycmVudFRlbXAsXG4gICAgZmVlbHNMaWtlLFxuICAgIGh1bWlkaXR5LFxuICAgIHdpbmRTcGVlZCxcbiAgXTtcblxuICBjb25zdCBlbGVtZW50QXJyYXlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVsZW1lbnRBcnJheUZ1bmN0aW9uKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICBlbGVtZW50QXJyYXlbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBjdXJyZW50Q29uZGl0aW9uc0Rpdi5hcHBlbmQoZWxlbWVudEFycmF5W2ldKTtcbiAgICAgIGVsZW1lbnRBcnJheVtpXS50ZXh0Q29udGVudCA9IGVsZW1lbnRUZXh0Q29udGVudFtpXTtcbiAgICB9XG4gIH07XG4gIGVsZW1lbnRBcnJheUZ1bmN0aW9uKCk7XG5cbiAgY29uc3QgW1xuICAgIGN1cnJlbnRDb25kaXRpb25zU3BhbixcbiAgICBjaXR5U3BhbixcbiAgICBkYXRlU3BhbixcbiAgICBjdXJyZW50VGltZVNwYW4sXG4gICAgY3VycmVudFRlbXBTcGFuLFxuICAgIGZlZWxzTGlrZVNwYW4sXG4gICAgaHVtaWRpdHlTcGFuLFxuICAgIHdpbmRTcGVlZFNwYW4sXG4gIF0gPSBlbGVtZW50QXJyYXk7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIHRoYXQgSSBwYXNzIG9udG8gc2VhcmNoYm94LXRvLXdlYXRoZXIuanMgdG8gZGlzcGxheSB0aGUgY3VycmVudCBjb25kaXRpb25zLlxuXG5leHBvcnQgY29uc3QgZGlzcGxheUN1cnJlbnRDb25kaXRpb25zID0gZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRDb25kaXRpb25zKFxuICBteVdlYXRoZXJPYmplY3Rcbikge1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uID1cbiAgICBteVdlYXRoZXJPYmplY3QuY3VycmVudEZvcmVjYXN0LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGNvbnN0IGNpdHkgPSBteVdlYXRoZXJPYmplY3QubmFtZU9mQ2l0eTtcbiAgY29uc3QgY3VycmVudERhdGUgPVxuICAgIG15V2VhdGhlck9iamVjdC50aW1lQW5kRGF0ZU9mQ291bnRyeS5kYXRhLmRhdGV0aW1lLmRheV9mdWxsICtcbiAgICAnLCAnICtcbiAgICBteVdlYXRoZXJPYmplY3QudGltZUFuZERhdGVPZkNvdW50cnkuZGF0YS5kYXRldGltZS5tb250aF9mdWxsICtcbiAgICAnICcgK1xuICAgIG15V2VhdGhlck9iamVjdC50aW1lQW5kRGF0ZU9mQ291bnRyeS5kYXRhLmRhdGV0aW1lLmRheSArXG4gICAgJyAnICtcbiAgICBteVdlYXRoZXJPYmplY3QudGltZUFuZERhdGVPZkNvdW50cnkuZGF0YS5kYXRldGltZS55ZWFyO1xuICBjb25zdCBjdXJyZW50VGltZSA9IG15V2VhdGhlck9iamVjdC50aW1lQW5kRGF0ZU9mQ291bnRyeS5kYXRhLmRhdGV0aW1lLnRpbWU7XG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gTWF0aC5yb3VuZChteVdlYXRoZXJPYmplY3QuY3VycmVudEZvcmVjYXN0LnRlbXApICsgJ8KwQyc7XG4gIGNvbnN0IGZlZWxzTGlrZSA9XG4gICAgJ0ZlZWxzIExpa2U6ICcgK1xuICAgIE1hdGgucm91bmQobXlXZWF0aGVyT2JqZWN0LmN1cnJlbnRGb3JlY2FzdC5mZWVsc19saWtlKSArXG4gICAgJ8KwQyc7XG5cbiAgY29uc3QgaHVtaWRpdHkgPVxuICAgICdIdW1pZGl0eTogJyArIE1hdGguZmxvb3IobXlXZWF0aGVyT2JqZWN0LmN1cnJlbnRGb3JlY2FzdC5odW1pZGl0eSkgKyAnJSc7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGBXaW5kIFNwZWVkOiAke215V2VhdGhlck9iamVjdC5jdXJyZW50Rm9yZWNhc3Qud2luZF9zcGVlZH0ga20vaGA7XG5cbiAgLy8gbWlnaHQgbWFrZSBjdXJyZW50IGNvbmRpdGlvbiBhbmQgc2V2ZW4gZGF5IGZvcmVjYXN0IHR3byBkaWZmZXJlbnQgb2JqZWN0cyBzbyBJIGNhbiByZXVzZSB0aGVzZSBuYW1lcy5cbiAgY3JlYXRlQ3VycmVudENvbmRpdGlvbnMoXG4gICAgY3VycmVudENvbmRpdGlvbixcbiAgICBjaXR5LFxuICAgIGN1cnJlbnREYXRlLFxuICAgIGN1cnJlbnRUaW1lLFxuICAgIGN1cnJlbnRUZW1wLFxuICAgIGZlZWxzTGlrZSxcbiAgICBodW1pZGl0eSxcbiAgICB3aW5kU3BlZWRcbiAgKTtcbn07XG4iLCIvL1dyaXRlIHRoZSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgd2Vla2x5IGRpdnMsIGFuZCBkaXNwbGF5aW5nIHRoZW0uIFRoZXNlIGFyZSB0byBiZSBwYXNzZWQgb250byBzZWFyY2hib3gtdG8td2VhdGhlci5qc1xuXG5leHBvcnQgY29uc3QgY3JlYXRlV2Vla2x5Rm9yZWNhc3QgPSBmdW5jdGlvbiBjcmVhdGVXZWVrbHlGb3JlY2FzdChcbiAgbmFtZU9mRGF5LFxuICB0ZW1wT2ZEYXksXG4gIGZlZWxzTGlrZU9mRGF5LFxuICBjb25kaXRpb25PZkRheVxuKSB7XG4gIGNvbnN0IHdlZWtseUZvcmVjYXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWtseS1mb3JlY2FzdC1kaXYnKTtcbiAgY29uc3QgZGFpbHlTdGF0c0FycmF5ID0gW107XG4gIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB3ZWF0aGVyRGF5U3RhdHMgPSBbXG4gICAgbmFtZU9mRGF5LFxuICAgIHRlbXBPZkRheSxcbiAgICBmZWVsc0xpa2VPZkRheSxcbiAgICBjb25kaXRpb25PZkRheSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgIGRhaWx5U3RhdHNBcnJheVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkYWlseVN0YXRzQXJyYXlbaV0udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF5U3RhdHNbaV07XG4gICAgZGF5LmFwcGVuZChkYWlseVN0YXRzQXJyYXlbaV0pO1xuICB9XG5cbiAgZGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgZGF5LWRpdiAke25hbWVPZkRheX1gKTtcbiAgd2Vla2x5Rm9yZWNhc3REaXYuYXBwZW5kKGRheSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVdlZWtseUZvcmVjYXN0ID0gZnVuY3Rpb24gZGlzcGxheVdlZWtseUZvcmVjYXN0KFxuICBteVdlYXRoZXJPYmplY3Rcbikge1xuICBjb25zdCBuYW1lT2ZEYXlzID0gW1xuICAgICdNb25kYXknLFxuICAgICdUdWVzZGF5JyxcbiAgICAnV2VkbmVzZGF5JyxcbiAgICAnVGh1cnNkYXknLFxuICAgICdGcmlkYXknLFxuICAgICdTYXR1cmRheScsXG4gICAgJ1N1bmRheScsXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgICBjcmVhdGVXZWVrbHlGb3JlY2FzdChcbiAgICAgIG5hbWVPZkRheXNbaV0sXG4gICAgICBNYXRoLnJvdW5kKG15V2VhdGhlck9iamVjdC5zZXZlbkRheUZvcmVjYXN0W2ldLnRlbXAuZGF5KSArICfCsEMnLFxuICAgICAgTWF0aC5yb3VuZChteVdlYXRoZXJPYmplY3Quc2V2ZW5EYXlGb3JlY2FzdFtpXS5mZWVsc19saWtlLmRheSkgKyAnwrBDJyxcbiAgICAgIG15V2VhdGhlck9iamVjdC5zZXZlbkRheUZvcmVjYXN0W2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgZGlzcGxheUN1cnJlbnRDb25kaXRpb25zIH0gZnJvbSAnLi9keW5hbWljLXVpLWN1cnJlbnQtY29uZGl0aW9ucyc7XG5pbXBvcnQgeyBkaXNwbGF5V2Vla2x5Rm9yZWNhc3QgfSBmcm9tICcuL2R5bmFtaWMtdWktd2Vla2x5LWZvcmVjYXN0JztcblxuZXhwb3J0IGNvbnN0IG9uTG9hZERpc3BsYXkgPSBmdW5jdGlvbiBvbkxvYWREaXNwbGF5KCkge1xuICBjb25zdCBjdXJyZW50Q2l0eSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdHknKSk7XG5cbiAgZGlzcGxheUN1cnJlbnRDb25kaXRpb25zKGN1cnJlbnRDaXR5KTtcbiAgZGlzcGxheVdlZWtseUZvcmVjYXN0KGN1cnJlbnRDaXR5KTtcbn07XG4iLCJpbXBvcnQgeyByZXF1aXJlZFdlYXRoZXJQcm9wZXJ0aWVzRmFjdG9yeUZ1bmN0aW9uIH0gZnJvbSAnLi9hc3luYy1mYWN0b3J5LWZ1bmN0aW9uLXJlcXVpcmVkLXByb3BlcnRpZXMnO1xuaW1wb3J0IHsgZGlzcGxheUN1cnJlbnRDb25kaXRpb25zIH0gZnJvbSAnLi9keW5hbWljLXVpLWN1cnJlbnQtY29uZGl0aW9ucyc7XG5pbXBvcnQgeyBkaXNwbGF5V2Vla2x5Rm9yZWNhc3QgfSBmcm9tICcuL2R5bmFtaWMtdWktd2Vla2x5LWZvcmVjYXN0JztcblxuZXhwb3J0IGNvbnN0IHNlYXJjaGJveFRvV2VhdGhlciA9IGZ1bmN0aW9uIHNlYXJjaGJveFRvV2VhdGhlcihcbiAgY3VycmVudENvbmRpdGlvbnNEaXYsXG4gIHdlZWtseUZvcmVjYXN0RGl2XG4pIHtcbiAgLy8gY3JlYXRlIGFwcHJvcHJpYXRlIGRpdnNcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250ZW50Jyk7XG4gIGNvbnN0IHNlYXJjaGJveERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hib3gtZGl2Jyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IHNlYXJjaGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgc2VhcmNoYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdzZWFyY2gnKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblxuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnc3VibWl0JztcbiAgc2VhcmNoYm94LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoIGZvciBhIGNpdHkuLicpO1xuICBzZWFyY2hib3guc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuICBzZWFyY2hib3guc2V0QXR0cmlidXRlKFxuICAgICdvbmludmFsaWQnLFxuICAgIFwidGhpcy5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgdmFsaWQgY2l0eScpXCJcbiAgKTtcbiAgc2VhcmNoYm94LnNldEF0dHJpYnV0ZSgnb25pbnB1dCcsIFwidGhpcy5zZXRDdXN0b21WYWxpZGl0eSgnJylcIik7XG4gIHNlYXJjaGJveC5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCAnXltBLVphLXogXSskJyk7XG5cbiAgc2VhcmNoYm94RGl2LmFwcGVuZChmb3JtKTtcbiAgZm9ybS5hcHBlbmQoc2VhcmNoYm94KTtcbiAgZm9ybS5hcHBlbmQoc3VibWl0QnV0dG9uKTtcblxuICAvLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgb250byB0aGUgZm9ybSwgdGhlIGZ1bmN0aW9uIHBhc3NlZCBuZWVkcyB0byBiZSBhc3luY2hyb25vdXMgdG8gZ2V0IHRoZSBjb3JyZWN0IHZhbHVlLlxuICAvLyBXaGVyZSB0aGUgYnVsayBvZiByZW5kZXJpbmcgaXRlbXMgb24gdGhlIGJyb3dzZXIgaGFwcGVucy5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZWFyY2hib3hWYWx1ZSA9IHNlYXJjaGJveC52YWx1ZTtcbiAgICBjb25zdCBteVdlYXRoZXJPYmplY3QgPSBhd2FpdCByZXF1aXJlZFdlYXRoZXJQcm9wZXJ0aWVzRmFjdG9yeUZ1bmN0aW9uKFxuICAgICAgc2VhcmNoYm94VmFsdWVcbiAgICApO1xuXG4gICAgY3VycmVudENvbmRpdGlvbnNEaXYudGV4dENvbnRlbnQgPSAnJztcbiAgICB3ZWVrbHlGb3JlY2FzdERpdi50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgZGlzcGxheUN1cnJlbnRDb25kaXRpb25zKG15V2VhdGhlck9iamVjdCk7XG4gICAgZGlzcGxheVdlZWtseUZvcmVjYXN0KG15V2VhdGhlck9iamVjdCk7XG4gICAgLy8gU2V0IGxvY2FsIHN0b3JhZ2Ugd2hlbiB1c2VyIHN1Ym1pdHMgY2l0eS4gVGhpcyB3aWxsIGJlIHVzZWQgdG8gbG9hZCB1cCB0aGUgc2FtZSBjaXR5IHdoZW4gdGhleSByZWxvYWQgcGFnZS5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0eScsIEpTT04uc3RyaW5naWZ5KG15V2VhdGhlck9iamVjdCkpO1xuICB9KTtcblxuICAvLyB0byBoYXZlIG15V2VhdGhlck9iamVjdCBwcm9wZXJ0aWVzIHByb3Blcmx5IGRpc3BsYXkgb250byB0aGUgcGFnZSBVSSwgd2h5IGRvbid0IEkganVzdCBwYXNzIGRvd24gZWFjaCBvZiB0aG9zZSBwcm9wZXJ0aWVzIHRocm91Z2hcbiAgLy8gYSBmdW5jdGlvbidzIHBhcmFtZXRlcnM/IGkuZS4gbXlXZWF0aGVyVUkobXlXZWF0aGVyT2JqZWN0Lm5hbWUsIG15V2VhdGhlck9iamVjdC5jb3VudHJ5LCBldGMuKVxuICAvLyBteVdlYXRoZXJVSSBoYXMgYSBidW5jaCBvZiBjb2RlIGluc2lkZSwgb24gdGhlIHJpZ2h0IGhhbmQgc2lkZSBvZiBhc3NpZ25tZW50IHdlIHdpbGwgdXNlIHRoZXNlIGFyZ3VtZW50cy4gV2UgY2FuIGltcG9ydCBteVdlYXRoZXJVSSBmcm9tIGFub3RoZXIgbW9kdWxlIG9udG8gaGVyZS5cbiAgLy8gb24gdGhlIHByZXNzIG9mIFwiU3VibWl0XCIgYnV0dG9uLCB0aGF0J3Mgd2hlbiBpdCB3aWxsIGNyZWF0ZSB0aGUgVUksIGJ5IGludm9raW5nIHRoZSBteVdlYXRoZXJVSSgpIGZ1bmN0aW9uLCB3aGljaCBjb250YWlucyBhIGJ1bmNoIG9mIC5jcmVhdGVFbGVtZW50KClcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNlYXJjaGJveFRvV2VhdGhlciB9IGZyb20gJy4vbW9kdWxlcy9zZWFyY2hib3gtdG8td2VhdGhlcic7XG5pbXBvcnQgeyBvbkxvYWREaXNwbGF5IH0gZnJvbSAnLi9tb2R1bGVzL2xvY2FsLXN0b3JhZ2UnO1xuXG5jb25zdCBjdXJyZW50Q29uZGl0aW9uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWNvbmRpdGlvbnMtZGl2Jyk7XG5jb25zdCB3ZWVrbHlGb3JlY2FzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrbHktZm9yZWNhc3QtZGl2Jyk7XG5cbnNlYXJjaGJveFRvV2VhdGhlcihjdXJyZW50Q29uZGl0aW9uc0Rpdiwgd2Vla2x5Rm9yZWNhc3REaXYpO1xuXG5jb25zdCBsb2NhbFdlYXRoZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0eScpKTtcblxuY29uc3QgbG9hZExTID0gKGZ1bmN0aW9uIGxvYWRMb2NhbFdlYXRoZXJEYXRhKCkge1xuICB0cnkge1xuICAgIGlmIChsb2NhbFdlYXRoZXJEYXRhICE9PSAnbnVsbCcgfHwgbG9jYWxXZWF0aGVyRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHdpbmRvdy5vbmxvYWQgPSBvbkxvYWREaXNwbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybjtcbiAgfVxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==