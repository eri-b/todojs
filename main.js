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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listeners()\n_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].display()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Item {\n  constructor (title, description, dueDate, priority, project) {\n    this.title = title\n    this.description = description\n    this.dueDate = dueDate\n    this.priority = priority\n    this.project = project\n  }\n\n  logStuff () {\n    console.log(`${this.title}, ${this.description}, ${this.dueDate}, ${this.priority}`)\n  }\n\n  addToProject(){\n    const current = JSON.parse(localStorage.getItem(this.project))\n    current.push([this.title, this.description, this.dueDate, this.priority])\n    localStorage.setItem(this.project, JSON.stringify(current))\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\n\n\n//# sourceURL=webpack:///./src/item.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Project {\n  constructor () {\n\n  }\n\n  get title () {\n    return this._title\n  }\n\n  set title (value) {\n    if (localStorage.getItem(value)) {\n      return\n    }\n    this._title = value\n    const current = JSON.parse(localStorage.getItem('projects')) || []\n    current.push(value)\n    localStorage.setItem('projects', JSON.stringify(current))\n    localStorage.setItem(value, JSON.stringify([]))\n  }\n\n  logStuff () {\n    console.log(this.title)\n    console.log(this.members)\n  }\n\n  addItem (item) {\n\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst updateTodoForm = () => {\n  const projectSelector = document.querySelector('#projects')\n  const projs = JSON.parse(localStorage.getItem('projects'))\n  while (projectSelector.firstChild) {\n    projectSelector.removeChild(projectSelector.firstChild)\n  }\n  for (let i = 0; i < projs.length; i++) {\n    const e = projs[i]\n    const option = document.createElement('option')\n    option.text = e\n    projectSelector.add(option)\n  }\n}\n\n\n\nclass Ui {\n  static listeners () {\n    const def = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Default')\n    updateTodoForm()\n    document.querySelector('#new-item').addEventListener('submit', (e) => {\n      e.preventDefault()\n      const title = document.querySelector('#title').value\n      const description = document.querySelector('#description').value\n      const dueDate = document.querySelector('#due-date').value\n      const priority = document.querySelector('#priority').value\n      const project = document.querySelector('#projects').value\n      const item = new _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority, project)\n      item.addToProject()\n      Ui.display()\n      document.querySelector('#new-item').reset()\n      document.querySelector('#title').focus()\n    })\n\n    document.querySelector('#new-project').addEventListener('submit', (e) => {\n      e.preventDefault()\n      const projTitle = document.querySelector('#proj-title').value\n      const proj = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projTitle)\n      updateTodoForm()\n      Ui.display()\n    })\n  }\n\n  static display(){\n    const lists = document.querySelector('#lists')\n    //clear\n    //loop through localStorage(Projects)\n    // set up a div with the project name\n    // if we find a key in local storage with that project name, loop through its members and display info\n\n\n    const item = document.createElement('div')\n    item.innerHTML = \"hello world\"\n    lists.appendChild(item)\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ui);\n\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });