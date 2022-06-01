"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_marketing_marketing_module_ts"],{

/***/ 15215:
/*!***********************************************************!*\
  !*** ./src/app/cms/marketing/marketing-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarketingRoutingModule": () => (/* binding */ MarketingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    { path: '', redirectTo: 'coupons' },
    { path: 'coupons', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cms_marketing_coupons_coupons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./coupons/coupons.module */ 21682)).then(m => m.CouponsModule) },
    { path: 'announcements', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cms_marketing_announcements_announcements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./announcements/announcements.module */ 47652)).then(m => m.AnnouncementsModule) }
];
class MarketingRoutingModule {
}
MarketingRoutingModule.ɵfac = function MarketingRoutingModule_Factory(t) { return new (t || MarketingRoutingModule)(); };
MarketingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MarketingRoutingModule });
MarketingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MarketingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 8466:
/*!***************************************************!*\
  !*** ./src/app/cms/marketing/marketing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarketingModule": () => (/* binding */ MarketingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _marketing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marketing-routing.module */ 15215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class MarketingModule {
}
MarketingModule.ɵfac = function MarketingModule_Factory(t) { return new (t || MarketingModule)(); };
MarketingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MarketingModule });
MarketingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _marketing_routing_module__WEBPACK_IMPORTED_MODULE_0__.MarketingRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MarketingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _marketing_routing_module__WEBPACK_IMPORTED_MODULE_0__.MarketingRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cms_marketing_marketing_module_ts.js.map