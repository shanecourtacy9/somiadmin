"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_management_management-region_management-region_module_ts"],{

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

/***/ 40727:
/*!**************************************************************************************!*\
  !*** ./src/app/cms/management/management-region/management-region-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementRegionRoutingModule": () => (/* binding */ ManagementRegionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _region_list_region_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./region-list/region-list.component */ 65444);
/* harmony import */ var _region_list_region_list_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region-list/region-list.resolver */ 95169);
/* harmony import */ var _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region-view/region-view.component */ 73416);
/* harmony import */ var _region_view_region_view_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region-view/region-view.resolver */ 59621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    { path: '', component: _region_list_region_list_component__WEBPACK_IMPORTED_MODULE_0__.RegionListComponent, resolve: { regions: _region_list_region_list_resolver__WEBPACK_IMPORTED_MODULE_1__.RegionsListResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
    { path: 'view/:id', component: _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_2__.RegionViewComponent, resolve: { region: _region_view_region_view_resolver__WEBPACK_IMPORTED_MODULE_3__.RegionViewResolver } },
    { path: 'new', component: _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_2__.RegionViewComponent }
];
class ManagementRegionRoutingModule {
}
ManagementRegionRoutingModule.ɵfac = function ManagementRegionRoutingModule_Factory(t) { return new (t || ManagementRegionRoutingModule)(); };
ManagementRegionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ManagementRegionRoutingModule });
ManagementRegionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _region_list_region_list_resolver__WEBPACK_IMPORTED_MODULE_1__.RegionsListResolver,
        _region_view_region_view_resolver__WEBPACK_IMPORTED_MODULE_3__.RegionViewResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ManagementRegionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 22468:
/*!******************************************************************************!*\
  !*** ./src/app/cms/management/management-region/management-region.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementRegionModule": () => (/* binding */ ManagementRegionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _management_region_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management-region-routing.module */ 40727);
/* harmony import */ var _region_list_region_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region-list/region-list.component */ 65444);
/* harmony import */ var _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region-view/region-view.component */ 73416);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class ManagementRegionModule {
}
ManagementRegionModule.ɵfac = function ManagementRegionModule_Factory(t) { return new (t || ManagementRegionModule)(); };
ManagementRegionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ManagementRegionModule });
ManagementRegionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_3__.TagColorService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _management_region_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagementRegionRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ManagementRegionModule, { declarations: [_region_list_region_list_component__WEBPACK_IMPORTED_MODULE_1__.RegionListComponent, _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_2__.RegionViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _management_region_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagementRegionRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 65444:
/*!***************************************************************************************!*\
  !*** ./src/app/cms/management/management-region/region-list/region-list.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionListComponent": () => (/* binding */ RegionListComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tag */ 92065);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 87514);

















function RegionListComponent_nz_table_7_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "nz-tag", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td")(11, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzColor", ctx_r3.tagColor.boolean(data_r4.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.enabled ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, "profile.enabled") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, "profile.disabled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "view/" + data_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 10, "profile.view"));
} }
function RegionListComponent_nz_table_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-table", 4, 5)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RegionListComponent_nz_table_7_tr_17_Template, 14, 12, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const regions_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzFrontPagination", false)("nzData", regions_r1.nodes)("nzTotal", regions_r1.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 8, "profile.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 10, "profile.currency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 12, "profile.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 14, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r2.data);
} }
class RegionListComponent {
    constructor(route, tableService, router, tagColor) {
        this.route = route;
        this.tableService = tableService;
        this.router = router;
        this.tagColor = tagColor;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => data.regions));
    }
}
RegionListComponent.ɵfac = function RegionListComponent_Factory(t) { return new (t || RegionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__.TagColorService)); };
RegionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegionListComponent, selectors: [["app-region-list"]], decls: 9, vars: 7, consts: [["nzBackIcon", "", "nzTitle", "Regions", "nzSubtitle", "List of all the regions app operates within", 3, "nzGhost"], ["nz-button", "", "nzType", "default", "routerLink", "new"], ["nz-icon", "", "nzType", "plus"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", 4, "ngIf"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal"], ["ajaxTable", ""], [4, "ngFor", "ngForOf"], [3, "nzColor"], [3, "routerLink"]], template: function RegionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-page-header", 0)(1, "nz-page-header-extra")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RegionListComponent_nz_table_7_Template, 18, 16, "nz-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, "profile.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 5, ctx.query)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.regions);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__.NzPageHeaderContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_12__.NzTagComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 95169:
/*!**************************************************************************************!*\
  !*** ./src/app/cms/management/management-region/region-list/region-list.resolver.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionsListResolver": () => (/* binding */ RegionsListResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class RegionsListResolver {
    constructor(paging, gql) {
        this.paging = paging;
        this.gql = gql;
    }
    resolve(route, state) {
        const params = this.paging.deserializeQueryParams(route.queryParams);
        return this.gql.fetch(params);
    }
}
RegionsListResolver.ɵfac = function RegionsListResolver_Factory(t) { return new (t || RegionsListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RegionListGQL)); };
RegionsListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RegionsListResolver, factory: RegionsListResolver.ɵfac });


