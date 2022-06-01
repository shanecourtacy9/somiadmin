"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_management_management-fleets_management-fleets_module_ts"],{

/***/ 17765:
/*!***********************************************************************************!*\
  !*** ./src/app/cms/management/management-fleets/fleet-new/fleet-new.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleetNewComponent": () => (/* binding */ FleetNewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_country_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/country-codes */ 62583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ 80517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 2415);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);























function FleetNewComponent_ng_template_14_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 23);
} if (rf & 2) {
    const code_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", code_r6.name + " (" + code_r6.dial_code + ")")("nzValue", code_r6.dial_code);
} }
function FleetNewComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FleetNewComponent_ng_template_14_nz_option_1_Template, 1, 2, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.countryCodes);
} }
function FleetNewComponent_ng_template_22_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 23);
} if (rf & 2) {
    const code_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", code_r8.name + " (" + code_r8.dial_code + ")")("nzValue", code_r8.dial_code);
} }
function FleetNewComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FleetNewComponent_ng_template_22_nz_option_1_Template, 1, 2, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.countryCodes);
} }
class FleetNewComponent {
    constructor(fb, createRiderGQL, messageService, router, route) {
        this.fb = fb;
        this.createRiderGQL = createRiderGQL;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            phoneNumberPrefix: ["+1", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            mobileNumberPrefix: ["+1", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            mobileNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            accountNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            commissionSharePercent: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            commissionShareFlat: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            address: [null],
        });
        this.countryCodes = _ridy_admin_panel_src_app_country_codes__WEBPACK_IMPORTED_MODULE_1__.COUNTRY_CODE_LIST;
    }
    submitForm() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const _d = this.form.value, { phoneNumber, phoneNumberPrefix, mobileNumber, mobileNumberPrefix } = _d, _formValue = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_d, ["phoneNumber", "phoneNumberPrefix", "mobileNumber", "mobileNumberPrefix"]);
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.createRiderGQL.mutate({
                input: Object.assign({ phoneNumber: `${phoneNumberPrefix.substring(1)}${phoneNumber}`, mobileNumber: `${mobileNumberPrefix.substring(1)}${mobileNumber}` }, _formValue),
            }));
            if (((_b = (_a = result.errors) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
                this.messageService.error(((_c = result.errors) !== null && _c !== void 0 ? _c : []).map((error) => error.message).join(","));
            }
            else {
                this.messageService.success("Success");
            }
            this.router.navigateByUrl("/management/fleets");
        });
    }
}
FleetNewComponent.ɵfac = function FleetNewComponent_Factory(t) { return new (t || FleetNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateFleetGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
FleetNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FleetNewComponent, selectors: [["app-fleet-new"]], decls: 47, vars: 9, consts: [["nzBackIcon", "", "nzTitle", "New Fleet", "nzSubtitle", "Input new Fleet's details below.", 3, "nzGhost"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["frm", ""], ["nzRequired", "", "nzFor", "name"], ["nzErrorTip", "The input is not valid Name"], ["nz-input", "", "formControlName", "name", "id", "name"], ["nzFor", "phoneNumber", "nzRequired", ""], [3, "nzAddOnBefore"], ["addOnBeforeTemplate", ""], ["formControlName", "phoneNumber", "id", "phoneNumber", 1, "w-full"], ["nzFor", "mobileNumber", "nzRequired", ""], ["formControlName", "mobileNumber", "id", "mobileNumber", 1, "w-full"], ["nzRequired", "", "nzFor", "commissionSharePercent"], ["required", "", "id", "commissionSharePercent", "formControlName", "commissionSharePercent", 1, "w-full", 3, "nzMin", "nzMax"], ["nzRequired", "", "nzFor", "commissionShareFlat"], ["required", "", "id", "commissionShareFlat", "formControlName", "commissionSharePercent", 1, "w-full", 3, "nzMin", "nzMax"], ["nzRequired", "", "nzFor", "accountNumber"], ["nz-input", "", "required", "", "id", "accountNumber", "formControlName", "accountNumber"], ["nzFor", "address"], ["nz-input", "", "id", "address", "formControlName", "address"], ["nz-button", "", "nzType", "default", "type", "submit", 1, "float-right", 3, "disabled"], ["formControlName", "phoneNumberPrefix", 1, "phone-select"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], ["formControlName", "mobileNumberPrefix", 1, "phone-select"]], template: function FleetNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-card")(2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FleetNewComponent_Template_form_ngSubmit_2_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-form-item")(5, "nz-form-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nz-form-item")(10, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-form-control")(13, "nz-input-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FleetNewComponent_ng_template_14_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "nz-input-number", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nz-form-item")(18, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "nz-form-control")(21, "nz-input-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, FleetNewComponent_ng_template_22_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "nz-input-number", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "nz-form-item")(26, "nz-form-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Commission Percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "nz-input-number", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "nz-form-item")(31, "nz-form-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Commission Flat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "nz-input-number", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "nz-form-item")(36, "nz-form-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Bank Account Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "nz-form-item")(41, "nz-form-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzAddOnBefore", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzAddOnBefore", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzMin", 0)("nzMax", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzMin", 0)("nzMax", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzOptionComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_16__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__.NzWaveDirective], encapsulation: 2 });


