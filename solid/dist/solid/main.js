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

module.exports = "<app-header ></app-header>\r\n<!-- <app-header [ngClass]=\"{'open': isShowMenu}\"></app-header> -->\r\n<router-outlet></router-outlet>\r\n<!-- <router-outlet [ngClass]=\"{'open': isShowMenu}\"></router-outlet> -->\r\n"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _pages_development_page_development_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/development-page/development-page.component */ "./src/app/pages/development-page/development-page.component.ts");
/* harmony import */ var _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/products-page/products-page.component */ "./src/app/pages/products-page/products-page.component.ts");
/* harmony import */ var _pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/projects-page/projects-page.component */ "./src/app/pages/projects-page/projects-page.component.ts");
/* harmony import */ var _pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact-us-page/contact-us-page.component */ "./src/app/pages/contact-us-page/contact-us-page.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _ui_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/slider/slider.component */ "./src/app/ui/slider/slider.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routing */ "./src/app/routing.ts");
/* harmony import */ var _pages_cv_generator_page_cv_generator_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/cv-generator-page/cv-generator-page.component */ "./src/app/pages/cv-generator-page/cv-generator-page.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
                _ui_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _pages_development_page_development_page_component__WEBPACK_IMPORTED_MODULE_5__["DevelopmentPageComponent"],
                _ui_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__["SliderComponent"],
                _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_6__["ProductsPageComponent"],
                _pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsPageComponent"],
                _pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsPageComponent"],
                _pages_cv_generator_page_cv_generator_page_component__WEBPACK_IMPORTED_MODULE_13__["CvGeneratorPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                _routing__WEBPACK_IMPORTED_MODULE_12__["route"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
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

module.exports = "<div class=\"container-fluid contact\">\n  contact-us-page works!\n</div>\n"

/***/ }),

/***/ "./src/app/pages/contact-us-page/contact-us-page.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/pages/contact-us-page/contact-us-page.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n  background: #000;\n  color: #fff;\n}\n"

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

module.exports = ".dp {\n  background: #000;\n  color: #fff;\n}\n.dp .dp__backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  min-height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  height: 100%;\n}\n.dp .dp__backdrop .col {\n  padding-right: 0;\n  padding-left: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 1px;\n  background-color: rgba(255, 255, 255, 0.16);\n  z-index: 2;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.dp .dp__backdrop .col.col--1 {\n  left: 16.66666667%;\n}\n.dp .dp__backdrop .col.col--2 {\n  left: 33.33333333%;\n}\n.dp .dp__backdrop .col.col--3 {\n  left: 50%;\n}\n.dp .dp__backdrop .col.col--4 {\n  left: 66.66666667%;\n}\n.dp .dp__backdrop .col.col--5 {\n  left: 83.33333333%;\n}\n.dp .dp__title {\n  min-height: 600px;\n  background: #000;\n  background-image: url('/assets/img/page-dev/page-dev.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.dp .dp__title-text {\n  width: 100%;\n}\n.dp .dp__title-text--left {\n  -webkit-transform: translate(-7.5%, 0%);\n          transform: translate(-7.5%, 0%);\n}\n.dp .dp__title-text--right {\n  -webkit-transform: translate(10%, 0%);\n          transform: translate(10%, 0%);\n}\n.dp .dp__content {\n  max-width: 66.666667%;\n}\n.dp .dp__content-introduction {\n  left: -25%;\n  padding-left: 25%;\n  -webkit-transform: translateY(-180px);\n          transform: translateY(-180px);\n  background: #000;\n}\n.dp .dp__content-facilities {\n  max-width: 75%;\n}\n.dp .dp__content-examples-slider {\n  padding-right: 0;\n}\n.dp .dp__content-news-item:before {\n  content: '';\n  position: absolute;\n  top: -20%;\n  width: 5%;\n  height: 5%;\n  background: #fff;\n}\n.dp .dp__team {\n  overflow: hidden;\n}\n.dp .dp__team-backdrop {\n  width: 100%;\n  height: 100%;\n  background: url('/assets/img/page-dev/dev-link.jpg') no-repeat;\n  background-size: 100%;\n  background-position: cover ;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 0.45;\n  transition: all 3s;\n}\n.dp .dp__team-backdrop:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  opacity: 0.9;\n}\n.dp .dp__team-inner {\n  top: 5%;\n  width: 15%;\n  padding-left: 1.7%;\n  margin-left: 15%;\n  z-index: 2;\n}\n.dp .dp__footer {\n  color: #000 ;\n  background: #fff url('/assets/img/page-dev/map.png') no-repeat;\n}\n.dp .dp__footer-container {\n  max-width: 66.666667%;\n}\n.dp .dp__footer-contact {\n  padding-left: 16.666667%;\n}\n.dp .dp__footer-contact:before {\n  content: '';\n  position: absolute;\n  top: 15%;\n  width: 4%;\n  height: 2%;\n  background: #000;\n}\n"

/***/ }),

/***/ "./src/app/pages/development-page/development-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/development-page/development-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dp\">\n  <!-- Development backdrop -->\n    <div class=\"dp__backdrop\">\n      <span class=\"col col--1\"></span>\n      <span class=\"col col--2\"></span>\n      <span class=\"col col--3\"></span>\n      <span class=\"col col--4\"></span>\n      <span class=\"col col--5\"></span>\n  </div>\n  <!-- Development content -->\n  <div class=\"block dp__title\">\n    <h1 class=\"dp__title-text t--title m--t-xxlg t--c\">\n      <span class=\"dp__title-text dp__title-text--left d--b\">Devel</span>\n      <span class=\"dp__title-text dp__title-text--right d--b\">opment</span>\n    </h1>\n  </div>\n\n  <div class=\"container dp__content p--reset\">\n\n    <div class=\"block dp__content-introduction\">\n\n        <h2 class=\"t--h2 t--bold\">Coming to watch a broadcast or got a meeting in the building?</h2>\n        <h3 class=\"t--h4 \">Below you’ll find all you need to organise your visit</h3>\n        <p class=\"m--v-lg\" >\n          The programmes Zapplive, Opsporing Verzocht and Radar are all made in M.\n           You can also watch broadcasts live from our public gallery.\n        </p>\n\n    </div>\n\n    <div class=\"block dp__content-facilities\">\n\n          <h2 class=\"t--h1 t--bold\">Facilities</h2>\n          <h3 class=\"t--h4\" >Make yourself at home</h3>\n          <p class=\"m--v-lg\">\n              Hiring office space, organizing an event: it’s all possible here.\n              Whether dropping by our café or you need to hire a room for an appointment or larger meeting.\n              Just let us know your needs and we'll help you out.\n          </p>\n\n    </div>\n\n    <div class=\"dp__content-examples\">\n        <div class=\"grid dp__content-examples-headline\">\n            <div class=\"col col--1-4 t--h4\">Café</div>\n            <div class=\"col col--1-4 t--h4\">Restaurant</div>\n            <div class=\"col col--1-4 t--h4\">Lounge</div>\n            <div class=\"col col--1-4 t--h4\"></div>\n        </div>\n        <div class=\"grid \">\n            <div class=\"col col--1-1 dp__content-examples-slider\">\n              <app-slider></app-slider>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"grid \">\n      <div class=\"col col--1-2 dp__content-info\">\n        <h2 class=\"t--h1 t--bold  m--v-lg\"> Practical information </h2>\n        <h3 class=\"t--h4 t--bold \"> Adres </h3>\n        <p>\n          ’s Gravelandseweg 80\n          1217 EW Hilversum\n        </p>\n        <a class=\"t--uppercase link link--line\" href=\"\">View in Google Maps</a>\n        <h3 class=\"t--h4 t--bold m--v-md\"> How to get to M </h3>\n        <p>\n          M is easy to reach by public or private transport.\n          We’re about 10 minutes from the A27. And the 105 and 106 buses\n          run to and from both Hilversum and Bussum railway stations.\n          Below you’ll find our address details to plan your route in\n          Google Maps.\n        </p>\n        <h3 class=\"t--h4 t--bold m--v-md\"> Parking </h3>\n        <p>\n          Under the media building, you’ll find a car park with 366 spaces,\n          including charging stations for electric cars and e-bikes.\n        </p>\n        <h3 class=\"t--h4 t--bold m--v-md\"> Accessibility </h3>\n        <p>\n          In general, M’s buildings are all easily accessible.\n          This includes the toilets, lifts and main entrances.\n          M is also accessible in the sense of hospitality.\n          We are always delighted to welcome guests into our home.\n        </p>\n      </div>\n      <div class=\"col col--1-2 dp__content-news\">\n        <h2 class=\"t--h1 t--bold  m--v-lg\"> Agenda </h2>\n        <div class=\"dp__content-news-item position--r  m--v-md\">\n          <p class=\"t--md t--uppercase m\"> 29 November | 18:00 | M-gebouw </p>\n          <p class=\"t--h5 t--bold\">\n            GrowthMatters workshop: The war on Talent\n          </p>\n        </div>\n        <div class=\"dp__content-news-item position--r m--v-md\">\n          <p class=\"t--md t--uppercase m\"> 07 December | 12:00 | M-gebouw </p>\n          <p class=\"t--h5 t--bold\">\n            Tineke Live with live performances of Venice & Douwe Bob\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <a class=\"block dp__team d--b h--400 \">\n    <div class=\"dp__team-backdrop position--a\"></div>\n    <div class=\"dp__team-inner position--a\">\n      <h2 class=\"t--h1 t--bold\"> Who's based here? </h2>\n      <p class=\"t--h5 t--uppercase link link--line\"> View all residents </p>\n    </div>\n  </a>\n\n  <footer class=\"dp__footer\">\n    <div class=\"dp__footer-container container p--reset\">\n      <div class=\"flex\">\n        <nav class=\"col col--1-2 p--reset m--v-md \">\n          <ul class=\"dp__footer-nav \">\n            <li><a class=\"link m--sm t--h4 t--bold\" [routerLink]=\"['/']\">Home</a></li>\n            <li><a class=\"link m--sm t--h4 t--bold\" [routerLink]=\"['/development']\">Development</a></li>\n            <li><a class=\"link m--sm t--h4 t--bold\" [routerLink]=\"['/products']\">Products</a></li>\n            <li><a class=\"link m--sm t--h4 t--bold\" [routerLink]=\"['/projects']\">Projects</a></li>\n            <li><a class=\"link m--sm t--h4 t--bold\" [routerLink]=\"['/contact']\">Contact Us</a></li>\n          </ul>\n        </nav>\n        <div class=\"dp__footer-contact flex flex--column flex--center col col--1-2 m--v-md\">\n          <a class=\"dp__footer-contact-map link  m--v-md\" href=\"\">\n            <p class=\" t--h4 t--bold\">\n              Homebase of the media-minded\n            </p>\n            <p class=\" t--h5\">\n              ‘s-Gravelandseweg 80, 1217 EW  Hilversum\n            </p>\n          </a>\n          <div class=\"dp__footer-contact-statment\">\n            <a class=\"link t--h6  t--uppercase t--bold\" href=\"\">Privacy statement</a>\n            <a class=\"link t--h6  t--uppercase t--bold\" href=\"\">Cookie statement</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n\n"

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

