"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_management_management-users_management-users_module_ts"],{

/***/ 1662:
/*!************************************************************************************!*\
  !*** ./src/app/cms/management/management-users/management-users-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementUsersRoutingModule": () => (/* binding */ ManagementUsersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _operator_new_operator_new_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operator-new/operator-new.component */ 58271);
/* harmony import */ var _operator_new_operator_new_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operator-new/operator-new.resolver */ 76439);
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-list/users-list.component */ 56386);
/* harmony import */ var _users_list_users_list_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-list/users-list.resolver */ 75469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    { path: '', component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__.UsersListComponent, resolve: { operators: _users_list_users_list_resolver__WEBPACK_IMPORTED_MODULE_3__.UsersListResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
    { path: 'view/:id', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_management_management-users_user-view_user-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./user-view/user-view.module */ 59534)).then(m => m.UserViewModule) },
    { path: 'new', component: _operator_new_operator_new_component__WEBPACK_IMPORTED_MODULE_0__.OperatorNewComponent, resolve: { operator: _operator_new_operator_new_resolver__WEBPACK_IMPORTED_MODULE_1__.OperatorNewResolver } }
    //{ path: 'view/:id', component: UserViewComponent, resolve: { item: ItemResolver }, data: {table: 'Operator'} },
    //{ path: 'new', component: UserViewComponent, resolve: { item: ItemResolver }, data: {table: 'Operator'} }
];
class ManagementUsersRoutingModule {
}
ManagementUsersRoutingModule.ɵfac = function ManagementUsersRoutingModule_Factory(t) { return new (t || ManagementUsersRoutingModule)(); };
ManagementUsersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ManagementUsersRoutingModule });
ManagementUsersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _users_list_users_list_resolver__WEBPACK_IMPORTED_MODULE_3__.UsersListResolver,
        _operator_new_operator_new_resolver__WEBPACK_IMPORTED_MODULE_1__.OperatorNewResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ManagementUsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 91123:
/*!****************************************************************************!*\
  !*** ./src/app/cms/management/management-users/management-users.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementUsersModule": () => (/* binding */ ManagementUsersModule)
/* harmony export */ });
/* harmony import */ var _management_users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management-users-routing.module */ 1662);
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-list/users-list.component */ 56386);
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




class ManagementUsersModule {
}
ManagementUsersModule.ɵfac = function ManagementUsersModule_Factory(t) { return new (t || ManagementUsersModule)(); };
ManagementUsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ManagementUsersModule });
ManagementUsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_management_users_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagementUsersRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ManagementUsersModule, { declarations: [_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_1__.UsersListComponent], imports: [_management_users_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagementUsersRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 58271:
/*!****************************************************************************************!*\
  !*** ./src/app/cms/management/management-users/operator-new/operator-new.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorNewComponent": () => (/* binding */ OperatorNewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_country_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/country-codes */ 62583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _services_router_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@services/router-helper.service */ 59083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ 80517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);






















function OperatorNewComponent_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 27);
} if (rf & 2) {
    const role_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", role_r5.id)("nzLabel", role_r5.title);
} }
function OperatorNewComponent_ng_template_35_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 30);
} if (rf & 2) {
    const code_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", code_r7.name + " (" + code_r7.dial_code + ")")("nzValue", code_r7.dial_code);
} }
function OperatorNewComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OperatorNewComponent_ng_template_35_nz_option_1_Template, 1, 2, "nz-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.countryCodes);
} }
function OperatorNewComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OperatorNewComponent_ng_template_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r4.form.invalid);
} }
const _c0 = function (a0) { return [a0]; };
class OperatorNewComponent {
    constructor(fb, createGQL, routerHelper, route) {
        this.fb = fb;
        this.createGQL = createGQL;
        this.routerHelper = routerHelper;
        this.route = route;
        this.form = this.fb.group({
            firstName: [null],
            lastName: [null],
            roleId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            phoneNumberPrefix: ["+1", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            userName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        this.countryCodes = _ridy_admin_panel_src_app_country_codes__WEBPACK_IMPORTED_MODULE_1__.COUNTRY_CODE_LIST;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((data) => data.operator));
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const _a = this.form.value, { phoneNumber, phoneNumberPrefix } = _a, _formValue = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__rest)(_a, ["phoneNumber", "phoneNumberPrefix"]);
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(this.createGQL.mutate({
                input: Object.assign({ mobileNumber: `${phoneNumberPrefix.substring(1)}${phoneNumber}` }, _formValue),
            }));
            this.routerHelper.goToParent(this.route);
        });
    }
}
OperatorNewComponent.ɵfac = function OperatorNewComponent_Factory(t) { return new (t || OperatorNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateOperatorGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_router_helper_service__WEBPACK_IMPORTED_MODULE_2__.RouterHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
OperatorNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OperatorNewComponent, selectors: [["app-operator-new"]], decls: 45, vars: 9, consts: [["nzBackIcon", "", "nzTitle", "New Operator", "nzSubtitle", "Input Operator's details below.", 3, "nzGhost"], [3, "nzActions"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "firstName"], ["nzErrorTip", "The input is not valid First Name"], ["nz-input", "", "required", "", "formControlName", "firstName", "id", "firstName"], ["nzRequired", "", "nzFor", "lastName"], ["nzErrorTip", "The input is not valid Last Name"], ["nz-input", "", "required", "", "formControlName", "lastName", "id", "lastName"], ["nzRequired", "", "nzFor", "roleId"], ["nzErrorTip", "Role is not selected"], ["required", "", "formControlName", "roleId"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzRequired", "", "nzFor", "userName"], ["nzErrorTip", "The input is not valid User Name"], ["nz-input", "", "required", "", "formControlName", "userName", "id", "userName"], ["nzRequired", "", "nzFor", "password"], ["nzErrorTip", "The input is not valid Passowrd"], ["nz-input", "", "required", "", "formControlName", "password", "id", "password"], ["nzFor", "phoneNumber", "nzRequired", ""], [3, "nzAddOnBefore"], ["addOnBeforeTemplate", ""], ["formControlName", "phoneNumber", "id", "phoneNumber", "nz-input", ""], ["nzFor", "email"], ["nzErrorTip", "The input is not valid E-mail"], ["nz-input", "", "formControlName", "email", "id", "email"], ["tmplActions", ""], [3, "nzValue", "nzLabel"], ["formControlName", "phoneNumberPrefix", 1, "phone-select"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], ["nz-button", "", "nzType", "default", 3, "disabled", "click"]], template: function OperatorNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-card", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function OperatorNewComponent_Template_form_ngSubmit_2_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-form-item")(4, "nz-form-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-item")(9, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-form-item")(14, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-form-control", 10)(17, "nz-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, OperatorNewComponent_nz_option_18_Template, 1, 2, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "nz-form-item")(21, "nz-form-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-form-control", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "nz-form-item")(26, "nz-form-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "nz-form-control", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "nz-form-item")(31, "nz-form-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "nz-form-control")(34, "nz-input-group", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, OperatorNewComponent_ng_template_35_Template, 2, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "nz-form-item")(39, "nz-form-label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "nz-form-control", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, OperatorNewComponent_ng_template_43_Template, 2, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](36);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](44);
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, _r3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 5, ctx.query)) == null ? null : tmp_3_0.data == null ? null : tmp_3_0.data.operatorRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAddOnBefore", _r1);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzOptionComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__.NzWaveDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 76439:
/*!***************************************************************************************!*\
  !*** ./src/app/cms/management/management-users/operator-new/operator-new.resolver.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorNewResolver": () => (/* binding */ OperatorNewResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class OperatorNewResolver {
    constructor(gql) {
        this.gql = gql;
    }
    resolve(route, state) {
        return this.gql.fetch({});
    }
}
OperatorNewResolver.ɵfac = function OperatorNewResolver_Factory(t) { return new (t || OperatorNewResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.NewOperatorGQL)); };
OperatorNewResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OperatorNewResolver, factory: OperatorNewResolver.ɵfac });


