"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_management_management-fleets_fleet-view_fleet-view_module_ts"],{

/***/ 6977:
/*!****************************************************************************************************************!*\
  !*** ./src/app/cms/management/management-fleets/fleet-view/fleet-view-details/fleet-view-details.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleetViewDetailsComponent": () => (/* binding */ FleetViewDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/google-maps */ 62754);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var _ridy_admin_panel_src_app_country_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/src/app/country-codes */ 62583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 2415);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);























class FleetViewDetailsComponent {
    constructor(route, fb, tagColor, updateGQL, msg, router) {
        this.route = route;
        this.fb = fb;
        this.tagColor = tagColor;
        this.updateGQL = updateGQL;
        this.msg = msg;
        this.router = router;
        this.form = this.fb.group({
            id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            mobileNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            accountNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            commissionSharePercent: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            commissionShareFlat: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            address: [null],
            exclusivityAreas: [null],
        });
        this.center = { lat: 24, lng: 12 };
        this.countryCodes = _ridy_admin_panel_src_app_country_codes__WEBPACK_IMPORTED_MODULE_2__.COUNTRY_CODE_LIST;
        this.polygons = [];
    }
    // ngOnInit(): void {
    //   this.subscription = this.route.parent?.data.subscribe(data => (this.form.patchValue(data.fleet.data.fleet)));
    // }
    ngAfterViewInit() {
        this.initializeDrawingManager();
    }
    initializeDrawingManager() {
        var _a;
        this.subscription = this.route.parent.data.subscribe((data) => {
            if (data.fleet != null) {
                const val = data.fleet.data;
                const fleet = val.fleet;
                if (fleet != null) {
                    this.form.patchValue(fleet);
                    if (fleet.exclusivityAreas != null &&
                        fleet.exclusivityAreas.length > 0) {
                        const latlngbounds = new google.maps.LatLngBounds();
                        for (const poly of fleet.exclusivityAreas) {
                            for (const location of poly) {
                                latlngbounds.extend(location);
                            }
                        }
                        this.map.fitBounds(latlngbounds);
                    }
                }
            }
        });
        this.drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYGON,
            drawingControl: true,
            map: (_a = this.map) === null || _a === void 0 ? void 0 : _a.googleMap,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: [google.maps.drawing.OverlayType.POLYGON],
            },
        });
        google.maps.event.addListener(this.drawingManager, "overlaycomplete", (event) => {
            var _a;
            (_a = this.polygons) === null || _a === void 0 ? void 0 : _a.push(event.overlay);
            if (event.type === google.maps.drawing.OverlayType.POLYGON) {
                const ar = event.overlay.getPath().getArray();
                ar.push(ar[0]);
                if (this.form.value.exclusivityAreas == null) {
                    this.form.value.exclusivityAreas = [ar];
                }
                else {
                    this.form.value.exclusivityAreas.push(ar);
                }
            }
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const _a = this.form.value, { id } = _a, _formValue = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["id"]);
            try {
                const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.updateGQL.mutate({ id, update: _formValue }));
                this.msg.success("Success");
                this.router.navigateByUrl("/management/fleets");
            }
            catch (error) {
                this.msg.error(error.message);
            }
        });
    }
    clearMap() {
        var _a;
        for (let poly of this.polygons) {
            poly.setMap(null);
        }
        this.polygons = [];
        this.form.patchValue({ exclusivityAreas: [] });
        (_a = this.drawingManager) === null || _a === void 0 ? void 0 : _a.setValues(null);
    }
}
FleetViewDetailsComponent.ɵfac = function FleetViewDetailsComponent_Factory(t) { return new (t || FleetViewDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateFleetGQL), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
FleetViewDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FleetViewDetailsComponent, selectors: [["app-fleet-view-details"]], viewQuery: function FleetViewDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_9__.GoogleMap, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
    } }, decls: 52, vars: 10, consts: [["nz-form", "", "nzLayout", "vertical", 3, "formGroup", "ngSubmit"], ["frm", ""], ["type", "hidden", "formControlName", "id"], [1, "md:grid", "md:grid-cols-4", "md:gap-2"], ["nzRequired", "", "nzFor", "name"], ["nzErrorTip", "The input is not valid Name"], ["nz-input", "", "formControlName", "name", "id", "name"], ["nzFor", "phoneNumber", "nzRequired", ""], ["formControlName", "phoneNumber", "id", "phoneNumber", 1, "w-full"], ["nzFor", "mobileNumber", "nzRequired", ""], ["formControlName", "mobileNumber", "id", "mobileNumber", 1, "w-full"], ["nzRequired", "", "nzFor", "commissionSharePercent"], ["required", "", "id", "commissionSharePercent", "formControlName", "commissionSharePercent", 1, "w-full", 3, "nzMin", "nzMax"], ["nzRequired", "", "nzFor", "commissionShareFlat"], ["required", "", "id", "commissionShareFlat", "formControlName", "commissionSharePercent", 1, "w-full", 3, "nzMin", "nzMax"], ["nzRequired", "", "nzFor", "accountNumber"], ["nz-input", "", "required", "", "id", "accountNumber", "formControlName", "accountNumber"], ["nzFor", "address"], ["nz-input", "", "id", "address", "formControlName", "address"], ["type", "hidden", "hidden", "", "formControlName", "exclusivityAreas"], ["height", "400px", "width", "100%", 3, "center", "zoom"], [3, "paths"], ["poly", ""], [1, "float-right"], ["nz-button", "", "type", "button", 2, "margin", "4px", 3, "disabled", "click"], ["nz-button", "", "nzType", "default", "type", "submit", 3, "disabled"]], template: function FleetViewDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function FleetViewDetailsComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3)(4, "nz-form-item")(5, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "nz-form-item")(10, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "nz-input-number", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "nz-form-item")(15, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "nz-input-number", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "nz-form-item")(20, "nz-form-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Commission Percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "nz-input-number", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "nz-form-item")(25, "nz-form-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Commission Flat");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "nz-input-number", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "nz-form-item")(30, "nz-form-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Bank Account Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "nz-form-item")(35, "nz-form-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "nz-form-item")(40, "nz-form-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Exclusivity Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "google-map", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "map-polygon", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 23)(48, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FleetViewDetailsComponent_Template_button_click_48_listener() { return ctx.clearMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, " Clear Map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzMin", 0)("nzMax", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzMin", 0)("nzMax", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("center", ctx.center)("zoom", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("paths", ctx.form.value.exclusivityAreas);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.polygons.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_13__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__.MapPolygon, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 25854:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/cms/management/management-fleets/fleet-view/fleet-view-financials/fleet-view-financials.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleetViewFinancialsComponent": () => (/* binding */ FleetViewFinancialsComponent)
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
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/select */ 80517);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 2415);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-timeago */ 77258);