module.exports = "<div class=\"home-page\">\r\n    <div class=\"container-fluid\">\r\n\r\n        <!-- Home backdrop -->\r\n        <div class=\"home-page__backdrop\">\r\n            <span class=\"col col--1\"></span>\r\n            <span class=\"col col--2\"></span>\r\n            <span class=\"col col--3\"></span>\r\n            <span class=\"col col--4\"></span>\r\n            <span class=\"col col--5\"></span>\r\n        </div>\r\n\r\n        <!-- Home content -->\r\n        <div class=\"grid grid--collapse\">\r\n\r\n            <a href=\"\" class=\"col--1-3 p--h-lg position--r home-page__hover link link--reset\">\r\n\r\n                <div class=\"home-page__img home-page__img--1-1\">\r\n                    <img class=\"home-page__img-img\" src=\"assets/img/about.jpg\" alt=\"\">\r\n                </div>\r\n\r\n                <div class=\"home-page__flex\">\r\n                    <div>\r\n                        &nbsp;\r\n                    </div>\r\n                    <div>\r\n                        <h1 class=\"t--title\">\r\n                            About <span class=\"t--red\">us</span>\r\n                        </h1>\r\n                        <h2 >\r\n                            Welkom in M, het nieuwe mediahart van Nederland\r\n                        </h2>\r\n                    </div>\r\n                    <div>\r\n                        <a href=\"\" class=\"link link--line t--h5\">Lees meer over</a>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n\r\n            <div class=\"col--1-3\">\r\n                <!-- <div id=\"logo\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 404 404\" width=\"404\" height=\"404\"\r\n                    preserveAspectRatio=\"xMidYMid meet\" style=\"width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);\">\r\n                    <defs>\r\n                    <clipPath id=\"animationMask_5zAfvzf1dC\">\r\n                        <rect width=\"404\" height=\"404\" x=\"0\" y=\"0\"></rect>\r\n                    </clipPath>\r\n                    <mask id=\"ly_MTeypdobWA\" mask-type=\"alpha\">\r\n                        <g style=\"display: none;\" transform=\"matrix(0,-1,1,0,228.92599487304688,237.17599487304688)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_Rlq6oXUmYQ\" mask-type=\"alpha\">\r\n                        <g style=\"display: none;\" transform=\"matrix(1,0,0,1,165.82400512695312,226.92599487304688)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_cUySNz3Igr\" mask-type=\"alpha\">\r\n                        <g style=\"display: none;\" transform=\"matrix(-1,0,0,-1,239.17599487304688,174.07400512695312)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_vibB6E3A5O\" mask-type=\"alpha\">\r\n                        <g style=\"display: none;\" transform=\"matrix(0,1,-1,0,176.07400512695312,163.82400512695312)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_RXId2rpvgH\" mask-type=\"alpha\">\r\n                        <g style=\"display: block;\" transform=\"matrix(0,-1,1,0,228.92599487304688,237.17599487304688)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_vsjwLVU8Fc\" mask-type=\"alpha\">\r\n                        <g style=\"display: block;\" transform=\"matrix(1,0,0,1,165.82400512695312,226.92599487304688)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_Q9nKSSZQft\" mask-type=\"alpha\">\r\n                        <g style=\"display: block;\" transform=\"matrix(-1,0,0,-1,239.17599487304688,174.07400512695312)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_QzNQJQB589\" mask-type=\"alpha\">\r\n                        <g style=\"display: block;\" transform=\"matrix(0,1,-1,0,176.07400512695312,163.82400512695312)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_mWfHCt5xBo\" mask-type=\"alpha\">\r\n                        <g transform=\"matrix(0,-1,1,0,228.92599487304688,237.17599487304688)\" opacity=\"1\" style=\"display: none;\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_DGhbnckuWJ\" mask-type=\"alpha\">\r\n                        <g transform=\"matrix(1,0,0,1,165.82400512695312,226.92599487304688)\" opacity=\"1\" style=\"display: none;\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_eirOHWrE2j\" mask-type=\"alpha\">\r\n                        <g transform=\"matrix(-1,0,0,-1,239.17599487304688,174.07400512695312)\" opacity=\"1\" style=\"display: none;\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    <mask id=\"ly_8wT9NMCFOm\" mask-type=\"alpha\">\r\n                        <g transform=\"matrix(0,1,-1,0,176.07400512695312,163.82400512695312)\" opacity=\"1\" style=\"display: none;\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,137.17599487304688,-126.9260025024414)\">\r\n                            <path fill=\"rgb(49,212,193)\" fill-opacity=\"1\" d=\" M100,-100 C100,-100 100,100 100,100 C100,100 -100,100 -100,100 C-100,100 -100,-100 -100,-100 C-100,-100 100,-100 100,-100z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </mask>\r\n                    </defs>\r\n                    <g clip-path=\"url(#animationMask_5zAfvzf1dC)\">\r\n                    <g mask=\"url(#ly_8wT9NMCFOm)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1.1200000047683716,0,0,1.1200000047683716,-227.7689971923828,23.412992477416992)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_eirOHWrE2j)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1,0,0,1,32.79100036621094,-122.40437316894531)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_DGhbnckuWJ)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1.4900000095367432,0,0,1.4900000095367432,-369.3290100097656,46.9530029296875)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_mWfHCt5xBo)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1.2999999523162842,0,0,1.2999999523162842,14.391006469726562,212.97300720214844)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_QzNQJQB589)\" style=\"display: block;\">\r\n                        <g transform=\"matrix(0.8500000238418579,0,0,0.8500000238418579,35.990997314453125,84.64059448242188)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_Q9nKSSZQft)\" style=\"display: block;\">\r\n                        <g transform=\"matrix(1,0,0,1,48.183876037597656,55.37300109863281)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_vsjwLVU8Fc)\" style=\"display: block;\">\r\n                        <g transform=\"matrix(1.059999942779541,0,0,1.059999942779541,-28.488983154296875,53.52194595336914)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_RXId2rpvgH)\" style=\"display: block;\">\r\n                        <g transform=\"matrix(1.2999999523162842,0,0,1.2999999523162842,68.35599517822266,62.97300720214844)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_vibB6E3A5O)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(0.8799999952316284,0,0,0.8799999952316284,33.35099792480469,-80.6669921875)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_cUySNz3Igr)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1,0,0,1,22.791000366210938,-118.62699890136719)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_Rlq6oXUmYQ)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1.25,0,0,1.25,-274.2090148925781,12.873000144958496)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    <g mask=\"url(#ly_MTeypdobWA)\" style=\"display: none;\">\r\n                        <g transform=\"matrix(1.2899999618530273,0,0,1.2899999618530273,207.27101135253906,21.553007125854492)\" opacity=\"1\">\r\n                        <g opacity=\"1\" transform=\"matrix(1,0,0,1,187.8769989013672,157.5019989013672)\">\r\n                            <path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M54.67599868774414,-157.5019989013672 C54.67599868774414,-157.5019989013672 3.825000047683716,20.701000213623047 3.825000047683716,20.701000213623047 C3.825000047683716,20.701000213623047 1.1260000467300415,42.30099868774414 1.1260000467300415,42.30099868774414 C1.1260000467300415,42.30099868774414 -1.1239999532699585,42.30099868774414 -1.1239999532699585,42.30099868774414 C-1.1239999532699585,42.30099868774414 -4.275000095367432,20.701000213623047 -4.275000095367432,20.701000213623047 C-4.275000095367432,20.701000213623047 -54.67499923706055,-157.5019989013672 -54.67499923706055,-157.5019989013672 C-54.67499923706055,-157.5019989013672 -187.8769989013672,-157.5019989013672 -187.8769989013672,-157.5019989013672 C-187.8769989013672,-157.5019989013672 -187.8769989013672,157.5019989013672 -187.8769989013672,157.5019989013672 C-187.8769989013672,157.5019989013672 -98.7760009765625,157.5019989013672 -98.7760009765625,157.5019989013672 C-98.7760009765625,157.5019989013672 -98.7760009765625,-25.200000762939453 -98.7760009765625,-25.200000762939453 C-98.7760009765625,-25.200000762939453 -101.0260009765625,-49.04999923706055 -101.0260009765625,-49.04999923706055 C-101.0260009765625,-49.04999923706055 -98.7760009765625,-49.5 -98.7760009765625,-49.5 C-98.7760009765625,-49.5 -35.775001525878906,157.5019989013672 -35.775001525878906,157.5019989013672 C-35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 35.775001525878906,157.5019989013672 C35.775001525878906,157.5019989013672 98.7770004272461,-49.5 98.7770004272461,-49.5 C98.7770004272461,-49.5 101.0250015258789,-49.04999923706055 101.0250015258789,-49.04999923706055 C101.0250015258789,-49.04999923706055 98.7770004272461,-25.200000762939453 98.7770004272461,-25.200000762939453 C98.7770004272461,-25.200000762939453 98.7770004272461,157.5019989013672 98.7770004272461,157.5019989013672 C98.7770004272461,157.5019989013672 187.8780059814453,157.5019989013672 187.8780059814453,157.5019989013672 C187.8780059814453,157.5019989013672 187.8780059814453,-157.5019989013672 187.8780059814453,-157.5019989013672 C187.8780059814453,-157.5019989013672 54.67599868774414,-157.5019989013672 54.67599868774414,-157.5019989013672z\"></path>\r\n                        </g>\r\n                        </g>\r\n                    </g>\r\n                    </g>\r\n                </svg>\r\n                </div> -->\r\n            </div>\r\n\r\n            <div class=\"col--1-3 home-page__flex\">\r\n\r\n                <div class=\"h-50\">\r\n                    <div class=\"grid grid--collapse h-100\">\r\n                        <div class=\"col--1-2\">\r\n                            <a class=\"home-page__project home-page__hover\" [routerLink]=\"['/development']\">\r\n\r\n                                <p class=\"home-page__project-link link link--line t--h4 t--semi-bold\">Development</p>\r\n\r\n                                <div class=\"home-page__img home-page__img--1-1\">\r\n                                    <img class=\"home-page__img-img\" src=\"assets/img/development.jpg\" alt=\"\">\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col--1-2\">\r\n                            <a class=\"home-page__project home-page__hover\" [routerLink]=\"['/projects']\">\r\n\r\n                                <p class=\"home-page__project-link link link--line t--h4 t--semi-bold\">Projects</p>\r\n\r\n                                <div class=\"home-page__img home-page__img--1-1\">\r\n                                    <img class=\"home-page__img-img\" src=\"assets/img/projects.png\" alt=\"\">\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"h-50\">\r\n                    <div class=\"grid grid--collapse\">\r\n                        <div class=\"col--1-1 p--h-lg\">\r\n                            <p class=\"t--h5\">\r\n                                We create a complete experience for the technical part of your business.\r\n                            </p>\r\n                            <p class=\"t--h5 t--semi-bold\">\r\n                                We provide our clients with a custom CRM and ERP systems that simplify all the working processes such as communications\r\n                                with clients and prospects, managing internal business processes and monitoring of all types of activities.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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

