"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_management_management-roles_management-roles_module_ts"],{

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

/***/ 9109:
/*!************************************************************************************!*\
  !*** ./src/app/cms/management/management-roles/management-roles-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementRolesRoutingModule": () => (/* binding */ ManagementRolesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _role_view_role_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-view/role-view.component */ 40641);
/* harmony import */ var _role_view_roles_view_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-view/roles-view.resolver */ 29696);
/* harmony import */ var _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles-list/roles-list.component */ 66764);
/* harmony import */ var _roles_list_roles_list_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles-list/roles-list.resolver */ 90029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    { path: '', component: _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_2__.RolesListComponent, resolve: { roles: _roles_list_roles_list_resolver__WEBPACK_IMPORTED_MODULE_3__.RolesListResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
    { path: 'view/:id', component: _role_view_role_view_component__WEBPACK_IMPORTED_MODULE_0__.RoleViewComponent, resolve: { role: _role_view_roles_view_resolver__WEBPACK_IMPORTED_MODULE_1__.RoleViewResolver } },
    { path: 'new', component: _role_view_role_view_component__WEBPACK_IMPORTED_MODULE_0__.RoleViewComponent }
];
class ManagementRolesRoutingModule {
}
ManagementRolesRoutingModule.ɵfac = function ManagementRolesRoutingModule_Factory(t) { return new (t || ManagementRolesRoutingModule)(); };
ManagementRolesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ManagementRolesRoutingModule });
ManagementRolesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _roles_list_roles_list_resolver__WEBPACK_IMPORTED_MODULE_3__.RolesListResolver,
        _role_view_roles_view_resolver__WEBPACK_IMPORTED_MODULE_1__.RoleViewResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ManagementRolesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 22067:
/*!****************************************************************************!*\
  !*** ./src/app/cms/management/management-roles/management-roles.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementRolesModule": () => (/* binding */ ManagementRolesModule)
/* harmony export */ });
/* harmony import */ var _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles-list/roles-list.component */ 66764);
/* harmony import */ var _role_view_role_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-view/role-view.component */ 40641);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@components/shared.module */ 45497);
/* harmony import */ var _management_roles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management-roles-routing.module */ 9109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class ManagementRolesModule {
}
ManagementRolesModule.ɵfac = function ManagementRolesModule_Factory(t) { return new (t || ManagementRolesModule)(); };
ManagementRolesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ManagementRolesModule });
ManagementRolesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _management_roles_routing_module__WEBPACK_IMPORTED_MODULE_3__.ManagementRolesRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ManagementRolesModule, { declarations: [_roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_0__.RolesListComponent,
        _role_view_role_view_component__WEBPACK_IMPORTED_MODULE_1__.RoleViewComponent], imports: [_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _management_roles_routing_module__WEBPACK_IMPORTED_MODULE_3__.ManagementRolesRoutingModule] }); })();


/***/ }),

/***/ 40641:
/*!**********************************************************************************!*\
  !*** ./src/app/cms/management/management-roles/role-view/role-view.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleViewComponent": () => (/* binding */ RoleViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/router-helper.service */ 59083);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 13903);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 87514);






















