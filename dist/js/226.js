(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[226],{

/***/ "./src/modules/marketing/notice/index.js":
/*!***********************************************!*\
  !*** ./src/modules/marketing/notice/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _notice_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-list */ \"./src/modules/marketing/notice/notice-list/index.js\");\n/* harmony import */ var _notice_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-details */ \"./src/modules/marketing/notice/notice-details/index.js\");\n/* harmony import */ var _notice_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice-create */ \"./src/modules/marketing/notice/notice-create/index.js\");\n/* harmony import */ var _notice_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice-edit */ \"./src/modules/marketing/notice/notice-edit/index.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./src/modules/marketing/notice/index.js?");

/***/ }),

/***/ "./src/modules/marketing/notice/notice-create/index.js":
/*!*************************************************************!*\
  !*** ./src/modules/marketing/notice/notice-create/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/notice-create',\n  name: 'noticeCreate',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5), __webpack_require__.e(170)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/notice/notice-create/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/notice/notice-create/index.js?");

/***/ }),

/***/ "./src/modules/marketing/notice/notice-details/index.js":
/*!**************************************************************!*\
  !*** ./src/modules/marketing/notice/notice-details/index.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/notice-detail/:sn',\n  name: 'noticeDetails',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 108).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/notice/notice-details/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/notice/notice-details/index.js?");

/***/ }),

/***/ "./src/modules/marketing/notice/notice-edit/index.js":
/*!***********************************************************!*\
  !*** ./src/modules/marketing/notice/notice-edit/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/notice-edit/:sn',\n  name: 'noticeEdit',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5), __webpack_require__.e(171)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/notice/notice-edit/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/notice/notice-edit/index.js?");

/***/ }),

/***/ "./src/modules/marketing/notice/notice-list/index.js":
/*!***********************************************************!*\
  !*** ./src/modules/marketing/notice/notice-list/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/notice',\n  name: 'notice',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(152)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/notice/notice-list/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/notice/notice-list/index.js?");

/***/ })

}]);