/***/ }),

/***/ 26238:
/*!***************************************************************************************!*\
  !*** ./src/app/cms/management/management-fleets/fleets-list/fleets-list.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleetsListComponent": () => (/* binding */ FleetsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 23992);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@pipes/phone.pipe */ 5390);





















function FleetsListComponent_nz_table_7_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, data_r5.phoneNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "view/" + data_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, "table.details"));
} }
function FleetsListComponent_nz_table_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-table", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzQueryParams", function FleetsListComponent_nz_table_7_Template_nz_table_nzQueryParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.tableService.onTableQueryParamsChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-filter-trigger", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-filter-trigger", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, FleetsListComponent_nz_table_7_tr_20_Template, 10, 8, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const fleets_r2 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
    let tmp_5_0;
    let tmp_9_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzFrontPagination", false)("nzData", fleets_r2.nodes)("nzTotal", fleets_r2.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSortFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 12, "profile.name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzActive", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 14, ctx_r0.route.params)) == null ? null : tmp_5_0.filter == null ? null : tmp_5_0.filter.includes("lastName")) === true)("nzDropdownMenu", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSortFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 16, "profile.mobileNumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzActive", ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 18, ctx_r0.route.params)) == null ? null : tmp_9_0.filter == null ? null : tmp_9_0.filter.includes("mobileNumber")) === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 20, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r3.data);
} }
class FleetsListComponent {
    constructor(route, router, tagColor, tableService) {
        this.route = route;
        this.router = router;
        this.tagColor = tagColor;
        this.tableService = tableService;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((data) => data.fleets));
    }
    filter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const search = {
                name: this.nameSearchValue ? { like: this.nameSearchValue } : undefined,
            };
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: { search: JSON.stringify(search) },
                queryParamsHandling: "merge",
            });
        });
    }
}
FleetsListComponent.ɵfac = function FleetsListComponent_Factory(t) { return new (t || FleetsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_0__.TableService)); };
FleetsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FleetsListComponent, selectors: [["app-fleets-list"]], decls: 21, vars: 17, consts: [["nzBackIcon", "", "nzTitle", "Fleets", "nzSubtitle", "List of all the fleets registered", 3, "nzGhost"], ["nz-button", "", "nzType", "default", "routerLink", "new"], ["nz-icon", "", "nzType", "plus"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams", 4, "ngIf"], ["filtername", "nzDropdownMenu"], [1, "ant-table-filter-dropdown"], [1, "search-box"], ["type", "text", "nz-input", "", 3, "placeholder", "ngModel", "ngModelChange"], ["nz-button", "", "nzSize", "small", "nzType", "default", 1, "search-button", 3, "click"], ["nz-button", "", "nzSize", "small", 3, "click"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams"], ["table", ""], ["nzCustomFilter", "", "nzColumnKey", "lastName", 3, "nzSortFn"], [3, "nzActive", "nzDropdownMenu"], ["nz-icon", "", "nzType", "search"], ["nzCustomFilter", "", "nzColumnKey", "mobileNumber", 3, "nzSortFn"], [3, "nzActive"], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function FleetsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-page-header", 0)(1, "nz-page-header-extra")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FleetsListComponent_nz_table_7_Template, 21, 22, "nz-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-dropdown-menu", null, 4)(11, "div", 5)(12, "div", 6)(13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FleetsListComponent_Template_input_ngModelChange_13_listener($event) { return ctx.nameSearchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FleetsListComponent_Template_button_click_15_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FleetsListComponent_Template_button_click_18_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 7, "profile.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 9, ctx.query)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.fleets);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 11, "profile.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nameSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 13, "profile.view"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 15, "profile.reset"), " ");
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__.NzPageHeaderContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzFilterTriggerComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropdownMenuComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__.PhonePipe], encapsulation: 2 });


