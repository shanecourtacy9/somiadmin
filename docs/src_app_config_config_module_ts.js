"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_config_config_module_ts"],{

/***/ 40437:
/*!*******************************************!*\
  !*** ./src/app/config/config-resolver.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigResolver": () => (/* binding */ ConfigResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class ConfigResolver {
    constructor(currentConfigGql) {
        this.currentConfigGql = currentConfigGql;
    }
    resolve(route, state) {
        return this.currentConfigGql.fetch({});
    }
}
ConfigResolver.ɵfac = function ConfigResolver_Factory(t) { return new (t || ConfigResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CurrentConfigurationGQL)); };
ConfigResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigResolver, factory: ConfigResolver.ɵfac });


/***/ }),

/***/ 85768:
/*!*************************************************!*\
  !*** ./src/app/config/config-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigRoutingModule": () => (/* binding */ ConfigRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.component */ 77644);
/* harmony import */ var _config_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.guard */ 65659);
/* harmony import */ var _config_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-resolver */ 40437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: '', component: _config_component__WEBPACK_IMPORTED_MODULE_0__.ConfigComponent, canActivate: [_config_guard__WEBPACK_IMPORTED_MODULE_1__.ConfigGuard], resolve: { config: _config_resolver__WEBPACK_IMPORTED_MODULE_2__.ConfigResolver } }
];
class ConfigRoutingModule {
}
ConfigRoutingModule.ɵfac = function ConfigRoutingModule_Factory(t) { return new (t || ConfigRoutingModule)(); };
ConfigRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ConfigRoutingModule });
ConfigRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_config_guard__WEBPACK_IMPORTED_MODULE_1__.ConfigGuard, _config_resolver__WEBPACK_IMPORTED_MODULE_2__.ConfigResolver], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ConfigRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 77644:
/*!********************************************!*\
  !*** ./src/app/config/config.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigComponent": () => (/* binding */ ConfigComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ 25788);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/steps */ 38676);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/upload */ 74483);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/result */ 17170);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/select */ 80517);
























