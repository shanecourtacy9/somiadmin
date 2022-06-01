"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_drivers_drivers_module_ts"],{

/***/ 83908:
/*!****************************************************************!*\
  !*** ./src/app/cms/drivers/driver-new/driver-new.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverNewComponent": () => (/* binding */ DriverNewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@services/router-helper.service */ 59083);
/* harmony import */ var _country_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../country-codes */ 62583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ 80517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);






















function DriverNewComponent_ng_template_18_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 20);
} if (rf & 2) {
    const code_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", code_r5.name + " (" + code_r5.dial_code + ")")("nzValue", code_r5.dial_code);
} }
function DriverNewComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DriverNewComponent_ng_template_18_nz_option_1_Template, 1, 2, "nz-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.countryCodes);
} }
function DriverNewComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DriverNewComponent_ng_template_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.form.invalid);
} }
const _c0 = function (a0) { return [a0]; };
class DriverNewComponent {
    constructor(fb, createGQL, routerHelper, route) {
        this.fb = fb;
        this.createGQL = createGQL;
        this.routerHelper = routerHelper;
        this.route = route;
        this.form = this.fb.group({
            firstName: [null],
            lastName: [null],
            phoneNumberPrefix: ["+1", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            gender: [null],
        });
        this.countryCodes = _country_codes__WEBPACK_IMPORTED_MODULE_2__.COUNTRY_CODE_LIST;
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const _a = this.form.value, { phoneNumber, phoneNumberPrefix } = _a, _formValue = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(_a, ["phoneNumber", "phoneNumberPrefix"]);
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.createGQL.mutate({
                input: Object.assign({ mobileNumber: `${phoneNumberPrefix}${phoneNumber}` }, _formValue),
            }));
            this.routerHelper.goToParent(this.route);
        });
    }
}
DriverNewComponent.ɵfac = function DriverNewComponent_Factory(t) { return new (t || DriverNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateDriverGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__.RouterHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
DriverNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DriverNewComponent, selectors: [["app-driver-new"]], decls: 30, vars: 6, consts: [["nzBackIcon", "", "nzTitle", "New Driver", "nzSubtitle", "Input Driver's contact details below.", 3, "nzGhost"], [3, "nzActions"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "firstName"], ["nzErrorTip", "The input is not valid First Name"], ["nz-input", "", "formControlName", "firstName", "id", "firstName"], ["nzRequired", "", "nzFor", "lastName"], ["nzErrorTip", "The input is not valid Last Name"], ["nz-input", "", "formControlName", "lastName", "id", "lastName"], ["nzFor", "phoneNumber", "nzRequired", ""], [3, "nzAddOnBefore"], ["addOnBeforeTemplate", ""], ["formControlName", "phoneNumber", "id", "'phoneNumber'", "nz-input", ""], ["nzFor", "gender"], ["formControlName", "gender"], ["nzLabel", "Male", "nzValue", "Male"], ["nzLabel", "Female", "nzValue", "Female"], ["tmplActions", ""], ["formControlName", "phoneNumberPrefix", 1, "phone-select"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], ["nz-button", "", "nzType", "default", 3, "disabled", "click"]], template: function DriverNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-card", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function DriverNewComponent_Template_form_ngSubmit_2_listener() { return ctx.submitForm(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-form-control")(17, "nz-input-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DriverNewComponent_ng_template_18_Template, 2, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nz-form-item")(22, "nz-form-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "nz-form-control")(25, "nz-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "nz-option", 15)(27, "nz-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, DriverNewComponent_ng_template_28_Template, 2, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, _r2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAddOnBefore", _r0);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective], encapsulation: 2 });


/***/ }),

/***/ 32321:
/*!********************************************************************!*\
  !*** ./src/app/cms/drivers/drivers-list/drivers-list.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversListComponent": () => (/* binding */ DriversListComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var camel_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! camel-case */ 94146);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tag */ 92065);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 23992);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@pipes/phone.pipe */ 5390);























