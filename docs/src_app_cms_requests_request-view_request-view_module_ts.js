"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_requests_request-view_request-view_module_ts"],{

/***/ 83703:
/*!********************************************************************************************************!*\
  !*** ./src/app/cms/requests/request-view/request-view-activities/request-view-activities.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestViewActivitiesComponent": () => (/* binding */ RequestViewActivitiesComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/empty */ 94555);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 48010);










function RequestViewActivitiesComponent_div_0_nz_empty_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty", 4);
} }
function RequestViewActivitiesComponent_div_0_nz_timeline_2_nz_timeline_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-timeline-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPosition", ctx_r4.getPosition(activity_r5.type))("nzColor", ctx_r4.getColor(activity_r5.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r4.translateType(activity_r5.type), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 4, activity_r5.createdAt, "short"), "");
} }
function RequestViewActivitiesComponent_div_0_nz_timeline_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-timeline", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestViewActivitiesComponent_div_0_nz_timeline_2_nz_timeline_item_1_Template, 3, 7, "nz-timeline-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPending", ctx_r3.isPending(order_r1.activities));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", order_r1.activities);
} }
function RequestViewActivitiesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestViewActivitiesComponent_div_0_nz_empty_1_Template, 1, 0, "nz-empty", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RequestViewActivitiesComponent_div_0_nz_timeline_2_Template, 2, 2, "nz-timeline", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r1.activities.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r1.activities.length !== 0);
} }
class RequestViewActivitiesComponent {
    constructor(route, translateService) {
        this.route = route;
        this.translateService = translateService;
    }
    ngOnInit() {
        var _a;
        this.query = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((data) => data.order));
    }
    getPosition(type) {
        switch (type) {
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.BookedByRider:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.CanceledByRider:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.RequestedByRider:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.BookedByOperator:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.CanceledByOperator:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.RequestedByOperator:
                return "left";
            default:
                return "right";
        }
    }
    getColor(type) {
        switch (type) {
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.CanceledByDriver:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.CanceledByRider:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.CanceledByOperator:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.Expired:
                return "red";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.RequestedByRider:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.RequestedByOperator:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.BookedByRider:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.BookedByOperator:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.DriverAccepted:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.Paid:
                return "green";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.ArrivedToPickupPoint:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.ArrivedToDestination:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.Started:
                return "blue";
            default:
                return "gray";
        }
    }
    translateType(value) {
        switch (value) {
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.ArrivedToDestination:
                return this.translateService.instant("requestActivityType.arrivedToDestination");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.ArrivedToPickupPoint:
                return this.translateService.instant("requestActivityType.arrivedToPickupPoint");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.BookedByOperator:
                return this.translateService.instant("requestActivityType.bookedByOperator");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.BookedByRider:
                return this.translateService.instant("requestActivityType.bookedByRider");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.CanceledByDriver:
                return this.translateService.instant("requestActivityType.canceledByDriver");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.CanceledByOperator:
                return this.translateService.instant("requestActivityType.canceledByOperator");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.CanceledByRider:
                return this.translateService.instant("requestActivityType.canceledByRider");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.DriverAccepted:
                return this.translateService.instant("requestActivityType.driverAccepted");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.Expired:
                return this.translateService.instant("requestActivityType.expired");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.Paid:
                return this.translateService.instant("requestActivityType.paid");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.RequestedByOperator:
                return this.translateService.instant("requestActivityType.requestedByOperator");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.RequestedByRider:
                return this.translateService.instant("requestActivityType.requestedByRider");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.Reviewed:
                return this.translateService.instant("requestActivityType.reviewed");
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.Started:
                return this.translateService.instant("requestActivityType.started");
        }
    }
    isPending(items) {
        if (items.length == 0)
            return false;
        const lastItem = items[items.length - 1];
        const finished = lastItem.type == _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.Paid ||
            lastItem.type == _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.Reviewed ||
            lastItem.type == _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.CanceledByDriver ||
            lastItem.type == _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.CanceledByRider ||
            lastItem.type == _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RequestActivityType.CanceledByOperator;
        return !finished;
    }
}
RequestViewActivitiesComponent.ɵfac = function RequestViewActivitiesComponent_Factory(t) { return new (t || RequestViewActivitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
RequestViewActivitiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RequestViewActivitiesComponent, selectors: [["app-request-view-activities"]], decls: 2, vars: 3, consts: [["class", "p-8", 4, "ngIf"], [1, "p-8"], ["class", "empty-state", 4, "ngIf"], ["nzMode", "custom", 3, "nzPending", 4, "ngIf"], [1, "empty-state"], ["nzMode", "custom", 3, "nzPending"], [3, "nzPosition", "nzColor", 4, "ngFor", "ngForOf"], [3, "nzPosition", "nzColor"]], template: function RequestViewActivitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RequestViewActivitiesComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.order);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_6__.NzEmptyComponent, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_7__.NzTimelineComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_7__.NzTimelineItemComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 57863:
/*!************************************************************************************************!*\
  !*** ./src/app/cms/requests/request-view/request-view-assign/request-view-assign.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestViewAssignComponent": () => (/* binding */ RequestViewAssignComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/google-maps */ 62754);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/router-helper.service */ 59083);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var camel_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! camel-case */ 94146);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 13559);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ 38169);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tag */ 92065);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@pipes/phone.pipe */ 5390);






























function RequestViewAssignComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestViewAssignComponent_button_6_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const activeItem_r6 = restoredCtx.ngIf; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.assignToDriver(activeItem_r6.nzValue.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Assign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { draggable: false }; };
function RequestViewAssignComponent_map_marker_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "map-marker", 13, 14);
} if (rf & 2) {
    const markerPosition_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", i_r10 == 0 ? "assets/marker_pickup.png" : "assets/marker_destination.png")("position", markerPosition_r9)("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0));
} }
function RequestViewAssignComponent_map_marker_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "map-marker", 15, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mapClick", function RequestViewAssignComponent_map_marker_10_Template_map_marker_mapClick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const driver_r12 = restoredCtx.$implicit; const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.openInfoWindow(_r14, driver_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("position", driver_r12.location)("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0));
} }
function RequestViewAssignComponent_div_13_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", d_r17.rating, "% (from ", d_r17.reviewCount, " reviews) ");
} }
function RequestViewAssignComponent_div_13_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestViewAssignComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 18)(10, "nz-tag", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, RequestViewAssignComponent_div_13_p_22_Template, 2, 2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, RequestViewAssignComponent_div_13_p_23_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " View Driver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestViewAssignComponent_div_13_Template_button_click_26_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const d_r17 = restoredCtx.ngIf; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.assignToDriver(d_r17.id.toString()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Assign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const d_r17 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 13, "profile.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", d_r17.firstName, " ", d_r17.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 15, "profile.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzColor", ctx_r4.tagColor.driver(d_r17.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 17, "enum.driver.status." + ctx_r4.toCamelCase(d_r17.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 19, "profile.mobileNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", "tel:+" + d_r17.mobileNumber, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 21, d_r17.mobileNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 23, "profile.rating"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", d_r17.rating != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", d_r17.rating == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/drivers/view/" + d_r17.id);
} }
function RequestViewAssignComponent_nz_table_15_tr_17_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", data_r26.rating, "% (from ", data_r26.reviewCount, " reviews) ");
} }
function RequestViewAssignComponent_nz_table_15_tr_17_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestViewAssignComponent_nz_table_15_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, RequestViewAssignComponent_nz_table_15_tr_17_td_3_Template, 2, 2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RequestViewAssignComponent_nz_table_15_tr_17_td_4_Template, 2, 0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", data_r26.firstName, " ", data_r26.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r26.rating != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r26.rating == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r26.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/drivers/view/" + data_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 7, "table.viewDriver"));
} }
function RequestViewAssignComponent_nz_table_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 24, 25)(2, "thead")(3, "tr")(4, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, RequestViewAssignComponent_nz_table_15_tr_17_Template, 11, 9, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const drivers_r23 = ctx.ngIf;
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzFrontPagination", false)("nzData", drivers_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "profile.name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 9, "profile.rating"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 11, "profile.mobileNumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 13, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r24.data);
} }
class RequestViewAssignComponent {
    constructor(route, routeHelper, tagColor, driversSearchQuery, msg, assignDriverToOrderMutation) {
        this.route = route;
        this.routeHelper = routeHelper;
        this.tagColor = tagColor;
        this.driversSearchQuery = driversSearchQuery;
        this.msg = msg;
        this.assignDriverToOrderMutation = assignDriverToOrderMutation;
        this.filteredDrivers = [];
        this.toCamelCase = camel_case__WEBPACK_IMPORTED_MODULE_5__.camelCase;
        this.searchDriversCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
    }
    ngOnInit() {
        this.query = this.route.data
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)((data) => data.availableDrivers))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatestWith)(this.route.parent.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)((data) => data.order))));
    }
    ngAfterViewInit() {
        var _a;
        this.subscription = (_a = this.query) === null || _a === void 0 ? void 0 : _a.subscribe((data) => {
            const locations = data[0].data.getDriversLocationWithData.map((data) => ({ lat: data.location.lat, lng: data.location.lng }));
            const tripPoints = data[1].data.order.points.map((point) => ({
                lat: point.lat,
                lng: point.lng,
            }));
            for (let tripPoint of tripPoints) {
                locations.push(tripPoint);
            }
            this.fitBounds(locations);
        });
        this.searchDriversCtrl.valueChanges
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => {
            this.filteredDrivers = [];
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)((value) => this.driversSearchQuery.fetch({
            filter: value.value == null ? value : "",
        })))
            .subscribe((data) => {
            var _a, _b;
            if (data.data.drivers != null) {
                this.filteredDrivers = data.data.drivers.nodes.map((d) => ({
                    value: d.id,
                    label: `${d.firstName} ${d.lastName} (${d.mobileNumber})`,
                }));
            }
            else {
                this.msg.error((_b = (_a = data.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : "unknown error");
            }
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    openInfoWindow(marker, driver) {
        this.selectedDriver = driver;
        this.infoWindow.open(marker);
    }
    fitBounds(locations) {
        if (locations.length == 0) {
            this.map.zoom = 1;
            return;
        }
        if (locations.length == 1) {
            this.map.panTo(locations[0]);
            return;
        }
        const latlngbounds = new google.maps.LatLngBounds();
        for (const location of locations) {
            latlngbounds.extend(location);
        }
        this.map.fitBounds(latlngbounds);
    }
    assignToDriver(driverId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.assignDriverToOrderMutation.mutate({
                    orderId: this.route.parent.snapshot.params.id,
                    driverId,
                }));
                this.routeHelper.refresh(this.route);
            }
            catch (error) {
                this.msg.error(error.message);
            }
        });
    }
}
RequestViewAssignComponent.ɵfac = function RequestViewAssignComponent_Factory(t) { return new (t || RequestViewAssignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__.RouterHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_2__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverSearchGQL), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.AssignDriverToOrderGQL)); };
RequestViewAssignComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RequestViewAssignComponent, selectors: [["app-request-view-assign"]], viewQuery: function RequestViewAssignComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_16__.GoogleMap, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_16__.MapInfoWindow, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t.first);
    } }, decls: 17, vars: 15, consts: [[1, "grid", "lg:grid-cols-2", "lg:gap-2"], [1, "mb-2"], ["placeholder", "Enter driver last name or mobile number", "nz-input", "", 1, "col-span-2", 3, "formControl", "nzAutocomplete"], ["nzBackfill", "", 3, "nzDataSource"], ["auto", ""], ["class", "w-24", "nz-button", "", "nzType", "default", 3, "click", 4, "ngIf"], ["width", "100%", 1, "w-full", "h-96", 3, "zoom"], [3, "icon", "position", "options", 4, "ngFor", "ngForOf"], ["icon", "assets/marker_taxi.png", 3, "position", "options", "mapClick", 4, "ngFor", "ngForOf"], ["class", "grid grid-cols-2 gap-2 gap-y-2", 4, "ngIf"], [1, "mt-2", "lg:mt-0"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", 4, "ngIf"], ["nz-button", "", "nzType", "default", 1, "w-24", 3, "click"], [3, "icon", "position", "options"], ["marker", "mapMarker"], ["icon", "assets/marker_taxi.png", 3, "position", "options", "mapClick"], [1, "grid", "grid-cols-2", "gap-2", "gap-y-2"], [1, "text-gray-600"], [1, "font-semibold"], [3, "nzColor"], [1, "font-semibold", 3, "href"], [4, "ngIf"], ["nz-button", "", 3, "routerLink"], ["nz-button", "", "nzType", "default", 3, "click"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData"], ["table", ""], ["nzShowSort", "", "nzColumnKey", "reviewTimestamp"], ["nzShowSort", "", "nzColumnKey", "score"], [1, "hidden", "md:table-cell"], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function RequestViewAssignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 2)(4, "nz-autocomplete", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, RequestViewAssignComponent_button_6_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "google-map", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, RequestViewAssignComponent_map_marker_8_Template, 2, 4, "map-marker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, RequestViewAssignComponent_map_marker_10_Template, 2, 3, "map-marker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "map-info-window");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, RequestViewAssignComponent_div_13_Template, 28, 25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, RequestViewAssignComponent_nz_table_15_Template, 18, 15, "nz-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
        let tmp_5_0;
        let tmp_6_0;
        let tmp_8_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.searchDriversCtrl)("nzAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDataSource", ctx.filteredDrivers);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r0.activeItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("zoom", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 9, ctx.query)) == null ? null : tmp_5_0[1] == null ? null : tmp_5_0[1].data == null ? null : tmp_5_0[1].data.order == null ? null : tmp_5_0[1].data.order.points);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 11, ctx.query)) == null ? null : tmp_6_0[0] == null ? null : tmp_6_0[0].data == null ? null : tmp_6_0[0].data.getDriversLocationWithData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedDriver);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 13, ctx.query)) == null ? null : tmp_8_0[0] == null ? null : tmp_8_0[0].data == null ? null : tmp_8_0[0].data.getDriversLocationWithData);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_20__.NzAutocompleteTriggerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_20__.NzAutocompleteComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__.GoogleMap, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__.MapMarker, _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__.MapInfoWindow, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_25__.NzTagComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzTbodyComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_3__.PhonePipe], encapsulation: 2 });


