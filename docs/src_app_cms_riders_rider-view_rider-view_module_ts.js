"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_riders_rider-view_rider-view_module_ts"],{

/***/ 72523:
/*!**********************************************************************************************!*\
  !*** ./src/app/cms/riders/rider-view/rider-view-addresses/rider-view-addresses.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderViewAddressesComponent": () => (/* binding */ RiderViewAddressesComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);









function RiderViewAddressesComponent_nz_table_0_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td")(6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiderViewAddressesComponent_nz_table_0_tr_14_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const data_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.openMap(data_r4.location); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Open In Google Maps");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.details);
} }
function RiderViewAddressesComponent_nz_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-table", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzQueryParams", function RiderViewAddressesComponent_nz_table_0_Template_nz_table_nzQueryParams_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.tableService.onTableQueryParamsChange; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RiderViewAddressesComponent_nz_table_0_tr_14_Template, 8, 2, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const addresses_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzFrontPagination", false)("nzData", addresses_r1.nodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "profile.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, "profile.address"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 10, "profile.location"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r2.data);
} }
class RiderViewAddressesComponent {
    constructor(route, tableService) {
        this.route = route;
        this.tableService = tableService;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => data.addresses));
    }
    openMap(location) {
        var url = "https://maps.google.com/?q=" + location.lat + "," + location.lng;
        window.open(url);
    }
}
RiderViewAddressesComponent.ɵfac = function RiderViewAddressesComponent_Factory(t) { return new (t || RiderViewAddressesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_0__.TableService)); };
RiderViewAddressesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RiderViewAddressesComponent, selectors: [["app-rider-view-addresses"]], decls: 2, vars: 3, consts: [["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzQueryParams", 4, "ngIf"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzQueryParams"], ["table", ""], [1, "hidden", "md:table-cell"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function RiderViewAddressesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RiderViewAddressesComponent_nz_table_0_Template, 15, 12, "nz-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.riderAddresses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 91537:
/*!*********************************************************************************************!*\
  !*** ./src/app/cms/riders/rider-view/rider-view-addresses/rider-view-addresses.resolver.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderViewAddresssesResolver": () => (/* binding */ RiderViewAddresssesResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class RiderViewAddresssesResolver {
    constructor(gql, tableService) {
        this.gql = gql;
        this.tableService = tableService;
    }
    resolve(route, state) {
        var _a;
        const paging = this.tableService.deserializeQueryParams(route.queryParams);
        return this.gql.fetch({
            riderId: (_a = route.parent) === null || _a === void 0 ? void 0 : _a.params.id,
            paging: paging.paging,
        });
    }
}
RiderViewAddresssesResolver.ɵfac = function RiderViewAddresssesResolver_Factory(t) { return new (t || RiderViewAddresssesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RiderAddressesGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService)); };
RiderViewAddresssesResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RiderViewAddresssesResolver, factory: RiderViewAddresssesResolver.ɵfac });


/***/ }),

/***/ 34413:
/*!************************************************************************************************!*\
  !*** ./src/app/cms/riders/rider-view/rider-view-financials/rider-view-financials.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderViewFinancialsComponent": () => (/* binding */ RiderViewFinancialsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/router-helper.service */ 59083);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
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

