const _c0 = ["tplContent"];
const _c1 = ["tplFooter"];
function ConfigComponent_nz_steps_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-steps", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nz-step", 7)(2, "nz-step", 8)(3, "nz-step", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzCurrent", ctx_r0.currentStep);
} }
function ConfigComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ConfigComponent_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.currentConfig.currentConfiguration.purchaseCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.currentConfig.currentConfiguration.purchaseCode);
} }
function ConfigComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ConfigComponent_div_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.currentConfig.currentConfiguration.backendMapsAPIKey = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ConfigComponent_div_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.currentConfig.currentConfiguration.adminPanelAPIKey = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.currentConfig.currentConfiguration.backendMapsAPIKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.currentConfig.currentConfiguration.adminPanelAPIKey);
} }
function ConfigComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "nz-upload", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzChange", function ConfigComponent_div_3_Template_nz_upload_nzChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.handleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Firebase Project Private Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Upload private key json file received from firebase project under Service Account and by clicking on the `Generate Private Key` button. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzAction", ctx_r3.root + "config/upload");
} }
function ConfigComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfigComponent_div_4_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.pre(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ConfigComponent_div_4_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfigComponent_div_4_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ConfigComponent_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfigComponent_div_4_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r24.done(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Done ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ConfigComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConfigComponent_div_4_button_1_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ConfigComponent_div_4_button_2_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ConfigComponent_div_4_button_3_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.currentStep > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.currentStep < 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.currentStep === 2);
} }
function ConfigComponent_nz_result_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-result", 22)(1, "div", 23)(2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Go Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
function ConfigComponent_ng_template_6_nz_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 27);
} if (rf & 2) {
    const client_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", client_r27)("nzLabel", client_r27);
} }
function ConfigComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " This purchase code seems to have been used by another server `in past`/`right now`. You can select to disable the previous server from below list and continue using on this server. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ConfigComponent_ng_template_6_Template_nz_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.selectedClient = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ConfigComponent_ng_template_6_nz_option_3_Template, 1, 2, "nz-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.selectedClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.clients);
} }
function ConfigComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfigComponent_ng_template_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.disableServer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Disable Selected Server ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", ctx_r9.tplModalButtonLoading)("disabled", ctx_r9.selectedClient === null);
} }
class ConfigComponent {
    constructor(route, updatePurchaseGql, updateMapsGql, updateFirebaseGql, disableServerGql, modalService, msg) {
        this.route = route;
        this.updatePurchaseGql = updatePurchaseGql;
        this.updateMapsGql = updateMapsGql;
        this.updateFirebaseGql = updateFirebaseGql;
        this.disableServerGql = disableServerGql;
        this.modalService = modalService;
        this.msg = msg;
        this.currentStep = 0;
        this.root = _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.root;
        this.clients = [];
        this.configed = false;
        this.tplModalButtonLoading = false;
    }
    ngOnInit() {
        this.remoteConfig = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => data.config));
        this.configSubscription = this.remoteConfig.subscribe((data) => (this.currentConfig = data.data));
    }
    ngOnDestroy() {
        var _a;
        (_a = this.configSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    pre() {
        this.currentStep -= 1;
    }
    next() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            switch (this.currentStep) {
                case 0: {
                    if (this.currentConfig.currentConfiguration.purchaseCode == null) {
                        this.msg.error("Purchase code is invalid.");
                        return;
                    }
                    const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.updatePurchaseGql.mutate({
                        code: (_a = this.currentConfig.currentConfiguration.purchaseCode) !== null && _a !== void 0 ? _a : "",
                    }));
                    console.log(result);
                    if (((_b = result.data) === null || _b === void 0 ? void 0 : _b.updatePurchaseCode.status) ==
                        _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdatePurchaseCodeStatus.ClientFound) {
                        this.clients =
                            (_e = (_d = (_c = result.data) === null || _c === void 0 ? void 0 : _c.updatePurchaseCode.clients) === null || _d === void 0 ? void 0 : _d.map((client) => client.ip)) !== null && _e !== void 0 ? _e : [];
                        this.createClientsModal();
                        return;
                    }
                    if (((_f = result.data) === null || _f === void 0 ? void 0 : _f.updatePurchaseCode.status) ==
                        _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdatePurchaseCodeStatus.Invalid) {
                        this.msg.error("Purchase code is Invalid. You can contact minimalistic.apps@gmail.com for more information.");
                    }
                    if (((_g = result.data) === null || _g === void 0 ? void 0 : _g.updatePurchaseCode.status) == _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdatePurchaseCodeStatus.Ok) {
                        this.currentStep += 1;
                    }
                    break;
                }
                case 1: {
                    if (this.currentConfig.currentConfiguration.adminPanelAPIKey == null ||
                        this.currentConfig.currentConfiguration.adminPanelAPIKey.length <
                            10 ||
                        this.currentConfig.currentConfiguration.backendMapsAPIKey == null ||
                        this.currentConfig.currentConfiguration.backendMapsAPIKey.length < 10) {
                        this.msg.error("Google Maps API Keys seems invalid.");
                        return;
                    }
                    const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.updateMapsGql.mutate({
                        backend: this.currentConfig.currentConfiguration.backendMapsAPIKey,
                        adminPanel: this.currentConfig.currentConfiguration.adminPanelAPIKey,
                    }));
                    if (((_h = result.data) === null || _h === void 0 ? void 0 : _h.updateMapsAPIKey.status) == _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateConfigStatus.Ok) {
                        this.currentStep += 1;
                    }
                    else {
                        this.msg.error((_k = (_j = result.data) === null || _j === void 0 ? void 0 : _j.updateMapsAPIKey.message) !== null && _k !== void 0 ? _k : "Unknown Error");
                    }
                    break;
                }
            }
        });
    }
    createClientsModal() {
        this.tplModal = this.modalService.create({
            nzTitle: "License Verification",
            nzContent: this.clientModalContent,
            nzFooter: this.clientModalFooter,
            nzMaskClosable: false,
            nzClosable: false,
        });
    }
    disableServer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.tplModalButtonLoading = true;
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.disableServerGql.mutate({ ip: this.selectedClient }));
            this.msg.success("Disable was successful.");
            this.tplModal.close();
        });
    }
    done() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.currentConfig.currentConfiguration.firebaseProjectPrivateKey == null) {
                this.msg.error("Firebase Project key seems invalid.");
                return;
            }
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.updateFirebaseGql.mutate({
                keyFileName: this.currentConfig.currentConfiguration.firebaseProjectPrivateKey,
            }));
            if (((_a = result.data) === null || _a === void 0 ? void 0 : _a.updateFirebase.status) == _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateConfigStatus.Ok) {
                this.configed = true;
            }
            else {
                this.msg.error((_c = (_b = result.data) === null || _b === void 0 ? void 0 : _b.updateFirebase.message) !== null && _c !== void 0 ? _c : "Unknown error");
            }
        });
    }
    handleChange(event) {
        const status = event.file.status;
        if (status !== "uploading") {
        }
        if (status === "done") {
            this.msg.success(`${event.file.name} file uploaded successfully.`);
            this.currentConfig.currentConfiguration.firebaseProjectPrivateKey =
                event.file.name;
        }
        else if (status === "error") {
            this.msg.error(`${event.file.name} file upload failed.`);
        }
    }
}
ConfigComponent.ɵfac = function ConfigComponent_Factory(t) { return new (t || ConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdatePurchaseCodeGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateMapsApiKeyGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateFirebaseGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DisableServerGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__.NzMessageService)); };
ConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConfigComponent, selectors: [["app-config"]], viewQuery: function ConfigComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.clientModalContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.clientModalFooter = _t.first);
    } }, decls: 10, vars: 6, consts: [["nzType", "navigation", 3, "nzCurrent", 4, "ngIf"], ["class", "step-content", 4, "ngIf"], ["class", "steps-action", 4, "ngIf"], ["nzStatus", "success", "nzTitle", "Configuration Done!", "nzSubTitle", "Your configuration steps are done now! You will need to wait for around 30 seconds so system would set it up then you can go to login screen using button below.", 4, "ngIf"], ["tplContent", ""], ["tplFooter", ""], ["nzType", "navigation", 3, "nzCurrent"], ["nzTitle", "Purchase Code", "nzDescription", "License Verification"], ["nzTitle", "Maps API", "nzDescription", "Google Maps API Keys"], ["nzTitle", "Firebase Admin SDK", "nzDescription", "Notification & Auth"], [1, "step-content"], ["nz-input", "", "placeholder", "Purchase Code", 3, "ngModel", "ngModelChange"], ["nz-input", "", "placeholder", "Backend Maps API key", 3, "ngModel", "ngModelChange"], ["nz-input", "", "placeholder", "Dashboard Maps API key", 3, "ngModel", "ngModelChange"], ["nzType", "drag", "nzAccept", ".json,application/json", 3, "nzAction", "nzChange"], [1, "ant-upload-drag-icon"], ["nz-icon", "", "nzType", "inbox"], [1, "ant-upload-text"], [1, "ant-upload-hint"], [1, "steps-action"], ["nz-button", "", "nzType", "default", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "default", 3, "click"], ["nzStatus", "success", "nzTitle", "Configuration Done!", "nzSubTitle", "Your configuration steps are done now! You will need to wait for around 30 seconds so system would set it up then you can go to login screen using button below."], ["nz-result-extra", ""], ["nz-button", "", "nzType", "default", "routerLink", "../login"], ["nzAllowClear", "", "nzPlaceHolder", "Choose", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], ["nz-button", "", "nzType", "default", 3, "nzLoading", "disabled", "click"]], template: function ConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ConfigComponent_nz_steps_0_Template, 4, 1, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConfigComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ConfigComponent_div_2_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ConfigComponent_div_3_Template, 8, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ConfigComponent_div_4_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ConfigComponent_nz_result_5_Template, 4, 0, "nz-result", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ConfigComponent_ng_template_6_Template, 4, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ConfigComponent_ng_template_8_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.configed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentStep === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentStep === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentStep === 2 && !ctx.configed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.configed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.configed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_10__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_10__.NzStepComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_13__.NzUploadComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_18__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_18__.NzResultExtraDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__.NzOptionComponent], styles: ["nz-steps[_ngcontent-%COMP%] {\n    display: block;\n    margin: 10px;\n}\n\n.steps-action[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: 10px;\n    margin-top: 24px;\n  }\n\nbutton[_ngcontent-%COMP%] {\n    margin-right: 8px;\n  }\n\n.step-content[_ngcontent-%COMP%] {\n      margin-left: 10px;\n      margin-right: 10px;\n    margin-top: 16px;\n    border: 1px dashed #e9e9e9;\n    border-radius: 6px;\n    background-color: #fafafa;\n  }\n\n.step-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .step-content[_ngcontent-%COMP%]   nz-upload[_ngcontent-%COMP%] {\n      width: 90%;\n      display: block;\n      margin: 50px auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQTtNQUNJLGlCQUFpQjtNQUNqQixrQkFBa0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCOztBQUVBO01BQ0ksVUFBVTtNQUNWLGNBQWM7TUFDZCxpQkFBaUI7RUFDckIiLCJmaWxlIjoiY29uZmlnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1zdGVwcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uc3RlcHMtYWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuXG4gIC5zdGVwLWNvbnRlbnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2U5ZTllOTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgfVxuXG4gIC5zdGVwLWNvbnRlbnQgaW5wdXQsIC5zdGVwLWNvbnRlbnQgbnotdXBsb2FkIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICB9Il19 */"] });


