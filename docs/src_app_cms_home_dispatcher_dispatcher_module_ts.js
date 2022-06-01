"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_home_dispatcher_dispatcher_module_ts"],{

/***/ 31713:
/*!********************************************************!*\
  !*** ./src/app/@components/google-places.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglePlacesComponent": () => (/* binding */ GooglePlacesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);




const _c0 = ["addresstext"];
class GooglePlacesComponent {
    constructor() {
        this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngAfterViewInit() {
        this.getPlaceAutocomplete();
    }
    getPlaceAutocomplete() {
        this.autocompleteObject = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
            types: [this.adressType] // 'establishment' / 'address' / 'geocode',
        });
        google.maps.event.addListener(this.autocompleteObject, 'place_changed', () => {
            const place = this.autocompleteObject.getPlace();
            this.invokeEvent(place);
        });
    }
    setBounds(bounds) {
        this.autocompleteObject.setBounds(bounds);
    }
    invokeEvent(place) {
        this.setAddress.emit(place);
    }
}
GooglePlacesComponent.ɵfac = function GooglePlacesComponent_Factory(t) { return new (t || GooglePlacesComponent)(); };
GooglePlacesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GooglePlacesComponent, selectors: [["google-places-autocomplete"]], viewQuery: function GooglePlacesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addresstext = _t.first);
    } }, inputs: { adressType: "adressType" }, outputs: { setAddress: "setAddress" }, decls: 2, vars: 1, consts: [["type", "text", "nz-input", "", 1, "input", 2, "width", "100%", "margin-top", "10px", "margin-bottom", "10px", 3, "ngModel", "ngModelChange"], ["addresstext", ""]], template: function GooglePlacesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GooglePlacesComponent_Template_input_ngModelChange_0_listener($event) { return ctx.autocompleteInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.autocompleteInput);
    } }, directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

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

/***/ 946:
/*!**********************************************************************************************************!*\
  !*** ./src/app/cms/home/dispatcher/dispatcher-locations-select/dispatcher-locations-select.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatcherLocationsSelectComponent": () => (/* binding */ DispatcherLocationsSelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/google-maps */ 62754);
/* harmony import */ var _ridy_admin_panel_src_app_components_google_places_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/google-places.component */ 31713);
/* harmony import */ var _dispatcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dispatcher.service */ 58991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 48010);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);




















