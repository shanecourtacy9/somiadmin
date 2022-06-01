"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_management_management-settings_management-settings_module_ts"],{

/***/ 81149:
/*!******************************************************************************************!*\
  !*** ./src/app/cms/management/management-settings/management-settings-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementSettingsRoutingModule": () => (/* binding */ ManagementSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _management_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management-settings.component */ 38609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _management_settings_component__WEBPACK_IMPORTED_MODULE_0__.ManagementSettingsComponent }
];
class ManagementSettingsRoutingModule {
}
ManagementSettingsRoutingModule.ɵfac = function ManagementSettingsRoutingModule_Factory(t) { return new (t || ManagementSettingsRoutingModule)(); };
ManagementSettingsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManagementSettingsRoutingModule });
ManagementSettingsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManagementSettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 38609:
/*!*************************************************************************************!*\
  !*** ./src/app/cms/management/management-settings/management-settings.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementSettingsComponent": () => (/* binding */ ManagementSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 29801);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);






















class ManagementSettingsComponent {
    constructor(route, message, updatePasswordGql, fb, translate) {
        this.route = route;
        this.message = message;
        this.updatePasswordGql = updatePasswordGql;
        this.fb = fb;
        this.translate = translate;
        this.form = this.fb.group({
            oldPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            newPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            newPasswordRepeat: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
    }
    ngOnInit() { }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.value.newPassword != this.form.value.newPasswordRepeat) {
                this.message.error("Passwords don't match.");
                return;
            }
            try {
                yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(this.updatePasswordGql.mutate({
                    input: {
                        oldPassword: this.form.value.oldPassword,
                        newPasswod: this.form.value.newPassword,
                    },
                }));
                this.message.success("Password Updated Successfully.");
                this.form.reset();
            }
            catch (error) {
                this.message.error("Action is not allowed.");
            }
        });
    }
}
ManagementSettingsComponent.ɵfac = function ManagementSettingsComponent_Factory(t) { return new (t || ManagementSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdatePasswordGQL), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService)); };
ManagementSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ManagementSettingsComponent, selectors: [["app-management-settings"]], decls: 24, vars: 6, consts: [["nzTabPosition", "left"], [3, "nzTitle"], ["nzTitle", "Change Password", "nzSubtitle", "Update your password used to access this panel", 3, "nzGhost"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["frm", ""], ["nzRequired", "", "nzFor", "oldPassword"], ["nzErrorTip", "Password is incorrect"], ["nz-input", "", "formControlName", "oldPassword", "id", "oldPassword", "type", "password"], ["nzRequired", "", "nzFor", "newPassword"], ["nz-input", "", "formControlName", "newPassword", "id", "newPassword", "type", "password"], ["nzRequired", "", "nzFor", "newPasswordRepeat"], ["nz-input", "", "formControlName", "newPasswordRepeat", "id", "newPasswordRepeat", "type", "password"], ["nz-button", "", "nzType", "default", "type", "submit", 1, "float-right", 3, "disabled"]], template: function ManagementSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-tabset", 0)(1, "nz-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nz-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-card")(5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ManagementSettingsComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "nz-form-item")(8, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nz-form-item")(13, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nz-form-item")(18, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "New Password Repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "settings.generalSettings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_8__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_8__.NzTabComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 1707:
/*!**********************************************************************************!*\
  !*** ./src/app/cms/management/management-settings/management-settings.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementSettingsModule": () => (/* binding */ ManagementSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _management_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management-settings-routing.module */ 81149);
/* harmony import */ var _management_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./management-settings.component */ 38609);
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ManagementSettingsModule {
}
ManagementSettingsModule.ɵfac = function ManagementSettingsModule_Factory(t) { return new (t || ManagementSettingsModule)(); };
ManagementSettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ManagementSettingsModule });
ManagementSettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _management_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagementSettingsRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ManagementSettingsModule, { declarations: [_management_settings_component__WEBPACK_IMPORTED_MODULE_1__.ManagementSettingsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _management_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagementSettingsRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cms_management_management-settings_management-settings_module_ts.js.map