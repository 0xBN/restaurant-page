/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/page-load */ \"./src/js/page-load.js\");\n/* harmony import */ var _js_helpful_scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/helpful-scripts */ \"./src/js/helpful-scripts.js\");\n/* harmony import */ var _js_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/tabs */ \"./src/js/tabs.js\");\n/* harmony import */ var _js_contact_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/contact-load */ \"./src/js/contact-load.js\");\n/* harmony import */ var _js_menu_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/menu-load */ \"./src/js/menu-load.js\");\n\n\n\n\n\n\nconst startSite = (function () {\n  (0,_js_tabs__WEBPACK_IMPORTED_MODULE_2__.createTabs)();\n  (0,_js_page_load__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\n})();\n\nfunction switchTab() {\n  let el = window.event.target.id;\n  if (![\"Home\", \"Menu\", \"Contact\"].includes(el)) {\n    return;\n  }\n  (0,_js_helpful_scripts__WEBPACK_IMPORTED_MODULE_1__.clearContainer)();\n  el === \"Home\"\n    ? (0,_js_page_load__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)()\n    : el === \"Menu\"\n    ? (0,_js_menu_load__WEBPACK_IMPORTED_MODULE_4__.loadMenuPage)()\n    : el === \"Contact\"\n    ? (0,_js_contact_load__WEBPACK_IMPORTED_MODULE_3__.loadContactPage)()\n    : null;\n}\n\ndocument.addEventListener(\"click\", switchTab);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/js/contact-load.js":
/*!********************************!*\
  !*** ./src/js/contact-load.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\n/* harmony import */ var _helpful_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpful-scripts */ \"./src/js/helpful-scripts.js\");\n\n\nfunction loadContactPage() {\n  console.log(\"loading contact Page\");\n\n  let content = document.querySelector(\"#content\");\n\n  let title = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\"h1\", \"class\", \"contact-title\", \"Contact Us\");\n\n  let description = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\n    \"p\",\n    \"class\",\n    \"contact-description\",\n    \"We love to hear from our customers!\"\n  );\n\n  let heroImage = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\n    \"img\",\n    \"class\",\n    \"restaurant-image\",\n    null,\n    \"src\",\n    \"https://www.aquariumnexus.com/wp-content/uploads/2021/10/koi-fish-types.jpg\"\n  );\n\n  let contactInformation = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\n    \"p\",\n    \"class\",\n    \"contact-info\",\n    \"Call us at 123.456.7890 or write to us at inquiry@kimono.com\"\n  );\n\n  let contactForm = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\"form\", \"class\", \"contact-form\");\n\n  let contents = [title, description, heroImage, contactInformation];\n\n  contents.forEach(function (item) {\n    content.append(item);\n  });\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/contact-load.js?");

/***/ }),

/***/ "./src/js/helpful-scripts.js":
/*!***********************************!*\
  !*** ./src/js/helpful-scripts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonListeningTest\": () => (/* binding */ buttonListeningTest),\n/* harmony export */   \"clearContainer\": () => (/* binding */ clearContainer),\n/* harmony export */   \"generateDiv\": () => (/* binding */ generateDiv)\n/* harmony export */ });\nfunction generateDiv(\n  tag,\n  attrType1,\n  attrValue1,\n  html,\n  attrType2 = null,\n  attrValue2 = null\n) {\n  let x = document.createElement(tag);\n  x.setAttribute(attrType1, attrValue1);\n  if (!attrValue2 == \"\") {\n    x.setAttribute(attrType2, attrValue2);\n  }\n  x.innerHTML = html;\n  return x;\n}\n\nfunction clearContainer() {\n  document.querySelector(\"#content\").innerHTML = null;\n}\n\nfunction buttonListeningTest() {\n  console.log(window.event.target.id);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/helpful-scripts.js?");

/***/ }),