function DriversListComponent_nz_table_7_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td")(4, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 23)(8, "nz-tag", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", data_r8.firstName, " ", data_r8.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", "tel:+" + data_r8.mobileNumber, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, data_r8.mobileNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColor", ctx_r7.tagColor.driver(data_r8.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 10, "enum.driver.status." + ctx_r7.toCamelCase(data_r8.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "view/" + data_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 12, "table.details"));
} }
function DriversListComponent_nz_table_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzQueryParams", function DriversListComponent_nz_table_7_Template_nz_table_nzQueryParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.tableService.onTableQueryParamsChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "nz-filter-trigger", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "nz-filter-trigger", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, DriversListComponent_nz_table_7_tr_22_Template, 15, 14, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const drivers_r5 = ctx.ngIf;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
    let tmp_5_0;
    let tmp_9_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzFrontPagination", false)("nzData", drivers_r5.nodes)("nzTotal", drivers_r5.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSortFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 15, "profile.name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActive", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 17, ctx_r0.route.queryParams)) == null ? null : tmp_5_0.filter == null ? null : tmp_5_0.filter.includes("lastName|like|"))("nzDropdownMenu", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSortFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 19, "profile.mobileNumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActive", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 21, ctx_r0.route.queryParams)) == null ? null : tmp_9_0.filter == null ? null : tmp_9_0.filter.includes("mobileNumber|like|"))("nzDropdownMenu", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzFilters", ctx_r0.statuses)("nzFilterFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 23, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r6.data);
} }
class DriversListComponent {
    constructor(tagColor, tableService, route, translator) {
        this.tagColor = tagColor;
        this.tableService = tableService;
        this.route = route;
        this.translator = translator;
        this.statuses = Object.values(_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverStatus).map((key) => ({
            value: key,
            text: this.translator.instant(`enum.driver.status.${(0,camel_case__WEBPACK_IMPORTED_MODULE_5__.camelCase)(key)}`),
        }));
        this.toCamelCase = camel_case__WEBPACK_IMPORTED_MODULE_5__.camelCase;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((data) => data.drivers));
    }
}
DriversListComponent.ɵfac = function DriversListComponent_Factory(t) { return new (t || DriversListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_table_service__WEBPACK_IMPORTED_MODULE_2__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService)); };
DriversListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DriversListComponent, selectors: [["app-drivers-list"]], decls: 34, vars: 22, consts: [["nzBackIcon", "", "nzTitle", "Drivers", "nzSubtitle", "List of all drivers registered", 3, "nzGhost"], ["nz-button", "", "nzType", "default", "routerLink", "new"], ["nz-icon", "", "nzType", "plus"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams", 4, "ngIf"], ["filtername", "nzDropdownMenu"], [1, "ant-table-filter-dropdown"], [1, "search-box"], ["nz-input", "", 3, "placeholder"], ["lastNameInput", ""], ["nz-button", "", "nzSize", "small", "nzType", "default", 1, "search-button", 3, "click"], ["nz-button", "", "nzSize", "small", 3, "click"], ["filtermobile", "nzDropdownMenu"], ["nz-input", "", "placeholder", "Search Mobile Number"], ["mobileNumberInput", ""], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams"], ["table", ""], ["nzCustomFilter", "", "nzColumnKey", "lastName", 3, "nzSortFn"], [3, "nzActive", "nzDropdownMenu"], ["nz-icon", "", "nzType", "search"], ["nzCustomFilter", "", "nzColumnKey", "mobileNumber", 3, "nzSortFn"], ["nzColumnKey", "status", 1, "hidden", "md:table-cell", 3, "nzFilters", "nzFilterFn"], [4, "ngFor", "ngForOf"], [3, "href"], [1, "hidden", "md:table-cell"], [3, "nzColor"], [3, "routerLink"]], template: function DriversListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-page-header", 0)(1, "nz-page-header-extra")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DriversListComponent_nz_table_7_Template, 23, 25, "nz-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nz-dropdown-menu", null, 4)(11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriversListComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14); return ctx.tableService.filterText("lastName", _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriversListComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14); return ctx.tableService.resetFilter("lastName", _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "nz-dropdown-menu", null, 11)(24, "div", 5)(25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriversListComponent_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27); return ctx.tableService.filterText("mobileNumber", _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriversListComponent_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27); return ctx.tableService.resetFilter("mobileNumber", _r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 8, "profile.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 10, ctx.query)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.drivers);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 12, "profile.lastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 14, "profile.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 16, "profile.reset"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 18, "profile.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 20, "profile.reset"), " ");
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzFilterTriggerComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__.NzTagComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__.NzDropdownMenuComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__.NzInputDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_3__.PhonePipe], encapsulation: 2 });


