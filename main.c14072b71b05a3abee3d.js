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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n  }\n  html, body {\n    height: 100%;\n  }\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  input, button, textarea, select {\n    font: inherit;\n  }\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  #root, #__next {\n    isolation: isolate;\n  }\n\n  @font-face {\n    font-family: quicksand;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  }\n\n  * {\n    font-family: quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n  /*  MAIN CONTENT */\n\n  body {\n      display: grid;\n      grid-template-rows: 1fr;\n      font-family: quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      font-weight: 600;\n      /* background-image: url(./assets/josh-kahen-KL9IanHzSE4-unsplash.jpg); */\n      background: black;\n  }\n\n  #main-content {\n      display: grid;\n      width: 90vw;\n      height: 85vh;\n      align-self: center;\n      justify-self: center;\n      border-radius: 100px;\n      grid-template-rows: 0.1fr 0.5fr 0.7fr;\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n      border: 2px solid wheat;\n      box-shadow: -10px 10px 10px rgba(245, 222, 179, 0.575);\n  }\n\n  #main-content > div {\n    display: grid;\n  }\n\n/* SEARCHBAR */\n\n.searchbox-div {\n  justify-content: center;\n  align-items: center;\n}\n\n#main-content > div.searchbox-div > form > input[type=submit]:nth-child(2) {\n  background-color: black;\n  color: white;\n}\n\n/* CURRENT CONDITIONS */\n\n  .current-conditions-div {\n    background-color: rgba(248, 9, 9, 0.267);\n    width: 17%;\n    font-size: 16px;\n    justify-self: center;\n    align-content: center;\n    justify-content: center;\n    gap: -50px;\n    border-radius: 60px;\n    border: 2px solid wheat;\n    gap: 5px;\n    color: white;\n    padding: 0;\n  }\n  .current-conditions-div > span:nth-child(1) {\n  font-size: 30px;\n  } \n\n  .current-conditions-div > span {\n    width: 100%;\n    height: 100%;\n  }\n\n\n  /* WEEKLY FORECAST */\n\n  .weekly-forecast-div {\n    grid-auto-flow: column;\n  }\n\n  .weekly-forecast-div > div {\n    display: grid;\n    height: 40%;\n    margin-bottom: 10px;\n    font-size: 20px;\n    align-self: center;\n    justify-content: center;\n    justify-self: center;\n    justify-items: center;\n    /* background-color: rgba(0, 0, 0, 0.719); */\n    color: white;\n    border: 2px solid wheat;\n    border-radius: 10px;\n    padding: 10px 5px 10px 10px;\n    min-width: 90%;\n  }\n\n  .weekly-forecast-div > div > span:nth-child(3)::before {\n    content: 'Feels like: ' \n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;AACD;IACI,sBAAsB;EACxB;EACA;IACE,SAAS;EACX;EACA;IACE,YAAY;EACd;EACA;IACE,gBAAgB;IAChB,mCAAmC;EACrC;EACA;IACE,cAAc;IACd,eAAe;EACjB;EACA;IACE,aAAa;EACf;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;IACtB,4CAA4D;EAC9D;;EAEA;IACE,mJAAmJ;EACrJ;EACA,kBAAkB;;EAElB;MACI,aAAa;MACb,uBAAuB;MACvB,mJAAmJ;MACnJ,gBAAgB;MAChB,yEAAyE;MACzE,iBAAiB;EACrB;;EAEA;MACI,aAAa;MACb,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,oBAAoB;MACpB,oBAAoB;MACpB,qCAAqC;MACrC,yDAAmE;MACnE,uBAAuB;MACvB,sDAAsD;EAC1D;;EAEA;IACE,aAAa;EACf;;AAEF,cAAc;;AAEd;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA,uBAAuB;;EAErB;IACE,wCAAwC;IACxC,UAAU;IACV,eAAe;IACf,oBAAoB;IACpB,qBAAqB;IACrB,uBAAuB;IACvB,UAAU;IACV,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,YAAY;IACZ,UAAU;EACZ;EACA;EACA,eAAe;EACf;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;;EAGA,oBAAoB;;EAEpB;IACE,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,qBAAqB;IACrB,4CAA4C;IAC5C,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,cAAc;EAChB;;EAEA;IACE;EACF","sourcesContent":["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n  }\n  html, body {\n    height: 100%;\n  }\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  input, button, textarea, select {\n    font: inherit;\n  }\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  #root, #__next {\n    isolation: isolate;\n  }\n\n  @font-face {\n    font-family: quicksand;\n    src: url(./assets/Quicksand/Quicksand-VariableFont_wght.ttf);\n  }\n\n  * {\n    font-family: quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n  /*  MAIN CONTENT */\n\n  body {\n      display: grid;\n      grid-template-rows: 1fr;\n      font-family: quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      font-weight: 600;\n      /* background-image: url(./assets/josh-kahen-KL9IanHzSE4-unsplash.jpg); */\n      background: black;\n  }\n\n  #main-content {\n      display: grid;\n      width: 90vw;\n      height: 85vh;\n      align-self: center;\n      justify-self: center;\n      border-radius: 100px;\n      grid-template-rows: 0.1fr 0.5fr 0.7fr;\n      background-image: url(./assets/josh-kahen-KL9IanHzSE4-unsplash.jpg);\n      border: 2px solid wheat;\n      box-shadow: -10px 10px 10px rgba(245, 222, 179, 0.575);\n  }\n\n  #main-content > div {\n    display: grid;\n  }\n\n/* SEARCHBAR */\n\n.searchbox-div {\n  justify-content: center;\n  align-items: center;\n}\n\n#main-content > div.searchbox-div > form > input[type=submit]:nth-child(2) {\n  background-color: black;\n  color: white;\n}\n\n/* CURRENT CONDITIONS */\n\n  .current-conditions-div {\n    background-color: rgba(248, 9, 9, 0.267);\n    width: 17%;\n    font-size: 16px;\n    justify-self: center;\n    align-content: center;\n    justify-content: center;\n    gap: -50px;\n    border-radius: 60px;\n    border: 2px solid wheat;\n    gap: 5px;\n    color: white;\n    padding: 0;\n  }\n  .current-conditions-div > span:nth-child(1) {\n  font-size: 30px;\n  } \n\n  .current-conditions-div > span {\n    width: 100%;\n    height: 100%;\n  }\n\n\n  /* WEEKLY FORECAST */\n\n  .weekly-forecast-div {\n    grid-auto-flow: column;\n  }\n\n  .weekly-forecast-div > div {\n    display: grid;\n    height: 40%;\n    margin-bottom: 10px;\n    font-size: 20px;\n    align-self: center;\n    justify-content: center;\n    justify-self: center;\n    justify-items: center;\n    /* background-color: rgba(0, 0, 0, 0.719); */\n    color: white;\n    border: 2px solid wheat;\n    border-radius: 10px;\n    padding: 10px 5px 10px 10px;\n    min-width: 90%;\n  }\n\n  .weekly-forecast-div > div > span:nth-child(3)::before {\n    content: 'Feels like: ' \n  }"],"sourceRoot":""}]);
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
      const weatherObject = await (0,_async_fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherConditions)(city);
      const locationObject = await (0,_async_fetch_location__WEBPACK_IMPORTED_MODULE_1__.fetchLocation)(city);
      const timeAndDateObject = await (0,_async_fetch_time_date__WEBPACK_IMPORTED_MODULE_2__.timeAndDate)(city);

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
    console.log(dataGeocodingAPI);
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
      https://cors-anywhere.herokuapp.com/https://www.timeapi.io/api/Time/current/zone?timeZone=${weatherOfCity.timezone}
