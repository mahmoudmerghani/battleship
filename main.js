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
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --cell-size: 35px;
    --primary-color: #1a3c5e;
    --secondary-color: #2d5f8a;
    --accent-color: #4a90e2;
    --hit-color: #ff4444;
    --miss-color: #7a8b99;
    --ship-color: #23313e;
}

body {
    background: linear-gradient(135deg, #1c2833, #2c3e50);
    color: white;
    font-family: 'Segoe UI', Arial, sans-serif;
    min-height: 100vh;
    user-select: none;
}

.game {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

#message {
    text-align: center;
    font-size: 1.2rem;
}

.board-container {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
    padding: 2rem 0;
}

.board {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid var(--accent-color);
    border-radius: 8px;
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(10, var(--cell-size));
    grid-template-rows: repeat(10, var(--cell-size));
    box-shadow: 0 0 20px rgba(74, 144, 226, 0.2);
    transition: transform 0.3s ease;
}

.board:hover {
    transform: scale(1.02);
}

.computer-board {
    display: none;
}

.cell {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--accent-color);
    width: var(--cell-size);
    height: var(--cell-size);
    cursor: pointer;
    transition: all 0.2s ease;
}

.cell.ship {
    background-color: var(--ship-color);
    border: 1px solid var(--accent-color);
}

.cell.highlighted, .cell:hover {
    background-color: rgba(74, 144, 226, 0.5);
    transform: scale(1.1);
    z-index: 1;
}

.cell.unavailable {
    cursor: not-allowed;
}

.cell.hit {
    background-color: var(--hit-color);
    animation: hitEffect 0.5s ease;
}

.cell.miss {
    background-color: var(--miss-color);
    animation: missEffect 0.5s ease;
}

.ships-container {
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1.5rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.ships-container.vertical .ship-cells {
    flex-direction: column;
}

.ships-container .cell {
    background-color: var(--ship-color);
    border: 1px solid var(--accent-color);
    margin: 0;
    border-radius: 2px;
}

.ships-container .ship {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 2rem;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
    cursor: pointer;
    flex: 1;
}

.ships-container .ship:hover {
    background: rgba(255, 255, 255, 0.1);
}

.ships-container .ship.selected {
    background: rgba(76, 175, 80, 0.2);
    border: 2px solid #4CAF50;
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.3);
}

.ships-container .ship-cells {
    margin-block: auto;
    display: flex;
    justify-content: center;
}

.controls {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.difficulty {
    display: flex;
    align-items: center;
}

.difficulty p {
    font-size: 1.2rem;
}

.difficulty button {
    background: rgba(255, 255, 255, 0.05);

    border: 2px solid rgba(255, 255, 255, 0.6);
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.3);
}

.difficulty button.selected {
    background-color: #4CAF50;
}

button {
    background-color: var(--accent-color);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    margin: 0.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

button:hover {
    background-color: #357abd;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
} 

@keyframes hitEffect {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

@keyframes missEffect {
    0% { opacity: 0; }
    100% { opacity: 1; }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;IACxB,0BAA0B;IAC1B,uBAAuB;IACvB,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,qDAAqD;IACrD,YAAY;IACZ,0CAA0C;IAC1C,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,qCAAqC;IACrC,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,mDAAmD;IACnD,gDAAgD;IAChD,4CAA4C;IAC5C,+BAA+B;AACnC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,2CAA2C;IAC3C,qCAAqC;IACrC,uBAAuB;IACvB,wBAAwB;IACxB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,mCAAmC;IACnC,qCAAqC;AACzC;;AAEA;IACI,yCAAyC;IACzC,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,8BAA8B;AAClC;;AAEA;IACI,mCAAmC;IACnC,+BAA+B;AACnC;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,WAAW;AACf;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mCAAmC;IACnC,qCAAqC;IACrC,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,qCAAqC;IACrC,yBAAyB;IACzB,eAAe;IACf,OAAO;AACX;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kCAAkC;IAClC,yBAAyB;IACzB,2CAA2C;AAC/C;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;;IAErC,0CAA0C;IAC1C,qBAAqB;IACrB,2CAA2C;AAC/C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;IACrC,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,yBAAyB;IACzB,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;IACzB,2BAA2B;IAC3B,yCAAyC;AAC7C;;AAEA;IACI,wBAAwB;IACxB,wCAAwC;AAC5C;;AAEA;IACI,KAAK,mBAAmB,EAAE;IAC1B,MAAM,qBAAqB,EAAE;IAC7B,OAAO,mBAAmB,EAAE;AAChC;;AAEA;IACI,KAAK,UAAU,EAAE;IACjB,OAAO,UAAU,EAAE;AACvB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n    --cell-size: 35px;\r\n    --primary-color: #1a3c5e;\r\n    --secondary-color: #2d5f8a;\r\n    --accent-color: #4a90e2;\r\n    --hit-color: #ff4444;\r\n    --miss-color: #7a8b99;\r\n    --ship-color: #23313e;\r\n}\r\n\r\nbody {\r\n    background: linear-gradient(135deg, #1c2833, #2c3e50);\r\n    color: white;\r\n    font-family: 'Segoe UI', Arial, sans-serif;\r\n    min-height: 100vh;\r\n    user-select: none;\r\n}\r\n\r\n.game {\r\n    padding: 2rem;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\n#message {\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.board-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n    flex-wrap: wrap;\r\n    padding: 2rem 0;\r\n}\r\n\r\n.board {\r\n    background: rgba(255, 255, 255, 0.1);\r\n    border: 2px solid var(--accent-color);\r\n    border-radius: 8px;\r\n    width: fit-content;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, var(--cell-size));\r\n    grid-template-rows: repeat(10, var(--cell-size));\r\n    box-shadow: 0 0 20px rgba(74, 144, 226, 0.2);\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.board:hover {\r\n    transform: scale(1.02);\r\n}\r\n\r\n.computer-board {\r\n    display: none;\r\n}\r\n\r\n.cell {\r\n    background-color: rgba(255, 255, 255, 0.05);\r\n    border: 1px solid var(--accent-color);\r\n    width: var(--cell-size);\r\n    height: var(--cell-size);\r\n    cursor: pointer;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n.cell.ship {\r\n    background-color: var(--ship-color);\r\n    border: 1px solid var(--accent-color);\r\n}\r\n\r\n.cell.highlighted, .cell:hover {\r\n    background-color: rgba(74, 144, 226, 0.5);\r\n    transform: scale(1.1);\r\n    z-index: 1;\r\n}\r\n\r\n.cell.unavailable {\r\n    cursor: not-allowed;\r\n}\r\n\r\n.cell.hit {\r\n    background-color: var(--hit-color);\r\n    animation: hitEffect 0.5s ease;\r\n}\r\n\r\n.cell.miss {\r\n    background-color: var(--miss-color);\r\n    animation: missEffect 0.5s ease;\r\n}\r\n\r\n.ships-container {\r\n    background: rgba(255, 255, 255, 0.1);\r\n    padding: 1.5rem;\r\n    border-radius: 8px;\r\n    margin: 1.5rem 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.ships-container.vertical .ship-cells {\r\n    flex-direction: column;\r\n}\r\n\r\n.ships-container .cell {\r\n    background-color: var(--ship-color);\r\n    border: 1px solid var(--accent-color);\r\n    margin: 0;\r\n    border-radius: 2px;\r\n}\r\n\r\n.ships-container .ship {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: 0;\r\n    padding: 2rem;\r\n    border-radius: 4px;\r\n    background: rgba(255, 255, 255, 0.05);\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    flex: 1;\r\n}\r\n\r\n.ships-container .ship:hover {\r\n    background: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.ships-container .ship.selected {\r\n    background: rgba(76, 175, 80, 0.2);\r\n    border: 2px solid #4CAF50;\r\n    box-shadow: 0 0 15px rgba(76, 175, 80, 0.3);\r\n}\r\n\r\n.ships-container .ship-cells {\r\n    margin-block: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.controls {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.difficulty {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.difficulty p {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.difficulty button {\r\n    background: rgba(255, 255, 255, 0.05);\r\n\r\n    border: 2px solid rgba(255, 255, 255, 0.6);\r\n    transform: scale(1.1);\r\n    box-shadow: 0 0 15px rgba(76, 175, 80, 0.3);\r\n}\r\n\r\n.difficulty button.selected {\r\n    background-color: #4CAF50;\r\n}\r\n\r\nbutton {\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 24px;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    margin: 0.5rem;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #357abd;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\nbutton:active {\r\n    transform: translateY(0);\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n} \r\n\r\n@keyframes hitEffect {\r\n    0% { transform: scale(1); }\r\n    50% { transform: scale(1.2); }\r\n    100% { transform: scale(1); }\r\n}\r\n\r\n@keyframes missEffect {\r\n    0% { opacity: 0; }\r\n    100% { opacity: 1; }\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/BoardUI.js":
/*!************************!*\
  !*** ./src/BoardUI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoardUI)
/* harmony export */ });
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ "./src/GameBoard.js");


