"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_management_management_module_ts"],{

/***/ 25562:
/*!*************************************************************!*\
  !*** ./src/app/cms/management/management-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementRoutingModule": () => (/* binding */ ManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    { path: '', redirectTo: 'settings' },
    { path: 'regions', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_management_management-region_management-region_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./management-region/management-region.module */ 22468)).then(x => x.ManagementRegionModule) },
    { path: 'services', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cms_management_management-services_management-services_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./management-services/management-services.module */ 47903)).then(x => x.ManagementServicesModule) },
    { path: 'review-parameters', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_management_management-review-parameters_management-review-parameters_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./management-review-parameters/management-review-parameters.module */ 47844)).then(x => x.ManagementReviewParametersModule) },
    { path: 'fleets', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_table-service_ts-src_app_country-codes_ts"), __webpack_require__.e("src_app_cms_management_management-fleets_management-fleets_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./management-fleets/management-fleets.module */ 1949)).then(x => x.ManagementFleetsModule) },
    { path: 'cars', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cms_management_management-cars_management-cars_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./management-cars/management-cars.module */ 63649)).then(x => x.ManagementCarsModule) },
    { path: 'payment-gateways', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cms_management_management-payment-gateways_management-payment-gateways_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./management-payment-gateways/management-payment-gateways.module */ 29294)).then(x => x.ManagementPaymentGatewaysModule) },
    { path: 'users', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_table-service_ts-src_app_country-codes_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cms_management_management-users_management-users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./management-users/management-users.module */ 91123)).then(x => x.ManagementUsersModule) },
    { path: 'user-roles', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cms_management_management-roles_management-roles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./management-roles/management-roles.module */ 22067)).then(x => x.ManagementRolesModule) },
    { path: 'settings', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_management_management-settings_management-settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./management-settings/management-settings.module */ 1707)).then(x => x.ManagementSettingsModule) }
];
class ManagementRoutingModule {
}
ManagementRoutingModule.ɵfac = function ManagementRoutingModule_Factory(t) { return new (t || ManagementRoutingModule)(); };
ManagementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManagementRoutingModule });
ManagementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 72565:
/*!*****************************************************!*\
  !*** ./src/app/cms/management/management.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementModule": () => (/* binding */ ManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management-routing.module */ 25562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ManagementModule {
}
ManagementModule.ɵfac = function ManagementModule_Factory(t) { return new (t || ManagementModule)(); };
ManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManagementModule });
ManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _management_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagementRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManagementModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _management_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagementRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cms_management_management_module_ts.js.map