/***/ "./src/js/menu-load.js":
/*!*****************************!*\
  !*** ./src/js/menu-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n/* harmony import */ var _helpful_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpful-scripts */ \"./src/js/helpful-scripts.js\");\n\n\nfunction loadMenuPage() {\n  console.log(\"loading menu Page\");\n\n  let content = document.querySelector(\"#content\");\n\n  let title = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\"h1\", \"class\", \"menu-title\", \"Our Menu\");\n\n  let description = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\n    \"p\",\n    \"class\",\n    \"menu-description\",\n    \"The finest and most exquisite ingredients\"\n  );\n\n  let heroImage = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\n    \"img\",\n    \"class\",\n    \"restaurant-image\",\n    null,\n    \"src\",\n    \"https://images.squarespace-cdn.com/content/v1/56bab4d47da24fa6a40889e4/1460576681829-5DBKF50IVNFTFXIZL8PE/Background_0004_Tuna.jpg?format=2500w\"\n  );\n\n  let menuName = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\"h2\", \"class\", \"menu-name\", \"Prefix Menu\");\n\n  let contents = [title, description, heroImage, menuName];\n\n  let menuItems = [\n    [\"Ankimo\", \"hiramasa, monkfish liver, pearl onion\"],\n    [\"Zuwagani\", \"snow crab, kani miso, tozazu jelly\"],\n    [\"AKAMI\", \"bluefin lean tuna, mountain yam\"],\n    [\"SASHIMI\", \"seasonal selection of sashimi\"],\n    [\"KUSSHI OYSTER\", \"sudachi mignonette, smoked trout roe\"],\n  ];\n\n  menuItems.forEach(function (item) {\n    let itemName = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\"h2\", \"class\", \"item-name\", item[0]);\n    let itemDescription = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\n      \"p\",\n      \"class\",\n      \"item-description\",\n      item[1]\n    );\n\n    contents.push(itemName);\n    contents.push(itemDescription);\n  });\n\n  contents.forEach(function (item) {\n    content.append(item);\n  });\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/menu-load.js?");

/***/ }),

/***/ "./src/js/page-load.js":
/*!*****************************!*\
  !*** ./src/js/page-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _helpful_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpful-scripts */ \"./src/js/helpful-scripts.js\");\n\n\nfunction loadHomePage() {\n  let content = document.querySelector(\"#content\");\n\n  let title = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\"h1\", \"class\", \"hero-title\", \"Omakase Kimono\");\n\n  let description = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\n    \"p\",\n    \"class\",\n    \"hero-copy\",\n    \"The Taste to Die For\"\n  );\n\n  let heroImage = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\n    \"img\",\n    \"class\",\n    \"restaurant-image\",\n    null,\n    \"src\",\n    \"https://infatuation.imgix.net/media/images/guides/dark-chicago-restaurant-power-rankings/Izakaya_sandynoto.jpg\"\n  );\n\n  let location = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\n    \"p\",\n    \"class\",\n    \"location\",\n    \"Located @ 123 Fake Street, Chicago IL\"\n  );\n  let hours = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\n    \"p\",\n    \"class\",\n    \"hours\",\n    \"Thurs - Sunday, seating @ 4:45 p.m.\"\n  );\n\n  let contents = [title, description, heroImage, location, hours];\n\n  contents.forEach(function (item) {\n    content.append(item);\n  });\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/page-load.js?");

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTabs\": () => (/* binding */ createTabs)\n/* harmony export */ });\n/* harmony import */ var _helpful_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpful-scripts */ \"./src/js/helpful-scripts.js\");\n\n\nfunction createTabs() {\n  let tag;\n  let attrType1;\n  let attrValue1;\n  let html;\n  let attrType2;\n  let attrValue2;\n  let content = document.querySelector(\"#tabs\");\n\n  console.log(\"tabs created!\");\n  let homeBtn = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\"button\", \"id\", \"Home\", \"Home\");\n  let menuBtn = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\"button\", \"id\", \"Menu\", \"Menu\");\n  let contactBtn = (0,_helpful_scripts__WEBPACK_IMPORTED_MODULE_0__.generateDiv)(\"button\", \"id\", \"Contact\", \"Contact\");\n\n  content.appendChild(homeBtn);\n  content.appendChild(menuBtn);\n  content.appendChild(contactBtn);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/tabs.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;