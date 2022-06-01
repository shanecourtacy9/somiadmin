"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_financials_financials_module_ts"],{

/***/ 89017:
/*!*************************************************************!*\
  !*** ./src/app/cms/financials/financials-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinancialsRoutingModule": () => (/* binding */ FinancialsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    { path: '', redirectTo: 'provider' },
    { path: 'provider', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_financials_admin-transactions_admin-transactions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin-transactions/admin-transactions.module */ 82093)).then(m => m.AdminTransactionsModule) },
    { path: 'fleet', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_financials_fleet-wallets_fleet-wallets_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fleet-wallets/fleet-wallets.module */ 1345)).then(m => m.FleetWalletsModule) },
    { path: 'driver', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_financials_driver-wallets_driver-wallets_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./driver-wallets/driver-wallets.module */ 25433)).then(m => m.DriverWalletsModule) },
    { path: 'rider', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_financials_rider-wallets_rider-wallets_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rider-wallets/rider-wallets.module */ 8730)).then(m => m.RiderWalletsModule) }
];
class FinancialsRoutingModule {
}
FinancialsRoutingModule.ɵfac = function FinancialsRoutingModule_Factory(t) { return new (t || FinancialsRoutingModule)(); };
FinancialsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FinancialsRoutingModule });
FinancialsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FinancialsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 10940:
/*!*****************************************************!*\
  !*** ./src/app/cms/financials/financials.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinancialsModule": () => (/* binding */ FinancialsModule)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _financials_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./financials-routing.module */ 89017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class FinancialsModule {
}
FinancialsModule.ɵfac = function FinancialsModule_Factory(t) { return new (t || FinancialsModule)(); };
FinancialsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FinancialsModule });
FinancialsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _financials_routing_module__WEBPACK_IMPORTED_MODULE_1__.FinancialsRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FinancialsModule, { imports: [_ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _financials_routing_module__WEBPACK_IMPORTED_MODULE_1__.FinancialsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cms_financials_financials_module_ts.js.map