(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[283],{

/***/ "./src/modules/users/index.js":
/*!************************************!*\
  !*** ./src/modules/users/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/const */ \"./src/utils/const.js\");\n\n\n\n\n\nvar initRouter = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addRoute({\n              name: 'user',\n              path: '/hotel/sadmin',\n              meta: {\n                requiresAuth: true\n              },\n              component: _utils_const__WEBPACK_IMPORTED_MODULE_3__[\"routerView\"]\n            });\n            _context.next = 3;\n            return __webpack_require__.e(/*! import() */ 240).then(__webpack_require__.bind(null, /*! ./user-mgt */ \"./src/modules/users/user-mgt/index.js\"));\n\n          case 3:\n            _context.next = 5;\n            return __webpack_require__.e(/*! import() */ 246).then(__webpack_require__.bind(null, /*! ./device-mgt */ \"./src/modules/users/device-mgt/index.js\"));\n\n          case 5:\n            _context.next = 7;\n            return __webpack_require__.e(/*! import() */ 247).then(__webpack_require__.bind(null, /*! ./first-booking */ \"./src/modules/users/first-booking/index.js\"));\n\n          case 7:\n            _context.next = 9;\n            return __webpack_require__.e(/*! import() */ 239).then(__webpack_require__.bind(null, /*! ./counseling-mgt */ \"./src/modules/users/counseling-mgt/index.js\"));\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function initRouter() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\ninitRouter();\n\n//# sourceURL=webpack:///./src/modules/users/index.js?");

/***/ })

}]);