/***/ }),

/***/ 65659:
/*!****************************************!*\
  !*** ./src/app/config/config.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigGuard": () => (/* binding */ ConfigGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);









class ConfigGuard {
    constructor(router, msg, currentConfigGql) {
        this.router = router;
        this.msg = msg;
        this.currentConfigGql = currentConfigGql;
    }
    canActivate(next, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(this.currentConfigGql.fetch({}));
            if (result.data.currentConfiguration.firebaseProjectPrivateKey == null) {
                return true;
            }
            else {
                this.msg.warning("System is already configured. Try with admin password parameter");
                this.router.navigate(["../login"]);
                return false;
            }
        });
    }
}
ConfigGuard.ɵfac = function ConfigGuard_Factory(t) { return new (t || ConfigGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CurrentConfigurationGQL)); };
ConfigGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ConfigGuard, factory: ConfigGuard.ɵfac });


/***/ }),

/***/ 94726:
/*!*****************************************!*\
  !*** ./src/app/config/config.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigModule": () => (/* binding */ ConfigModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.component */ 77644);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ 25788);
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-routing.module */ 85768);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@components/shared.module */ 45497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class ConfigModule {
}
ConfigModule.ɵfac = function ConfigModule_Factory(t) { return new (t || ConfigModule)(); };
ConfigModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ConfigModule });
ConfigModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _config_routing_module__WEBPACK_IMPORTED_MODULE_1__.ConfigRoutingModule,
            _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ConfigModule, { declarations: [_config_component__WEBPACK_IMPORTED_MODULE_0__.ConfigComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _config_routing_module__WEBPACK_IMPORTED_MODULE_1__.ConfigRoutingModule,
        _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_config_config_module_ts.js.map