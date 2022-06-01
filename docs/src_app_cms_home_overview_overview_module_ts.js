"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_home_overview_overview_module_ts"],{

/***/ 27939:
/*!******************************************************************************************!*\
  !*** ./src/app/cms/home/overview/overview-drivers-map/overview-drivers-map.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewDriversMapComponent": () => (/* binding */ OverviewDriversMapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/google-maps */ 62754);
/* harmony import */ var camel_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! camel-case */ 94146);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tag */ 92065);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/divider */ 60021);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/switch */ 30445);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@pipes/phone.pipe */ 5390);





















function OverviewDriversMapComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "nz-tag", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td")(11, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OverviewDriversMapComponent_tr_19_Template_a_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const data_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.showDriverOnMap(data_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Show on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "nz-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", data_r6.firstName || "", " ", data_r6.lastName || "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6.mobileNumber !== null ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 7, data_r6.mobileNumber) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzColor", ctx_r1.tagColor.driver(data_r6.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 9, "enum.driver.status." + ctx_r1.toCamelCase(data_r6.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/drivers/view/" + data_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 11, "profile.view"));
} }
function OverviewDriversMapComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-switch", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OverviewDriversMapComponent_ng_template_20_Template_nz_switch_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.autoZoom = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "overview.autoZoom"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.autoZoom);
} }
const _c0 = function () { return { draggable: false }; };
function OverviewDriversMapComponent_ng_template_22_google_map_0_map_marker_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "map-marker", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mapClick", function OverviewDriversMapComponent_ng_template_22_google_map_0_map_marker_1_Template_map_marker_mapClick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const markerPosition_r14 = restoredCtx.$implicit; const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r16.openInfoWindow(_r15, markerPosition_r14.driverId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const markerPosition_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("position", markerPosition_r14.location)("options", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
} }
function OverviewDriversMapComponent_ng_template_22_google_map_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "google-map", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OverviewDriversMapComponent_ng_template_22_google_map_0_map_marker_1_Template, 2, 3, "map-marker", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "map-info-window")(3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const drivers_r12 = ctx.ngIf;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", drivers_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/drivers/view/" + ctx_r11.selectedDriverId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "overview.viewDriver"));
} }
function OverviewDriversMapComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, OverviewDriversMapComponent_ng_template_22_google_map_0_Template, 6, 5, "google-map", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r5.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.getDriversLocation);
} }
class OverviewDriversMapComponent {
    constructor(tagColor, route, overviewDriversPaging) {
        this.tagColor = tagColor;
        this.route = route;
        this.overviewDriversPaging = overviewDriversPaging;
        // Table properties
        this.page = 1;
        this.total = 1;
        this.listOfData = [];
        this.locations = [];
        // Map properties
        this.autoZoom = false;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((data) => data.overview));
    }
    ngAfterViewInit() {
        var _a;
        this.subscription = (_a = this.query) === null || _a === void 0 ? void 0 : _a.subscribe((data) => {
            this.listOfData = data.data.drivers.nodes;
            this.total = data.data.drivers.totalCount;
            this.locations = data.data.getDriversLocation;
            this.centerMap();
        });
    }
    centerMap() {
        if (this.locations.length == 0) {
            this.map.zoom = 1;
            return;
        }
        if (this.locations.length == 1) {
            this.map.panTo(this.locations[0].location);
            return;
        }
        const latlngbounds = new google.maps.LatLngBounds();
        for (const location of this.locations) {
            latlngbounds.extend(location.location);
        }
        this.map.fitBounds(latlngbounds);
    }
    openInfoWindow(marker, driverId) {
        this.selectedDriverId = driverId;
        this.infoWindow.open(marker);
    }
    toCamelCase(value) {
        return (0,camel_case__WEBPACK_IMPORTED_MODULE_5__.camelCase)(value);
    }
    searchData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(this.overviewDriversPaging.fetch({ offset: (this.page - 1) * 5 }));
            this.listOfData = result.data.drivers.nodes;
            this.total = result.data.drivers.totalCount;
        });
    }
    showDriverOnMap(id) {
        this.map.zoom = 16;
        this.map.panTo(this.locations.filter((x) => x.driverId == parseInt(id))[0].location);
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
OverviewDriversMapComponent.ɵfac = function OverviewDriversMapComponent_Factory(t) { return new (t || OverviewDriversMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_1__.OverviewDriverPagingGQL)); };
OverviewDriversMapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OverviewDriversMapComponent, selectors: [["app-overview-drivers-map"]], viewQuery: function OverviewDriversMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_9__.MapInfoWindow, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_9__.GoogleMap, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
    } }, decls: 24, vars: 23, consts: [[3, "nzTitle", "nzExtra", "nzCover"], ["nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageIndexChange", "nzPageSizeChange"], ["ajaxTable", ""], ["nzColumnKey", "status"], [4, "ngFor", "ngForOf"], ["extraTemplate", ""], ["mapTpl", ""], [3, "nzColor"], [3, "click"], ["nzType", "vertical"], [3, "routerLink"], [2, "padding-right", "10px"], ["nzCheckedChildren", "1", "nzUnCheckedChildren", "0", 3, "ngModel", "ngModelChange"], ["height", "400px", "width", "100%", 4, "ngIf"], ["height", "400px", "width", "100%"], ["icon", "assets/marker_taxi.png", 3, "position", "options", "mapClick", 4, "ngFor", "ngForOf"], ["icon", "assets/marker_taxi.png", 3, "position", "options", "mapClick"], ["marker", "mapMarker"]], template: function OverviewDriversMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzPageIndexChange", function OverviewDriversMapComponent_Template_nz_table_nzPageIndexChange_2_listener($event) { return ctx.page = $event; })("nzPageIndexChange", function OverviewDriversMapComponent_Template_nz_table_nzPageIndexChange_2_listener() { return ctx.searchData(); })("nzPageSizeChange", function OverviewDriversMapComponent_Template_nz_table_nzPageSizeChange_2_listener() { return ctx.searchData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "thead")(5, "tr")(6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, OverviewDriversMapComponent_tr_19_Template, 17, 13, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, OverviewDriversMapComponent_ng_template_20_Template, 4, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, OverviewDriversMapComponent_ng_template_22_Template, 2, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 13, "overview.driversOnline"))("nzExtra", _r2)("nzCover", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzFrontPagination", false)("nzData", ctx.listOfData)("nzTotal", ctx.total)("nzPageIndex", ctx.page)("nzPageSize", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 15, "profile.name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 17, "profile.mobileNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 19, "profile.status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 21, "profile.actions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__.NzCardComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__.NzTagComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_14__.NzDividerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__.MapMarker, _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__.MapInfoWindow], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__.PhonePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 920:
/*!**************************************************************!*\
  !*** ./src/app/cms/home/overview/overview-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewRoutingModule": () => (/* binding */ OverviewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview.component */ 64899);
/* harmony import */ var _overview_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview.resolver */ 32076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: '', component: _overview_component__WEBPACK_IMPORTED_MODULE_0__.OverviewComponent, resolve: { overview: _overview_resolver__WEBPACK_IMPORTED_MODULE_1__.OverviewResolver } }
];
class OverviewRoutingModule {
}
OverviewRoutingModule.ɵfac = function OverviewRoutingModule_Factory(t) { return new (t || OverviewRoutingModule)(); };
OverviewRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OverviewRoutingModule });
OverviewRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        _overview_resolver__WEBPACK_IMPORTED_MODULE_1__.OverviewResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OverviewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 64899:
/*!*********************************************************!*\
  !*** ./src/app/cms/home/overview/overview.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewComponent": () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/statistic */ 14021);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var _overview_drivers_map_overview_drivers_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview-drivers-map/overview-drivers-map.component */ 27939);
/* harmony import */ var _components_g2_nz_g2_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@components/g2/nz-g2.directive */ 50970);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31273);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);




















function OverviewComponent_div_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 14);
} }
function OverviewComponent_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 15);
} }
function OverviewComponent_div_0_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 16);
} }
function OverviewComponent_div_0_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 17);
} }
function OverviewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 2)(2, "nz-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "nz-statistic", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, OverviewComponent_div_0_ng_template_6_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2)(9, "nz-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "nz-statistic", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, OverviewComponent_div_0_ng_template_13_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 2)(16, "nz-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "nz-statistic", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, OverviewComponent_div_0_ng_template_20_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 2)(23, "nz-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "nz-statistic", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, OverviewComponent_div_0_ng_template_27_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r7 = ctx.ngIf;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](28);
    let tmp_0_0;
    let tmp_4_0;
    let tmp_8_0;
    let tmp_12_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", (tmp_0_0 = data_r7.complaintAggregate[0].count == null ? null : data_r7.complaintAggregate[0].count.id) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 16, "overview.complaints.title"))("nzPrefix", _r8)("nzSuffix", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 18, "overview.complaints.suffix"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", (tmp_4_0 = data_r7.activeOrders[0].count == null ? null : data_r7.activeOrders[0].count.id) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 20, "overview.activeOrders.title"))("nzPrefix", _r10)("nzSuffix", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 22, "overview.activeOrders.suffix"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", (tmp_8_0 = data_r7.driverAggregate[0].count == null ? null : data_r7.driverAggregate[0].count.id) !== null && tmp_8_0 !== undefined ? tmp_8_0 : 0)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 24, "overview.pendingDrivers.title"))("nzPrefix", _r12)("nzSuffix", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 26, "overview.pendingDrivers.suffix"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", (tmp_12_0 = data_r7.bookedOrders[0].count == null ? null : data_r7.bookedOrders[0].count.id) !== null && tmp_12_0 !== undefined ? tmp_12_0 : 0)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 28, "overview.bookedOrders.title"))("nzPrefix", _r14)("nzSuffix", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 30, "overview.bookedOrders.suffix"));
} }
function OverviewComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "chart.emptyState"));
} }
function OverviewComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-radio-group", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OverviewComponent_ng_template_9_Template_nz_radio_group_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.requestMode = $event; })("ngModelChange", function OverviewComponent_ng_template_9_Template_nz_radio_group_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.refreshRequests(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.requestMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, "overview.chart.allDay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "overview.chart.allMonth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 8, "overview.chart.allYear"));
} }
function OverviewComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "chart.emptyState"));
} }
function OverviewComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-radio-group", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OverviewComponent_ng_template_16_Template_nz_radio_group_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.incomeMode = $event; })("ngModelChange", function OverviewComponent_ng_template_16_Template_nz_radio_group_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.refreshIncome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.incomeMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, "overview.chart.allDay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "overview.chart.allMonth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 8, "overview.chart.allYear"));
} }
const _c0 = function (a0) { return { hidden: a0 }; };
const _c1 = function () { return { height: 300 }; };
class OverviewComponent {
    constructor(locale, route, incomeChartGQL, requestsChartGQL, translateService) {
        this.locale = locale;
        this.route = route;
        this.incomeChartGQL = incomeChartGQL;
        this.requestsChartGQL = requestsChartGQL;
        this.translateService = translateService;
        this.incomeMode = _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ChartTimeframe.Yearly;
        this.requestMode = _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ChartTimeframe.Yearly;
        this.chartTimeframe = _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ChartTimeframe;
        this.isChartIncomeEmpty = false;
        this.isChartRequestsEmpty = false;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((data) => data.overview));
        this.refreshIncome();
        this.refreshRequests();
    }
    refreshIncome() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.incomeChartGQL.fetch({ timeframe: this.incomeMode }));
            this.isChartIncomeEmpty = result.data.incomeChart.items.length == 0;
            if (this.isChartIncomeEmpty) {
                this.chartIncome.clear();
                return;
            }
            const timeFormat = this.getTimeFormatForQuery(this.incomeMode);
            result.data.incomeChart.items.forEach((result) => {
                result.time = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(result.time, timeFormat, this.locale);
                result.sum = parseFloat(result.sum.toFixed(2));
            });
            this.chartIncome.data(result.data.incomeChart.items);
            this.chartIncome.interval().position("time*sum").color("currency");
            this.chartIncome.render();
            this.chartIncome.interaction("active-region");
        });
    }
    refreshRequests() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.requestsChartGQL.fetch({ timeframe: this.requestMode }));
            this.isChartRequestsEmpty = result.data.requestChart.items.length == 0;
            if (this.isChartRequestsEmpty) {
                this.chartRequests.clear();
                return;
            }
            const timeFormat = this.getTimeFormatForQuery(this.requestMode);
            result.data.requestChart.items.forEach((result) => {
                result.time = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(result.time, timeFormat, this.locale);
                result.count = parseFloat(result.count.toString());
                result.status = this.translateService.instant(`enum.request.${result.status}`);
            });
            this.chartRequests.data(result.data.requestChart.items);
            this.chartRequests
                .interval()
                .adjust("stack")
                .position("time*count")
                .color("status");
            this.chartRequests.render();
            this.chartRequests.interaction("active-region");
        });
    }
    getTimeFormatForQuery(q) {
        switch (q) {
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ChartTimeframe.Daily:
                return 'h"';
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ChartTimeframe.Weekly:
                return "W,y";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ChartTimeframe.Monthly:
                return "M/d";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ChartTimeframe.Yearly:
                return "MMM y";
        }
    }
    colorForCount(count) {
        if (count == 0) {
            return "#87d068";
        }
        else if (count < 10) {
            return "orange";
        }
        else {
            return "#CF1322";
        }
    }
    onChartRequestsInit(chartInstance) {
        this.chartRequests = chartInstance;
    }
    onChartIncomeInit(chartInstance) {
        this.chartIncome = chartInstance;
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.IncomeChartGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestsChartGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService)); };
OverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["app-overview"]], decls: 18, vars: 23, consts: [["class", "lg:grid lg:grid-cols-4 lg:gap-2 mb-2", 4, "ngIf"], [1, "lg:grid", "lg:grid-cols-2", "lg:gap-2"], [1, "mt-2"], [3, "nzTitle", "nzExtra"], ["nz-g2", "", 3, "ngClass", "nzChartOptions", "nzChartInitialized"], ["class", "w-full text-center py-16 text-gray-500", 4, "ngIf"], ["requestsExtrasTmpl", ""], ["incomeExtrasTmpl", ""], [1, "lg:grid", "lg:grid-cols-4", "lg:gap-2", "mb-2"], [3, "nzValue", "nzTitle", "nzPrefix", "nzSuffix"], ["prefixTplComplaints", ""], ["prefixTplpaymentRequests", ""], ["prefixTplPendingDrivers", ""], ["prefixTplAvailableDrivers", ""], ["nz-icon", "", "nzType", "customer-service"], ["nz-icon", "", "nzType", "field-time"], ["nz-icon", "", "nzType", "car"], ["nz-icon", "", "nzType", "schedule"], [1, "w-full", "text-center", "py-16", "text-gray-500"], [3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "Daily"], ["nz-radio-button", "", "nzValue", "Monthly"], ["nz-radio-button", "", "nzValue", "Yearly"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, OverviewComponent_div_0_Template, 29, 32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-overview-drivers-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "nz-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzChartInitialized", function OverviewComponent_Template_div_nzChartInitialized_7_listener($event) { return ctx.onChartRequestsInit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, OverviewComponent_p_8_Template, 3, 3, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, OverviewComponent_ng_template_9_Template, 10, 10, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 2)(12, "nz-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzChartInitialized", function OverviewComponent_Template_div_nzChartInitialized_14_listener($event) { return ctx.onChartIncomeInit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, OverviewComponent_p_15_Template, 3, 3, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, OverviewComponent_ng_template_16_Template, 10, 10, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 11, ctx.query)) == null ? null : tmp_0_0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 13, "overview.chart.requestsTitle"))("nzExtra", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c0, ctx.isChartRequestsEmpty))("nzChartOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isChartRequestsEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 15, "overview.chart.incomeTitle"))("nzExtra", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c0, ctx.isChartIncomeEmpty))("nzChartOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isChartIncomeEmpty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__.NzCardComponent, ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_11__.NzStatisticComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, _overview_drivers_map_overview_drivers_map_component__WEBPACK_IMPORTED_MODULE_1__.OverviewDriversMapComponent, _components_g2_nz_g2_directive__WEBPACK_IMPORTED_MODULE_2__.NzG2Directive, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioButtonDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 13858:
/*!******************************************************!*\
  !*** ./src/app/cms/home/overview/overview.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewModule": () => (/* binding */ OverviewModule)