const _c0 = function () { return { draggable: false }; };
function DispatcherLocationsSelectComponent_map_marker_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "map-marker", 7, 8);
} if (rf & 2) {
    const markerPosition_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("position", markerPosition_r3.location)("options", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0))("title", markerPosition_r3.driverId.toString());
} }
function DispatcherLocationsSelectComponent_map_marker_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "map-marker", 7);
} if (rf & 2) {
    const point_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("position", point_r5.location)("options", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0))("title", point_r5.address);
} }
function DispatcherLocationsSelectComponent_nz_timeline_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-timeline-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](point_r6.address);
} }
class DispatcherLocationsSelectComponent {
    constructor(messageService, translate, route, router, dispatcherService) {
        this.messageService = messageService;
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.dispatcherService = dispatcherService;
        this.points = [];
        this.drivers = [];
    }
    getAddress(place) {
        this.map.panTo(place.geometry.location);
    }
    removeLastPoint() {
        this.points.pop();
    }
    mapClicked(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const geocoder = new google.maps.Geocoder();
            const id = this.messageService.loading(this.translate.instant("dispatcher.determiningLocation"), { nzDuration: 0 }).messageId;
            geocoder.geocode({
                location: event.latLng,
            }, (results, status) => {
                var _a;
                if (event.latLng) {
                    this.points.push({
                        location: (_a = event.latLng) === null || _a === void 0 ? void 0 : _a.toJSON(),
                        address: results[0].formatted_address,
                    });
                    this.messageService.remove(id);
                }
            });
        });
    }
    goToServiceSelection() {
        this.router.navigate(["../service-select"], {
            relativeTo: this.route,
            queryParams: {
                points: this.dispatcherService.serializePoints(this.points),
            },
            queryParamsHandling: "merge",
        });
    }
    centerMap() {
        if (this.drivers.length == 0) {
            this.map.zoom = 1;
            return;
        }
        if (this.drivers.length == 1) {
            this.map.center = this.drivers[0].location;
            this.map.zoom = 16;
            return;
        }
        const latlngbounds = new google.maps.LatLngBounds();
        for (const location of this.drivers) {
            latlngbounds.extend(location.location);
        }
        const placeBounds = new google.maps.LatLngBounds(new google.maps.LatLng(latlngbounds.getSouthWest().lat() - 2, latlngbounds.getSouthWest().lng() - 2), new google.maps.LatLng(latlngbounds.getNorthEast().lat() + 2, latlngbounds.getNorthEast().lng() + 2));
        this.places.setBounds(placeBounds);
        this.map.fitBounds(latlngbounds);
    }
}
DispatcherLocationsSelectComponent.ɵfac = function DispatcherLocationsSelectComponent_Factory(t) { return new (t || DispatcherLocationsSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__.DispatcherService)); };
DispatcherLocationsSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DispatcherLocationsSelectComponent, selectors: [["app-dispatcher-locations-select"]], viewQuery: function DispatcherLocationsSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.MapInfoWindow, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.GoogleMap, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_ridy_admin_panel_src_app_components_google_places_component__WEBPACK_IMPORTED_MODULE_0__.GooglePlacesComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.places = _t.first);
    } }, decls: 15, vars: 10, consts: [["adressType", "geocode", 3, "setAddress"], ["height", "700px", "width", "100%", 3, "mapClick"], [3, "position", "options", "title", 4, "ngFor", "ngForOf"], [1, "pt-16"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzDanger", "", 2, "margin-top", "8px", "margin-right", "4px", 3, "click"], ["nz-button", "", "nzType", "default", 2, "margin-top", "8px", 3, "disabled", "click"], [3, "position", "options", "title"], ["marker", ""]], template: function DispatcherLocationsSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "google-places-autocomplete", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("setAddress", function DispatcherLocationsSelectComponent_Template_google_places_autocomplete_setAddress_0_listener($event) { return ctx.getAddress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "google-map", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mapClick", function DispatcherLocationsSelectComponent_Template_google_map_mapClick_1_listener($event) { return ctx.mapClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DispatcherLocationsSelectComponent_map_marker_2_Template, 2, 4, "map-marker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DispatcherLocationsSelectComponent_map_marker_3_Template, 1, 4, "map-marker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-card")(5, "nz-timeline", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DispatcherLocationsSelectComponent_nz_timeline_item_6_Template, 2, 1, "nz-timeline-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DispatcherLocationsSelectComponent_Template_button_click_7_listener() { return ctx.removeLastPoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DispatcherLocationsSelectComponent_Template_button_click_11_listener() { return ctx.goToServiceSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.drivers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.points);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.points);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 6, "dispatcher.removeLastPoint"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.points.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 8, "profile.next"));
    } }, directives: [_ridy_admin_panel_src_app_components_google_places_component__WEBPACK_IMPORTED_MODULE_0__.GooglePlacesComponent, _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.GoogleMap, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.MapMarker, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__.NzCardComponent, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_10__.NzTimelineComponent, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_10__.NzTimelineItemComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 19511:
/*!****************************************************************************************!*\
  !*** ./src/app/cms/home/dispatcher/dispatcher-looking/dispatcher-looking.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatcherLookingComponent": () => (/* binding */ DispatcherLookingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/result */ 17170);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);














