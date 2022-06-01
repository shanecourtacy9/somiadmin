"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_marketing_announcements_announcements_module_ts"],{

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

/***/ 69712:
/*!**********************************************************************************************!*\
  !*** ./src/app/cms/marketing/announcements/announcement-view/announcement-view.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementViewComponent": () => (/* binding */ AnnouncementViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/router-helper.service */ 59083);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 16188);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




















class AnnouncementViewComponent {
    constructor(route, routerHelper, createGQL, updateGQL, fb) {
        this.route = route;
        this.routerHelper = routerHelper;
        this.createGQL = createGQL;
        this.updateGQL = updateGQL;
        this.fb = fb;
        this.form = this.fb.group({
            id: [null],
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            url: [null],
            dates: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
    }
    ngOnInit() {
        this.subscription = this.route.data.subscribe((data) => this.form.patchValue(data.announcement.data.announcement));
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const _a = this.form.value, { id, dates } = _a, _input = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__rest)(_a, ["id", "dates"]);
            const startAt = dates[0].getTime();
            const expireAt = dates[1].getTime();
            const input = Object.assign(Object.assign({}, _input), { startAt, expireAt });
            if (id == null) {
                yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(this.createGQL.mutate({ input }));
            }
            else {
                yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(this.updateGQL.mutate({ id, input }));
            }
            this.routerHelper.goToParent(this.route);
        });
    }
}
AnnouncementViewComponent.ɵfac = function AnnouncementViewComponent_Factory(t) { return new (t || AnnouncementViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__.RouterHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateAnnouncementGQL), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateAnnouncementGQL), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
AnnouncementViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AnnouncementViewComponent, selectors: [["app-announcement-view"]], decls: 31, vars: 11, consts: [["nz-form", "", "nzLayout", "vertical", 3, "formGroup", "ngSubmit"], [1, "lg:grid", "lg:grid-cols-3", "lg:gap-2"], ["nzRequired", "", "nzFor", "title"], ["nz-input", "", "formControlName", "title", "id", "title"], ["nzRequired", "", "nzFor", "description"], ["nz-input", "", "formControlName", "description", "id", "description"], ["nzFor", "url"], ["nz-input", "", "formControlName", "url", "id", "url"], ["formControlName", "dates", 1, "w-full"], ["nz-button", "", "nzType", "default", "type", "submit", 1, "float-right", 3, "disabled"]], template: function AnnouncementViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-card")(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AnnouncementViewComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1)(7, "nz-form-item")(8, "nz-form-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "nz-form-item")(13, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "nz-form-item")(18, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "nz-form-item")(23, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "nz-range-picker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, "coupons.availabilityTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 7, "coupons.availabilityTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 9, "profile.submit"), " ");
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_11__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_11__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 59729:
/*!*********************************************************************************************!*\
  !*** ./src/app/cms/marketing/announcements/announcement-view/announcement-view.resolver.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementViewResolver": () => (/* binding */ AnnouncementViewResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class AnnouncementViewResolver {
    constructor(gql) {
        this.gql = gql;
    }
    resolve(route, state) {
        return this.gql.fetch({ id: route.params.id });
    }
}
AnnouncementViewResolver.ɵfac = function AnnouncementViewResolver_Factory(t) { return new (t || AnnouncementViewResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ViewAnnouncementGQL)); };
AnnouncementViewResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AnnouncementViewResolver, factory: AnnouncementViewResolver.ɵfac });


/***/ }),

/***/ 83593:
/*!************************************************************************************************!*\
  !*** ./src/app/cms/marketing/announcements/announcements-list/announcements-list.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementsListComponent": () => (/* binding */ AnnouncementsListComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);














function AnnouncementsListComponent_nz_table_7_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 6, data_r4.startAt, "mediumDate"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 9, data_r4.expireAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "../view/" + data_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 12, "profile.view"));
} }
function AnnouncementsListComponent_nz_table_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-table", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzQueryParams", function AnnouncementsListComponent_nz_table_7_Template_nz_table_nzQueryParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.tableService.onTableQueryParamsChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AnnouncementsListComponent_nz_table_7_tr_17_Template, 13, 14, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const announcements_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzFrontPagination", false)("nzData", announcements_r1.nodes)("nzTotal", announcements_r1.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, "profile.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, "profile.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 12, "profile.dateTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 14, "profile.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r2.data);
} }
class AnnouncementsListComponent {
    constructor(tableService, route) {
        this.tableService = tableService;
        this.route = route;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((data) => data.announcements));
    }
}
AnnouncementsListComponent.ɵfac = function AnnouncementsListComponent_Factory(t) { return new (t || AnnouncementsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_0__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
AnnouncementsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnnouncementsListComponent, selectors: [["app-announcement-list"]], decls: 9, vars: 7, consts: [["nzBackIcon", "", "nzTitle", "Announcements", "nzSubtitle", "List of all the announcements", 3, "nzGhost"], ["nz-button", "", "nzType", "default", "routerLink", "new"], ["nz-icon", "", "nzType", "plus"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams", 4, "ngIf"], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams"], ["table", ""], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function AnnouncementsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-page-header", 0)(1, "nz-page-header-extra")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AnnouncementsListComponent_nz_table_7_Template, 18, 16, "nz-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, "profile.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, ctx.query)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.announcements);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_4__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_4__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_4__.NzPageHeaderContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 83409:
/*!***********************************************************************************************!*\
  !*** ./src/app/cms/marketing/announcements/announcements-list/announcements-list.resolver.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementsListResolver": () => (/* binding */ AnnouncementsListResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class AnnouncementsListResolver {
    constructor(paging, gql) {
        this.paging = paging;
        this.gql = gql;
    }
    resolve(route, state) {
        const params = this.paging.deserializeQueryParams(route.queryParams);
        return this.gql.fetch(params);
    }
}
AnnouncementsListResolver.ɵfac = function AnnouncementsListResolver_Factory(t) { return new (t || AnnouncementsListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.AnnouncementsListGQL)); };
AnnouncementsListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AnnouncementsListResolver, factory: AnnouncementsListResolver.ɵfac });


/***/ }),

/***/ 47652:
/*!*********************************************************************!*\
  !*** ./src/app/cms/marketing/announcements/announcements.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementsModule": () => (/* binding */ AnnouncementsModule)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/shared.module */ 45497);
/* harmony import */ var _announcement_view_announcement_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcement-view/announcement-view.component */ 69712);
/* harmony import */ var _announcements_list_announcements_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcements-list/announcements-list.component */ 83593);
/* harmony import */ var _announements_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./announements-routing.module */ 36261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class AnnouncementsModule {
}
AnnouncementsModule.ɵfac = function AnnouncementsModule_Factory(t) { return new (t || AnnouncementsModule)(); };
AnnouncementsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AnnouncementsModule });
AnnouncementsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_announements_routing_module__WEBPACK_IMPORTED_MODULE_3__.AnnouncementsRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AnnouncementsModule, { declarations: [_announcements_list_announcements_list_component__WEBPACK_IMPORTED_MODULE_2__.AnnouncementsListComponent, _announcement_view_announcement_view_component__WEBPACK_IMPORTED_MODULE_1__.AnnouncementViewComponent], imports: [_announements_routing_module__WEBPACK_IMPORTED_MODULE_3__.AnnouncementsRoutingModule, _ridy_admin_panel_src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 36261:
/*!****************************************************************************!*\
  !*** ./src/app/cms/marketing/announcements/announements-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementsRoutingModule": () => (/* binding */ AnnouncementsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _announcement_view_announcement_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcement-view/announcement-view.component */ 69712);
/* harmony import */ var _announcement_view_announcement_view_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcement-view/announcement-view.resolver */ 59729);
/* harmony import */ var _announcements_list_announcements_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcements-list/announcements-list.component */ 83593);
/* harmony import */ var _announcements_list_announcements_list_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./announcements-list/announcements-list.resolver */ 83409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    { path: '', component: _announcements_list_announcements_list_component__WEBPACK_IMPORTED_MODULE_2__.AnnouncementsListComponent, resolve: { announcements: _announcements_list_announcements_list_resolver__WEBPACK_IMPORTED_MODULE_3__.AnnouncementsListResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
    { path: 'view/:id', component: _announcement_view_announcement_view_component__WEBPACK_IMPORTED_MODULE_0__.AnnouncementViewComponent, resolve: { announcement: _announcement_view_announcement_view_resolver__WEBPACK_IMPORTED_MODULE_1__.AnnouncementViewResolver } },
    { path: 'new', component: _announcement_view_announcement_view_component__WEBPACK_IMPORTED_MODULE_0__.AnnouncementViewComponent }
];
class AnnouncementsRoutingModule {
}
AnnouncementsRoutingModule.ɵfac = function AnnouncementsRoutingModule_Factory(t) { return new (t || AnnouncementsRoutingModule)(); };
AnnouncementsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AnnouncementsRoutingModule });
AnnouncementsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _announcements_list_announcements_list_resolver__WEBPACK_IMPORTED_MODULE_3__.AnnouncementsListResolver,
        _announcement_view_announcement_view_resolver__WEBPACK_IMPORTED_MODULE_1__.AnnouncementViewResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AnnouncementsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cms_marketing_announcements_announcements_module_ts.js.map