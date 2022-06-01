"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_management_management-review-parameters_management-review-parameters_module_ts"],{

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

/***/ 88013:
/*!************************************************************************************************************!*\
  !*** ./src/app/cms/management/management-review-parameters/management-review-parameters-routing.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementReviewParametersRoutingModule": () => (/* binding */ ManagementReviewParametersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _review_parameters_list_review_parameters_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-parameters-list/review-parameters-list.component */ 62745);
/* harmony import */ var _review_parameters_list_review_parameters_list_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-parameters-list/review-parameters-list.resolver */ 64151);
/* harmony import */ var _review_parameter_view_review_parameter_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-parameter-view/review-parameter-view.component */ 6137);
/* harmony import */ var _review_parameter_view_review_parameter_view_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review-parameter-view/review-parameter-view.resolver */ 75483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    { path: '', component: _review_parameters_list_review_parameters_list_component__WEBPACK_IMPORTED_MODULE_0__.ReviewParametersListComponent, resolve: { reviewParameters: _review_parameters_list_review_parameters_list_resolver__WEBPACK_IMPORTED_MODULE_1__.ReviewParametersListResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
    { path: 'view/:id', component: _review_parameter_view_review_parameter_view_component__WEBPACK_IMPORTED_MODULE_2__.ReviewParameterViewComponent, resolve: { reviewParameter: _review_parameter_view_review_parameter_view_resolver__WEBPACK_IMPORTED_MODULE_3__.ReviewParameterViewResolver } },
    { path: 'new', component: _review_parameter_view_review_parameter_view_component__WEBPACK_IMPORTED_MODULE_2__.ReviewParameterViewComponent }
];
class ManagementReviewParametersRoutingModule {
}
ManagementReviewParametersRoutingModule.ɵfac = function ManagementReviewParametersRoutingModule_Factory(t) { return new (t || ManagementReviewParametersRoutingModule)(); };
ManagementReviewParametersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ManagementReviewParametersRoutingModule });
ManagementReviewParametersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _review_parameters_list_review_parameters_list_resolver__WEBPACK_IMPORTED_MODULE_1__.ReviewParametersListResolver,
        _review_parameter_view_review_parameter_view_resolver__WEBPACK_IMPORTED_MODULE_3__.ReviewParameterViewResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ManagementReviewParametersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 47844:
/*!****************************************************************************************************!*\
  !*** ./src/app/cms/management/management-review-parameters/management-review-parameters.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementReviewParametersModule": () => (/* binding */ ManagementReviewParametersModule)
/* harmony export */ });
/* harmony import */ var _management_review_parameters_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management-review-parameters-routing.module */ 88013);
/* harmony import */ var _review_parameters_list_review_parameters_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-parameters-list/review-parameters-list.component */ 62745);
/* harmony import */ var _review_parameter_view_review_parameter_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-parameter-view/review-parameter-view.component */ 6137);
/* harmony import */ var _ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






2920;
class ManagementReviewParametersModule {
}
ManagementReviewParametersModule.ɵfac = function ManagementReviewParametersModule_Factory(t) { return new (t || ManagementReviewParametersModule)(); };
ManagementReviewParametersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ManagementReviewParametersModule });
ManagementReviewParametersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_3__.TagColorService], imports: [[_management_review_parameters_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagementReviewParametersRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ManagementReviewParametersModule, { declarations: [_review_parameters_list_review_parameters_list_component__WEBPACK_IMPORTED_MODULE_1__.ReviewParametersListComponent, _review_parameter_view_review_parameter_view_component__WEBPACK_IMPORTED_MODULE_2__.ReviewParameterViewComponent], imports: [_management_review_parameters_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagementReviewParametersRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 6137:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/cms/management/management-review-parameters/review-parameter-view/review-parameter-view.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewParameterViewComponent": () => (/* binding */ ReviewParameterViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/switch */ 30445);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);




















function ReviewParameterViewComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewParameterViewComponent_ng_template_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.form.invalid);
} }
const _c0 = function (a0) { return [a0]; };
class ReviewParameterViewComponent {
    constructor(route, router, fb, createGQL, updateGQL, msg) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.createGQL = createGQL;
        this.updateGQL = updateGQL;
        this.msg = msg;
        this.form = this.fb.group({
            id: [null],
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            isGood: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
    }
    ngAfterViewInit() {
        this.initializeDrawingManager();
    }
    initializeDrawingManager() {
        this.route.data.subscribe((data) => {
            if (data.reviewParameter != null) {
                const val = data.reviewParameter.data;
                const reviewParameter = val.feedbackParameter;
                if (reviewParameter != null) {
                    this.form.patchValue(reviewParameter);
                }
            }
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const _a = this.form.value, { id } = _a, update = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__rest)(_a, ["id"]);
                if (id == null) {
                    yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(this.createGQL.mutate({ input: update }));
                }
                else {
                    yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(this.updateGQL.mutate({ id, update }));
                }
                this.router.navigate(["management/review-parameters"], {
                    relativeTo: this.route.root,
                });
            }
            catch (error) {
                this.msg.error(error.message);
            }
        });
    }
}
ReviewParameterViewComponent.ɵfac = function ReviewParameterViewComponent_Factory(t) { return new (t || ReviewParameterViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateReviewParameterGQL), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateReviewParameterGQL), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__.NzMessageService)); };
ReviewParameterViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReviewParameterViewComponent, selectors: [["app-review-parameter-view"]], decls: 16, vars: 5, consts: [["nzBackIcon", "", "nzTitle", "New Review Parameter", "nzSubtitle", "Pramaters of reviews that rider can select for his rating.", 3, "nzGhost"], [3, "nzActions"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["formControlName", "id", "type", "hidden", "hidden", ""], ["nzRequired", "", "nzFor", "title"], ["nzErrorTip", "The input is not valid name"], ["nz-input", "", "formControlName", "title", "id", "title"], ["nzFor", "isGood", "nzRequired", ""], ["formControlName", "isGood", "id", "isGood"], ["tmplActions", ""], ["nz-button", "", "nzType", "default", 3, "disabled", "click"]], template: function ReviewParameterViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ReviewParameterViewComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-item")(5, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-item")(10, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Is Good");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "nz-switch", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ReviewParameterViewComponent_ng_template_14_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, _r0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__.NzPageHeaderComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_12__.NzSwitchComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 75483:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/cms/management/management-review-parameters/review-parameter-view/review-parameter-view.resolver.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewParameterViewResolver": () => (/* binding */ ReviewParameterViewResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class ReviewParameterViewResolver {
    constructor(gql) {
        this.gql = gql;
    }
    resolve(route, state) {
        return this.gql.fetch({ id: route.params.id });
    }
}
ReviewParameterViewResolver.ɵfac = function ReviewParameterViewResolver_Factory(t) { return new (t || ReviewParameterViewResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewParameterViewGQL)); };
ReviewParameterViewResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReviewParameterViewResolver, factory: ReviewParameterViewResolver.ɵfac });


/***/ }),

/***/ 62745:
/*!************************************************************************************************************************!*\
  !*** ./src/app/cms/management/management-review-parameters/review-parameters-list/review-parameters-list.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewParametersListComponent": () => (/* binding */ ReviewParametersListComponent)
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

















function ReviewParametersListComponent_nz_table_7_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "nz-tag", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td")(7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzColor", ctx_r3.tagColor.boolean(data_r4.isGood));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.isGood ? "Good" : "Bad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "view/" + data_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, "profile.view"));
} }
function ReviewParametersListComponent_nz_table_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-table", 4, 5)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ReviewParametersListComponent_nz_table_7_tr_13_Template, 10, 7, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const regions_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzFrontPagination", false)("nzData", regions_r1)("nzTotal", regions_r1.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, "profile.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 8, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r2.data);
} }
class ReviewParametersListComponent {
    constructor(route, tableService, router, tagColor) {
        this.route = route;
        this.tableService = tableService;
        this.router = router;
        this.tagColor = tagColor;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => data.reviewParameters));
    }
}
ReviewParametersListComponent.ɵfac = function ReviewParametersListComponent_Factory(t) { return new (t || ReviewParametersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_0__.TagColorService)); };
ReviewParametersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReviewParametersListComponent, selectors: [["app-review-parameters-list"]], decls: 9, vars: 7, consts: [["nzBackIcon", "", "nzTitle", "Review Parameters", "nzSubtitle", "List of parameters that rider can assign to the service experience", 3, "nzGhost"], ["nz-button", "", "nzType", "default", "routerLink", "new"], ["nz-icon", "", "nzType", "plus"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", 4, "ngIf"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal"], ["ajaxTable", ""], [4, "ngFor", "ngForOf"], [3, "nzColor"], [3, "routerLink"]], template: function ReviewParametersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-page-header", 0)(1, "nz-page-header-extra")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ReviewParametersListComponent_nz_table_7_Template, 14, 10, "nz-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, "profile.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 5, ctx.query)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.feedbackParameters);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_5__.NzPageHeaderContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_12__.NzTagComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 64151:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/cms/management/management-review-parameters/review-parameters-list/review-parameters-list.resolver.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewParametersListResolver": () => (/* binding */ ReviewParametersListResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class ReviewParametersListResolver {
    constructor(paging, gql) {
        this.paging = paging;
        this.gql = gql;
    }
    resolve(route, state) {
        //const params = this.paging.deserializeQueryParams<FeedbackParameterSortFields, FeedbackParameterFilter>(route.queryParams);
        return this.gql.fetch();
    }
}
ReviewParametersListResolver.ɵfac = function ReviewParametersListResolver_Factory(t) { return new (t || ReviewParametersListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewParametersListGQL)); };
ReviewParametersListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ReviewParametersListResolver, factory: ReviewParametersListResolver.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_cms_management_management-review-parameters_management-review-parameters_module_ts.js.map