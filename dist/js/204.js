(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[204],{

/***/ "./src/modules/marketing/banner/banner-create/index.js":
/*!*************************************************************!*\
  !*** ./src/modules/marketing/banner/banner-create/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/banner-create',\n  name: 'bannerCreate',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(55)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/banner/banner-create/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/banner/banner-create/index.js?");

/***/ }),

/***/ "./src/modules/marketing/banner/banner-details/index.js":
/*!**************************************************************!*\
  !*** ./src/modules/marketing/banner/banner-details/index.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/banner-detail/:sn',\n  name: 'bannerDetails',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 102).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/banner/banner-details/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/banner/banner-details/index.js?");

/***/ }),

/***/ "./src/modules/marketing/banner/banner-edit/index.js":
/*!***********************************************************!*\
  !*** ./src/modules/marketing/banner/banner-edit/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/banner-edit/:sn',\n  name: 'bannerEdit',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(49)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/banner/banner-edit/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/banner/banner-edit/index.js?");

/***/ }),

/***/ "./src/modules/marketing/banner/banner-list/index.js":
/*!***********************************************************!*\
  !*** ./src/modules/marketing/banner/banner-list/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/banner',\n  name: 'banner',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(124)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/banner/banner-list/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/banner/banner-list/index.js?");

/***/ }),

/***/ "./src/modules/marketing/banner/banner-setting/index.js":
/*!**************************************************************!*\
  !*** ./src/modules/marketing/banner/banner-setting/index.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n\n_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addRoute('marketing', {\n  path: '/hotel/sadmin/banner-setting',\n  name: 'bannerSetting',\n  meta: {\n    requiresAuth: true\n  },\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(10), __webpack_require__.e(103)]).then(__webpack_require__.bind(null, /*! ./View.vue */ \"./src/modules/marketing/banner/banner-setting/View.vue\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/marketing/banner/banner-setting/index.js?");

/***/ }),

/***/ "./src/modules/marketing/banner/index.js":
/*!***********************************************!*\
  !*** ./src/modules/marketing/banner/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _banner_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner-list */ \"./src/modules/marketing/banner/banner-list/index.js\");\n/* harmony import */ var _banner_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner-details */ \"./src/modules/marketing/banner/banner-details/index.js\");\n/* harmony import */ var _banner_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner-create */ \"./src/modules/marketing/banner/banner-create/index.js\");\n/* harmony import */ var _banner_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner-edit */ \"./src/modules/marketing/banner/banner-edit/index.js\");\n/* harmony import */ var _banner_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner-setting */ \"./src/modules/marketing/banner/banner-setting/index.js\");\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/modules/marketing/banner/index.js?");

/***/ })

}]);