function RiderViewFinancialsComponent_nz_table_0_tr_23_nz_tag_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-tag", 29);
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
function RiderViewFinancialsComponent_nz_table_0_tr_23_a_18_Template(rf, ctx) { if (rf & 1) {
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
function RiderViewFinancialsComponent_nz_table_0_tr_23_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/management/payment-gateways/view/" + data_r9.paymentGatewayId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "table.viewGateway"));
} }
function RiderViewFinancialsComponent_nz_table_0_tr_23_a_20_Template(rf, ctx) { if (rf & 1) {
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
function RiderViewFinancialsComponent_nz_table_0_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, RiderViewFinancialsComponent_nz_table_0_tr_23_nz_tag_9_Template, 3, 4, "nz-tag", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, RiderViewFinancialsComponent_nz_table_0_tr_23_a_18_Template, 3, 4, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, RiderViewFinancialsComponent_nz_table_0_tr_23_a_19_Template, 3, 4, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, RiderViewFinancialsComponent_nz_table_0_tr_23_a_20_Template, 3, 4, "a", 28);
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
function RiderViewFinancialsComponent_nz_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzQueryParams", function RiderViewFinancialsComponent_nz_table_0_Template_nz_table_nzQueryParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.tableService.onTableQueryParamsChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th", 21);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, RiderViewFinancialsComponent_nz_table_0_tr_23_Template, 21, 24, "tr", 24);
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
function RiderViewFinancialsComponent_nz_table_2_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 1, item_r23.balance, item_r23.currency));
} }
function RiderViewFinancialsComponent_nz_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 31, 32)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, RiderViewFinancialsComponent_nz_table_2_tr_7_Template, 4, 4, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const riderWallets_r20 = ctx.ngIf;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", riderWallets_r20)("nzTotal", riderWallets_r20.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r21.data);
} }
function RiderViewFinancialsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
} }
function RiderViewFinancialsComponent_nz_form_item_16_nz_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const type_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "enum.transactionType." + type_r25))("nzValue", type_r25);
} }
function RiderViewFinancialsComponent_nz_form_item_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-form-item")(1, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Recharge Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-form-control")(4, "nz-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, RiderViewFinancialsComponent_nz_form_item_16_nz_option_5_Template, 2, 4, "nz-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.rechargeTypes);
} }
function RiderViewFinancialsComponent_nz_form_item_17_nz_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const type_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "enum.transactionType." + type_r27))("nzValue", type_r27);
} }
function RiderViewFinancialsComponent_nz_form_item_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-form-item")(1, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Deduct Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-form-control")(4, "nz-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, RiderViewFinancialsComponent_nz_form_item_17_nz_option_5_Template, 2, 4, "nz-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.deductTypes);
} }
function RiderViewFinancialsComponent_nz_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 34);
} if (rf & 2) {
    const currency_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", currency_r28.currency)("nzValue", currency_r28.currency);
} }
class RiderViewFinancialsComponent {
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
        this.deductTypes = Object.keys(_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RiderDeductTransactionType);
        this.rechargeTypes = Object.keys(_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RiderRechargeTransactionType);
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => data.financials));
    }
    onSubmitTransaction() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.formTransaction.value.riderId = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.snapshot.params.id;
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
RiderViewFinancialsComponent.ɵfac = function RiderViewFinancialsComponent_Factory(t) { return new (t || RiderViewFinancialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_2__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_3__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateRiderTransactionGQL), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__.RouterHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__.NzMessageService)); };
RiderViewFinancialsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RiderViewFinancialsComponent, selectors: [["app-rider-view-financials"]], decls: 43, vars: 20, consts: [["nzTitle", "Transactions Records", "nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams", 4, "ngIf"], ["nzTitle", "Wallet Summary", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", 4, "ngIf"], [3, "nzTitle"], ["nz-form", "", 3, "formGroup", "ngSubmit"], [1, "lg:grid", "lg:grid-cols-2", "lg:gap-2"], ["nzRequired", ""], ["formControlName", "action", "nzRequired", ""], ["nzLabel", "Deduct", "nzValue", "Deduct"], ["nzLabel", "Recharge", "nzValue", "Recharge"], [4, "ngIf"], ["nzRequired", "", "nzFor", "amount"], ["formControlName", "amount", "id", "amount", "required", "", 1, "w-full"], ["formControlName", "currency", "id", "currency", "required", ""], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzFor", "refrenceNumber"], ["nz-input", "", "formControlName", "refrenceNumber", "id", "refrenceNumber"], ["nzFor", "description"], ["nz-input", "", "formControlName", "description", "id", "description"], ["nz-button", "", "nzType", "default", "type", "submit", 1, "float-right", "mt-2", 3, "disabled"], ["nzTitle", "Transactions Records", "nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams"], ["table", ""], ["nzColumnKey", "createdAt", 3, "nzSortFn"], [1, "hidden", "lg:table-cell"], [1, "hidden", "xl:table-cell"], [4, "ngFor", "ngForOf"], [3, "nz-tooltip"], ["class", "ml-1", 3, "nzColor", 4, "ngIf"], [3, "ngClass"], [3, "routerLink", 4, "ngIf"], [1, "ml-1", 3, "nzColor"], [3, "routerLink"], ["nzTitle", "Wallet Summary", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal"], ["walletTable", ""], ["formControlName", "rechargeType"], [3, "nzLabel", "nzValue"], ["formControlName", "deductType"]], template: function RiderViewFinancialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, RiderViewFinancialsComponent_nz_table_0_Template, 24, 23, "nz-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RiderViewFinancialsComponent_nz_table_2_Template, 8, 3, "nz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function RiderViewFinancialsComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmitTransaction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "nz-form-item")(9, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "nz-form-control")(12, "nz-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "nz-option", 7)(14, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, RiderViewFinancialsComponent_div_15_Template, 1, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, RiderViewFinancialsComponent_nz_form_item_16_Template, 6, 1, "nz-form-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, RiderViewFinancialsComponent_nz_form_item_17_Template, 6, 1, "nz-form-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "nz-form-item")(19, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "nz-input-number", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "nz-form-item")(24, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "nz-form-control")(27, "nz-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, RiderViewFinancialsComponent_nz_option_28_Template, 1, 2, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "nz-form-item")(31, "nz-form-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Document Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "nz-form-item")(36, "nz-form-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 10, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.rider == null ? null : tmp_0_0.data.rider.transactions);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 12, ctx.query)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.rider == null ? null : tmp_1_0.data.rider.wallets == null ? null : tmp_1_0.data.rider.wallets.nodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 14, "profile.insertTransaction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formTransaction);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formTransaction.value.action === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formTransaction.value.action === "Recharge");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formTransaction.value.action === "Deduct");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getUniquieCurrencies((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 16, ctx.query)) == null ? null : tmp_7_0.data == null ? null : tmp_7_0.data.regions == null ? null : tmp_7_0.data.regions.nodes));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.formTransaction.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](42, 18, "profile.submit"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__.NzTooltipDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_14__.NzTagComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormControlComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzOptionComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_19__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__["ɵNzTransitionPatchDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_25__.TimeagoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 86915:
/*!***********************************************************************************************!*\
  !*** ./src/app/cms/riders/rider-view/rider-view-financials/rider-view-financials.resolver.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderViewFinancialsResolver": () => (/* binding */ RiderViewFinancialsResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class RiderViewFinancialsResolver {
    constructor(gql, tableService) {
        this.gql = gql;
        this.tableService = tableService;
    }
    resolve(route, state) {
        var _a;
        const paging = this.tableService.deserializeQueryParams(route.queryParams);
        return this.gql.fetch(Object.assign({ riderId: (_a = route.parent) === null || _a === void 0 ? void 0 : _a.params.id }, paging));
    }
}
RiderViewFinancialsResolver.ɵfac = function RiderViewFinancialsResolver_Factory(t) { return new (t || RiderViewFinancialsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RiderWalletGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService)); };
RiderViewFinancialsResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RiderViewFinancialsResolver, factory: RiderViewFinancialsResolver.ɵfac });


