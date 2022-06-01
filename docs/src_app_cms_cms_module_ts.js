"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_cms_cms_module_ts"],{

/***/ 57419:
/*!***********************************************!*\
  !*** ./src/app/@animations/main.animation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainPageSwitchTransition": () => (/* binding */ mainPageSwitchTransition)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 31631);

const mainPageSwitchTransition = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('mainPageSwitchTransition', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('nz-layout.app-layout', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale3d(0.95, 0.95, 0)' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms 200ms')
    ])),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('nz-layout.app-layout', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale3d(0.95, 0.95, 0)' }))
        ])
    ])
]);


/***/ }),

/***/ 25097:
/*!**********************************!*\
  !*** ./src/app/@models/stats.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stats": () => (/* binding */ Stats)
/* harmony export */ });
class Stats {
    constructor() {
        this.complaints = 0;
        this.paymentRequests = 0;
        this.driversPending = 0;
        this.availableDrivers = 0;
        this.requests = 0;
        this.todayIncome = 0;
    }
}


/***/ }),

/***/ 81958:
/*!*******************************************!*\
  !*** ./src/app/cms/cms-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CMSRoutingModule": () => (/* binding */ CMSRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cms.component */ 95303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _cms_component__WEBPACK_IMPORTED_MODULE_0__.CMSComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            {
                path: 'home', children: [
                    { path: '', redirectTo: 'overview' },
                    { path: 'overview', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cms_home_overview_overview_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/overview/overview.module */ 13858)).then(m => m.OverviewModule) },
                    { path: 'dispatcher', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cms_home_dispatcher_dispatcher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/dispatcher/dispatcher.module */ 691)).then(m => m.DispatcherModule) }
                ]
            },
            { path: 'drivers', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_table-service_ts-src_app_country-codes_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cms_drivers_drivers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./drivers/drivers.module */ 77515)).then(m => m.DriversModule) },
            { path: 'riders', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_table-service_ts-src_app_country-codes_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cms_riders_riders_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./riders/riders.module */ 7899)).then(m => m.RidersModule) },
            { path: 'marketing', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_marketing_marketing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./marketing/marketing.module */ 8466)).then(m => m.MarketingModule) },
            { path: 'financials', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_financials_financials_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./financials/financials.module */ 10940)).then(m => m.FinancialsModule) },
            { path: 'requests', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_requests_requests_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./requests/requests.module */ 34657)).then(m => m.RequestsModule) },
            { path: 'complaints', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cms_complaints_complaints_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./complaints/complaints.module */ 7401)).then(m => m.ComplaintsModule) },
            { path: 'management', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_management_management_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./management/management.module */ 72565)).then(x => x.ManagementModule) }
        ]
    }
];
class CMSRoutingModule {
}
CMSRoutingModule.ɵfac = function CMSRoutingModule_Factory(t) { return new (t || CMSRoutingModule)(); };
CMSRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CMSRoutingModule });
CMSRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CMSRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 95303:
/*!**************************************!*\
  !*** ./src/app/cms/cms.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CMSComponent": () => (/* binding */ CMSComponent)
/* harmony export */ });
/* harmony import */ var _models_stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../@models/stats */ 25097);
/* harmony import */ var _animations_main_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@animations/main.animation */ 57419);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/es */ 92403);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 14310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/notification */ 63063);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 78800);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/menu */ 78028);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/badge */ 23397);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/popover */ 30897);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 28625);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/divider */ 60021);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 32920);

























function CMSComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "menu.riders"));
} }
function CMSComponent_span_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "menu.requests"));
} }
function CMSComponent_span_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "menu.complaints"));
} }
const _c0 = function () { return ["/complaints"]; };
function CMSComponent_ng_template_97_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nz-avatar", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 44)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.stats.complaints);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 3, "notification.complaints.suffix"), "");
} }
function CMSComponent_ng_template_97_nz_divider_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-divider");
} }
const _c1 = function () { return ["/drivers/pending"]; };
const _c2 = function () { return { status: "pending approval" }; };
function CMSComponent_ng_template_97_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nz-avatar", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 44)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.stats.driversPending);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, "notification.pendingDrivers.suffix"), "");
} }
function CMSComponent_ng_template_97_nz_divider_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-divider");
} }
const _c3 = function () { return ["/drivers/payment-requests"]; };
const _c4 = function () { return { status: "Pending" }; };
function CMSComponent_ng_template_97_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nz-avatar", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 44)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.stats.paymentRequests);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, "notification.paymentRequests.suffix"), "");
} }
function CMSComponent_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CMSComponent_ng_template_97_div_1_Template, 7, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CMSComponent_ng_template_97_nz_divider_3_Template, 1, 0, "nz-divider", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CMSComponent_ng_template_97_div_4_Template, 7, 8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CMSComponent_ng_template_97_nz_divider_6_Template, 1, 0, "nz-divider", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CMSComponent_ng_template_97_div_7_Template, 7, 8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.stats.complaints !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.stats.driversPending !== 0 && ctx_r4.stats.complaints !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.stats.driversPending !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.stats.paymentRequests !== 0 && (ctx_r4.stats.complaints !== 0 || ctx_r4.stats.driversPending !== 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.stats.paymentRequests !== 0);
} }
const _c5 = function () { return { filter: "status|in|PendingApproval" }; };
const _c6 = function () { return { sort: "id|DESC" }; };
class CMSComponent {
    constructor(router, route, notification, translate, i18n) {
        this.router = router;
        this.route = route;
        this.notification = notification;
        this.translate = translate;
        this.i18n = i18n;
        this.state = "activated";
        this.isCollapsed = true;
        this.stats = new _models_stats__WEBPACK_IMPORTED_MODULE_0__.Stats();
        this.isDarkMode = false;
    }
    ngOnInit() {
        if (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches) {
            //this.isDarkMode = true;
            this.changeTheme();
        }
        // this.socket.fromEvent('newNotification').subscribe((x: SocketNotification) => {
        //   const title = x.type == 'Complaint' ? 'New Complaint' : (x.type == 'Driver') ? 'Driver Submitted' : 'Payment Requeset';
        //   const message = x.type == 'Complaint' ? 'A Complaint has been made.' : (x.type == 'Driver') ? 'A new Driver has submitted awaiting your approval.' : 'A driver has requested payment.';
        //   this.notification.create(
        //     x.type == 'Complaint' ? 'warning' : 'info',
        //     title,
        //     message
        //   )
        // });
        // this.socket.emit('getStats', null, (result: Stats) => {
        //   this.stats = result;
        // });
        // this.socket.fromEvent('statChanged').subscribe((x: any) => {
        //   this.stats[x.key] += x.value;
        // });
    }
    logout() {
        localStorage.removeItem("somi_admin_token");
        this.router.navigate(["login"], { relativeTo: this.route.root });
        window.location.reload();
        // const sessionId = localStorage.getItem('sessionId') != null ? parseInt(localStorage.getItem('sessionId') ?? "") : null;
        // this.socket.emit('logout', { sessionId }, (result: number) => {
        //   localStorage.removeItem('somi_admin_token');
        //   this.router.navigate(['login'], {relativeTo: this.route.root});
        //   window.location.reload();
        // });
    }
    changeTheme() {
        // this.isDarkMode = !this.isDarkMode;
        // if (this.isDarkMode) {
        //   const head = document.head || document.getElementsByTagName('head')[0];
        //   const style = document.createElement('link');
        //   style.type = 'text/css';
        //   style.rel = 'stylesheet';
        //   style.id = 'dark-theme';
        //   style.href = '/theme.dark.css';
        //   head.appendChild(style);
        // } else {
        //   const dom = document.getElementById('dark-theme');
        //   if (dom) {
        //     dom.remove();
        //   }
        // }
    }
    changeLanguage(language) {
        this.translate.use(language);
        localStorage.setItem("lang", language);
        switch (language) {
            case "en":
                this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.en_US);
                break;
            case "es":
                this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.es_ES);
                (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.registerLocaleData)(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2__["default"]);
                break;
            case "fr":
                this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.fr_FR);
                break;
            case "de":
                this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.de_DE);
                break;
            case "ar":
                this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.ar_EG);
                break;
            case "hy":
                this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.hy_AM);
                break;
            case "ko":
                this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.ko_KR);
                break;
            case "ru":
                this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.ru_RU);
                break;
            case "zh":
                this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.zh_CN);
                break;
            case "ja":
                this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.ja_JP);
                break;
            case "pt":
                this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.pt_PT);
                break;
        }
    }
}
CMSComponent.ɵfac = function CMSComponent_Factory(t) { return new (t || CMSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_7__.NzNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.NzI18nService)); };
CMSComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CMSComponent, selectors: [["app-cms"]], hostVars: 1, hostBindings: function CMSComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostProperty"]("@mainPageSwitchTransition", ctx.state);
    } }, decls: 115, vars: 95, consts: [[1, "app-layout"], ["nzCollapsible", "", "nzWidth", "256px", "nzBreakpoint", "md", 2, "background-color", "white", 3, "nzCollapsed", "nzTrigger", "nzCollapsedChange"], [1, "sidebar-logo"], ["target", "_blank", 3, "href"], ["src", "../../assets/logo.png", "alt", "logo"], ["nz-menu", "", "nzMode", "inline", 3, "nzInlineCollapsed"], ["nz-submenu", "", "nzIcon", "dashboard", 3, "nzTitle"], ["nz-menu-item", "", "nzMatchRouter", ""], ["routerLink", "/home/overview"], ["routerLink", "/home/dispatcher"], ["nz-submenu", "", "nzIcon", "car", 3, "nzTitle"], ["routerLink", "/drivers", "routerLinkActive", "router-link-active", 3, "queryParams"], ["nz-menu-item", "", "nzMatchRouter", "", "nzMatchRouterExact", "false"], ["routerLink", "/drivers", 3, "queryParams"], ["nz-submenu", "", "nzIcon", "fund", 3, "nzTitle"], ["routerLink", "/marketing/coupons"], ["routerLink", "/marketing/announcements"], ["nz-submenu", "", "nzIcon", "bank", 3, "nzTitle"], ["routerLink", "/financials/provider"], ["routerLink", "/financials/fleet"], ["routerLink", "/financials/driver"], ["routerLink", "/financials/rider"], ["routerLink", "/riders", 3, "queryParams"], ["nz-icon", "", "nzType", "user"], [4, "ngIf"], ["routerLink", "/requests", 3, "queryParams"], ["nz-icon", "", "nzType", "container"], ["routerLink", "/complaints", 3, "queryParams"], ["nz-icon", "", "nzType", "customer-service"], ["nz-submenu", "", "nzIcon", "control", 3, "nzTitle"], ["routerLink", "/management/user-roles"], ["routerLink", "/management/users"], ["routerLink", "/management/settings"], [3, "nzGhost"], [1, "header-trigger", 3, "click"], ["nz-icon", "", 1, "trigger", 3, "nzType"], [2, "margin-right", "15px", 3, "nzDot"], ["nz-popover", "", "nzPopoverPlacement", "bottomRight", 1, "header-trigger", 3, "nzPopoverTitle", "nzPopoverContent"], ["nz-icon", "", "nzType", "notification", 1, "trigger"], ["notificationTemplate", ""], ["nz-icon", "", "nzType", "logout", 1, "trigger", 3, "nz-tooltip"], [1, "inner-content"], [3, "href"], ["nzSize", "large", "nzShape", "square", "nzIcon", "customer-service", 1, "not-avatar", 2, "background-color", "#b7eb8f", 3, "routerLink"], [1, "not-desc"], ["nzSize", "large", "nzShape", "square", "nzIcon", "car", 1, "not-avatar", 2, "background-color", "#87e8de", 3, "routerLink", "queryParams"], ["nzSize", "large", "nzShape", "square", "nzIcon", "bank", 1, "not-avatar", 2, "background-color", "#d3adf7", 3, "routerLink", "queryParams"]], template: function CMSComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout", 0)(1, "nz-sider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCollapsedChange", function CMSComponent_Template_nz_sider_nzCollapsedChange_1_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 5)(7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul")(10, "li", 7)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 7)(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ul")(21, "li", 7)(22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li", 12)(26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ul")(32, "li", 12)(33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "li", 12)(37, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ul")(43, "li", 12)(44, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "li", 12)(48, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "li", 12)(52, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "li", 12)(56, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "li", 12)(60, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, CMSComponent_span_62_Template, 3, 3, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "li", 12)(64, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, CMSComponent_span_66_Template, 3, 3, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "li", 7)(68, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, CMSComponent_span_70_Template, 3, 3, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "ul")(74, "li", 7)(75, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "li", 7)(79, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "li", 7)(83, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "nz-layout")(87, "nz-header")(88, "nz-page-header", 33)(89, "nz-page-header-title")(90, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CMSComponent_Template_span_click_90_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "nz-page-header-extra")(93, "nz-badge", 36)(94, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](97, CMSComponent_ng_template_97_Template, 8, 5, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CMSComponent_Template_span_click_99_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "nz-content")(103, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "nz-footer")(106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzCollapsed", ctx.isCollapsed)("nzTrigger", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 40, "branding.footer.address"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzInlineCollapsed", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 42, "menu.home.header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 44, "menu.home.overview"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 46, "menu.home.dispatcher"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 48, "menu.driver.header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](90, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 50, "menu.driver.pendingVerification"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](91, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 52, "menu.driver.all"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 54, "menu.marketing.header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 56, "menu.marketing.coupons"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 58, "menu.marketing.announcements"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 60, "menu.accounting.header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](46, 62, "menu.accounting.admin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 64, "menu.accounting.fleets"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 66, "menu.accounting.drivers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](58, 68, "menu.accounting.riders"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](92, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](93, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](94, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](72, 70, "menu.management.header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](77, 72, "menu.management.userRoles"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](81, 74, "menu.management.users"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](85, 76, "menu.management.settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGhost", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.isCollapsed ? "menu-unfold" : "menu-fold");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDot", ctx.stats.complaints !== 0 || ctx.stats.driversPending !== 0 || ctx.stats.paymentRequests !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPopoverTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](95, 78, "overview.notification.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPopoverContent", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nz-tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](101, 80, "overview.logout"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](108, 82, "branding.footer.prefix"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](110, 84, "branding.footer.address"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](112, 86, "branding.footer.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](114, 88, "branding.footer.suffix"), "");
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzSiderComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__.NzSubMenuComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__.NzMenuItemDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderTitleDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderExtraDirective, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_14__.NzBadgeComponent, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_15__.NzPopoverDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_17__.NzAvatarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__.NzDividerComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__.NzTooltipDirective, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzContentComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzFooterComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n    display: flex;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    min-height: 100vh;\n  }\n\n  .menu-sidebar[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    min-height: 100vh;\n    box-shadow: 2px 0 6px rgba(0,21,41,.35);\n  }\n\n  .header-trigger[_ngcontent-%COMP%] {\n    height: 64px;\n    padding: 20px 0px;\n    font-size: 20px;\n    cursor: pointer;\n    transition: all .3s,padding 0s;\n  }\n\n  .trigger[_ngcontent-%COMP%]:hover {\n    transition: linear 300ms;\n    color: #009688;\n  }\n\n  .sidebar-logo[_ngcontent-%COMP%] {\n    position: relative;\n    height: 64px;\n    padding-left: 24px;\n    overflow: hidden;\n    line-height: 64px;\n    transition: all .3s;\n  }\n\n  .sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: inline-block;\n    height: 32px;\n    width: 32px;\n    vertical-align: middle;\n  }\n\n  .sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 0 0 0 20px;\n    font-weight: 600;\n    font-size: 14px;\n    vertical-align: middle;\n  }\n\n  nz-header[_ngcontent-%COMP%] {\n    padding: 0;\n    width: 100%;\n    z-index: 2;\n  }\n\n  .app-header[_ngcontent-%COMP%] {\n    position: relative;\n    height: 64px;\n    padding: 0;\n    background: #fff;\n    box-shadow: 0 1px 4px rgba(0,21,41,.08);\n  }\n\n  nz-content[_ngcontent-%COMP%] {\n    margin-top: 24px;\n    margin-left: 24px;\n    margin-right: 24px;\n  }\n\n  .inner-content[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n\n  nz-footer[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .not-desc[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n\n  .not-avatar[_ngcontent-%COMP%] {\n    margin: 5px;\n    cursor: pointer;\n  }\n\n  .not-avatar[_ngcontent-%COMP%]:hover {\n    transition: linear 200ms;\n    opacity: 0.7;\n  }\n\n  nz-divider[_ngcontent-%COMP%] {\n    margin-top: 7px;\n    margin-bottom: 7px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLFlBQVk7RUFDZDs7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEIiLCJmaWxlIjoiY21zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuICAubWVudS1zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgYm94LXNoYWRvdzogMnB4IDAgNnB4IHJnYmEoMCwyMSw0MSwuMzUpO1xuICB9XG4gIFxuICAuaGVhZGVyLXRyaWdnZXIge1xuICAgIGhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MscGFkZGluZyAwcztcbiAgfVxuICBcbiAgLnRyaWdnZXI6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGxpbmVhciAzMDBtcztcbiAgICBjb2xvcjogIzAwOTY4ODtcbiAgfVxuICBcbiAgLnNpZGViYXItbG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICB9XG4gIFxuICAuc2lkZWJhci1sb2dvIGltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIFxuICAuc2lkZWJhci1sb2dvIGgxIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgXG4gIG56LWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIFxuICAuYXBwLWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwyMSw0MSwuMDgpO1xuICB9XG4gIFxuICBuei1jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgfVxuICBcbiAgLmlubmVyLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG5cbiAgbnotZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubm90LWRlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5ub3QtYXZhdGFyIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLm5vdC1hdmF0YXI6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGxpbmVhciAyMDBtcztcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgbnotZGl2aWRlciB7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfSJdfQ== */"], data: { animation: [_animations_main_animation__WEBPACK_IMPORTED_MODULE_1__.mainPageSwitchTransition] } });


/***/ }),

/***/ 66789:
/*!***********************************!*\
  !*** ./src/app/cms/cms.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CMSModule": () => (/* binding */ CMSModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _cms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cms-routing.module */ 81958);
/* harmony import */ var _cms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cms.component */ 95303);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@components/shared.module */ 45497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class CMSModule {
}
CMSModule.ɵfac = function CMSModule_Factory(t) { return new (t || CMSModule)(); };
CMSModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CMSModule });
CMSModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _cms_routing_module__WEBPACK_IMPORTED_MODULE_0__.CMSRoutingModule,
            _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CMSModule, { declarations: [_cms_component__WEBPACK_IMPORTED_MODULE_1__.CMSComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _cms_routing_module__WEBPACK_IMPORTED_MODULE_0__.CMSRoutingModule,
        _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cms_cms_module_ts.js.map