/***/ }),

/***/ 64450:
/*!***********************************************************************************************!*\
  !*** ./src/app/cms/requests/request-view/request-view-assign/request-view-assign.resolver.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestViewAssignResolver": () => (/* binding */ RequestViewAssignResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





class RequestViewAssignResolver {
    constructor(gql) {
        this.gql = gql;
    }
    resolve(route, state) {
        const order = route.parent.data.order;
        return this.gql.fetch({ center: order.data.order.points[0], count: 10 });
    }
}
RequestViewAssignResolver.ɵfac = function RequestViewAssignResolver_Factory(t) { return new (t || RequestViewAssignResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.AvailableDriversForOrderGQL)); };
RequestViewAssignResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RequestViewAssignResolver, factory: RequestViewAssignResolver.ɵfac });


/***/ }),

/***/ 94891:
/*!**********************************************************************************************!*\
  !*** ./src/app/cms/requests/request-view/request-view-chats/request-view-chats.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestViewChatsComponent": () => (/* binding */ RequestViewChatsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/empty */ 94555);
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/comment */ 39527);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 28625);








function RequestViewChatsComponent_div_0_nz_empty_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 3);
} }
function RequestViewChatsComponent_div_0_nz_comment_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-comment", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-avatar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-comment-content")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const chat_r4 = ctx.$implicit;
    const order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    let tmp_0_0;
    let tmp_1_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAuthor", !chat_r4.sentByDriver ? ((tmp_0_0 = order_r1.rider.firstName) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "-") + " " + ((tmp_0_0 = order_r1.rider.lastName) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "-") : ((tmp_0_0 = order_r1.driver == null ? null : order_r1.driver.firstName) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "-") + " " + ((tmp_0_0 = order_r1.driver == null ? null : order_r1.driver.lastName) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ""))("nzDatetime", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 5, chat_r4.sentAt, "short")) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIcon", !chat_r4.sentByDriver ? "user" : "car")("nzSrc", !chat_r4.sentByDriver ? (tmp_3_0 = order_r1.rider.media == null ? null : order_r1.rider.media.address) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "" : (tmp_3_0 = order_r1.driver == null ? null : order_r1.driver.media == null ? null : order_r1.driver.media.address) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chat_r4.content, " ");
} }
function RequestViewChatsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestViewChatsComponent_div_0_nz_empty_1_Template, 1, 0, "nz-empty", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestViewChatsComponent_div_0_nz_comment_2_Template, 6, 8, "nz-comment", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r1.conversations.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", order_r1.conversations);
} }
class RequestViewChatsComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        var _a;
        this.query = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((data) => data.order));
    }
}
RequestViewChatsComponent.ɵfac = function RequestViewChatsComponent_Factory(t) { return new (t || RequestViewChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
RequestViewChatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestViewChatsComponent, selectors: [["app-request-view-chats"]], decls: 2, vars: 3, consts: [[4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [3, "nzAuthor", "nzDatetime", 4, "ngFor", "ngForOf"], [1, "empty-state"], [3, "nzAuthor", "nzDatetime"], ["nz-comment-avatar", "", 3, "nzIcon", "nzSrc"]], template: function RequestViewChatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestViewChatsComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.order);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_4__.NzEmptyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_5__.NzCommentComponent, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__.NzAvatarComponent, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_5__.NzCommentAvatarDirective, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_5__.NzCommentContentDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 33671:
/*!********************************************************************************************************!*\
  !*** ./src/app/cms/requests/request-view/request-view-complaints/request-view-complaints.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestViewComplaintsComponent": () => (/* binding */ RequestViewComplaintsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-timeago */ 77258);








function RequestViewComplaintsComponent_div_0_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td")(9, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, data_r4.inscriptionTimestamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/complaints/view/" + data_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "table.viewComplaint"));
} }
function RequestViewComplaintsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "nz-table", 1, 2)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RequestViewComplaintsComponent_div_0_tr_18_Template, 12, 9, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const complaints_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", complaints_r1)("nzTotal", complaints_r1.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "profile.dateTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, "profile.subject"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, "profile.content"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r2.data);
} }
class RequestViewComplaintsComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        var _a;
        this.query = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((data) => data.order));
    }
}
RequestViewComplaintsComponent.ɵfac = function RequestViewComplaintsComponent_Factory(t) { return new (t || RequestViewComplaintsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
RequestViewComplaintsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestViewComplaintsComponent, selectors: [["app-request-view-complaints"]], decls: 2, vars: 3, consts: [[4, "ngIf"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzData", "nzTotal"], ["ajaxTable", ""], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function RequestViewComplaintsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestViewComplaintsComponent_div_0_Template, 19, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.order == null ? null : tmp_0_0.data.order.complaints);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_6__.TimeagoPipe], encapsulation: 2 });


/***/ }),

/***/ 42026:
/*!********************************************************************************************************!*\
  !*** ./src/app/cms/requests/request-view/request-view-financials/request-view-financials.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestViewFinancialsComponent": () => (/* binding */ RequestViewFinancialsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);







function RequestViewFinancialsComponent_div_0_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, data_r9.amount, data_r9.currency));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r9.action === "Deduct" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "enum.transactionType." + data_r9.deductType) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, "enum.transactionType." + data_r9.rechargeType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r9.paymentGateway == null ? null : data_r9.paymentGateway.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r9.refrenceNumber);
} }
function RequestViewFinancialsComponent_div_0_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, data_r10.amount, data_r10.currency));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r10.action === "Deduct" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "enum.transactionType." + data_r10.deductType) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "enum.transactionType." + data_r10.rechargeType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r10.refrenceNumber);
} }
function RequestViewFinancialsComponent_div_0_tr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, data_r11.amount, data_r11.currency));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r11.action === "Deduct" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "enum.transactionType." + data_r11.deductType) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "enum.transactionType." + data_r11.rechargeType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r11.refrenceNumber);
} }
function RequestViewFinancialsComponent_div_0_nz_table_55_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, data_r14.amount, data_r14.currency));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.action === "Deduct" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "enum.transactionType." + data_r14.deductType) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "enum.transactionType." + data_r14.rechargeType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.refrenceNumber);
} }
function RequestViewFinancialsComponent_div_0_nz_table_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 8, 9)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RequestViewFinancialsComponent_div_0_nz_table_55_tr_14_Template, 10, 10, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", order_r1.fleetTransactions)("nzFrontPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "profile.amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "profile.type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "profile.documentNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r12.data);
} }
function RequestViewFinancialsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "nz-table", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RequestViewFinancialsComponent_div_0_tr_19_Template, 12, 11, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-table", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead")(25, "tr")(26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RequestViewFinancialsComponent_div_0_tr_36_Template, 10, 10, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nz-table", 4, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "thead")(42, "tr")(43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RequestViewFinancialsComponent_div_0_tr_53_Template, 10, 10, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, RequestViewFinancialsComponent_div_0_nz_table_55_Template, 15, 12, "nz-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 22, "profile.rider"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", order_r1.riderTransactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 24, "profile.amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 26, "profile.type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 28, "profile.paymentGateway"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 30, "profile.documentNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r2.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 32, "profile.driver"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", order_r1.driverTransactions)("nzFrontPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 34, "profile.amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 36, "profile.type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 38, "profile.documentNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r4.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 40, "profile.admin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", order_r1.providerTransactions)("nzFrontPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 42, "profile.amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 44, "profile.type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 46, "profile.documentNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r6.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r1.fleetTransactions.length > 0);
} }
class RequestViewFinancialsComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        var _a;
        this.query = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((data) => data.order));
    }
}
RequestViewFinancialsComponent.ɵfac = function RequestViewFinancialsComponent_Factory(t) { return new (t || RequestViewFinancialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
RequestViewFinancialsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestViewFinancialsComponent, selectors: [["app-request-view-financials"]], decls: 2, vars: 3, consts: [[4, "ngIf"], ["nzBordered", "", 3, "nzData", "nzTitle"], ["basicTable2", ""], [4, "ngFor", "ngForOf"], ["nzBordered", "", 3, "nzData", "nzFrontPagination", "nzTitle"], ["basicTable", ""], ["basicTable3", ""], ["nzTitle", "Fleet", "nzBordered", "", 3, "nzData", "nzFrontPagination", 4, "ngIf"], ["nzTitle", "Fleet", "nzBordered", "", 3, "nzData", "nzFrontPagination"], ["basicTable4", ""]], template: function RequestViewFinancialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestViewFinancialsComponent_div_0_Template, 56, 48, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.order);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 80732:
/*!********************************************************************************************!*\
  !*** ./src/app/cms/requests/request-view/request-view-info/request-view-info.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestViewInfoComponent": () => (/* binding */ RequestViewInfoComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var camel_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! camel-case */ 94146);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _current_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../current-config.service */ 64653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 3698);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/badge */ 23397);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@pipes/phone.pipe */ 5390);

