/***/ }),

/***/ 44337:
/*!************************************************************************************!*\
  !*** ./src/app/cms/riders/rider-view/rider-view-info/rider-view-info.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderViewInfoComponent": () => (/* binding */ RiderViewInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/router-helper.service */ 59083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ 80517);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);

















class RiderViewInfoComponent {
    constructor(route, router, fb, updateRiderGQL, routerHelper) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.updateRiderGQL = updateRiderGQL;
        this.routerHelper = routerHelper;
        this.form = this.fb.group({
            id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            mobileNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            gender: [null],
            email: [null],
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.valObserver) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    ngOnInit() {
        var _a;
        this.valObserver = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.data.subscribe((data) => this.form.patchValue(data.rider.data.rider));
    }
    onSubmit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const id = (_a = this.route.snapshot.parent) === null || _a === void 0 ? void 0 : _a.params.id;
            this.updateRiderGQL.mutate({ id, update: this.form.value });
            this.routerHelper.refresh(this.route);
        });
    }
}
RiderViewInfoComponent.ɵfac = function RiderViewInfoComponent_Factory(t) { return new (t || RiderViewInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateRiderGQL), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__.RouterHelperService)); };
RiderViewInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RiderViewInfoComponent, selectors: [["app-rider-view-info"]], decls: 31, vars: 3, consts: [["nz-form", "", 1, "lg:grid", "lg:grid-cols-3", "lg:gap-2", 3, "nzLayout", "formGroup", "ngSubmit"], ["formControlName", "id", "type", "hidden", "hidden", ""], ["nzRequired", "", "nzFor", "firstName"], ["nzErrorTip", "The input is not valid First Name"], ["nz-input", "", "formControlName", "firstName", "id", "firstName"], ["nzRequired", "", "nzFor", "lastName"], ["nzErrorTip", "The input is not valid Last Name"], ["nz-input", "", "formControlName", "lastName", "id", "lastName"], ["nzFor", "mobileNumber", "nzRequired", ""], ["nzErrorTip", "The input is not valid Mobile Number"], ["nz-input", "", "formControlName", "mobileNumber", "id", "mobileNumber"], ["nzFor", "gender"], ["formControlName", "gender"], ["nzLabel", "Male", "nzValue", "Male"], ["nzLabel", "Female", "nzValue", "Female"], ["nzFor", "email", "nzRequired", ""], ["nz-input", "", "formControlName", "email", "id", "email"], ["nz-button", "", "nzType", "default", 1, "float-right", 3, "disabled", "click"]], template: function RiderViewInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function RiderViewInfoComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nz-form-item")(3, "nz-form-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nz-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "nz-form-item")(8, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nz-form-item")(13, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "nz-form-control", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nz-form-item")(18, "nz-form-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "nz-form-control")(21, "nz-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "nz-option", 13)(23, "nz-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "nz-form-item")(25, "nz-form-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RiderViewInfoComponent_Template_button_click_29_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Save\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLayout", "vertical")("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 76678:
/*!****************************************************************************************!*\
  !*** ./src/app/cms/riders/rider-view/rider-view-orders/rider-view-orders.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderViewOrdersComponent": () => (/* binding */ RiderViewOrdersComponent)
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