/* harmony export */ });
/* harmony import */ var _overview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview-routing.module */ 920);
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview.component */ 64899);
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _overview_drivers_map_overview_drivers_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview-drivers-map/overview-drivers-map.component */ 27939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class OverviewModule {
}
OverviewModule.ɵfac = function OverviewModule_Factory(t) { return new (t || OverviewModule)(); };
OverviewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: OverviewModule });
OverviewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__.OverviewRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](OverviewModule, { declarations: [_overview_component__WEBPACK_IMPORTED_MODULE_1__.OverviewComponent, _overview_drivers_map_overview_drivers_map_component__WEBPACK_IMPORTED_MODULE_3__.OverviewDriversMapComponent], imports: [_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__.OverviewRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 32076:
/*!********************************************************!*\
  !*** ./src/app/cms/home/overview/overview.resolver.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewResolver": () => (/* binding */ OverviewResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class OverviewResolver {
    constructor(gql) {
        this.gql = gql;
    }
    resolve(route, state) {
        return this.gql.fetch();
    }
}
OverviewResolver.ɵfac = function OverviewResolver_Factory(t) { return new (t || OverviewResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.OverviewGQL)); };
OverviewResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OverviewResolver, factory: OverviewResolver.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_cms_home_overview_overview_module_ts.js.map