module.exports = "<div class=\"container-fluid products\">\n  <!-- Products backdrop -->\n  <div class=\"products__backdrop\">\n    <span class=\"col col--1\"></span>\n    <span class=\"col col--2\"></span>\n    <span class=\"col col--3\"></span>\n    <span class=\"col col--4\"></span>\n    <span class=\"col col--5\"></span>\n  </div>\n\n  <!-- Products content -->\n  <section class=\"block products__title\">\n    <h1 class=\"products__title-text t--title\">\n      <span class=\"products__title-text products__title-text--left d--b\">Pro</span>\n      <span class=\"products__title-text products__title-text--right d--b\">ducts</span>\n    </h1>\n  </section>\n  <main class=\"container products__content\">\n\n    <section class=\"grid\">\n      <h2 class=\"t--h2 t--bold\">Coming to watch a broadcast or got a meeting in the building?</h2>\n      <h3 class=\"t--h4\">Below you’ll find all you need to organise your visit</h3>\n      <p class=\"\" >\n        The programmes Zapplive, Opsporing Verzocht and Radar are all made in M.\n          You can also watch broadcasts live from our public gallery.\n      </p>\n      <div class=\"grid\">\n        <div class=\"col col--1-4 t--h4\"><img src=\"assets/img/page-prod/logo.png\" alt=\"logo\"></div>\n        <div class=\"col col--1-4 t--h4\"><img src=\"assets/img/page-prod/logo.png\" alt=\"logo\"></div>\n        <div class=\"col col--1-4 t--h4\"><img src=\"assets/img/page-prod/logo.png\" alt=\"logo\"></div>\n        <div class=\"col col--1-4 t--h4\"><img src=\"assets/img/page-prod/logo.png\" alt=\"logo\"></div>\n      </div>\n    </section>\n\n    <section class=\"grid\">\n      <h2 class=\"t--h2 t--bold\">Coming to watch a broadcast or got a meeting in the building?</h2>\n      <h3 class=\"t--h4 \">Below you’ll find all you need to organise your visit</h3>\n      <p class=\"\" >\n        The programmes Zapplive, Opsporing Verzocht and Radar are all made in M.\n          You can also watch broadcasts live from our public gallery.\n      </p>\n      <div class=\"grid\">\n        <div class=\"col col--1-4 t--h4\"><img src=\"/src/assets/img/page-prod/logo.svg.png\" alt=\"logo\"></div>\n        <div class=\"col col--1-4 t--h4\"><img src=\"/src/assets/img/page-prod/logo.svg.png\" alt=\"logo\"></div>\n        <div class=\"col col--1-4 t--h4\"><img src=\"/src/assets/img/page-prod/logo.svg.png\" alt=\"logo\"></div>\n        <div class=\"col col--1-4 t--h4\"><img src=\"/src/assets/img/page-prod/logo.svg.png\" alt=\"logo\"></div>\n      </div>\n    </section>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/products-page/products-page.component.less":
/*!******************************************************************!*\
  !*** ./src/app/pages/products-page/products-page.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products {\n  background: #000;\n  color: #fff;\n}\n.products .products__backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  min-height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  height: 100%;\n}\n.products .products__backdrop .col {\n  padding-right: 0;\n  padding-left: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 1px;\n  background-color: hsla(0, 0%, 100%, 0.16);\n  z-index: 2;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.products .products__backdrop .col.col--1 {\n  left: 16.66666667%;\n}\n.products .products__backdrop .col.col--2 {\n  left: 33.33333333%;\n}\n.products .products__backdrop .col.col--3 {\n  left: 50%;\n}\n.products .products__backdrop .col.col--4 {\n  left: 66.66666667%;\n}\n.products .products__backdrop .col.col--5 {\n  left: 83.33333333%;\n}\n.products .products__title-text {\n  width: 100%;\n  margin-top: 3em;\n  text-align: center;\n}\n.products .products__content {\n  max-width: 70.4%;\n}\n"

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

/***/ "./src/app/pages/projects-page/projects-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/projects-page/projects-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid projects\">\n  projects-page works!\n</div>\n"

/***/ }),

/***/ "./src/app/pages/projects-page/projects-page.component.less":
/*!******************************************************************!*\
  !*** ./src/app/pages/projects-page/projects-page.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects {\n  background: #000;\n  color: #fff;\n}\n"

/***/ }),

/***/ "./src/app/pages/projects-page/projects-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/projects-page/projects-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function() { return ProjectsPageComponent; });
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

var ProjectsPageComponent = /** @class */ (function () {
    function ProjectsPageComponent() {
    }
    ProjectsPageComponent.prototype.ngOnInit = function () {
    };
    ProjectsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects-page',
            template: __webpack_require__(/*! ./projects-page.component.html */ "./src/app/pages/projects-page/projects-page.component.html"),
            styles: [__webpack_require__(/*! ./projects-page.component.less */ "./src/app/pages/projects-page/projects-page.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsPageComponent);
    return ProjectsPageComponent;
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
/* harmony import */ var _pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/projects-page/projects-page.component */ "./src/app/pages/projects-page/projects-page.component.ts");
/* harmony import */ var _pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact-us-page/contact-us-page.component */ "./src/app/pages/contact-us-page/contact-us-page.component.ts");






var routes = [
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"], pathMatch: 'full' },
    { path: 'development', component: _pages_development_page_development_page_component__WEBPACK_IMPORTED_MODULE_2__["DevelopmentPageComponent"] },
    { path: 'products', component: _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_3__["ProductsPageComponent"] },
    { path: 'projects', component: _pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsPageComponent"] },
    { path: 'contact', component: _pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsPageComponent"] }
    // { path: 'order', component: HomePageComponent, pathMatch: 'full' },
    // { path: '**', component: HomePageComponent },
];
var route = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header .header__burger {\n  position: fixed;\n  display: inline-block;\n  top: 40px;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  padding: 14px 0;\n  z-index: 1;\n}\n.header .header__burger-line {\n  display: block;\n  width: 40px;\n  height: 2px;\n  background-color: #fff;\n  transition: all .4s;\n}\n.header .header__burger-line + .header__burger-line {\n  margin-top: 8px;\n}\n.header .header__body {\n  display: none;\n  height: 0;\n}\n.header .header__list {\n  margin: 0;\n  padding: 0;\n}\n.header .header__link {\n  font-size: 3em;\n  line-height: 3rem;\n  font-style: normal;\n  font-weight: 700;\n  font-stretch: normal;\n  letter-spacing: 0;\n  color: #000;\n  position: relative;\n  display: block;\n  text-decoration: none;\n  padding: 10px 0;\n}\n.header .header__link:after {\n  content: '';\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0;\n  background-color: #f44336;\n  transition: all .5s;\n  height: 5px;\n}\n.header .header__link:hover:after {\n  width: 100px;\n}\n.header.open .header__burger-line {\n  background-color: #000;\n}\n.header.open .header__burger-line:nth-child(1) {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.header.open .header__burger-line:nth-child(2) {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.header.open .header__burger-line + .header__burger-line {\n  margin-top: -1px;\n}\n.header.open .header__body {\n  display: block;\n  height: auto;\n  padding: 120px 0 60px;\n  transition: height 10s;\n}\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header \" [ngClass]=\"{'open': isShowMenu}\">\r\n    <button role=\"button\" aria-label=\"Menu Button\" class=\"header__burger\" (click)=\"showMenu()\">\r\n      <span class=\"header__burger-line header__burger-line--upper\"></span>\r\n      <span class=\"header__burger-line header__burger-line--lower\"></span>\r\n    </button>\r\n    <div class=\"container header__body  \">\r\n        <div class=\"grid\">\r\n            <div class=\"col--2-5 push--1-5\">\r\n                <ul class=\"header__list\">\r\n                    <li class=\"header__item\">\r\n                        <a [routerLink]=\"['/']\" class=\"header__link\">Home</a>\r\n                    </li>\r\n                    <li class=\"header__item\">\r\n                         <a [routerLink]=\"['/development']\" class=\"header__link\">Development</a>\r\n                    </li>\r\n                    <li class=\"header__item\">\r\n                        <a [routerLink]=\"['/products']\" class=\"header__link\">Products</a>\r\n                    </li>\r\n                    <li class=\"header__item\">\r\n                        <a [routerLink]=\"['/projects']\" class=\"header__link\">Projects</a>\r\n                    </li>\r\n                    <li class=\"header__item\">\r\n                        <a [routerLink]=\"['/contact']\" class=\"header__link\">Contact Us</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col--1-5 push--1-5\">\r\n                <p>SolidExpert LOGO</p>\r\n                <p>1231231</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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