function RiderViewOrdersComponent_nz_table_0_tr_20_Template(rf, ctx) { if (rf & 1) {
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
function RiderViewOrdersComponent_nz_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-table", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzQueryParams", function RiderViewOrdersComponent_nz_table_0_Template_nz_table_nzQueryParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.tableService.onTableQueryParamsChange($event); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, RiderViewOrdersComponent_nz_table_0_tr_20_Template, 18, 20, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const orders_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzFrontPagination", false)("nzData", orders_r1.nodes)("nzTotal", orders_r1.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSortFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 10, "profile.dateTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 12, "profile.locations"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 14, "profile.cost"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 16, "profile.status"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 18, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r2.data);
} }
class RiderViewOrdersComponent {
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
RiderViewOrdersComponent.ɵfac = function RiderViewOrdersComponent_Factory(t) { return new (t || RiderViewOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_2__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService)); };
RiderViewOrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RiderViewOrdersComponent, selectors: [["app-rider-view-orders"]], decls: 2, vars: 3, consts: [["nzShowSizeChanger", "", "class", "mt-4", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams", 4, "ngIf"], ["nzShowSizeChanger", "", "nzBordered", "", 1, "mt-4", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams"], ["table", ""], ["nzColumnKey", "createdOn", 3, "nzSortFn"], [1, "hidden", "lg:table-cell"], [4, "ngFor", "ngForOf"], [3, "nz-tooltip"], [3, "nzColor"], [3, "routerLink"]], template: function RiderViewOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RiderViewOrdersComponent_nz_table_0_Template, 21, 20, "nz-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.rider == null ? null : tmp_0_0.data.rider.orders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__.NzTooltipDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__.NzTagComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_11__.TimeagoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 98538:
/*!***************************************************************************************!*\
  !*** ./src/app/cms/riders/rider-view/rider-view-orders/rider-view-orders.resolver.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderViewOrdersResolver": () => (/* binding */ RiderViewOrdersResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class RiderViewOrdersResolver {
    constructor(gql, tableService) {
        this.gql = gql;
        this.tableService = tableService;
    }
    resolve(route, state) {
        var _a;
        const paging = this.tableService.deserializeQueryParams(route.queryParams);
        return this.gql.fetch(Object.assign({ riderId: (_a = route.parent) === null || _a === void 0 ? void 0 : _a.params.id }, paging));
    }
}
RiderViewOrdersResolver.ɵfac = function RiderViewOrdersResolver_Factory(t) { return new (t || RiderViewOrdersResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RiderOrdersGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService)); };
RiderViewOrdersResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RiderViewOrdersResolver, factory: RiderViewOrdersResolver.ɵfac });