function DispatcherLookingComponent_nz_result_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-result", 2)(1, "div", 3)(2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DispatcherLookingComponent_nz_result_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.cancelRequest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Cancel Request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function DispatcherLookingComponent_div_2_nz_result_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-result", 7)(1, "div", 3)(2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " View Request Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const order_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate3"]("nzTitle", "", order_r4.driver == null ? null : order_r4.driver.firstName, " ", order_r4.driver == null ? null : order_r4.driver.lastName, " (", order_r4.driver == null ? null : order_r4.driver.mobileNumber, ") has accepted the request. Go to the trip page for more information.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/requests/view/" + order_r4.id);
} }
function DispatcherLookingComponent_div_2_nz_result_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-result", 9)(1, "div", 3)(2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " View Request Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const order_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("nzTitle", "Trip status is updated to ", order_r4.status, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/requests/view/" + order_r4.id);
} }
function DispatcherLookingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DispatcherLookingComponent_div_2_nz_result_1_Template, 4, 4, "nz-result", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DispatcherLookingComponent_div_2_nz_result_2_Template, 4, 2, "nz-result", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r4.status == "DriverAccepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r4.status != "DriverAccepted");
} }
class DispatcherLookingComponent {
    constructor(orderUpdateSubscription, cancelOrderMutation, route, router, msg) {
        this.orderUpdateSubscription = orderUpdateSubscription;
        this.cancelOrderMutation = cancelOrderMutation;
        this.route = route;
        this.router = router;
        this.msg = msg;
    }
    ngOnInit() {
        const orderId = this.route.snapshot.queryParams.requestId;
        this.query = this.orderUpdateSubscription.subscribe({ id: orderId });
    }
    cancelRequest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const orderId = this.route.snapshot.queryParams.requestId;
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(this.cancelOrderMutation.mutate({ orderId }));
            this.msg.success("Order Canceled.");
            this.router.navigate(["../riders-list"], {
                relativeTo: this.route,
            });
        });
    }
}
DispatcherLookingComponent.ɵfac = function DispatcherLookingComponent_Factory(t) { return new (t || DispatcherLookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderUpdatedGQL), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CancelOrderGQL), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__.NzMessageService)); };
DispatcherLookingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DispatcherLookingComponent, selectors: [["app-dispatcher-looking"]], decls: 4, vars: 6, consts: [["nzStatus", "info", "nzTitle", "Looking For suitable driver. Please wait...", 4, "ngIf"], [4, "ngIf"], ["nzStatus", "info", "nzTitle", "Looking For suitable driver. Please wait..."], ["nz-result-extra", ""], ["nz-button", "", "nzType", "default", 3, "click"], ["nzStatus", "success", 3, "nzTitle", 4, "ngIf"], ["nzStatus", "info", 3, "nzTitle", 4, "ngIf"], ["nzStatus", "success", 3, "nzTitle"], ["nz-button", "", "nzType", "default", 3, "routerLink"], ["nzStatus", "info", 3, "nzTitle"]], template: function DispatcherLookingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DispatcherLookingComponent_nz_result_0_Template, 4, 0, "nz-result", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DispatcherLookingComponent_div_2_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.orderUpdated) == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.query)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.orderUpdated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_7__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_7__.NzResultExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 7216:
/*!************************************************************************************************!*\
  !*** ./src/app/cms/home/dispatcher/dispatcher-riders-list/dispatcher-riders-list.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatcherRidersListComponent": () => (/* binding */ DispatcherRidersListComponent)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@services/table-service */ 97633);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 23992);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);
/* harmony import */ var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@pipes/phone.pipe */ 5390);

















