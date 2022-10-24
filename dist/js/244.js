(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[244],{

/***/ "./src/modules/marketing/sms/create/index.js":
/*!***************************************************!*\
  !*** ./src/modules/marketing/sms/create/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  name: 'smsCreate',\n  path: '/hotel/sadmin/sms-create',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(40)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/sms/create/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/sms/create/index.js?");

/***/ }),

/***/ "./src/modules/marketing/sms/index.js":
/*!********************************************!*\
  !*** ./src/modules/marketing/sms/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/modules/marketing/sms/list/index.js\");\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ \"./src/modules/marketing/sms/create/index.js\");\n\n\n\n//# sourceURL=webpack:///./src/modules/marketing/sms/index.js?");

/***/ }),

/***/ "./src/modules/marketing/sms/list/index.js":
/*!*************************************************!*\
  !*** ./src/modules/marketing/sms/list/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  name: 'sms',\n  path: '/hotel/sadmin/sms',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 114).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/sms/list/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/sms/list/index.js?");

/***/ })

}]);