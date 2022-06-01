"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_drivers_driver-profile_driver-profile_module_ts"],{

/***/ 10161:
/*!*******************************************************************************************************!*\
  !*** ./src/app/cms/drivers/driver-profile/driver-profile-details/driver-profile-details.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileDetailsComponent": () => (/* binding */ DriverProfileDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/router-helper.service */ 59083);
/* harmony import */ var _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/src/environments/environment */ 92340);
/* harmony import */ var camel_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! camel-case */ 94146);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/select */ 80517);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 2415);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tag */ 92065);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/upload */ 74483);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




























function DriverProfileDetailsComponent_form_0_nz_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const g_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, "enum.gender." + ctx_r2.camelCase(g_r9)))("nzValue", g_r9);
} }
function DriverProfileDetailsComponent_form_0_nz_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 47);
} if (rf & 2) {
    const fleet_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", fleet_r10.id)("nzLabel", fleet_r10.name);
} }
function DriverProfileDetailsComponent_form_0_nz_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 47);
} if (rf & 2) {
    const car_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", car_r11.id)("nzLabel", car_r11.name);
} }
function DriverProfileDetailsComponent_form_0_nz_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 47);
} if (rf & 2) {
    const carColor_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", carColor_r12.id)("nzLabel", carColor_r12.name);
} }
function DriverProfileDetailsComponent_form_0_nz_tag_89_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-tag", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCheckedChange", function DriverProfileDetailsComponent_form_0_nz_tag_89_Template_nz_tag_nzCheckedChange_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const service_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r14.handleServiceCheckChange($event, service_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r13 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzChecked", ctx_r6.form.value.enabledServices.indexOf(service_r13.id) > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", service_r13.name, " ");
} }
function DriverProfileDetailsComponent_form_0_ng_container_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx_r7.loadingUpload ? "loading" : "plus");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, "profile.upload"), " ");
} }
function DriverProfileDetailsComponent_form_0_img_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 51);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r8.root + ctx_r8.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { Authorization: a0 }; };
function DriverProfileDetailsComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function DriverProfileDetailsComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 2)(2, "input", 3)(3, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5)(5, "nz-form-item")(6, "nz-form-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-form-item")(11, "nz-form-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "nz-form-item")(16, "nz-form-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "nz-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, DriverProfileDetailsComponent_form_0_nz_option_19_Template, 2, 4, "nz-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "nz-form-item")(21, "nz-form-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "nz-input-number", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "nz-form-item")(26, "nz-form-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "nz-form-item")(31, "nz-form-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Fleet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "nz-form-control")(34, "nz-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "nz-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, DriverProfileDetailsComponent_form_0_nz_option_36_Template, 1, 2, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "nz-form-item")(38, "nz-form-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Car Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "nz-form-control")(41, "nz-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, DriverProfileDetailsComponent_form_0_nz_option_42_Template, 1, 2, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "nz-form-item")(44, "nz-form-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Car Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "nz-form-control")(47, "nz-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, DriverProfileDetailsComponent_form_0_nz_option_48_Template, 1, 2, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "nz-form-item")(50, "nz-form-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Car Production Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "nz-input-number", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "nz-form-item")(55, "nz-form-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Car Plate Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "nz-form-item")(60, "nz-form-label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "nz-form-item")(65, "nz-form-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "nz-form-item")(70, "nz-form-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Bank Routing Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "nz-form-item")(75, "nz-form-label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Bank Swift");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "nz-form-item")(80, "nz-form-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "nz-form-item", 39)(85, "nz-form-label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](87, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, DriverProfileDetailsComponent_form_0_nz_tag_89_Template, 2, 2, "nz-tag", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "nz-form-item")(91, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "nz-form-control")(94, "nz-upload", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzChange", function DriverProfileDetailsComponent_form_0_Template_nz_upload_nzChange_94_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.handleUploadChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, DriverProfileDetailsComponent_form_0_ng_container_95_Template, 5, 4, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, DriverProfileDetailsComponent_form_0_img_96_Template, 1, 1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](99, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.genders);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", data_r1.fleets.nodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", data_r1.carModels.nodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", data_r1.carColors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](87, 16, "profile.services"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", data_r1.services);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAction", ctx_r0.root + "upload")("nzHeaders", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c0, "Bearer " + ctx_r0.jwt))("nzBeforeUpload", ctx_r0.beforeUpload)("nzShowUploadList", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](99, 18, "profile.save"), " ");
} }
class DriverProfileDetailsComponent {
    constructor(route, msg, updateGQL, routerHelper, fb) {
        this.route = route;
        this.msg = msg;
        this.updateGQL = updateGQL;
        this.routerHelper = routerHelper;
        this.fb = fb;
        this.form = this.fb.group({
            id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            mobileNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            gender: [null],
            email: [null],
            fleetId: [null],
            carId: [null],
            carColorId: [null],
            carProductionYear: [null],
            carPlate: [null],
            accountNumber: [null],
            bankName: [null],
            bankRoutingNumber: [null],
            bankSwift: [null],
            address: [null],
            mediaId: [null],
            enabledServices: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        this.root = _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.root;
        this.genders = Object.values(_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.Gender);
        this.gender = _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.Gender;
        this.camelCase = camel_case__WEBPACK_IMPORTED_MODULE_5__.camelCase;
        this.jwt = localStorage.getItem("somi_admin_token");
        this.loadingUpload = false;
        this.beforeUpload = (file, _fileList) => new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable((observer) => {
            var _a;
            const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
            if (!isJpgOrPng) {
                this.msg.error("You can only upload JPG file!");
                observer.complete();
                return;
            }
            const isLt2M = ((_a = file.size) !== null && _a !== void 0 ? _a : 0) / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.msg.error("Image must smaller than 2MB!");
                observer.complete();
                return;
            }
            observer.next(isJpgOrPng && isLt2M);
            observer.complete();
        });
    }
    ngOnInit() {
        var _a, _b;
        this.query = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)((data) => data.driver));
        this.subscription = (_b = this.route.parent) === null || _b === void 0 ? void 0 : _b.data.subscribe((data) => {
            var _a;
            data.driver.data.driver.enabledServices =
                data.driver.data.driver.enabledServices.map((_service) => _service.id);
            this.form.patchValue(data.driver.data.driver);
            this.avatarUrl = (_a = data.driver.data.driver.media) === null || _a === void 0 ? void 0 : _a.address;
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const _a = this.form.value, { id, mobileNumber, enabledServices } = _a, update = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__rest)(_a, ["id", "mobileNumber", "enabledServices"]);
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(this.updateGQL.mutate({ id, update, serviceIds: enabledServices }));
            this.routerHelper.refresh(this.route);
        });
    }
    handleServiceCheckChange(checked, service) {
        if (checked) {
            if (this.form.value.enabledServices.indexOf(service.id) < 0) {
                this.form.value.enabledServices.push(service.id);
                this.form.patchValue({
                    enabledServices: this.form.value.enabledServices,
                });
            }
        }
        else {
            this.form.patchValue({
                enabledServices: this.form.value.enabledServices.filter((_service) => _service != service.id.toString()),
            });
        }
    }
    handleUploadChange(event) {
        switch (event.file.status) {
            case "uploading":
                //this.loading = true;
                break;
            case "done":
                // Get this url from response in real world.
                this.form.patchValue({ mediaId: event.file.response.id });
                this.avatarUrl = event.file.response.address;
                break;
            case "error":
                this.msg.error("Network error");
                //this.loading = false;
                break;
        }
    }
}
DriverProfileDetailsComponent.ɵfac = function DriverProfileDetailsComponent_Factory(t) { return new (t || DriverProfileDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateDriverProfileGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__.RouterHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
DriverProfileDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DriverProfileDetailsComponent, selectors: [["app-driver-profile-details"]], decls: 2, vars: 3, consts: [["nz-form", "", "nzLayout", "vertical", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["nz-form", "", "nzLayout", "vertical", 3, "formGroup", "ngSubmit"], ["formControlName", "id", "type", "hidden", "hidden", ""], ["formControlName", "mediaId", "type", "hidden", "hidden", ""], ["formControlName", "enabledServices", "type", "hidden", "hidden", ""], [1, "lg:grid", "lg:grid-cols-4", "lg:gap-2"], ["nzRequired", "", "nzFor", "firstName"], ["nz-input", "", "required", "", "formControlName", "firstName", "id", "firstName"], ["nzRequired", "", "nzFor", "lastName"], ["nz-input", "", "required", "", "formControlName", "lastName", "id", "lastName"], ["nzFor", "gender"], ["formControlName", "gender", "id", "gender"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzRequired", "", "nzFor", "mobileNumber"], ["required", "", "formControlName", "mobileNumber", "id", "mobileNumber"], ["nzFor", "email"], ["nz-input", "", "formControlName", "email", "id", "email"], ["nzFor", "fleet"], ["id", "fleet", "formControlName", "fleetId"], ["nzLabel", "", 3, "nzValue"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzFor", "carId"], ["id", "carId", "formControlName", "carId"], ["nzFor", "carColorId"], ["id", "carColorId", "formControlName", "carColorId"], ["nzFor", "carProductionYear"], ["formControlName", "carProductionYear", "id", "carProductionYear"], ["nzFor", "carPlate"], ["nz-input", "", "formControlName", "carPlate", "id", "carPlate"], ["nzFor", "accountNumber"], ["nz-input", "", "formControlName", "accountNumber", "id", "accountNumber"], ["nzFor", "bankName"], ["nz-input", "", "formControlName", "bankName", "id", "bankName"], ["nzFor", "bankRoutingNumber"], ["nz-input", "", "formControlName", "bankRoutingNumber", "id", "bankRoutingNumber"], ["nzFor", "bankSwift"], ["nz-input", "", "formControlName", "bankSwift", "id", "bankSwift"], ["nzFor", "address"], ["nz-input", "", "formControlName", "address", "id", "address"], [1, "lg:col-span-4"], ["nzRequired", ""], ["nzMode", "checkable", 3, "nzChecked", "nzCheckedChange", 4, "ngFor", "ngForOf"], ["nzListType", "picture-card", 3, "nzAction", "nzHeaders", "nzBeforeUpload", "nzShowUploadList", "nzChange"], [4, "ngIf"], ["style", "width: 100%", 3, "src", 4, "ngIf"], ["nz-button", "", "nzType", "default", "type", "submit", 3, "disabled"], [3, "nzLabel", "nzValue"], [3, "nzValue", "nzLabel"], ["nzMode", "checkable", 3, "nzChecked", "nzCheckedChange"], ["nz-icon", "", 1, "upload-icon", 3, "nzType"], [1, "ant-upload-text"], [2, "width", "100%", 3, "src"]], template: function DriverProfileDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DriverProfileDetailsComponent_form_0_Template, 100, 22, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzOptionComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_17__.NzInputNumberComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__.NzTagComponent, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__.NzUploadComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__.NzIconDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__.NzWaveDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe], styles: ["nz-input-number[_ngcontent-%COMP%] {\n    width: 100%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaXZlci1wcm9maWxlLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFpQjtJQUFBO0FBQVkiLCJmaWxlIjoiZHJpdmVyLXByb2ZpbGUtZGV0YWlscy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJuei1pbnB1dC1udW1iZXIge0BhcHBseSB3LWZ1bGx9Il19 */"] });


/***/ }),

/***/ 47371:
/*!***********************************************************************************************************!*\
  !*** ./src/app/cms/drivers/driver-profile/driver-profile-documents/driver-profile-documents.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileDocumentsComponent": () => (/* binding */ DriverProfileDocumentsComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);






function DriverProfileDocumentsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const document_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r2.root + document_r3.address, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.root + document_r3.address, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DriverProfileDocumentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DriverProfileDocumentsComponent_div_0_div_1_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const documents_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", documents_r1);
} }
class DriverProfileDocumentsComponent {
    constructor(route) {
        this.route = route;
        this.root = _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.root;
    }
    ngOnInit() {
        var _a;
        this.query = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((data) => data.driver));
    }
}
DriverProfileDocumentsComponent.ɵfac = function DriverProfileDocumentsComponent_Factory(t) { return new (t || DriverProfileDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
DriverProfileDocumentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DriverProfileDocumentsComponent, selectors: [["app-driver-profile-documents"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [2, "width", "90%", "margin", "10px", 3, "src"]], template: function DriverProfileDocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DriverProfileDocumentsComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.driver == null ? null : tmp_0_0.data.driver.documents);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 62898:
/*!***********************************************************************************************************!*\
  !*** ./src/app/cms/drivers/driver-profile/driver-profile-feedbacks/driver-profile-feedbacks.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileFeedbacksComponent": () => (/* binding */ DriverProfileFeedbacksComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 32920);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tag */ 92065);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-timeago */ 77258);