function RequestViewInfoComponent_div_0_nz_descriptions_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-descriptions", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nz-descriptions-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "nz-badge", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const driver_r4 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 15, "profile.driverInfo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 17, "profile.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", driver_r4.firstName, " ", driver_r4.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 19, "profile.mobileNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "tel:+" + driver_r4.mobileNumber, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 21, driver_r4.mobileNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 23, "profile.registeredOn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 25, driver_r4.registrationTimestamp, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 28, "profile.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 30, "enum.driver.status." + ctx_r2.camelCase(driver_r4.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStatus", ctx_r2.tagColor.driver(driver_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 32, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/../drivers/all/view/" + driver_r4.id);
} }
function RequestViewInfoComponent_div_0_nz_descriptions_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-descriptions", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const coupon_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 7, "profile.coupon"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 9, "profile.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](coupon_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 11, "profile.code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](coupon_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 13, "coupons.expirationTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 15, coupon_r5.expireAt, "short"));
} }
function RequestViewInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "nz-descriptions", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-descriptions-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "nz-badge", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nz-descriptions-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, RequestViewInfoComponent_div_0_nz_descriptions_28_Template, 22, 34, "nz-descriptions", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, RequestViewInfoComponent_div_0_nz_descriptions_29_Template, 12, 18, "nz-descriptions", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const order_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 19, "profile.riderInfo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 21, "profile.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", order_r1.rider.firstName, " ", order_r1.rider.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 23, "profile.mobileNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "tel:+" + order_r1.rider.mobileNumber, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 25, order_r1.rider.mobileNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 27, "profile.registeredOn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 29, order_r1.rider.registrationTimestamp, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 32, "profile.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 34, "enum.rider.status." + order_r1.rider.status.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStatus", ctx_r0.tagColor.rider(order_r1.rider.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 36, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/../riders/view/" + order_r1.rider.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.getMapAddress(order_r1.points), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.getMapAddress(order_r1.points), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", order_r1.driver);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", order_r1.coupon);
} }
class RequestViewInfoComponent {
    constructor(route, tagColor, currentConfigService) {
        this.route = route;
        this.tagColor = tagColor;
        this.currentConfigService = currentConfigService;
        this.camelCase = camel_case__WEBPACK_IMPORTED_MODULE_4__.camelCase;
    }
    ngOnInit() {
        var _a;
        this.query = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((data) => data.order));
    }
    getMapAddress(points) {
        var _a;
        return `https://maps.googleapis.com/maps/api/staticmap?size=2500x300${points
            .map((x) => {
            return `&markers=color:blue%7Clabel:${points.indexOf(x) + 1}%7C${x.lat},${x.lng}`;
        })
            .join("")}&key=${(_a = this.currentConfigService.currentConfig) === null || _a === void 0 ? void 0 : _a.currentConfiguration.adminPanelAPIKey}`;
    }
}
RequestViewInfoComponent.ɵfac = function RequestViewInfoComponent_Factory(t) { return new (t || RequestViewInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__.TagColorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_current_config_service__WEBPACK_IMPORTED_MODULE_1__.CurrentConfigService)); };
RequestViewInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RequestViewInfoComponent, selectors: [["app-request-view-info"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "grid", "grid-cols-3", "gap-2"], [1, "col-span-2"], ["nzBordered", "", 1, "mt-2", 3, "nzTitle"], [3, "nzTitle"], [3, "href"], [3, "nzTitle", "nzSpan"], [3, "nzStatus", "nzText"], ["nz-button", "", "nzType", "text", 3, "routerLink"], ["nz-icon", "", "nzType", "folder-open"], ["target", "_blank", 3, "href"], [1, "w-full", "h-auto", "hover:ring-2", "hover:cursor-pointer", 3, "src"], [1, "col-span-3"], ["nzBordered", "", "class", "mt-2", 3, "nzTitle", 4, "ngIf"], ["nzBordered", "", "style", "margin-top: 30px;", 3, "nzTitle", 4, "ngIf"], ["nzBordered", "", 2, "margin-top", "30px", 3, "nzTitle"]], template: function RequestViewInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RequestViewInfoComponent_div_0_Template, 30, 38, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.order);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__.NzDescriptionsItemComponent, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_9__.NzBadgeComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__.PhonePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 98340:
/*!**************************************************************************!*\
  !*** ./src/app/cms/requests/request-view/request-view-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestViewRoutingModule": () => (/* binding */ RequestViewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _order_view_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-view.resolver */ 80020);
