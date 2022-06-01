"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_management_management-cars_management-cars_module_ts"],{

/***/ 97633:
/*!********************************************!*\
  !*** ./src/app/@services/table-service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableService": () => (/* binding */ TableService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);



class TableService {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    serializeQueryParams(params) {
        const obj = {};
        if ((params === null || params === void 0 ? void 0 : params.pageIndex) > 1) {
            obj["pageIndex"] = params.pageIndex;
        }
        else {
            obj["pageIndex"] = undefined;
        }
        if ((params === null || params === void 0 ? void 0 : params.pageSize) != 10) {
            obj["pageSize"] = params.pageSize;
        }
        if (params.filter != null) {
            const filterArray = params.filter
                .filter((val) => val.value != null && val.value.length > 0)
                .map((filt) => `${filt.key}|${Array.isArray(filt.value) ? "in" : "eq"}|${Array.isArray(filt.value) ? filt.value.join("-") : filt.value}`);
            obj["filter"] =
                filterArray.length > 0 ? filterArray.join(",") : undefined;
        }
        if (params.sort != null && params.sort.length > 0) {
            const sortArray = params.sort
                .filter((val) => val.value != null)
                .map((val) => `${val.key}|${val.value == "ascend" ? "ASC" : "DESC"}`);
            obj["sort"] = sortArray.length > 0 ? sortArray.join(",") : undefined;
        }
        return obj;
    }
    onTableQueryParamsChange(params) {
        const param = this.serializeQueryParams(params);
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: param,
            queryParamsHandling: "merge",
        });
    }
    filterText(key, value) {
        var _a;
        const nz = this.deserializeQueryParams(this.route);
        const baseFilter = (_a = nz.filter) !== null && _a !== void 0 ? _a : {};
        if (value != undefined) {
            baseFilter[key] = { like: value };
        }
        else {
            baseFilter[key] = {};
        }
        const filters = Object.keys(baseFilter)
            .map((key) => {
            if (Object.keys(baseFilter[key]).length < 1) {
                return null;
            }
            const action = Object.keys(baseFilter[key])[0];
            const value = action == "in"
                ? baseFilter[key][action].join("-")
                : baseFilter[key][action];
            return `${key}|${action}|${value}`;
        })
            .filter((fil) => fil != null);
        const filter = filters.length > 0 ? filters.join(",") : undefined;
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { filter },
            queryParamsHandling: "merge",
        });
    }
    filterRange(key, range) {
        var _a;
        const nz = this.deserializeQueryParams(this.route);
        const baseFilter = (_a = nz.filter) !== null && _a !== void 0 ? _a : {};
        if (range != undefined) {
            baseFilter[key] = { between: range };
        }
        else {
            baseFilter[key] = {};
        }
        const filters = Object.keys(baseFilter)
            .map((key) => {
            if (Object.keys(baseFilter[key]).length < 1) {
                return null;
            }
            const action = Object.keys(baseFilter[key])[0];
            const value = action == "in" || action == "between"
                ? baseFilter[key][action].join("-")
                : baseFilter[key][action];
            return `${key}|${action}|${value}`;
        })
            .filter((fil) => fil != null);
        const filter = filters.length > 0 ? filters.join(",") : undefined;
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { filter },
            queryParamsHandling: "merge",
        });
    }
    resetFilter(key, input) {
        this.filterText(key, undefined);
        input.value = "";
    }
    downloadURI(uri, name) {
        const link = document.createElement("a");
        link.download = name;
        link.href = uri;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    deserializeQueryParams(queryParams) {
        var _a;
        const sorting = queryParams.sort
            ? queryParams.sort.split(",").map((sItem) => ({
                field: sItem.split("|")[0],
                direction: sItem.split("|")[1],
            }))
            : [];
        const filter = {};
        if (queryParams.filter != null) {
            queryParams.filter.split(",").forEach((item) => {
                const operation = {};
                const operationType = item.split("|")[1];
                if (operationType == "in") {
                    const operationValue = item.split("|")[2].split("-");
                    operation[operationType] = operationValue;
                }
                else if (operationType == "between") {
                    const operationValue = item.split("|")[2].split("-");
                    operation[operationType] = {
                        lower: operationValue[0],
                        upper: operationValue[1],
                    };
                }
                else {
                    operation[operationType] = item.split("|")[2];
                }
                filter[item.split("|")[0]] = operation;
            });
        }
        const pageIndex = queryParams.pageIndex != null ? parseInt(queryParams.pageIndex) : 1;
        const pageSize = queryParams.pageSize != null ? parseInt(queryParams.pageSize) : 10;
        return {
            sorting: sorting.length > 0 ? sorting : undefined,
            paging: {
                offset: (_a = (pageIndex - 1) * pageSize) !== null && _a !== void 0 ? _a : undefined,
                limit: pageSize,
            },
            filter: filter != null && Object.keys(filter).length > 0 ? filter : undefined,
        };
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
TableService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TableService, factory: TableService.ɵfac, providedIn: "root" });
class TableSortItem {
}
var SortDirection;
(function (SortDirection) {
    SortDirection["Asc"] = "ASC";
    SortDirection["Desc"] = "DESC";
})(SortDirection || (SortDirection = {}));


