(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[269],{

/***/ "./src/modules/marketing/index.js":
/*!****************************************!*\
  !*** ./src/modules/marketing/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/const */ \"./src/utils/const.js\");\n\n\n\n\n\nvar initRouter = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addRoute({\n              name: 'marketing',\n              path: '/hotel/sadmin',\n              redirect: '/hotel/sadmin/promotion',\n              meta: {\n                requiresAuth: true\n              },\n              component: _utils_const__WEBPACK_IMPORTED_MODULE_3__[\"routerView\"]\n            });\n            _context.next = 3;\n            return __webpack_require__.e(/*! import() */ 226).then(__webpack_require__.bind(null, /*! ./notice */ \"./src/modules/marketing/notice/index.js\"));\n\n          case 3:\n            _context.next = 5;\n            return __webpack_require__.e(/*! import() */ 227).then(__webpack_require__.bind(null, /*! ./notification */ \"./src/modules/marketing/notification/index.js\"));\n\n          case 5:\n            _context.next = 7;\n            return __webpack_require__.e(/*! import() */ 195).then(__webpack_require__.bind(null, /*! ./invite-friend */ \"./src/modules/marketing/invite-friend/index.js\"));\n\n          case 7:\n            _context.next = 9;\n            return __webpack_require__.e(/*! import() */ 123).then(__webpack_require__.bind(null, /*! ./promotion */ \"./src/modules/marketing/promotion/index.js\"));\n\n          case 9:\n            _context.next = 11;\n            return __webpack_require__.e(/*! import() */ 235).then(__webpack_require__.bind(null, /*! ./article */ \"./src/modules/marketing/article/index.js\"));\n\n          case 11:\n            _context.next = 13;\n            return __webpack_require__.e(/*! import() */ 225).then(__webpack_require__.bind(null, /*! ./article-home */ \"./src/modules/marketing/article-home/index.js\"));\n\n          case 13:\n            _context.next = 15;\n            return __webpack_require__.e(/*! import() */ 234).then(__webpack_require__.bind(null, /*! ./article-category */ \"./src/modules/marketing/article-category/index.js\"));\n\n          case 15:\n            _context.next = 17;\n            return __webpack_require__.e(/*! import() */ 244).then(__webpack_require__.bind(null, /*! ./sms */ \"./src/modules/marketing/sms/index.js\"));\n\n          case 17:\n            _context.next = 19;\n            return __webpack_require__.e(/*! import() */ 205).then(__webpack_require__.bind(null, /*! ./crm */ \"./src/modules/marketing/crm/index.js\"));\n\n          case 19:\n            _context.next = 21;\n            return __webpack_require__.e(/*! import() */ 204).then(__webpack_require__.bind(null, /*! ./banner */ \"./src/modules/marketing/banner/index.js\"));\n\n          case 21:\n            _context.next = 23;\n            return __webpack_require__.e(/*! import() */ 206).then(__webpack_require__.bind(null, /*! ./popup */ \"./src/modules/marketing/popup/index.js\"));\n\n          case 23:\n            _context.next = 25;\n            return __webpack_require__.e(/*! import() */ 228).then(__webpack_require__.bind(null, /*! ./pgpb */ \"./src/modules/marketing/pgpb/index.js\"));\n\n          case 25:\n            _context.next = 27;\n            return __webpack_require__.e(/*! import() */ 243).then(__webpack_require__.bind(null, /*! ./lucky-wheel */ \"./src/modules/marketing/lucky-wheel/index.js\"));\n\n          case 27:\n            _context.next = 29;\n            return __webpack_require__.e(/*! import() */ 229).then(__webpack_require__.bind(null, /*! ./referral */ \"./src/modules/marketing/referral/index.js\"));\n\n          case 29:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function initRouter() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\ninitRouter();\n\n//# sourceURL=webpack:///./src/modules/marketing/index.js?");

/***/ })

}]);