/* harmony import */ var _request_view_activities_request_view_activities_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-view-activities/request-view-activities.component */ 83703);
/* harmony import */ var _request_view_assign_request_view_assign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-view-assign/request-view-assign.component */ 57863);
/* harmony import */ var _request_view_assign_request_view_assign_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-view-assign/request-view-assign.resolver */ 64450);
/* harmony import */ var _request_view_chats_request_view_chats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-view-chats/request-view-chats.component */ 94891);
/* harmony import */ var _request_view_complaints_request_view_complaints_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-view-complaints/request-view-complaints.component */ 33671);
/* harmony import */ var _request_view_financials_request_view_financials_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-view-financials/request-view-financials.component */ 42026);
/* harmony import */ var _request_view_info_request_view_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request-view-info/request-view-info.component */ 80732);
/* harmony import */ var _request_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-view.component */ 17107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);












const routes = [
    { path: '', component: _request_view_component__WEBPACK_IMPORTED_MODULE_8__.RequestViewComponent, resolve: { order: _order_view_resolver__WEBPACK_IMPORTED_MODULE_0__.OrderViewResolver }, children: [
            { path: '', redirectTo: 'info' },
            { path: 'info', component: _request_view_info_request_view_info_component__WEBPACK_IMPORTED_MODULE_7__.RequestViewInfoComponent },
            { path: 'activities', component: _request_view_activities_request_view_activities_component__WEBPACK_IMPORTED_MODULE_1__.RequestViewActivitiesComponent },
            { path: 'complaints', component: _request_view_complaints_request_view_complaints_component__WEBPACK_IMPORTED_MODULE_5__.RequestViewComplaintsComponent },
            { path: 'financials', component: _request_view_financials_request_view_financials_component__WEBPACK_IMPORTED_MODULE_6__.RequestViewFinancialsComponent },
            { path: 'chats', component: _request_view_chats_request_view_chats_component__WEBPACK_IMPORTED_MODULE_4__.RequestViewChatsComponent },
            { path: 'assign', component: _request_view_assign_request_view_assign_component__WEBPACK_IMPORTED_MODULE_2__.RequestViewAssignComponent, resolve: { availableDrivers: _request_view_assign_request_view_assign_resolver__WEBPACK_IMPORTED_MODULE_3__.RequestViewAssignResolver } },
        ] }
];
class RequestViewRoutingModule {
}
RequestViewRoutingModule.ɵfac = function RequestViewRoutingModule_Factory(t) { return new (t || RequestViewRoutingModule)(); };
RequestViewRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: RequestViewRoutingModule });
RequestViewRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        _request_view_assign_request_view_assign_resolver__WEBPACK_IMPORTED_MODULE_3__.RequestViewAssignResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](RequestViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 17107:
/*!*********************************************************************!*\
  !*** ./src/app/cms/requests/request-view/request-view.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestViewComponent": () => (/* binding */ RequestViewComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tag */ 92065);
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/statistic */ 14021);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 3698);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 29801);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);