function DispatcherRidersListComponent_nz_table_0_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td")(7, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DispatcherRidersListComponent_nz_table_0_tr_18_Template_a_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const data_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.selectRider(data_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", data_r8.firstName, " ", data_r8.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, data_r8.mobileNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Select");
} }
function DispatcherRidersListComponent_nz_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-table", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzQueryParams", function DispatcherRidersListComponent_nz_table_0_Template_nz_table_nzQueryParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.tableService.onTableQueryParamsChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead")(3, "tr")(4, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-filter-trigger", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-filter-trigger", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DispatcherRidersListComponent_nz_table_0_tr_18_Template, 9, 6, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const riders_r5 = ctx.ngIf;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
    let tmp_5_0;
    let tmp_9_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzFrontPagination", false)("nzData", riders_r5.nodes)("nzTotal", riders_r5.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSortFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 12, "profile.name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzActive", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 14, ctx_r0.route.queryParams)) == null ? null : tmp_5_0.filter == null ? null : tmp_5_0.filter.includes("lastName|like|"))("nzDropdownMenu", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSortFn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 16, "profile.mobileNumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzActive", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 18, ctx_r0.route.queryParams)) == null ? null : tmp_9_0.filter == null ? null : tmp_9_0.filter.includes("mobileNumber|like|"))("nzDropdownMenu", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r6.data);
} }
class DispatcherRidersListComponent {
    constructor(route, translate, tableService, router) {
        this.route = route;
        this.translate = translate;
        this.tableService = tableService;
        this.router = router;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => data.riders));
    }
    selectRider(id) {
        this.router.navigate(["../locations-select"], {
            relativeTo: this.route,
            queryParams: { riderId: id },
            queryParamsHandling: "merge",
        });
    }
}
DispatcherRidersListComponent.ɵfac = function DispatcherRidersListComponent_Factory(t) { return new (t || DispatcherRidersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_src_app_services_table_service__WEBPACK_IMPORTED_MODULE_0__.TableService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
DispatcherRidersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DispatcherRidersListComponent, selectors: [["app-dispatcher-riders-list"]], decls: 27, vars: 18, consts: [["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams", 4, "ngIf"], ["filtername", "nzDropdownMenu"], [1, "ant-table-filter-dropdown"], [1, "search-box"], ["nz-input", "", 3, "placeholder"], ["lastNameInput", ""], ["nz-button", "", "nzSize", "small", "nzType", "default", 1, "search-button", 3, "click"], ["nz-button", "", "nzSize", "small", 3, "click"], ["filtermobile", "nzDropdownMenu"], ["nz-input", "", "placeholder", "Search Mobile Number"], ["mobileNumberInput", ""], ["nzShowSizeChanger", "", "nzBordered", "", 3, "nzFrontPagination", "nzData", "nzTotal", "nzQueryParams"], ["table", ""], ["nzCustomFilter", "", "nzColumnKey", "lastName", 3, "nzSortFn"], [3, "nzActive", "nzDropdownMenu"], ["nz-icon", "", "nzType", "search"], ["nzCustomFilter", "", "nzColumnKey", "mobileNumber", 3, "nzSortFn"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function DispatcherRidersListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DispatcherRidersListComponent_nz_table_0_Template, 19, 20, "nz-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-dropdown-menu", null, 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DispatcherRidersListComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); return ctx.tableService.filterText("lastName", _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DispatcherRidersListComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); return ctx.tableService.resetFilter("lastName", _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nz-dropdown-menu", null, 8)(17, "div", 2)(18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DispatcherRidersListComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20); return ctx.tableService.filterText("mobileNumber", _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DispatcherRidersListComponent_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20); return ctx.tableService.resetFilter("mobileNumber", _r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 6, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.riders);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 8, "profile.lastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, "profile.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 12, "profile.reset"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 14, "profile.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 16, "profile.reset"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzThAddOnComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzFilterTriggerComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__.NzDropdownMenuComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_1__.PhonePipe], encapsulation: 2 });


/***/ }),

/***/ 94507:
/*!******************************************************************!*\
  !*** ./src/app/cms/home/dispatcher/dispatcher-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatcherRoutingModule": () => (/* binding */ DispatcherRoutingModule)
/* harmony export */ });
/* harmony import */ var _dispatcher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher.component */ 67065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _riders_riders_list_riders_list_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../riders/riders-list/riders-list.resolver */ 64739);
/* harmony import */ var _dispatcher_locations_select_dispatcher_locations_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispatcher-locations-select/dispatcher-locations-select.component */ 946);
/* harmony import */ var _dispatcher_looking_dispatcher_looking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispatcher-looking/dispatcher-looking.component */ 19511);
/* harmony import */ var _dispatcher_riders_list_dispatcher_riders_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dispatcher-riders-list/dispatcher-riders-list.component */ 7216);
/* harmony import */ var _dispatcher_service_select_dispatcher_service_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatcher-service-select/dispatcher-service-select.component */ 85787);
/* harmony import */ var _dispatcher_service_select_dispatcher_service_select_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dispatcher-service-select/dispatcher-service-select.resolver */ 24178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);