/***/ }),

/***/ 76664:
/*!**************************************************************************************!*\
  !*** ./src/app/cms/management/management-fleets/fleets-list/fleets-list.resolver.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleetsListResolver": () => (/* binding */ FleetsListResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class FleetsListResolver {
    constructor(paging, gql) {
        this.paging = paging;
        this.gql = gql;
    }
    resolve(route, state) {
        const params = this.paging.deserializeQueryParams(route.queryParams);
        return this.gql.fetch(params);
    }
}
FleetsListResolver.ɵfac = function FleetsListResolver_Factory(t) { return new (t || FleetsListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.FleetsListGQL)); };
FleetsListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FleetsListResolver, factory: FleetsListResolver.ɵfac });


/***/ }),

/***/ 54029:
/*!**************************************************************************************!*\
  !*** ./src/app/cms/management/management-fleets/management-fleets-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementFleetsRoutingModule": () => (/* binding */ ManagementFleetsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fleet_new_fleet_new_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fleet-new/fleet-new.component */ 17765);
/* harmony import */ var _fleets_list_fleets_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fleets-list/fleets-list.component */ 26238);
/* harmony import */ var _fleets_list_fleets_list_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fleets-list/fleets-list.resolver */ 76664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: '', component: _fleets_list_fleets_list_component__WEBPACK_IMPORTED_MODULE_1__.FleetsListComponent, resolve: { fleets: _fleets_list_fleets_list_resolver__WEBPACK_IMPORTED_MODULE_2__.FleetsListResolver } },
    { path: 'view/:id', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cms_management_management-fleets_fleet-view_fleet-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./fleet-view/fleet-view.module */ 93048)).then(m => m.FleetViewModule) },
    { path: 'new', component: _fleet_new_fleet_new_component__WEBPACK_IMPORTED_MODULE_0__.FleetNewComponent }
];
class ManagementFleetsRoutingModule {
}
ManagementFleetsRoutingModule.ɵfac = function ManagementFleetsRoutingModule_Factory(t) { return new (t || ManagementFleetsRoutingModule)(); };
ManagementFleetsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ManagementFleetsRoutingModule });
ManagementFleetsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _fleets_list_fleets_list_resolver__WEBPACK_IMPORTED_MODULE_2__.FleetsListResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ManagementFleetsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 1949:
/*!******************************************************************************!*\
  !*** ./src/app/cms/management/management-fleets/management-fleets.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementFleetsModule": () => (/* binding */ ManagementFleetsModule)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _fleet_new_fleet_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fleet-new/fleet-new.component */ 17765);
/* harmony import */ var _fleets_list_fleets_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fleets-list/fleets-list.component */ 26238);
/* harmony import */ var _management_fleets_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management-fleets-routing.module */ 54029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class ManagementFleetsModule {
}
ManagementFleetsModule.ɵfac = function ManagementFleetsModule_Factory(t) { return new (t || ManagementFleetsModule)(); };
ManagementFleetsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ManagementFleetsModule });
ManagementFleetsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_management_fleets_routing_module__WEBPACK_IMPORTED_MODULE_3__.ManagementFleetsRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ManagementFleetsModule, { declarations: [_fleets_list_fleets_list_component__WEBPACK_IMPORTED_MODULE_2__.FleetsListComponent, _fleet_new_fleet_new_component__WEBPACK_IMPORTED_MODULE_1__.FleetNewComponent], imports: [_management_fleets_routing_module__WEBPACK_IMPORTED_MODULE_3__.ManagementFleetsRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cms_management_management-fleets_management-fleets_module_ts.js.map