class BoardUI {
    constructor() {
        this.board = this.createBoard();
        this.lastHighlightedCells = [];
    }

    createBoard() {
        const board = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = i;
                cell.dataset.column = j;
                row.push(cell);
            }
            board.push(row);
        }

        return board;
    }

    markAsShip(cells) {
        for (const cell of cells) {
            const [x, y] = cell;
            this.board[x][y].classList.add("ship");
        }
    }

    unhighlightCells() {
        for (const cell of this.lastHighlightedCells) {
            cell.classList.remove("highlighted");
        }
        this.lastHighlightedCells = [];
    }


    highlightCells(cells) {
        this.unhighlightCells();
        for (const cell of cells) {
            const [x, y] = cell;
            this.lastHighlightedCells.push(this.board[x][y]);
            this.board[x][y].classList.add("highlighted");
        }
    }

    resetUnavailableCell(x, y) {
        this.board[x][y].classList.remove("unavailable")
    }

    markAsUnavailable(x, y) {
        this.board[x][y].classList.add("unavailable")
        this.lastUnavailableCell = this.board[x][y];
    }

    updateCell(x, y, action) {
        const cell = this.board[x][y];
        switch (action) {
            case _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"].attackResult.HIT:
                cell.classList.add("hit");
                break;
            case _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"].attackResult.MISS:
                cell.classList.add("miss");
                break;
        }
    }
}


/***/ }),

/***/ "./src/Cell.js":
/*!*********************!*\
  !*** ./src/Cell.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cell)
/* harmony export */ });
class Cell {
    constructor(ship, hit) {
        this.ship = ship;
        this.hit = hit;
    }
}

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ "./src/GameBoard.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _BoardUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardUI */ "./src/BoardUI.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ "./src/ui.js");





const phases = {
    PLACING_SHIPS: "placing ships",
    PLAYER_TURN: "player turn",
    COMPUTER_TURN: "computer turn",
    GAME_OVER: "game over",
};

const difficulties = {
    RANDOM: "random",
    EASY: "easy",
};

class Game {
    static createShips() {
        return [
            new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"]("Destroyer", 2),
            new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"]("Submarine", 3),
            new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"]("Cruiser", 3),
            new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"]("Battleship", 4),
            new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"]("Carrier", 5),
        ];
    }

    constructor() {
        this.initializeGameState();
        this.initializeUI();
        this.addEventListeners();
    }

    initializeGameState() {
        this.playerBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.computerBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.playerBoardUI = new _BoardUI__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.computerBoardUI = new _BoardUI__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.phase = phases.PLACING_SHIPS;
        this.ships = Game.createShips();
        this.selectedShip = null;
        this.selectedShipEl = null;
        this.shipX = 0;
        this.shipY = 0;
        this.orientation = _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"].HORIZONTAL_ORIENTATION;
        this.difficulty = difficulties.EASY;
        this.isShipHeld = false;
    }

    initializeUI() {
        const playerBoardEl = document.querySelector(".player-board");
        const shipsContainer = document.querySelector(".ships-container");
        const shipsElements = _ui__WEBPACK_IMPORTED_MODULE_3__["default"].createShips(this.ships);

        this.playerBoardUI.board.forEach((row) => {
            row.forEach((cell) => {
                playerBoardEl.appendChild(cell);
            });
        });

        shipsElements.forEach((el) => shipsContainer.appendChild(el));

        _ui__WEBPACK_IMPORTED_MODULE_3__["default"].setMessage("Place your ships");
    }

    setUpComputerBoard() {
        const computerBoardEl = document.querySelector(".computer-board");
        computerBoardEl.style.display = "grid";

        this.computerBoardUI.board.forEach((row) => {
            row.forEach((cell) => {
                computerBoardEl.appendChild(cell);
            });
        });

        this.computerBoard.placeShipsRandomly(Game.createShips());
    }

    addEventListeners() {
        const playerBoard = document.querySelector(".player-board");
        const computerBoard = document.querySelector(".computer-board");
        const shipsContainer = document.querySelector(".ships-container");
        const rotateBtn = document.getElementById("rotate");
        const placeShipsRandomlyBtn = document.getElementById("random");
        const resetBtn = document.getElementById("reset");
        const difficulty = document.querySelector(".difficulty");

        playerBoard.addEventListener("click", this.handlePlaceShip);
        shipsContainer.addEventListener("mousedown", this.handleSelectShip);
        rotateBtn.addEventListener("click", this.handleRotate);
        playerBoard.addEventListener("mouseover", this.handleHover);
        playerBoard.addEventListener("mouseleave", () => {
            this.playerBoardUI.unhighlightCells();
        });
        playerBoard.addEventListener("mouseout", (e) => {
            if (
                !e.target.classList.contains("cell") ||
                !this.selectedShip ||
                this.phase !== phases.PLACING_SHIPS
            )
                return;

            const xCoord = parseInt(e.target.dataset.row, 10);
            const yCoord = parseInt(e.target.dataset.column, 10);

            this.playerBoardUI.resetUnavailableCell(xCoord, yCoord);
        });
        placeShipsRandomlyBtn.addEventListener(
            "click",
            this.handlePlaceShipsRandomly,
        );
        computerBoard.addEventListener("click", this.handlePlayerAttack);
        resetBtn.addEventListener("click", this.handleReset);

        difficulty.addEventListener("click", this.handleChangeDifficulty);

        document.addEventListener("mousemove", (e) => {
            if (!this.isShipHeld) return;

            const x = e.clientX - this.shipX - 15;
            const y = e.clientY - this.shipY - 15;
            this.selectedShipEl.style.transform = `translate(${x}px, ${y}px)`;
        });

        document.addEventListener("mouseup", (e) => {
            if (!this.isShipHeld) return;
            this.isShipHeld = false;
            this.selectedShipEl.style.transform = "";
            this.selectedShipEl.style.pointerEvents = "";
            this.handlePlaceShip(e);
            document.body.style.cursor = "default";
        });

        document.addEventListener("dragstart", (event) => {
            event.preventDefault();
        });
        document.addEventListener("dragend", (event) => {
            event.preventDefault();
        });
    }