const routes = [
    { path: 'success/:id' },
    { path: '', component: _dispatcher_component__WEBPACK_IMPORTED_MODULE_0__.DispatcherComponent, children: [
            { path: '', redirectTo: 'riders-list' },
            { path: 'riders-list', component: _dispatcher_riders_list_dispatcher_riders_list_component__WEBPACK_IMPORTED_MODULE_4__.DispatcherRidersListComponent, resolve: { riders: _riders_riders_list_riders_list_resolver__WEBPACK_IMPORTED_MODULE_1__.RidersListResolver } },
            { path: 'locations-select', component: _dispatcher_locations_select_dispatcher_locations_select_component__WEBPACK_IMPORTED_MODULE_2__.DispatcherLocationsSelectComponent },
            { path: 'service-select', component: _dispatcher_service_select_dispatcher_service_select_component__WEBPACK_IMPORTED_MODULE_5__.DispatcherServiceSelectComponent, resolve: { services: _dispatcher_service_select_dispatcher_service_select_resolver__WEBPACK_IMPORTED_MODULE_6__.DispatcherServiceSelectResolver } }
        ] },
    { path: 'looking', component: _dispatcher_looking_dispatcher_looking_component__WEBPACK_IMPORTED_MODULE_3__.DispatcherLookingComponent }
];
class DispatcherRoutingModule {
}
DispatcherRoutingModule.ɵfac = function DispatcherRoutingModule_Factory(t) { return new (t || DispatcherRoutingModule)(); };
DispatcherRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DispatcherRoutingModule });
DispatcherRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        _riders_riders_list_riders_list_resolver__WEBPACK_IMPORTED_MODULE_1__.RidersListResolver,
        _dispatcher_service_select_dispatcher_service_select_resolver__WEBPACK_IMPORTED_MODULE_6__.DispatcherServiceSelectResolver
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DispatcherRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 85787:
/*!******************************************************************************************************!*\
  !*** ./src/app/cms/home/dispatcher/dispatcher-service-select/dispatcher-service-select.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatcherServiceSelectComponent": () => (/* binding */ DispatcherServiceSelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _dispatcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dispatcher.service */ 58991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/list */ 70511);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);












function DispatcherServiceSelectComponent_ul_0_div_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4)(1, "ul", 5)(2, "nz-list-item-action")(3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DispatcherServiceSelectComponent_ul_0_div_4_li_1_Template_a_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const service_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r6.selectService(service_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r5 = ctx.$implicit;
    const fare_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, "profile.select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", service_r5.name, " (", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 5, service_r5.cost, fare_r1.currency), ") ");
} }
function DispatcherServiceSelectComponent_ul_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DispatcherServiceSelectComponent_ul_0_div_4_li_1_Template, 8, 8, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", category_r3.services);
} }
function DispatcherServiceSelectComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 1)(1, "nz-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DispatcherServiceSelectComponent_ul_0_div_4_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fare_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDataSource", fare_r1.services);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, "profile.services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", fare_r1.services);
} }
class DispatcherServiceSelectComponent {
    constructor(route, router, dispatcherService, createOrderMutation) {
        this.route = route;
        this.router = router;
        this.dispatcherService = dispatcherService;
        this.createOrderMutation = createOrderMutation;
    }
    ngOnInit() {
        this.query = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => data.services));
    }
    selectService(service) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const riderId = this.route.snapshot.queryParams.riderId;
            const points = this.dispatcherService.deserializePoints(this.route.snapshot.queryParams.points);
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.createOrderMutation.mutate({
                riderId,
                points: points.map((point) => point.location),
                addresses: points.map((point) => point.address),
                serviceId: service.id,
            }));
            this.router.navigate(["../looking"], {
                relativeTo: this.route,
                queryParams: {
                    requestId: (_a = result.data) === null || _a === void 0 ? void 0 : _a.createOrder.id,
                    points: undefined,
                    riderId: undefined,
                },
            });
        });
    }
}
DispatcherServiceSelectComponent.ɵfac = function DispatcherServiceSelectComponent_Factory(t) { return new (t || DispatcherServiceSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__.DispatcherService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CreateOrderGQL)); };
DispatcherServiceSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DispatcherServiceSelectComponent, selectors: [["app-dispatcher-service-select"]], decls: 2, vars: 3, consts: [["nz-list", "", "nzBordered", "", "nzSize", "large", 3, "nzDataSource", 4, "ngIf"], ["nz-list", "", "nzBordered", "", "nzSize", "large", 3, "nzDataSource"], [4, "ngFor", "ngForOf"], ["nz-list-item", "", "nzNoFlex", "", 4, "ngFor", "ngForOf"], ["nz-list-item", "", "nzNoFlex", ""], ["nz-list-item-actions", ""], [3, "click"]], template: function DispatcherServiceSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DispatcherServiceSelectComponent_ul_0_Template, 5, 5, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.query)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.calculateFare);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListItemActionsComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListItemActionComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 24178:
/*!*****************************************************************************************************!*\
  !*** ./src/app/cms/home/dispatcher/dispatcher-service-select/dispatcher-service-select.resolver.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatcherServiceSelectResolver": () => (/* binding */ DispatcherServiceSelectResolver)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _dispatcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dispatcher.service */ 58991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class DispatcherServiceSelectResolver {
    constructor(dispatcherService, gql) {
        this.dispatcherService = dispatcherService;
        this.gql = gql;
    }
    resolve(route, state) {
        const points = this.dispatcherService.deserializePoints(route.queryParams.points);
        return this.gql.fetch({ points: points.map((point) => point.location) });
    }
}
DispatcherServiceSelectResolver.ɵfac = function DispatcherServiceSelectResolver_Factory(t) { return new (t || DispatcherServiceSelectResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__.DispatcherService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DispatcherCalculateFareGQL)); };
DispatcherServiceSelectResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DispatcherServiceSelectResolver, factory: DispatcherServiceSelectResolver.ɵfac });


