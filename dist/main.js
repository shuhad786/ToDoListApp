(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addList": () => (/* binding */ addList),
/* harmony export */   "displayList": () => (/* binding */ displayList)
/* harmony export */ });
/* harmony import */ var _templateList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templateList.js */ "./src/modules/templateList.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/* eslint no-undefined: "error" */


const todoListContainer = document.querySelector('.toDoListItemContainer');
const todoInput = document.querySelector('.toDoInput');

const displayList = () => {
  todoListContainer.innerHTML = '';
  _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((item, id) => {
    todoListContainer.innerHTML += `
      <div class='toDoItem'>
        <input class='item' id='check-${id}', "completed")' type='checkbox' ${item.completed ? 'checked' : ''} onclick='updateList(${id}, "completed")'>
        <input type='text' class='findInput' id='input-${id}' value=${item.description} />
        <i onclick='updateList(${id}, "description")' class='fa-solid fa-file-pen' id='options-${id}'></i>
        <i onclick='removeList(${id})' class='fa-solid fa-trash' id='delete-${id}'></i>
      </div>
    `;
  });
};

const addList = (description, completed, index) => {
  const listAdded = new _templateList_js__WEBPACK_IMPORTED_MODULE_0__["default"](description, completed, index);
  _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].push(listAdded);
  localStorage.setItem('listStorage', JSON.stringify(_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"]));
  setTimeout(() => {
    todoInput.value = '';
  }, 1000);
  displayList();
};

window.removeList = () => {
  const deleteBtn = [...document.querySelectorAll('.fa-trash')];
  deleteBtn.forEach(item => {
    item.addEventListener('click', () => {
      _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].splice(deleteBtn.indexOf(item), 1);
      _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((item, index) => {
        item.index = index + 1;
      });
      localStorage.setItem('listStorage', JSON.stringify(_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"]));
      displayList();
    });
  });
};

window.updateList = id => {
  const updateInput = document.querySelector(`#input-${id}`).value;
  const updateCheckbox = document.querySelector(`#check-${id}`).checked;
  const updatedArray = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].map(item => {
    if (item.index - 1 === id) {
      item.description = updateInput;
    }

    if (item.index - 1 === id) {
      item.completed = updateCheckbox;
    }

    return item;
  });
  localStorage.setItem('listStorage', JSON.stringify(updatedArray));
};



/***/ }),

/***/ "./src/modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/modules/clearAll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");


const clearCompleted = () => {
  let inCompleted = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter(item => {
    if (!item.completed) {
      return item;
    }

    return null;
  });
  inCompleted = inCompleted.map((item, id) => {
    item.index = id + 1;
    return item;
  });
  localStorage.setItem('listStorage', JSON.stringify(inCompleted));
  window.location.reload();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompleted);

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const localGet = JSON.parse(localStorage.getItem('listStorage')) || [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localGet);

/***/ }),