function RequestViewComponent_nz_card_0_a_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "profile.details"));
} }
function RequestViewComponent_nz_card_0_a_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "profile.activities"));
} }
function RequestViewComponent_nz_card_0_a_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "profile.financialRecords"));
} }
function RequestViewComponent_nz_card_0_a_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "requests.chats"));
} }
function RequestViewComponent_nz_card_0_a_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "requests.complaints"));
} }
function RequestViewComponent_nz_card_0_a_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "requests.assign"));
} }
function RequestViewComponent_nz_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-card")(1, "nz-page-header")(2, "nz-page-header-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-page-header-tags")(6, "nz-tag", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-page-header-extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "nz-statistic", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-page-header-content")(14, "div", 3)(15, "div", 4)(16, "nz-descriptions", 5)(17, "nz-descriptions-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nz-descriptions-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-descriptions-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nz-descriptions-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-descriptions-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nz-page-header-footer")(34, "nz-tabset", 7)(35, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RequestViewComponent_nz_card_0_a_36_Template, 3, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, RequestViewComponent_nz_card_0_a_38_Template, 3, 3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, RequestViewComponent_nz_card_0_a_40_Template, 3, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, RequestViewComponent_nz_card_0_a_42_Template, 3, 3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, RequestViewComponent_nz_card_0_a_44_Template, 3, 3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nz-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, RequestViewComponent_nz_card_0_a_46_Template, 3, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const order_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 23, "requests.header"), "", order_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx_r0.tagColor.orderStatus(order_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 25, "enum.request." + order_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 27, "profile.cost"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 29, order_r1.costAfterCoupon, order_r1.currency)) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 32, "requests.requestTIme"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 34, order_r1.createdOn, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 37, "requests.service"))("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.service.name || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 39, "requests.distance"))("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", order_r1.distanceBest, "m");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 41, "requests.duration"))("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", (order_r1.durationBest / 60).toFixed(), ":", order_r1.durationBest % 60, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 43, "profile.locations"))("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.addresses.join(" -> "));
} }
class RequestViewComponent {
    constructor(route, tagColor) {
        this.route = route;
        this.tagColor = tagColor;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((data) => data.order));
    }
}
RequestViewComponent.ɵfac = function RequestViewComponent_Factory(t) { return new (t || RequestViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__.TagColorService)); };
RequestViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RequestViewComponent, selectors: [["app-request-view"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "nzColor"], [3, "nzTitle", "nzValue"], [1, "content"], [1, "main"], [3, "nzColumn"], [3, "nzTitle", "nzSpan"], ["nzLinkRouter", "", 1, "pb-2"], ["nz-tab-link", "", "routerLink", "info", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "activities", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "financials", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "chats", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "complaints", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "assign", 4, "nzTabLink"], ["nz-tab-link", "", "routerLink", "info"], ["nz-tab-link", "", "routerLink", "activities"], ["nz-tab-link", "", "routerLink", "financials"], ["nz-tab-link", "", "routerLink", "chats"], ["nz-tab-link", "", "routerLink", "complaints"], ["nz-tab-link", "", "routerLink", "assign"]], template: function RequestViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RequestViewComponent_nz_card_0_Template, 48, 45, "nz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.order);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__.NzPageHeaderTitleDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__.NzPageHeaderTagDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_7__.NzTagComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__.NzPageHeaderExtraDirective, ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_8__.NzStatisticComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__.NzPageHeaderContentDirective, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__.NzDescriptionsItemComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_6__.NzPageHeaderFooterDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_10__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_10__.NzTabComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_10__.NzTabLinkTemplateDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_10__.NzTabLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 72717:
/*!******************************************************************!*\
  !*** ./src/app/cms/requests/request-view/request-view.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestViewModule": () => (/* binding */ RequestViewModule)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _request_view_activities_request_view_activities_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-view-activities/request-view-activities.component */ 83703);