function DriverProfileFeedbacksComponent_nz_table_0_tr_19_nz_tag_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-tag", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzColor", ctx_r5.tagColor.boolean(parameter_r7.isGood));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](parameter_r7.title);
} }
function DriverProfileFeedbacksComponent_nz_table_0_tr_19_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/requests/view/" + data_r4.requestId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "table.viewRequest"));
} }
function DriverProfileFeedbacksComponent_nz_table_0_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DriverProfileFeedbacksComponent_nz_table_0_tr_19_nz_tag_10_Template, 2, 2, "nz-tag", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DriverProfileFeedbacksComponent_nz_table_0_tr_19_a_12_Template, 3, 4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nz-tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 6, data_r4.reviewTimestamp, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 9, data_r4.reviewTimestamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", data_r4.score, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", data_r4.parameters);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r4.requestId !== null);
} }
function DriverProfileFeedbacksComponent_nz_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-table", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzQueryParams", function DriverProfileFeedbacksComponent_nz_table_0_Template_nz_table_nzQueryParams_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.tableService.onTableQueryParamsChange; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DriverProfileFeedbacksComponent_nz_table_0_tr_19_Template, 13, 11, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const feedbacks_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzFrontPagination", false)("nzData", feedbacks_r1.nodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 7, "profile.dateTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, "profile.rating"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 11, "profile.review"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 13, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r2.data);
} }
class DriverProfileFeedbacksComponent {
    constructor(tagColor, route, tableService) {
        this.tagColor = tagColor;
        this.route = route;
        this.tableService = tableService;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => data.feedbacks));
    }
}
DriverProfileFeedbacksComponent.ɵfac = function DriverProfileFeedbacksComponent_Factory(t) { return new (t || DriverProfileFeedbacksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_0__.TableService)); };
DriverProfileFeedbacksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DriverProfileFeedbacksComponent, selectors: [["app-driver-profile-feedbacks"]], decls: 2, vars: 3, consts: [["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzQueryParams", 4, "ngIf"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzQueryParams"], ["table", ""], ["nzShowSort", "", "nzColumnKey", "reviewTimestamp"], ["nzShowSort", "", "nzColumnKey", "score"], [1, "hidden", "md:table-cell"], [1, "hidden", "lg:table-cell"], [4, "ngFor", "ngForOf"], [3, "nz-tooltip"], [3, "nzColor", 4, "ngFor", "ngForOf"], [3, "routerLink", 4, "ngIf"], [3, "nzColor"], [3, "routerLink"]], template: function DriverProfileFeedbacksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DriverProfileFeedbacksComponent_nz_table_0_Template, 20, 15, "nz-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.feedbacks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__.NzTooltipDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_8__.NzTagComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_10__.TimeagoPipe], encapsulation: 2 });


/***/ }),

/***/ 93038:
/*!**********************************************************************************************************!*\
  !*** ./src/app/cms/drivers/driver-profile/driver-profile-feedbacks/driver-profile-feedbacks.resolver.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileFeedbacksResolver": () => (/* binding */ DriverProfileFeedbacksResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class DriverProfileFeedbacksResolver {
    constructor(gql, tableService) {
        this.gql = gql;
        this.tableService = tableService;
    }
    resolve(route, state) {
        var _a;
        const paging = this.tableService.deserializeQueryParams(route.queryParams);
        return this.gql.fetch({
            id: (_a = route.parent) === null || _a === void 0 ? void 0 : _a.params.id,
            paging: paging.paging,
        });
    }
}
DriverProfileFeedbacksResolver.ɵfac = function DriverProfileFeedbacksResolver_Factory(t) { return new (t || DriverProfileFeedbacksResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverFeedbacksGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService)); };
DriverProfileFeedbacksResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DriverProfileFeedbacksResolver, factory: DriverProfileFeedbacksResolver.ɵfac });


/***/ }),

