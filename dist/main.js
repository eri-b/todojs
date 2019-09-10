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
eval("__webpack_require__.r(__webpack_exports__);\nclass Item {\r\n  constructor (title, description, dueDate, priority, project) {\r\n    this.title = title\r\n    this.description = description\r\n    this.dueDate = dueDate\r\n    this.priority = priority\r\n    this.project = project\r\n  }\r\n\r\n  addToProject () {\r\n    const current = JSON.parse(localStorage.getItem(this.project))\r\n    current.push([this.title, this.description, this.dueDate, this.priority])\r\n    localStorage.setItem(this.project, JSON.stringify(current))\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\r\n\n\n//# sourceURL=webpack:///./src/item.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Project {\r\n  constructor (title) {\r\n    this.title = title\r\n  }\r\n\r\n  get title () {\r\n    return this._title\r\n  }\r\n\r\n  set title (value) {\r\n    if (localStorage.getItem(value)) {\r\n      return\r\n    }\r\n    this._title = value\r\n  }\r\n\r\n  logStuff () {\r\n    console.log(this.title)\r\n  }\r\n\r\n  addToStorage () {\r\n    const current = JSON.parse(localStorage.getItem('projects')) || []\r\n    current.push(this._title)\r\n    localStorage.setItem('projects', JSON.stringify(current))\r\n    localStorage.setItem(this._title, JSON.stringify([]))\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\r\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst updateTodoForm = () => {\n  const projectSelector = document.querySelector('#projects')\n  const projs = JSON.parse(localStorage.getItem('projects'))\n  while (projectSelector.firstChild) {\n    projectSelector.removeChild(projectSelector.firstChild)\n  }\n  for (let i = 0; i < projs.length; i++) {\n    const e = projs[i]\n    const option = document.createElement('option')\n    option.text = e\n    projectSelector.add(option)\n  }\n  hideDetails()\n}\n\nclass Ui {\n  static listeners () {\n    const def = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Default')\n    def.addToStorage()\n    updateTodoForm()\n    document.querySelector('#new-item').addEventListener('submit', (e) => {\n      e.preventDefault()\n      const title = document.querySelector('#title').value\n      const description = document.querySelector('#description').value\n      const dueDate = document.querySelector('#due-date').value\n      const priority = document.querySelector('#priority').value\n      const project = document.querySelector('#projects').value\n      const item = new _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority, project)\n\n      item.addToProject()\n      Ui.display()\n      document.querySelector('#new-item').reset()\n      document.querySelector('#title').focus()\n    })\n\n    document.querySelector('#new-project').addEventListener('submit', (e) => {\n      e.preventDefault()\n      const projTitle = document.querySelector('#proj-title').value\n      const proj = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projTitle)\n      proj.addToStorage()\n      updateTodoForm()\n      Ui.display()\n    })\n  }\n\n  static display () {\n    const lists = document.querySelector('#lists')\n\n    while (lists.firstChild) {\n      lists.removeChild(lists.firstChild)\n    }\n\n    const projs = JSON.parse(localStorage.getItem('projects'))\n    projs.forEach(proj => {\n      const ctn = document.createElement('div')\n      ctn.classList.add('list')\n      const projTitle = document.createElement('h2')\n      projTitle.innerHTML = proj\n      ctn.appendChild(projTitle)\n\n      const props = JSON.parse(localStorage.getItem(proj))\n\n      props.forEach(prop => {\n        const properties = document.createElement('div')\n        properties.classList.add('item')\n        const title = document.createElement('p')\n        title.innerHTML = prop[0]\n        const desc = document.createElement('p')\n        desc.innerHTML = prop[1]\n        const due = document.createElement('p')\n        due.innerHTML = prop[2]\n        const pri = document.createElement('p')\n        pri.innerHTML = prop[3]\n\n        const descCtn = document.createElement('div')\n        descCtn.classList.add('details')\n\n        properties.appendChild(title)\n        properties.appendChild(descCtn)\n        descCtn.appendChild(desc)\n        descCtn.appendChild(due)\n        descCtn.appendChild(pri)\n\n        ctn.appendChild(properties)\n      })\n\n      lists.appendChild(ctn)\n    })\n  }\n}\n\nconst hideDetails = () => {\n  const items = document.querySelectorAll('.item')\n  items.forEach(item => {\n    item.addEventListener('click', e => {\n      e.preventDefault()\n      item.classList.toggle('hidden')\n    })\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ui);\n\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });