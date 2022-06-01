"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_financials_driver-wallets_driver-wallets_module_ts"],{

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

/***/ 32056:
/*!********************************************************************************!*\
  !*** ./src/app/cms/financials/driver-wallets/driver-wallets-list.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverWalletsListComponent": () => (/* binding */ DriverWalletsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 23992);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/menu */ 78028);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 87514);






















function DriverWalletsListComponent_nz_page_header_content_12_nz_table_1_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td")(9, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", data_r8.driver.firstName, " ", data_r8.driver.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 6, data_r8.balance, data_r8.currency));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r8.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/drivers/view/" + data_r8.driverId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 9, "table.viewDriver"));
} }
const _c0 = function () { return []; };
function DriverWalletsListComponent_nz_page_header_content_12_nz_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-table", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzQueryParams", function DriverWalletsListComponent_nz_page_header_content_12_nz_table_1_Template_nz_table_nzQueryParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.tableService.onTableQueryParamsChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-filter-trigger", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, DriverWalletsListComponent_nz_page_header_content_12_nz_table_1_tr_20_Template, 12, 11, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const wallets_r5 = ctx.ngIf;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzFrontPagination", false)("nzData", wallets_r5.nodes)("nzTotal", wallets_r5.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 12, "profile.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 14, "profile.amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzActive", ctx_r4.amountRange[0] !== -1)("nzDropdownMenu", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzFilters", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 16, ctx_r4.currencies)) !== null && tmp_7_0 !== undefined ? tmp_7_0 : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c0))("nzFilterFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 18, "profile.currency"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 20, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r6.data);
} }
function DriverWalletsListComponent_nz_page_header_content_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-page-header-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DriverWalletsListComponent_nz_page_header_content_12_nz_table_1_Template, 21, 23, "nz-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.driverWallets);
} }
class DriverWalletsListComponent {
    constructor(route, exportGql, tableService) {
        this.route = route;
        this.exportGql = exportGql;
        this.tableService = tableService;
        this.amountRange = [-1, -1];
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((data) => data.driverWallet));
        this.currencies = this.query.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((data) => this.distinctCurrency(data.data.regions.nodes).map((currency) => ({
            text: currency,
            value: currency,
        }))));
    }
    exportTo(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.exportGql.fetch({
                input: {
                    table: _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ExportTable.DriverWallet,
                    type: _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ExportType.Csv,
                    relations: ["driver"],
                },
            }));
            this.tableService.downloadURI(_ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.root + result.data.export.url, `export-${new Date().getTime()}.csv`);
        });
    }
    distinctCurrency(array) {
        return array
            .map((item) => item.currency)
            .filter((v, i, a) => a.indexOf(v) === i);
    }
}
DriverWalletsListComponent.ɵfac = function DriverWalletsListComponent_Factory(t) { return new (t || DriverWalletsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ExportGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_table_service__WEBPACK_IMPORTED_MODULE_2__.TableService)); };
DriverWalletsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DriverWalletsListComponent, selectors: [["app-driver-wallets-list"]], decls: 28, vars: 22, consts: [["nzBackIcon", "", "nzTitle", "Driver Wallets", "nzSubtitle", "List of drivers current wallet balance", 3, "nzGhost"], ["nz-button", "", "nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "export"], ["nz-icon", "", "nzType", "down"], ["menuExport", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], [4, "ngIf"], ["filteramount", "nzDropdownMenu"], [1, "ant-table-filter-dropdown"], [1, "search-box"], ["nz-input", "", "type", "number", 3, "placeholder", "ngModel", "ngModelChange"], ["nz-button", "", "nzSize", "small", "nzType", "default", 1, "search-button", 3, "click"], ["nz-button", "", "nzSize", "small", 3, "click"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams", 4, "ngIf"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams"], ["table", ""], ["nzShowSort", "", "nzColumnKey", "amount", "nzCustomFilter", ""], [3, "nzActive", "nzDropdownMenu"], ["nz-icon", "", "nzType", "search"], ["nzShowSort", "", "nzColumnKey", "currency", "nzShowFilter", "", 3, "nzFilters", "nzFilterFn"], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function DriverWalletsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-page-header", 0)(1, "nz-page-header-extra")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-dropdown-menu", null, 4)(9, "ul", 5)(10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DriverWalletsListComponent_Template_li_click_10_listener() { return ctx.exportTo("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DriverWalletsListComponent_nz_page_header_content_12_Template, 3, 3, "nz-page-header-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nz-dropdown-menu", null, 8)(16, "div", 9)(17, "div", 10)(18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DriverWalletsListComponent_Template_input_ngModelChange_18_listener($event) { return (ctx.amountRange[0] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DriverWalletsListComponent_Template_input_ngModelChange_20_listener($event) { return (ctx.amountRange[1] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DriverWalletsListComponent_Template_button_click_22_listener() { return ctx.tableService.filterRange("balance", ctx.amountRange); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DriverWalletsListComponent_Template_button_click_25_listener() { return ctx.tableService.filterRange("balance", undefined); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDropdownMenu", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 10, "profile.export"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 12, ctx.query)) == null ? null : tmp_3_0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 14, "table.min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.amountRange[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 16, "table.max"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.amountRange[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 18, "profile.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 20, "profile.reset"), " ");
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__.NzDropdownButtonDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__.NzDropDownDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__.NzMenuItemDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderContentDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzFilterTriggerComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 88683:
/*!*******************************************************************************!*\
  !*** ./src/app/cms/financials/driver-wallets/driver-wallets-list.resolver.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverWalletsListResolver": () => (/* binding */ DriverWalletsListResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class DriverWalletsListResolver {
    constructor(paging, gql) {
        this.paging = paging;
        this.gql = gql;
    }
    resolve(route, state) {
        const params = this.paging.deserializeQueryParams(route.queryParams);
        return this.gql.fetch(params);
    }
}
DriverWalletsListResolver.ɵfac = function DriverWalletsListResolver_Factory(t) { return new (t || DriverWalletsListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverWalletsListGQL)); };
DriverWalletsListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DriverWalletsListResolver, factory: DriverWalletsListResolver.ɵfac });


/***/ }),

/***/ 56495:
/*!********************************************************************************!*\
  !*** ./src/app/cms/financials/driver-wallets/driver-wallets-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverWalletsRoutingModule": () => (/* binding */ DriverWalletsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _driver_wallets_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-wallets-list.component */ 32056);
/* harmony import */ var _driver_wallets_list_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-wallets-list.resolver */ 88683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: '', component: _driver_wallets_list_component__WEBPACK_IMPORTED_MODULE_0__.DriverWalletsListComponent, resolve: { driverWallet: _driver_wallets_list_resolver__WEBPACK_IMPORTED_MODULE_1__.DriverWalletsListResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' }
];
class DriverWalletsRoutingModule {
}
DriverWalletsRoutingModule.ɵfac = function DriverWalletsRoutingModule_Factory(t) { return new (t || DriverWalletsRoutingModule)(); };
DriverWalletsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DriverWalletsRoutingModule });
DriverWalletsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        _driver_wallets_list_resolver__WEBPACK_IMPORTED_MODULE_1__.DriverWalletsListResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DriverWalletsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 25433:
/*!************************************************************************!*\
  !*** ./src/app/cms/financials/driver-wallets/driver-wallets.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverWalletsModule": () => (/* binding */ DriverWalletsModule)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _driver_wallets_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-wallets-list.component */ 32056);
/* harmony import */ var _driver_wallets_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver-wallets-routing.module */ 56495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




class DriverWalletsModule {
}
DriverWalletsModule.ɵfac = function DriverWalletsModule_Factory(t) { return new (t || DriverWalletsModule)(); };
DriverWalletsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DriverWalletsModule });
DriverWalletsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_driver_wallets_routing_module__WEBPACK_IMPORTED_MODULE_2__.DriverWalletsRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DriverWalletsModule, { declarations: [_driver_wallets_list_component__WEBPACK_IMPORTED_MODULE_1__.DriverWalletsListComponent], imports: [_driver_wallets_routing_module__WEBPACK_IMPORTED_MODULE_2__.DriverWalletsRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cms_financials_driver-wallets_driver-wallets_module_ts.js.map