/***/ }),

/***/ 24758:
/*!********************************************************************!*\
  !*** ./src/app/cms/riders/rider-view/rider-view-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderViewRoutingModule": () => (/* binding */ RiderViewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _rider_view_addresses_rider_view_addresses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rider-view-addresses/rider-view-addresses.component */ 72523);
/* harmony import */ var _rider_view_addresses_rider_view_addresses_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rider-view-addresses/rider-view-addresses.resolver */ 91537);
/* harmony import */ var _rider_view_financials_rider_view_financials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rider-view-financials/rider-view-financials.component */ 34413);
/* harmony import */ var _rider_view_financials_rider_view_financials_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rider-view-financials/rider-view-financials.resolver */ 86915);
/* harmony import */ var _rider_view_info_rider_view_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rider-view-info/rider-view-info.component */ 44337);
/* harmony import */ var _rider_view_orders_rider_view_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rider-view-orders/rider-view-orders.component */ 76678);
/* harmony import */ var _rider_view_orders_rider_view_orders_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rider-view-orders/rider-view-orders.resolver */ 98538);
/* harmony import */ var _rider_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rider-view.component */ 71299);
/* harmony import */ var _rider_view_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rider-view.resolver */ 69697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);












const routes = [
    { path: '', component: _rider_view_component__WEBPACK_IMPORTED_MODULE_7__.RiderViewComponent, resolve: { rider: _rider_view_resolver__WEBPACK_IMPORTED_MODULE_8__.RiderViewResolver }, runGuardsAndResolvers: 'paramsChange', children: [
            { path: '', redirectTo: 'details' },
            { path: 'details', component: _rider_view_info_rider_view_info_component__WEBPACK_IMPORTED_MODULE_4__.RiderViewInfoComponent },
            { path: 'financials', component: _rider_view_financials_rider_view_financials_component__WEBPACK_IMPORTED_MODULE_2__.RiderViewFinancialsComponent, resolve: { financials: _rider_view_financials_rider_view_financials_resolver__WEBPACK_IMPORTED_MODULE_3__.RiderViewFinancialsResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
            { path: 'orders', component: _rider_view_orders_rider_view_orders_component__WEBPACK_IMPORTED_MODULE_5__.RiderViewOrdersComponent, resolve: { orders: _rider_view_orders_rider_view_orders_resolver__WEBPACK_IMPORTED_MODULE_6__.RiderViewOrdersResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
            { path: 'addresses', component: _rider_view_addresses_rider_view_addresses_component__WEBPACK_IMPORTED_MODULE_0__.RiderViewAddressesComponent, resolve: { addresses: _rider_view_addresses_rider_view_addresses_resolver__WEBPACK_IMPORTED_MODULE_1__.RiderViewAddresssesResolver } }
        ] }
];
class RiderViewRoutingModule {
}
RiderViewRoutingModule.ɵfac = function RiderViewRoutingModule_Factory(t) { return new (t || RiderViewRoutingModule)(); };
RiderViewRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: RiderViewRoutingModule });
RiderViewRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        _rider_view_resolver__WEBPACK_IMPORTED_MODULE_8__.RiderViewResolver,
        _rider_view_financials_rider_view_financials_resolver__WEBPACK_IMPORTED_MODULE_3__.RiderViewFinancialsResolver,
        _rider_view_orders_rider_view_orders_resolver__WEBPACK_IMPORTED_MODULE_6__.RiderViewOrdersResolver,
        _rider_view_addresses_rider_view_addresses_resolver__WEBPACK_IMPORTED_MODULE_1__.RiderViewAddresssesResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](RiderViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 71299:
/*!***************************************************************!*\
  !*** ./src/app/cms/riders/rider-view/rider-view.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderViewComponent": () => (/* binding */ RiderViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/environments/environment */ 92340);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 28625);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 23992);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/menu */ 78028);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 3698);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/badge */ 23397);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 29801);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@pipes/phone.pipe */ 5390);

























function RiderViewComponent_nz_card_0_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RiderViewComponent_nz_card_0_li_14_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.changeStatus("blocked"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "enum.rider.status.blocked"));
} }
function RiderViewComponent_nz_card_0_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RiderViewComponent_nz_card_0_li_15_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.changeStatus("enabled"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "enum.rider.status.enabled"));
} }
function RiderViewComponent_nz_card_0_a_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "riders.tab.details"));
} }
function RiderViewComponent_nz_card_0_a_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "riders.tab.creditrecords"));
} }
function RiderViewComponent_nz_card_0_a_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "riders.tab.orders"));
} }
function RiderViewComponent_nz_card_0_a_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "riders.tab.addresses"));
} }
function RiderViewComponent_nz_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-card")(1, "nz-page-header")(2, "nz-page-header-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nz-avatar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "nz-page-header-tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nz-page-header-extra")(7, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "nz-dropdown-menu", null, 4)(13, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, RiderViewComponent_nz_card_0_li_14_Template, 3, 3, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, RiderViewComponent_nz_card_0_li_15_Template, 3, 3, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "nz-page-header-content")(17, "nz-descriptions")(18, "nz-descriptions-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "nz-descriptions-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "nz-descriptions-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "nz-badge", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "nz-page-header-footer")(30, "nz-tabset", 10)(31, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, RiderViewComponent_nz_card_0_a_32_Template, 3, 3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, RiderViewComponent_nz_card_0_a_34_Template, 3, 3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, RiderViewComponent_nz_card_0_a_36_Template, 3, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, RiderViewComponent_nz_card_0_a_38_Template, 3, 3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const rider_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSrc", ctx_r0.environment.root + (rider_r1.media == null ? null : rider_r1.media.address));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", rider_r1.firstName, " ", rider_r1.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMenu", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 16, "driver.profile.changeStatus"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rider_r1.status === "Enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rider_r1.status === "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 18, "profile.mobileNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 20, rider_r1.mobileNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 22, "profile.registeredOn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](25, 24, rider_r1.registrationTimestamp, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 27, "profile.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStatus", rider_r1.status === "Enabled" ? "success" : "error")("nzText", rider_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLinkExact", false);
} }
class RiderViewComponent {
    constructor(route, tagColor, updateRiderGQL, router) {
        this.route = route;
        this.tagColor = tagColor;
        this.updateRiderGQL = updateRiderGQL;
        this.router = router;
        this.environment = _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((data) => data.rider));
    }
    changeStatus(status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.updateRiderGQL.mutate({
                id: this.route.snapshot.params.id,
                update: { status: status },
            });
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: { refresh: new Date().getTime() },
                queryParamsHandling: "merge",
            });
        });
    }
}
RiderViewComponent.ɵfac = function RiderViewComponent_Factory(t) { return new (t || RiderViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_2__.UpdateRiderGQL), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
RiderViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RiderViewComponent, selectors: [["app-rider-view"]], decls: 2, vars: 3, consts: [[4, "ngIf"], ["nzIcon", "user", 3, "nzSrc"], ["nz-button", "", "nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu4", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click", 4, "ngIf"], [3, "nzTitle", "nzSpan"], [3, "nzTitle"], [3, "nzStatus", "nzText"], ["nzLinkRouter", "", 1, "mb-4", 3, "nzLinkExact"], ["nz-tab-link", "", "routerLink", "details", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "financials", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "orders", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "addresses", 4, "nzTabLink"], ["nz-menu-item", "", 3, "click"], ["nz-tab-link", "", "routerLink", "details"], ["nz-tab-link", "", "routerLink", "financials"], ["nz-tab-link", "", "routerLink", "orders"], ["nz-tab-link", "", "routerLink", "addresses"]], template: function RiderViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, RiderViewComponent_nz_card_0_Template, 40, 29, "nz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.rider);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__.NzCardComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderTitleDirective, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__.NzAvatarComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderTagDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropdownButtonDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropDownDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__.NzMenuItemDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderContentDirective, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_18__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_18__.NzDescriptionsItemComponent, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_19__.NzBadgeComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderFooterDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_20__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_20__.NzTabComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_20__.NzTabLinkTemplateDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_20__.NzTabLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_3__.PhonePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 16599:
/*!************************************************************!*\
  !*** ./src/app/cms/riders/rider-view/rider-view.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderViewModule": () => (/* binding */ RiderViewModule)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _rider_view_addresses_rider_view_addresses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rider-view-addresses/rider-view-addresses.component */ 72523);