/***/ }),

/***/ 16726:
/*!****************************************************************************************************************!*\
  !*** ./src/app/cms/home/dispatcher/dispatcher-success-driver-info/dispatcher-success-driver-info.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatcherSuccessDriverInfoComponent": () => (/* binding */ DispatcherSuccessDriverInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DispatcherSuccessDriverInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
DispatcherSuccessDriverInfoComponent.ɵfac = function DispatcherSuccessDriverInfoComponent_Factory(t) { return new (t || DispatcherSuccessDriverInfoComponent)(); };
DispatcherSuccessDriverInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DispatcherSuccessDriverInfoComponent, selectors: [["app-dispatcher-success-driver-info"]], decls: 2, vars: 0, template: function DispatcherSuccessDriverInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dispatcher-success-driver-info works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 67065:
/*!*************************************************************!*\
  !*** ./src/app/cms/home/dispatcher/dispatcher.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatcherComponent": () => (/* binding */ DispatcherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 25788);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/steps */ 38676);











class DispatcherComponent {
    constructor(router, route, messageService, modal, translate) {
        this.router = router;
        this.route = route;
        this.messageService = messageService;
        this.modal = modal;
        this.translate = translate;
        this.current = 0;
        this.services = [];
        this.tripDistance = 0;
        this.tripDuration = 0;
        this.isLoadingRiders = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((x) => {
            if (x["serviceId"] != null) {
                this.current = 3;
            }
            else if (x["points"] != null) {
                this.current = 2;
            }
            else if (x["riderId"] != null) {
                this.selectedRiderId = parseInt(x["riderId"]);
                this.current = 1;
            }
        });
        // this.socket.on('driverAccepted', async (request: Request) => {
        //   let modal = this.modal.create({
        //     nzTitle: await this.translate.get('message.success.title').toPromise(),
        //     nzContent: await this.translate.get('dispatcher.message.requestAssigned').toPromise(),
        //     nzFooter: [
        //       {
        //         label: await this.translate.get('dispatcher.viewRequest').toPromise(),
        //         type: 'primary',
        //         onClick: () => {
        //           this.viewRequest(request.id);
        //           modal.close();
        //         }
        //       },
        //       {
        //         label: await this.translate.get('profile.cancel').toPromise(),
        //         onClick: () => {
        //           modal.close();
        //         }
        //       }
        //     ]
        //   });
        // });
    }
    viewRequest(id) {
        this.router.navigate(["../../../requests/view", id], {
            relativeTo: this.route,
        });
    }
    refreshDrivers() {
        // this.socket.emit('getDriversLocation', null, (result: GetAllDriversLocationResult[]) => {
        //   this.drivers = result;
        //   this.centerMap();
        // });
    }
}
DispatcherComponent.ɵfac = function DispatcherComponent_Factory(t) { return new (t || DispatcherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
DispatcherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DispatcherComponent, selectors: [["app-dispatcher"]], decls: 17, vars: 25, consts: [[1, "grid", "grid-cols-1"], [3, "nzCurrent"], [3, "nzTitle", "nzDescription"], [1, "h-4", "w-full"]], template: function DispatcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-steps", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 3)(16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "dispatcher.rider.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzDescription", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, "dispatcher.rider.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, "dispatcher.location.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzDescription", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 15, "dispatcher.location.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 17, "dispatcher.service.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzDescription", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 19, "dispatcher.service.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 21, "dispatcher.looking.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzDescription", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 23, "dispatcher.looking.description"));
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_6__.NzStepsComponent, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_6__.NzStepComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 691:
/*!**********************************************************!*\
  !*** ./src/app/cms/home/dispatcher/dispatcher.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatcherModule": () => (/* binding */ DispatcherModule)