/***/ 39763:
/*!***********************************************************************************************************!*\
  !*** ./src/app/cms/drivers/driver-profile/driver-profile-financial/driver-profile-financial.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileFinancialComponent": () => (/* binding */ DriverProfileFinancialComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/router-helper.service */ 59083);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 32920);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tag */ 92065);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/select */ 80517);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 2415);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-timeago */ 77258);
































function DriverProfileFinancialComponent_nz_table_1_tr_23_nz_tag_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-tag", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColor", ctx_r10.tagColor.getTransactionStatusStatusColor(data_r9.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "enum.transactionStatus." + data_r9.status));
} }
function DriverProfileFinancialComponent_nz_table_1_tr_23_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/management/users/view/" + data_r9.operatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "table.viewOperator"));
} }
function DriverProfileFinancialComponent_nz_table_1_tr_23_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/management/payment-gateways/view/" + data_r9.paymentGatewayId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "table.viewGateway"));
} }
function DriverProfileFinancialComponent_nz_table_1_tr_23_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/requests/view/" + data_r9.requestId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "table.viewRequest"));
} }
function DriverProfileFinancialComponent_nz_table_1_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DriverProfileFinancialComponent_nz_table_1_tr_23_nz_tag_9_Template, 3, 4, "nz-tag", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DriverProfileFinancialComponent_nz_table_1_tr_23_a_18_Template, 3, 4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DriverProfileFinancialComponent_nz_table_1_tr_23_a_19_Template, 3, 4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, DriverProfileFinancialComponent_nz_table_1_tr_23_a_20_Template, 3, 4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nz-tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 12, data_r9.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 15, data_r9.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r9.action === "Deduct" ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 17, "enum.transactionType." + data_r9.deductType) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 19, "enum.transactionType." + data_r9.rechargeType), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r9.status != "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", data_r9.action === "Recharge" ? "text-green-500" : "text-red-500");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", data_r9.action === "Recharge" ? "+" : "", "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 21, data_r9.amount, data_r9.currency), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r9.refrenceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r9.operatorId !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r9.paymentGatewayId !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r9.requestId !== null);
} }
function DriverProfileFinancialComponent_nz_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzQueryParams", function DriverProfileFinancialComponent_nz_table_1_Template_nz_table_nzQueryParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.tableService.onTableQueryParamsChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, DriverProfileFinancialComponent_nz_table_1_tr_23_Template, 21, 24, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const transactions_r6 = ctx.ngIf;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzFrontPagination", false)("nzData", transactions_r6.nodes)("nzTotal", transactions_r6.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSortFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 11, "profile.dateTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 13, "profile.transactionType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 15, "profile.amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 17, "profile.documentNumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 19, "profile.details"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 21, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r7.data);
} }
function DriverProfileFinancialComponent_nz_table_3_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 1, item_r23.balance, item_r23.currency));
} }
function DriverProfileFinancialComponent_nz_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 32, 33)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DriverProfileFinancialComponent_nz_table_3_tr_7_Template, 4, 4, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const driverWallets_r20 = ctx.ngIf;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", driverWallets_r20)("nzTotal", driverWallets_r20.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r21.data);
} }
function DriverProfileFinancialComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
} }
function DriverProfileFinancialComponent_nz_form_item_17_nz_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const type_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "enum.transactionType." + type_r25))("nzValue", type_r25);
} }
function DriverProfileFinancialComponent_nz_form_item_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-form-item")(1, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Recharge Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-form-control")(4, "nz-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DriverProfileFinancialComponent_nz_form_item_17_nz_option_5_Template, 2, 4, "nz-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.rechargeTypes);
} }
function DriverProfileFinancialComponent_nz_form_item_18_nz_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const type_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "enum.transactionType." + type_r27))("nzValue", type_r27);
} }
function DriverProfileFinancialComponent_nz_form_item_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-form-item")(1, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Deduct Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-form-control")(4, "nz-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DriverProfileFinancialComponent_nz_form_item_18_nz_option_5_Template, 2, 4, "nz-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.deductTypes);
} }
function DriverProfileFinancialComponent_nz_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 35);
} if (rf & 2) {
    const currency_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", currency_r28.currency)("nzValue", currency_r28.currency);
} }
class DriverProfileFinancialComponent {
    constructor(route, tableService, tagColor, fb, createTransactionGQL, routerHelper, msg) {
        this.route = route;
        this.tableService = tableService;
        this.tagColor = tagColor;
        this.fb = fb;
        this.createTransactionGQL = createTransactionGQL;
        this.routerHelper = routerHelper;
        this.msg = msg;
        this.formTransaction = this.fb.group({
            action: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            rechargeType: [null],
            deductType: [null],
            amount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            description: [null],
            refrenceNumber: [null],
        });
        this.deductTypes = Object.values(_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverDeductTransactionType);
        this.rechargeTypes = Object.values(_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverRechargeTransactionType);
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((data) => data.financials));
    }
    onSubmitTransaction() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formTransaction.value.action == "Recharge" &&
                this.formTransaction.value.rechargeType == null) {
                this.msg.error("Please select the transaction type.");
                return;
            }
            if (this.formTransaction.value.action == "Deduct" &&
                this.formTransaction.value.deductType == null) {
                this.msg.error("Please select the transaction type.");
                return;
            }
            this.formTransaction.value.driverId = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.snapshot.params.id;
            try {
                yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(this.createTransactionGQL.mutate({ input: this.formTransaction.value }));
                this.msg.success("Transaction Submitted.");
                this.routerHelper.refresh(this.route);
                this.formTransaction.patchValue({});
            }
            catch (error) {
                this.msg.error(error.message);
            }
        });
    }
    getUniquieCurrencies(currencies) {
        if (currencies == undefined)
            return [];
        return [...new Set(currencies)];
    }
}
DriverProfileFinancialComponent.ɵfac = function DriverProfileFinancialComponent_Factory(t) { return new (t || DriverProfileFinancialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_2__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_3__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateDriverTransactionGQL), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__.RouterHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__.NzMessageService)); };
DriverProfileFinancialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DriverProfileFinancialComponent, selectors: [["app-driver-profile-financial"]], decls: 44, vars: 20, consts: [["fxLayout", "row", "fxLayoutGap", "4px", 1, "dt-actionbar"], ["nzTitle", "Transactions Records", "nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams", 4, "ngIf"], ["nzTitle", "Wallet Summary", "nzBordered", "", "class", "mt-2", 3, "nzFrontPagination", "nzData", "nzTotal", 4, "ngIf"], [1, "mt-2", 3, "nzTitle"], ["nz-form", "", 3, "formGroup", "ngSubmit"], [1, "lg:grid", "lg:grid-cols-2", "lg:gap-2"], ["nzRequired", ""], ["formControlName", "action", "nzRequired", ""], ["nzLabel", "Deduct", "nzValue", "Deduct"], ["nzLabel", "Recharge", "nzValue", "Recharge"], [4, "ngIf"], ["nzRequired", "", "nzFor", "amount"], ["formControlName", "amount", "id", "amount", "required", "", 1, "w-full"], ["formControlName", "currency", "id", "currency", "required", ""], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzFor", "refrenceNumber"], ["nz-input", "", "formControlName", "refrenceNumber", "id", "refrenceNumber"], ["nzFor", "description"], ["nz-input", "", "formControlName", "description", "id", "description"], ["nz-button", "", "nzType", "default", "type", "submit", 1, "float-right", "mt-2", 3, "disabled"], ["nzTitle", "Transactions Records", "nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams"], ["table", ""], ["nzColumnKey", "createdAt", 3, "nzSortFn"], [1, "hidden", "lg:table-cell"], [1, "hidden", "xl:table-cell"], [4, "ngFor", "ngForOf"], [3, "nz-tooltip"], [3, "nzColor", 4, "ngIf"], [3, "ngClass"], [3, "routerLink", 4, "ngIf"], [3, "nzColor"], [3, "routerLink"], ["nzTitle", "Wallet Summary", "nzBordered", "", 1, "mt-2", 3, "nzFrontPagination", "nzData", "nzTotal"], ["walletTable", ""], ["formControlName", "rechargeType"], [3, "nzLabel", "nzValue"], ["formControlName", "deductType"]], template: function DriverProfileFinancialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DriverProfileFinancialComponent_nz_table_1_Template, 24, 23, "nz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DriverProfileFinancialComponent_nz_table_3_Template, 8, 3, "nz-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nz-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function DriverProfileFinancialComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmitTransaction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "nz-form-item")(10, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nz-form-control")(13, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "nz-option", 8)(15, "nz-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, DriverProfileFinancialComponent_div_16_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, DriverProfileFinancialComponent_nz_form_item_17_Template, 6, 1, "nz-form-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DriverProfileFinancialComponent_nz_form_item_18_Template, 6, 1, "nz-form-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "nz-form-item")(20, "nz-form-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "nz-input-number", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "nz-form-item")(25, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "nz-form-control")(28, "nz-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, DriverProfileFinancialComponent_nz_option_29_Template, 1, 2, "nz-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "nz-form-item")(32, "nz-form-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Document Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "nz-form-item")(37, "nz-form-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 10, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.driver == null ? null : tmp_0_0.data.driver.transactions);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 12, ctx.query)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.driver == null ? null : tmp_1_0.data.driver.wallets);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 14, "profile.insertTransaction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formTransaction);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formTransaction.value.action === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formTransaction.value.action === "Recharge");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formTransaction.value.action === "Deduct");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getUniquieCurrencies((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 16, ctx.query)) == null ? null : tmp_7_0.data == null ? null : tmp_7_0.data.regions == null ? null : tmp_7_0.data.regions.nodes));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.formTransaction.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 18, "profile.submit"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__.NzTooltipDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_14__.NzTagComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormControlComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzOptionComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_19__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__["ɵNzTransitionPatchDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_25__.TimeagoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 74650:
/*!**********************************************************************************************************!*\
  !*** ./src/app/cms/drivers/driver-profile/driver-profile-financial/driver-profile-financial.resolver.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileFinancialsResolver": () => (/* binding */ DriverProfileFinancialsResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class DriverProfileFinancialsResolver {
    constructor(gql, tableService) {
        this.gql = gql;
        this.tableService = tableService;
    }
    resolve(route, state) {
        var _a;
        const paging = this.tableService.deserializeQueryParams(route.queryParams);
        return this.gql.fetch(Object.assign({ id: (_a = route.parent) === null || _a === void 0 ? void 0 : _a.params.id }, paging));
    }
}
DriverProfileFinancialsResolver.ɵfac = function DriverProfileFinancialsResolver_Factory(t) { return new (t || DriverProfileFinancialsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverFinancialsGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService)); };
DriverProfileFinancialsResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DriverProfileFinancialsResolver, factory: DriverProfileFinancialsResolver.ɵfac });