/* harmony import */ var _request_view_chats_request_view_chats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-view-chats/request-view-chats.component */ 94891);
/* harmony import */ var _request_view_complaints_request_view_complaints_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-view-complaints/request-view-complaints.component */ 33671);
/* harmony import */ var _request_view_financials_request_view_financials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-view-financials/request-view-financials.component */ 42026);
/* harmony import */ var _request_view_info_request_view_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-view-info/request-view-info.component */ 80732);
/* harmony import */ var _request_view_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-view-routing.module */ 98340);
/* harmony import */ var _request_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request-view.component */ 17107);
/* harmony import */ var _request_view_assign_request_view_assign_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-view-assign/request-view-assign.component */ 57863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);










class RequestViewModule {
}
RequestViewModule.ɵfac = function RequestViewModule_Factory(t) { return new (t || RequestViewModule)(); };
RequestViewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: RequestViewModule });
RequestViewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_request_view_routing_module__WEBPACK_IMPORTED_MODULE_6__.RequestViewRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](RequestViewModule, { declarations: [_request_view_component__WEBPACK_IMPORTED_MODULE_7__.RequestViewComponent,
        _request_view_info_request_view_info_component__WEBPACK_IMPORTED_MODULE_5__.RequestViewInfoComponent,
        _request_view_complaints_request_view_complaints_component__WEBPACK_IMPORTED_MODULE_3__.RequestViewComplaintsComponent,
        _request_view_financials_request_view_financials_component__WEBPACK_IMPORTED_MODULE_4__.RequestViewFinancialsComponent,
        _request_view_chats_request_view_chats_component__WEBPACK_IMPORTED_MODULE_2__.RequestViewChatsComponent,
        _request_view_activities_request_view_activities_component__WEBPACK_IMPORTED_MODULE_1__.RequestViewActivitiesComponent,
        _request_view_assign_request_view_assign_component__WEBPACK_IMPORTED_MODULE_8__.RequestViewAssignComponent], imports: [_request_view_routing_module__WEBPACK_IMPORTED_MODULE_6__.RequestViewRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 63351:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/combineLatest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combineLatest": () => (/* binding */ combineLatest)
/* harmony export */ });
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/combineLatest */ 26562);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 41944);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/argsOrArgArray */ 5330);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 58385);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/pipe */ 60629);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 10420);






function combineLatest(...args) {
    const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
    return resultSelector
        ? (0,_util_pipe__WEBPACK_IMPORTED_MODULE_1__.pipe)(combineLatest(...args), (0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__.mapOneOrManyArgs)(resultSelector))
        : (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
            (0,_observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__.combineLatestInit)([source, ...(0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__.argsOrArgArray)(args)])(subscriber);
        });
}


/***/ }),

/***/ 13559:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/combineLatestWith.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combineLatestWith": () => (/* binding */ combineLatestWith)
/* harmony export */ });
/* harmony import */ var _combineLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combineLatest */ 63351);

function combineLatestWith(...otherSources) {
    return (0,_combineLatest__WEBPACK_IMPORTED_MODULE_0__.combineLatest)(...otherSources);
}


/***/ }),

/***/ 5330:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/argsOrArgArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsOrArgArray": () => (/* binding */ argsOrArgArray)
/* harmony export */ });
const { isArray } = Array;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
}


/***/ })

}]);
//# sourceMappingURL=src_app_cms_requests_request-view_request-view_module_ts.js.map