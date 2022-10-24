(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[243],{

/***/ "./src/modules/marketing/lucky-wheel/create-edit/index.js":
/*!****************************************************************!*\
  !*** ./src/modules/marketing/lucky-wheel/create-edit/index.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  name: 'createEditLuckyWheel',\n  path: 'hotel/sadmin/create-edit-lucky-wheel/:sn?',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(193)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/lucky-wheel/create-edit/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/lucky-wheel/create-edit/index.js?");

/***/ }),

/***/ "./src/modules/marketing/lucky-wheel/index.js":
/*!****************************************************!*\
  !*** ./src/modules/marketing/lucky-wheel/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/modules/marketing/lucky-wheel/list/index.js\");\n/* harmony import */ var _create_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-edit */ \"./src/modules/marketing/lucky-wheel/create-edit/index.js\");\n\n\n\n//# sourceURL=webpack:///./src/modules/marketing/lucky-wheel/index.js?");

/***/ }),

/***/ "./src/modules/marketing/lucky-wheel/list/index.js":
/*!*********************************************************!*\
  !*** ./src/modules/marketing/lucky-wheel/list/index.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/lucky-wheel',\n  name: 'luckyWheel',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 131).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/lucky-wheel/list/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/lucky-wheel/list/index.js?");

/***/ })

}]);