/***/ }),

/***/ 53493:
/*!*****************************************************************************************************!*\
  !*** ./src/app/cms/drivers/driver-profile/driver-profile-orders/driver-profile-orders.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileOrdersComponent": () => (/* binding */ DriverProfileOrdersComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 32920);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tag */ 92065);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-timeago */ 77258);















function DriverProfileOrdersComponent_nz_table_0_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td")(11, "nz-tag", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td")(15, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nz-tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 8, data_r4.createdOn, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 11, data_r4.createdOn));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r4.addresses[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 13, data_r4.costAfterCoupon, data_r4.currency));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzColor", ctx_r3.tagColor.orderStatus(data_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 16, "enum.request." + data_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/requests/view/" + data_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 18, "profile.view"));
} }
function DriverProfileOrdersComponent_nz_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-table", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzQueryParams", function DriverProfileOrdersComponent_nz_table_0_Template_nz_table_nzQueryParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.tableService.onTableQueryParamsChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, DriverProfileOrdersComponent_nz_table_0_tr_20_Template, 18, 20, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const orders_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzFrontPagination", false)("nzData", orders_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSortFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 9, "profile.dateTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 11, "profile.locations"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 13, "profile.cost"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 15, "profile.status"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 17, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r2.data);
} }
class DriverProfileOrdersComponent {
    constructor(route, tagColor, tableService) {
        this.route = route;
        this.tagColor = tagColor;
        this.tableService = tableService;
        this.statuses = Object.keys(_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderStatus).map((key) => ({ text: key, value: key }));
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => data.orders));
    }
}
DriverProfileOrdersComponent.ɵfac = function DriverProfileOrdersComponent_Factory(t) { return new (t || DriverProfileOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_2__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService)); };
DriverProfileOrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DriverProfileOrdersComponent, selectors: [["app-driver-profile-orders"]], decls: 2, vars: 3, consts: [["nzShowSizeChanger", "", "class", "mt-4", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzQueryParams", 4, "ngIf"], ["nzShowSizeChanger", "", "nzBordered", "", 1, "mt-4", 3, "nzFrontPagination", "nzData", "nzQueryParams"], ["table", ""], ["nzColumnKey", "createdOn", 3, "nzSortFn"], [1, "hidden", "lg:table-cell"], [4, "ngFor", "ngForOf"], [3, "nz-tooltip"], [3, "nzColor"], [3, "routerLink"]], template: function DriverProfileOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DriverProfileOrdersComponent_nz_table_0_Template, 21, 19, "nz-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.driver == null ? null : tmp_0_0.data.driver.orders == null ? null : tmp_0_0.data.driver.orders.nodes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__.NzTooltipDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__.NzTagComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_11__.TimeagoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 87594:
/*!****************************************************************************************************!*\
  !*** ./src/app/cms/drivers/driver-profile/driver-profile-orders/driver-profile-orders.resolver.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileOrdersResolver": () => (/* binding */ DriverProfileOrdersResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class DriverProfileOrdersResolver {
    constructor(gql, tableService) {
        this.gql = gql;
        this.tableService = tableService;
    }
    resolve(route, state) {
        var _a;
        const paging = this.tableService.deserializeQueryParams(route.queryParams);
        return this.gql.fetch(Object.assign({ driverId: (_a = route.parent) === null || _a === void 0 ? void 0 : _a.params.id }, paging));
    }
}
DriverProfileOrdersResolver.ɵfac = function DriverProfileOrdersResolver_Factory(t) { return new (t || DriverProfileOrdersResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverOrdersGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService)); };
DriverProfileOrdersResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DriverProfileOrdersResolver, factory: DriverProfileOrdersResolver.ɵfac });


