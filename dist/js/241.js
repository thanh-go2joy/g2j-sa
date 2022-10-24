(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[241],{

/***/ "./src/modules/bookings/revenue/details/index.js":
/*!*******************************************************!*\
  !*** ./src/modules/bookings/revenue/details/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('booking', {\n  name: 'revenueReportDetails',\n  path: '/hotel/sadmin/revenue-report-details/:sn',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(146)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/bookings/revenue/details/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/bookings/revenue/details/index.js?");

/***/ }),

/***/ "./src/modules/bookings/revenue/index.js":
/*!***********************************************!*\
  !*** ./src/modules/bookings/revenue/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details */ \"./src/modules/bookings/revenue/details/index.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/modules/bookings/revenue/list/index.js\");\n\n\n\n//# sourceURL=webpack:///./src/modules/bookings/revenue/index.js?");

/***/ }),

/***/ "./src/modules/bookings/revenue/list/index.js":
/*!****************************************************!*\
  !*** ./src/modules/bookings/revenue/list/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('booking', {\n  name: 'revenueReport',\n  path: '/hotel/sadmin/revenue-report',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/bookings/revenue/list/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/bookings/revenue/list/index.js?");

/***/ })

}]);