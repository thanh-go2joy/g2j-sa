(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[231],{

/***/ "./src/modules/bookings/sending-mail/index.js":
/*!****************************************************!*\
  !*** ./src/modules/bookings/sending-mail/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sending_mail_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sending-mail-list */ \"./src/modules/bookings/sending-mail/sending-mail-list/index.js\");\n/* harmony import */ var _sending_mail_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sending-mail-create */ \"./src/modules/bookings/sending-mail/sending-mail-create/index.js\");\n/* harmony import */ var _sending_mail_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sending-mail-details */ \"./src/modules/bookings/sending-mail/sending-mail-details/index.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/modules/bookings/sending-mail/index.js?");

/***/ }),

/***/ "./src/modules/bookings/sending-mail/sending-mail-create/index.js":
/*!************************************************************************!*\
  !*** ./src/modules/bookings/sending-mail/sending-mail-create/index.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/sending-mail-create',\n  name: 'sendingMailCreate',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(162)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/bookings/sending-mail/sending-mail-create/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/bookings/sending-mail/sending-mail-create/index.js?");

/***/ }),

/***/ "./src/modules/bookings/sending-mail/sending-mail-details/index.js":
/*!*************************************************************************!*\
  !*** ./src/modules/bookings/sending-mail/sending-mail-details/index.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('booking', {\n  path: '/hotel/sadmin/sending-mail-detail/:sn',\n  name: 'sendingMailDetails',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 79).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/bookings/sending-mail/sending-mail-details/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/bookings/sending-mail/sending-mail-details/index.js?");

/***/ }),

/***/ "./src/modules/bookings/sending-mail/sending-mail-list/index.js":
/*!**********************************************************************!*\
  !*** ./src/modules/bookings/sending-mail/sending-mail-list/index.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('booking', {\n  path: '/hotel/sadmin/sending-mail',\n  name: 'sendingMail',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 80).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/bookings/sending-mail/sending-mail-list/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/bookings/sending-mail/sending-mail-list/index.js?");

/***/ })

}]);