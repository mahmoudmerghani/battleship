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
    overflow-x: hidden;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;IACxB,0BAA0B;IAC1B,uBAAuB;IACvB,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,qDAAqD;IACrD,YAAY;IACZ,0CAA0C;IAC1C,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,qCAAqC;IACrC,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,mDAAmD;IACnD,gDAAgD;IAChD,4CAA4C;IAC5C,+BAA+B;AACnC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,2CAA2C;IAC3C,qCAAqC;IACrC,uBAAuB;IACvB,wBAAwB;IACxB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,mCAAmC;IACnC,qCAAqC;AACzC;;AAEA;IACI,yCAAyC;IACzC,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,8BAA8B;AAClC;;AAEA;IACI,mCAAmC;IACnC,+BAA+B;AACnC;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,WAAW;AACf;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mCAAmC;IACnC,qCAAqC;IACrC,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,qCAAqC;IACrC,yBAAyB;IACzB,eAAe;IACf,OAAO;AACX;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kCAAkC;IAClC,yBAAyB;IACzB,2CAA2C;AAC/C;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;;IAErC,0CAA0C;IAC1C,qBAAqB;IACrB,2CAA2C;AAC/C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;IACrC,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,yBAAyB;IACzB,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;IACzB,2BAA2B;IAC3B,yCAAyC;AAC7C;;AAEA;IACI,wBAAwB;IACxB,wCAAwC;AAC5C;;AAEA;IACI,KAAK,mBAAmB,EAAE;IAC1B,MAAM,qBAAqB,EAAE;IAC7B,OAAO,mBAAmB,EAAE;AAChC;;AAEA;IACI,KAAK,UAAU,EAAE;IACjB,OAAO,UAAU,EAAE;AACvB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n    --cell-size: 35px;\r\n    --primary-color: #1a3c5e;\r\n    --secondary-color: #2d5f8a;\r\n    --accent-color: #4a90e2;\r\n    --hit-color: #ff4444;\r\n    --miss-color: #7a8b99;\r\n    --ship-color: #23313e;\r\n}\r\n\r\nbody {\r\n    background: linear-gradient(135deg, #1c2833, #2c3e50);\r\n    color: white;\r\n    font-family: 'Segoe UI', Arial, sans-serif;\r\n    min-height: 100vh;\r\n    user-select: none;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.game {\r\n    padding: 2rem;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\n#message {\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.board-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n    flex-wrap: wrap;\r\n    padding: 2rem 0;\r\n}\r\n\r\n.board {\r\n    background: rgba(255, 255, 255, 0.1);\r\n    border: 2px solid var(--accent-color);\r\n    border-radius: 8px;\r\n    width: fit-content;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, var(--cell-size));\r\n    grid-template-rows: repeat(10, var(--cell-size));\r\n    box-shadow: 0 0 20px rgba(74, 144, 226, 0.2);\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.board:hover {\r\n    transform: scale(1.02);\r\n}\r\n\r\n.computer-board {\r\n    display: none;\r\n}\r\n\r\n.cell {\r\n    background-color: rgba(255, 255, 255, 0.05);\r\n    border: 1px solid var(--accent-color);\r\n    width: var(--cell-size);\r\n    height: var(--cell-size);\r\n    cursor: pointer;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n.cell.ship {\r\n    background-color: var(--ship-color);\r\n    border: 1px solid var(--accent-color);\r\n}\r\n\r\n.cell.highlighted, .cell:hover {\r\n    background-color: rgba(74, 144, 226, 0.5);\r\n    transform: scale(1.1);\r\n    z-index: 1;\r\n}\r\n\r\n.cell.unavailable {\r\n    cursor: not-allowed;\r\n}\r\n\r\n.cell.hit {\r\n    background-color: var(--hit-color);\r\n    animation: hitEffect 0.5s ease;\r\n}\r\n\r\n.cell.miss {\r\n    background-color: var(--miss-color);\r\n    animation: missEffect 0.5s ease;\r\n}\r\n\r\n.ships-container {\r\n    background: rgba(255, 255, 255, 0.1);\r\n    padding: 1.5rem;\r\n    border-radius: 8px;\r\n    margin: 1.5rem 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.ships-container.vertical .ship-cells {\r\n    flex-direction: column;\r\n}\r\n\r\n.ships-container .cell {\r\n    background-color: var(--ship-color);\r\n    border: 1px solid var(--accent-color);\r\n    margin: 0;\r\n    border-radius: 2px;\r\n}\r\n\r\n.ships-container .ship {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: 0;\r\n    padding: 2rem;\r\n    border-radius: 4px;\r\n    background: rgba(255, 255, 255, 0.05);\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    flex: 1;\r\n}\r\n\r\n.ships-container .ship:hover {\r\n    background: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.ships-container .ship.selected {\r\n    background: rgba(76, 175, 80, 0.2);\r\n    border: 2px solid #4CAF50;\r\n    box-shadow: 0 0 15px rgba(76, 175, 80, 0.3);\r\n}\r\n\r\n.ships-container .ship-cells {\r\n    margin-block: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.controls {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.difficulty {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.difficulty p {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.difficulty button {\r\n    background: rgba(255, 255, 255, 0.05);\r\n\r\n    border: 2px solid rgba(255, 255, 255, 0.6);\r\n    transform: scale(1.1);\r\n    box-shadow: 0 0 15px rgba(76, 175, 80, 0.3);\r\n}\r\n\r\n.difficulty button.selected {\r\n    background-color: #4CAF50;\r\n}\r\n\r\nbutton {\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 24px;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    margin: 0.5rem;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #357abd;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\nbutton:active {\r\n    transform: translateY(0);\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n} \r\n\r\n@keyframes hitEffect {\r\n    0% { transform: scale(1); }\r\n    50% { transform: scale(1.2); }\r\n    100% { transform: scale(1); }\r\n}\r\n\r\n@keyframes missEffect {\r\n    0% { opacity: 0; }\r\n    100% { opacity: 1; }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1YsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxXQUFXO0FBQ1gsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FB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O0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7OztVQzlFRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNNO0FBQzFCO0FBQ0EsSUFBSSw2Q0FBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL3NyYy9Cb2FyZFVJLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL3NyYy9DZWxsLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL3NyYy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1jZWxsLXNpemU6IDM1cHg7XHJcbiAgICAtLXByaW1hcnktY29sb3I6ICMxYTNjNWU7XHJcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzJkNWY4YTtcclxuICAgIC0tYWNjZW50LWNvbG9yOiAjNGE5MGUyO1xyXG4gICAgLS1oaXQtY29sb3I6ICNmZjQ0NDQ7XHJcbiAgICAtLW1pc3MtY29sb3I6ICM3YThiOTk7XHJcbiAgICAtLXNoaXAtY29sb3I6ICMyMzMxM2U7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFjMjgzMywgIzJjM2U1MCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uZ2FtZSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuI21lc3NhZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5ib2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAzcmVtO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMnJlbSAwO1xyXG59XHJcblxyXG4uYm9hcmQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgdmFyKC0tY2VsbC1zaXplKSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgdmFyKC0tY2VsbC1zaXplKSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5ib2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG59XHJcblxyXG4uY29tcHV0ZXItYm9hcmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcclxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5jZWxsLnNoaXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG59XHJcblxyXG4uY2VsbC5oaWdobGlnaHRlZCwgLmNlbGw6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuNSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY2VsbC51bmF2YWlsYWJsZSB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uY2VsbC5oaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNvbG9yKTtcclxuICAgIGFuaW1hdGlvbjogaGl0RWZmZWN0IDAuNXMgZWFzZTtcclxufVxyXG5cclxuLmNlbGwubWlzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcclxuICAgIGFuaW1hdGlvbjogbWlzc0VmZmVjdCAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5zaGlwcy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLnNoaXBzLWNvbnRhaW5lci52ZXJ0aWNhbCAuc2hpcC1jZWxscyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2hpcHMtY29udGFpbmVyIC5jZWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLnNoaXBzLWNvbnRhaW5lciAuc2hpcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uc2hpcHMtY29udGFpbmVyIC5zaGlwOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxufVxyXG5cclxuLnNoaXBzLWNvbnRhaW5lciAuc2hpcC5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjIpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzRDQUY1MDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoNzYsIDE3NSwgODAsIDAuMyk7XHJcbn1cclxuXHJcbi5zaGlwcy1jb250YWluZXIgLnNoaXAtY2VsbHMge1xyXG4gICAgbWFyZ2luLWJsb2NrOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udHJvbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZGlmZmljdWx0eSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRpZmZpY3VsdHkgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmRpZmZpY3VsdHkgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcblxyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSg3NiwgMTc1LCA4MCwgMC4zKTtcclxufVxyXG5cclxuLmRpZmZpY3VsdHkgYnV0dG9uLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3YWJkO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufSBcclxuXHJcbkBrZXlmcmFtZXMgaGl0RWZmZWN0IHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1pc3NFZmZlY3Qge1xyXG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XHJcbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBp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QU8sVUFBVSxFQUFFO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1jZWxsLXNpemU6IDM1cHg7XFxyXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzFhM2M1ZTtcXHJcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMyZDVmOGE7XFxyXFxuICAgIC0tYWNjZW50LWNvbG9yOiAjNGE5MGUyO1xcclxcbiAgICAtLWhpdC1jb2xvcjogI2ZmNDQ0NDtcXHJcXG4gICAgLS1taXNzLWNvbG9yOiAjN2E4Yjk5O1xcclxcbiAgICAtLXNoaXAtY29sb3I6ICMyMzMxM2U7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWMyODMzLCAjMmMzZTUwKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZSB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI21lc3NhZ2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1jZWxsLXNpemUpKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLWNlbGwtc2l6ZSkpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXB1dGVyLWJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLnNoaXAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuaGlnaGxpZ2h0ZWQsIC5jZWxsOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuNSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwudW5hdmFpbGFibGUge1xcclxcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5oaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcclxcbiAgICBhbmltYXRpb246IGhpdEVmZmVjdCAwLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLm1pc3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXHJcXG4gICAgYW5pbWF0aW9uOiBtaXNzRWZmZWN0IDAuNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIG1hcmdpbjogMS41cmVtIDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zaGlwcy1jb250YWluZXIudmVydGljYWwgLnNoaXAtY2VsbHMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMtY29udGFpbmVyIC5jZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMtY29udGFpbmVyIC5zaGlwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMtY29udGFpbmVyIC5zaGlwOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMtY29udGFpbmVyIC5zaGlwLnNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTc1LCA4MCwgMC4yKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzRDQUY1MDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSg3NiwgMTc1LCA4MCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzLWNvbnRhaW5lciAuc2hpcC1jZWxscyB7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250cm9scyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpZmZpY3VsdHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlmZmljdWx0eSBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5kaWZmaWN1bHR5IGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlmZmljdWx0eSBidXR0b24uc2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1N2FiZDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG59IFxcclxcblxcclxcbkBrZXlmcmFtZXMgaGl0RWZmZWN0IHtcXHJcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XFxyXFxuICAgIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxcclxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1pc3NFZmZlY3Qge1xcclxcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXHJcXG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL0dhbWVCb2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmRVSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xyXG4gICAgICAgIHRoaXMubGFzdEhpZ2hsaWdodGVkQ2VsbHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCb2FyZCgpIHtcclxuICAgICAgICBjb25zdCBib2FyZCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gaTtcclxuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb2x1bW4gPSBqO1xyXG4gICAgICAgICAgICAgICAgcm93LnB1c2goY2VsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtBc1NoaXAoY2VsbHMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcclxuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gY2VsbDtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5oaWdobGlnaHRDZWxscygpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgdGhpcy5sYXN0SGlnaGxpZ2h0ZWRDZWxscykge1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0SGlnaGxpZ2h0ZWRDZWxscyA9IFtdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoaWdobGlnaHRDZWxscyhjZWxscykge1xyXG4gICAgICAgIHRoaXMudW5oaWdobGlnaHRDZWxscygpO1xyXG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xyXG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBjZWxsO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RIaWdobGlnaHRlZENlbGxzLnB1c2godGhpcy5ib2FyZFt4XVt5XSk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldFVuYXZhaWxhYmxlQ2VsbCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5XS5jbGFzc0xpc3QucmVtb3ZlKFwidW5hdmFpbGFibGVcIilcclxuICAgIH1cclxuXHJcbiAgICBtYXJrQXNVbmF2YWlsYWJsZSh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5XS5jbGFzc0xpc3QuYWRkKFwidW5hdmFpbGFibGVcIilcclxuICAgICAgICB0aGlzLmxhc3RVbmF2YWlsYWJsZUNlbGwgPSB0aGlzLmJvYXJkW3hdW3ldO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNlbGwoeCwgeSwgYWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuYm9hcmRbeF1beV07XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBHYW1lQm9hcmQuYXR0YWNrUmVzdWx0LkhJVDpcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVCb2FyZC5hdHRhY2tSZXN1bHQuTUlTUzpcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaGlwLCBoaXQpIHtcclxuICAgICAgICB0aGlzLnNoaXAgPSBzaGlwO1xyXG4gICAgICAgIHRoaXMuaGl0ID0gaGl0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9HYW1lQm9hcmRcIjtcclxuaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xyXG5pbXBvcnQgQm9hcmRVSSBmcm9tIFwiLi9Cb2FyZFVJXCI7XHJcbmltcG9ydCB1aSBmcm9tIFwiLi91aVwiO1xyXG5cclxuY29uc3QgcGhhc2VzID0ge1xyXG4gICAgUExBQ0lOR19TSElQUzogXCJwbGFjaW5nIHNoaXBzXCIsXHJcbiAgICBQTEFZRVJfVFVSTjogXCJwbGF5ZXIgdHVyblwiLFxyXG4gICAgQ09NUFVURVJfVFVSTjogXCJjb21wdXRlciB0dXJuXCIsXHJcbiAgICBHQU1FX09WRVI6IFwiZ2FtZSBvdmVyXCIsXHJcbn07XHJcblxyXG5jb25zdCBkaWZmaWN1bHRpZXMgPSB7XHJcbiAgICBSQU5ET006IFwicmFuZG9tXCIsXHJcbiAgICBFQVNZOiBcImVhc3lcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gICAgc3RhdGljIGNyZWF0ZVNoaXBzKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIG5ldyBTaGlwKFwiRGVzdHJveWVyXCIsIDIpLFxyXG4gICAgICAgICAgICBuZXcgU2hpcChcIlN1Ym1hcmluZVwiLCAzKSxcclxuICAgICAgICAgICAgbmV3IFNoaXAoXCJDcnVpc2VyXCIsIDMpLFxyXG4gICAgICAgICAgICBuZXcgU2hpcChcIkJhdHRsZXNoaXBcIiwgNCksXHJcbiAgICAgICAgICAgIG5ldyBTaGlwKFwiQ2FycmllclwiLCA1KSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUdhbWVTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVVJKCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVHYW1lU3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcclxuICAgICAgICB0aGlzLmNvbXB1dGVyQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZFVJID0gbmV3IEJvYXJkVUkoKTtcclxuICAgICAgICB0aGlzLmNvbXB1dGVyQm9hcmRVSSA9IG5ldyBCb2FyZFVJKCk7XHJcbiAgICAgICAgdGhpcy5waGFzZSA9IHBoYXNlcy5QTEFDSU5HX1NISVBTO1xyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBHYW1lLmNyZWF0ZVNoaXBzKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXAgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwRWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2hpcFggPSAwO1xyXG4gICAgICAgIHRoaXMuc2hpcFkgPSAwO1xyXG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBHYW1lQm9hcmQuSE9SSVpPTlRBTF9PUklFTlRBVElPTjtcclxuICAgICAgICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHRpZXMuRUFTWTtcclxuICAgICAgICB0aGlzLmlzU2hpcEhlbGQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplVUkoKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpO1xyXG4gICAgICAgIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwcy1jb250YWluZXJcIik7XHJcbiAgICAgICAgY29uc3Qgc2hpcHNFbGVtZW50cyA9IHVpLmNyZWF0ZVNoaXBzKHRoaXMuc2hpcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllckJvYXJkVUkuYm9hcmQuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZEVsLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2hpcHNFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpKTtcclxuXHJcbiAgICAgICAgdWkuc2V0TWVzc2FnZShcIlBsYWNlIHlvdXIgc2hpcHNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXBDb21wdXRlckJvYXJkKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIik7XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZEVsLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wdXRlckJvYXJkVUkuYm9hcmQuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkRWwuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXB1dGVyQm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KEdhbWUuY3JlYXRlU2hpcHMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKTtcclxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcclxuICAgICAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRlXCIpO1xyXG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZG9tXCIpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldFwiKTtcclxuICAgICAgICBjb25zdCBkaWZmaWN1bHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaWZmaWN1bHR5XCIpO1xyXG5cclxuICAgICAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVQbGFjZVNoaXApO1xyXG4gICAgICAgIHNoaXBzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVTZWxlY3RTaGlwKTtcclxuICAgICAgICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlUm90YXRlKTtcclxuICAgICAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuaGFuZGxlSG92ZXIpO1xyXG4gICAgICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZFVJLnVuaGlnaGxpZ2h0Q2VsbHMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikgfHxcclxuICAgICAgICAgICAgICAgICF0aGlzLnNlbGVjdGVkU2hpcCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5waGFzZSAhPT0gcGhhc2VzLlBMQUNJTkdfU0hJUFNcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeENvb3JkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5yb3csIDEwKTtcclxuICAgICAgICAgICAgY29uc3QgeUNvb3JkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5jb2x1bW4sIDEwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQm9hcmRVSS5yZXNldFVuYXZhaWxhYmxlQ2VsbCh4Q29vcmQsIHlDb29yZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGxhY2VTaGlwc1JhbmRvbWx5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQbGFjZVNoaXBzUmFuZG9tbHksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb21wdXRlckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVBsYXllckF0dGFjayk7XHJcbiAgICAgICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlUmVzZXQpO1xyXG5cclxuICAgICAgICBkaWZmaWN1bHR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNoYW5nZURpZmZpY3VsdHkpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NoaXBIZWxkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gdGhpcy5zaGlwWCAtIDE1O1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gdGhpcy5zaGlwWSAtIDE1O1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2hpcEVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2hpcEhlbGQpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5pc1NoaXBIZWxkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwRWwuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXBFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQbGFjZVNoaXAoZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGxhY2VTaGlwID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFlLnRhcmdldC5jbG9zZXN0KFwiLnBsYXllci1ib2FyZFwiKSB8fFxyXG4gICAgICAgICAgICAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSB8fFxyXG4gICAgICAgICAgICAhdGhpcy5zZWxlY3RlZFNoaXAgfHxcclxuICAgICAgICAgICAgdGhpcy5waGFzZSAhPT0gcGhhc2VzLlBMQUNJTkdfU0hJUFNcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgeENvb3JkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5yb3csIDEwKTtcclxuICAgICAgICBjb25zdCB5Q29vcmQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmNvbHVtbiwgMTApO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQm9hcmQucGxhY2VTaGlwKFxyXG4gICAgICAgICAgICAgICAgeENvb3JkLFxyXG4gICAgICAgICAgICAgICAgeUNvb3JkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWVudGF0aW9uLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHMgPSB0aGlzLnNoaXBzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChzaGlwKSA9PiBzaGlwICE9PSB0aGlzLnNlbGVjdGVkU2hpcCxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQm9hcmRVSS5tYXJrQXNTaGlwKFxyXG4gICAgICAgICAgICAgICAgR2FtZUJvYXJkLmdldFNoaXBJbmRpY2VzKFxyXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZCxcclxuICAgICAgICAgICAgICAgICAgICB5Q29vcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbixcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQm9hcmRVSS51bmhpZ2hsaWdodENlbGxzKCk7XHJcbiAgICAgICAgICAgIHVpLnJlbW92ZVNoaXAodGhpcy5zZWxlY3RlZFNoaXAubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waGFzZSA9IHBoYXNlcy5QTEFZRVJfVFVSTjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VXBDb21wdXRlckJvYXJkKCk7XHJcbiAgICAgICAgICAgICAgICB1aS5zZXRNZXNzYWdlKFwiQXR0YWNrIHRoZSBlbmVteSBib2FyZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVNlbGVjdFNoaXAgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNoaXAgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnNoaXBcIik7XHJcbiAgICAgICAgaWYgKCFzaGlwIHx8IHRoaXMucGhhc2UgIT09IHBoYXNlcy5QTEFDSU5HX1NISVBTKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBzaGlwLmRhdGFzZXQuc2hpcElkO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwID0gdGhpcy5zaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09IG5hbWUpO1xyXG4gICAgICAgIHRoaXMuaXNTaGlwSGVsZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXBFbCA9IHNoaXAucXVlcnlTZWxlY3RvcihcIi5zaGlwLWNlbGxzXCIpO1xyXG4gICAgICAgIHRoaXMuc2hpcFggPSB0aGlzLnNlbGVjdGVkU2hpcEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgICAgdGhpcy5zaGlwWSA9IHRoaXMuc2VsZWN0ZWRTaGlwRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgdWkuc2VsZWN0U2hpcChuYW1lKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlUm90YXRlID0gKGUpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zaGlwcy5sZW5ndGggPT09IDAgfHwgdGhpcy5waGFzZSAhPT0gcGhhc2VzLlBMQUNJTkdfU0hJUFMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgc2hpcHNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBpc1ZlcnRpY2FsID0gdGhpcy5vcmllbnRhdGlvbiA9PT0gR2FtZUJvYXJkLlZFUlRJQ0FMX09SSUVOVEFUSU9OO1xyXG5cclxuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gR2FtZUJvYXJkLkhPUklaT05UQUxfT1JJRU5UQVRJT047XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IEdhbWVCb2FyZC5WRVJUSUNBTF9PUklFTlRBVElPTjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUhvdmVyID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpIHx8XHJcbiAgICAgICAgICAgICF0aGlzLnNlbGVjdGVkU2hpcCB8fFxyXG4gICAgICAgICAgICB0aGlzLnBoYXNlICE9PSBwaGFzZXMuUExBQ0lOR19TSElQU1xyXG4gICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB4Q29vcmQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnJvdywgMTApO1xyXG4gICAgICAgIGNvbnN0IHlDb29yZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uLCAxMCk7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5pc1NwYWNlQXZhaWxhYmxlKFxyXG4gICAgICAgICAgICAgICAgeENvb3JkLFxyXG4gICAgICAgICAgICAgICAgeUNvb3JkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWVudGF0aW9uLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQm9hcmRVSS5oaWdobGlnaHRDZWxscyhcclxuICAgICAgICAgICAgICAgIEdhbWVCb2FyZC5nZXRTaGlwSW5kaWNlcyhcclxuICAgICAgICAgICAgICAgICAgICB4Q29vcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZW50YXRpb24sXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckJvYXJkVUkucmVzZXRVbmF2YWlsYWJsZUNlbGwoeENvb3JkLCB5Q29vcmQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQm9hcmRVSS51bmhpZ2hsaWdodENlbGxzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQm9hcmRVSS5tYXJrQXNVbmF2YWlsYWJsZSh4Q29vcmQsIHlDb29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVQbGFjZVNoaXBzUmFuZG9tbHkgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnNoaXBzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLnBoYXNlICE9PSBwaGFzZXMuUExBQ0lOR19TSElQUylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMucGxheWVyQm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KHRoaXMuc2hpcHMpO1xyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgICAgICB1aS5yZW1vdmVBbGxTaGlwcygpO1xyXG5cclxuICAgICAgICBjZWxscy5mb3JFYWNoKChjZWxsQXJyKSA9PiB0aGlzLnBsYXllckJvYXJkVUkubWFya0FzU2hpcChjZWxsQXJyKSk7XHJcblxyXG4gICAgICAgIHRoaXMucGhhc2UgPSBwaGFzZXMuUExBWUVSX1RVUk47XHJcbiAgICAgICAgdGhpcy5zZXRVcENvbXB1dGVyQm9hcmQoKTtcclxuICAgICAgICB1aS5zZXRNZXNzYWdlKFwiQXR0YWNrIHRoZSBlbmVteSBib2FyZC5cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVBsYXllckF0dGFjayA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnBoYXNlICE9PSBwaGFzZXMuUExBWUVSX1RVUk5cclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucm93LCAxMCk7XHJcbiAgICAgICAgY29uc3QgeSA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uLCAxMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHJlc3VsdCA9PT0gR2FtZUJvYXJkLmF0dGFja1Jlc3VsdC5ISVQgfHxcclxuICAgICAgICAgICAgcmVzdWx0ID09PSBHYW1lQm9hcmQuYXR0YWNrUmVzdWx0Lk1JU1NcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wdXRlckJvYXJkVUkudXBkYXRlQ2VsbCh4LCB5LCByZXN1bHQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVyQm9hcmRVSS5tYXJrQXNVbmF2YWlsYWJsZSh4LCB5KTtcclxuICAgICAgICAgICAgdGhpcy5waGFzZSA9IHBoYXNlcy5DT01QVVRFUl9UVVJOO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gR2FtZUJvYXJkLmF0dGFja1Jlc3VsdC5ISVQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmNvbXB1dGVyQm9hcmQuZ2V0Q2VsbCh4LCB5KTtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsLnNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB1aS5zZXRNZXNzYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgRW5lbXkncyAke2NlbGwuc2hpcC5uYW1lfSBoYXMgYmVlbiBkZXN0cm95ZWRgLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXB1dGVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgIHVpLnNldE1lc3NhZ2UoXCJHYW1lIG92ZXIsIFlvdSB3b24hXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waGFzZSA9IHBoYXNlcy5HQU1FX09WRVI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja1BsYXllcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhdHRhY2tQbGF5ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGhhc2UgIT09IHBoYXNlcy5DT01QVVRFUl9UVVJOKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBhdHRhY2tNZXRob2Q7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpZmZpY3VsdHkpIHtcclxuICAgICAgICAgICAgY2FzZSBkaWZmaWN1bHRpZXMuRUFTWTpcclxuICAgICAgICAgICAgICAgIGF0dGFja01ldGhvZCA9IHRoaXMucGxheWVyQm9hcmQucmVjZWl2ZVNtYXJ0QXR0YWNrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZGlmZmljdWx0aWVzLlJBTkRPTTpcclxuICAgICAgICAgICAgICAgIGF0dGFja01ldGhvZCA9IHRoaXMucGxheWVyQm9hcmQucmVjZWl2ZVJhbmRvbUF0dGFjaztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyByZXN1bHQsIHgsIHkgfSA9IGF0dGFja01ldGhvZC5jYWxsKHRoaXMucGxheWVyQm9hcmQpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllckJvYXJkVUkudXBkYXRlQ2VsbCh4LCB5LCByZXN1bHQpO1xyXG4gICAgICAgIHRoaXMucGhhc2UgPSBwaGFzZXMuUExBWUVSX1RVUk47XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IEdhbWVCb2FyZC5hdHRhY2tSZXN1bHQuSElUKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLnBsYXllckJvYXJkLmdldENlbGwoeCwgeSk7XHJcbiAgICAgICAgICAgIGlmIChjZWxsLnNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgIHVpLnNldE1lc3NhZ2UoYFlvdXIgJHtjZWxsLnNoaXAubmFtZX0gaGFzIGJlZW4gZGVzdHJveWVkYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGhhc2UgPSBwaGFzZXMuR0FNRV9PVkVSO1xyXG4gICAgICAgICAgICB1aS5zZXRNZXNzYWdlKFwiR2FtZSBvdmVyLCBDb21wdXRlciB3b25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlc2V0ID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpO1xyXG4gICAgICAgIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwcy1jb250YWluZXJcIik7XHJcbiAgICAgICAgY29uc3QgZWFzeURpZmZpY3VsdHlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVhc3lcIik7XHJcblxyXG4gICAgICAgIHBsYXllckJvYXJkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHNoaXBzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICB1aS5zZWxlY3REaWZmaWN1bHR5KGVhc3lEaWZmaWN1bHR5QnRuKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplR2FtZVN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVUkoKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlRGlmZmljdWx0eSA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnBoYXNlICE9PSBwaGFzZXMuUExBQ0lOR19TSElQU1xyXG4gICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBkaWZmaWN1bHR5ID0gZS50YXJnZXQuZGF0YXNldC5kaWZmaWN1bHR5O1xyXG5cclxuICAgICAgICBpZiAoIWRpZmZpY3VsdHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuXHJcbiAgICAgICAgdWkuc2VsZWN0RGlmZmljdWx0eShlLnRhcmdldCk7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCBDZWxsIGZyb20gXCIuL0NlbGxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XHJcbiAgICBzdGF0aWMgU0laRSA9IDEwO1xyXG4gICAgc3RhdGljIEhPUklaT05UQUxfT1JJRU5UQVRJT04gPSBcImhcIjtcclxuICAgIHN0YXRpYyBWRVJUSUNBTF9PUklFTlRBVElPTiA9IFwidlwiO1xyXG4gICAgc3RhdGljIGF0dGFja1Jlc3VsdCA9IHtcclxuICAgICAgICBISVQ6IFwiaGl0XCIsXHJcbiAgICAgICAgTUlTUzogXCJtaXNzXCIsXHJcbiAgICAgICAgQUxSRUFEWV9ISVQ6IFwiYWxyZWFkeS1oaXRcIixcclxuICAgICAgICBPVVRfT0ZfQk9VTkRTOiBcIm91dC1vZi1ib3VuZHNcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRDZWxscyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgICAgIGNvbnN0IGJvYXJkID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUJvYXJkLlNJWkU7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQm9hcmQuU0laRTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICByb3cucHVzaChuZXcgQ2VsbChudWxsLCBmYWxzZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvYXJkLnB1c2gocm93KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDZWxsKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFt4XVt5XTtcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXAoeCwgeSwgc2hpcCwgb3JpZW50YXRpb24gPSBHYW1lQm9hcmQuSE9SSVpPTlRBTF9PUklFTlRBVElPTikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3BhY2VBdmFpbGFibGUoeCwgeSwgc2hpcCwgb3JpZW50YXRpb24pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gR2FtZUJvYXJkLmdldFNoaXBJbmRpY2VzKHgsIHksIHNoaXAsIG9yaWVudGF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3gsIHldIG9mIGNlbGxzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENlbGwoeCwgeSkuc2hpcCA9IHNoaXA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHMuYWRkKHNoaXApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRPZkJvdW5kcyh4LCB5KSkgcmV0dXJuIEdhbWVCb2FyZC5hdHRhY2tSZXN1bHQuT1VUX09GX0JPVU5EUztcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbCh4LCB5KTtcclxuXHJcbiAgICAgICAgaWYgKGNlbGwuaGl0KSByZXR1cm4gR2FtZUJvYXJkLmF0dGFja1Jlc3VsdC5BTFJFQURZX0hJVDtcclxuXHJcbiAgICAgICAgY2VsbC5oaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoY2VsbC5zaGlwICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2hpcC5oaXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIEdhbWVCb2FyZC5hdHRhY2tSZXN1bHQuSElUO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEdhbWVCb2FyZC5hdHRhY2tSZXN1bHQuTUlTUztcclxuICAgIH1cclxuXHJcbiAgICBpc091dE9mQm91bmRzKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4geCA8IDAgfHwgeCA+PSBHYW1lQm9hcmQuU0laRSB8fCB5IDwgMCB8fCB5ID49IEdhbWVCb2FyZC5TSVpFO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3BhY2VBdmFpbGFibGUoXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5LFxyXG4gICAgICAgIHNoaXAsXHJcbiAgICAgICAgb3JpZW50YXRpb24gPSBHYW1lQm9hcmQuSE9SSVpPTlRBTF9PUklFTlRBVElPTixcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGluZGljZXMgPSBHYW1lQm9hcmQuZ2V0U2hpcEluZGljZXMoeCwgeSwgc2hpcCwgb3JpZW50YXRpb24pO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFt4LCB5XSBvZiBpbmRpY2VzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3V0T2ZCb3VuZHMoeCwgeSkgfHwgdGhpcy5nZXRDZWxsKHgsIHkpLnNoaXAgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U2hpcEluZGljZXMoeCwgeSwgc2hpcCwgb3JpZW50YXRpb24gPSBHYW1lQm9hcmQuSE9SSVpPTlRBTF9PUklFTlRBVElPTikge1xyXG4gICAgICAgIGNvbnN0IGluZGljZXMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBHYW1lQm9hcmQuSE9SSVpPTlRBTF9PUklFTlRBVElPTikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGluZGljZXMucHVzaChbeCwgeSArIGldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IEdhbWVCb2FyZC5WRVJUSUNBTF9PUklFTlRBVElPTikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGluZGljZXMucHVzaChbeCArIGksIHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluZGljZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5KHNoaXBzKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbHMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSBHYW1lQm9hcmQuSE9SSVpPTlRBTF9PUklFTlRBVElPTjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSBHYW1lQm9hcmQuVkVSVElDQUxfT1JJRU5UQVRJT047XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxhY2VTaGlwKHgsIHksIHNoaXAsIG9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzLnB1c2goR2FtZUJvYXJkLmdldFNoaXBJbmRpY2VzKHgsIHksIHNoaXAsIG9yaWVudGF0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjZWxscztcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlUmFuZG9tQXR0YWNrKCkge1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmVjZWl2ZUF0dGFjayh4LCB5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IEdhbWVCb2FyZC5hdHRhY2tSZXN1bHQuSElUIHx8IHJlc3VsdCA9PT0gR2FtZUJvYXJkLmF0dGFja1Jlc3VsdC5NSVNTKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQsIHgsIHkgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbGxTaGlwc1N1bmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnNoaXBzXS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmVpZ2hib3JzKHgsIHkpIHtcclxuICAgICAgICBjb25zdCBuZWlnaGJvcnMgPSBbXTtcclxuICAgICAgICBjb25zdCBkZWx0YXMgPSBbXHJcbiAgICAgICAgICAgIFswLCAxXSwgWzEsIDBdLCBbMCwgLTFdLCBbLTEsIDBdIFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgW2R4LCBkeV0gb2YgZGVsdGFzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4O1xyXG4gICAgICAgICAgICBjb25zdCBueSA9IHkgKyBkeTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc091dE9mQm91bmRzKG54LCBueSkgJiYgIXRoaXMuZ2V0Q2VsbChueCwgbnkpLmhpdCkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW254LCBueV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmVpZ2hib3JzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVTbWFydEF0dGFjaygpIHtcclxuICAgICAgICBpZiAodGhpcy50YXJnZXRDZWxscy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQsIHgsIHkgfSA9IHRoaXMucmVjZWl2ZVJhbmRvbUF0dGFjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gR2FtZUJvYXJkLmF0dGFja1Jlc3VsdC5ISVQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Q2VsbHMgPSB0aGlzLnRhcmdldENlbGxzLmNvbmNhdCh0aGlzLmdldE5laWdoYm9ycyh4LCB5KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IHJlc3VsdCwgeCwgeSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy50YXJnZXRDZWxscy5zaGlmdCgpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmVjZWl2ZUF0dGFjayh4LCB5KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gR2FtZUJvYXJkLmF0dGFja1Jlc3VsdC5ISVQpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRDZWxscyA9IHRoaXMudGFyZ2V0Q2VsbHMuY29uY2F0KHRoaXMuZ2V0TmVpZ2hib3JzKHgsIHkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHJlc3VsdCwgeCwgeSB9O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLm51bWJlck9mSGl0cyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm51bWJlck9mSGl0cyA8IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzU3VuaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJPZkhpdHMgPj0gdGhpcy5sZW5ndGg7XHJcbiAgICB9XHJcbn0iLCJmdW5jdGlvbiByZW1vdmVTaGlwKHNoaXBJZCkge1xyXG4gICAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHNoaXAgPSBzaGlwc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zaGlwLWlkPSR7c2hpcElkfV1gKTtcclxuXHJcbiAgICBzaGlwLnJlbW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxTaGlwcygpIHtcclxuICAgIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwcy1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBzaGlwcyA9IHNoaXBzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXNoaXAtaWRdYCk7XHJcblxyXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5yZW1vdmUoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFNoaXAoc2hpcElkKSB7XHJcbiAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3Qgc2hpcHMgPSBzaGlwc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1zaGlwLWlkXWApO1xyXG5cclxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgICBpZiAoc2hpcC5kYXRhc2V0LnNoaXBJZCA9PT0gc2hpcElkKSB7XHJcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaGlwcyhzaGlwcykge1xyXG4gICAgY29uc3Qgc2hpcHNBcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICAgIGNvbnN0IHNoaXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3Qgc2hpcENlbGxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuXHJcbiAgICAgICAgc2hpcEVsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xyXG4gICAgICAgIHNoaXBFbC5kYXRhc2V0LnNoaXBJZCA9IHNoaXAubmFtZTtcclxuICAgICAgICBzaGlwQ2VsbHMuY2xhc3NMaXN0LmFkZChcInNoaXAtY2VsbHNcIik7XHJcbiAgICAgICAgc2hpcE5hbWUudGV4dENvbnRlbnQgPSBzaGlwLm5hbWU7XHJcbiAgICAgICAgc2hpcEVsLmFwcGVuZENoaWxkKHNoaXBDZWxscyk7XHJcbiAgICAgICAgc2hpcEVsLmFwcGVuZENoaWxkKHNoaXBOYW1lKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICBzaGlwQ2VsbHMuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXBzQXJyYXkucHVzaChzaGlwRWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaGlwc0FycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRNZXNzYWdlKG1zZywgYXBwZW5kID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VcIik7XHJcbiAgICBpZiAoYXBwZW5kKSB7XHJcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCArPSBtc2c7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gbXNnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3REaWZmaWN1bHR5KGJ1dHRvbikge1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGlmZmljdWx0eSBidXR0b25cIik7XHJcblxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikpO1xyXG5cclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHJlbW92ZVNoaXAsXHJcbiAgICByZW1vdmVBbGxTaGlwcyxcclxuICAgIHNlbGVjdFNoaXAsXHJcbiAgICBjcmVhdGVTaGlwcyxcclxuICAgIHNldE1lc3NhZ2UsXHJcbiAgICBzZWxlY3REaWZmaWN1bHR5LFxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuXHJcbm5ldyBHYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9