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
/*! exports provided: Project, validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validate\", function() { return validate; });\nclass Project {\r\n  constructor (title) {\r\n    this.title = title\r\n  }\r\n\r\n  get title () {\r\n    return this._title\r\n  }\r\n\r\n  set title (value) {\r\n    this._title = value\r\n  }\r\n\r\n  addToStorage () {\r\n    const current = JSON.parse(localStorage.getItem('projects')) || []\r\n    current.push(this._title)\r\n    localStorage.setItem('projects', JSON.stringify(current))\r\n    localStorage.setItem(this._title, JSON.stringify([]))\r\n  }\r\n}\r\n\r\nconst validate = (val) => {\r\n  if (localStorage.getItem(val)) {\r\n    return false\r\n  }\r\n  return true\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\nconst updateTodoForm = () => {\r\n  const projectSelector = document.querySelector('#projects')\r\n  const projs = JSON.parse(localStorage.getItem('projects'))\r\n  while (projectSelector.firstChild) {\r\n    projectSelector.removeChild(projectSelector.firstChild)\r\n  }\r\n  for (let i = 0; i < projs.length; i++) {\r\n    const e = projs[i]\r\n    const option = document.createElement('option')\r\n    option.text = e\r\n    projectSelector.add(option)\r\n  }\r\n}\r\n\r\nclass Ui {\r\n  static listeners () {\r\n    if (Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"validate\"])('Default')) {\r\n      const def = new _project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"]('Default')\r\n      def.addToStorage()\r\n    }\r\n    updateTodoForm()\r\n    document.querySelector('#new-item').addEventListener('submit', (e) => {\r\n      e.preventDefault()\r\n      const title = document.querySelector('#title').value\r\n      const description = document.querySelector('#description').value\r\n      const dueDate = document.querySelector('#due-date').value\r\n      const priority = document.querySelector('#priority').value\r\n      const project = document.querySelector('#projects').value\r\n      const item = new _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority, project)\r\n\r\n      item.addToProject()\r\n      Ui.display()\r\n      document.querySelector('#new-item').reset()\r\n      document.querySelector('#title').focus()\r\n    })\r\n\r\n    document.querySelector('#new-project').addEventListener('submit', (e) => {\r\n      e.preventDefault()\r\n      const projTitle = document.querySelector('#proj-title').value\r\n      if (Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"validate\"])(projTitle)) {\r\n        const proj = new _project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"](projTitle)\r\n        proj.addToStorage()\r\n      }\r\n      updateTodoForm()\r\n      Ui.display()\r\n      document.querySelector('#new-project').reset()\r\n    })\r\n  }\r\n\r\n  static display () {\r\n    const listsContent = document.querySelector('#lists')\r\n\r\n    while (listsContent.firstChild) {\r\n      listsContent.removeChild(listsContent.firstChild)\r\n    }\r\n\r\n    const lists = JSON.parse(localStorage.getItem('projects'))\r\n    lists.forEach(list => {\r\n      const ctn = document.createElement('div')\r\n      ctn.classList.add('list')\r\n      const itemTitle = document.createElement('h2')\r\n      itemTitle.innerHTML = list\r\n      ctn.appendChild(itemTitle)\r\n\r\n      const items = JSON.parse(localStorage.getItem(list))\r\n      items.forEach((item, index) => {\r\n        const delBtn = document.createElement('button')\r\n        delBtn.classList.add('delete')\r\n        const properties = document.createElement('div')\r\n        properties.classList.add('item', 'notification', 'is-danger')\r\n        const title = document.createElement('p')\r\n        title.innerHTML = item[0]\r\n        const desc = document.createElement('p')\r\n        desc.innerHTML = item[1]\r\n        const due = document.createElement('p')\r\n        due.innerHTML = item[2]\r\n        const pri = document.createElement('p')\r\n        pri.innerHTML = item[3]\r\n\r\n        const descCtn = document.createElement('div')\r\n        descCtn.classList.add('details')\r\n\r\n        properties.appendChild(delBtn)\r\n        properties.appendChild(title)\r\n        properties.appendChild(descCtn)\r\n        descCtn.appendChild(desc)\r\n        descCtn.appendChild(due)\r\n        descCtn.appendChild(pri)\r\n        ctn.appendChild(properties)\r\n\r\n        delBtn.addEventListener('click', () => {\r\n          const thing = JSON.parse(localStorage.getItem(list))\r\n          thing.splice(index, 1)\r\n          localStorage.setItem(list, JSON.stringify(thing))\r\n          Ui.display()\r\n        })\r\n      })\r\n\r\n      listsContent.appendChild(ctn)\r\n    })\r\n    toggleDetails()\r\n  }\r\n}\r\n\r\nconst toggleDetails = () => {\r\n  const items = document.querySelectorAll('.item')\r\n  console.log(items)\r\n  items.forEach(item => {\r\n    item.addEventListener('click', e => {\r\n      e.preventDefault()\r\n      item.lastChild.classList.toggle('hidden')\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ui);\r\n\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });