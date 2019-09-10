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
eval("__webpack_require__.r(__webpack_exports__);\nclass Item {\n  constructor (title, description, dueDate, priority, project) {\n    this.title = title\n    this.description = description\n    this.dueDate = dueDate\n    this.priority = priority\n    this.project = project\n  }\n\n  addToProject () {\n    const current = JSON.parse(localStorage.getItem(this.project))\n    current.push([this.title, this.description, this.dueDate, this.priority])\n    localStorage.setItem(this.project, JSON.stringify(current))\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\n\n\n//# sourceURL=webpack:///./src/item.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: Project, validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validate\", function() { return validate; });\nclass Project {\n  constructor (title) {\n    this.title = title\n  }\n\n  get title () {\n    return this._title\n  }\n\n  set title (value) {\n    this._title = value\n  }\n\n  addToStorage () {\n    const current = JSON.parse(localStorage.getItem('projects')) || []\n    current.push(this._title)\n    localStorage.setItem('projects', JSON.stringify(current))\n    localStorage.setItem(this._title, JSON.stringify([]))\n  }\n}\n\nconst validate = (val) => {\n  if (localStorage.getItem(val)) {\n    return false\n  }\n  return true\n}\n\n\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst updateTodoForm = () => {\n  const projectSelector = document.querySelector('#projects')\n  const projs = JSON.parse(localStorage.getItem('projects'))\n  while (projectSelector.firstChild) {\n    projectSelector.removeChild(projectSelector.firstChild)\n  }\n  for (let i = 0; i < projs.length; i++) {\n    const e = projs[i]\n    const option = document.createElement('option')\n    option.text = e\n    projectSelector.add(option)\n  }\n}\n\nclass Ui {\n  static listeners () {\n    if (Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"validate\"])('Default')) {\n      const def = new _project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"]('Default')\n      def.addToStorage()\n    }\n    updateTodoForm()\n    document.querySelector('#new-item').addEventListener('submit', (e) => {\n      e.preventDefault()\n      const title = document.querySelector('#title').value\n      const description = document.querySelector('#description').value\n      const dueDate = document.querySelector('#due-date').value\n      const priority = document.querySelector('#priority').value\n      const project = document.querySelector('#projects').value\n      const item = new _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority, project)\n\n      item.addToProject()\n      Ui.display()\n      document.querySelector('#new-item').reset()\n      document.querySelector('#title').focus()\n    })\n\n    document.querySelector('#new-project').addEventListener('submit', (e) => {\n      e.preventDefault()\n      const projTitle = document.querySelector('#proj-title').value\n      if (Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"validate\"])(projTitle)) {\n        const proj = new _project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"](projTitle)\n        proj.addToStorage()\n      }\n      updateTodoForm()\n      Ui.display()\n    })\n  }\n\n  static display () {\n    const listsContent = document.querySelector('#lists')\n\n    while (listsContent.firstChild) {\n      listsContent.removeChild(listsContent.firstChild)\n    }\n\n    const lists = JSON.parse(localStorage.getItem('projects'))\n    lists.forEach(list => {\n      const ctn = document.createElement('div')\n      ctn.classList.add('list')\n      const itemTitle = document.createElement('h2')\n      itemTitle.innerHTML = list\n      ctn.appendChild(itemTitle)\n\n      const items = JSON.parse(localStorage.getItem(list))\n      items.forEach((item, index) => {\n        const delBtn = document.createElement('button')\n        delBtn.classList.add('delete')\n        const properties = document.createElement('div')\n        properties.classList.add('item', 'notification', 'is-danger')\n        const title = document.createElement('p')\n        title.innerHTML = item[0]\n        const desc = document.createElement('p')\n        desc.innerHTML = item[1]\n        const due = document.createElement('p')\n        due.innerHTML = item[2]\n        const pri = document.createElement('p')\n        pri.innerHTML = item[3]\n\n        const descCtn = document.createElement('div')\n        descCtn.classList.add('details')\n\n        properties.appendChild(delBtn)\n        properties.appendChild(title)\n        properties.appendChild(descCtn)\n        descCtn.appendChild(desc)\n        descCtn.appendChild(due)\n        descCtn.appendChild(pri)\n        ctn.appendChild(properties)\n\n        delBtn.addEventListener('click', () => {\n          // pull out and parse\n          // remove array element based on index\n          // repackage (stringify) and reset\n          console.log(localStorage.getItem(list))\n          console.log(index)\n          //console.log(localStorage.getItem(items[0]))\n          //localStorage.removeItem(list[index])\n        })\n      })\n\n      listsContent.appendChild(ctn)\n    })\n    toggleDetails()\n  }\n}\n\nconst toggleDetails = () => {\n  const items = document.querySelectorAll('.item')\n  console.log(items)\n  items.forEach(item => {\n    item.addEventListener('click', e => {\n      e.preventDefault()\n      item.lastChild.classList.toggle('hidden')\n    })\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ui);\n\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });