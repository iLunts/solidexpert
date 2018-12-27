(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header ></app-header> -->\r\n<app-nav ></app-nav>\r\n<!-- <app-header [ngClass]=\"{'open': isShowMenu}\"></app-header> -->\r\n<router-outlet></router-outlet>\r\n<!-- <router-outlet [ngClass]=\"{'open': isShowMenu}\"></router-outlet> -->\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_development_page_development_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/development-page/development-page.component */ "./src/app/pages/development-page/development-page.component.ts");
/* harmony import */ var _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/products-page/products-page.component */ "./src/app/pages/products-page/products-page.component.ts");
/* harmony import */ var _pages_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/services-page/services-page.component */ "./src/app/pages/services-page/services-page.component.ts");
/* harmony import */ var _pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact-us-page/contact-us-page.component */ "./src/app/pages/contact-us-page/contact-us-page.component.ts");
/* harmony import */ var _pages_cv_generator_page_cv_generator_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/cv-generator-page/cv-generator-page.component */ "./src/app/pages/cv-generator-page/cv-generator-page.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _ui_slider_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/slider/slider.component */ "./src/app/ui/slider/slider.component.ts");
/* harmony import */ var _ui_form_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/form/form.component */ "./src/app/ui/form/form.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routing */ "./src/app/routing.ts");
/* harmony import */ var _ui_button_form_button_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ui/button-form/button-form.component */ "./src/app/ui/button-form/button-form.component.ts");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var _ui_nav_nav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui/nav/nav.component */ "./src/app/ui/nav/nav.component.ts");
/* harmony import */ var _ui_grid_line_grid_line_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/grid-line/grid-line.component */ "./src/app/ui/grid-line/grid-line.component.ts");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib/index.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ng_inline_svg__WEBPACK_IMPORTED_MODULE_22__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _ui_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _pages_development_page_development_page_component__WEBPACK_IMPORTED_MODULE_6__["DevelopmentPageComponent"],
                _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_7__["ProductsPageComponent"],
                _pages_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_8__["ServicesPageComponent"],
                _pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsPageComponent"],
                _pages_cv_generator_page_cv_generator_page_component__WEBPACK_IMPORTED_MODULE_10__["CvGeneratorPageComponent"],
                _ui_slider_slider_component__WEBPACK_IMPORTED_MODULE_13__["SliderComponent"],
                _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _ui_form_form_component__WEBPACK_IMPORTED_MODULE_14__["FormComponent"],
                _ui_button_form_button_form_component__WEBPACK_IMPORTED_MODULE_18__["ButtonFormComponent"],
                _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_19__["MainPageComponent"],
                _ui_nav_nav_component__WEBPACK_IMPORTED_MODULE_20__["NavComponent"],
                _ui_grid_line_grid_line_component__WEBPACK_IMPORTED_MODULE_21__["GridLineComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _routing__WEBPACK_IMPORTED_MODULE_17__["route"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"].forRoot(),
                ng_inline_svg__WEBPACK_IMPORTED_MODULE_22__["InlineSVGModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/contact-us-page/contact-us-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/contact-us-page/contact-us-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\r\n  <div class=\"contact__left\">\r\n    <div class=\"contact__left-img\">\r\n      <img src=\"https://sevenstars.nl/Assets/img/contact/contact-maico.jpg\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"contact__body\">\r\n    <div class=\"grid\">\r\n      <div class=\"col--xlg-2-3 col--lg-2-3 col--md-2-3 col--sm-1-1 col--xs-1-1\">\r\n        <h2 class=\"t--h3 t--green\">Have a question?</h2>\r\n        \r\n        <form [formGroup]=\"requestForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div>\r\n            <label class=\"label\">Your name</label>\r\n            <div class=\"input-group input-group--required\" [ngClass]=\"{ 'isError': f.name.errors && (f.name.dirty || f.name.touched) }\">\r\n              <input class=\"input-group__input\" type=\"text\" formControlName=\"name\">\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <label class=\"label\">E-mail address</label>\r\n            <div class=\"input-group input-group--required\" [ngClass]=\"{ 'isError': f.email.errors && (f.email.dirty || f.email.touched) }\">\r\n              <input class=\"input-group__input\" type=\"text\" formControlName=\"email\">\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <label class=\"label\">Telephone number</label>\r\n            <input class=\"input\" type=\"text\" formControlName=\"telephone\">\r\n          </div>\r\n          <div>\r\n            <label class=\"label\">Your message</label>\r\n            <textarea class=\"input\" rows=\"10\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"checkbox\">\r\n            <input class=\"checkbox__input\" type=\"checkbox\" id=\"privacy-statement\" formControlName=\"privacy\">\r\n            <label class=\"checkbox__label\" for=\"privacy-statement\">Yes, I authorize SolidExpert Ltd. process my personal data and agree to the privacy statement</label>\r\n          </div>\r\n\r\n          <hr class=\"line line--sm m--v\">\r\n\r\n          <div class=\"contact__question-send\">\r\n            <button class=\"btn btn--green btn--md\" [disabled]=\"f.name.errors || f.email.errors || f.privacy.invalid\">Send</button>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n\r\n      <div class=\"col--xlg-1-3 col--lg-1-3 col--md-1-3 col--sm-1-1 col--xs-1-1\">\r\n        <h3 class=\"t--h3 t--green m--b-md\">Main office</h3>\r\n        \r\n        <div class=\"contact__address\">\r\n          <p class=\"contact__address-text t--semi-bold\">SolidExpert Ltd</p>\r\n          <p class=\"contact__address-text\">Nemiga 3, Minsk</p>\r\n          <a href=\"tel:+1(919)3233612\" class=\"contact__address-link\">+1 (919) 323-36-12</a>\r\n          <a href=\"mailto:info@solidexpert.pro\" class=\"contact__address-link\">info@solidexpert.pro</a>\r\n        </div>\r\n\r\n\r\n        <h3 class=\"t--h3 t--green m--v-md\">Social media</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <iframe class=\"contact__map\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.564779469687!2d27.55035277568408!3d53.90393915930507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfeba2244dab%3A0x2fc998fd3e91b368!2sNemiga+3+Shopping+Mall!5e0!3m2!1sen!2sby!4v1544821022807\"\r\n  frameborder=\"0\" style=\"border:0\" allowfullscreen>\r\n</iframe> -->\r\n"

/***/ }),

/***/ "./src/app/pages/contact-us-page/contact-us-page.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/pages/contact-us-page/contact-us-page.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.contact .contact__left {\n  display: block;\n  width: 50%;\n  max-width: 50%;\n  max-height: 100vh;\n  overflow: hidden;\n}\n.contact .contact__left-img {\n  background-image: url('/assets/img/contact-page/contact.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  -webkit-clip-path: polygon(0 0, 100% 0, 88% 100%, 0% 100%);\n  clip-path: polygon(0 0, 100% 0, 88% 100%, 0% 100%);\n}\n.contact .contact__left-img img {\n  opacity: 0;\n  visibility: hidden;\n}\n.contact .contact__body {\n  display: block;\n  width: 50%;\n  min-height: 100vh;\n  padding: 100px;\n}\n.contact .contact__address-text {\n  display: block;\n  margin: 0;\n  line-height: 1.5;\n}\n.contact .contact__address-link {\n  display: block;\n  margin: 0;\n  line-height: 1.5;\n  color: #333;\n  text-decoration: underline;\n}\n.contact .contact__question-send {\n  text-align: center;\n}\n@media only screen and (min-width: 1600px) {\n}\n@media only screen and (min-width: 1220px) and (max-width: 1599px) {\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .contact .contact__body {\n    padding: 100px 50px;\n  }\n  .contact .contact__question-send {\n    margin-bottom: 20px;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .contact {\n    flex-wrap: wrap;\n  }\n  .contact .contact__left {\n    display: none;\n  }\n  .contact .contact__body {\n    width: 100%;\n    padding: 100px 30px;\n  }\n  .contact .contact__question-send {\n    margin-bottom: 20px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/pages/contact-us-page/contact-us-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/contact-us-page/contact-us-page.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactUsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageComponent", function() { return ContactUsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactUsPageComponent = /** @class */ (function () {
    function ContactUsPageComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ContactUsPageComponent.prototype.ngOnInit = function () {
        this.requestForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            telephone: ['',],
            privacy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue],
        });
    };
    Object.defineProperty(ContactUsPageComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.requestForm.controls; },
        enumerable: true,
        configurable: true
    });
    ContactUsPageComponent.prototype.onSubmit = function () {
        // stop here if form is invalid
        if (this.requestForm.invalid) {
            return;
        }
        alert('Thx!!! :-)');
        this.requestForm.reset();
    };
    ContactUsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us-page',
            template: __webpack_require__(/*! ./contact-us-page.component.html */ "./src/app/pages/contact-us-page/contact-us-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-us-page.component.less */ "./src/app/pages/contact-us-page/contact-us-page.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactUsPageComponent);
    return ContactUsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/cv-generator-page/cv-generator-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cv-generator-page/cv-generator-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  cv-generator-page works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/cv-generator-page/cv-generator-page.component.less":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cv-generator-page/cv-generator-page.component.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/cv-generator-page/cv-generator-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/cv-generator-page/cv-generator-page.component.ts ***!
  \************************************************************************/