/***/ }),

/***/ 56386:
/*!************************************************************************************!*\
  !*** ./src/app/cms/management/management-users/users-list/users-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListComponent": () => (/* binding */ UsersListComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
















function UsersListComponent_nz_table_7_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", data_r4.firstName, " ", data_r4.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "view/" + data_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 5, "table.details"));
} }
function UsersListComponent_nz_table_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-table", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzQueryParams", function UsersListComponent_nz_table_7_Template_nz_table_nzQueryParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.tableService.onTableQueryParamsChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, UsersListComponent_nz_table_7_tr_14_Template, 9, 7, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const operators_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzFrontPagination", false)("nzData", operators_r1.nodes)("nzTotal", operators_r1.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 7, "profile.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, "profile.userName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 11, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r2.data);
} }
class UsersListComponent {
    constructor(route, router, tagColor, tableService) {
        this.route = route;
        this.router = router;
        this.tagColor = tagColor;
        this.tableService = tableService;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => data.operators));
    }
}
UsersListComponent.ɵfac = function UsersListComponent_Factory(t) { return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_0__.TableService)); };
UsersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UsersListComponent, selectors: [["app-users-list"]], decls: 9, vars: 7, consts: [["nzBackIcon", "", "nzTitle", "Operators", "nzSubtitle", "Users of Admin panel (Operators and admins)", 3, "nzGhost"], ["nz-button", "", "nzType", "default", "routerLink", "new"], ["nz-icon", "", "nzType", "plus"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams", 4, "ngIf"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams"], ["table", ""], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function UsersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-page-header", 0)(1, "nz-page-header-extra")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, UsersListComponent_nz_table_7_Template, 15, 13, "nz-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, "profile.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 5, ctx.query)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.operators);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__.NzPageHeaderContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 75469:
/*!***********************************************************************************!*\
  !*** ./src/app/cms/management/management-users/users-list/users-list.resolver.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListResolver": () => (/* binding */ UsersListResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class UsersListResolver {
    constructor(paging, gql) {
        this.paging = paging;
        this.gql = gql;
    }
    resolve(route, state) {
        const params = this.paging.deserializeQueryParams(route.queryParams);
        return this.gql.fetch(params);
    }
}
UsersListResolver.ɵfac = function UsersListResolver_Factory(t) { return new (t || UsersListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UsersListGQL)); };
UsersListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UsersListResolver, factory: UsersListResolver.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_cms_management_management-users_management-users_module_ts.js.map