"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_riders_riders_module_ts"],{

/***/ 93544:
/*!*************************************************************!*\
  !*** ./src/app/cms/riders/rider-new/rider-new.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderNewComponent": () => (/* binding */ RiderNewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@services/router-helper.service */ 59083);
/* harmony import */ var _country_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../country-codes */ 62583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/select */ 80517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
























function RiderNewComponent_ng_template_18_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 21);
} if (rf & 2) {
    const code_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", code_r5.name + " (" + code_r5.dial_code + ")")("nzValue", code_r5.dial_code);
} }
function RiderNewComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RiderNewComponent_ng_template_18_nz_option_1_Template, 1, 2, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.countryCodes);
} }
function RiderNewComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RiderNewComponent_ng_template_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.form.invalid);
} }
const _c0 = function (a0) { return [a0]; };
class RiderNewComponent {
    constructor(fb, createRiderGQL, messageService, routerHelper, route) {
        this.fb = fb;
        this.createRiderGQL = createRiderGQL;
        this.messageService = messageService;
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
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.createRiderGQL.mutate({
                input: Object.assign({ mobileNumber: `${phoneNumberPrefix}${phoneNumber}` }, _formValue),
            }));
            this.messageService.success("Saved Successfully.");
            this.routerHelper.goToParent(this.route);
        });
    }
}
RiderNewComponent.ɵfac = function RiderNewComponent_Factory(t) { return new (t || RiderNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateRiderGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__.RouterHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
RiderNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RiderNewComponent, selectors: [["app-rider-new"]], decls: 30, vars: 22, consts: [["nzBackIcon", "", "nzTitle", "New Rider", "nzSubtitle", "Input Rider's contact details below.", 3, "nzGhost"], [3, "nzActions"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "firstName", 3, "nzSm", "nzXs"], ["nzErrorTip", "The input is not valid First Name", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "firstName", "id", "firstName"], ["nzRequired", "", "nzFor", "lastName", 3, "nzSm", "nzXs"], ["nzErrorTip", "The input is not valid Last Name", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "lastName", "id", "lastName"], ["nzFor", "phoneNumber", "nzRequired", "", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], [3, "nzAddOnBefore"], ["addOnBeforeTemplate", ""], ["formControlName", "phoneNumber", "id", "'phoneNumber'", "nz-input", ""], ["nzFor", "gender", 3, "nzSm", "nzXs"], ["formControlName", "gender"], ["nzLabel", "Male", "nzValue", "Male"], ["nzLabel", "Female", "nzValue", "Female"], ["tmplActions", ""], ["formControlName", "phoneNumberPrefix", 1, "phone-select"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], ["nz-button", "", "nzType", "default", 3, "disabled", "click"]], template: function RiderNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-card", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RiderNewComponent_Template_form_ngSubmit_2_listener() { return ctx.submitForm(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-form-control", 10)(17, "nz-input-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, RiderNewComponent_ng_template_18_Template, 2, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nz-form-item")(22, "nz-form-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "nz-form-control", 10)(25, "nz-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "nz-option", 16)(27, "nz-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, RiderNewComponent_ng_template_28_Template, 2, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c0, _r2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAddOnBefore", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__.NzWaveDirective], encapsulation: 2 });


/***/ }),

/***/ 70601:
/*!*****************************************************************!*\
  !*** ./src/app/cms/riders/riders-list/riders-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RidersListComponent": () => (/* binding */ RidersListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 23992);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@pipes/phone.pipe */ 5390);


