`,
      { mode: 'cors' }
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

    // POTENTIAL PROMISE VERSION:
    //d0fb988627c0d201253cf73bc57e0cef
    //   fetch(
    //     `https://api.openweathermap.org/data/2.5/onecall?lat=${latitudeOfCity}&lon=${longitudeOfCity}&exclude={part}&appid=d0fb988627c0d201253cf73bc57e0cef`,
    //     { mode: 'cors' }
    //   );
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((response) => {
    //       console.log(response);
    //     });

    const responseWeatherAPI = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitudeOfCity}&lon=${longitudeOfCity}&exclude={part}&units=metric&appid=d0fb988627c0d201253cf73bc57e0cef`,
      { mode: 'cors' }
    );
    const dataWeatherAPI = await responseWeatherAPI.json();
    // console.log(dataWeatherAPI);
    console.log(dataWeatherAPI);
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
    console.log(month);
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
    myWeatherObject.timeAndDateOfCountry.dayOfWeek +
    ', ' +
    myWeatherObject.timeAndDateOfCountry.date;
  const currentTime = myWeatherObject.timeAndDateOfCountry.time;
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
/* harmony import */ var _factory_function_weekly_forecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory-function-weekly-forecast */ "./src/modules/factory-function-weekly-forecast.js");


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

/***/ "./src/modules/factory-function-weekly-forecast.js":
/*!*********************************************************!*\
  !*** ./src/modules/factory-function-weekly-forecast.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weeklyForecastFactoryFunction": () => (/* binding */ weeklyForecastFactoryFunction)
/* harmony export */ });
const weeklyForecastFactoryFunction =
  function weeklyForecastFactoryFunction(
    nameOfDay,
    tempOfDay,
    feelsLikeOfDay,
    conditionOfDay
  ) {
    const [day, temp, feelsLike, condition] = [
      nameOfDay,
      tempOfDay,
      feelsLikeOfDay,
      conditionOfDay,
    ];

    return {
      day,
      temp,
      feelsLike,
      condition,
    };
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
  searchbox.setAttribute('placeholder', 'Search a city..');
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

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchboxValue = searchbox.value;
    const myWeatherObject = await (0,_async_factory_function_required_properties__WEBPACK_IMPORTED_MODULE_0__.requiredWeatherPropertiesFactoryFunction)(
      searchboxValue
    );
    console.log(myWeatherObject);

    currentConditionsDiv.textContent = '';
    weeklyForecastDiv.textContent = '';

    (0,_dynamic_ui_current_conditions__WEBPACK_IMPORTED_MODULE_1__.displayCurrentConditions)(myWeatherObject);
    (0,_dynamic_ui_weekly_forecast__WEBPACK_IMPORTED_MODULE_2__.displayWeeklyForecast)(myWeatherObject);

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
window.onload = (0,_modules_local_storage__WEBPACK_IMPORTED_MODULE_2__.onLoadDisplay)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyw0Q0FBNEM7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSW1GOztBQUU1RTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLFVBQVU7QUFDakQ7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakRPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCMkU7QUFDTjs7QUFFOUQ7QUFDUDs7QUFFQSxFQUFFLHdGQUF3QjtBQUMxQixFQUFFLGtGQUFxQjtBQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUndHO0FBQzdCO0FBQ047O0FBRTlEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUhBQXdDO0FBQzFFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksd0ZBQXdCO0FBQzVCLElBQUksa0ZBQXFCOztBQUV6QjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDK0M7QUFDWjs7QUFFeEQ7QUFDQTs7QUFFQSxpRkFBa0I7QUFDbEIsZ0JBQWdCLHFFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXN5bmMtZmFjdG9yeS1mdW5jdGlvbi1yZXF1aXJlZC1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hc3luYy1mZXRjaC1sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXN5bmMtZmV0Y2gtdGltZS1kYXRlLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hc3luYy1mZXRjaC13ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2R5bmFtaWMtdWktY3VycmVudC1jb25kaXRpb25zLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9keW5hbWljLXVpLXdlZWtseS1mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZmFjdG9yeS1mdW5jdGlvbi13ZWVrbHktZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3NlYXJjaGJveC10by13ZWF0aGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9RdWlja3NhbmQvUXVpY2tzYW5kLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2pvc2gta2FoZW4tS0w5SWFuSHpTRTQtdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICBKb3NoJ3MgQ3VzdG9tIENTUyBSZXNldFxcbiAgaHR0cHM6Ly93d3cuam9zaHdjb21lYXUuY29tL2Nzcy9jdXN0b20tY3NzLXJlc2V0L1xcbiovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIH1cXG4gIGltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIGlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgfVxcbiAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB9XFxuICAjcm9vdCwgI19fbmV4dCB7XFxuICAgIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG4gIH1cXG5cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogcXVpY2tzYW5kO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICB9XFxuXFxuICAqIHtcXG4gICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZCwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgfVxcbiAgLyogIE1BSU4gQ09OVEVOVCAqL1xcblxcbiAgYm9keSB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgICBmb250LWZhbWlseTogcXVpY2tzYW5kLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvam9zaC1rYWhlbi1LTDlJYW5IelNFNC11bnNwbGFzaC5qcGcpOyAqL1xcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgfVxcblxcbiAgI21haW4tY29udGVudCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICB3aWR0aDogOTB2dztcXG4gICAgICBoZWlnaHQ6IDg1dmg7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMC41ZnIgMC43ZnI7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcXG4gICAgICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDEwcHggcmdiYSgyNDUsIDIyMiwgMTc5LCAwLjU3NSk7XFxuICB9XFxuXFxuICAjbWFpbi1jb250ZW50ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG5cXG4vKiBTRUFSQ0hCQVIgKi9cXG5cXG4uc2VhcmNoYm94LWRpdiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluLWNvbnRlbnQgPiBkaXYuc2VhcmNoYm94LWRpdiA+IGZvcm0gPiBpbnB1dFt0eXBlPXN1Ym1pdF06bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBDVVJSRU5UIENPTkRJVElPTlMgKi9cXG5cXG4gIC5jdXJyZW50LWNvbmRpdGlvbnMtZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDksIDksIDAuMjY3KTtcXG4gICAgd2lkdGg6IDE3JTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAtNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hlYXQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAuY3VycmVudC1jb25kaXRpb25zLWRpdiA+IHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIH0gXFxuXFxuICAuY3VycmVudC1jb25kaXRpb25zLWRpdiA+IHNwYW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcblxcbiAgLyogV0VFS0xZIEZPUkVDQVNUICovXFxuXFxuICAud2Vla2x5LWZvcmVjYXN0LWRpdiB7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICB9XFxuXFxuICAud2Vla2x5LWZvcmVjYXN0LWRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpOyAqL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoZWF0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDEwcHg7XFxuICAgIG1pbi13aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLndlZWtseS1mb3JlY2FzdC1kaXYgPiBkaXYgPiBzcGFuOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ0ZlZWxzIGxpa2U6ICcgXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFDRDtJQUNJLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLDRDQUE0RDtFQUM5RDs7RUFFQTtJQUNFLG1KQUFtSjtFQUNySjtFQUNBLGtCQUFrQjs7RUFFbEI7TUFDSSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1KQUFtSjtNQUNuSixnQkFBZ0I7TUFDaEIseUVBQXlFO01BQ3pFLGlCQUFpQjtFQUNyQjs7RUFFQTtNQUNJLGFBQWE7TUFDYixXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixvQkFBb0I7TUFDcEIsb0JBQW9CO01BQ3BCLHFDQUFxQztNQUNyQyx5REFBbUU7TUFDbkUsdUJBQXVCO01BQ3ZCLHNEQUFzRDtFQUMxRDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFRixjQUFjOztBQUVkO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUEsdUJBQXVCOztFQUVyQjtJQUNFLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1YsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixZQUFZO0lBQ1osVUFBVTtFQUNaO0VBQ0E7RUFDQSxlQUFlO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOzs7RUFHQSxvQkFBb0I7O0VBRXBCO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRTtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICBKb3NoJ3MgQ3VzdG9tIENTUyBSZXNldFxcbiAgaHR0cHM6Ly93d3cuam9zaHdjb21lYXUuY29tL2Nzcy9jdXN0b20tY3NzLXJlc2V0L1xcbiovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIH1cXG4gIGltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIGlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgfVxcbiAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB9XFxuICAjcm9vdCwgI19fbmV4dCB7XFxuICAgIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG4gIH1cXG5cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogcXVpY2tzYW5kO1xcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9RdWlja3NhbmQvUXVpY2tzYW5kLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxuICB9XFxuXFxuICAqIHtcXG4gICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZCwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgfVxcbiAgLyogIE1BSU4gQ09OVEVOVCAqL1xcblxcbiAgYm9keSB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgICBmb250LWZhbWlseTogcXVpY2tzYW5kLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvam9zaC1rYWhlbi1LTDlJYW5IelNFNC11bnNwbGFzaC5qcGcpOyAqL1xcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgfVxcblxcbiAgI21haW4tY29udGVudCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICB3aWR0aDogOTB2dztcXG4gICAgICBoZWlnaHQ6IDg1dmg7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMC41ZnIgMC43ZnI7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2pvc2gta2FoZW4tS0w5SWFuSHpTRTQtdW5zcGxhc2guanBnKTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcXG4gICAgICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDEwcHggcmdiYSgyNDUsIDIyMiwgMTc5LCAwLjU3NSk7XFxuICB9XFxuXFxuICAjbWFpbi1jb250ZW50ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG5cXG4vKiBTRUFSQ0hCQVIgKi9cXG5cXG4uc2VhcmNoYm94LWRpdiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluLWNvbnRlbnQgPiBkaXYuc2VhcmNoYm94LWRpdiA+IGZvcm0gPiBpbnB1dFt0eXBlPXN1Ym1pdF06bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBDVVJSRU5UIENPTkRJVElPTlMgKi9cXG5cXG4gIC5jdXJyZW50LWNvbmRpdGlvbnMtZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDksIDksIDAuMjY3KTtcXG4gICAgd2lkdGg6IDE3JTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAtNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hlYXQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAuY3VycmVudC1jb25kaXRpb25zLWRpdiA+IHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIH0gXFxuXFxuICAuY3VycmVudC1jb25kaXRpb25zLWRpdiA+IHNwYW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcblxcbiAgLyogV0VFS0xZIEZPUkVDQVNUICovXFxuXFxuICAud2Vla2x5LWZvcmVjYXN0LWRpdiB7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICB9XFxuXFxuICAud2Vla2x5LWZvcmVjYXN0LWRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpOyAqL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoZWF0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDEwcHg7XFxuICAgIG1pbi13aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLndlZWtseS1mb3JlY2FzdC1kaXYgPiBkaXYgPiBzcGFuOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ0ZlZWxzIGxpa2U6ICcgXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZldGNoV2VhdGhlckNvbmRpdGlvbnMgfSBmcm9tICcuL2FzeW5jLWZldGNoLXdlYXRoZXItZGF0YSc7XG5pbXBvcnQgeyBmZXRjaExvY2F0aW9uIH0gZnJvbSAnLi9hc3luYy1mZXRjaC1sb2NhdGlvbic7XG5pbXBvcnQgeyB0aW1lQW5kRGF0ZSB9IGZyb20gJy4vYXN5bmMtZmV0Y2gtdGltZS1kYXRlJztcblxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkV2VhdGhlclByb3BlcnRpZXNGYWN0b3J5RnVuY3Rpb24gPVxuICBhc3luYyBmdW5jdGlvbiByZXF1aXJlZFdlYXRoZXJQcm9wZXJ0aWVzRmFjdG9yeUZ1bmN0aW9uKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2VhdGhlck9iamVjdCA9IGF3YWl0IGZldGNoV2VhdGhlckNvbmRpdGlvbnMoY2l0eSk7XG4gICAgICBjb25zdCBsb2NhdGlvbk9iamVjdCA9IGF3YWl0IGZldGNoTG9jYXRpb24oY2l0eSk7XG4gICAgICBjb25zdCB0aW1lQW5kRGF0ZU9iamVjdCA9IGF3YWl0IHRpbWVBbmREYXRlKGNpdHkpO1xuXG4gICAgICBjb25zdCBzZXZlbkRheUZvcmVjYXN0ID0gd2VhdGhlck9iamVjdC5kYWlseTtcbiAgICAgIGNvbnN0IGN1cnJlbnRGb3JlY2FzdCA9IHdlYXRoZXJPYmplY3QuY3VycmVudDtcbiAgICAgIGNvbnN0IG5hbWVPZkNpdHkgPSBsb2NhdGlvbk9iamVjdC5uYW1lO1xuICAgICAgY29uc3QgbmFtZU9mU3RhdGUgPSBsb2NhdGlvbk9iamVjdC5zdGF0ZTtcbiAgICAgIGNvbnN0IG5hbWVPZkNvdW50cnkgPSBsb2NhdGlvbk9iamVjdC5jb3VudHJ5O1xuICAgICAgY29uc3QgdGltZUFuZERhdGVPZkNvdW50cnkgPSB0aW1lQW5kRGF0ZU9iamVjdDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2V2ZW5EYXlGb3JlY2FzdCxcbiAgICAgICAgY3VycmVudEZvcmVjYXN0LFxuICAgICAgICBuYW1lT2ZDaXR5LFxuICAgICAgICBuYW1lT2ZTdGF0ZSxcbiAgICAgICAgbmFtZU9mQ291bnRyeSxcbiAgICAgICAgdGltZUFuZERhdGVPZkNvdW50cnksXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ2VycicpO1xuICAgIH1cbiAgfTtcbiIsImV4cG9ydCBjb25zdCBmZXRjaExvY2F0aW9uID0gYXN5bmMgZnVuY3Rpb24gZmV0Y2hMb2NhdGlvbihjaXR5KSB7XG4gIHRyeSB7XG4gICAgLy8gRmV0Y2ggdGhlIEdlb2NvZGUgZm9yIHRoZSBjaXR5IEkgbmVlZC4gQSBuZWNlc3Nhcnkgc3RlcCB0byBjb252ZXJ0IGEgY2l0eSdzIGxvY2F0aW9uIHRvIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUgb2Ygc2FpZCBsb2NhdGlvbi5cblxuICAgIGNvbnN0IHJlc3BvbnNlR2VvY29kaW5nQVBJID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9JmxpbWl0PTEmYXBwaWQ9ZDBmYjk4ODYyN2MwZDIwMTI1M2NmNzNiYzU3ZTBjZWZgLFxuICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICk7XG4gICAgY29uc3QgZGF0YUdlb2NvZGluZ0FQSSA9IGF3YWl0IHJlc3BvbnNlR2VvY29kaW5nQVBJLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhR2VvY29kaW5nQVBJKTtcbiAgICByZXR1cm4gZGF0YUdlb2NvZGluZ0FQSVswXTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBmZXRjaFdlYXRoZXJDb25kaXRpb25zIH0gZnJvbSAnLi9hc3luYy1mZXRjaC13ZWF0aGVyLWRhdGEnO1xuZXhwb3J0IGNvbnN0IHRpbWVBbmREYXRlID0gYXN5bmMgZnVuY3Rpb24gdGltZUFuZERhdGUobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyT2ZDaXR5ID0gYXdhaXQgZmV0Y2hXZWF0aGVyQ29uZGl0aW9ucyhsb2NhdGlvbik7XG5cbiAgICBjb25zdCByZXNwb25zZVRpbWVBbmREYXRlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgXG4gICAgICBodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3d3dy50aW1lYXBpLmlvL2FwaS9UaW1lL2N1cnJlbnQvem9uZT90aW1lWm9uZT0ke3dlYXRoZXJPZkNpdHkudGltZXpvbmV9XG5gLFxuICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICk7XG5cbiAgICBjb25zdCBkYXRhVGltZUFuZERhdGUgPSBhd2FpdCByZXNwb25zZVRpbWVBbmREYXRlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhVGltZUFuZERhdGU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBmZXRjaExvY2F0aW9uIH0gZnJvbSAnLi9hc3luYy1mZXRjaC1sb2NhdGlvbic7XG5leHBvcnQgY29uc3QgZmV0Y2hXZWF0aGVyQ29uZGl0aW9ucyA9IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckNvbmRpdGlvbnMoXG4gIGNpdHlcbikge1xuICB0cnkge1xuICAgIC8vIFVzZSByZXR1cm5lZCBvYmplY3Qgb2YgZmV0Y2hMb2NhdGlvbihjaXR5KSB0byBzZXR1cCB0aGUgcmVzcG9uc2VXZWF0aGVyQVBJIGZldGNoIGJlY2F1c2UgbG9uIGFuZCBsYXQgYXJlIG5lZWRlZCBwYXJhbWV0ZXJzLlxuICAgIGNvbnN0IGRhdGFPZkdlb2NvZGluZ0FQSSA9IGF3YWl0IGZldGNoTG9jYXRpb24oY2l0eSk7XG5cbiAgICBjb25zdCBsb25naXR1ZGVPZkNpdHkgPSBkYXRhT2ZHZW9jb2RpbmdBUEkubG9uO1xuICAgIGNvbnN0IGxhdGl0dWRlT2ZDaXR5ID0gZGF0YU9mR2VvY29kaW5nQVBJLmxhdDtcbiAgICBjb25zdCBuYW1lT2ZDaXR5ID0gZGF0YU9mR2VvY29kaW5nQVBJLm5hbWU7XG4gICAgY29uc3Qgc3RhdGVPZkNpdHkgPSBkYXRhT2ZHZW9jb2RpbmdBUEkuc3RhdGU7XG5cbiAgICAvLyBQT1RFTlRJQUwgUFJPTUlTRSBWRVJTSU9OOlxuICAgIC8vZDBmYjk4ODYyN2MwZDIwMTI1M2NmNzNiYzU3ZTBjZWZcbiAgICAvLyAgIGZldGNoKFxuICAgIC8vICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0aXR1ZGVPZkNpdHl9Jmxvbj0ke2xvbmdpdHVkZU9mQ2l0eX0mZXhjbHVkZT17cGFydH0mYXBwaWQ9ZDBmYjk4ODYyN2MwZDIwMTI1M2NmNzNiYzU3ZTBjZWZgLFxuICAgIC8vICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgLy8gICApO1xuICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAvLyAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgLy8gICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2VXZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0aXR1ZGVPZkNpdHl9Jmxvbj0ke2xvbmdpdHVkZU9mQ2l0eX0mZXhjbHVkZT17cGFydH0mdW5pdHM9bWV0cmljJmFwcGlkPWQwZmI5ODg2MjdjMGQyMDEyNTNjZjczYmM1N2UwY2VmYCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICApO1xuICAgIGNvbnN0IGRhdGFXZWF0aGVyQVBJID0gYXdhaXQgcmVzcG9uc2VXZWF0aGVyQVBJLmpzb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhV2VhdGhlckFQSSk7XG4gICAgY29uc29sZS5sb2coZGF0YVdlYXRoZXJBUEkpO1xuICAgIHJldHVybiBkYXRhV2VhdGhlckFQSTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVDdXJyZW50Q29uZGl0aW9ucyA9IGZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRDb25kaXRpb25zKFxuICBjdXJyZW50Q29uZGl0aW9uLFxuICBjaXR5LFxuICBjdXJyZW50RGF0ZSxcbiAgY3VycmVudFRpbWUsXG4gIGN1cnJlbnRUZW1wLFxuICBmZWVsc0xpa2UsXG4gIGh1bWlkaXR5LFxuICB3aW5kU3BlZWRcbikge1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5jdXJyZW50LWNvbmRpdGlvbnMtZGl2J1xuICApO1xuICBjb25zdCBlbGVtZW50QXJyYXkgPSBbXTtcblxuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBtb250aHMgPSBbXG4gICAgJ0phbnVhcnknLFxuICAgICdGZWJydWFyeScsXG4gICAgJ01hcmNoJyxcbiAgICAnQXByaWwnLFxuICAgICdNYXknLFxuICAgICdKdW5lJyxcbiAgICAnSnVseScsXG4gICAgJ0F1Z3VzdCcsXG4gICAgJ1NlcHRlbWJlcicsXG4gICAgJ09jdG9iZXInLFxuICAgICdOb3ZlbWJlcicsXG4gICAgJ0RlY2VtYmVyJyxcbiAgXTtcbiAgY29uc3QgZGF5cyA9IFtcbiAgICAnU3VuZGF5JyxcbiAgICAnTW9uZGF5JyxcbiAgICAnVHVlc2RheScsXG4gICAgJ1dlZG5lc2RheScsXG4gICAgJ1RodXJzZGF5JyxcbiAgICAnRnJpZGF5JyxcbiAgICAnU2F0dXJkYXknLFxuICBdO1xuXG4gIGNvbnN0IGdldERhdGUgPSBmdW5jdGlvbiBnZXREYXRlKCkge1xuICAgIGxldCBkYXRlO1xuICAgIGxldCBtb250aCA9IG1vbnRoc1t0b2RheS5nZXRNb250aCgpXTtcbiAgICBsZXQgZGF5ID0gZGF5c1t0b2RheS5nZXREYXRlKCldO1xuICAgIGNvbnNvbGUubG9nKG1vbnRoKTtcbiAgICByZXR1cm4gKGRhdGUgPVxuICAgICAgZGF5ICtcbiAgICAgICcsJyArXG4gICAgICAnICcgK1xuICAgICAgbW9udGggK1xuICAgICAgJyAnICtcbiAgICAgIHRvZGF5LmdldERhdGUoKSArXG4gICAgICAnLCcgK1xuICAgICAgJyAnICtcbiAgICAgIHRvZGF5LmdldEZ1bGxZZWFyKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRpbWUgPSBmdW5jdGlvbiBnZXRUaW1lKCkge1xuICAgIGxldCBob3VyID0gdG9kYXkuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWludXRlcyA9IHRvZGF5LmdldE1pbnV0ZXMoKTtcbiAgICByZXR1cm4gaG91ciArICc6JyArIG1pbnV0ZXM7XG4gIH07XG5cbiAgY29uc3QgZWxlbWVudFRleHRDb250ZW50ID0gW1xuICAgIGN1cnJlbnRDb25kaXRpb24sXG4gICAgY2l0eSxcbiAgICBjdXJyZW50RGF0ZSxcbiAgICBjdXJyZW50VGltZSxcbiAgICBjdXJyZW50VGVtcCxcbiAgICBmZWVsc0xpa2UsXG4gICAgaHVtaWRpdHksXG4gICAgd2luZFNwZWVkLFxuICBdO1xuXG4gIGNvbnN0IGVsZW1lbnRBcnJheUZ1bmN0aW9uID0gZnVuY3Rpb24gZWxlbWVudEFycmF5RnVuY3Rpb24oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIGVsZW1lbnRBcnJheVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGN1cnJlbnRDb25kaXRpb25zRGl2LmFwcGVuZChlbGVtZW50QXJyYXlbaV0pO1xuICAgICAgZWxlbWVudEFycmF5W2ldLnRleHRDb250ZW50ID0gZWxlbWVudFRleHRDb250ZW50W2ldO1xuICAgIH1cbiAgfTtcbiAgZWxlbWVudEFycmF5RnVuY3Rpb24oKTtcblxuICBjb25zdCBbXG4gICAgY3VycmVudENvbmRpdGlvbnNTcGFuLFxuICAgIGNpdHlTcGFuLFxuICAgIGRhdGVTcGFuLFxuICAgIGN1cnJlbnRUaW1lU3BhbixcbiAgICBjdXJyZW50VGVtcFNwYW4sXG4gICAgZmVlbHNMaWtlU3BhbixcbiAgICBodW1pZGl0eVNwYW4sXG4gICAgd2luZFNwZWVkU3BhbixcbiAgXSA9IGVsZW1lbnRBcnJheTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gdGhhdCBJIHBhc3Mgb250byBzZWFyY2hib3gtdG8td2VhdGhlci5qcyB0byBkaXNwbGF5IHRoZSBjdXJyZW50IGNvbmRpdGlvbnMuXG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5Q3VycmVudENvbmRpdGlvbnMgPSBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudENvbmRpdGlvbnMoXG4gIG15V2VhdGhlck9iamVjdFxuKSB7XG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPVxuICAgIG15V2VhdGhlck9iamVjdC5jdXJyZW50Rm9yZWNhc3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgY2l0eSA9IG15V2VhdGhlck9iamVjdC5uYW1lT2ZDaXR5O1xuICBjb25zdCBjdXJyZW50RGF0ZSA9XG4gICAgbXlXZWF0aGVyT2JqZWN0LnRpbWVBbmREYXRlT2ZDb3VudHJ5LmRheU9mV2VlayArXG4gICAgJywgJyArXG4gICAgbXlXZWF0aGVyT2JqZWN0LnRpbWVBbmREYXRlT2ZDb3VudHJ5LmRhdGU7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbXlXZWF0aGVyT2JqZWN0LnRpbWVBbmREYXRlT2ZDb3VudHJ5LnRpbWU7XG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gTWF0aC5yb3VuZChteVdlYXRoZXJPYmplY3QuY3VycmVudEZvcmVjYXN0LnRlbXApICsgJ8KwQyc7XG4gIGNvbnN0IGZlZWxzTGlrZSA9XG4gICAgJ0ZlZWxzIExpa2U6ICcgK1xuICAgIE1hdGgucm91bmQobXlXZWF0aGVyT2JqZWN0LmN1cnJlbnRGb3JlY2FzdC5mZWVsc19saWtlKSArXG4gICAgJ8KwQyc7XG5cbiAgY29uc3QgaHVtaWRpdHkgPVxuICAgICdIdW1pZGl0eTogJyArIE1hdGguZmxvb3IobXlXZWF0aGVyT2JqZWN0LmN1cnJlbnRGb3JlY2FzdC5odW1pZGl0eSkgKyAnJSc7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGBXaW5kIFNwZWVkOiAke215V2VhdGhlck9iamVjdC5jdXJyZW50Rm9yZWNhc3Qud2luZF9zcGVlZH0ga20vaGA7XG5cbiAgLy8gbWlnaHQgbWFrZSBjdXJyZW50IGNvbmRpdGlvbiBhbmQgc2V2ZW4gZGF5IGZvcmVjYXN0IHR3byBkaWZmZXJlbnQgb2JqZWN0cyBzbyBJIGNhbiByZXVzZSB0aGVzZSBuYW1lcy5cbiAgY3JlYXRlQ3VycmVudENvbmRpdGlvbnMoXG4gICAgY3VycmVudENvbmRpdGlvbixcbiAgICBjaXR5LFxuICAgIGN1cnJlbnREYXRlLFxuICAgIGN1cnJlbnRUaW1lLFxuICAgIGN1cnJlbnRUZW1wLFxuICAgIGZlZWxzTGlrZSxcbiAgICBodW1pZGl0eSxcbiAgICB3aW5kU3BlZWRcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyB3ZWVrbHlGb3JlY2FzdEZhY3RvcnlGdW5jdGlvbiB9IGZyb20gJy4vZmFjdG9yeS1mdW5jdGlvbi13ZWVrbHktZm9yZWNhc3QnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlV2Vla2x5Rm9yZWNhc3QgPSBmdW5jdGlvbiBjcmVhdGVXZWVrbHlGb3JlY2FzdChcbiAgbmFtZU9mRGF5LFxuICB0ZW1wT2ZEYXksXG4gIGZlZWxzTGlrZU9mRGF5LFxuICBjb25kaXRpb25PZkRheVxuKSB7XG4gIGNvbnN0IHdlZWtseUZvcmVjYXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWtseS1mb3JlY2FzdC1kaXYnKTtcbiAgY29uc3QgZGFpbHlTdGF0c0FycmF5ID0gW107XG4gIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB3ZWF0aGVyRGF5U3RhdHMgPSBbXG4gICAgbmFtZU9mRGF5LFxuICAgIHRlbXBPZkRheSxcbiAgICBmZWVsc0xpa2VPZkRheSxcbiAgICBjb25kaXRpb25PZkRheSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgIGRhaWx5U3RhdHNBcnJheVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkYWlseVN0YXRzQXJyYXlbaV0udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF5U3RhdHNbaV07XG4gICAgZGF5LmFwcGVuZChkYWlseVN0YXRzQXJyYXlbaV0pO1xuICB9XG5cbiAgZGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgZGF5LWRpdiAke25hbWVPZkRheX1gKTtcbiAgd2Vla2x5Rm9yZWNhc3REaXYuYXBwZW5kKGRheSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVdlZWtseUZvcmVjYXN0ID0gZnVuY3Rpb24gZGlzcGxheVdlZWtseUZvcmVjYXN0KFxuICBteVdlYXRoZXJPYmplY3Rcbikge1xuICBjb25zdCBuYW1lT2ZEYXlzID0gW1xuICAgICdNb25kYXknLFxuICAgICdUdWVzZGF5JyxcbiAgICAnV2VkbmVzZGF5JyxcbiAgICAnVGh1cnNkYXknLFxuICAgICdGcmlkYXknLFxuICAgICdTYXR1cmRheScsXG4gICAgJ1N1bmRheScsXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgICBjcmVhdGVXZWVrbHlGb3JlY2FzdChcbiAgICAgIG5hbWVPZkRheXNbaV0sXG4gICAgICBNYXRoLnJvdW5kKG15V2VhdGhlck9iamVjdC5zZXZlbkRheUZvcmVjYXN0W2ldLnRlbXAuZGF5KSArICfCsEMnLFxuICAgICAgTWF0aC5yb3VuZChteVdlYXRoZXJPYmplY3Quc2V2ZW5EYXlGb3JlY2FzdFtpXS5mZWVsc19saWtlLmRheSkgKyAnwrBDJyxcbiAgICAgIG15V2VhdGhlck9iamVjdC5zZXZlbkRheUZvcmVjYXN0W2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICApO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IHdlZWtseUZvcmVjYXN0RmFjdG9yeUZ1bmN0aW9uID1cbiAgZnVuY3Rpb24gd2Vla2x5Rm9yZWNhc3RGYWN0b3J5RnVuY3Rpb24oXG4gICAgbmFtZU9mRGF5LFxuICAgIHRlbXBPZkRheSxcbiAgICBmZWVsc0xpa2VPZkRheSxcbiAgICBjb25kaXRpb25PZkRheVxuICApIHtcbiAgICBjb25zdCBbZGF5LCB0ZW1wLCBmZWVsc0xpa2UsIGNvbmRpdGlvbl0gPSBbXG4gICAgICBuYW1lT2ZEYXksXG4gICAgICB0ZW1wT2ZEYXksXG4gICAgICBmZWVsc0xpa2VPZkRheSxcbiAgICAgIGNvbmRpdGlvbk9mRGF5LFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF5LFxuICAgICAgdGVtcCxcbiAgICAgIGZlZWxzTGlrZSxcbiAgICAgIGNvbmRpdGlvbixcbiAgICB9O1xuICB9O1xuIiwiaW1wb3J0IHsgZGlzcGxheUN1cnJlbnRDb25kaXRpb25zIH0gZnJvbSAnLi9keW5hbWljLXVpLWN1cnJlbnQtY29uZGl0aW9ucyc7XG5pbXBvcnQgeyBkaXNwbGF5V2Vla2x5Rm9yZWNhc3QgfSBmcm9tICcuL2R5bmFtaWMtdWktd2Vla2x5LWZvcmVjYXN0JztcblxuZXhwb3J0IGNvbnN0IG9uTG9hZERpc3BsYXkgPSBmdW5jdGlvbiBvbkxvYWREaXNwbGF5KCkge1xuICBjb25zdCBjdXJyZW50Q2l0eSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdHknKSk7XG5cbiAgZGlzcGxheUN1cnJlbnRDb25kaXRpb25zKGN1cnJlbnRDaXR5KTtcbiAgZGlzcGxheVdlZWtseUZvcmVjYXN0KGN1cnJlbnRDaXR5KTtcbn07XG4iLCJpbXBvcnQgeyByZXF1aXJlZFdlYXRoZXJQcm9wZXJ0aWVzRmFjdG9yeUZ1bmN0aW9uIH0gZnJvbSAnLi9hc3luYy1mYWN0b3J5LWZ1bmN0aW9uLXJlcXVpcmVkLXByb3BlcnRpZXMnO1xuaW1wb3J0IHsgZGlzcGxheUN1cnJlbnRDb25kaXRpb25zIH0gZnJvbSAnLi9keW5hbWljLXVpLWN1cnJlbnQtY29uZGl0aW9ucyc7XG5pbXBvcnQgeyBkaXNwbGF5V2Vla2x5Rm9yZWNhc3QgfSBmcm9tICcuL2R5bmFtaWMtdWktd2Vla2x5LWZvcmVjYXN0JztcblxuZXhwb3J0IGNvbnN0IHNlYXJjaGJveFRvV2VhdGhlciA9IGZ1bmN0aW9uIHNlYXJjaGJveFRvV2VhdGhlcihcbiAgY3VycmVudENvbmRpdGlvbnNEaXYsXG4gIHdlZWtseUZvcmVjYXN0RGl2XG4pIHtcbiAgLy8gY3JlYXRlIGFwcHJvcHJpYXRlIGRpdnNcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250ZW50Jyk7XG4gIGNvbnN0IHNlYXJjaGJveERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hib3gtZGl2Jyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IHNlYXJjaGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgc2VhcmNoYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdzZWFyY2gnKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblxuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnc3VibWl0JztcbiAgc2VhcmNoYm94LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoIGEgY2l0eS4uJyk7XG4gIHNlYXJjaGJveC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG4gIHNlYXJjaGJveC5zZXRBdHRyaWJ1dGUoXG4gICAgJ29uaW52YWxpZCcsXG4gICAgXCJ0aGlzLnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBjaXR5JylcIlxuICApO1xuICBzZWFyY2hib3guc2V0QXR0cmlidXRlKCdvbmlucHV0JywgXCJ0aGlzLnNldEN1c3RvbVZhbGlkaXR5KCcnKVwiKTtcbiAgc2VhcmNoYm94LnNldEF0dHJpYnV0ZSgncGF0dGVybicsICdeW0EtWmEteiBdKyQnKTtcblxuICBzZWFyY2hib3hEaXYuYXBwZW5kKGZvcm0pO1xuICBmb3JtLmFwcGVuZChzZWFyY2hib3gpO1xuICBmb3JtLmFwcGVuZChzdWJtaXRCdXR0b24pO1xuXG4gIC8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciBvbnRvIHRoZSBmb3JtLCB0aGUgZnVuY3Rpb24gcGFzc2VkIG5lZWRzIHRvIGJlIGFzeW5jaHJvbm91cyB0byBnZXQgdGhlIGNvcnJlY3QgdmFsdWUuXG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZWFyY2hib3hWYWx1ZSA9IHNlYXJjaGJveC52YWx1ZTtcbiAgICBjb25zdCBteVdlYXRoZXJPYmplY3QgPSBhd2FpdCByZXF1aXJlZFdlYXRoZXJQcm9wZXJ0aWVzRmFjdG9yeUZ1bmN0aW9uKFxuICAgICAgc2VhcmNoYm94VmFsdWVcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKG15V2VhdGhlck9iamVjdCk7XG5cbiAgICBjdXJyZW50Q29uZGl0aW9uc0Rpdi50ZXh0Q29udGVudCA9ICcnO1xuICAgIHdlZWtseUZvcmVjYXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBkaXNwbGF5Q3VycmVudENvbmRpdGlvbnMobXlXZWF0aGVyT2JqZWN0KTtcbiAgICBkaXNwbGF5V2Vla2x5Rm9yZWNhc3QobXlXZWF0aGVyT2JqZWN0KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXR5JywgSlNPTi5zdHJpbmdpZnkobXlXZWF0aGVyT2JqZWN0KSk7XG4gIH0pO1xuXG4gIC8vIHRvIGhhdmUgbXlXZWF0aGVyT2JqZWN0IHByb3BlcnRpZXMgcHJvcGVybHkgZGlzcGxheSBvbnRvIHRoZSBwYWdlIFVJLCB3aHkgZG9uJ3QgSSBqdXN0IHBhc3MgZG93biBlYWNoIG9mIHRob3NlIHByb3BlcnRpZXMgdGhyb3VnaFxuICAvLyBhIGZ1bmN0aW9uJ3MgcGFyYW1ldGVycz8gaS5lLiBteVdlYXRoZXJVSShteVdlYXRoZXJPYmplY3QubmFtZSwgbXlXZWF0aGVyT2JqZWN0LmNvdW50cnksIGV0Yy4pXG4gIC8vIG15V2VhdGhlclVJIGhhcyBhIGJ1bmNoIG9mIGNvZGUgaW5zaWRlLCBvbiB0aGUgcmlnaHQgaGFuZCBzaWRlIG9mIGFzc2lnbm1lbnQgd2Ugd2lsbCB1c2UgdGhlc2UgYXJndW1lbnRzLiBXZSBjYW4gaW1wb3J0IG15V2VhdGhlclVJIGZyb20gYW5vdGhlciBtb2R1bGUgb250byBoZXJlLlxuICAvLyBvbiB0aGUgcHJlc3Mgb2YgXCJTdWJtaXRcIiBidXR0b24sIHRoYXQncyB3aGVuIGl0IHdpbGwgY3JlYXRlIHRoZSBVSSwgYnkgaW52b2tpbmcgdGhlIG15V2VhdGhlclVJKCkgZnVuY3Rpb24sIHdoaWNoIGNvbnRhaW5zIGEgYnVuY2ggb2YgLmNyZWF0ZUVsZW1lbnQoKVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2VhcmNoYm94VG9XZWF0aGVyIH0gZnJvbSAnLi9tb2R1bGVzL3NlYXJjaGJveC10by13ZWF0aGVyJztcbmltcG9ydCB7IG9uTG9hZERpc3BsYXkgfSBmcm9tICcuL21vZHVsZXMvbG9jYWwtc3RvcmFnZSc7XG5cbmNvbnN0IGN1cnJlbnRDb25kaXRpb25zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY29uZGl0aW9ucy1kaXYnKTtcbmNvbnN0IHdlZWtseUZvcmVjYXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWtseS1mb3JlY2FzdC1kaXYnKTtcblxuc2VhcmNoYm94VG9XZWF0aGVyKGN1cnJlbnRDb25kaXRpb25zRGl2LCB3ZWVrbHlGb3JlY2FzdERpdik7XG53aW5kb3cub25sb2FkID0gb25Mb2FkRGlzcGxheSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9