/***/ }),

/***/ 41998:
/*!*****************************************************************************!*\
  !*** ./src/app/cms/drivers/driver-profile/driver-profile-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileRoutingModule": () => (/* binding */ DriverProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _driver_profile_details_driver_profile_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-profile-details/driver-profile-details.component */ 10161);
/* harmony import */ var _driver_profile_documents_driver_profile_documents_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-profile-documents/driver-profile-documents.component */ 47371);
/* harmony import */ var _driver_profile_feedbacks_driver_profile_feedbacks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver-profile-feedbacks/driver-profile-feedbacks.component */ 62898);
/* harmony import */ var _driver_profile_feedbacks_driver_profile_feedbacks_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-profile-feedbacks/driver-profile-feedbacks.resolver */ 93038);
/* harmony import */ var _driver_profile_financial_driver_profile_financial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver-profile-financial/driver-profile-financial.component */ 39763);
/* harmony import */ var _driver_profile_financial_driver_profile_financial_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driver-profile-financial/driver-profile-financial.resolver */ 74650);
/* harmony import */ var _driver_profile_orders_driver_profile_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver-profile-orders/driver-profile-orders.component */ 53493);
/* harmony import */ var _driver_profile_orders_driver_profile_orders_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./driver-profile-orders/driver-profile-orders.resolver */ 87594);
/* harmony import */ var _driver_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./driver-profile.component */ 5354);
/* harmony import */ var _driver_profile_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./driver-profile.resolver */ 34547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);













