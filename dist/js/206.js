(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[206],{

/***/ "./src/modules/marketing/popup/index.js":
/*!**********************************************!*\
  !*** ./src/modules/marketing/popup/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _popup_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-list */ \"./src/modules/marketing/popup/popup-list/index.js\");\n/* harmony import */ var _popup_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-create */ \"./src/modules/marketing/popup/popup-create/index.js\");\n/* harmony import */ var _popup_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup-details */ \"./src/modules/marketing/popup/popup-details/index.js\");\n/* harmony import */ var _popup_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-edit */ \"./src/modules/marketing/popup/popup-edit/index.js\");\n/* harmony import */ var _popup_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup-setting */ \"./src/modules/marketing/popup/popup-setting/index.js\");\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/modules/marketing/popup/index.js?");

/***/ }),

/***/ "./src/modules/marketing/popup/popup-create/index.js":
/*!***********************************************************!*\
  !*** ./src/modules/marketing/popup/popup-create/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/popup-create',\n  name: 'popupCreate',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(56)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/popup/popup-create/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/popup/popup-create/index.js?");

/***/ }),

/***/ "./src/modules/marketing/popup/popup-details/index.js":
/*!************************************************************!*\
  !*** ./src/modules/marketing/popup/popup-details/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/popup-detail/:sn',\n  name: 'popupDetails',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 110).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/popup/popup-details/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/popup/popup-details/index.js?");

/***/ }),

/***/ "./src/modules/marketing/popup/popup-edit/index.js":
/*!*********************************************************!*\
  !*** ./src/modules/marketing/popup/popup-edit/index.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/popup-edit/:sn',\n  name: 'popupEdit',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(50)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/popup/popup-edit/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/popup/popup-edit/index.js?");

/***/ }),

/***/ "./src/modules/marketing/popup/popup-list/index.js":
/*!*********************************************************!*\
  !*** ./src/modules/marketing/popup/popup-list/index.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/popup',\n  name: 'popup',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(125)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/popup/popup-list/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/popup/popup-list/index.js?");

/***/ }),

/***/ "./src/modules/marketing/popup/popup-setting/index.js":
/*!************************************************************!*\
  !*** ./src/modules/marketing/popup/popup-setting/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/popup-setting',\n  name: 'popupSetting',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(15), __webpack_require__.e(48)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/popup/popup-setting/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/popup/popup-setting/index.js?");

/***/ })

}]);