    handlePlaceShip = (e) => {
        if (
            !e.target.closest(".player-board") ||
            !e.target.classList.contains("cell") ||
            !this.selectedShip ||
            this.phase !== phases.PLACING_SHIPS
        )
            return;

        const xCoord = parseInt(e.target.dataset.row, 10);
        const yCoord = parseInt(e.target.dataset.column, 10);

        if (
            this.playerBoard.placeShip(
                xCoord,
                yCoord,
                this.selectedShip,
                this.orientation,
            )
        ) {
            this.ships = this.ships.filter(
                (ship) => ship !== this.selectedShip,
            );

            this.playerBoardUI.markAsShip(
                _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"].getShipIndices(
                    xCoord,
                    yCoord,
                    this.selectedShip,
                    this.orientation,
                ),
            );
            this.playerBoardUI.unhighlightCells();
            _ui__WEBPACK_IMPORTED_MODULE_3__["default"].removeShip(this.selectedShip.name);
            this.selectedShip = null;

            if (this.ships.length === 0) {
                this.phase = phases.PLAYER_TURN;
                this.setUpComputerBoard();
                _ui__WEBPACK_IMPORTED_MODULE_3__["default"].setMessage("Attack the enemy board.");
            }
        }
    };

    handleSelectShip = (e) => {
        const ship = e.target.closest(".ship");
        if (!ship || this.phase !== phases.PLACING_SHIPS) return;

        const name = ship.dataset.shipId;
        this.selectedShip = this.ships.find((ship) => ship.name === name);
        this.isShipHeld = true;
        this.selectedShipEl = ship.querySelector(".ship-cells");
        this.shipX = this.selectedShipEl.getBoundingClientRect().left;
        this.shipY = this.selectedShipEl.getBoundingClientRect().top;
        this.selectedShipEl.style.pointerEvents = "none";
        document.body.style.cursor = "pointer";
        _ui__WEBPACK_IMPORTED_MODULE_3__["default"].selectShip(name);
    };

    handleRotate = (e) => {
        if (this.ships.length === 0 || this.phase !== phases.PLACING_SHIPS)
            return;

        const shipsContainer = document.querySelector(".ships-container");

        shipsContainer.classList.toggle("vertical");

        const isVertical = this.orientation === _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL_ORIENTATION;

        if (isVertical) {
            this.orientation = _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"].HORIZONTAL_ORIENTATION;
        } else {
            this.orientation = _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"].VERTICAL_ORIENTATION;
        }
    };

    handleHover = (e) => {
        if (
            !e.target.classList.contains("cell") ||
            !this.selectedShip ||
            this.phase !== phases.PLACING_SHIPS
        )
            return;

        const xCoord = parseInt(e.target.dataset.row, 10);
        const yCoord = parseInt(e.target.dataset.column, 10);

        if (
            this.playerBoard.isSpaceAvailable(
                xCoord,
                yCoord,
                this.selectedShip,
                this.orientation,
            )
        ) {
            this.playerBoardUI.highlightCells(
                _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"].getShipIndices(
                    xCoord,
                    yCoord,
                    this.selectedShip,
                    this.orientation,
                ),
            );
            this.playerBoardUI.resetUnavailableCell(xCoord, yCoord);
        } else {
            this.playerBoardUI.unhighlightCells();
            this.playerBoardUI.markAsUnavailable(xCoord, yCoord);
        }
    };

    handlePlaceShipsRandomly = (e) => {
        if (this.ships.length === 0 || this.phase !== phases.PLACING_SHIPS)
            return;

        const cells = this.playerBoard.placeShipsRandomly(this.ships);
        this.ships = [];
        _ui__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllShips();

        cells.forEach((cellArr) => this.playerBoardUI.markAsShip(cellArr));

        this.phase = phases.PLAYER_TURN;
        this.setUpComputerBoard();
        _ui__WEBPACK_IMPORTED_MODULE_3__["default"].setMessage("Attack the enemy board.");
    };

    handlePlayerAttack = (e) => {
        if (
            !e.target.classList.contains("cell") ||
            this.phase !== phases.PLAYER_TURN
        )
            return;

        const x = parseInt(e.target.dataset.row, 10);
        const y = parseInt(e.target.dataset.column, 10);

        const result = this.computerBoard.receiveAttack(x, y);

        if (
            result === _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"].attackResult.HIT ||
            result === _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"].attackResult.MISS
        ) {
            this.computerBoardUI.updateCell(x, y, result);
            this.computerBoardUI.markAsUnavailable(x, y);
            this.phase = phases.COMPUTER_TURN;

            if (result === _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"].attackResult.HIT) {
                const cell = this.computerBoard.getCell(x, y);
                if (cell.ship.isSunk()) {
                    _ui__WEBPACK_IMPORTED_MODULE_3__["default"].setMessage(
                        `Enemy's ${cell.ship.name} has been destroyed`,
                    );
                }
            }

            if (this.computerBoard.allShipsSunk()) {
                _ui__WEBPACK_IMPORTED_MODULE_3__["default"].setMessage("Game over, You won!");
                this.phase = phases.GAME_OVER;
            } else {
                this.attackPlayer();
            }
        }
    };

    attackPlayer() {
        if (this.phase !== phases.COMPUTER_TURN) return;

        let attackMethod;
        switch (this.difficulty) {
            case difficulties.EASY:
                attackMethod = this.playerBoard.receiveSmartAttack;
                break;
            case difficulties.RANDOM:
                attackMethod = this.playerBoard.receiveRandomAttack;
                break;
        }

        const { result, x, y } = attackMethod.call(this.playerBoard);

        this.playerBoardUI.updateCell(x, y, result);
        this.phase = phases.PLAYER_TURN;

        if (result === _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"].attackResult.HIT) {
            const cell = this.playerBoard.getCell(x, y);
            if (cell.ship.isSunk()) {
                _ui__WEBPACK_IMPORTED_MODULE_3__["default"].setMessage(`Your ${cell.ship.name} has been destroyed`);
            }
        }

        if (this.playerBoard.allShipsSunk()) {
            this.phase = phases.GAME_OVER;
            _ui__WEBPACK_IMPORTED_MODULE_3__["default"].setMessage("Game over, Computer won");
        }
    }

    handleReset = (e) => {
        const playerBoard = document.querySelector(".player-board");
        const computerBoard = document.querySelector(".computer-board");
        const shipsContainer = document.querySelector(".ships-container");
        const easyDifficultyBtn = document.getElementById("easy");

        playerBoard.innerHTML = "";
        computerBoard.innerHTML = "";
        shipsContainer.innerHTML = "";

        computerBoard.style.display = "none";
        shipsContainer.classList.remove("vertical");
        _ui__WEBPACK_IMPORTED_MODULE_3__["default"].selectDifficulty(easyDifficultyBtn);

        this.initializeGameState();
        this.initializeUI();
    };

    handleChangeDifficulty = (e) => {
        if (
            e.target.classList.contains("selected") ||
            this.phase !== phases.PLACING_SHIPS
        )
            return;

        const difficulty = e.target.dataset.difficulty;

        if (!difficulty) return;

        this.difficulty = difficulty;

        _ui__WEBPACK_IMPORTED_MODULE_3__["default"].selectDifficulty(e.target);
    };
}


/***/ }),

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ "./src/Cell.js");


class GameBoard {
    static SIZE = 10;
    static HORIZONTAL_ORIENTATION = "h";
    static VERTICAL_ORIENTATION = "v";
    static attackResult = {
        HIT: "hit",
        MISS: "miss",
        ALREADY_HIT: "already-hit",
        OUT_OF_BOUNDS: "out-of-bounds"
    };

    constructor() {
        this.board = this.createBoard();
        this.ships = new Set();
        this.targetCells = [];
    }

    createBoard() {
        const board = [];

        for (let i = 0; i < GameBoard.SIZE; i++) {
            const row = [];
            for (let j = 0; j < GameBoard.SIZE; j++) {
                row.push(new _Cell__WEBPACK_IMPORTED_MODULE_0__["default"](null, false));
            }
            board.push(row);
        }

        return board;
    }

    getCell(x, y) {
        return this.board[x][y];
    }