/***/ }),

/***/ 93752:
/*!*******************************************************************************************************!*\
  !*** ./src/app/cms/management/management-cars/management-cars-list/management-cars-list.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementCarsListComponent": () => (/* binding */ ManagementCarsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/router-helper.service */ 59083);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 35174);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 87514);






















function ManagementCarsListComponent_nz_table_7_tr_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r5.name, " ");
} }
function ManagementCarsListComponent_nz_table_7_tr_11_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ManagementCarsListComponent_nz_table_7_tr_11_ng_template_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return data_r5.name = $event; })("keyup.enter", function ManagementCarsListComponent_nz_table_7_tr_11_ng_template_3_Template_input_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r13.onSubmitEditModel(data_r5.id, data_r5.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", data_r5.name);
} }
function ManagementCarsListComponent_nz_table_7_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagementCarsListComponent_nz_table_7_tr_11_Template_tr_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const data_r5 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r16.startEdit(data_r5.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ManagementCarsListComponent_nz_table_7_tr_11_div_2_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ManagementCarsListComponent_nz_table_7_tr_11_ng_template_3_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnConfirm", function ManagementCarsListComponent_nz_table_7_tr_11_Template_a_nzOnConfirm_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const data_r5 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r18.onDeleteModel(data_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.editId !== data_r5.id)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 4, "message.areYouSure"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, "profile.delete"));
} }
function ManagementCarsListComponent_nz_table_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-table", 6, 7)(2, "thead")(3, "tr")(4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ManagementCarsListComponent_nz_table_7_tr_11_Template, 10, 8, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const carModels_r2 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzData", carModels_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, "profile.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r3.data);
} }
function ManagementCarsListComponent_nz_table_13_tr_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r22.name, " ");
} }
function ManagementCarsListComponent_nz_table_13_tr_11_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ManagementCarsListComponent_nz_table_13_tr_11_ng_template_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const data_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return data_r22.name = $event; })("keyup.enter", function ManagementCarsListComponent_nz_table_13_tr_11_ng_template_3_Template_input_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const data_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r30.onSubmitEditColor(data_r22.id, data_r22.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", data_r22.name);
} }
function ManagementCarsListComponent_nz_table_13_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagementCarsListComponent_nz_table_13_tr_11_Template_tr_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const data_r22 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r33.startEditColor(data_r22.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ManagementCarsListComponent_nz_table_13_tr_11_div_2_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ManagementCarsListComponent_nz_table_13_tr_11_ng_template_3_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnConfirm", function ManagementCarsListComponent_nz_table_13_tr_11_Template_a_nzOnConfirm_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const data_r22 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r35.onDeleteColor(data_r22.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r22 = ctx.$implicit;
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.editColorId !== data_r22.id)("ngIfElse", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 4, "message.areYouSure"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, "profile.delete"));
} }
function ManagementCarsListComponent_nz_table_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-table", 17, 18)(2, "thead")(3, "tr")(4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ManagementCarsListComponent_nz_table_13_tr_11_Template, 10, 8, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const carColors_r19 = ctx.ngIf;
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzData", carColors_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, "profile.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r20.data);
} }
class ManagementCarsListComponent {
    constructor(route, routerHelper, tableService, deleteCarModelGQL, deleteCarColorGQL, updateCarModelGQL, updateCarColorGQL, createCarModelGQL, createCarColorGQL) {
        this.route = route;
        this.routerHelper = routerHelper;
        this.tableService = tableService;
        this.deleteCarModelGQL = deleteCarModelGQL;
        this.deleteCarColorGQL = deleteCarColorGQL;
        this.updateCarModelGQL = updateCarModelGQL;
        this.updateCarColorGQL = updateCarColorGQL;
        this.createCarModelGQL = createCarModelGQL;
        this.createCarColorGQL = createCarColorGQL;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((data) => data.cars));
    }
    startEdit(id, event) {
        event.preventDefault();
        event.stopPropagation();
        this.editId = id;
    }
    onSubmitEditModel(id, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.updateCarModelGQL.mutate({ id, input: { name } }));
            this.editId = undefined;
        });
    }
    onAddModel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.createCarModelGQL.mutate({ input: { name: "" } }));
            this.routerHelper.refresh(this.route);
        });
    }
    onDeleteModel(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.deleteCarModelGQL.mutate({ id }));
            this.routerHelper.refresh(this.route);
        });
    }
    startEditColor(id, event) {
        event.preventDefault();
        event.stopPropagation();
        this.editColorId = id;
    }
    onSubmitEditColor(id, title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.updateCarColorGQL.mutate({ id, input: { name: title } }));
            this.editColorId = undefined;
        });
    }
    onAddColor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.createCarColorGQL.mutate({ input: { name: "" } }));
            this.routerHelper.refresh(this.route);
        });
    }
    onDeleteColor(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.deleteCarColorGQL.mutate({ id }));
            this.routerHelper.refresh(this.route);
        });
    }
}
ManagementCarsListComponent.ɵfac = function ManagementCarsListComponent_Factory(t) { return new (t || ManagementCarsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__.RouterHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_2__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DeleteCarModelGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DeleteCarColorGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateCarModelGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateCarColorGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateCarModelGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateCarColorGQL)); };
ManagementCarsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManagementCarsListComponent, selectors: [["app-management-cars-list"]], decls: 15, vars: 13, consts: [["nzBackIcon", "", "nzTitle", "Cars", "nzSubtitle", "Basic car info definitions", 3, "nzGhost"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-icon", "", "nzType", "plus"], ["nzBordered", "", "nzTitle", "Models", 3, "nzData", 4, "ngIf"], ["nz-button", "", "nzType", "default", 1, "float-right", "mb-2", 3, "click"], ["nzBordered", "", "nzTitle", "Colors", 3, "nzData", 4, "ngIf"], ["nzBordered", "", "nzTitle", "Models", 3, "nzData"], ["ajaxTable", ""], ["nzWidth", "80%"], ["class", "editable-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "editable-row", 3, "click"], ["class", "editable-cell", 4, "ngIf", "ngIfElse"], ["editTpl", ""], ["nz-popconfirm", "", 3, "nzPopconfirmTitle", "nzOnConfirm"], [1, "editable-cell"], [1, "editable-cell-value-wrap"], ["nz-input", "", 3, "ngModel", "ngModelChange", "keyup.enter"], ["nzBordered", "", "nzTitle", "Colors", 3, "nzData"], ["colorTable", ""]], template: function ManagementCarsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-page-header", 0)(1, "nz-page-header-extra")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagementCarsListComponent_Template_button_click_2_listener() { return ctx.onAddModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ManagementCarsListComponent_nz_table_7_Template, 12, 8, "nz-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagementCarsListComponent_Template_button_click_9_listener() { return ctx.onAddColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ManagementCarsListComponent_nz_table_13_Template, 12, 8, "nz-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, "profile.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 7, ctx.query)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.carModels == null ? null : tmp_2_0.data.carModels.nodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 9, "profile.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 11, ctx.query)) == null ? null : tmp_4_0.data == null ? null : tmp_4_0.data.carColors);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_17__.NzPopconfirmDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 23310:
/*!******************************************************************************************************!*\
  !*** ./src/app/cms/management/management-cars/management-cars-list/management-cars-list.resolver.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarsListResolver": () => (/* binding */ CarsListResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class CarsListResolver {
    constructor(paging, gql) {
        this.paging = paging;
        this.gql = gql;
    }
    resolve(route, state) {
        const params = this.paging.deserializeQueryParams(route.queryParams);
        return this.gql.fetch({});
    }
}
CarsListResolver.ɵfac = function CarsListResolver_Factory(t) { return new (t || CarsListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CarsListGQL)); };
CarsListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CarsListResolver, factory: CarsListResolver.ɵfac });