/*! exports provided: CvGeneratorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvGeneratorPageComponent", function() { return CvGeneratorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CvGeneratorPageComponent = /** @class */ (function () {
    function CvGeneratorPageComponent() {
    }
    CvGeneratorPageComponent.prototype.ngOnInit = function () {
    };
    CvGeneratorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv-generator-page',
            template: __webpack_require__(/*! ./cv-generator-page.component.html */ "./src/app/pages/cv-generator-page/cv-generator-page.component.html"),
            styles: [__webpack_require__(/*! ./cv-generator-page.component.less */ "./src/app/pages/cv-generator-page/cv-generator-page.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], CvGeneratorPageComponent);
    return CvGeneratorPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/development-page/development-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/development-page/development-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dp {\r\n  background: #000;\r\n}\r\n.dp .dp__backdrop {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  min-height: 100%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  pointer-events: none;\r\n  height: 100%;\r\n}\r\n.dp .dp__backdrop .col {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 1px;\r\n  background-color: rgba(255, 255, 255, 0.16);\r\n  z-index: 2;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n.dp .dp__backdrop .col.col--1 {\r\n  left: 16.66666667%;\r\n}\r\n.dp .dp__backdrop .col.col--2 {\r\n  left: 33.33333333%;\r\n}\r\n.dp .dp__backdrop .col.col--3 {\r\n  left: 50%;\r\n}\r\n.dp .dp__backdrop .col.col--4 {\r\n  left: 66.66666667%;\r\n}\r\n.dp .dp__backdrop .col.col--5 {\r\n  left: 83.33333333%;\r\n}\r\n.dp .dp__title {\r\n  min-height: 600px;\r\n  background: #000;\r\n  background-image: url('/assets/img/page-dev/page-dev.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: 50% 50%;\r\n}\r\n.dp .dp__title-text--left {\r\n  -webkit-transform: translate(-100%, -10%);\r\n          transform: translate(-100%, -10%);\r\n}\r\n.dp .dp__title-text--right {\r\n  -webkit-transform: translate(0%, 50%);\r\n          transform: translate(0%, 50%);\r\n}\r\n.dp .dp__content {\r\n  max-width: 70.4%;\r\n}\r\n.dp .dp__content-introduction {\r\n  left: -25%;\r\n  padding-left: 25%;\r\n  -webkit-transform: translateY(-180px);\r\n          transform: translateY(-180px);\r\n  background: #000;\r\n}\r\n.dp .dp__content-facilities {\r\n  max-width: 75%;\r\n}\r\n.dp .dp__content-examples-slider {\r\n  padding-right: 0;\r\n}\r\n.dp .dp__content-news-item:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -20%;\r\n  width: 5%;\r\n  height: 5%;\r\n  background: #fff;\r\n}\r\n.dp .dp__team {\r\n  overflow: hidden;\r\n}\r\n.dp .dp__team-backdrop {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url('/assets/img/page-dev/dev-link.jpg') no-repeat;\r\n  background-size: 100%;\r\n  background-position: cover ;\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n  opacity: 0.45;\r\n  transition: all 3s;\r\n}\r\n.dp .dp__team-backdrop:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  opacity: 0.9;\r\n}\r\n.dp .dp__team-inner {\r\n  top: 5%;\r\n  width: 15%;\r\n  padding-left: 1.7%;\r\n  margin-left: 15%;\r\n  z-index: 2;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/development-page/development-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/development-page/development-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dp container-fluid t--white\">\r\n  <!-- Development backdrop -->\r\n  <div class=\"dp__backdrop\">\r\n    <span class=\"col col--1\"></span> <span class=\"col col--2\"></span>\r\n    <span class=\"col col--3\"></span> <span class=\"col col--4\"></span>\r\n    <span class=\"col col--5\"></span>\r\n  </div>\r\n  <!-- Development content -->\r\n  <header class=\"dp__title block\">\r\n    <h1 class=\"dp__title-text position--r t--c t--title m--t-xxlg \">\r\n      <span class=\"dp__title-text dp__title-text--left position--a\">Devel</span>\r\n      <span class=\"dp__title-text dp__title-text--right position--a\"\r\n        >opment</span\r\n      >\r\n    </h1>\r\n  </header>\r\n  <main class=\"dp__content container \">\r\n    <section class=\"dp__content-introduction block \">\r\n      <h2 class=\"t--h2 t--bold\">\r\n        Title\r\n      </h2>\r\n      <h3 class=\"t--h4 \">\r\n        Subtitle\r\n      </h3>\r\n      <p class=\"m--v-lg\">\r\n          Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\r\n          Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\r\n      </p>\r\n    </section>\r\n    <section class=\"dp__content-facilities block \">\r\n      <h2 class=\"t--h1 t--bold\">Title</h2>\r\n      <h3 class=\"t--h4\">Subtitle</h3>\r\n      <p class=\"m--v-lg\">\r\n          Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\r\n          Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\r\n      </p>\r\n    </section>\r\n    <section class=\"dp__content-examples\">\r\n      <div class=\"dp__content-examples-headline grid \">\r\n        <div class=\"col col--1-4 t--h4\">Café</div>\r\n        <div class=\"col col--1-4 t--h4\">Restaurant</div>\r\n        <div class=\"col col--1-4 t--h4\">Lounge</div>\r\n        <div class=\"col col--1-4 t--h4\"></div>\r\n      </div>\r\n      <div class=\"grid \">\r\n        <div class=\"dp__content-examples-slider col col--1-1 \">\r\n          <app-slider></app-slider>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div class=\"grid grid--collapse\">\r\n      <section class=\"dp__content-info col col--1-2 \">\r\n        <h2 class=\"t--h1 t--bold  m--v-lg\">Title</h2>\r\n        <h3 class=\"t--h4 t--bold \">Adres</h3>\r\n        <p>’s Gravelandseweg 80 1217 EW Hilversum</p>\r\n        <a class=\"t--uppercase link link--line\" href=\"\">View in Google Maps</a>\r\n        <h3 class=\"t--h4 t--bold m--v-md\">How to get to M</h3>\r\n        <p>\r\n            Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\r\n            Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\r\n        </p>\r\n        <h3 class=\"t--h4 t--bold m--v-md\">Parking</h3>\r\n        <p>\r\n            Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\r\n            Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\r\n        </p>\r\n        <h3 class=\"t--h4 t--bold m--v-md\">Accessibility</h3>\r\n        <p>\r\n            Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\r\n            Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\r\n        </p>\r\n      </section>\r\n      <section class=\"dp__content-news col col--1-2 \">\r\n        <h2 class=\"t--h1 t--bold  m--v-lg\">Agenda</h2>\r\n        <div class=\"dp__content-news-item position--r  m--v-md\">\r\n          <p class=\"t--md t--uppercase m\">29 November | 18:00 | M-gebouw</p>\r\n          <p class=\"t--h5 t--bold\">GrowthMatters workshop: The war on Talent</p>\r\n        </div>\r\n        <div class=\"dp__content-news-item position--r m--v-md\">\r\n        <p class=\"t--md t--uppercase m\">07 December | 12:00 | M-gebouw</p>\r\n        <p class=\"t--h5 t--bold\">\r\n          Tineke Live with live performances of Venice & Douwe Bob\r\n        </p>\r\n      </div>\r\n      </section>\r\n    </div>\r\n  </main>\r\n  <a class=\"dp__team block  d--b h--400 \">\r\n    <div class=\"dp__team-backdrop position--a\"></div>\r\n    <div class=\"dp__team-inner position--a\">\r\n      <h2 class=\"t--h1 t--bold\">Who's based here?</h2>\r\n      <p class=\"t--h5 t--uppercase link link--line\">View all residents</p>\r\n    </div>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/development-page/development-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/development-page/development-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: DevelopmentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopmentPageComponent", function() { return DevelopmentPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevelopmentPageComponent = /** @class */ (function () {
    function DevelopmentPageComponent() {
    }
    DevelopmentPageComponent.prototype.ngOnInit = function () {
    };
    DevelopmentPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-development-page',
            template: __webpack_require__(/*! ./development-page.component.html */ "./src/app/pages/development-page/development-page.component.html"),
            styles: [__webpack_require__(/*! ./development-page.component.css */ "./src/app/pages/development-page/development-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DevelopmentPageComponent);
    return DevelopmentPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".open .home-page {\r\n  -webkit-transform: translateY(150px);\r\n          transform: translateY(150px);\r\n}\r\n.home-page {\r\n  background-color: #000;\r\n  min-height: 100vh;\r\n  height: 100vh;\r\n  color: #fff;\r\n  transition: all .5s;\r\n}\r\n.home-page .home-page__flex {\r\n  position: relative;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  z-index: 1;\r\n}\r\n.home-page .home-page__backdrop {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  min-height: 100%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  pointer-events: none;\r\n  height: 100%;\r\n}\r\n.home-page .home-page__backdrop .col {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 1px;\r\n  background-color: rgba(255, 255, 255, 0.16);\r\n  z-index: 2;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n.home-page .home-page__backdrop .col:first-child:before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  height: 1px;\r\n  width: calc(16.66666667vw);\r\n  background-color: rgba(255, 255, 255, 0.16);\r\n  right: 1px;\r\n}\r\n.home-page .home-page__backdrop .col:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  height: 1px;\r\n  width: calc(16.66666667vw);\r\n  background-color: rgba(255, 255, 255, 0.16);\r\n  left: 1px;\r\n}\r\n.home-page .home-page__backdrop .col.col--1 {\r\n  left: 16.66666667%;\r\n}\r\n.home-page .home-page__backdrop .col.col--2 {\r\n  left: 33.33333333%;\r\n}\r\n.home-page .home-page__backdrop .col.col--3 {\r\n  left: 50%;\r\n}\r\n.home-page .home-page__backdrop .col.col--4 {\r\n  left: 66.66666667%;\r\n}\r\n.home-page .home-page__backdrop .col.col--5 {\r\n  left: 83.33333333%;\r\n}\r\n.home-page .home-page__img {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n}\r\n.home-page .home-page__img:after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  background-color: #000000;\r\n  transition: all .4s;\r\n}\r\n.home-page .home-page__img.home-page__img--1-1 .home-page__img-img {\r\n  min-width: 117%;\r\n  height: 117%;\r\n}\r\n.home-page .home-page__img-img {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 100%;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  z-index: 0;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  transition: all .4s;\r\n}\r\n.home-page .home-page__hover:hover .home-page__img:after {\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n.home-page .home-page__hover:hover .home-page__img-img {\r\n  -webkit-transform: translateX(-10%);\r\n          transform: translateX(-10%);\r\n}\r\n.home-page .home-page__project {\r\n  position: relative;\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-decoration: none;\r\n}\r\n.home-page .home-page__project-link {\r\n  position: relative;\r\n  display: inline-block;\r\n  z-index: 1;\r\n  color: #fff;\r\n  margin: 0;\r\n  text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Home backdrop -->\r\n\r\n      <div class=\"home-page__backdrop\">\r\n          <span class=\"col col--1\"></span>\r\n          <span class=\"col col--2\"></span>\r\n          <span class=\"col col--3\"></span>\r\n          <span class=\"col col--4\"></span>\r\n          <span class=\"col col--5\"></span>\r\n      </div>\r\n\r\n\r\n    <!-- Home content -->\r\n    <div class=\"grid grid--collapse\">\r\n      <a\r\n        href=\"\"\r\n        class=\"col--1-3 p--h-lg position--r home-page__hover link link--reset\"\r\n      >\r\n        <div class=\"home-page__img home-page__img--1-1\">\r\n          <img class=\"home-page__img-img\" src=\"assets/img/about.jpg\" alt=\"\" />\r\n        </div>\r\n\r\n        <div class=\"home-page__flex\">\r\n          <div>&nbsp;</div>\r\n          <div>\r\n            <h1 class=\"t--title\">About <span class=\"t--red\">us</span></h1>\r\n            <h2>Welkom in M, het nieuwe mediahart van Nederland</h2>\r\n          </div>\r\n          <div><a href=\"\" class=\"link link--line t--h5\">Lees meer over</a></div>\r\n        </div>\r\n      </a>\r\n\r\n      <div class=\"col--1-3\"></div>\r\n\r\n      <div class=\"col--1-3 home-page__flex\">\r\n        <div class=\"h-50\">\r\n          <div class=\"grid grid--collapse h-100\">\r\n            <div class=\"col--1-2\">\r\n              <a\r\n                class=\"home-page__project home-page__hover\"\r\n                [routerLink]=\"['/products']\"\r\n              >\r\n                <p\r\n                  class=\"home-page__project-link link link--line t--h4 t--semi-bold\"\r\n                >\r\n                  Products\r\n                </p>\r\n\r\n                <div class=\"home-page__img home-page__img--1-1\">\r\n                  <img\r\n                    class=\"home-page__img-img\"\r\n                    src=\"assets/img/development.jpg\"\r\n                    alt=\"\"\r\n                  />\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"col--1-2\">\r\n              <a\r\n                class=\"home-page__project home-page__hover\"\r\n                [routerLink]=\"['/services']\"\r\n              >\r\n                <p\r\n                  class=\"home-page__project-link link link--line t--h4 t--semi-bold\"\r\n                >\r\n                  Services\r\n                </p>\r\n\r\n                <div class=\"home-page__img home-page__img--1-1\">\r\n                  <img\r\n                    class=\"home-page__img-img\"\r\n                    src=\"assets/img/projects.png\"\r\n                    alt=\"\"\r\n                  />\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"h-50\">\r\n          <div class=\"grid grid--collapse\">\r\n            <div class=\"col--1-1 p--h-lg\">\r\n              <p class=\"t--h5\">\r\n                We create a complete experience for the technical part of your\r\n                business.\r\n              </p>\r\n              <p class=\"t--h5 t--semi-bold\">\r\n                We provide our clients with a custom CRM and ERP systems that\r\n                simplify all the working processes such as communications with\r\n                clients and prospects, managing internal business processes and\r\n                monitoring of all types of activities.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/pages/home-page/home-page.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"block block--about\">\r\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\r\n\r\n  <div class=\"block__overlay block__overlay--video\">\r\n    <video\r\n      class=\"block__overlay--video-item\"\r\n      autoplay\r\n      loop\r\n      poster=\"/assets/video/about/poster.jpg\"\r\n      muted\r\n      plays-inline\r\n    >\r\n      <source src=\"/assets/video/about/movie.mp4\" type=\"video/mp4\" />\r\n      <source src=\"/assets/video/about/movie.webm\" type=\"video/webm\" />\r\n      Your browser does not support the video tag.\r\n    </video>\r\n  </div>\r\n\r\n  <div class=\"block__body\">\r\n    <div class=\"container\">\r\n      <div class=\"grid \">\r\n        <div\r\n          class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1 push--xlg-1-5 push--lg-1-5 t--c\"\r\n        >\r\n          <h1 class=\"block__title\">YOUR SOLID SOLUTIONS</h1>\r\n          <h2 class=\"block__subtitle t--green\">\r\n            Web & Mobile Customized Software with the Core Expertise in CRM\r\n            Development & Implementation.\r\n          </h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"block block--green\">\r\n  <app-grid-line></app-grid-line>\r\n\r\n  <div class=\"block__overlay\">8+</div>\r\n\r\n  <div class=\"block__body\">\r\n    <div class=\"container\">\r\n      <div class=\"grid\">\r\n        <div\r\n          class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1\"\r\n        >\r\n          <h2 class=\"block__title\">\r\n            More than 8 years of experience in the software development\r\n            services.\r\n          </h2>\r\n          <h3 class=\"block__subtitle\">\r\n            We’ll deliver delightful digital experiences for your business and\r\n            lift all the technical issues off your shoulders.\r\n          </h3>\r\n\r\n          <ul class=\"block__list m--reset\">\r\n            <li>Mobile App Development</li>\r\n            <li>Web Development</li>\r\n            <li>UX/UI</li>\r\n            <li>Your Reliable Dedicated Team</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"block block--gray\">\r\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\r\n\r\n  <div class=\"block__overlay\">189K</div>\r\n\r\n  <div class=\"block__body\">\r\n    <div class=\"container\">\r\n      <div class=\"grid\">\r\n        <div\r\n          class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1\"\r\n        >\r\n          <h2 class=\"block__title\">\r\n            More than 189K of unique users of our system per 3 years\r\n          </h2>\r\n\r\n          <p class=\"block__text\">Around 1200 of new visitors per day.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"block block--white\">\r\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\r\n\r\n  <div class=\"block__overlay\">94%</div>\r\n\r\n  <div class=\"block__body\">\r\n    <div class=\"container\">\r\n      <div class=\"grid\">\r\n        <div class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1 push--lg-1-5\">\r\n          <app-slider></app-slider>          \r\n        </div>\r\n        <div class=\"col--xlg-1-5 col--lg-1-5 col--md-1-1 col--sm-1-1 col--xs-1-1 push--lg-2-5 \">\r\n          Solde\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"grid\">\r\n        <div\r\n          class=\"col--1-12\"\r\n          [inlineSVG]=\"'/assets/img/logo/SolidExpert-logo-color.svg'\">\r\n        </div>\r\n       \r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"block block--gray\">\r\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\r\n\r\n  <div class=\"block__overlay\">18+</div>\r\n\r\n  <div class=\"block__body\">\r\n    <div class=\"container\">\r\n      <div class=\"grid\">\r\n        <div\r\n          class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1\"\r\n        >\r\n          <h2 class=\"block__title\">\r\n            Are you eager to make the digital world better for everyone?\r\n          </h2>\r\n          <p class=\"block__text\">\r\n            Join our ambitious and friendly team to make it happen!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.less":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 100px 0;\n  overflow: hidden;\n}\n.block.block--about {\n  align-items: center;\n  justify-content: flex-end;\n  background-color: #252525;\n  color: #fff;\n}\n.block.block--gray {\n  align-items: center;\n  justify-content: center;\n  background-color: #252525;\n  color: #fff;\n}\n.block.block--gray .block__title {\n  color: #fff;\n}\n.block.block--gray .block__overlay {\n  color: #303030;\n}\n.block.block--white {\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  color: #000;\n}\n.block.block--white .block__overlay {\n  color: #f8f8f8;\n}\n.block.block--green {\n  align-items: center;\n  justify-content: center;\n  background-color: #0ca734;\n  color: #333;\n}\n.block.block--green .block__title {\n  color: #fff;\n}\n.block.block--green .block__overlay {\n  color: #0ca734;\n}\n.block .block__title {\n  font-size: 4rem;\n  line-height: 4.2rem;\n  font-weight: 600;\n  margin-bottom: 3rem;\n}\n.block .block__subtitle {\n  font-size: 2.4rem;\n  line-height: 3rem;\n  font-weight: 500;\n  margin-bottom: 3rem;\n}\n.block .block__text {\n  position: relative;\n  font-size: 1rem;\n  line-height: 1.4rem;\n  font-weight: 500;\n  margin-bottom: 3rem;\n}\n.block .block__list {\n  position: relative;\n  font-size: 1rem;\n  line-height: 1.4rem;\n  font-weight: 500;\n  margin-bottom: 3rem;\n}\n.block .block__body {\n  position: relative;\n  z-index: 10;\n}\n.block .block__overlay {\n  position: absolute;\n  font-size: 60rem;\n  font-weight: 900;\n  z-index: 1;\n}\n.block .block__overlay.block__overlay--video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  border: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.block .block__overlay.block__overlay--video:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n}\n@media only screen and (min-width: 1600px) {\n  .block .block__text {\n    font-size: 1.5rem;\n  }\n  .block .block__list {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n}\n@media only screen and (min-width: 1220px) and (max-width: 1599px) {\n  .block {\n    padding: 60px 0;\n  }\n  .block .block__overlay {\n    font-size: 56rem;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .block {\n    min-height: 50vh;\n  }\n  .block .block__body {\n    padding-top: 50px;\n  }\n  .block .block__overlay {\n    font-size: 45rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .block {\n    min-height: 50vh;\n    padding: 60px 0;\n  }\n  .block.block--about {\n    padding-top: 100px;\n  }\n  .block .block__overlay {\n    font-size: 30rem;\n  }\n  .block .block__title {\n    font-size: 3rem;\n    line-height: 3.2rem;\n    margin-bottom: 2rem;\n  }\n  .block .block__subtitle {\n    font-size: 2rem;\n    line-height: 3rem;\n  }\n  .block .block__text {\n    font-weight: 600;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .block {\n    min-height: 50vh;\n    padding: 60px 0;\n  }\n  .block.block--about {\n    padding-top: 100px;\n  }\n  .block .block__overlay {\n    font-size: 16rem;\n  }\n  .block .block__title {\n    font-size: 1.5rem;\n    line-height: 2rem;\n    margin-bottom: 1rem;\n  }\n  .block .block__subtitle {\n    font-size: 1.2rem;\n    line-height: 1.5rem;\n  }\n  .block .block__text {\n    font-size: 0.8rem;\n    font-weight: 600;\n  }\n}\n"

/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/pages/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.less */ "./src/app/pages/main-page/main-page.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/products-page/products-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/products-page/products-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products container-fluid \">\r\n  <!-- Products backdrop -->\r\n  <div class=\"products__backdrop\">\r\n    <span class=\"col col--1\"></span>\r\n    <span class=\"col col--2\"></span>\r\n    <span class=\"col col--3\"></span>\r\n    <span class=\"col col--4\"></span>\r\n    <span class=\"col col--5\"></span>\r\n  </div>\r\n  <!-- Products content -->\r\n  <header class=\"block \">\r\n    <h1 class=\"products__title t--title position--r t--title m--t-xxlg t--c\">\r\n      <span class=\"products__title-text products__title-text--left position--a\">Pro</span>\r\n      <span class=\"products__title-text products__title-text--right position--a\">ducts</span>\r\n    </h1>\r\n  </header>\r\n  <main class=\"products__content container p--b-lg\">\r\n    <section class=\"products__content-text grid \">\r\n      <h2 class=\"t--h1 t--bold\">Coming to watch a broadcast or got a meeting in the building?</h2>\r\n      <h3 class=\"t--h4\">Below you’ll find all you need to organise your visit</h3>\r\n      <p class=\"m--v-lg\" >\r\n        The programmes Zapplive, Opsporing Verzocht and Radar are all made in M.\r\n        You can also watch broadcasts live from our public gallery.\r\n      </p>\r\n    </section>\r\n    <section class=\"products__content-logo grid grid--collapse m--v-lg\">\r\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\r\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\r\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\r\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\r\n    </section>\r\n    <section class=\"products__content-text grid \">\r\n      <h2 class=\"t--h1 t--bold\">Coming to watch a broadcast or got a meeting in the building?</h2>\r\n      <h3 class=\"t--h4 \">Below you’ll find all you need to organise your visit</h3>\r\n      <p class=\"m--v-lg\">\r\n        The programmes Zapplive, Opsporing Verzocht and Radar are all made in M.\r\n        You can also watch broadcasts live from our public gallery.\r\n      </p>\r\n    </section>\r\n    <section class=\"products__content-logo grid grid--collapse m--v-lg\">\r\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\r\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\r\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\r\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\r\n    </section>\r\n    <app-button-form></app-button-form>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/products-page/products-page.component.less":
/*!******************************************************************!*\
  !*** ./src/app/pages/products-page/products-page.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products {\n  background: #000;\n  color: #fff;\n}\n.products .products__backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  min-height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  height: 100%;\n}\n.products .products__backdrop .col {\n  padding-right: 0;\n  padding-left: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 1px;\n  background-color: hsla(0, 0%, 100%, 0.16);\n  z-index: 2;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.products .products__backdrop .col.col--1 {\n  left: 16.66666667%;\n}\n.products .products__backdrop .col.col--2 {\n  left: 33.33333333%;\n}\n.products .products__backdrop .col.col--3 {\n  left: 50%;\n}\n.products .products__backdrop .col.col--4 {\n  left: 66.66666667%;\n}\n.products .products__backdrop .col.col--5 {\n  left: 83.33333333%;\n}\n.products .products__title {\n  min-height: 300px;\n}\n.products .products__title-text--left {\n  -webkit-transform: translate(-100%, -10%);\n          transform: translate(-100%, -10%);\n}\n.products .products__title-text--right {\n  -webkit-transform: translate(0%, 50%);\n          transform: translate(0%, 50%);\n}\n.products .products__content {\n  max-width: 70.4%;\n}\n.products .products__content-text {\n  max-width: 75%;\n}\n"

/***/ }),

/***/ "./src/app/pages/products-page/products-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/products-page/products-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageComponent", function() { return ProductsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsPageComponent = /** @class */ (function () {
    function ProductsPageComponent() {
    }
    ProductsPageComponent.prototype.ngOnInit = function () {
    };
    ProductsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-page',
            template: __webpack_require__(/*! ./products-page.component.html */ "./src/app/pages/products-page/products-page.component.html"),
            styles: [__webpack_require__(/*! ./products-page.component.less */ "./src/app/pages/products-page/products-page.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsPageComponent);
    return ProductsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/services-page/services-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/services-page/services-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"services container-fluid t--white\">\r\n  <!-- Services backdrop -->\r\n  <div class=\"services__backdrop\">\r\n    <span class=\"col col--1\"></span>\r\n    <span class=\"col col--2\"></span>\r\n    <span class=\"col col--3\"></span>\r\n    <span class=\"col col--4\"></span>\r\n    <span class=\"col col--5\"></span>\r\n  </div>\r\n  <!-- Services content -->\r\n  <header class=\"services__title block \">\r\n    <h1 class=\"services__title-text position--r t--title m--t-xxlg t--c\">\r\n      <span class=\"services__title-text services__title-text--left position--a\">Serv</span>\r\n      <span class=\"services__title-text services__title-text--right position--a\">ices</span>\r\n    </h1>\r\n  </header>\r\n  <main class=\"services__content container p--b-lg \">\r\n    <section class=\"services__content-text block \">\r\n      <h2 class=\"t--h2 t--bold\">Looking for a state-of-the-art studio?</h2>\r\n      <h3 class=\"t--h4 \">We're more than happy to look into the possibilities with you</h3>\r\n      <p class=\"m--v-lg\" >\r\n        In M, you will be using only the very best facilities.\r\n        See the details for each studio below or download the pdf for a complete overview.\r\n      </p>\r\n    </section>\r\n    <section class=\"services__slider\">\r\n      <div class=\"grid grid--collapse\">\r\n        <div class=\"services__slider-title col col--1-4 t--h4\">Studio A</div>\r\n        <div class=\"services__slider-title col col--1-4 t--h4\">Studio B</div>\r\n        <div class=\"col col--1-4 t--h4\"></div>\r\n        <div class=\"col col--1-4 t--h4\"></div>\r\n      </div>\r\n      <div class=\"grid grid--collapse\">\r\n        <div class=\"services__slider-body col col--1-1 p--reset\">\r\n          <app-slider></app-slider>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid \">\r\n        <div class=\"services__slider-description col col--1-1\">\r\n          <p class=\"t--semi-bold\">Studio A</p>\r\n          <p class=\"m--v-lg\" >\r\n            Studio A is where the bigger, serial productions take place.\r\n            The studio is directly adjacent to the transit area,\r\n            so it’s easy to drive decors and technical materials right into the studio.\r\n            The lighting grid is fully equipped with hoists,\r\n            so the lighting can quickly and easily be adjusted.\r\n          </p>\r\n          <ol class=\"services__slider-list\">\r\n            <li class=\"services__slider-list-item t--bold m\">Direct access to transit area</li>\r\n            <li class=\"services__slider-list-item t--bold m\">Lighting grid fully equipped with hoists, so adjustable without work platforms or ladders</li>\r\n            <li class=\"services__slider-list-item t--bold m\">Sufficient hoists equipped with DMX, XLR, Speakon (NL2) and HD-SDI connections</li>\r\n          </ol>\r\n          <button class=\"services__slider-btn t--h5 t--bold  t--white m--v-lg p--sm\">\r\n            Download the overview\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <app-button-form></app-button-form>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/services-page/services-page.component.less":
/*!******************************************************************!*\
  !*** ./src/app/pages/services-page/services-page.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services {\n  background: #000;\n}\n.services .services__backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  min-height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  height: 100%;\n}\n.services .services__backdrop .col {\n  padding-right: 0;\n  padding-left: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 1px;\n  background-color: hsla(0, 0%, 100%, 0.16);\n  z-index: 2;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.services .services__backdrop .col.col--1 {\n  left: 16.66666667%;\n}\n.services .services__backdrop .col.col--2 {\n  left: 33.33333333%;\n}\n.services .services__backdrop .col.col--3 {\n  left: 50%;\n}\n.services .services__backdrop .col.col--4 {\n  left: 66.66666667%;\n}\n.services .services__backdrop .col.col--5 {\n  left: 83.33333333%;\n}\n.services .services__title {\n  min-height: 600px;\n  background: #000;\n  background-image: url(\"/assets/img/page-proj/project-title.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.services .services__title-text--left {\n  -webkit-transform: translate(-100%, -10%);\n          transform: translate(-100%, -10%);\n}\n.services .services__title-text--right {\n  -webkit-transform: translate(0%, 50%);\n          transform: translate(0%, 50%);\n}\n.services .services__content {\n  max-width: 70.4%;\n}\n.services .services__content-text {\n  left: -25%;\n  padding-left: 25%;\n  -webkit-transform: translateY(-180px);\n          transform: translateY(-180px);\n  background: #000;\n}\n.services .services__slider-title {\n  border-top: 1px solid hsla(0, 0%, 100%, 0.16);\n}\n.services .services__slider-body {\n  left: -25%;\n}\n.services .services__slider-list-item:before {\n  content: \"\";\n  position: absolute;\n  left: 1px;\n  width: 1%;\n  height: 0.5%;\n  background: #fff;\n}\n.services .services__slider-btn {\n  border: 2px solid #fff;\n}\n"

/***/ }),

/***/ "./src/app/pages/services-page/services-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/services-page/services-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ServicesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageComponent", function() { return ServicesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesPageComponent = /** @class */ (function () {
    function ServicesPageComponent() {
    }
    ServicesPageComponent.prototype.ngOnInit = function () {
    };
    ServicesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services-page',
            template: __webpack_require__(/*! ./services-page.component.html */ "./src/app/pages/services-page/services-page.component.html"),
            styles: [__webpack_require__(/*! ./services-page.component.less */ "./src/app/pages/services-page/services-page.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesPageComponent);
    return ServicesPageComponent;
}());



/***/ }),

/***/ "./src/app/routing.ts":
/*!****************************!*\
  !*** ./src/app/routing.ts ***!
  \****************************/
/*! exports provided: route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_development_page_development_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/development-page/development-page.component */ "./src/app/pages/development-page/development-page.component.ts");
/* harmony import */ var _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/products-page/products-page.component */ "./src/app/pages/products-page/products-page.component.ts");
/* harmony import */ var _pages_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/services-page/services-page.component */ "./src/app/pages/services-page/services-page.component.ts");
/* harmony import */ var _pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact-us-page/contact-us-page.component */ "./src/app/pages/contact-us-page/contact-us-page.component.ts");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "./src/app/pages/main-page/main-page.component.ts");






var routes = [
    // { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'development', component: _pages_development_page_development_page_component__WEBPACK_IMPORTED_MODULE_1__["DevelopmentPageComponent"] },
    { path: 'products', component: _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_2__["ProductsPageComponent"] },
    { path: 'services', component: _pages_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_3__["ServicesPageComponent"] },
    { path: 'contact', component: _pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsPageComponent"] },
    { path: '', component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"] },
];
var route = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/ui/button-form/button-form.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ui/button-form/button-form.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <section class=\"page-form t--c\" [ngClass]=\"{'open': isShownForm}\">\r\n    <button\r\n      (click)=\"shownForm()\"\r\n      class=\"page-form__button position--r t--white t--h1 t--bold t--c m--v-lg p--lg\"\r\n      role=\"button\"\r\n      aria-label=\"Contact-Button\">\r\n      Contact us\r\n      <span class=\"page-form__button-line page-form__button-line--left position--a\"></span>\r\n      <span class=\"page-form__button-line page-form__button-line--right position--a\"></span>\r\n    </button>\r\n    <div class=\"page-form__body p--md\">\r\n      <app-form></app-form>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/ui/button-form/button-form.component.less":
/*!***********************************************************!*\
  !*** ./src/app/ui/button-form/button-form.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-form__button-line {\n  display: block;\n  width: 20px;\n  height: 2px;\n  background-color: #fff;\n  transition: all 0.4s;\n}\n.page-form__button-line--left {\n  bottom: 5%;\n  left: 45%;\n  -webkit-transform: rotate(25deg);\n          transform: rotate(25deg);\n}\n.page-form__button-line--right {\n  bottom: 5%;\n  left: 50%;\n  -webkit-transform: rotate(-25deg);\n          transform: rotate(-25deg);\n}\n.page-form .page-form__body {\n  display: none;\n  height: 0;\n}\n.page-form.open .page-form__body {\n  display: block;\n  background: #fff;\n  height: auto;\n  padding: 120px 0 60px;\n  transition: height 10s;\n}\n.page-form.open .page-form__button-line--left {\n  -webkit-transform: rotate(-25deg);\n          transform: rotate(-25deg);\n}\n.page-form.open .page-form__button-line--right {\n  -webkit-transform: rotate(25deg);\n          transform: rotate(25deg);\n}\n"

/***/ }),

/***/ "./src/app/ui/button-form/button-form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui/button-form/button-form.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonFormComponent", function() { return ButtonFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonFormComponent = /** @class */ (function () {
    function ButtonFormComponent() {
        this.isShownForm = false;
    }
    ButtonFormComponent.prototype.ngOnInit = function () {
    };
    ButtonFormComponent.prototype.shownForm = function () {
        if (this.isShownForm) {
            this.isShownForm = false;
        }
        else {
            this.isShownForm = true;
        }
    };
    ButtonFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button-form',
            template: __webpack_require__(/*! ./button-form.component.html */ "./src/app/ui/button-form/button-form.component.html"),
            styles: [__webpack_require__(/*! ./button-form.component.less */ "./src/app/ui/button-form/button-form.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonFormComponent);
    return ButtonFormComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"footer__container container\">\r\n    <div class=\"grid grid--collapse m--v-md\">\r\n      <!-- <div class=\"footer__contact-statment col--md-1-4 col--sm-1-2 col--xs-1-1\">\r\n\r\n          <a\r\n            class=\"footer__contact-statment-link link t--uppercase t--bold t--gray \"\r\n            href=\"\"\r\n            >Privacy statement</a\r\n          >\r\n\r\n          <a\r\n            class=\"footer__contact-statment-link link t--uppercase t--bold t--gray \"\r\n            href=\"\"\r\n            >Cookie statement</a\r\n          >\r\n\r\n      </div> -->\r\n      <ul class=\"footer__nav footer__nav-left col--1-4\">\r\n        <li>\r\n          <a\r\n            class=\"footer__nav-link link m--sm t--h4 t--bold t--black\"\r\n            [routerLink]=\"['/']\"\r\n            >Home</a\r\n          >\r\n        </li>\r\n        <!-- <li>\r\n          <a\r\n            class=\"footer__nav-link link m--sm t--h4 t--bold t--black\"\r\n            [routerLink]=\"['/services']\"\r\n            >Services</a\r\n          >\r\n        </li> -->\r\n        <!-- <li>\r\n          <a\r\n            class=\"footer__nav-link link m--sm t--h4 t--bold t--black\"\r\n            [routerLink]=\"['/products']\"\r\n            >Products</a\r\n          >\r\n        </li> -->\r\n      </ul>\r\n      <ul class=\"footer__nav footer__nav-right col--1-4\">\r\n        <!-- <li>\r\n          <a\r\n            class=\"footer__nav-link link m--sm t--h4 t--bold t--black\"\r\n            [routerLink]=\"['/about']\"\r\n            >About</a\r\n          >\r\n        </li> -->\r\n        <!-- <li>\r\n          <a\r\n            class=\"footer__nav-link link m--sm t--h4 t--bold t--black\"\r\n            [routerLink]=\"['/careers']\"\r\n            >Careers</a\r\n          >\r\n        </li> -->\r\n        <!-- <li>\r\n          <a\r\n            class=\"footer__nav-link link m--sm t--h4 t--bold t--black\"\r\n            [routerLink]=\"['/testimonials']\"\r\n            >Testimonials</a\r\n          >\r\n        </li> -->\r\n        <li>\r\n          <a\r\n            class=\"footer__nav-link link m--sm t--h4 t--bold t--black\"\r\n            [routerLink]=\"['/contact']\"\r\n            >Contact Us</a\r\n          >\r\n        </li>\r\n      </ul>\r\n      <div class=\"footer__contact flex flex--column flex--top col--md-1-4 col--sm-1-2 col--xs-1-1\">\r\n        <a [routerLink]=\"[ '/' ]\" class=\"footer__contact-logo\">\r\n            <p>SOLID Expert</p>\r\n            <p></p>\r\n        </a>\r\n        <ul class=\"footer__contact-location t--c\">\r\n          <li class=\"\">Nemiga 3 , Minsk</li>\r\n          <li>+1 ( 919 ) 323 36 12</li>\r\n          <li>info@solidexpert.pro</li>\r\n        </ul>\r\n        <div class=\"footer__contact-social\">\r\n          <a\r\n            class=\"footer__contact-social-link link  t--bold t--gray\"\r\n            href=\"https://www.linkedin.com/company/solidexpertltd\"\r\n            target=\"_blanc\"\r\n          >\r\n            <img src=\"/assets/img/icons/linkedin.svg\" alt=\"Linkedin\" />\r\n          </a>\r\n          <a\r\n            class=\"footer__contact-social-link link  t--bold t--gray\"\r\n            href=\"https://www.facebook.com/solidexpert.ltd/\"\r\n            target=\"_blanc\"\r\n          >\r\n            <img src=\"/assets/img/icons/facebook.svg\" alt=\"Facebook\" />\r\n          </a>\r\n          <a\r\n            class=\"footer__contact-social-link link  t--bold t--gray\"\r\n            href=\"mailto:info@solidexpert.pro\"\r\n          >\r\n            <img src=\"/assets/img/icons/email.svg\" alt=\"Send email\" />\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.less":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  color: #000;\n  background: #fff;\n}\n.footer__container {\n  max-width: 70%;\n}\n.footer .footer__contact-logo {\n  position: relative;\n  text-align: right;\n  text-decoration: none;\n  outline: none;\n  box-shadow: none;\n}\n.footer .footer__contact-logo:hover {\n  outline: none;\n  box-shadow: none;\n  text-decoration: none;\n}\n.footer .footer__contact-logo:after {\n  content: \"\";\n  position: absolute;\n  right: -30px;\n  top: 0;\n  width: 30px;\n  height: 32px;\n  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzA2IDMwNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzA2IDMwNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJjaGV2cm9uLXJpZ2h0Ij4KCQk8cG9seWdvbiBwb2ludHM9Ijk0LjM1LDAgNTguNjUsMzUuNyAxNzUuOTUsMTUzIDU4LjY1LDI3MC4zIDk0LjM1LDMwNiAyNDcuMzUsMTUzICAgIiBmaWxsPSIjMGZiMjM5Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);\n  background-position: center;\n  background-size: 40px;\n  background-repeat: no-repeat;\n}\n.footer .footer__contact-logo p {\n  font-size: 1.3rem;\n  font-weight: 800;\n  font-style: italic;\n  margin: 0;\n  line-height: 1.1rem;\n  letter-spacing: 0.2px;\n  text-transform: none;\n  color: #000;\n}\n.footer .footer__nav-link:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0;\n  background-color: #00b715;\n  transition: all 0.5s;\n  height: 3px;\n}\n.footer .footer__nav-link:hover:after {\n  width: 80%;\n}\n.footer .footer__contact {\n  align-items: center;\n}\n.footer .footer__contact-social {\n  margin: 3rem 0;\n}\n.footer .footer__contact-social-link {\n  width: 1.8rem;\n}\n.footer .footer__contact-statment-link {\n  transition: all 0.5s;\n  margin: 10px;\n}\n.footer .footer__contact-statment-link:hover::first-letter {\n  color: #00b715;\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .footer .footer__nav {\n    display: none;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .footer .footer__nav {\n    display: none;\n  }\n  .footer .footer__contact {\n    padding-left: 0;\n    align-items: center;\n  }\n  .footer .footer__contact-statment {\n    text-align: center;\n  }\n  .footer .footer__contact-statment-link {\n    display: inline-block;\n    margin: 10px;\n  }\n  .footer .footer__contact-social {\n    margin: 1rem 0;\n  }\n  .footer .footer__contact-social-link {\n    width: 1.5rem;\n  }\n  .footer .footer__contact-statment-link {\n    font-size: 0.6rem;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .footer .footer__nav {\n    display: none;\n  }\n  .footer .footer__contact {\n    padding-left: 0;\n    align-items: center;\n  }\n  .footer .footer__contact-location {\n    font-size: 0.6rem;\n  }\n  .footer .footer__contact-statment {\n    text-align: center;\n    width: 100%;\n  }\n  .footer .footer__contact-social {\n    margin: 1rem 0;\n  }\n  .footer .footer__contact-social-link {\n    width: 1rem;\n  }\n  .footer .footer__contact-statment-link {\n    font-size: 0.5rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/ui/footer/footer.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/form/form.component.html":
/*!*********************************************!*\
  !*** ./src/app/ui/form/form.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"form t--c\">\r\n  <div class=\"grid\">\r\n    <div class=\"col--md-1-2 col--sm-1-1 col--xs-1-1\">\r\n      <input class=\"form__input\"\r\n        name=\"yourName\"\r\n        type=\"text\"\r\n        [(ngModel)]=\"yourName\"\r\n        placeholder=\"Your name\"\r\n      />\r\n\r\n      <input class=\"form__input\"\r\n        name=\"contactInfo_Phone_1\"\r\n        [(ngModel)]=\"contactInfo_Phone_1\"\r\n        type=\"tel\"\r\n        placeholder=\"Telephone number\"\r\n      />\r\n\r\n      <input class=\"form__input\"\r\n        name=\"contactInfo_Email_1\"\r\n        [(ngModel)]=\"contactInfo_Email_1\"\r\n        type=\"email\"\r\n        placeholder=\"E-mail address\"\r\n      />\r\n\r\n    </div>\r\n    <div class=\"col--md-1-2 col--sm-1-1 col--xs-1-1\">\r\n      <textarea class=\"form__input form__input-message\"\r\n        name=\"message\"\r\n        id=\"message\"\r\n        cols=\"\"\r\n        rows=\"\"\r\n        placeholder=\"Your message\"\r\n      ></textarea>\r\n    </div>\r\n  </div>\r\n\r\n  <button\r\n    (click)=\"click()\"\r\n    class=\"form__button position--r t--h3 t-xs--h3 t--bold t--c m--v-lg m-xs--sm\"\r\n    role=\"button\"\r\n    aria-label=\"Send-Button\"\r\n  >\r\n    Send\r\n  </button>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/ui/form/form.component.less":
/*!*********************************************!*\
  !*** ./src/app/ui/form/form.component.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form .form__button:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0;\n  background-color: #00b715;\n  transition: all 0.5s;\n  height: 3px;\n}\n.form .form__button:hover:after {\n  width: 80%;\n}\n.form__input {\n  outline: none;\n  border: none;\n  font-size: 1.5em;\n  min-height: 3.5em;\n  width: 100%;\n  border-bottom: 1px solid #000;\n}\n.form__input::-webkit-input-placeholder {\n  color: #808080;\n  font-size: 1.2em;\n  font-weight: 600;\n}\n.form__input:-ms-input-placeholder {\n  color: #808080;\n  font-size: 1.2em;\n  font-weight: 600;\n}\n.form__input::-ms-input-placeholder {\n  color: #808080;\n  font-size: 1.2em;\n  font-weight: 600;\n}\n.form__input::placeholder {\n  color: #808080;\n  font-size: 1.2em;\n  font-weight: 600;\n}\n.form__input:focus {\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #00b715;\n}\n.form__input-message {\n  height: 100%;\n  width: 100%;\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .form__input {\n    font-size: 1rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .form__input {\n    font-size: 1rem;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .form__input {\n    font-size: 0.8rem;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .form__input {\n    font-size: 0.8rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/ui/form/form.component.ts":
/*!*******************************************!*\
  !*** ./src/app/ui/form/form.component.ts ***!
  \*******************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(http) {
        this.http = http;
        this.yourName = '';
        this.contactInfo_Phone_1 = '';
        this.contactInfo_Email_1 = '';
        this.message = '';
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.click = function () {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            //  .set('is_company',"false")
            .set('firstName', this.yourName)
            .set('contactInfo_Phone_1', this.contactInfo_Phone_1)
            .set('contactInfo_Email_1', this.contactInfo_Email_1)
            .set('message', this.message)
            .set('return_url', 'http://solidexpert.ltd')
            .set('web_form_key', '3a51d614-03b1-43b9-bca2-a3ff717ca08e')
            .set('notify_list', '61560477-f93c-11e8-94e2-6e81647443e7')
            .set('managers_list', '61560477-f93c-11e8-94e2-6e81647443e7,53a72559-aa04-4ae5-89e2-898cb8fc8f23')
            .set('share_type', '0');
        return this.http.post('http://office.solidexpert.ltd/products/crm/httphandlers/webtoleadfromhandler.ashx', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        }).subscribe(function (x) { });
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/ui/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.less */ "./src/app/ui/form/form.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/ui/grid-line/grid-line.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/grid-line/grid-line.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-line\">\r\n  <div [style.border-color]=\"color\" class=\"grid-line__stroke\" *ngFor=\"let item of ' '.repeat(count).split(''),\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui/grid-line/grid-line.component.less":
/*!*******************************************************!*\
  !*** ./src/app/ui/grid-line/grid-line.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-line {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 3;\n}\n.grid-line .grid-line__stroke {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.grid-line .grid-line__stroke + .grid-line__stroke {\n  border-left: 1px solid;\n}\n"

/***/ }),

/***/ "./src/app/ui/grid-line/grid-line.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/grid-line/grid-line.component.ts ***!
  \*****************************************************/
/*! exports provided: GridLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLineComponent", function() { return GridLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridLineComponent = /** @class */ (function () {
    function GridLineComponent() {
        this.count = 6;
        this.color = 'rgba(0, 0, 0, .1)';
    }
    GridLineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridLineComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GridLineComponent.prototype, "color", void 0);
    GridLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-line',
            template: __webpack_require__(/*! ./grid-line.component.html */ "./src/app/ui/grid-line/grid-line.component.html"),
            styles: [__webpack_require__(/*! ./grid-line.component.less */ "./src/app/ui/grid-line/grid-line.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], GridLineComponent);
    return GridLineComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header .header__burger {\r\n  position: fixed;\r\n  display: inline-block;\r\n  top: 40px;\r\n  left: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-left: -20px;\r\n  padding: 14px 0;\r\n  z-index: 4;\r\n}\r\n.header .header__burger-line {\r\n  display: block;\r\n  width: 40px;\r\n  height: 2px;\r\n  background-color: #fff;\r\n  transition: all .4s;\r\n}\r\n.header .header__burger-line + .header__burger-line {\r\n  margin-top: 8px;\r\n}\r\n.header .header__body {\r\n  display: none;\r\n  height: 0;\r\n}\r\n.header .header__list {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.header .header__link {\r\n  font-size: 3em;\r\n  line-height: 3rem;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-stretch: normal;\r\n  letter-spacing: 0;\r\n  color: #000;\r\n  position: relative;\r\n  display: block;\r\n  text-decoration: none;\r\n  padding: 10px 0;\r\n}\r\n.header .header__link:after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: 0px;\r\n  left: 0;\r\n  width: 0;\r\n  background-color: #f44336;\r\n  transition: all .5s;\r\n  height: 5px;\r\n}\r\n.header .header__link:hover:after {\r\n  width: 100px;\r\n}\r\n.header.open .header__body {\r\n  background: #fff;\r\n}\r\n.header.open .header__burger-line {\r\n  background-color: #000;\r\n}\r\n.header.open .header__burger-line:nth-child(1) {\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n}\r\n.header.open .header__burger-line:nth-child(2) {\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n.header.open .header__burger-line + .header__burger-line {\r\n  margin-top: -1px;\r\n}\r\n.header.open .header__body {\r\n  display: block;\r\n  position: fixed;\r\n  min-width: 100%;\r\n  z-index: 3;\r\n  height: auto;\r\n  padding: 120px 0 60px;\r\n  transition: height 10s;\r\n}\r\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header \" [ngClass]=\"{'open': isShowMenu}\">\r\n    <button role=\"button\" aria-label=\"Menu Button\" class=\"header__burger\" (click)=\"showMenu()\">\r\n      <span class=\"header__burger-line header__burger-line--upper\"></span>\r\n      <span class=\"header__burger-line header__burger-line--lower\"></span>\r\n    </button>\r\n    <div class=\"container header__body  \">\r\n        <div class=\"grid\">\r\n            <div class=\"col--1-5 push--1-5\">\r\n                <ul class=\"header__list\">\r\n                    <li class=\"header__item\">\r\n                        <a [routerLink]=\"['/']\" class=\"header__link\">Home</a>\r\n                    </li>\r\n                    <li class=\"header__item\">\r\n                         <a [routerLink]=\"['/development']\" class=\"header__link\">Development</a>\r\n                    </li>\r\n                    <li class=\"header__item\">\r\n                        <a [routerLink]=\"['/products']\" class=\"header__link\">Products</a>\r\n                    </li>\r\n                    <li class=\"header__item\">\r\n                        <a [routerLink]=\"['/services']\" class=\"header__link\">Services</a>\r\n                    </li>\r\n                    <li class=\"header__item\">\r\n                        <a [routerLink]=\"['/contact']\" class=\"header__link\">Contact Us</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col--2-5 push--2-5\">\r\n              <app-form></app-form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        var _this = this;
        this.router = router;
        this.isShowMenu = false;
        this.router.events.subscribe(function (x) {
            _this.isShowMenu = false;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.showMenu = function () {
        if (this.isShowMenu) {
            this.isShowMenu = false;
        }
        else {
            this.isShowMenu = true;
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/ui/header/header.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/nav/nav.component.html":
/*!*******************************************!*\
  !*** ./src/app/ui/nav/nav.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\"[ngClass]=\"{'open': isShowMenu}\">\r\n\t<a href=\"\" class=\"nav__logo\">\r\n\t\t<p>SOLID</p>\r\n\t\t<p>Expert</p>\r\n  </a>\r\n\r\n  <button role=\"button\" aria-label=\"Menu Button\" class=\"nav__burger\" (click)=\"showMenu()\">\r\n    <span class=\"nav__burger-line nav__burger-line--upper\"></span>\r\n    <span class=\"nav__burger-line nav__burger-line--lower\"></span>\r\n  </button>\r\n\r\n  <ul class=\"nav__menu nav__menu-links\">\r\n\r\n    <!-- <li class=\"nav__item\">\r\n        <a [routerLink]=\"[ '/about' ]\" routerLinkActive=\"active\" class=\"nav__link\">About</a>\r\n    </li>\r\n\t\t<li class=\"nav__item\">\r\n\t\t\t<a [routerLink]=\"['/services']\" routerLinkActive=\"active\" class=\"nav__link\">Services</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav__item\">\r\n\t\t\t<a [routerLink]=\"['/products']\" routerLinkActive=\"active\" class=\"nav__link\">Products</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav__item\">\r\n\t\t\t<a [routerLink]=\"['/careers']\" routerLinkActive=\"active\" class=\"nav__link\">Careers</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav__item\">\r\n\t\t\t<a [routerLink]=\"['/testimonials']\" routerLinkActive=\"active\" class=\"nav__link\">Testimonials</a>\r\n\t\t</li> -->\r\n\t\t<li class=\"nav__item\">\r\n\t\t\t<a [routerLink]=\"['/contact']\" routerLinkActive=\"active\" class=\"nav__link\">Contact Us</a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class=\"nav__menu nav__menu-request\">\r\n\t\t<li class=\"nav__item\">\r\n\t\t\t<a [routerLink]=\"[ '/contact' ]\" routerLinkActive=\"active\" class=\"nav__link \">Send Request</a>\r\n\t\t</li>\r\n\t</ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/ui/nav/nav.component.less":
/*!*******************************************!*\
  !*** ./src/app/ui/nav/nav.component.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  width: 100%;\n  background-color: #000;\n  color: #fff;\n  padding: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  font-size: 0.8125rem;\n  transition: top 0.2s ease-in-out;\n}\n.nav .nav__burger {\n  position: fixed;\n  display: none;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  padding: 14px 0;\n  z-index: 4;\n}\n.nav .nav__burger-line {\n  display: block;\n  width: 40px;\n  height: 2px;\n  background-color: #fff;\n  transition: all 0.4s;\n}\n.nav .nav__burger-line + .nav__burger-line {\n  margin-top: 8px;\n}\n.nav .nav__logo {\n  position: relative;\n  text-align: right;\n  text-decoration: none;\n  outline: none;\n  box-shadow: none;\n}\n.nav .nav__logo:hover {\n  outline: none;\n  box-shadow: none;\n  text-decoration: none;\n}\n.nav .nav__logo:after {\n  content: \"\";\n  position: absolute;\n  right: -30px;\n  top: 0;\n  width: 30px;\n  height: 30px;\n  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzA2IDMwNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzA2IDMwNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJjaGV2cm9uLXJpZ2h0Ij4KCQk8cG9seWdvbiBwb2ludHM9Ijk0LjM1LDAgNTguNjUsMzUuNyAxNzUuOTUsMTUzIDU4LjY1LDI3MC4zIDk0LjM1LDMwNiAyNDcuMzUsMTUzICAgIiBmaWxsPSIjMGZiMjM5Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);\n  background-position: center;\n  background-size: 40px;\n  background-repeat: no-repeat;\n}\n.nav .nav__logo p {\n  font-size: 1.3rem;\n  font-weight: 800;\n  font-style: italic;\n  margin: 0;\n  line-height: 1.1rem;\n  letter-spacing: 0.2px;\n  text-transform: none;\n  color: #fff;\n}\n.nav .nav__menu {\n  display: flex;\n  align-items: center;\n}\n.nav .nav__item {\n  padding: 0 20px;\n}\n.nav .nav__link {\n  display: block;\n  position: relative;\n  padding: 10px 0;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  -webkit-text-decoration: nonte;\n          text-decoration: nonte;\n  box-shadow: none;\n  outline: none;\n  font-size: 0.85rem;\n}\n.nav .nav__link:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 0;\n  bottom: 8px;\n  height: 2px;\n  background: #fff;\n  transition: width 0.3s ease-in-out;\n}\n.nav .nav__link:hover {\n  text-decoration: none;\n  outline: none;\n  box-shadow: none;\n}\n.nav .nav__link:hover:after {\n  width: 100%;\n}\n.nav .nav__link.active {\n  color: #00b715;\n}\n.nav .nav__link.active:after {\n  background-color: #00b715;\n}\n.nav.open {\n  min-height: 100vh;\n  align-items: flex-start;\n}\n.nav.open .nav__menu {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.nav.open .nav__burger {\n  top: 8px;\n}\n.nav.open .nav__burger-line:nth-child(1) {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.nav.open .nav__burger-line:nth-child(2) {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.nav.open .nav__burger-line + .header__burger-line {\n  margin-top: -1px;\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .nav .nav__menu-links {\n    display: none;\n  }\n  .nav .nav__burger {\n    display: inline-block;\n  }\n  .nav.open .nav__link {\n    font-size: 4.5rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .nav .nav__menu-links {\n    display: none;\n  }\n  .nav .nav__burger {\n    display: inline-block;\n  }\n  .nav.open .nav__link {\n    font-size: 3.5rem;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .nav .nav__menu-links {\n    display: none;\n  }\n  .nav .nav__burger {\n    display: inline-block;\n  }\n  .nav.open .nav__link {\n    font-size: 2.5rem;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .nav .nav__menu-links {\n    display: none;\n  }\n  .nav .nav__burger {\n    display: inline-block;\n  }\n  .nav.open .nav__link {\n    font-size: 2rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/ui/nav/nav.component.ts":
/*!*****************************************!*\
  !*** ./src/app/ui/nav/nav.component.ts ***!
  \*****************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(router) {
        var _this = this;
        this.router = router;
        this.isShowMenu = false;
        this.router.events.subscribe(function (x) {
            _this.isShowMenu = false;
        });
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.showMenu = function () {
        if (this.isShowMenu) {
            this.isShowMenu = false;
        }
        else {
            this.isShowMenu = true;
        }
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/ui/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.less */ "./src/app/ui/nav/nav.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/ui/slider/slider.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/slider/slider.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<carousel>\r\n  <slide *ngFor=\"let slide of slides\">\r\n    <h1 class=\"p--h-lg\">{{slide.company}}</h1>\r\n\r\n    <p class=\"p--h-xlg m--v-lg\">\r\n      <span class=\"t--green \"> \"</span>\r\n      {{slide.mention}}\r\n      <span class=\"t--green\"> \"</span>\r\n    </p>\r\n\r\n    <p class=\"t--bold p--h-xlg\">{{slide.name}}</p>\r\n\r\n    <p class=\"p--h-xlg\">{{slide.position}}</p>\r\n\r\n    <!-- <div class=\"carousel-caption\"> </div> -->\r\n  </slide>\r\n</carousel>"

/***/ }),

/***/ "./src/app/ui/slider/slider.component.less":
/*!*************************************************!*\
  !*** ./src/app/ui/slider/slider.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/slider/slider.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/slider/slider.component.ts ***!
  \***********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.slides = [
            {
                mention: "It is a long established fact that a reader will be distracted by the readable content\n      of a page when looking at its layout. The point of using Lorem Ipsum is that it has a\n      more-or-less normal distribution of letters, as opposed to using 'Content here, content here',\n      making it look like readable English. Many desktop publishing packages and web page editors now\n      use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web\n      sites still in their infancy. Various versions have evolved over the years, sometimes by accident,\n      sometimes on purpose (injected humour and the like).",
                name: 'Joe Spencer',
                position: 'director',
                company: 'fotoBel'
            },
            {
                mention: " It is a long established fact that a reader will be distracted by the readable content\n      of a page when looking at its layout. The point of using Lorem Ipsum is that it has a\n      more-or-less normal distribution of letters, as opposed to using 'Content here, content here',\n      making it look like readable English. ",
                name: 'Marvin Gutierrez',
                position: ' manager',
                company: 'SolidCRM'
            },
            {
                mention: " Many desktop publishing packages and web page editors now\n      use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web\n      sites still in their infancy. Various versions have evolved over the years, sometimes by accident,\n      sometimes on purpose (injected humour and the like).\n      It is a long established fact that a reader will be distracted by the readable content\n      of a page when looking at its layout. The point of using Lorem Ipsum is that it has a\n      more-or-less normal distribution of letters, as opposed to using 'Content here, content here',\n      making it look like readable English. ",
                name: 'Fernando Sullivan',
                position: 'chief ',
                company: 'Salesinteract'
            }
        ];
    }
    SliderComponent.prototype.ngOnInit = function () { };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/ui/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.less */ "./src/app/ui/slider/slider.component.less")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\solidexpert\solid\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map