function FleetViewFinancialsComponent_nz_table_1_tr_23_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/management/users/view/" + data_r9.operatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "table.viewOperator"));
} }
function FleetViewFinancialsComponent_nz_table_1_tr_23_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/requests/view/" + data_r9.requestId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "table.viewRequest"));
} }
function FleetViewFinancialsComponent_nz_table_1_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, FleetViewFinancialsComponent_nz_table_1_tr_23_a_17_Template, 3, 4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, FleetViewFinancialsComponent_nz_table_1_tr_23_a_18_Template, 3, 4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nz-tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 10, data_r9.transactionTimestamp, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 13, data_r9.transactionTimestamp), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r9.action === "Deduct" ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 15, "enum.transactionType." + data_r9.deductType) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 17, "enum.transactionType." + data_r9.rechargeType), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", data_r9.action === "Recharge" ? "text-green-500" : "text-red-500");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", data_r9.action === "Recharge" ? "+" : "", "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 19, data_r9.amount, data_r9.currency), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r9.refrenceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r9.operatorId !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r9.requestId !== null);
} }
function FleetViewFinancialsComponent_nz_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzQueryParams", function FleetViewFinancialsComponent_nz_table_1_Template_nz_table_nzQueryParams_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.tableService.onTableQueryParamsChange; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, FleetViewFinancialsComponent_nz_table_1_tr_23_Template, 19, 22, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const transactions_r6 = ctx.ngIf;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzFrontPagination", false)("nzData", transactions_r6.nodes)("nzTotal", transactions_r6.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 10, "profile.dateTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 12, "profile.transactionType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 14, "profile.amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 16, "profile.documentNumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 18, "profile.details"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 20, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r7.data);
} }
function FleetViewFinancialsComponent_nz_table_3_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 1, item_r19.balance, item_r19.currency));
} }
function FleetViewFinancialsComponent_nz_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 31, 32)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FleetViewFinancialsComponent_nz_table_3_tr_7_Template, 4, 4, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const wallets_r16 = ctx.ngIf;
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", wallets_r16)("nzTotal", wallets_r16.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r17.data);
} }
function FleetViewFinancialsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
} }
function FleetViewFinancialsComponent_nz_form_item_17_nz_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const type_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "enum.transactionType." + type_r21))("nzValue", type_r21);
} }
function FleetViewFinancialsComponent_nz_form_item_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-form-item")(1, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Recharge Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-form-control")(4, "nz-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FleetViewFinancialsComponent_nz_form_item_17_nz_option_5_Template, 2, 4, "nz-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.rechargeTypes);
} }
function FleetViewFinancialsComponent_nz_form_item_18_nz_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const type_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "enum.transactionType." + type_r23))("nzValue", type_r23);
} }
function FleetViewFinancialsComponent_nz_form_item_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-form-item")(1, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Deduct Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-form-control")(4, "nz-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FleetViewFinancialsComponent_nz_form_item_18_nz_option_5_Template, 2, 4, "nz-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.deductTypes);
} }
function FleetViewFinancialsComponent_nz_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 34);
} if (rf & 2) {
    const currency_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", currency_r24.currency)("nzValue", currency_r24.currency);
} }
class FleetViewFinancialsComponent {
    constructor(route, tagColor, tableService, fb, msg, routerHelper, createTransactionGQL) {
        this.route = route;
        this.tagColor = tagColor;
        this.tableService = tableService;
        this.fb = fb;
        this.msg = msg;
        this.routerHelper = routerHelper;
        this.createTransactionGQL = createTransactionGQL;
        this.formTransaction = this.fb.group({
            action: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            rechargeType: [null],
            deductType: [null],
            amount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            description: [null],
            refrenceNumber: [null],
        });
        this.deductTypes = Object.keys(_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ProviderDeductTransactionType);
        this.rechargeTypes = Object.keys(_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ProviderRechargeTransactionType);
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((data) => data.financials));
    }
    getUniquieCurrencies(currencies) {
        if (currencies == undefined)
            return [];
        return [...new Set(currencies)];
    }
    onSubmitTransaction() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.formTransaction.value.fleetId = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.snapshot.params.id;
            if (this.formTransaction.value.action == "Deduct" &&
                this.formTransaction.value.deductType == null) {
                this.msg.error("Please select the transaction type.");
                return;
            }
            if (this.formTransaction.value.action == "Recharge" &&
                this.formTransaction.value.rechargeType == null) {
                this.msg.error("Please select the transaction type.");
                return;
            }
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
}
FleetViewFinancialsComponent.ɵfac = function FleetViewFinancialsComponent_Factory(t) { return new (t || FleetViewFinancialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_3__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_2__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__.RouterHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateFleetTransactionGQL)); };
FleetViewFinancialsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FleetViewFinancialsComponent, selectors: [["app-fleet-view-financials"]], decls: 44, vars: 20, consts: [["fxLayout", "row", "fxLayoutGap", "4px", 1, "dt-actionbar"], ["nzTitle", "Transactions Records", "nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams", 4, "ngIf"], ["nzTitle", "Wallet Summary", "nzBordered", "", "class", "mt-2", 3, "nzFrontPagination", "nzData", "nzTotal", 4, "ngIf"], [1, "mt-2", 3, "nzTitle"], ["nz-form", "", 3, "formGroup", "ngSubmit"], [1, "lg:grid", "lg:grid-cols-2", "lg:gap-2"], ["nzRequired", ""], ["formControlName", "action", "nzRequired", ""], ["nzLabel", "Deduct", "nzValue", "Deduct"], ["nzLabel", "Recharge", "nzValue", "Recharge"], [4, "ngIf"], ["nzRequired", "", "nzFor", "amount"], ["formControlName", "amount", "id", "amount", "required", "", 1, "w-full"], ["formControlName", "currency", "id", "currency", "required", ""], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzFor", "refrenceNumber"], ["nz-input", "", "formControlName", "refrenceNumber", "id", "refrenceNumber"], ["nzFor", "description"], ["nz-input", "", "formControlName", "description", "id", "description"], ["nz-button", "", "nzType", "default", "type", "submit", 1, "float-right", "mt-2", 3, "disabled"], ["nzTitle", "Transactions Records", "nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams"], ["table", ""], ["nzShowSort", "", "nzColumnKey", "transactionTime"], ["nzShowSort", "", "nzColumnKey", "transactionType"], [1, "hidden", "lg:table-cell"], [1, "hidden", "xl:table-cell"], [4, "ngFor", "ngForOf"], [3, "nz-tooltip"], [3, "ngClass"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], ["nzTitle", "Wallet Summary", "nzBordered", "", 1, "mt-2", 3, "nzFrontPagination", "nzData", "nzTotal"], ["walletTable", ""], ["formControlName", "rechargeType"], [3, "nzLabel", "nzValue"], ["formControlName", "deductType"]], template: function FleetViewFinancialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FleetViewFinancialsComponent_nz_table_1_Template, 24, 22, "nz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FleetViewFinancialsComponent_nz_table_3_Template, 8, 3, "nz-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nz-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function FleetViewFinancialsComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmitTransaction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "nz-form-item")(10, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nz-form-control")(13, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "nz-option", 8)(15, "nz-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, FleetViewFinancialsComponent_div_16_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, FleetViewFinancialsComponent_nz_form_item_17_Template, 6, 1, "nz-form-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, FleetViewFinancialsComponent_nz_form_item_18_Template, 6, 1, "nz-form-item", 10);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, FleetViewFinancialsComponent_nz_option_29_Template, 1, 2, "nz-option", 14);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 10, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.fleet == null ? null : tmp_0_0.data.fleet.transactions);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 12, ctx.query)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.fleet == null ? null : tmp_1_0.data.fleet.wallets);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormControlComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzOptionComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_18__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__["ɵNzTransitionPatchDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_24__.TimeagoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 63098:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/cms/management/management-fleets/fleet-view/fleet-view-financials/fleet-view-financials.resolver.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleetViewFinancialsResolver": () => (/* binding */ FleetViewFinancialsResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class FleetViewFinancialsResolver {
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
FleetViewFinancialsResolver.ɵfac = function FleetViewFinancialsResolver_Factory(t) { return new (t || FleetViewFinancialsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.FleetFinancialsGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService)); };
FleetViewFinancialsResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FleetViewFinancialsResolver, factory: FleetViewFinancialsResolver.ɵfac });