/* harmony import */ var _rider_view_financials_rider_view_financials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rider-view-financials/rider-view-financials.component */ 34413);
/* harmony import */ var _rider_view_info_rider_view_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rider-view-info/rider-view-info.component */ 44337);
/* harmony import */ var _rider_view_orders_rider_view_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rider-view-orders/rider-view-orders.component */ 76678);
/* harmony import */ var _rider_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rider-view-routing.module */ 24758);
/* harmony import */ var _rider_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rider-view.component */ 71299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);








class RiderViewModule {
}
RiderViewModule.ɵfac = function RiderViewModule_Factory(t) { return new (t || RiderViewModule)(); };
RiderViewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: RiderViewModule });
RiderViewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_rider_view_routing_module__WEBPACK_IMPORTED_MODULE_5__.RiderViewRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](RiderViewModule, { declarations: [_rider_view_component__WEBPACK_IMPORTED_MODULE_6__.RiderViewComponent,
        _rider_view_info_rider_view_info_component__WEBPACK_IMPORTED_MODULE_3__.RiderViewInfoComponent,
        _rider_view_financials_rider_view_financials_component__WEBPACK_IMPORTED_MODULE_2__.RiderViewFinancialsComponent,
        _rider_view_orders_rider_view_orders_component__WEBPACK_IMPORTED_MODULE_4__.RiderViewOrdersComponent,
        _rider_view_addresses_rider_view_addresses_component__WEBPACK_IMPORTED_MODULE_1__.RiderViewAddressesComponent], imports: [_rider_view_routing_module__WEBPACK_IMPORTED_MODULE_5__.RiderViewRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 69697:
/*!**************************************************************!*\
  !*** ./src/app/cms/riders/rider-view/rider-view.resolver.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderViewResolver": () => (/* binding */ RiderViewResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class RiderViewResolver {
    constructor(gql) {
        this.gql = gql;
    }
    resolve(route, state) {
        return this.gql.fetch({ id: route.params.id });
    }
}
RiderViewResolver.ɵfac = function RiderViewResolver_Factory(t) { return new (t || RiderViewResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ViewRiderGQL)); };
RiderViewResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RiderViewResolver, factory: RiderViewResolver.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_cms_riders_rider-view_rider-view_module_ts.js.map