const routes = [
    {
        path: '', component: _driver_profile_component__WEBPACK_IMPORTED_MODULE_8__.DriverProfileComponent, resolve: { driver: _driver_profile_resolver__WEBPACK_IMPORTED_MODULE_9__.DriverProfileResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange', children: [
            { path: '', redirectTo: 'details' },
            { path: 'details', component: _driver_profile_details_driver_profile_details_component__WEBPACK_IMPORTED_MODULE_0__.DriverProfileDetailsComponent },
            { path: 'orders', component: _driver_profile_orders_driver_profile_orders_component__WEBPACK_IMPORTED_MODULE_6__.DriverProfileOrdersComponent, resolve: { orders: _driver_profile_orders_driver_profile_orders_resolver__WEBPACK_IMPORTED_MODULE_7__.DriverProfileOrdersResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
            { path: 'financial', component: _driver_profile_financial_driver_profile_financial_component__WEBPACK_IMPORTED_MODULE_4__.DriverProfileFinancialComponent, resolve: { financials: _driver_profile_financial_driver_profile_financial_resolver__WEBPACK_IMPORTED_MODULE_5__.DriverProfileFinancialsResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
            { path: 'reviews', component: _driver_profile_feedbacks_driver_profile_feedbacks_component__WEBPACK_IMPORTED_MODULE_2__.DriverProfileFeedbacksComponent, resolve: { feedbacks: _driver_profile_feedbacks_driver_profile_feedbacks_resolver__WEBPACK_IMPORTED_MODULE_3__.DriverProfileFeedbacksResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
            { path: 'documents', component: _driver_profile_documents_driver_profile_documents_component__WEBPACK_IMPORTED_MODULE_1__.DriverProfileDocumentsComponent }
        ]
    }
];
class DriverProfileRoutingModule {
}
DriverProfileRoutingModule.ɵfac = function DriverProfileRoutingModule_Factory(t) { return new (t || DriverProfileRoutingModule)(); };
DriverProfileRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: DriverProfileRoutingModule });
DriverProfileRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        _driver_profile_resolver__WEBPACK_IMPORTED_MODULE_9__.DriverProfileResolver,
        _driver_profile_financial_driver_profile_financial_resolver__WEBPACK_IMPORTED_MODULE_5__.DriverProfileFinancialsResolver,
        _driver_profile_feedbacks_driver_profile_feedbacks_resolver__WEBPACK_IMPORTED_MODULE_3__.DriverProfileFeedbacksResolver,
        _driver_profile_orders_driver_profile_orders_resolver__WEBPACK_IMPORTED_MODULE_7__.DriverProfileOrdersResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DriverProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 5354:
/*!************************************************************************!*\
  !*** ./src/app/cms/drivers/driver-profile/driver-profile.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileComponent": () => (/* binding */ DriverProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/src/environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var camel_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! camel-case */ 94146);
/* harmony import */ var _services_router_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@services/router-helper.service */ 59083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 28625);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tag */ 92065);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 23992);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/menu */ 78028);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 3698);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 29801);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-timeago */ 77258);






























function DriverProfileComponent_nz_page_header_1_nz_descriptions_item_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-descriptions-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "driver.profile.lastSeenAt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](driver_r1.lastSeenTimestamp != null ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, driver_r1.lastSeenTimestamp) : "-");
} }
function DriverProfileComponent_nz_page_header_1_a_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "driver.profile.details"));
} }
function DriverProfileComponent_nz_page_header_1_a_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "driver.profile.orders"));
} }
function DriverProfileComponent_nz_page_header_1_a_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "driver.profile.financials"));
} }
function DriverProfileComponent_nz_page_header_1_a_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "driver.profile.reviews"));
} }
function DriverProfileComponent_nz_page_header_1_a_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "driver.profile.documents"));
} }
function DriverProfileComponent_nz_page_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-page-header")(1, "nz-page-header-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "nz-avatar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-page-header-tags")(5, "nz-tag", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nz-page-header-extra")(9, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "nz-dropdown-menu", null, 5)(15, "ul", 6)(16, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriverProfileComponent_nz_page_header_1_Template_li_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.changeStatus(ctx_r10.driverStatus.PendingApproval); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriverProfileComponent_nz_page_header_1_Template_li_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.changeStatus(ctx_r12.driverStatus.Offline); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriverProfileComponent_nz_page_header_1_Template_li_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.changeStatus(ctx_r13.driverStatus.Blocked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriverProfileComponent_nz_page_header_1_Template_li_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.changeStatus(ctx_r14.driverStatus.SoftReject); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriverProfileComponent_nz_page_header_1_Template_li_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.changeStatus(ctx_r15.driverStatus.HardReject); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriverProfileComponent_nz_page_header_1_Template_li_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.changeStatus(ctx_r16.driverStatus.Offline); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriverProfileComponent_nz_page_header_1_Template_li_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.changeStatus(ctx_r17.driverStatus.WaitingDocuments); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriverProfileComponent_nz_page_header_1_Template_li_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.changeStatus(ctx_r18.driverStatus.InService); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DriverProfileComponent_nz_page_header_1_Template_li_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.changeStatus(ctx_r19.driverStatus.Online); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "nz-page-header-content")(44, "nz-descriptions")(45, "nz-descriptions-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, DriverProfileComponent_nz_page_header_1_nz_descriptions_item_49_Template, 4, 6, "nz-descriptions-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "nz-descriptions-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "nz-page-header-footer")(54, "nz-tabset", 11)(55, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, DriverProfileComponent_nz_page_header_1_a_56_Template, 3, 3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, DriverProfileComponent_nz_page_header_1_a_58_Template, 3, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, DriverProfileComponent_nz_page_header_1_a_60_Template, 3, 3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, DriverProfileComponent_nz_page_header_1_a_62_Template, 3, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, DriverProfileComponent_nz_page_header_1_a_64_Template, 3, 3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const driver_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSrc", (driver_r1.media == null ? null : driver_r1.media.address) ? ctx_r0.root + (driver_r1.media == null ? null : driver_r1.media.address) : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", driver_r1.firstName, " ", driver_r1.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColor", ctx_r0.tagColor.driver(driver_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 22, "enum.driver.status." + ctx_r0.toCamelCase(driver_r1.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMenu", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 24, "driver.profile.changeStatus"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 26, "enum.driver.status.pendingApproval"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 28, "enum.driver.status.approved"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 30, "enum.driver.status.blocked"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 32, "enum.driver.status.softReject"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 34, "enum.driver.status.hardReject"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 36, "enum.driver.status.offline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 38, "enum.driver.status.waitingDocuments"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 40, "enum.driver.status.inService"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](42, 42, "enum.driver.status.online"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](46, 44, "profile.registeredOn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](48, 46, driver_r1.registrationTimestamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", driver_r1.status !== "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](51, 48, "driver.profile.rating"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](driver_r1.rating !== null ? driver_r1.rating + "%" + "(" + driver_r1.reviewCount + " reviews)" : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLinkExact", false);
} }
class DriverProfileComponent {
    constructor(route, tagColor, message, updateGQL, routerHelper) {
        this.route = route;
        this.tagColor = tagColor;
        this.message = message;
        this.updateGQL = updateGQL;
        this.routerHelper = routerHelper;
        this.driverStatus = _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverStatus;
        this.root = _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.root;
        this.toCamelCase = camel_case__WEBPACK_IMPORTED_MODULE_5__.camelCase;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((data) => data.driver));
    }
    changeStatus(status) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const id = (_a = this.route.snapshot.params.id) !== null && _a !== void 0 ? _a : 0;
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(this.updateGQL.mutate({ id, status }));
            this.routerHelper.refresh(this.route);
        });
    }
}
DriverProfileComponent.ɵfac = function DriverProfileComponent_Factory(t) { return new (t || DriverProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateDriverStatusGQL), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_router_helper_service__WEBPACK_IMPORTED_MODULE_3__.RouterHelperService)); };
DriverProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DriverProfileComponent, selectors: [["app-driver-profile"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["nzIcon", "user", 3, "nzSrc"], [3, "nzColor"], ["nz-button", "", "nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu4", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], ["nz-menu-item", "", "hidden", "", 3, "click"], [3, "nzTitle"], [3, "nzTitle", 4, "ngIf"], ["nzLinkRouter", "", 1, "mb-2", 3, "nzLinkExact"], ["nz-tab-link", "", "routerLink", "details", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "orders", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "financial", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "reviews", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "documents", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "details"], ["nz-tab-link", "", "routerLink", "orders"], ["nz-tab-link", "", "routerLink", "financial"], ["nz-tab-link", "", "routerLink", "reviews"], ["nz-tab-link", "", "routerLink", "documents"]], template: function DriverProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DriverProfileComponent_nz_page_header_1_Template, 66, 50, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.driver);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__.NzCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderTitleDirective, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__.NzAvatarComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderTagDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__.NzTagComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__.NzDropdownButtonDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__.NzDropDownDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_21__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_21__.NzMenuItemDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderContentDirective, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__.NzDescriptionsItemComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderFooterDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__.NzTabComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__.NzTabLinkTemplateDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__.NzTabLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_25__.TimeagoPipe], encapsulation: 2 });