    placeShip(x, y, ship, orientation = GameBoard.HORIZONTAL_ORIENTATION) {
        if (this.isSpaceAvailable(x, y, ship, orientation)) {
            const cells = GameBoard.getShipIndices(x, y, ship, orientation);

            for (const [x, y] of cells) {
                this.getCell(x, y).ship = ship;
            }

            this.ships.add(ship);

            return true;
        }

        return false;
    }

    receiveAttack(x, y) {
        if (this.isOutOfBounds(x, y)) return GameBoard.attackResult.OUT_OF_BOUNDS;

        const cell = this.getCell(x, y);

        if (cell.hit) return GameBoard.attackResult.ALREADY_HIT;

        cell.hit = true;

        if (cell.ship !== null) {
            cell.ship.hit();
            return GameBoard.attackResult.HIT;
        }

        return GameBoard.attackResult.MISS;
    }

    isOutOfBounds(x, y) {
        return x < 0 || x >= GameBoard.SIZE || y < 0 || y >= GameBoard.SIZE;
    }

    isSpaceAvailable(
        x,
        y,
        ship,
        orientation = GameBoard.HORIZONTAL_ORIENTATION,
    ) {
        const indices = GameBoard.getShipIndices(x, y, ship, orientation);

        for (const [x, y] of indices) {
            if (this.isOutOfBounds(x, y) || this.getCell(x, y).ship !== null)
                return false;
        }

        return true;
    }

    static getShipIndices(x, y, ship, orientation = GameBoard.HORIZONTAL_ORIENTATION) {
        const indices = [];

        if (orientation === GameBoard.HORIZONTAL_ORIENTATION) {
            for (let i = 0; i < ship.length; i++) {
                indices.push([x, y + i]);
            }
        } else if (orientation === GameBoard.VERTICAL_ORIENTATION) {
            for (let i = 0; i < ship.length; i++) {
                indices.push([x + i, y]);
            }
        }

        return indices;
    }

    placeShipsRandomly(ships) {
        const cells = [];
        for (const ship of ships) {
            while (true) {
                const x = Math.floor(Math.random() * 10);
                const y = Math.floor(Math.random() * 10);
                let orientation;

                if (Math.random() > 0.5) {
                    orientation = GameBoard.HORIZONTAL_ORIENTATION;
                } else {
                    orientation = GameBoard.VERTICAL_ORIENTATION;
                }

                if (this.placeShip(x, y, ship, orientation)) {
                    cells.push(GameBoard.getShipIndices(x, y, ship, orientation));
                    break;
                }
            }
        }

        return cells;
    }

    receiveRandomAttack() {
        while (true) {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            const result = this.receiveAttack(x, y);

            if (result === GameBoard.attackResult.HIT || result === GameBoard.attackResult.MISS) {
                return { result, x, y };
            }
        }
    }

    allShipsSunk() {
        return [...this.ships].every((ship) => ship.isSunk());
    }

    getNeighbors(x, y) {
        const neighbors = [];
        const deltas = [
            [0, 1], [1, 0], [0, -1], [-1, 0] 
        ];

        for (const [dx, dy] of deltas) {
            const nx = x + dx;
            const ny = y + dy;

            if (!this.isOutOfBounds(nx, ny) && !this.getCell(nx, ny).hit) {
                neighbors.push([nx, ny]);
            }
        }

        return neighbors;
    }

    receiveSmartAttack() {
        if (this.targetCells.length === 0) {
            const { result, x, y } = this.receiveRandomAttack();

            if (result === GameBoard.attackResult.HIT) {
                this.targetCells = this.targetCells.concat(this.getNeighbors(x, y));
            }

            return { result, x, y };
        }

        const [x, y] = this.targetCells.shift();
        const result = this.receiveAttack(x, y);

        if (result === GameBoard.attackResult.HIT) {
            this.targetCells = this.targetCells.concat(this.getNeighbors(x, y));
        }

        return { result, x, y };
    }
}


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.numberOfHits = 0;
    }

    hit() {
        if (this.numberOfHits < this.length) {
            this.numberOfHits++;
        }
    }

    isSunk() {
        return this.numberOfHits >= this.length;
    }
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeShip(shipId) {
    const shipsContainer = document.querySelector(".ships-container");
    const ship = shipsContainer.querySelector(`[data-ship-id=${shipId}]`);

    ship.remove();
}

function removeAllShips() {
    const shipsContainer = document.querySelector(".ships-container");
    const ships = shipsContainer.querySelectorAll(`[data-ship-id]`);

    ships.forEach((ship) => ship.remove());
}

function selectShip(shipId) {
    const shipsContainer = document.querySelector(".ships-container");
    const ships = shipsContainer.querySelectorAll(`[data-ship-id]`);

    ships.forEach((ship) => {
        if (ship.dataset.shipId === shipId) {
            ship.classList.add("selected");
        } else {
            ship.classList.remove("selected");
        }
    });
}

function createShips(ships) {
    const shipsArray = [];

    for (const ship of ships) {
        const shipEl = document.createElement("div");
        const shipCells = document.createElement("div");
        const shipName = document.createElement("h2");

        shipEl.classList.add("ship");
        shipEl.dataset.shipId = ship.name;
        shipCells.classList.add("ship-cells");
        shipName.textContent = ship.name;
        shipEl.appendChild(shipCells);
        shipEl.appendChild(shipName);

        for (let i = 0; i < ship.length; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            shipCells.appendChild(cell);
        }
        shipsArray.push(shipEl);
    }

    return shipsArray;
}

function setMessage(msg, append = false) {
    const message = document.getElementById("message");
    if (append) {
        message.textContent += msg;
    }
    else {
        message.textContent = msg;
    }
}

function selectDifficulty(button) {
    const buttons = document.querySelectorAll(".difficulty button");

    buttons.forEach((btn) => btn.classList.remove("selected"));

    button.classList.add("selected");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    removeShip,
    removeAllShips,
    selectShip,
    createShips,
    setMessage,
    selectDifficulty,
});


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/Game.js");



