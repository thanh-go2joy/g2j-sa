(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[227],{

/***/ "./src/modules/marketing/notification/index.js":
/*!*****************************************************!*\
  !*** ./src/modules/marketing/notification/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _notification_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-list */ \"./src/modules/marketing/notification/notification-list/index.js\");\n/* harmony import */ var _notification_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-details */ \"./src/modules/marketing/notification/notification-details/index.js\");\n/* harmony import */ var _notification_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-create */ \"./src/modules/marketing/notification/notification-create/index.js\");\n/* harmony import */ var _notification_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-edit */ \"./src/modules/marketing/notification/notification-edit/index.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./src/modules/marketing/notification/index.js?");

/***/ }),

/***/ "./src/modules/marketing/notification/notification-create/index.js":
/*!*************************************************************************!*\
  !*** ./src/modules/marketing/notification/notification-create/index.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/notification-create',\n  name: 'notificationCreate',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(18), __webpack_require__.e(172)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/notification/notification-create/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/notification/notification-create/index.js?");

/***/ }),

/***/ "./src/modules/marketing/notification/notification-details/index.js":
/*!**************************************************************************!*\
  !*** ./src/modules/marketing/notification/notification-details/index.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/notification-detail/:sn/:type?',\n  name: 'notificationDetails',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 109).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/notification/notification-details/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/notification/notification-details/index.js?");

/***/ }),

/***/ "./src/modules/marketing/notification/notification-edit/index.js":
/*!***********************************************************************!*\
  !*** ./src/modules/marketing/notification/notification-edit/index.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/notification-edit/:sn',\n  name: 'notificationEdit',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(18), __webpack_require__.e(153)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/notification/notification-edit/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/notification/notification-edit/index.js?");

/***/ }),

/***/ "./src/modules/marketing/notification/notification-list/index.js":
/*!***********************************************************************!*\
  !*** ./src/modules/marketing/notification/notification-list/index.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/notification',\n  name: 'notification',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(173)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/notification/notification-list/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/notification/notification-list/index.js?");

/***/ })

}]);