/* harmony export */ });
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../@components/shared.module */ 45497);
/* harmony import */ var _dispatcher_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dispatcher-routing.module */ 94507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dispatcher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispatcher.component */ 67065);
/* harmony import */ var _ridy_admin_panel_src_app_components_google_places_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ridy/admin-panel/src/app/@components/google-places.component */ 31713);
/* harmony import */ var _dispatcher_riders_list_dispatcher_riders_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dispatcher-riders-list/dispatcher-riders-list.component */ 7216);
/* harmony import */ var _dispatcher_locations_select_dispatcher_locations_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatcher-locations-select/dispatcher-locations-select.component */ 946);
/* harmony import */ var _dispatcher_service_select_dispatcher_service_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dispatcher-service-select/dispatcher-service-select.component */ 85787);
/* harmony import */ var _dispatcher_looking_dispatcher_looking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dispatcher-looking/dispatcher-looking.component */ 19511);
/* harmony import */ var _dispatcher_success_driver_info_dispatcher_success_driver_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dispatcher-success-driver-info/dispatcher-success-driver-info.component */ 16726);
/* harmony import */ var _dispatcher_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dispatcher.service */ 58991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);












class DispatcherModule {
}
DispatcherModule.ɵfac = function DispatcherModule_Factory(t) { return new (t || DispatcherModule)(); };
DispatcherModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: DispatcherModule });
DispatcherModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [_dispatcher_service__WEBPACK_IMPORTED_MODULE_9__.DispatcherService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _dispatcher_routing_module__WEBPACK_IMPORTED_MODULE_1__.DispatcherRoutingModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DispatcherModule, { declarations: [_dispatcher_component__WEBPACK_IMPORTED_MODULE_2__.DispatcherComponent,
        _ridy_admin_panel_src_app_components_google_places_component__WEBPACK_IMPORTED_MODULE_3__.GooglePlacesComponent,
        _dispatcher_riders_list_dispatcher_riders_list_component__WEBPACK_IMPORTED_MODULE_4__.DispatcherRidersListComponent,
        _dispatcher_locations_select_dispatcher_locations_select_component__WEBPACK_IMPORTED_MODULE_5__.DispatcherLocationsSelectComponent,
        _dispatcher_service_select_dispatcher_service_select_component__WEBPACK_IMPORTED_MODULE_6__.DispatcherServiceSelectComponent,
        _dispatcher_looking_dispatcher_looking_component__WEBPACK_IMPORTED_MODULE_7__.DispatcherLookingComponent,
        _dispatcher_success_driver_info_dispatcher_success_driver_info_component__WEBPACK_IMPORTED_MODULE_8__.DispatcherSuccessDriverInfoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _dispatcher_routing_module__WEBPACK_IMPORTED_MODULE_1__.DispatcherRoutingModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 58991:
/*!***********************************************************!*\
  !*** ./src/app/cms/home/dispatcher/dispatcher.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatcherService": () => (/* binding */ DispatcherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DispatcherService {
    serializePoints(points) {
        return points.map(point => `${point.location.lat}|${point.location.lng}|${point.address}`).join('_');
    }
    deserializePoints(string) {
        return string.split('_').map(point => ({ location: { lat: parseFloat(point.split('|')[0]), lng: parseFloat(point.split('|')[1]) }, address: point.split('|')[2] }));
    }
}
DispatcherService.ɵfac = function DispatcherService_Factory(t) { return new (t || DispatcherService)(); };
DispatcherService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DispatcherService, factory: DispatcherService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_cms_home_dispatcher_dispatcher_module_ts.js.map