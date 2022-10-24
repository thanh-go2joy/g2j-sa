(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[202],{

/***/ "./src/modules/home-display/category/details/index.js":
/*!************************************************************!*\
  !*** ./src/modules/home-display/category/details/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute({\n  path: '/hotel/sadmin/dashboard-details/:sn',\n  name: 'categoryDetails',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 69).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/home-display/category/details/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/home-display/category/details/index.js?");

/***/ }),

/***/ "./src/modules/home-display/category/edit/index.js":
/*!*********************************************************!*\
  !*** ./src/modules/home-display/category/edit/index.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute({\n  path: '/hotel/sadmin/dashboard-edit/:sn',\n  name: 'categoryEdit',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(143)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/home-display/category/edit/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/home-display/category/edit/index.js?");

/***/ }),

/***/ "./src/modules/home-display/category/index.js":
/*!****************************************************!*\
  !*** ./src/modules/home-display/category/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/modules/home-display/category/list/index.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/modules/home-display/category/edit/index.js\");\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details */ \"./src/modules/home-display/category/details/index.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/modules/home-display/category/index.js?");

/***/ }),

/***/ "./src/modules/home-display/category/list/index.js":
/*!*********************************************************!*\
  !*** ./src/modules/home-display/category/list/index.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute({\n  path: '/hotel/sadmin/dashboard',\n  name: 'home',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 81).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/home-display/category/list/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/home-display/category/list/index.js?");

/***/ }),

/***/ "./src/modules/home-display/collection/index.js":
/*!******************************************************!*\
  !*** ./src/modules/home-display/collection/index.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar initRouter = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return __webpack_require__.e(/*! import() */ 259).then(__webpack_require__.bind(null, /*! ./list */ \"./src/modules/home-display/collection/list/index.js\"));\n\n          case 2:\n            _context.next = 4;\n            return __webpack_require__.e(/*! import() */ 257).then(__webpack_require__.bind(null, /*! ./details */ \"./src/modules/home-display/collection/details/index.js\"));\n\n          case 4:\n            _context.next = 6;\n            return __webpack_require__.e(/*! import() */ 258).then(__webpack_require__.bind(null, /*! ./edit */ \"./src/modules/home-display/collection/edit/index.js\"));\n\n          case 6:\n            _context.next = 8;\n            return __webpack_require__.e(/*! import() */ 255).then(__webpack_require__.bind(null, /*! ./apply-hotel */ \"./src/modules/home-display/collection/apply-hotel/index.js\"));\n\n          case 8:\n            _context.next = 10;\n            return __webpack_require__.e(/*! import() */ 256).then(__webpack_require__.bind(null, /*! ./create */ \"./src/modules/home-display/collection/create/index.js\"));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function initRouter() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\ninitRouter();\n\n//# sourceURL=webpack:///./src/modules/home-display/collection/index.js?");

/***/ }),

/***/ "./src/modules/home-display/index.js":
/*!*******************************************!*\
  !*** ./src/modules/home-display/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/modules/home-display/category/index.js\");\n/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection */ \"./src/modules/home-display/collection/index.js\");\n\n\n\n//# sourceURL=webpack:///./src/modules/home-display/index.js?");

/***/ })

}]);