/***/ }),

/***/ 74160:
/*!*********************************************************************!*\
  !*** ./src/app/cms/drivers/driver-profile/driver-profile.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileModule": () => (/* binding */ DriverProfileModule)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _driver_profile_details_driver_profile_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-profile-details/driver-profile-details.component */ 10161);
/* harmony import */ var _driver_profile_documents_driver_profile_documents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver-profile-documents/driver-profile-documents.component */ 47371);
/* harmony import */ var _driver_profile_feedbacks_driver_profile_feedbacks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-profile-feedbacks/driver-profile-feedbacks.component */ 62898);
/* harmony import */ var _driver_profile_financial_driver_profile_financial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver-profile-financial/driver-profile-financial.component */ 39763);
/* harmony import */ var _driver_profile_orders_driver_profile_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driver-profile-orders/driver-profile-orders.component */ 53493);
/* harmony import */ var _driver_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver-profile-routing.module */ 41998);
/* harmony import */ var _driver_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./driver-profile.component */ 5354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);









class DriverProfileModule {
}
DriverProfileModule.ɵfac = function DriverProfileModule_Factory(t) { return new (t || DriverProfileModule)(); };
DriverProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: DriverProfileModule });
DriverProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_driver_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__.DriverProfileRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](DriverProfileModule, { declarations: [_driver_profile_component__WEBPACK_IMPORTED_MODULE_7__.DriverProfileComponent,
        _driver_profile_details_driver_profile_details_component__WEBPACK_IMPORTED_MODULE_1__.DriverProfileDetailsComponent,
        _driver_profile_financial_driver_profile_financial_component__WEBPACK_IMPORTED_MODULE_4__.DriverProfileFinancialComponent,
        _driver_profile_feedbacks_driver_profile_feedbacks_component__WEBPACK_IMPORTED_MODULE_3__.DriverProfileFeedbacksComponent,
        _driver_profile_documents_driver_profile_documents_component__WEBPACK_IMPORTED_MODULE_2__.DriverProfileDocumentsComponent,
        _driver_profile_orders_driver_profile_orders_component__WEBPACK_IMPORTED_MODULE_5__.DriverProfileOrdersComponent], imports: [_driver_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__.DriverProfileRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 34547:
/*!***********************************************************************!*\
  !*** ./src/app/cms/drivers/driver-profile/driver-profile.resolver.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileResolver": () => (/* binding */ DriverProfileResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class DriverProfileResolver {
    constructor(gql) {
        this.gql = gql;
    }
    resolve(route, state) {
        return this.gql.fetch({ id: route.params.id });
    }
}
DriverProfileResolver.ɵfac = function DriverProfileResolver_Factory(t) { return new (t || DriverProfileResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ViewDriverGQL)); };
DriverProfileResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DriverProfileResolver, factory: DriverProfileResolver.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_cms_drivers_driver-profile_driver-profile_module_ts.js.map