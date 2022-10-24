(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[240],{

/***/ "./src/modules/users/user-mgt/details/index.js":
/*!*****************************************************!*\
  !*** ./src/modules/users/user-mgt/details/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('user', {\n  name: 'userDetails',\n  path: '/hotel/sadmin/user-details/:sn',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(26), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/users/user-mgt/details/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/users/user-mgt/details/index.js?");

/***/ }),

/***/ "./src/modules/users/user-mgt/edit/index.js":
/*!**************************************************!*\
  !*** ./src/modules/users/user-mgt/edit/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('user', {\n  name: 'userEdit',\n  path: '/hotel/sadmin/user-edit/:sn',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(26), __webpack_require__.e(199)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/users/user-mgt/edit/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/users/user-mgt/edit/index.js?");

/***/ }),

/***/ "./src/modules/users/user-mgt/index.js":
/*!*********************************************!*\
  !*** ./src/modules/users/user-mgt/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details */ \"./src/modules/users/user-mgt/details/index.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/modules/users/user-mgt/list/index.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ \"./src/modules/users/user-mgt/edit/index.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/modules/users/user-mgt/index.js?");

/***/ }),

/***/ "./src/modules/users/user-mgt/list/index.js":
/*!**************************************************!*\
  !*** ./src/modules/users/user-mgt/list/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('user', {\n  name: 'userMgt',\n  path: '/hotel/sadmin/users',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(157)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/users/user-mgt/list/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/users/user-mgt/list/index.js?");

/***/ })

}]);