/***/ }),

/***/ 73416:
/*!***************************************************************************************!*\
  !*** ./src/app/cms/management/management-region/region-view/region-view.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionViewComponent": () => (/* binding */ RegionViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/google-maps */ 62754);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _currencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../currencies */ 7192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ 80517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/switch */ 30445);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);

























function RegionViewComponent_nz_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 17);
} if (rf & 2) {
    const currency_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", currency_r4.label)("nzValue", currency_r4.value);
} }
function RegionViewComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegionViewComponent_ng_template_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegionViewComponent_ng_template_28_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.clearMap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Clear Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.polygons.length == 0);
} }
const _c0 = function (a0) { return [a0]; };
class RegionViewComponent {
    constructor(route, router, fb, createGQL, updateGQL, msg) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.createGQL = createGQL;
        this.updateGQL = updateGQL;
        this.msg = msg;
        this.form = this.fb.group({
            id: [null],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            enabled: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            location: [null],
        });
        this.center = { lat: 24, lng: 12 };
        this.currencies = _currencies__WEBPACK_IMPORTED_MODULE_1__.CURRENCY_LIST;
        this.polygons = [];
    }
    ngAfterViewInit() {
        this.initializeDrawingManager();
    }
    initializeDrawingManager() {
        var _a;
        this.route.data.subscribe((data) => {
            if (data.region != null) {
                const val = data.region.data;
                const region = val.region;
                if (region != null) {
                    this.form.patchValue(region);
                    if (region.location != null) {
                        const latlngbounds = new google.maps.LatLngBounds();
                        for (const poly of region.location) {
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
                if (this.form.value.location == null) {
                    this.form.value.location = [ar];
                }
                else {
                    this.form.value.location.push(ar);
                }
            }
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const _a = this.form.value, { id } = _a, update = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["id"]);
                if (id == null) {
                    yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.createGQL.mutate({ input: update }));
                }
                else {
                    yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.updateGQL.mutate({ id, update }));
                }
                this.router.navigate(["management/regions"], {
                    relativeTo: this.route.root,
                });
            }
            catch (error) {
                this.msg.error(error.message);
            }
        });
    }
    clearMap() {
        for (let poly of this.polygons) {
            poly.setMap(null);
        }
        this.polygons = [];
        this.form.value.location = [];
        this.form.patchValue({ location: [] });
    }
}
RegionViewComponent.ɵfac = function RegionViewComponent_Factory(t) { return new (t || RegionViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateRegionGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateRegionGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__.NzMessageService)); };
RegionViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegionViewComponent, selectors: [["app-region-view"]], viewQuery: function RegionViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.GoogleMap, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
    } }, decls: 30, vars: 9, consts: [["nzBackIcon", "", "nzTitle", "New Region", "nzSubtitle", "Pramaters of region app is operating within.", 3, "nzGhost"], [3, "nzActions"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["formControlName", "id", "type", "hidden", "hidden", ""], ["nzRequired", "", "nzFor", "name"], ["nzErrorTip", "The input is not valid name"], ["nz-input", "", "formControlName", "name", "id", "name"], ["nzRequired", "", "nzFor", "currency"], ["formControlName", "currency", "id", "currency"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzFor", "enabled", "nzRequired", ""], ["formControlName", "enabled", "id", "enabled"], ["type", "hidden", "hidden", "", "formControlName", "location"], ["height", "400px", "width", "100%", 3, "center", "zoom"], [3, "paths"], ["poly", ""], ["tmplActions", ""], [3, "nzLabel", "nzValue"], ["nz-button", "", "type", "submit", 3, "disabled", "click"], ["nz-button", "", "type", "button", 2, "margin", "4px", 3, "disabled", "click"]], template: function RegionViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-card", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegionViewComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-form-item")(5, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nz-form-item")(10, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-form-control")(13, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RegionViewComponent_nz_option_14_Template, 1, 2, "nz-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nz-form-item")(16, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Is Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "nz-switch", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "nz-form-item")(21, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Geofence");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "google-map", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "map-polygon", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, RegionViewComponent_ng_template_28_Template, 4, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, _r2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("center", ctx.center)("zoom", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("paths", ctx.form.value == null ? null : ctx.form.value.location);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzOptionComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_16__.NzSwitchComponent, _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.MapPolygon, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 59621:
/*!**************************************************************************************!*\
  !*** ./src/app/cms/management/management-region/region-view/region-view.resolver.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionViewResolver": () => (/* binding */ RegionViewResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class RegionViewResolver {
    constructor(gql) {
        this.gql = gql;
    }
    resolve(route, state) {
        return this.gql.fetch({ id: route.params.id });
    }
}
RegionViewResolver.ɵfac = function RegionViewResolver_Factory(t) { return new (t || RegionViewResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RegionViewGQL)); };
RegionViewResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegionViewResolver, factory: RegionViewResolver.ɵfac });