/***/ }),

/***/ 39922:
/*!******************************************************************************************!*\
  !*** ./src/app/cms/management/management-fleets/fleet-view/fleet-view-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleetViewRoutingModule": () => (/* binding */ FleetViewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fleet_view_details_fleet_view_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fleet-view-details/fleet-view-details.component */ 6977);
/* harmony import */ var _fleet_view_financials_fleet_view_financials_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fleet-view-financials/fleet-view-financials.component */ 25854);
/* harmony import */ var _fleet_view_financials_fleet_view_financials_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fleet-view-financials/fleet-view-financials.resolver */ 63098);
/* harmony import */ var _fleet_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fleet-view.component */ 12684);
/* harmony import */ var _fleet_view_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fleet-view.resolver */ 9901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '', component: _fleet_view_component__WEBPACK_IMPORTED_MODULE_3__.FleetViewComponent, resolve: { fleet: _fleet_view_resolver__WEBPACK_IMPORTED_MODULE_4__.FleetViewResolver }, children: [
            { path: '', redirectTo: 'details', pathMatch: 'full' },
            { path: 'details', component: _fleet_view_details_fleet_view_details_component__WEBPACK_IMPORTED_MODULE_0__.FleetViewDetailsComponent },
            { path: 'financials', component: _fleet_view_financials_fleet_view_financials_component__WEBPACK_IMPORTED_MODULE_1__.FleetViewFinancialsComponent, resolve: { financials: _fleet_view_financials_fleet_view_financials_resolver__WEBPACK_IMPORTED_MODULE_2__.FleetViewFinancialsResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' }
        ]
    }
];
class FleetViewRoutingModule {
}
FleetViewRoutingModule.ɵfac = function FleetViewRoutingModule_Factory(t) { return new (t || FleetViewRoutingModule)(); };
FleetViewRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FleetViewRoutingModule });
FleetViewRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _fleet_view_resolver__WEBPACK_IMPORTED_MODULE_4__.FleetViewResolver,
        _fleet_view_financials_fleet_view_financials_resolver__WEBPACK_IMPORTED_MODULE_2__.FleetViewFinancialsResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FleetViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 12684:
/*!*************************************************************************************!*\
  !*** ./src/app/cms/management/management-fleets/fleet-view/fleet-view.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleetViewComponent": () => (/* binding */ FleetViewComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 3698);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 29801);













function FleetViewComponent_nz_card_0_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "profile.details"));
} }
function FleetViewComponent_nz_card_0_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "profile.financialRecords"));
} }
function FleetViewComponent_nz_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-card")(1, "nz-page-header")(2, "nz-page-header-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nz-page-header-tags")(5, "nz-page-header-extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-page-header-content")(7, "div", 1)(8, "div", 2)(9, "nz-descriptions", 3)(10, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-page-header-footer")(17, "nz-tabset", 5)(18, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, FleetViewComponent_nz_card_0_a_19_Template, 3, 3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, FleetViewComponent_nz_card_0_a_21_Template, 3, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const fleet_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fleet_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "profile.phoneNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fleet_r1.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "profile.address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fleet_r1.address);
} }
class FleetViewComponent {
    constructor(route, _tagColor, translation) {
        this.route = route;
        this._tagColor = _tagColor;
        this.translation = translation;
        this.tagColor = _tagColor;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((data) => data.fleet));
    }
}
FleetViewComponent.ɵfac = function FleetViewComponent_Factory(t) { return new (t || FleetViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
FleetViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FleetViewComponent, selectors: [["app-fleet-view"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "content"], [1, "main"], [3, "nzColumn"], [3, "nzTitle", "nzSpan"], ["nzLinkRouter", "", 1, "mb-2"], ["nz-tab-link", "", "routerLink", "details", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "financials", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "details"], ["nz-tab-link", "", "routerLink", "financials"]], template: function FleetViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FleetViewComponent_nz_card_0_Template, 23, 12, "nz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.fleet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__.NzCardComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__.NzPageHeaderTitleDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__.NzPageHeaderTagDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__.NzPageHeaderExtraDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__.NzPageHeaderContentDirective, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__.NzDescriptionsItemComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__.NzPageHeaderFooterDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__.NzTabComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__.NzTabLinkTemplateDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__.NzTabLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 93048:
/*!**********************************************************************************!*\
  !*** ./src/app/cms/management/management-fleets/fleet-view/fleet-view.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleetViewModule": () => (/* binding */ FleetViewModule)
/* harmony export */ });
/* harmony import */ var _fleet_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fleet-view-routing.module */ 39922);
/* harmony import */ var _fleet_view_details_fleet_view_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fleet-view-details/fleet-view-details.component */ 6977);
/* harmony import */ var _fleet_view_financials_fleet_view_financials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fleet-view-financials/fleet-view-financials.component */ 25854);
/* harmony import */ var _fleet_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fleet-view.component */ 12684);
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class FleetViewModule {
}
FleetViewModule.ɵfac = function FleetViewModule_Factory(t) { return new (t || FleetViewModule)(); };
FleetViewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FleetViewModule });
FleetViewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[_fleet_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.FleetViewRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FleetViewModule, { declarations: [_fleet_view_component__WEBPACK_IMPORTED_MODULE_3__.FleetViewComponent,
        _fleet_view_details_fleet_view_details_component__WEBPACK_IMPORTED_MODULE_1__.FleetViewDetailsComponent,
        _fleet_view_financials_fleet_view_financials_component__WEBPACK_IMPORTED_MODULE_2__.FleetViewFinancialsComponent], imports: [_fleet_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.FleetViewRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 9901:
/*!************************************************************************************!*\
  !*** ./src/app/cms/management/management-fleets/fleet-view/fleet-view.resolver.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleetViewResolver": () => (/* binding */ FleetViewResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class FleetViewResolver {
    constructor(gql) {
        this.gql = gql;
    }
    resolve(route, state) {
        return this.gql.fetch({ id: route.params.id });
    }
}
FleetViewResolver.ɵfac = function FleetViewResolver_Factory(t) { return new (t || FleetViewResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ViewFleetGQL)); };
FleetViewResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FleetViewResolver, factory: FleetViewResolver.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_cms_management_management-fleets_fleet-view_fleet-view_module_ts.js.map