/***/ "./src/modules/templateList.js":
/*!*************************************!*\
  !*** ./src/modules/templateList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListTemplate)
/* harmony export */ });
class ListTemplate {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Varela+Round&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --bg-color: #16161d;\r\n  --border-radius: 5px;\r\n  --page-bg-color: rgba(40, 34, 54, 0.473);\r\n  --item-bg-color: rgba(54, 27, 116, 0.445);\r\n  --text-color: white;\r\n}\r\n\r\n* {\r\n  font-family: 'Varela Round', sans-serif;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--bg-color);\r\n}\r\n\r\n.page {\r\n  flex: 1;\r\n  max-width: 75%;\r\n  min-height: 85%;\r\n  background-color: var(--page-bg-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  text-align: center;\r\n  border-radius: 15px;\r\n  gap: 1em;\r\n  padding: 1em;\r\n  justify-content: center;\r\n}\r\n\r\n.header {\r\n  max-height: 1em;\r\n  font-weight: 300;\r\n  color: white;\r\n  font-size: 3em;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.header::before {\r\n  content: attr(Heading);\r\n  background: linear-gradient(to right, #05d6d9, #f907fd);\r\n  position: absolute;\r\n  z-index: 0;\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  -webkit-text-stroke: 20px transparent;\r\n  filter: blur(17px);\r\n  opacity: 0.5;\r\n}\r\n\r\n.toDoList {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: column;\r\n  justify-self: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.entryContainer {\r\n  display: grid;\r\n  grid-template-columns: 65% 2em;\r\n  height: 2em;\r\n  place-items: end;\r\n  gap: 0.6em;\r\n  padding-bottom: 1em;\r\n}\r\n\r\n.toDoInput {\r\n  min-height: 2em;\r\n  width: 50%;\r\n  border-radius: var(--border-radius);\r\n  outline: none;\r\n  border: none;\r\n  padding: 0 0.3em;\r\n  text-align: center;\r\n  background-color: var(--bg-color);\r\n  color: var(--text-color);\r\n}\r\n\r\n.toDoInput:focus {\r\n  box-shadow: inset 0 0 3px 2px #05d6d9;\r\n}\r\n\r\n.addToDo {\r\n  color: var(--text-color);\r\n  border: none;\r\n  background-color: var(--bg-color);\r\n  border-radius: var(--border-radius);\r\n  outline: none;\r\n  padding: 0.4em;\r\n  justify-self: left;\r\n}\r\n\r\n.toDoListItemContainer {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n  background-color: var(--bg-color);\r\n  border-radius: var(--border-radius);\r\n  min-height: 100%;\r\n  align-items: center;\r\n  padding: 1em 0;\r\n}\r\n\r\n.toDoItem {\r\n  display: flex;\r\n  justify-content: center;\r\n  min-width: 35%;\r\n  height: 2.5em;\r\n  gap: 0.5em;\r\n  background-color: var(--page-bg-color);\r\n  padding: 0;\r\n  align-items: center;\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.item {\r\n  height: 1.4em;\r\n  width: 1.4em;\r\n  border-radius: var(--border-radius);\r\n  background-color: var(--bg-color);\r\n}\r\n\r\n.findInput {\r\n  width: 70%;\r\n  height: 1em;\r\n  padding: 0.3em;\r\n}\r\n\r\n.clearCompleted {\r\n  width: 30%;\r\n  align-self: center;\r\n  padding: 0.4em;\r\n  border-radius: var(--border-radius);\r\n  color: var(--text-color);\r\n  border: none;\r\n  background: radial-gradient(#05d6d9, #f907fd);\r\n  letter-spacing: 0.1em;\r\n  font-weight: bold;\r\n  font-size: 1em;\r\n}\r\n\r\n.fa-arrow-turn-down {\r\n  rotate: 90deg;\r\n}\r\n\r\n.fa-file-pen {\r\n  background: linear-gradient(45deg, #05d6d9, #f907fd);\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n.fa-trash {\r\n  background: linear-gradient(-45deg, #05d6d9, #f907fd);\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  color: transparent;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,wCAAwC;EACxC,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,OAAO;EACP,cAAc;EACd,eAAe;EACf,sCAAsC;EACtC,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,uDAAuD;EACvD,kBAAkB;EAClB,UAAU;EACV,6BAA6B;EAC7B,qBAAqB;EACrB,qCAAqC;EACrC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,gBAAgB;EAChB,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,mCAAmC;EACnC,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,iCAAiC;EACjC,mCAAmC;EACnC,aAAa;EACb,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,QAAQ;EACR,iCAAiC;EACjC,mCAAmC;EACnC,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,aAAa;EACb,UAAU;EACV,sCAAsC;EACtC,UAAU;EACV,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mCAAmC;EACnC,iCAAiC;AACnC;;AAEA;EACE,UAAU;EACV,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,cAAc;EACd,mCAAmC;EACnC,wBAAwB;EACxB,YAAY;EACZ,6CAA6C;EAC7C,qBAAqB;EACrB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oDAAoD;EACpD,6BAA6B;EAC7B,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,qDAAqD;EACrD,6BAA6B;EAC7B,qBAAqB;EACrB,kBAAkB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');\r\n\r\n:root {\r\n  --bg-color: #16161d;\r\n  --border-radius: 5px;\r\n  --page-bg-color: rgba(40, 34, 54, 0.473);\r\n  --item-bg-color: rgba(54, 27, 116, 0.445);\r\n  --text-color: white;\r\n}\r\n\r\n* {\r\n  font-family: 'Varela Round', sans-serif;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--bg-color);\r\n}\r\n\r\n.page {\r\n  flex: 1;\r\n  max-width: 75%;\r\n  min-height: 85%;\r\n  background-color: var(--page-bg-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  text-align: center;\r\n  border-radius: 15px;\r\n  gap: 1em;\r\n  padding: 1em;\r\n  justify-content: center;\r\n}\r\n\r\n.header {\r\n  max-height: 1em;\r\n  font-weight: 300;\r\n  color: white;\r\n  font-size: 3em;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.header::before {\r\n  content: attr(Heading);\r\n  background: linear-gradient(to right, #05d6d9, #f907fd);\r\n  position: absolute;\r\n  z-index: 0;\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  -webkit-text-stroke: 20px transparent;\r\n  filter: blur(17px);\r\n  opacity: 0.5;\r\n}\r\n\r\n.toDoList {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: column;\r\n  justify-self: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.entryContainer {\r\n  display: grid;\r\n  grid-template-columns: 65% 2em;\r\n  height: 2em;\r\n  place-items: end;\r\n  gap: 0.6em;\r\n  padding-bottom: 1em;\r\n}\r\n\r\n.toDoInput {\r\n  min-height: 2em;\r\n  width: 50%;\r\n  border-radius: var(--border-radius);\r\n  outline: none;\r\n  border: none;\r\n  padding: 0 0.3em;\r\n  text-align: center;\r\n  background-color: var(--bg-color);\r\n  color: var(--text-color);\r\n}\r\n\r\n.toDoInput:focus {\r\n  box-shadow: inset 0 0 3px 2px #05d6d9;\r\n}\r\n\r\n.addToDo {\r\n  color: var(--text-color);\r\n  border: none;\r\n  background-color: var(--bg-color);\r\n  border-radius: var(--border-radius);\r\n  outline: none;\r\n  padding: 0.4em;\r\n  justify-self: left;\r\n}\r\n\r\n.toDoListItemContainer {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n  background-color: var(--bg-color);\r\n  border-radius: var(--border-radius);\r\n  min-height: 100%;\r\n  align-items: center;\r\n  padding: 1em 0;\r\n}\r\n\r\n.toDoItem {\r\n  display: flex;\r\n  justify-content: center;\r\n  min-width: 35%;\r\n  height: 2.5em;\r\n  gap: 0.5em;\r\n  background-color: var(--page-bg-color);\r\n  padding: 0;\r\n  align-items: center;\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.item {\r\n  height: 1.4em;\r\n  width: 1.4em;\r\n  border-radius: var(--border-radius);\r\n  background-color: var(--bg-color);\r\n}\r\n\r\n.findInput {\r\n  width: 70%;\r\n  height: 1em;\r\n  padding: 0.3em;\r\n}\r\n\r\n.clearCompleted {\r\n  width: 30%;\r\n  align-self: center;\r\n  padding: 0.4em;\r\n  border-radius: var(--border-radius);\r\n  color: var(--text-color);\r\n  border: none;\r\n  background: radial-gradient(#05d6d9, #f907fd);\r\n  letter-spacing: 0.1em;\r\n  font-weight: bold;\r\n  font-size: 1em;\r\n}\r\n\r\n.fa-arrow-turn-down {\r\n  rotate: 90deg;\r\n}\r\n\r\n.fa-file-pen {\r\n  background: linear-gradient(45deg, #05d6d9, #f907fd);\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n.fa-trash {\r\n  background: linear-gradient(-45deg, #05d6d9, #f907fd);\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  color: transparent;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app.js */ "./src/modules/app.js");
/* harmony import */ var _modules_clearAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/clearAll.js */ "./src/modules/clearAll.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");




const addBtn = document.querySelector('.addToDo');
const todoInput = document.querySelector('.toDoInput');
const clearAll = document.querySelector('.clearCompleted');
window.addEventListener('load', () => {
  (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.displayList)();
});
addBtn.addEventListener('click', () => {
  (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.addList)(todoInput.value, false, _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].length + 1);
  (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.displayList)();
});
clearAll.addEventListener('click', () => {
  (0,_modules_clearAll_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.displayList)();
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=main.js.map