/***/ }),

/***/ 52240:
/*!*******************************************************************!*\
  !*** ./src/app/cms/drivers/drivers-list/drivers-list.resolver.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversListResolver": () => (/* binding */ DriversListResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class DriversListResolver {
    constructor(paging, gql) {
        this.paging = paging;
        this.gql = gql;
    }
    resolve(route, state) {
        const params = this.paging.deserializeQueryParams(route.queryParams);
        return this.gql.fetch(params);
    }
}
DriversListResolver.ɵfac = function DriversListResolver_Factory(t) { return new (t || DriversListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriversListGQL)); };
DriversListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DriversListResolver, factory: DriversListResolver.ɵfac });


/***/ }),

/***/ 71969:
/*!*******************************************************!*\
  !*** ./src/app/cms/drivers/drivers-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversRoutingModule": () => (/* binding */ DriversRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _driver_new_driver_new_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-new/driver-new.component */ 83908);
/* harmony import */ var _drivers_list_drivers_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drivers-list/drivers-list.component */ 32321);
/* harmony import */ var _drivers_list_drivers_list_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drivers-list/drivers-list.resolver */ 52240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: '', component: _drivers_list_drivers_list_component__WEBPACK_IMPORTED_MODULE_1__.DriversListComponent, resolve: { drivers: _drivers_list_drivers_list_resolver__WEBPACK_IMPORTED_MODULE_2__.DriversListResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
    { path: 'view/:id', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_drivers_driver-profile_driver-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./driver-profile/driver-profile.module */ 74160)).then(m => m.DriverProfileModule) },
    { path: 'new', component: _driver_new_driver_new_component__WEBPACK_IMPORTED_MODULE_0__.DriverNewComponent }
];
class DriversRoutingModule {
}
DriversRoutingModule.ɵfac = function DriversRoutingModule_Factory(t) { return new (t || DriversRoutingModule)(); };
DriversRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DriversRoutingModule });
DriversRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _drivers_list_drivers_list_resolver__WEBPACK_IMPORTED_MODULE_2__.DriversListResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DriversRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 77515:
/*!***********************************************!*\
  !*** ./src/app/cms/drivers/drivers.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversModule": () => (/* binding */ DriversModule)
/* harmony export */ });
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@components/shared.module */ 45497);
/* harmony import */ var _driver_new_driver_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-new/driver-new.component */ 83908);
/* harmony import */ var _drivers_list_drivers_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drivers-list/drivers-list.component */ 32321);
/* harmony import */ var _drivers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drivers-routing.module */ 71969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class DriversModule {
}
DriversModule.ɵfac = function DriversModule_Factory(t) { return new (t || DriversModule)(); };
DriversModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DriversModule });
DriversModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _drivers_routing_module__WEBPACK_IMPORTED_MODULE_3__.DriversRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DriversModule, { declarations: [_drivers_list_drivers_list_component__WEBPACK_IMPORTED_MODULE_2__.DriversListComponent, _driver_new_driver_new_component__WEBPACK_IMPORTED_MODULE_1__.DriverNewComponent], imports: [_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _drivers_routing_module__WEBPACK_IMPORTED_MODULE_3__.DriversRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cms_drivers_drivers_module_ts.js.map