/***/ }),

/***/ 39766:
/*!**********************************************************************************!*\
  !*** ./src/app/cms/management/management-cars/management-cars-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementCarsRoutingModule": () => (/* binding */ ManagementCarsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _management_cars_list_management_cars_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management-cars-list/management-cars-list.component */ 93752);
/* harmony import */ var _management_cars_list_management_cars_list_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./management-cars-list/management-cars-list.resolver */ 23310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: '', component: _management_cars_list_management_cars_list_component__WEBPACK_IMPORTED_MODULE_0__.ManagementCarsListComponent, resolve: { cars: _management_cars_list_management_cars_list_resolver__WEBPACK_IMPORTED_MODULE_1__.CarsListResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' }
];
class ManagementCarsRoutingModule {
}
ManagementCarsRoutingModule.ɵfac = function ManagementCarsRoutingModule_Factory(t) { return new (t || ManagementCarsRoutingModule)(); };
ManagementCarsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ManagementCarsRoutingModule });
ManagementCarsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        _management_cars_list_management_cars_list_resolver__WEBPACK_IMPORTED_MODULE_1__.CarsListResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ManagementCarsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 63649:
/*!**************************************************************************!*\
  !*** ./src/app/cms/management/management-cars/management-cars.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementCarsModule": () => (/* binding */ ManagementCarsModule)
/* harmony export */ });
/* harmony import */ var _management_cars_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management-cars-routing.module */ 39766);
/* harmony import */ var _management_cars_list_management_cars_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./management-cars-list/management-cars-list.component */ 93752);
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




class ManagementCarsModule {
}
ManagementCarsModule.ɵfac = function ManagementCarsModule_Factory(t) { return new (t || ManagementCarsModule)(); };
ManagementCarsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ManagementCarsModule });
ManagementCarsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[_management_cars_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagementCarsRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ManagementCarsModule, { declarations: [_management_cars_list_management_cars_list_component__WEBPACK_IMPORTED_MODULE_1__.ManagementCarsListComponent], imports: [_management_cars_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagementCarsRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cms_management_management-cars_management-cars_module_ts.js.map