function RidersListComponent_nz_table_7_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td")(7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", data_r8.firstName, " ", data_r8.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, data_r8.mobileNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "view/" + data_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 7, "table.details"));
} }
function RidersListComponent_nz_table_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-table", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzQueryParams", function RidersListComponent_nz_table_7_Template_nz_table_nzQueryParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.tableService.onTableQueryParamsChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-filter-trigger", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-filter-trigger", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RidersListComponent_nz_table_7_tr_20_Template, 10, 9, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const riders_r5 = ctx.ngIf;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
    let tmp_5_0;
    let tmp_9_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzFrontPagination", false)("nzData", riders_r5.nodes)("nzTotal", riders_r5.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSortFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 13, "profile.name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzActive", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 15, ctx_r0.route.queryParams)) == null ? null : tmp_5_0.filter == null ? null : tmp_5_0.filter.includes("lastName|like|"))("nzDropdownMenu", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSortFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 17, "profile.mobileNumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzActive", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 19, ctx_r0.route.queryParams)) == null ? null : tmp_9_0.filter == null ? null : tmp_9_0.filter.includes("mobileNumber|like|"))("nzDropdownMenu", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 21, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r6.data);
} }
class RidersListComponent {
    constructor(route, translate, tableService) {
        this.route = route;
        this.translate = translate;
        this.tableService = tableService;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => data.riders));
    }
}
RidersListComponent.ɵfac = function RidersListComponent_Factory(t) { return new (t || RidersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_table_service__WEBPACK_IMPORTED_MODULE_0__.TableService)); };
RidersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RidersListComponent, selectors: [["app-riders-list"]], decls: 34, vars: 22, consts: [["nzBackIcon", "", "nzTitle", "Riders", "nzSubtitle", "List of all the clients registered", 3, "nzGhost"], ["nz-button", "", "nzType", "default", "routerLink", "new"], ["nz-icon", "", "nzType", "plus"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams", 4, "ngIf"], ["filtername", "nzDropdownMenu"], [1, "ant-table-filter-dropdown"], [1, "search-box"], ["nz-input", "", 3, "placeholder"], ["lastNameInput", ""], ["nz-button", "", "nzSize", "small", "nzType", "default", 1, "search-button", 3, "click"], ["nz-button", "", "nzSize", "small", 3, "click"], ["filtermobile", "nzDropdownMenu"], ["nz-input", "", "placeholder", "Search Mobile Number"], ["mobileNumberInput", ""], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams"], ["table", ""], ["nzCustomFilter", "", "nzColumnKey", "lastName", 3, "nzSortFn"], [3, "nzActive", "nzDropdownMenu"], ["nz-icon", "", "nzType", "search"], ["nzCustomFilter", "", "nzColumnKey", "mobileNumber", 3, "nzSortFn"], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function RidersListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-page-header", 0)(1, "nz-page-header-extra")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RidersListComponent_nz_table_7_Template, 21, 23, "nz-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nz-dropdown-menu", null, 4)(11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RidersListComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14); return ctx.tableService.filterText("lastName", _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RidersListComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14); return ctx.tableService.resetFilter("lastName", _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "nz-dropdown-menu", null, 11)(24, "div", 5)(25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RidersListComponent_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27); return ctx.tableService.filterText("mobileNumber", _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RidersListComponent_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27); return ctx.tableService.resetFilter("mobileNumber", _r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, "profile.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 10, ctx.query)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.riders);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 12, "profile.lastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 14, "profile.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 16, "profile.reset"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 18, "profile.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 20, "profile.reset"), " ");
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__.NzPageHeaderContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzFilterTriggerComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__.NzDropdownMenuComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_1__.PhonePipe], encapsulation: 2 });


/***/ }),

/***/ 31702:
/*!*****************************************************!*\
  !*** ./src/app/cms/riders/riders-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RidersRoutingModule": () => (/* binding */ RidersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _rider_new_rider_new_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rider-new/rider-new.component */ 93544);
/* harmony import */ var _riders_list_riders_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./riders-list/riders-list.component */ 70601);
/* harmony import */ var _riders_list_riders_list_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./riders-list/riders-list.resolver */ 64739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: '', component: _riders_list_riders_list_component__WEBPACK_IMPORTED_MODULE_1__.RidersListComponent, resolve: { riders: _riders_list_riders_list_resolver__WEBPACK_IMPORTED_MODULE_2__.RidersListResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
    { path: 'view/:id', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_riders_rider-view_rider-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rider-view/rider-view.module */ 16599)).then(m => m.RiderViewModule) },
    { path: 'new', component: _rider_new_rider_new_component__WEBPACK_IMPORTED_MODULE_0__.RiderNewComponent }
];
class RidersRoutingModule {
}
RidersRoutingModule.ɵfac = function RidersRoutingModule_Factory(t) { return new (t || RidersRoutingModule)(); };
RidersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RidersRoutingModule });
RidersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _riders_list_riders_list_resolver__WEBPACK_IMPORTED_MODULE_2__.RidersListResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RidersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 7899:
/*!*********************************************!*\
  !*** ./src/app/cms/riders/riders.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RidersModule": () => (/* binding */ RidersModule)
/* harmony export */ });
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@components/shared.module */ 45497);
/* harmony import */ var _rider_new_rider_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rider-new/rider-new.component */ 93544);
/* harmony import */ var _riders_list_riders_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./riders-list/riders-list.component */ 70601);
/* harmony import */ var _riders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./riders-routing.module */ 31702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class RidersModule {
}
RidersModule.ɵfac = function RidersModule_Factory(t) { return new (t || RidersModule)(); };
RidersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RidersModule });
RidersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _riders_routing_module__WEBPACK_IMPORTED_MODULE_3__.RidersRoutingModule,
            _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RidersModule, { declarations: [_riders_list_riders_list_component__WEBPACK_IMPORTED_MODULE_2__.RidersListComponent, _rider_new_rider_new_component__WEBPACK_IMPORTED_MODULE_1__.RiderNewComponent], imports: [_riders_routing_module__WEBPACK_IMPORTED_MODULE_3__.RidersRoutingModule,
        _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cms_riders_riders_module_ts.js.map