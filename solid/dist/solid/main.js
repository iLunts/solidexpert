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

module.exports = "<app-header ></app-header>\r\n<!-- <app-header [ngClass]=\"{'open': isShowMenu}\"></app-header> -->\r\n<router-outlet></router-outlet>\r\n<!-- <router-outlet [ngClass]=\"{'open': isShowMenu}\"></router-outlet> -->\r\n<app-footer></app-footer>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        })
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
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _routing__WEBPACK_IMPORTED_MODULE_17__["route"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]
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

module.exports = "<div class=\"contact container-fluid \">\n  <!-- Contact backdrop -->\n  <div class=\"contact__backdrop\">\n    <span class=\"col col--1\"></span> <span class=\"col col--2\"></span>\n    <span class=\"col col--3\"></span> <span class=\"col col--4\"></span>\n    <span class=\"col col--5\"></span>\n  </div>\n  <!-- Contact content -->\n\n  <header class=\"contact__title block \">\n    <h1 class=\"contact__title-text position--r position--r t--title m--t-xxlg t--c\">\n      <span class=\"contact__title-text contact__title-text--left position--a\">Contact</span>\n      <span class=\"contact__title-text contact__title-text--right position--a\">Us</span>\n    </h1>\n  </header>\n  <main class=\"contact__content container p--b-lg \">\n    <section class=\"contact__content-intro grid grid--collapse\">\n      <div class=\"col col--1-2\">\n        <h2 class=\"t--h1 t--bold\">\n          M is a melting pot of people, companies and services with media in\n          their DNA.\n        </h2>\n        <h3 class=\"t--h4\">‘Media-minded’, as we call it.</h3>\n        <p class=\"m--v-lg\">\n          Together, we are the beating heart of the new media world. In the\n          media building, directors, editors, engineers, designers, producers\n          and writers collaborate on very special stories. Stories that we\n          facilitate with state-of-the-art studios, office spaces, restaurants\n          and workplaces. By thinking with our colleagues, tenants and visitors,\n          we’re able to deliver tailored solutions and together develop new,\n          inspiring ways to make media. And we would love to have the chance to\n          do that with you, too.\n        </p>\n      </div>\n      <div class=\"col col--1-2\">intro video</div>\n    </section>\n    <section class=\"contact__content-story grid grid--collapse\">\n      <div class=\"col col--1-2\">\n        <img\n          class=\"contact__content-story-img\"\n          src=\"/assets/img/page-contact/contact.jpg\"\n          alt=\"\"\n        />\n      </div>\n      <div class=\"col col--1-2\">\n        <h2 class=\"t--h1 t--bold\">How it began</h2>\n        <h3 class=\"t--h4\">\n          M is an initiative of the AKN Foundation (the broadcasters AVRO, KRO &\n          NCRV)\n        </h3>\n        <p class=\"m--v-lg\">\n          The foundation, which has been based in this distinctive building\n          since 2000, aims to bring media makers from a variety of backgrounds\n          together in an innovative environment, to stimulate new collaborations\n          and fresh and forms of media: the idea for the homebase of the\n          media-minded was born. And in June 2018, M officially opened its\n          doors.\n        </p>\n      </div>\n    </section>\n    <section class=\"contact__content-logo grid grid--collapse\">\n      <div class=\"col col--1-2\">\n        <h2 class=\"t--h1 t--bold\">The letter M</h2>\n        <h3 class=\"t--h4\">A dynamic shape</h3>\n        <p class=\"m--v-lg\">\n          The brand name, M, was inspired by the design of the building itself\n          (there is a large M-shaped sound wave on the roof), its history and\n          the unifying factor: media. In one powerful letter, the media building\n          tells its story.\n        </p>\n      </div>\n      <div class=\"col col--1-2\">logo <img src=\"\" alt=\"\" /></div>\n    </section>\n    <section class=\"contact__content-details grid grid--collapse\">\n      <div\n        class=\"contact__content-details-item col col--1-4 flex flex--column flex--right flex--bottom\">\n        <h3 class=\"t--h4\">Global questions</h3>\n        <p class=\"\">tel: 035 671 4550</p>\n      </div>\n      <div\n        class=\"contact__content-details-item col col--1-4 flex flex--column flex--left flex--bottom\">\n        <h3 class=\"t--h4\">Global questions</h3>\n        <p class=\"\">tel: 035 671 4550</p>\n      </div>\n      <div\n        class=\"contact__content-details-item col col--1-4 flex flex--column flex--right flex--bottom\">\n        <h3 class=\"t--h4\">Global questions</h3>\n        <p class=\"\">tel: 035 671 4550</p>\n      </div>\n      <div\n        class=\"contact__content-details-item col col--1-4 flex flex--column flex--left flex--bottom\">\n        <h3 class=\"t--h4\">Global questions</h3>\n        <p class=\"\">tel: 035 671 4550</p>\n      </div>\n    </section>\n    <app-button-form></app-button-form>\n  </main>\n  <a class=\"contact__team block  d--b h--400 \">\n    <div class=\"contact__team-backdrop position--a\"></div>\n    <div class=\"contact__team-inner position--a\">\n      <h2 class=\"t--h1 t--bold\">Who's based here?</h2>\n      <p class=\"t--h5 t--uppercase link link--line\">View all residents</p>\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/contact-us-page/contact-us-page.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/pages/contact-us-page/contact-us-page.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n  background: #000;\n  color: #fff;\n}\n.contact .contact__backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  min-height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  height: 100%;\n}\n.contact .contact__backdrop .col {\n  padding-right: 0;\n  padding-left: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 1px;\n  background-color: hsla(0, 0%, 100%, 0.16);\n  z-index: 2;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.contact .contact__backdrop .col.col--1 {\n  left: 16.66666667%;\n}\n.contact .contact__backdrop .col.col--2 {\n  left: 33.33333333%;\n}\n.contact .contact__backdrop .col.col--3 {\n  left: 50%;\n}\n.contact .contact__backdrop .col.col--4 {\n  left: 66.66666667%;\n}\n.contact .contact__backdrop .col.col--5 {\n  left: 83.33333333%;\n}\n.contact .contact__title {\n  min-height: 400px;\n}\n.contact .contact__title-text--left {\n  -webkit-transform: translate(-100%, -10%);\n          transform: translate(-100%, -10%);\n}\n.contact .contact__title-text--right {\n  -webkit-transform: translate(0%, 50%);\n          transform: translate(0%, 50%);\n}\n.contact .contact__content {\n  max-width: 70.4%;\n}\n.contact .contact__content-story-img {\n  width: 100%;\n}\n.contact .contact__content-details {\n  min-height: 200px;\n}\n.contact .contact__team {\n  overflow: hidden;\n}\n.contact .contact__team-backdrop {\n  width: 100%;\n  height: 100%;\n  background: url(\"/assets/img/page-dev/dev-link.jpg\") no-repeat;\n  background-size: 100%;\n  background-position: cover;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 0.45;\n  transition: all 3s;\n}\n.contact .contact__team-backdrop:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  opacity: 0.9;\n}\n.contact .contact__team-inner {\n  top: 5%;\n  width: 15%;\n  padding-left: 1.7%;\n  margin-left: 15%;\n  z-index: 2;\n}\n"

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
    function ContactUsPageComponent() {
    }
    ContactUsPageComponent.prototype.ngOnInit = function () {
    };
    ContactUsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us-page',
            template: __webpack_require__(/*! ./contact-us-page.component.html */ "./src/app/pages/contact-us-page/contact-us-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-us-page.component.less */ "./src/app/pages/contact-us-page/contact-us-page.component.less")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<p>\n  cv-generator-page works!\n</p>\n"

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

module.exports = ".dp {\n  background: #000;\n}\n.dp .dp__backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  min-height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  height: 100%;\n}\n.dp .dp__backdrop .col {\n  padding-right: 0;\n  padding-left: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 1px;\n  background-color: rgba(255, 255, 255, 0.16);\n  z-index: 2;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.dp .dp__backdrop .col.col--1 {\n  left: 16.66666667%;\n}\n.dp .dp__backdrop .col.col--2 {\n  left: 33.33333333%;\n}\n.dp .dp__backdrop .col.col--3 {\n  left: 50%;\n}\n.dp .dp__backdrop .col.col--4 {\n  left: 66.66666667%;\n}\n.dp .dp__backdrop .col.col--5 {\n  left: 83.33333333%;\n}\n.dp .dp__title {\n  min-height: 600px;\n  background: #000;\n  background-image: url('/assets/img/page-dev/page-dev.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.dp .dp__title-text--left {\n  -webkit-transform: translate(-100%, -10%);\n          transform: translate(-100%, -10%);\n}\n.dp .dp__title-text--right {\n  -webkit-transform: translate(0%, 50%);\n          transform: translate(0%, 50%);\n}\n.dp .dp__content {\n  max-width: 70.4%;\n}\n.dp .dp__content-introduction {\n  left: -25%;\n  padding-left: 25%;\n  -webkit-transform: translateY(-180px);\n          transform: translateY(-180px);\n  background: #000;\n}\n.dp .dp__content-facilities {\n  max-width: 75%;\n}\n.dp .dp__content-examples-slider {\n  padding-right: 0;\n}\n.dp .dp__content-news-item:before {\n  content: '';\n  position: absolute;\n  top: -20%;\n  width: 5%;\n  height: 5%;\n  background: #fff;\n}\n.dp .dp__team {\n  overflow: hidden;\n}\n.dp .dp__team-backdrop {\n  width: 100%;\n  height: 100%;\n  background: url('/assets/img/page-dev/dev-link.jpg') no-repeat;\n  background-size: 100%;\n  background-position: cover ;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 0.45;\n  transition: all 3s;\n}\n.dp .dp__team-backdrop:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  opacity: 0.9;\n}\n.dp .dp__team-inner {\n  top: 5%;\n  width: 15%;\n  padding-left: 1.7%;\n  margin-left: 15%;\n  z-index: 2;\n}\n"

/***/ }),

/***/ "./src/app/pages/development-page/development-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/development-page/development-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dp container-fluid t--white\">\r\n  <!-- Development backdrop -->\r\n  <div class=\"dp__backdrop\">\r\n    <span class=\"col col--1\"></span> <span class=\"col col--2\"></span>\r\n    <span class=\"col col--3\"></span> <span class=\"col col--4\"></span>\r\n    <span class=\"col col--5\"></span>\r\n  </div>\r\n  <!-- Development content -->\r\n  <header class=\"dp__title block\">\r\n    <h1 class=\"dp__title-text position--r t--c t--title m--t-xxlg \">\r\n      <span class=\"dp__title-text dp__title-text--left position--a\">Devel</span>\r\n      <span class=\"dp__title-text dp__title-text--right position--a\"\r\n        >opment</span\r\n      >\r\n    </h1>\r\n  </header>\r\n  <main class=\"dp__content container \">\r\n    <section class=\"dp__content-introduction block \">\r\n      <h2 class=\"t--h2 t--bold\">\r\n        Coming to watch a broadcast or got a meeting in the building?\r\n      </h2>\r\n      <h3 class=\"t--h4 \">\r\n        Below you’ll find all you need to organise your visit\r\n      </h3>\r\n      <p class=\"m--v-lg\">\r\n        The programmes Zapplive, Opsporing Verzocht and Radar are all made in M.\r\n        You can also watch broadcasts live from our public gallery.\r\n      </p>\r\n    </section>\r\n    <section class=\"dp__content-facilities block \">\r\n      <h2 class=\"t--h1 t--bold\">Facilities</h2>\r\n      <h3 class=\"t--h4\">Make yourself at home</h3>\r\n      <p class=\"m--v-lg\">\r\n        Hiring office space, organizing an event: it’s all possible here.\r\n        Whether dropping by our café or you need to hire a room for an\r\n        appointment or larger meeting. Just let us know your needs and we'll\r\n        help you out.\r\n      </p>\r\n    </section>\r\n    <section class=\"dp__content-examples\">\r\n      <div class=\"dp__content-examples-headline grid \">\r\n        <div class=\"col col--1-4 t--h4\">Café</div>\r\n        <div class=\"col col--1-4 t--h4\">Restaurant</div>\r\n        <div class=\"col col--1-4 t--h4\">Lounge</div>\r\n        <div class=\"col col--1-4 t--h4\"></div>\r\n      </div>\r\n      <div class=\"grid \">\r\n        <div class=\"dp__content-examples-slider col col--1-1 \">\r\n          <app-slider></app-slider>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div class=\"grid grid--collapse\">\r\n      <section class=\"dp__content-info col col--1-2 \">\r\n        <h2 class=\"t--h1 t--bold  m--v-lg\">Practical information</h2>\r\n        <h3 class=\"t--h4 t--bold \">Adres</h3>\r\n        <p>’s Gravelandseweg 80 1217 EW Hilversum</p>\r\n        <a class=\"t--uppercase link link--line\" href=\"\">View in Google Maps</a>\r\n        <h3 class=\"t--h4 t--bold m--v-md\">How to get to M</h3>\r\n        <p>\r\n          M is easy to reach by public or private transport. We’re about 10\r\n          minutes from the A27. And the 105 and 106 buses run to and from both\r\n          Hilversum and Bussum railway stations. Below you’ll find our address\r\n          details to plan your route in Google Maps.\r\n        </p>\r\n        <h3 class=\"t--h4 t--bold m--v-md\">Parking</h3>\r\n        <p>\r\n          Under the media building, you’ll find a car park with 366 spaces,\r\n          including charging stations for electric cars and e-bikes.\r\n        </p>\r\n        <h3 class=\"t--h4 t--bold m--v-md\">Accessibility</h3>\r\n        <p>\r\n          In general, M’s buildings are all easily accessible. This includes the\r\n          toilets, lifts and main entrances. M is also accessible in the sense\r\n          of hospitality. We are always delighted to welcome guests into our\r\n          home.\r\n        </p>\r\n      </section>\r\n      <section class=\"dp__content-news col col--1-2 \">\r\n        <h2 class=\"t--h1 t--bold  m--v-lg\">Agenda</h2>\r\n        <div class=\"dp__content-news-item position--r  m--v-md\">\r\n          <p class=\"t--md t--uppercase m\">29 November | 18:00 | M-gebouw</p>\r\n          <p class=\"t--h5 t--bold\">GrowthMatters workshop: The war on Talent</p>\r\n        </div>\r\n        <div class=\"dp__content-news-item position--r m--v-md\">\r\n        <p class=\"t--md t--uppercase m\">07 December | 12:00 | M-gebouw</p>\r\n        <p class=\"t--h5 t--bold\">\r\n          Tineke Live with live performances of Venice & Douwe Bob\r\n        </p>\r\n      </div>\r\n      </section>\r\n    </div>\r\n  </main>\r\n  <a class=\"dp__team block  d--b h--400 \">\r\n    <div class=\"dp__team-backdrop position--a\"></div>\r\n    <div class=\"dp__team-inner position--a\">\r\n      <h2 class=\"t--h1 t--bold\">Who's based here?</h2>\r\n      <p class=\"t--h5 t--uppercase link link--line\">View all residents</p>\r\n    </div>\r\n  </a>\r\n</div>\r\n"

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

module.exports = ".open .home-page {\n  -webkit-transform: translateY(150px);\n          transform: translateY(150px);\n}\n.home-page {\n  background-color: #000;\n  min-height: 100vh;\n  height: 100vh;\n  color: #fff;\n  transition: all .5s;\n}\n.home-page .home-page__flex {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  z-index: 1;\n}\n.home-page .home-page__backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  min-height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  height: 100%;\n}\n.home-page .home-page__backdrop .col {\n  padding-right: 0;\n  padding-left: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 1px;\n  background-color: rgba(255, 255, 255, 0.16);\n  z-index: 2;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.home-page .home-page__backdrop .col:first-child:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  height: 1px;\n  width: calc(16.66666667vw);\n  background-color: rgba(255, 255, 255, 0.16);\n  right: 1px;\n}\n.home-page .home-page__backdrop .col:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  height: 1px;\n  width: calc(16.66666667vw);\n  background-color: rgba(255, 255, 255, 0.16);\n  left: 1px;\n}\n.home-page .home-page__backdrop .col.col--1 {\n  left: 16.66666667%;\n}\n.home-page .home-page__backdrop .col.col--2 {\n  left: 33.33333333%;\n}\n.home-page .home-page__backdrop .col.col--3 {\n  left: 50%;\n}\n.home-page .home-page__backdrop .col.col--4 {\n  left: 66.66666667%;\n}\n.home-page .home-page__backdrop .col.col--5 {\n  left: 83.33333333%;\n}\n.home-page .home-page__img {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  overflow: hidden;\n}\n.home-page .home-page__img:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: #000000;\n  transition: all .4s;\n}\n.home-page .home-page__img.home-page__img--1-1 .home-page__img-img {\n  min-width: 117%;\n  height: 117%;\n}\n.home-page .home-page__img-img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  z-index: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: all .4s;\n}\n.home-page .home-page__hover:hover .home-page__img:after {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.home-page .home-page__hover:hover .home-page__img-img {\n  -webkit-transform: translateX(-10%);\n          transform: translateX(-10%);\n}\n.home-page .home-page__project {\n  position: relative;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\n.home-page .home-page__project-link {\n  position: relative;\n  display: inline-block;\n  z-index: 1;\n  color: #fff;\n  margin: 0;\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\r\n    <div class=\"container-fluid\">\r\n\r\n        <!-- Home backdrop -->\r\n        <div class=\"home-page__backdrop\">\r\n            <span class=\"col col--1\"></span>\r\n            <span class=\"col col--2\"></span>\r\n            <span class=\"col col--3\"></span>\r\n            <span class=\"col col--4\"></span>\r\n            <span class=\"col col--5\"></span>\r\n        </div>\r\n\r\n        <!-- Home content -->\r\n        <div class=\"grid grid--collapse\">\r\n\r\n            <a href=\"\" class=\"col--1-3 p--h-lg position--r home-page__hover link link--reset\">\r\n\r\n                <div class=\"home-page__img home-page__img--1-1\">\r\n                    <img class=\"home-page__img-img\" src=\"assets/img/about.jpg\" alt=\"\">\r\n                </div>\r\n\r\n                <div class=\"home-page__flex\">\r\n                    <div>\r\n                        &nbsp;\r\n                    </div>\r\n                    <div>\r\n                        <h1 class=\"t--title\">\r\n                            About <span class=\"t--red\">us</span>\r\n                        </h1>\r\n                        <h2 >\r\n                            Welkom in M, het nieuwe mediahart van Nederland\r\n                        </h2>\r\n                    </div>\r\n                    <div>\r\n                        <a href=\"\" class=\"link link--line t--h5\">Lees meer over</a>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n\r\n            <div class=\"col--1-3\">\r\n                <!-- <div id=\"logo\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 404 404\" width=\"404\" height=\"404\"\r\n                    preserveAspectRatio=\"xMidYMid meet\" style=\"width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);\">\r\n                    <defs>\r\n                    <clipPath id=\"animationMask_5zAfvzf1dC\">\r\n                        <rect width=\"404\" height=\"404\" x=\"0\" y=\"0\"></rect>\r\n                    </clipPath>\r\n                    <mask id=\"ly_MTeypdobWA\" mask-type=\"alpha\">\r\n                        <g style=\"display: none;\" transform=\"matrix(0,-1,1,0,228.92599487304688,237.17599487304688)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_Rlq6oXUmYQ\" mask-type=\"alpha\">\r\n                        <g style=\"display: none;\" transform=\"matrix(1,0,0,1,165.82400512695312,226.92599487304688)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_cUySNz3Igr\" mask-type=\"alpha\">\r\n                        <g style=\"display: none;\" transform=\"matrix(-1,0,0,-1,239.17599487304688,174.07400512695312)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_vibB6E3A5O\" mask-type=\"alpha\">\r\n                        <g style=\"display: none;\" transform=\"matrix(0,1,-1,0,176.07400512695312,163.82400512695312)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_RXId2rpvgH\" mask-type=\"alpha\">\r\n                        <g style=\"display: block;\" transform=\"matrix(0,-1,1,0,228.92599487304688,237.17599487304688)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_vsjwLVU8Fc\" mask-type=\"alpha\">\r\n                        <g style=\"display: block;\" transform=\"matrix(1,0,0,1,165.82400512695312,226.92599487304688)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_Q9nKSSZQft\" mask-type=\"alpha\">\r\n                        <g style=\"display: block;\" transform=\"matrix(-1,0,0,-1,239.17599487304688,174.07400512695312)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_QzNQJQB589\" mask-type=\"alpha\">\r\n                        <g style=\"display: block;\" transform=\"matrix(0,1,-1,0,176.07400512695312,163.82400512695312)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_mWfHCt5xBo\" mask-type=\"alpha\">\r\n                        <g transform=\"matrix(0,-1,1,0,228.92599487304688,237.17599487304688)\" opacity=\"1\" style=\"display: none;\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_DGhbnckuWJ\" mask-type=\"alpha\">\r\n                        <g transform=\"matrix(1,0,0,1,165.82400512695312,226.92599487304688)\" opacity=\"1\" style=\"display: none;\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_eirOHWrE2j\" mask-type=\"alpha\">\r\n                        <g transform=\"matrix(-1,0,0,-1,239.17599487304688,174.07400512695312)\" opacity=\"1\" style=\"display: none;\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_8wT9NMCFOm\" mask-type=\"alpha\">\r\n                        <g transform=\"matrix(0,1,-1,0,176.07400512695312,163.82400512695312)\" opacity=\"1\" style=\"display: none;\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    </defs>\r\n                    <g clip-path=\"url(#animationMask_5zAfvzf1dC)\">\r\n                    <g mask=\"url(#ly_8wT9NMCFOm)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1.1200000047683716,0,0,1.1200000047683716,-227.7689971923828,23.412992477416992)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_eirOHWrE2j)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1,0,0,1,32.79100036621094,-122.40437316894531)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_DGhbnckuWJ)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1.4900000095367432,0,0,1.4900000095367432,-369.3290100097656,46.9530029296875)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_mWfHCt5xBo)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1.2999999523162842,0,0,1.2999999523162842,14.391006469726562,212.97300720214844)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_QzNQJQB589)\" style=\"display: block;\">\r\n                        <g transform=\"matrix(0.8500000238418579,0,0,0.8500000238418579,35.990997314453125,84.64059448242188)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_Q9nKSSZQft)\" style=\"display: block;\">\r\n                        <g transform=\"matrix(1,0,0,1,48.183876037597656,55.37300109863281)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_vsjwLVU8Fc)\" style=\"display: block;\">\r\n                        <g transform=\"matrix(1.059999942779541,0,0,1.059999942779541,-28.488983154296875,53.52194595336914)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_RXId2rpvgH)\" style=\"display: block;\">\r\n                        <g transform=\"matrix(1.2999999523162842,0,0,1.2999999523162842,68.35599517822266,62.97300720214844)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_vibB6E3A5O)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(0.8799999952316284,0,0,0.8799999952316284,33.35099792480469,-80.6669921875)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_cUySNz3Igr)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1,0,0,1,22.791000366210938,-118.62699890136719)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_Rlq6oXUmYQ)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1.25,0,0,1.25,-274.2090148925781,12.873000144958496)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_MTeypdobWA)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1.2899999618530273,0,0,1.2899999618530273,207.27101135253906,21.553007125854492)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    </g>\r\n                </svg>\r\n                </div> -->\r\n            </div>\r\n\r\n            <div class=\"col--1-3 home-page__flex\">\r\n\r\n                <div class=\"h-50\">\r\n                    <div class=\"grid grid--collapse h-100\">\r\n                        <div class=\"col--1-2\">\r\n                            <a class=\"home-page__project home-page__hover\" [routerLink]=\"['/products']\">\r\n\r\n                                <p class=\"home-page__project-link link link--line t--h4 t--semi-bold\">Products</p>\r\n\r\n                                <div class=\"home-page__img home-page__img--1-1\">\r\n                                    <img class=\"home-page__img-img\" src=\"assets/img/development.jpg\" alt=\"\">\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col--1-2\">\r\n                            <a class=\"home-page__project home-page__hover\" [routerLink]=\"['/services']\">\r\n\r\n                                <p class=\"home-page__project-link link link--line t--h4 t--semi-bold\">Services</p>\r\n\r\n                                <div class=\"home-page__img home-page__img--1-1\">\r\n                                    <img class=\"home-page__img-img\" src=\"assets/img/projects.png\" alt=\"\">\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"h-50\">\r\n                    <div class=\"grid grid--collapse\">\r\n                        <div class=\"col--1-1 p--h-lg\">\r\n                            <p class=\"t--h5\">\r\n                                We create a complete experience for the technical part of your business.\r\n                            </p>\r\n                            <p class=\"t--h5 t--semi-bold\">\r\n                                We provide our clients with a custom CRM and ERP systems that simplify all the working processes such as communications\r\n                                with clients and prospects, managing internal business processes and monitoring of all types of activities.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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

/***/ "./src/app/pages/products-page/products-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/products-page/products-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products container-fluid \">\n  <!-- Products backdrop -->\n  <div class=\"products__backdrop\">\n    <span class=\"col col--1\"></span>\n    <span class=\"col col--2\"></span>\n    <span class=\"col col--3\"></span>\n    <span class=\"col col--4\"></span>\n    <span class=\"col col--5\"></span>\n  </div>\n  <!-- Products content -->\n  <header class=\"block \">\n    <h1 class=\"products__title t--title position--r t--title m--t-xxlg t--c\">\n      <span class=\"products__title-text products__title-text--left position--a\">Pro</span>\n      <span class=\"products__title-text products__title-text--right position--a\">ducts</span>\n    </h1>\n  </header>\n  <main class=\"products__content container p--b-lg\">\n    <section class=\"products__content-text grid \">\n      <h2 class=\"t--h1 t--bold\">Coming to watch a broadcast or got a meeting in the building?</h2>\n      <h3 class=\"t--h4\">Below you’ll find all you need to organise your visit</h3>\n      <p class=\"m--v-lg\" >\n        The programmes Zapplive, Opsporing Verzocht and Radar are all made in M.\n        You can also watch broadcasts live from our public gallery.\n      </p>\n    </section>\n    <section class=\"products__content-logo grid grid--collapse m--v-lg\">\n      <div class=\"col col--1-4 t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n      <div class=\"col col--1-4 t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n      <div class=\"col col--1-4 t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n      <div class=\"col col--1-4 t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n    </section>\n    <section class=\"products__content-text grid \">\n      <h2 class=\"t--h1 t--bold\">Coming to watch a broadcast or got a meeting in the building?</h2>\n      <h3 class=\"t--h4 \">Below you’ll find all you need to organise your visit</h3>\n      <p class=\"m--v-lg\">\n        The programmes Zapplive, Opsporing Verzocht and Radar are all made in M.\n        You can also watch broadcasts live from our public gallery.\n      </p>\n    </section>\n    <section class=\"products__content-logo grid grid--collapse m--v-lg\">\n      <div class=\"col col--1-4 t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n      <div class=\"col col--1-4 t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n      <div class=\"col col--1-4 t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n      <div class=\"col col--1-4 t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n    </section>\n    <app-button-form></app-button-form>\n  </main>\n</div>\n"

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

module.exports = "<div class=\"services container-fluid t--white\">\n  <!-- Services backdrop -->\n  <div class=\"services__backdrop\">\n    <span class=\"col col--1\"></span>\n    <span class=\"col col--2\"></span>\n    <span class=\"col col--3\"></span>\n    <span class=\"col col--4\"></span>\n    <span class=\"col col--5\"></span>\n  </div>\n  <!-- Services content -->\n  <header class=\"services__title block \">\n    <h1 class=\"services__title-text position--r t--title m--t-xxlg t--c\">\n      <span class=\"services__title-text services__title-text--left position--a\">Serv</span>\n      <span class=\"services__title-text services__title-text--right position--a\">ices</span>\n    </h1>\n  </header>\n  <main class=\"services__content container p--b-lg \">\n    <section class=\"services__content-text block \">\n      <h2 class=\"t--h2 t--bold\">Looking for a state-of-the-art studio?</h2>\n      <h3 class=\"t--h4 \">We're more than happy to look into the possibilities with you</h3>\n      <p class=\"m--v-lg\" >\n        In M, you will be using only the very best facilities.\n        See the details for each studio below or download the pdf for a complete overview.\n      </p>\n    </section>\n    <section class=\"services__slider\">\n      <div class=\"grid grid--collapse\">\n        <div class=\"services__slider-title col col--1-4 t--h4\">Studio A</div>\n        <div class=\"services__slider-title col col--1-4 t--h4\">Studio B</div>\n        <div class=\"col col--1-4 t--h4\"></div>\n        <div class=\"col col--1-4 t--h4\"></div>\n      </div>\n      <div class=\"grid grid--collapse\">\n        <div class=\"services__slider-body col col--1-1 p--reset\">\n          <app-slider></app-slider>\n        </div>\n      </div>\n      <div class=\"grid \">\n        <div class=\"services__slider-description col col--1-1\">\n          <p class=\"t--semi-bold\">Studio A</p>\n          <p class=\"m--v-lg\" >\n            Studio A is where the bigger, serial productions take place.\n            The studio is directly adjacent to the transit area,\n            so it’s easy to drive decors and technical materials right into the studio.\n            The lighting grid is fully equipped with hoists,\n            so the lighting can quickly and easily be adjusted.\n          </p>\n          <ol class=\"services__slider-list\">\n            <li class=\"services__slider-list-item t--bold m\">Direct access to transit area</li>\n            <li class=\"services__slider-list-item t--bold m\">Lighting grid fully equipped with hoists, so adjustable without work platforms or ladders</li>\n            <li class=\"services__slider-list-item t--bold m\">Sufficient hoists equipped with DMX, XLR, Speakon (NL2) and HD-SDI connections</li>\n          </ol>\n          <button class=\"services__slider-btn t--h5 t--bold  t--white m--v-lg p--sm\">\n            Download the overview\n          </button>\n        </div>\n      </div>\n    </section>\n    <app-button-form></app-button-form>\n  </main>\n</div>\n"

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
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_development_page_development_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/development-page/development-page.component */ "./src/app/pages/development-page/development-page.component.ts");
/* harmony import */ var _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/products-page/products-page.component */ "./src/app/pages/products-page/products-page.component.ts");
/* harmony import */ var _pages_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/services-page/services-page.component */ "./src/app/pages/services-page/services-page.component.ts");
/* harmony import */ var _pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact-us-page/contact-us-page.component */ "./src/app/pages/contact-us-page/contact-us-page.component.ts");






var routes = [
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"], pathMatch: 'full' },
    { path: 'development', component: _pages_development_page_development_page_component__WEBPACK_IMPORTED_MODULE_2__["DevelopmentPageComponent"] },
    { path: 'products', component: _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_3__["ProductsPageComponent"] },
    { path: 'services', component: _pages_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_4__["ServicesPageComponent"] },
    { path: 'contact', component: _pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsPageComponent"] }
    // { path: 'order', component: HomePageComponent, pathMatch: 'full' },
    // { path: '**', component: HomePageComponent },
];
var route = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/ui/button-form/button-form.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ui/button-form/button-form.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <section class=\"page-form t--c\" [ngClass]=\"{'open': isShownForm}\">\n    <button\n      (click)=\"shownForm()\"\n      class=\"page-form__button position--r t--white t--h1 t--bold t--c m--v-lg\"\n      role=\"button\"\n      aria-label=\"Contact-Button\">\n      Contact us\n      <span class=\"page-form__button-line page-form__button-line--left position--a\"></span>\n      <span class=\"page-form__button-line page-form__button-line--right position--a\"></span>\n    </button>\n    <div class=\"page-form__body\">\n      <app-form></app-form>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/ui/button-form/button-form.component.less":
/*!***********************************************************!*\
  !*** ./src/app/ui/button-form/button-form.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-form__button-line {\n  display: block;\n  width: 20px;\n  height: 2px;\n  background-color: #fff;\n  transition: all 0.4s;\n}\n.page-form__button-line--left {\n  bottom: -40%;\n  left: 44%;\n  -webkit-transform: rotate(25deg);\n          transform: rotate(25deg);\n}\n.page-form__button-line--right {\n  bottom: -40%;\n  left: 50%;\n  -webkit-transform: rotate(-25deg);\n          transform: rotate(-25deg);\n}\n.page-form .page-form__body {\n  display: none;\n  height: 0;\n}\n.page-form.open .page-form__body {\n  display: block;\n  height: auto;\n  padding: 120px 0 60px;\n  transition: height 10s;\n}\n"

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

module.exports = "<footer class=\"footer\">\n  <div class=\"footer__container container p--reset\">\n    <div class=\"flex\">\n      <nav class=\"col col--1-2 p--reset m--v-md \">\n        <ul class=\"footer__nav \">\n          <li><a class=\"footer__nav-link link m--sm t--h4 t--bold t--black\" [routerLink]=\"['/']\">Home</a></li>\n          <li><a class=\"footer__nav-link link m--sm t--h4 t--bold t--black\" [routerLink]=\"['/development']\">Development</a></li>\n          <li><a class=\"footer__nav-link link m--sm t--h4 t--bold t--black\" [routerLink]=\"['/products']\">Products</a></li>\n          <li><a class=\"footer__nav-link link m--sm t--h4 t--bold t--black\" [routerLink]=\"['/services']\">Services</a></li>\n          <li><a class=\"footer__nav-link link m--sm t--h4 t--bold t--black\" [routerLink]=\"['/contact']\">Contact Us</a></li>\n        </ul>\n      </nav>\n      <div class=\"footer__contact flex flex--column flex--center col col--1-2 m--v-md\">\n        <a class=\"footer__contact-map link m--v-md t--black\" href=\"\">\n          <p class=\" t--h4 t--bold\">\n            Homebase of the media-minded\n          </p>\n          <p class=\" t--h5\">\n            ‘s-Gravelandseweg 80, 1217 EW  Hilversum\n          </p>\n        </a>\n        <div class=\"footer__contact-statment\">\n          <a class=\"footer__contact-statment-link link t--h6  t--uppercase t--bold t--gray\" href=\"\">Privacy statement</a>\n          <a class=\"footer__contact-statment-link link t--h6  t--uppercase t--bold t--gray\" href=\"\">Cookie statement</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.less":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  color: #000;\n  background: #fff url(\"/assets/img/page-dev/map.png\") no-repeat;\n  background-position: cover;\n  background-size: 100%;\n}\n.footer__container {\n  max-width: 66.666667%;\n}\n.footer__contact {\n  padding-left: 16.666667%;\n}\n.footer__contact:before {\n  content: \"\";\n  position: absolute;\n  top: 15%;\n  width: 4%;\n  height: 2%;\n  background: #000;\n}\n.footer .footer__nav-link:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0;\n  background-color: #f44336;\n  transition: all 0.5s;\n  height: 3px;\n}\n.footer .footer__nav-link:hover:after {\n  width: 80%;\n}\n.footer .footer__contact-statment-link {\n  transition: all 0.5s;\n}\n.footer .footer__contact-statment-link:hover::first-letter {\n  color: #f44336;\n}\n"

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

module.exports = "<section class=\"form t--c\">\n  <div class=\"grid\">\n    <div class=\"col col--1-2\">\n      <input class=\"form__input\"\n        name=\"firstName\"\n        type=\"text\"\n        [(ngModel)]=\"firstName\"\n        placeholder=\"First name\"\n      />\n\n      <input class=\"form__input\"\n        name=\"lastName\"\n        [(ngModel)]=\"lastName\"\n        type=\"text\"\n        placeholder=\"Last name\"\n      />\n\n      <input class=\"form__input\"\n        name=\"contactInfo_Phone_1\"\n        [(ngModel)]=\"contactInfo_Phone_1\"\n        type=\"tel\"\n        placeholder=\"Telephone number\"\n      />\n\n      <input class=\"form__input\"\n        name=\"contactInfo_Email_1\"\n        [(ngModel)]=\"contactInfo_Email_1\"\n        type=\"email\"\n        placeholder=\"E-mail address\"\n      />\n\n      <input class=\"form__input\"\n        name=\"company\"\n        [(ngModel)]=\"company\"\n        type=\"text\"\n        placeholder=\"Company\"\n      />\n    </div>\n    <div class=\"col col--1-2\">\n      <textarea class=\"form__input\"\n        name=\"message\"\n        id=\"message\"\n        cols=\"45\"\n        rows=\"16\"\n        placeholder=\"Your message\"\n      ></textarea>\n    </div>\n  </div>\n\n  <button\n    (click)=\"click()\"\n    class=\"form__button position--r t--h3 t--bold t--c m--v-lg\"\n    role=\"button\"\n    aria-label=\"Send-Button\"\n  >\n    Send\n  </button>\n</section>\n"

/***/ }),

