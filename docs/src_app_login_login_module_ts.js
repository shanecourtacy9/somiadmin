"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_app_login_login_module_ts"],{

/***/ 49888:
/*!******************************************!*\
  !*** ./src/app/login/login.animation.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginTransition": () => (/* binding */ loginTransition)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 31631);

const loginTransition = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('loginTransition', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('div.wrapper', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translate3d(0, 10px, 0)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('400ms 200ms')
        ])
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }))
    ])
]);


/***/ }),

/***/ 98458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _login_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.animation */ 49888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 72719);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94805);



















function LoginComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_ng_template_15_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.passwordVisible = !ctx_r2.passwordVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r1.passwordVisible ? "eye-invisible" : "eye");
} }
class LoginComponent {
    constructor(fb, router, message, loginGql) {
        this.fb = fb;
        this.router = router;
        this.message = message;
        this.loginGql = loginGql;
        this.state = "activated";
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: [null, []],
            remember: [true],
        });
        this.validating = false;
        this.passwordVisible = false;
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    onLogin() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const username = (_a = this.validateForm.get("userName")) === null || _a === void 0 ? void 0 : _a.value;
                const password = (_b = this.validateForm.get("password")) === null || _b === void 0 ? void 0 : _b.value;
                const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.loginGql.fetch({ username, password }));
                localStorage.setItem("somi_admin_token", res.data.login.token);
                this.router.navigate([""], {});
            }
            catch (exception) {
                this.message.error(exception.message);
                this.validateForm.controls["password"].setErrors({ incorrect: true });
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.LoginGQL)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], hostVars: 1, hostBindings: function LoginComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@loginTransition", ctx.state);
    } }, decls: 21, vars: 4, consts: [[1, "full-screen", "page-content"], [1, "wrapper"], ["src", "./assets/logo.png", "alt", "", 1, "logo-img"], [1, "text-wrapper"], [1, "title-text"], ["nz-form", "", 1, "login-form", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "Please input your username!"], ["nzPrefixIcon", "user"], ["type", "text", "nz-input", "", "formControlName", "userName", "placeholder", "Username"], ["nzPrefixIcon", "lock", 3, "nzSuffix"], ["nz-input", "", "formControlName", "password", "placeholder", "Password", 3, "type"], ["passwordSuffixTemplate", ""], ["nz-button", "", "nzType", "default", 1, "login-form-button", 3, "disabled", "click"], ["nz-icon", "", 3, "nzType", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-form-item")(8, "nz-form-control", 6)(9, "nz-input-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nz-form-item")(12, "nz-form-control")(13, "nz-input-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LoginComponent_ng_template_15_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nz-form-item")(18, "nz-form-control")(19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.passwordVisible ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.validateForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective], styles: [".login-form-button[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  }\n.page-content[_ngcontent-%COMP%] {\n  background-color: #e08664 !important;\n}\n.full-screen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.full[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.wrapper[_ngcontent-%COMP%] {\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nmin-height: 400px;\nmax-height: 420px;\nheight: 60vh;\nmin-width: 300px;\nwidth: 30vw;\nmax-width: 400px;\npadding: 40px 30px 10px;\nborder-radius: 8px;\nbackground-color: white;\n}\n.logo-img[_ngcontent-%COMP%] {\n  flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.text-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n.title-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #a5a5a5;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\ndiv.page-content[_ngcontent-%COMP%] {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\npadding-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSDtFQUNFLGdCQUFnQjtFQUNoQjtBQUNGO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztBQUNYO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLGdCQUFnQjtBQUNoQix1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29udGFpbmVyIHtcbmhlaWdodDogMTAwdmg7XG5kaXNwbGF5OiB0YWJsZS1jZWxsO1xudmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5sb2dpbi1mb3JtIHtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDogNTAlO1xubGVmdDogNTAlO1xubWFyZ2luLXRvcDogLTE1MHB4O1xubWFyZ2luLWxlZnQ6IC0xNTBweDtcbndpZHRoOiAzMDBweDtcbmhlaWdodDogMzAwcHg7XG59XG4ubG9naW4tZm9ybS1mb3Jnb3Qge1xuZmxvYXQ6IHJpZ2h0O1xufVxuLmxvZ2luLWZvcm0tYnV0dG9uIHtcbndpZHRoOiAxMDAlO1xufSAqL1xuLmxvZ2luLWZvcm0tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuLnBhZ2UtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDg2NjQgIWltcG9ydGFudDtcbn1cbi5mdWxsLXNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4uZnVsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuLndyYXBwZXIge1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5hbGlnbi1pdGVtczogY2VudGVyO1xubWluLWhlaWdodDogNDAwcHg7XG5tYXgtaGVpZ2h0OiA0MjBweDtcbmhlaWdodDogNjB2aDtcbm1pbi13aWR0aDogMzAwcHg7XG53aWR0aDogMzB2dztcbm1heC13aWR0aDogNDAwcHg7XG5wYWRkaW5nOiA0MHB4IDMwcHggMTBweDtcbmJvcmRlci1yYWRpdXM6IDhweDtcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmxvZ28taW1nIHtcbiAgZmxleDogMCAwIDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0LXdyYXBwZXIge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxlLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjYTVhNWE1O1xufVxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5kaXYucGFnZS1jb250ZW50IHtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5wYWRkaW5nLXRvcDogNTBweDtcbn0iXX0= */"], data: { animation: [_login_animation__WEBPACK_IMPORTED_MODULE_1__.loginTransition] } });


/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 98458);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@components/shared.module */ 45497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([
                { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map