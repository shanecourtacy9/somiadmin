"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_management_management-users_user-view_user-view_module_ts"],{

/***/ 34732:
/*!*************************************************************************************!*\
  !*** ./src/app/cms/management/management-users/user-view/operator-view.resolver.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorViewResolver": () => (/* binding */ OperatorViewResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class OperatorViewResolver {
    constructor(gql) {
        this.gql = gql;
    }
    resolve(route, state) {
        return this.gql.fetch({ id: route.params.id });
    }
}
OperatorViewResolver.ɵfac = function OperatorViewResolver_Factory(t) { return new (t || OperatorViewResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ViewOperatorGQL)); };
OperatorViewResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OperatorViewResolver, factory: OperatorViewResolver.ɵfac });


/***/ }),

/***/ 24874:
/*!************************************************************************************************************!*\
  !*** ./src/app/cms/management/management-users/user-view/user-view-details/user-view-details.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserViewDetailsComponent": () => (/* binding */ UserViewDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ 80517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);



















function UserViewDetailsComponent_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 21);
} if (rf & 2) {
    const role_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", role_r1.id)("nzLabel", role_r1.title);
} }
class UserViewDetailsComponent {
    constructor(route, updateGQL, router, fb, msg) {
        this.route = route;
        this.updateGQL = updateGQL;
        this.router = router;
        this.fb = fb;
        this.msg = msg;
        this.form = this.fb.group({
            id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            userName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            email: [null],
            roleId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            mobileNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
    }
    ngOnInit() {
        var _a, _b;
        (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.data.subscribe((data) => this.form.patchValue(data.operator.data.operator));
        this.query = (_b = this.route.parent) === null || _b === void 0 ? void 0 : _b.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => data.operator));
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const _a = this.form.value, { id } = _a, update = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["id"]);
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.updateGQL.mutate({ id, update }));
            this.msg.success("Done!");
            this.router.navigateByUrl("/management/users");
        });
    }
}
UserViewDetailsComponent.ɵfac = function UserViewDetailsComponent_Factory(t) { return new (t || UserViewDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateOperatorGQL), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__.NzMessageService)); };
UserViewDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserViewDetailsComponent, selectors: [["app-user-view-details"]], decls: 37, vars: 6, consts: [["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], ["formControlName", "id", "type", "hidden", "hidden", ""], [1, "lg:grid", "lg:grid-cols-3", "lg:gap-2"], ["nzRequired", "", "nzFor", "firstName"], ["nzErrorTip", "The input is not valid First Name"], ["nz-input", "", "required", "", "formControlName", "firstName", "id", "firstName"], ["nzRequired", "", "nzFor", "lastName"], ["nzErrorTip", "The input is not valid Last Name"], ["nz-input", "", "required", "", "formControlName", "lastName", "id", "lastName"], ["nzRequired", "", "nzFor", "roleId"], ["nzErrorTip", "Role is not selected"], ["required", "", "formControlName", "roleId"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzRequired", "", "nzFor", "userName"], ["nzErrorTip", "The input is not valid User Name"], ["nz-input", "", "required", "", "formControlName", "userName", "id", "userName"], ["nzFor", "email"], ["nz-input", "", "formControlName", "email", "id", "email"], ["nzRequired", "", "nzFor", "mobileNumber"], ["formControlName", "mobileNumber", "id", "'mobileNumber", "nz-input", ""], ["nz-button", "", "nzType", "default", "type", "submit", 1, "float-right", 3, "disabled"], [3, "nzValue", "nzLabel"]], template: function UserViewDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserViewDetailsComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "nz-form-item")(4, "nz-form-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-form-item")(9, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-form-item")(14, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-form-control", 10)(17, "nz-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UserViewDetailsComponent_nz_option_18_Template, 1, 2, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-form-item")(21, "nz-form-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-form-control", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-form-item")(26, "nz-form-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-form-item")(31, "nz-form-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLayout", "vertical")("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 4, ctx.query)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.operatorRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 67036:
/*!***************************************************************************************!*\
  !*** ./src/app/cms/management/management-users/user-view/user-view-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserViewRoutingModule": () => (/* binding */ UserViewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _operator_view_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operator-view.resolver */ 34732);
/* harmony import */ var _user_view_details_user_view_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-view-details/user-view-details.component */ 24874);
/* harmony import */ var _user_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-view.component */ 22188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: '', component: _user_view_component__WEBPACK_IMPORTED_MODULE_2__.UserViewComponent, resolve: { operator: _operator_view_resolver__WEBPACK_IMPORTED_MODULE_0__.OperatorViewResolver }, children: [
            { path: '', redirectTo: 'details' },
            { path: 'details', component: _user_view_details_user_view_details_component__WEBPACK_IMPORTED_MODULE_1__.UserViewDetailsComponent }
        ] }
];
class UserViewRoutingModule {
}
UserViewRoutingModule.ɵfac = function UserViewRoutingModule_Factory(t) { return new (t || UserViewRoutingModule)(); };
UserViewRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UserViewRoutingModule });
UserViewRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _operator_view_resolver__WEBPACK_IMPORTED_MODULE_0__.OperatorViewResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 22188:
/*!**********************************************************************************!*\
  !*** ./src/app/cms/management/management-users/user-view/user-view.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserViewComponent": () => (/* binding */ UserViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 29801);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);





function UserViewComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "users.tab.details"));
} }
class UserViewComponent {
}
UserViewComponent.ɵfac = function UserViewComponent_Factory(t) { return new (t || UserViewComponent)(); };
UserViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserViewComponent, selectors: [["app-user-view"]], decls: 5, vars: 0, consts: [["nzLinkRouter", ""], ["nz-tab-link", "", "routerLink", "details", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "details"]], template: function UserViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card")(1, "nz-tabset", 0)(2, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserViewComponent_a_3_Template, 3, 3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__.NzCardComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__.NzTabComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__.NzTabLinkTemplateDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__.NzTabLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 59534:
/*!*******************************************************************************!*\
  !*** ./src/app/cms/management/management-users/user-view/user-view.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserViewModule": () => (/* binding */ UserViewModule)
/* harmony export */ });
/* harmony import */ var _user_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-view-routing.module */ 67036);
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _user_view_details_user_view_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-view-details/user-view-details.component */ 24874);
/* harmony import */ var _user_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-view.component */ 22188);
/* harmony import */ var _operator_new_operator_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operator-new/operator-new.component */ 58271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class UserViewModule {
}
UserViewModule.ɵfac = function UserViewModule_Factory(t) { return new (t || UserViewModule)(); };
UserViewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: UserViewModule });
UserViewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _user_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserViewRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UserViewModule, { declarations: [_user_view_component__WEBPACK_IMPORTED_MODULE_3__.UserViewComponent,
        _user_view_details_user_view_details_component__WEBPACK_IMPORTED_MODULE_2__.UserViewDetailsComponent,
        _operator_new_operator_new_component__WEBPACK_IMPORTED_MODULE_4__.OperatorNewComponent], imports: [_ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _user_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserViewRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cms_management_management-users_user-view_user-view_module_ts.js.map