function RoleViewComponent_div_12_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzCheckedChange", function RoleViewComponent_div_12_label_3_Template_label_nzCheckedChange_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const permission_r3 = restoredCtx.$implicit; const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onPermissionCheckChanged(category_r1, permission_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r3 = ctx.$implicit;
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzChecked", ctx_r2.isPermissionChecked(category_r1, permission_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](permission_r3);
} }
function RoleViewComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RoleViewComponent_div_12_label_3_Template, 2, 2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.getCategoryPermissions(category_r1));
} }
class RoleViewComponent {
    constructor(route, fb, updateGQL, createGQL, routerHelper) {
        this.route = route;
        this.fb = fb;
        this.updateGQL = updateGQL;
        this.createGQL = createGQL;
        this.routerHelper = routerHelper;
        this.form = this.fb.group({
            id: [null],
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            permissions: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    ngOnInit() {
        this.subscription = this.route.data.subscribe((data) => {
            if (data.role != null) {
                this.form.patchValue(data.role.data.operatorRole);
            }
        });
    }
    getPermissionsCategories() {
        const withDuplicates = Object.values(_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.OperatorPermission).map((permission) => permission.split("_")[0]);
        return [...new Set(withDuplicates)];
    }
    getCategoryPermissions(category) {
        return Object.values(_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.OperatorPermission)
            .filter((permission) => permission.startsWith(category + "_"))
            .map((permission) => permission.split("_")[1]);
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const _a = this.form.value, { id } = _a, input = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["id"]);
            if (id == null) {
                const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.createGQL.mutate({ input }));
            }
            else {
                const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.updateGQL.mutate({ id, input }));
            }
            this.routerHelper.goToParent(this.route);
        });
    }
    onPermissionCheckChanged(category, permission, checked) {
        if (!this.form.value.permissions.includes(`${category}_${permission}`) &&
            checked) {
            this.form.value.permissions.push(`${category}_${permission}`);
            this.form.patchValue({ permissions: this.form.value.permissions });
        }
        if (!checked) {
            const permissions = JSON.parse(JSON.stringify(this.form.value.permissions)).filter((pr) => {
                return pr != `${category}_${permission}`;
            });
            this.form.patchValue({ permissions: permissions });
        }
    }
    isPermissionChecked(category, permission) {
        return this.form.value.permissions.includes(`${category}_${permission}`);
    }
}
RoleViewComponent.ɵfac = function RoleViewComponent_Factory(t) { return new (t || RoleViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateRoleGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateRoleGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__.RouterHelperService)); };
RoleViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RoleViewComponent, selectors: [["app-role-view"]], decls: 16, vars: 7, consts: [["nzBackIcon", "", "nzTitle", "User Role", "nzSubtitle", "Admin Panel user role definition", 3, "nzGhost"], ["nz-form", "", "nzLayout", "vertical", 3, "formGroup", "ngSubmit"], ["formControlName", "id", "type", "hidden", "hidden", ""], [1, "lg:grid", "lg:grid-cols-3", "lg:gap-2"], ["nzRequired", "", "nzFor", "title"], ["nz-input", "", "required", "", "id", "title", "formControlName", "title"], ["class", "lg:grid lg:grid-cols-3 lg:gap-2 pt-2", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "default", "type", "submit", 1, "mt-2", "float-right", 3, "disabled"], [1, "lg:grid", "lg:grid-cols-3", "lg:gap-2", "pt-2"], ["nz-checkbox", "", 3, "nzChecked", "nzCheckedChange", 4, "ngFor", "ngForOf"], ["nz-checkbox", "", 3, "nzChecked", "nzCheckedChange"]], template: function RoleViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-card")(2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RoleViewComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "nz-form-item")(6, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RoleViewComponent_div_12_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getPermissionsCategories());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 5, "profile.submit"), " ");
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__.NzPageHeaderComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__.NzCheckboxComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 29696:
/*!**********************************************************************************!*\
  !*** ./src/app/cms/management/management-roles/role-view/roles-view.resolver.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleViewResolver": () => (/* binding */ RoleViewResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class RoleViewResolver {
    constructor(gql) {
        this.gql = gql;
    }
    resolve(route, state) {
        return this.gql.fetch({ id: route.params.id });
    }
}
RoleViewResolver.ɵfac = function RoleViewResolver_Factory(t) { return new (t || RoleViewResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RoleGQL)); };
RoleViewResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleViewResolver, factory: RoleViewResolver.ɵfac });


/***/ }),

/***/ 66764:
/*!************************************************************************************!*\
  !*** ./src/app/cms/management/management-roles/roles-list/roles-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesListComponent": () => (/* binding */ RolesListComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);















function RolesListComponent_nz_table_7_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "view/" + data_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 3, "table.details"));
} }
const _c0 = function () { return []; };
function RolesListComponent_nz_table_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-table", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzQueryParams", function RolesListComponent_nz_table_7_Template_nz_table_nzQueryParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.tableService.onTableQueryParamsChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RolesListComponent_nz_table_7_tr_11_Template, 7, 5, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const roles_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzFrontPagination", false)("nzData", (tmp_1_0 = roles_r1) !== null && tmp_1_0 !== undefined ? tmp_1_0 : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0))("nzTotal", roles_r1.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, "profile.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r2.data);
} }
class RolesListComponent {
    constructor(route, tableService) {
        this.route = route;
        this.tableService = tableService;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => data.roles));
    }
}
RolesListComponent.ɵfac = function RolesListComponent_Factory(t) { return new (t || RolesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService)); };
RolesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RolesListComponent, selectors: [["app-roles-list"]], decls: 9, vars: 7, consts: [["nzBackIcon", "", "nzTitle", "User Roles", "nzSubtitle", "Role definitions for Admin panel users.", 3, "nzGhost"], ["nz-button", "", "nzType", "default", "routerLink", "new"], ["nz-icon", "", "nzType", "plus"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams", 4, "ngIf"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams"], ["table", ""], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function RolesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-page-header", 0)(1, "nz-page-header-extra")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RolesListComponent_nz_table_7_Template, 12, 11, "nz-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, "profile.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 5, ctx.query)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.operatorRoles);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__.NzPageHeaderContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 90029:
/*!***********************************************************************************!*\
  !*** ./src/app/cms/management/management-roles/roles-list/roles-list.resolver.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesListResolver": () => (/* binding */ RolesListResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class RolesListResolver {
    constructor(gql) {
        this.gql = gql;
    }
    resolve(route, state) {
        return this.gql.fetch({});
    }
}
RolesListResolver.ɵfac = function RolesListResolver_Factory(t) { return new (t || RolesListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RolesGQL)); };
RolesListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RolesListResolver, factory: RolesListResolver.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_cms_management_management-roles_management-roles_module_ts.js.map