new _Game__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsV0FBVztBQUNYLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFB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QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7VUM5RUY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDTTtBQUMxQjtBQUNBLElBQUksNkNBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtbmFtZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9zcmMvQm9hcmRVSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9zcmMvQ2VsbC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9zcmMvR2FtZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9zcmMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtbmFtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAgIC0tY2VsbC1zaXplOiAzNXB4O1xyXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMWEzYzVlO1xyXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMyZDVmOGE7XHJcbiAgICAtLWFjY2VudC1jb2xvcjogIzRhOTBlMjtcclxuICAgIC0taGl0LWNvbG9yOiAjZmY0NDQ0O1xyXG4gICAgLS1taXNzLWNvbG9yOiAjN2E4Yjk5O1xyXG4gICAgLS1zaGlwLWNvbG9yOiAjMjMzMTNlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYzI4MzMsICMyYzNlNTApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmdhbWUge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbiNtZXNzYWdlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uYm9hcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogM3JlbTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxufVxyXG5cclxuLmJvYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLWNlbGwtc2l6ZSkpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLWNlbGwtc2l6ZSkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uYm9hcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxufVxyXG5cclxuLmNvbXB1dGVyLWJvYXJkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uY2VsbC5zaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcclxufVxyXG5cclxuLmNlbGwuaGlnaGxpZ2h0ZWQsIC5jZWxsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmNlbGwudW5hdmFpbGFibGUge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmNlbGwuaGl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jb2xvcik7XHJcbiAgICBhbmltYXRpb246IGhpdEVmZmVjdCAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5jZWxsLm1pc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XHJcbiAgICBhbmltYXRpb246IG1pc3NFZmZlY3QgMC41cyBlYXNlO1xyXG59XHJcblxyXG4uc2hpcHMtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMS41cmVtIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zaGlwcy1jb250YWluZXIudmVydGljYWwgLnNoaXAtY2VsbHMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNoaXBzLWNvbnRhaW5lciAuY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5zaGlwcy1jb250YWluZXIgLnNoaXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLnNoaXBzLWNvbnRhaW5lciAuc2hpcDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5zaGlwcy1jb250YWluZXIgLnNoaXAuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTc1LCA4MCwgMC4yKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjMpO1xyXG59XHJcblxyXG4uc2hpcHMtY29udGFpbmVyIC5zaGlwLWNlbGxzIHtcclxuICAgIG1hcmdpbi1ibG9jazogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRyb2xzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmRpZmZpY3VsdHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaWZmaWN1bHR5IHAge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5kaWZmaWN1bHR5IGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG5cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoNzYsIDE3NSwgODAsIDAuMyk7XHJcbn1cclxuXHJcbi5kaWZmaWN1bHR5IGJ1dHRvbi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1N2FiZDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG5idXR0b246YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn0gXHJcblxyXG5Aa2V5ZnJhbWVzIGhpdEVmZmVjdCB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtaXNzRWZmZWN0IHtcclxuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNC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YXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1jZWxsLXNpemU6IDM1cHg7XFxyXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzFhM2M1ZTtcXHJcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMyZDVmOGE7XFxyXFxuICAgIC0tYWNjZW50LWNvbG9yOiAjNGE5MGUyO1xcclxcbiAgICAtLWhpdC1jb2xvcjogI2ZmNDQ0NDtcXHJcXG4gICAgLS1taXNzLWNvbG9yOiAjN2E4Yjk5O1xcclxcbiAgICAtLXNoaXAtY29sb3I6ICMyMzMxM2U7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWMyODMzLCAjMmMzZTUwKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUge1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbiNtZXNzYWdlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgdmFyKC0tY2VsbC1zaXplKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCB2YXIoLS1jZWxsLXNpemUpKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxufVxcclxcblxcclxcbi5jb21wdXRlci1ib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhpZ2hsaWdodGVkLCAuY2VsbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLnVuYXZhaWxhYmxlIHtcXHJcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNvbG9yKTtcXHJcXG4gICAgYW5pbWF0aW9uOiBoaXRFZmZlY3QgMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5taXNzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XFxyXFxuICAgIGFuaW1hdGlvbjogbWlzc0VmZmVjdCAwLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zaGlwcy1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMtY29udGFpbmVyLnZlcnRpY2FsIC5zaGlwLWNlbGxzIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzLWNvbnRhaW5lciAuY2VsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzLWNvbnRhaW5lciAuc2hpcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzLWNvbnRhaW5lciAuc2hpcDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzLWNvbnRhaW5lciAuc2hpcC5zZWxlY3RlZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNzYsIDE3NSwgODAsIDAuMik7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoNzYsIDE3NSwgODAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5zaGlwcy1jb250YWluZXIgLnNoaXAtY2VsbHMge1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5kaWZmaWN1bHR5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpZmZpY3VsdHkgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlmZmljdWx0eSBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcclxcblxcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSg3NiwgMTc1LCA4MCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpZmZpY3VsdHkgYnV0dG9uLnNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTdhYmQ7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufSBcXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGhpdEVmZmVjdCB7XFxyXFxuICAgIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcclxcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cXHJcXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtaXNzRWZmZWN0IHtcXHJcXG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxyXFxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9HYW1lQm9hcmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkVUkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcclxuICAgICAgICB0aGlzLmxhc3RIaWdobGlnaHRlZENlbGxzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQm9hcmQoKSB7XHJcbiAgICAgICAgY29uc3QgYm9hcmQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuY29sdW1uID0gajtcclxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvYXJkLnB1c2gocm93KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrQXNTaGlwKGNlbGxzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IGNlbGw7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVuaGlnaGxpZ2h0Q2VsbHMoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHRoaXMubGFzdEhpZ2hsaWdodGVkQ2VsbHMpIHtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdEhpZ2hsaWdodGVkQ2VsbHMgPSBbXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGlnaGxpZ2h0Q2VsbHMoY2VsbHMpIHtcclxuICAgICAgICB0aGlzLnVuaGlnaGxpZ2h0Q2VsbHMoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcclxuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gY2VsbDtcclxuICAgICAgICAgICAgdGhpcy5sYXN0SGlnaGxpZ2h0ZWRDZWxscy5wdXNoKHRoaXMuYm9hcmRbeF1beV0pO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRVbmF2YWlsYWJsZUNlbGwoeCwgeSkge1xyXG4gICAgICAgIHRoaXMuYm9hcmRbeF1beV0uY2xhc3NMaXN0LnJlbW92ZShcInVuYXZhaWxhYmxlXCIpXHJcbiAgICB9XHJcblxyXG4gICAgbWFya0FzVW5hdmFpbGFibGUoeCwgeSkge1xyXG4gICAgICAgIHRoaXMuYm9hcmRbeF1beV0uY2xhc3NMaXN0LmFkZChcInVuYXZhaWxhYmxlXCIpXHJcbiAgICAgICAgdGhpcy5sYXN0VW5hdmFpbGFibGVDZWxsID0gdGhpcy5ib2FyZFt4XVt5XTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDZWxsKHgsIHksIGFjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3hdW3ldO1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUJvYXJkLmF0dGFja1Jlc3VsdC5ISVQ6XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQm9hcmQuYXR0YWNrUmVzdWx0Lk1JU1M6XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3Ioc2hpcCwgaGl0KSB7XHJcbiAgICAgICAgdGhpcy5zaGlwID0gc2hpcDtcclxuICAgICAgICB0aGlzLmhpdCA9IGhpdDtcclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vR2FtZUJvYXJkXCI7XHJcbmltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcclxuaW1wb3J0IEJvYXJkVUkgZnJvbSBcIi4vQm9hcmRVSVwiO1xyXG5pbXBvcnQgdWkgZnJvbSBcIi4vdWlcIjtcclxuXHJcbmNvbnN0IHBoYXNlcyA9IHtcclxuICAgIFBMQUNJTkdfU0hJUFM6IFwicGxhY2luZyBzaGlwc1wiLFxyXG4gICAgUExBWUVSX1RVUk46IFwicGxheWVyIHR1cm5cIixcclxuICAgIENPTVBVVEVSX1RVUk46IFwiY29tcHV0ZXIgdHVyblwiLFxyXG4gICAgR0FNRV9PVkVSOiBcImdhbWUgb3ZlclwiLFxyXG59O1xyXG5cclxuY29uc3QgZGlmZmljdWx0aWVzID0ge1xyXG4gICAgUkFORE9NOiBcInJhbmRvbVwiLFxyXG4gICAgRUFTWTogXCJlYXN5XCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIHN0YXRpYyBjcmVhdGVTaGlwcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBuZXcgU2hpcChcIkRlc3Ryb3llclwiLCAyKSxcclxuICAgICAgICAgICAgbmV3IFNoaXAoXCJTdWJtYXJpbmVcIiwgMyksXHJcbiAgICAgICAgICAgIG5ldyBTaGlwKFwiQ3J1aXNlclwiLCAzKSxcclxuICAgICAgICAgICAgbmV3IFNoaXAoXCJCYXR0bGVzaGlwXCIsIDQpLFxyXG4gICAgICAgICAgICBuZXcgU2hpcChcIkNhcnJpZXJcIiwgNSksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVHYW1lU3RhdGUoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVVSSgpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplR2FtZVN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlckJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQm9hcmRVSSA9IG5ldyBCb2FyZFVJKCk7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlckJvYXJkVUkgPSBuZXcgQm9hcmRVSSgpO1xyXG4gICAgICAgIHRoaXMucGhhc2UgPSBwaGFzZXMuUExBQ0lOR19TSElQUztcclxuICAgICAgICB0aGlzLnNoaXBzID0gR2FtZS5jcmVhdGVTaGlwcygpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcEVsID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNoaXBYID0gMDtcclxuICAgICAgICB0aGlzLnNoaXBZID0gMDtcclxuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gR2FtZUJvYXJkLkhPUklaT05UQUxfT1JJRU5UQVRJT047XHJcbiAgICAgICAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0aWVzLkVBU1k7XHJcbiAgICAgICAgdGhpcy5pc1NoaXBIZWxkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZVVJKCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKTtcclxuICAgICAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IHNoaXBzRWxlbWVudHMgPSB1aS5jcmVhdGVTaGlwcyh0aGlzLnNoaXBzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZFVJLmJvYXJkLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQm9hcmRFbC5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNoaXBzRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsKSk7XHJcblxyXG4gICAgICAgIHVpLnNldE1lc3NhZ2UoXCJQbGFjZSB5b3VyIHNoaXBzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVwQ29tcHV0ZXJCb2FyZCgpIHtcclxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpO1xyXG4gICAgICAgIGNvbXB1dGVyQm9hcmRFbC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZFVJLmJvYXJkLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJCb2FyZEVsLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wdXRlckJvYXJkLnBsYWNlU2hpcHNSYW5kb21seShHYW1lLmNyZWF0ZVNoaXBzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYm9hcmRcIik7XHJcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIik7XHJcbiAgICAgICAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0ZVwiKTtcclxuICAgICAgICBjb25zdCBwbGFjZVNoaXBzUmFuZG9tbHlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbVwiKTtcclxuICAgICAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRcIik7XHJcbiAgICAgICAgY29uc3QgZGlmZmljdWx0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlmZmljdWx0eVwiKTtcclxuXHJcbiAgICAgICAgcGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlUGxhY2VTaGlwKTtcclxuICAgICAgICBzaGlwc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlU2VsZWN0U2hpcCk7XHJcbiAgICAgICAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVJvdGF0ZSk7XHJcbiAgICAgICAgcGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLmhhbmRsZUhvdmVyKTtcclxuICAgICAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQm9hcmRVSS51bmhpZ2hsaWdodENlbGxzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5zZWxlY3RlZFNoaXAgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMucGhhc2UgIT09IHBoYXNlcy5QTEFDSU5HX1NISVBTXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHhDb29yZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucm93LCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHlDb29yZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uLCAxMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsYXllckJvYXJkVUkucmVzZXRVbmF2YWlsYWJsZUNlbGwoeENvb3JkLCB5Q29vcmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBsYWNlU2hpcHNSYW5kb21seUJ0bi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUGxhY2VTaGlwc1JhbmRvbWx5LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVQbGF5ZXJBdHRhY2spO1xyXG4gICAgICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVJlc2V0KTtcclxuXHJcbiAgICAgICAgZGlmZmljdWx0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDaGFuZ2VEaWZmaWN1bHR5KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTaGlwSGVsZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIHRoaXMuc2hpcFggLSAxNTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIHRoaXMuc2hpcFkgLSAxNTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXBFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NoaXBIZWxkKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuaXNTaGlwSGVsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcEVsLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUGxhY2VTaGlwKGUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBsYWNlU2hpcCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhZS50YXJnZXQuY2xvc2VzdChcIi5wbGF5ZXItYm9hcmRcIikgfHxcclxuICAgICAgICAgICAgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikgfHxcclxuICAgICAgICAgICAgIXRoaXMuc2VsZWN0ZWRTaGlwIHx8XHJcbiAgICAgICAgICAgIHRoaXMucGhhc2UgIT09IHBoYXNlcy5QTEFDSU5HX1NISVBTXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHhDb29yZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucm93LCAxMCk7XHJcbiAgICAgICAgY29uc3QgeUNvb3JkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5jb2x1bW4sIDEwKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllckJvYXJkLnBsYWNlU2hpcChcclxuICAgICAgICAgICAgICAgIHhDb29yZCxcclxuICAgICAgICAgICAgICAgIHlDb29yZCxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbixcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBzID0gdGhpcy5zaGlwcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAoc2hpcCkgPT4gc2hpcCAhPT0gdGhpcy5zZWxlY3RlZFNoaXAsXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsYXllckJvYXJkVUkubWFya0FzU2hpcChcclxuICAgICAgICAgICAgICAgIEdhbWVCb2FyZC5nZXRTaGlwSW5kaWNlcyhcclxuICAgICAgICAgICAgICAgICAgICB4Q29vcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZW50YXRpb24sXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckJvYXJkVUkudW5oaWdobGlnaHRDZWxscygpO1xyXG4gICAgICAgICAgICB1aS5yZW1vdmVTaGlwKHRoaXMuc2VsZWN0ZWRTaGlwLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGhhc2UgPSBwaGFzZXMuUExBWUVSX1RVUk47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVwQ29tcHV0ZXJCb2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0TWVzc2FnZShcIkF0dGFjayB0aGUgZW5lbXkgYm9hcmQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVTZWxlY3RTaGlwID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBzaGlwID0gZS50YXJnZXQuY2xvc2VzdChcIi5zaGlwXCIpO1xyXG4gICAgICAgIGlmICghc2hpcCB8fCB0aGlzLnBoYXNlICE9PSBwaGFzZXMuUExBQ0lOR19TSElQUykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gc2hpcC5kYXRhc2V0LnNoaXBJZDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcCA9IHRoaXMuc2hpcHMuZmluZCgoc2hpcCkgPT4gc2hpcC5uYW1lID09PSBuYW1lKTtcclxuICAgICAgICB0aGlzLmlzU2hpcEhlbGQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwRWwgPSBzaGlwLnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1jZWxsc1wiKTtcclxuICAgICAgICB0aGlzLnNoaXBYID0gdGhpcy5zZWxlY3RlZFNoaXBFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICAgIHRoaXMuc2hpcFkgPSB0aGlzLnNlbGVjdGVkU2hpcEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIHVpLnNlbGVjdFNoaXAobmFtZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVJvdGF0ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hpcHMubGVuZ3RoID09PSAwIHx8IHRoaXMucGhhc2UgIT09IHBoYXNlcy5QTEFDSU5HX1NISVBTKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwcy1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIHNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNWZXJ0aWNhbCA9IHRoaXMub3JpZW50YXRpb24gPT09IEdhbWVCb2FyZC5WRVJUSUNBTF9PUklFTlRBVElPTjtcclxuXHJcbiAgICAgICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IEdhbWVCb2FyZC5IT1JJWk9OVEFMX09SSUVOVEFUSU9OO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBHYW1lQm9hcmQuVkVSVElDQUxfT1JJRU5UQVRJT047XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVIb3ZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSB8fFxyXG4gICAgICAgICAgICAhdGhpcy5zZWxlY3RlZFNoaXAgfHxcclxuICAgICAgICAgICAgdGhpcy5waGFzZSAhPT0gcGhhc2VzLlBMQUNJTkdfU0hJUFNcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgeENvb3JkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5yb3csIDEwKTtcclxuICAgICAgICBjb25zdCB5Q29vcmQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmNvbHVtbiwgMTApO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQm9hcmQuaXNTcGFjZUF2YWlsYWJsZShcclxuICAgICAgICAgICAgICAgIHhDb29yZCxcclxuICAgICAgICAgICAgICAgIHlDb29yZCxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbixcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckJvYXJkVUkuaGlnaGxpZ2h0Q2VsbHMoXHJcbiAgICAgICAgICAgICAgICBHYW1lQm9hcmQuZ2V0U2hpcEluZGljZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIHlDb29yZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yaWVudGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZFVJLnJlc2V0VW5hdmFpbGFibGVDZWxsKHhDb29yZCwgeUNvb3JkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckJvYXJkVUkudW5oaWdobGlnaHRDZWxscygpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckJvYXJkVUkubWFya0FzVW5hdmFpbGFibGUoeENvb3JkLCB5Q29vcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlUGxhY2VTaGlwc1JhbmRvbWx5ID0gKGUpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zaGlwcy5sZW5ndGggPT09IDAgfHwgdGhpcy5waGFzZSAhPT0gcGhhc2VzLlBMQUNJTkdfU0hJUFMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLnBsYXllckJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSh0aGlzLnNoaXBzKTtcclxuICAgICAgICB0aGlzLnNoaXBzID0gW107XHJcbiAgICAgICAgdWkucmVtb3ZlQWxsU2hpcHMoKTtcclxuXHJcbiAgICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbEFycikgPT4gdGhpcy5wbGF5ZXJCb2FyZFVJLm1hcmtBc1NoaXAoY2VsbEFycikpO1xyXG5cclxuICAgICAgICB0aGlzLnBoYXNlID0gcGhhc2VzLlBMQVlFUl9UVVJOO1xyXG4gICAgICAgIHRoaXMuc2V0VXBDb21wdXRlckJvYXJkKCk7XHJcbiAgICAgICAgdWkuc2V0TWVzc2FnZShcIkF0dGFjayB0aGUgZW5lbXkgYm9hcmQuXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVQbGF5ZXJBdHRhY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikgfHxcclxuICAgICAgICAgICAgdGhpcy5waGFzZSAhPT0gcGhhc2VzLlBMQVlFUl9UVVJOXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnJvdywgMTApO1xyXG4gICAgICAgIGNvbnN0IHkgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmNvbHVtbiwgMTApO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICByZXN1bHQgPT09IEdhbWVCb2FyZC5hdHRhY2tSZXN1bHQuSElUIHx8XHJcbiAgICAgICAgICAgIHJlc3VsdCA9PT0gR2FtZUJvYXJkLmF0dGFja1Jlc3VsdC5NSVNTXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZFVJLnVwZGF0ZUNlbGwoeCwgeSwgcmVzdWx0KTtcclxuICAgICAgICAgICAgdGhpcy5jb21wdXRlckJvYXJkVUkubWFya0FzVW5hdmFpbGFibGUoeCwgeSk7XHJcbiAgICAgICAgICAgIHRoaXMucGhhc2UgPSBwaGFzZXMuQ09NUFVURVJfVFVSTjtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IEdhbWVCb2FyZC5hdHRhY2tSZXN1bHQuSElUKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5jb21wdXRlckJvYXJkLmdldENlbGwoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5zaGlwLmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWkuc2V0TWVzc2FnZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYEVuZW15J3MgJHtjZWxsLnNoaXAubmFtZX0gaGFzIGJlZW4gZGVzdHJveWVkYCxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wdXRlckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgICAgICAgICAgICB1aS5zZXRNZXNzYWdlKFwiR2FtZSBvdmVyLCBZb3Ugd29uIVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGhhc2UgPSBwaGFzZXMuR0FNRV9PVkVSO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tQbGF5ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYXR0YWNrUGxheWVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBoYXNlICE9PSBwaGFzZXMuQ09NUFVURVJfVFVSTikgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgYXR0YWNrTWV0aG9kO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgZGlmZmljdWx0aWVzLkVBU1k6XHJcbiAgICAgICAgICAgICAgICBhdHRhY2tNZXRob2QgPSB0aGlzLnBsYXllckJvYXJkLnJlY2VpdmVTbWFydEF0dGFjaztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGRpZmZpY3VsdGllcy5SQU5ET006XHJcbiAgICAgICAgICAgICAgICBhdHRhY2tNZXRob2QgPSB0aGlzLnBsYXllckJvYXJkLnJlY2VpdmVSYW5kb21BdHRhY2s7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgcmVzdWx0LCB4LCB5IH0gPSBhdHRhY2tNZXRob2QuY2FsbCh0aGlzLnBsYXllckJvYXJkKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZFVJLnVwZGF0ZUNlbGwoeCwgeSwgcmVzdWx0KTtcclxuICAgICAgICB0aGlzLnBoYXNlID0gcGhhc2VzLlBMQVlFUl9UVVJOO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ID09PSBHYW1lQm9hcmQuYXR0YWNrUmVzdWx0LkhJVCkge1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5wbGF5ZXJCb2FyZC5nZXRDZWxsKHgsIHkpO1xyXG4gICAgICAgICAgICBpZiAoY2VsbC5zaGlwLmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAgICAgICB1aS5zZXRNZXNzYWdlKGBZb3VyICR7Y2VsbC5zaGlwLm5hbWV9IGhhcyBiZWVuIGRlc3Ryb3llZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBoYXNlID0gcGhhc2VzLkdBTUVfT1ZFUjtcclxuICAgICAgICAgICAgdWkuc2V0TWVzc2FnZShcIkdhbWUgb3ZlciwgQ29tcHV0ZXIgd29uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXNldCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKTtcclxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcclxuICAgICAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGVhc3lEaWZmaWN1bHR5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlYXN5XCIpO1xyXG5cclxuICAgICAgICBwbGF5ZXJCb2FyZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBzaGlwc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICBjb21wdXRlckJvYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBzaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidmVydGljYWxcIik7XHJcbiAgICAgICAgdWkuc2VsZWN0RGlmZmljdWx0eShlYXN5RGlmZmljdWx0eUJ0bik7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUdhbWVTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVVJKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNoYW5nZURpZmZpY3VsdHkgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikgfHxcclxuICAgICAgICAgICAgdGhpcy5waGFzZSAhPT0gcGhhc2VzLlBMQUNJTkdfU0hJUFNcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZGlmZmljdWx0eSA9IGUudGFyZ2V0LmRhdGFzZXQuZGlmZmljdWx0eTtcclxuXHJcbiAgICAgICAgaWYgKCFkaWZmaWN1bHR5KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcblxyXG4gICAgICAgIHVpLnNlbGVjdERpZmZpY3VsdHkoZS50YXJnZXQpO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xyXG4gICAgc3RhdGljIFNJWkUgPSAxMDtcclxuICAgIHN0YXRpYyBIT1JJWk9OVEFMX09SSUVOVEFUSU9OID0gXCJoXCI7XHJcbiAgICBzdGF0aWMgVkVSVElDQUxfT1JJRU5UQVRJT04gPSBcInZcIjtcclxuICAgIHN0YXRpYyBhdHRhY2tSZXN1bHQgPSB7XHJcbiAgICAgICAgSElUOiBcImhpdFwiLFxyXG4gICAgICAgIE1JU1M6IFwibWlzc1wiLFxyXG4gICAgICAgIEFMUkVBRFlfSElUOiBcImFscmVhZHktaGl0XCIsXHJcbiAgICAgICAgT1VUX09GX0JPVU5EUzogXCJvdXQtb2YtYm91bmRzXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcclxuICAgICAgICB0aGlzLnNoaXBzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0Q2VsbHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCb2FyZCgpIHtcclxuICAgICAgICBjb25zdCBib2FyZCA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVCb2FyZC5TSVpFOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUJvYXJkLlNJWkU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgcm93LnB1c2gobmV3IENlbGwobnVsbCwgZmFsc2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2FyZC5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VsbCh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbeF1beV07XHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwKHgsIHksIHNoaXAsIG9yaWVudGF0aW9uID0gR2FtZUJvYXJkLkhPUklaT05UQUxfT1JJRU5UQVRJT04pIHtcclxuICAgICAgICBpZiAodGhpcy5pc1NwYWNlQXZhaWxhYmxlKHgsIHksIHNoaXAsIG9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IEdhbWVCb2FyZC5nZXRTaGlwSW5kaWNlcyh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFt4LCB5XSBvZiBjZWxscykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDZWxsKHgsIHkpLnNoaXAgPSBzaGlwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNoaXBzLmFkZChzaGlwKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0T2ZCb3VuZHMoeCwgeSkpIHJldHVybiBHYW1lQm9hcmQuYXR0YWNrUmVzdWx0Lk9VVF9PRl9CT1VORFM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGwoeCwgeSk7XHJcblxyXG4gICAgICAgIGlmIChjZWxsLmhpdCkgcmV0dXJuIEdhbWVCb2FyZC5hdHRhY2tSZXN1bHQuQUxSRUFEWV9ISVQ7XHJcblxyXG4gICAgICAgIGNlbGwuaGl0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGNlbGwuc2hpcCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjZWxsLnNoaXAuaGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBHYW1lQm9hcmQuYXR0YWNrUmVzdWx0LkhJVDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBHYW1lQm9hcmQuYXR0YWNrUmVzdWx0Lk1JU1M7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPdXRPZkJvdW5kcyh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPCAwIHx8IHggPj0gR2FtZUJvYXJkLlNJWkUgfHwgeSA8IDAgfHwgeSA+PSBHYW1lQm9hcmQuU0laRTtcclxuICAgIH1cclxuXHJcbiAgICBpc1NwYWNlQXZhaWxhYmxlKFxyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeSxcclxuICAgICAgICBzaGlwLFxyXG4gICAgICAgIG9yaWVudGF0aW9uID0gR2FtZUJvYXJkLkhPUklaT05UQUxfT1JJRU5UQVRJT04sXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBpbmRpY2VzID0gR2FtZUJvYXJkLmdldFNoaXBJbmRpY2VzKHgsIHksIHNoaXAsIG9yaWVudGF0aW9uKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBbeCwgeV0gb2YgaW5kaWNlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc091dE9mQm91bmRzKHgsIHkpIHx8IHRoaXMuZ2V0Q2VsbCh4LCB5KS5zaGlwICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNoaXBJbmRpY2VzKHgsIHksIHNoaXAsIG9yaWVudGF0aW9uID0gR2FtZUJvYXJkLkhPUklaT05UQUxfT1JJRU5UQVRJT04pIHtcclxuICAgICAgICBjb25zdCBpbmRpY2VzID0gW107XHJcblxyXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gR2FtZUJvYXJkLkhPUklaT05UQUxfT1JJRU5UQVRJT04pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzLnB1c2goW3gsIHkgKyBpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSBHYW1lQm9hcmQuVkVSVElDQUxfT1JJRU5UQVRJT04pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzLnB1c2goW3ggKyBpLCB5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRpY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcHNSYW5kb21seShzaGlwcykge1xyXG4gICAgICAgIGNvbnN0IGNlbGxzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gR2FtZUJvYXJkLkhPUklaT05UQUxfT1JJRU5UQVRJT047XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gR2FtZUJvYXJkLlZFUlRJQ0FMX09SSUVOVEFUSU9OO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlU2hpcCh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxscy5wdXNoKEdhbWVCb2FyZC5nZXRTaGlwSW5kaWNlcyh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZVJhbmRvbUF0dGFjaygpIHtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJlY2VpdmVBdHRhY2soeCwgeSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBHYW1lQm9hcmQuYXR0YWNrUmVzdWx0LkhJVCB8fCByZXN1bHQgPT09IEdhbWVCb2FyZC5hdHRhY2tSZXN1bHQuTUlTUykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0LCB4LCB5IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWxsU2hpcHNTdW5rKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5zaGlwc10uZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5laWdoYm9ycyh4LCB5KSB7XHJcbiAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gW107XHJcbiAgICAgICAgY29uc3QgZGVsdGFzID0gW1xyXG4gICAgICAgICAgICBbMCwgMV0sIFsxLCAwXSwgWzAsIC0xXSwgWy0xLCAwXSBcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFtkeCwgZHldIG9mIGRlbHRhcykge1xyXG4gICAgICAgICAgICBjb25zdCBueCA9IHggKyBkeDtcclxuICAgICAgICAgICAgY29uc3QgbnkgPSB5ICsgZHk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNPdXRPZkJvdW5kcyhueCwgbnkpICYmICF0aGlzLmdldENlbGwobngsIG55KS5oaXQpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFtueCwgbnldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5laWdoYm9ycztcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlU21hcnRBdHRhY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0Q2VsbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0LCB4LCB5IH0gPSB0aGlzLnJlY2VpdmVSYW5kb21BdHRhY2soKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IEdhbWVCb2FyZC5hdHRhY2tSZXN1bHQuSElUKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldENlbGxzID0gdGhpcy50YXJnZXRDZWxscy5jb25jYXQodGhpcy5nZXROZWlnaGJvcnMoeCwgeSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyByZXN1bHQsIHgsIHkgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMudGFyZ2V0Q2VsbHMuc2hpZnQoKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJlY2VpdmVBdHRhY2soeCwgeSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IEdhbWVCb2FyZC5hdHRhY2tSZXN1bHQuSElUKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Q2VsbHMgPSB0aGlzLnRhcmdldENlbGxzLmNvbmNhdCh0aGlzLmdldE5laWdoYm9ycyh4LCB5KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyByZXN1bHQsIHgsIHkgfTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5udW1iZXJPZkhpdHMgPCB0aGlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLm51bWJlck9mSGl0cysrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZIaXRzID49IHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG59IiwiZnVuY3Rpb24gcmVtb3ZlU2hpcChzaGlwSWQpIHtcclxuICAgIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwcy1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBzaGlwID0gc2hpcHNDb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEtc2hpcC1pZD0ke3NoaXBJZH1dYCk7XHJcblxyXG4gICAgc2hpcC5yZW1vdmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsU2hpcHMoKSB7XHJcbiAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3Qgc2hpcHMgPSBzaGlwc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1zaGlwLWlkXWApO1xyXG5cclxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHNoaXAucmVtb3ZlKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RTaGlwKHNoaXBJZCkge1xyXG4gICAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHNoaXBzID0gc2hpcHNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtc2hpcC1pZF1gKTtcclxuXHJcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICAgICAgaWYgKHNoaXAuZGF0YXNldC5zaGlwSWQgPT09IHNoaXBJZCkge1xyXG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2hpcHMoc2hpcHMpIHtcclxuICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcclxuICAgICAgICBjb25zdCBzaGlwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IHNoaXBDZWxscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcblxyXG4gICAgICAgIHNoaXBFbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcclxuICAgICAgICBzaGlwRWwuZGF0YXNldC5zaGlwSWQgPSBzaGlwLm5hbWU7XHJcbiAgICAgICAgc2hpcENlbGxzLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNlbGxzXCIpO1xyXG4gICAgICAgIHNoaXBOYW1lLnRleHRDb250ZW50ID0gc2hpcC5uYW1lO1xyXG4gICAgICAgIHNoaXBFbC5hcHBlbmRDaGlsZChzaGlwQ2VsbHMpO1xyXG4gICAgICAgIHNoaXBFbC5hcHBlbmRDaGlsZChzaGlwTmFtZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgICAgICAgc2hpcENlbGxzLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaGlwc0FycmF5LnB1c2goc2hpcEVsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2hpcHNBcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TWVzc2FnZShtc2csIGFwcGVuZCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpO1xyXG4gICAgaWYgKGFwcGVuZCkge1xyXG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgKz0gbXNnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IG1zZztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0RGlmZmljdWx0eShidXR0b24pIHtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRpZmZpY3VsdHkgYnV0dG9uXCIpO1xyXG5cclxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcclxuXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICByZW1vdmVTaGlwLFxyXG4gICAgcmVtb3ZlQWxsU2hpcHMsXHJcbiAgICBzZWxlY3RTaGlwLFxyXG4gICAgY3JlYXRlU2hpcHMsXHJcbiAgICBzZXRNZXNzYWdlLFxyXG4gICAgc2VsZWN0RGlmZmljdWx0eSxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcblxyXG5uZXcgR2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==