/***/ }),

/***/ 7192:
/*!*******************************!*\
  !*** ./src/app/currencies.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENCY_LIST": () => (/* binding */ CURRENCY_LIST)
/* harmony export */ });
const CURRENCY_LIST = [
    { value: "AED", label: "United Arab Emirates Dirham" },
    { value: "AFN", label: "Afghan Afghani" },
    { value: "ALL", label: "Albanian Lek" },
    { value: "AMD", label: "Armenian Dram" },
    { value: "ANG", label: "Netherlands Antillean Guilder" },
    { value: "AOA", label: "Angolan Kwanza" },
    { value: "ARS", label: "Argentine Peso" },
    { value: "AUD", label: "Australian Dollar" },
    { value: "AWG", label: "Aruban Florin" },
    { value: "AZN", label: "Azerbaijani Manat" },
    { value: "BAM", label: "Bosnia-Herzegovina Convertible Mark" },
    { value: "BBD", label: "Barbadian Dollar" },
    { value: "BDT", label: "Bangladeshi Taka" },
    { value: "BGN", label: "Bulgarian Lev" },
    { value: "BHD", label: "Bahraini Dinar" },
    { value: "BIF", label: "Burundian Franc" },
    { value: "BMD", label: "Bermudan Dollar" },
    { value: "BND", label: "Brunei Dollar" },
    { value: "BOB", label: "Bolivian Boliviano" },
    { value: "BRL", label: "Brazilian Real" },
    { value: "BSD", label: "Bahamian Dollar" },
    { value: "BTC", label: "Bitcoin" },
    { value: "BTN", label: "Bhutanese Ngultrum" },
    { value: "BWP", label: "Botswanan Pula" },
    { value: "BYN", label: "Belarusian Ruble" },
    { value: "BZD", label: "Belize Dollar" },
    { value: "CAD", label: "Canadian Dollar" },
    { value: "CDF", label: "Congolese Franc" },
    { value: "CHF", label: "Swiss Franc" },
    { value: "CLF", label: "Chilean Unit of Account (UF)" },
    { value: "CLP", label: "Chilean Peso" },
    { value: "CNH", label: "Chinese Yuan (Offshore)" },
    { value: "CNY", label: "Chinese Yuan" },
    { value: "COP", label: "Colombian Peso" },
    { value: "CRC", label: "Costa Rican Colón" },
    { value: "CUC", label: "Cuban Convertible Peso" },
    { value: "CUP", label: "Cuban Peso" },
    { value: "CVE", label: "Cape Verdean Escudo" },
    { value: "CZK", label: "Czech Republic Koruna" },
    { value: "DJF", label: "Djiboutian Franc" },
    { value: "DKK", label: "Danish Krone" },
    { value: "DOP", label: "Dominican Peso" },
    { value: "DZD", label: "Algerian Dinar" },
    { value: "EGP", label: "Egyptian Pound" },
    { value: "ERN", label: "Eritrean Nakfa" },
    { value: "ETB", label: "Ethiopian Birr" },
    { value: "EUR", label: "Euro" },
    { value: "FJD", label: "Fijian Dollar" },
    { value: "FKP", label: "Falkland Islands Pound" },
    { value: "GBP", label: "British Pound Sterling" },
    { value: "GEL", label: "Georgian Lari" },
    { value: "GGP", label: "Guernsey Pound" },
    { value: "GHS", label: "Ghanaian Cedi" },
    { value: "GIP", label: "Gibraltar Pound" },
    { value: "GMD", label: "Gambian Dalasi" },
    { value: "GNF", label: "Guinean Franc" },
    { value: "GTQ", label: "Guatemalan Quetzal" },
    { value: "GYD", label: "Guyanaese Dollar" },
    { value: "HKD", label: "Hong Kong Dollar" },
    { value: "HNL", label: "Honduran Lempira" },
    { value: "HRK", label: "Croatian Kuna" },
    { value: "HTG", label: "Haitian Gourde" },
    { value: "HUF", label: "Hungarian Forint" },
    { value: "IDR", label: "Indonesian Rupiah" },
    { value: "ILS", label: "Israeli New Sheqel" },
    { value: "IMP", label: "Manx pound" },
    { value: "INR", label: "Indian Rupee" },
    { value: "IQD", label: "Iraqi Dinar" },
    { value: "IRR", label: "Iranian Rial" },
    { value: "ISK", label: "Icelandic Króna" },
    { value: "JEP", label: "Jersey Pound" },
    { value: "JMD", label: "Jamaican Dollar" },
    { value: "JOD", label: "Jordanian Dinar" },
    { value: "JPY", label: "Japanese Yen" },
    { value: "KES", label: "Kenyan Shilling" },
    { value: "KGS", label: "Kyrgystani Som" },
    { value: "KHR", label: "Cambodian Riel" },
    { value: "KMF", label: "Comorian Franc" },
    { value: "KPW", label: "North Korean Won" },
    { value: "KRW", label: "South Korean Won" },
    { value: "KWD", label: "Kuwaiti Dinar" },
    { value: "KYD", label: "Cayman Islands Dollar" },
    { value: "KZT", label: "Kazakhstani Tenge" },
    { value: "LAK", label: "Laotian Kip" },
    { value: "LBP", label: "Lebanese Pound" },
    { value: "LKR", label: "Sri Lankan Rupee" },
    { value: "LRD", label: "Liberian Dollar" },
    { value: "LSL", label: "Lesotho Loti" },
    { value: "LYD", label: "Libyan Dinar" },
    { value: "MAD", label: "Moroccan Dirham" },
    { value: "MDL", label: "Moldovan Leu" },
    { value: "MGA", label: "Malagasy Ariary" },
    { value: "MKD", label: "Macedonian Denar" },
    { value: "MMK", label: "Myanma Kyat" },
    { value: "MNT", label: "Mongolian Tugrik" },
    { value: "MOP", label: "Macanese Pataca" },
    { value: "MRO", label: "Mauritanian Ouguiya (pre-2018)" },
    { value: "MRU", label: "Mauritanian Ouguiya" },
    { value: "MUR", label: "Mauritian Rupee" },
    { value: "MVR", label: "Maldivian Rufiyaa" },
    { value: "MWK", label: "Malawian Kwacha" },
    { value: "MXN", label: "Mexican Peso" },
    { value: "MYR", label: "Malaysian Ringgit" },
    { value: "MZN", label: "Mozambican Metical" },
    { value: "NAD", label: "Namibian Dollar" },
    { value: "NGN", label: "Nigerian Naira" },
    { value: "NIO", label: "Nicaraguan Córdoba" },
    { value: "NOK", label: "Norwegian Krone" },
    { value: "NPR", label: "Nepalese Rupee" },
    { value: "NZD", label: "New Zealand Dollar" },
    { value: "OMR", label: "Omani Rial" },
    { value: "PAB", label: "Panamanian Balboa" },
    { value: "PEN", label: "Peruvian Nuevo Sol" },
    { value: "PGK", label: "Papua New Guinean Kina" },
    { value: "PHP", label: "Philippine Peso" },
    { value: "PKR", label: "Pakistani Rupee" },
    { value: "PLN", label: "Polish Zloty" },
    { value: "PYG", label: "Paraguayan Guarani" },
    { value: "QAR", label: "Qatari Rial" },
    { value: "RON", label: "Romanian Leu" },
    { value: "RSD", label: "Serbian Dinar" },
    { value: "RUB", label: "Russian Ruble" },
    { value: "RWF", label: "Rwandan Franc" },
    { value: "SAR", label: "Saudi Riyal" },
    { value: "SBD", label: "Solomon Islands Dollar" },
    { value: "SCR", label: "Seychellois Rupee" },
    { value: "SDG", label: "Sudanese Pound" },
    { value: "SEK", label: "Swedish Krona" },
    { value: "SGD", label: "Singapore Dollar" },
    { value: "SHP", label: "Saint Helena Pound" },
    { value: "SLL", label: "Sierra Leonean Leone" },
    { value: "SOS", label: "Somali Shilling" },
    { value: "SRD", label: "Surinamese Dollar" },
    { value: "SSP", label: "South Sudanese Pound" },
    { value: "STD", label: "São Tomé and Príncipe Dobra (pre-2018)" },
    { value: "STN", label: "São Tomé and Príncipe Dobra" },
    { value: "SVC", label: "Salvadoran Colón" },
    { value: "SYP", label: "Syrian Pound" },
    { value: "SZL", label: "Swazi Lilangeni" },
    { value: "THB", label: "Thai Baht" },
    { value: "TJS", label: "Tajikistani Somoni" },
    { value: "TMT", label: "Turkmenistani Manat" },
    { value: "TND", label: "Tunisian Dinar" },
    { value: "TOP", label: "Tongan Pa'anga" },
    { value: "TRY", label: "Turkish Lira" },
    { value: "TTD", label: "Trinidad and Tobago Dollar" },
    { value: "TWD", label: "New Taiwan Dollar" },
    { value: "TZS", label: "Tanzanian Shilling" },
    { value: "UAH", label: "Ukrainian Hryvnia" },
    { value: "UGX", label: "Ugandan Shilling" },
    { value: "USD", label: "United States Dollar" },
    { value: "UYU", label: "Uruguayan Peso" },
    { value: "UZS", label: "Uzbekistan Som" },
    { value: "VEF", label: "Venezuelan Bolívar Fuerte (Old)" },
    { value: "VES", label: "Venezuelan Bolívar Soberano" },
    { value: "VND", label: "Vietnamese Dong" },
    { value: "VUV", label: "Vanuatu Vatu" },
    { value: "WST", label: "Samoan Tala" },
    { value: "XAF", label: "CFA Franc BEAC" },
    { value: "XAG", label: "Silver Ounce" },
    { value: "XAU", label: "Gold Ounce" },
    { value: "XCD", label: "East Caribbean Dollar" },
    { value: "XDR", label: "Special Drawing Rights" },
    { value: "XOF", label: "CFA Franc BCEAO" },
    { value: "XPD", label: "Palladium Ounce" },
    { value: "XPF", label: "CFP Franc" },
    { value: "XPT", label: "Platinum Ounce" },
    { value: "YER", label: "Yemeni Rial" },
    { value: "ZAR", label: "South African Rand" },
    { value: "ZMW", label: "Zambian Kwacha" },
    { value: "ZWL", label: "Zimbabwean Dollar" }
];


/***/ })

}]);
//# sourceMappingURL=src_app_cms_management_management-region_management-region_module_ts.js.map