/***/ "./src/app/ui/form/form.component.less":
/*!*********************************************!*\
  !*** ./src/app/ui/form/form.component.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form .form__button {\n  color: inherit;\n}\n.form .form__button:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0;\n  background-color: #f44336;\n  transition: all 0.5s;\n  height: 3px;\n}\n.form .form__button:hover:after {\n  width: 80%;\n}\n"

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
        this.firstName = '';
        this.lastName = '';
        this.contactInfo_Phone_1 = '';
        this.contactInfo_Email_1 = '';
        this.message = '';
        this.company = '';
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.click = function () {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            //  .set('is_company',"false")
            .set('firstName', this.firstName)
            .set('lastName', this.lastName)
            .set('contactInfo_Phone_1', this.contactInfo_Phone_1)
            .set('contactInfo_Email_1', this.contactInfo_Email_1)
            .set('message', this.message)
            .set('company', this.company)
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

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header .header__burger {\n  position: fixed;\n  display: inline-block;\n  top: 40px;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  padding: 14px 0;\n  z-index: 1;\n}\n.header .header__burger-line {\n  display: block;\n  width: 40px;\n  height: 2px;\n  background-color: #fff;\n  transition: all .4s;\n}\n.header .header__burger-line + .header__burger-line {\n  margin-top: 8px;\n}\n.header .header__body {\n  display: none;\n  height: 0;\n}\n.header .header__list {\n  margin: 0;\n  padding: 0;\n}\n.header .header__link {\n  font-size: 3em;\n  line-height: 3rem;\n  font-style: normal;\n  font-weight: 700;\n  font-stretch: normal;\n  letter-spacing: 0;\n  color: #000;\n  position: relative;\n  display: block;\n  text-decoration: none;\n  padding: 10px 0;\n}\n.header .header__link:after {\n  content: '';\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0;\n  background-color: #f44336;\n  transition: all .5s;\n  height: 5px;\n}\n.header .header__link:hover:after {\n  width: 100px;\n}\n.header.open .header__burger-line {\n  background-color: #000;\n}\n.header.open .header__burger-line:nth-child(1) {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.header.open .header__burger-line:nth-child(2) {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.header.open .header__burger-line + .header__burger-line {\n  margin-top: -1px;\n}\n.header.open .header__body {\n  display: block;\n  height: auto;\n  padding: 120px 0 60px;\n  transition: height 10s;\n}\n.header .form__input {\n  outline: none;\n  border: none;\n  margin: 12% 0;\n  line-height: 1.5;\n  width: 100%;\n  border-bottom: 1px solid #000;\n}\n.header .form__input:focus {\n  outline: #f44336;\n}\n.header .form__input::-webkit-input-placeholder {\n  color: #808080;\n  font-size: 1.5em;\n  font-weight: 600;\n}\n.header .form__input:-ms-input-placeholder {\n  color: #808080;\n  font-size: 1.5em;\n  font-weight: 600;\n}\n.header .form__input::-ms-input-placeholder {\n  color: #808080;\n  font-size: 1.5em;\n  font-weight: 600;\n}\n.header .form__input::placeholder {\n  color: #808080;\n  font-size: 1.5em;\n  font-weight: 600;\n}\n"

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

/***/ "./src/app/ui/slider/slider.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/slider/slider.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<carousel>\n  <slide *ngFor=\"let slide of slides\">\n    <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\n\n    <div class=\"carousel-caption\">\n      <h4>Slide {{slide.index}}</h4>\n      <p>{{slide.text}}</p>\n    </div>\n  </slide>\n</carousel>\n\n\n"

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
            { image: 'assets/img/page-dev/dev-slide-1.jpg',
                index: 1,
                text: 'Slide--1' },
            { image: 'assets/img/page-dev/dev-slide-2.jpg',
                index: 2,
                text: 'Slide--2' },
            { image: 'assets/img/page-dev/dev-slide-3.jpg',
                index: 3,
                text: 'Slide--3' }
        ];
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/ui/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.less */ "./src/app/ui/slider/slider.component.less")]
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

module.exports = __webpack_require__(/*! C:\Users\artur.kuznetsov.SOLIDEXPERT\Documents\Solid\solidexpert\solid\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map