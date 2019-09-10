/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\n\r\n_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listeners()\r\n_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].display()\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Item {\r\n  constructor (title, description, dueDate, priority, project) {\r\n    this.title = title\r\n    this.description = description\r\n    this.dueDate = dueDate\r\n    this.priority = priority\r\n    this.project = project\r\n  }\r\n\r\n  logStuff () {\r\n    console.log(`${this.title}, ${this.description}, ${this.dueDate}, ${this.priority}`)\r\n  }\r\n\r\n  addToProject () {\r\n    const current = JSON.parse(localStorage.getItem(this.project))\r\n    current.push([this.title, this.description, this.dueDate, this.priority])\r\n    localStorage.setItem(this.project, JSON.stringify(current))\r\n    console.log(this.project)\r\n    console.log(current)\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\r\n\n\n//# sourceURL=webpack:///./src/item.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nclass Project {\r\n  constructor (title) {\r\n    this.title = title\r\n    this.members = []\r\n  }\r\n\r\n  get title () {\r\n    return this._title\r\n  }\r\n\r\n  set title (value) {\r\n    if (localStorage.getItem(value)) {\r\n      return\r\n    }\r\n    this._title = value\r\n    const current = JSON.parse(localStorage.getItem('projects')) || []\r\n    current.push(value)\r\n    localStorage.setItem('projects', JSON.stringify(current))\r\n    localStorage.setItem(value, JSON.stringify([]))\r\n  }\r\n\r\n  logStuff () {\r\n    console.log(this.title)\r\n    console.log(this.members)\r\n  }\r\n\r\n  addItem (item) {\r\n    this.members.push(item)\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\r\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\nconst updateTodoForm = () => {\r\n  const projectSelector = document.querySelector('#projects')\r\n  const projs = JSON.parse(localStorage.getItem('projects'))\r\n  while (projectSelector.firstChild) {\r\n    projectSelector.removeChild(projectSelector.firstChild)\r\n  }\r\n  for (let i = 0; i < projs.length; i++) {\r\n    const e = projs[i]\r\n    const option = document.createElement('option')\r\n    option.text = e\r\n    projectSelector.add(option)\r\n  }\r\n}\r\n\r\nclass Ui {\r\n  static listeners () {\r\n    const def = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Default')\r\n    updateTodoForm()\r\n    document.querySelector('#new-item').addEventListener('submit', (e) => {\r\n      e.preventDefault()\r\n      const title = document.querySelector('#title').value\r\n      const description = document.querySelector('#description').value\r\n      const dueDate = document.querySelector('#due-date').value\r\n      const priority = document.querySelector('#priority').value\r\n      const project = document.querySelector('#projects').value\r\n      const item = new _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority, project)\r\n\r\n      item.addToProject()\r\n      Ui.display()\r\n      document.querySelector('#new-item').reset()\r\n      document.querySelector('#title').focus()\r\n    })\r\n\r\n    document.querySelector('#new-project').addEventListener('submit', (e) => {\r\n      e.preventDefault()\r\n      const projTitle = document.querySelector('#proj-title').value\r\n      const proj = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projTitle)\r\n      updateTodoForm()\r\n      Ui.display()\r\n    })\r\n  }\r\n\r\n  static display () {\r\n    const lists = document.querySelector('#lists')\r\n    // clear\r\n    while (lists.firstChild) {\r\n      lists.removeChild(lists.firstChild)\r\n    }\r\n    // loop through localStorage(Projects)\r\n    // set up a div with the project name\r\n    const projs = JSON.parse(localStorage.getItem('projects'))\r\n    projs.forEach(proj => {\r\n      const a = document.createElement('h2')\r\n      const b = document.createElement('h3')\r\n      a.innerHTML = proj\r\n      if (localStorage) {\r\n      }\r\n      lists.appendChild(a)\r\n    })\r\n    // if we find a key in local storage with that project name, loop through its members and display info\r\n\r\n    const item = document.createElement('div')\r\n    item.innerHTML = 'hello world'\r\n    lists.appendChild(item)\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ui);\r\n\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });