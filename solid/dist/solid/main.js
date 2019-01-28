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

module.exports = "<!-- <app-header ></app-header> -->\n<app-nav></app-nav>\n<!-- <app-header [ngClass]=\"{'open': isShowMenu}\"></app-header> -->\n<router-outlet></router-outlet>\n<!-- <router-outlet [ngClass]=\"{'open': isShowMenu}\"></router-outlet> -->\n<app-footer></app-footer>\n"

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
/* harmony import */ var _pages_products_list_page_products_list_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/products-list-page/products-list-page.component */ "./src/app/pages/products-list-page/products-list-page.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
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
                _pages_products_list_page_products_list_page_component__WEBPACK_IMPORTED_MODULE_23__["ProductsListPageComponent"],
                _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_24__["AboutPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _routing__WEBPACK_IMPORTED_MODULE_17__["route"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"].forRoot(),
                ng_inline_svg__WEBPACK_IMPORTED_MODULE_22__["InlineSVGModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                ng_inline_svg__WEBPACK_IMPORTED_MODULE_22__["InlineSVGModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"about\">\n\n</div> -->\n<section class=\"block block--header\">\n  <h1 class=\"block__title t--c\">ABOUT US</h1>\n  <!-- <h2 class=\"block__subtitle t--c t--gray\"> There will be a slogan  </h2>\n  <div class=\"block__line\"> \n    <ul class=\"block__dots\">\n      <li class=\"block__dots-item block__dots-item--holder block__dots-item--active\">\n        <p class=\"block__text block__text--translate\">Text</p>\n      </li>\n      <li class=\"block__dots-item block__dots-item--holder\">\n        <p class=\"block__text block__text--translate\">Text</p>\n      </li>\n      <li class=\"block__dots-item block__dots-item--holder\">\n        <p class=\"block__text block__text--translate\">Text</p>\n      </li>\n      <li class=\"block__dots-item block__dots-item--holder\">\n        <p class=\"block__text block__text--translate\">Text</p>\n      </li>\n    </ul>\n  </div> -->\n</section>\n<section class=\"block block--body\">\n  <div class=\"grid grid--collapse\">\n    <div class=\"col--md-2-4 col--sm-1-1 col--xs-1-1 col--gray\">\n      <p class=\"block__text\">\n        With a solid software development experience, we’ve started as a group of like-minded people to help companies\n        on the way of their digital transformation. Shaping our team, we always strive to choose the best of the best\n        to serve you on your project. Nowadays we’re a company of talented people who can bring to life Web and Mobile\n        solutions of any complexity.\n      </p>\n      <p class=\"block__text\">\n        Our mission is to help our clients to achieve their business goals. For deeper understanding of our customers’\n        needs, we carefully examine their business and immerse deeply in the essence of the task.\n      </p>\n      <p class=\"block__text\">\n        We meet deadlines and guarantee the quality, since time is the only finite and most precious resource.\n      </p>\n      <p class=\"block__text\">\n        We build efficient means of communication and provide full support at all the stages of cooperation.\n      </p>\n    </div>\n    <div class=\"col--lg-1-4 col--md-1-2 col--sm-1-1 col--xs-1-1 col--white flex flex--column flex--center p--md\">\n      <h3 class=\"block__subtitle\">Let’s talk business! </h3>\n      <p class=\"block__text\">\n        Reach your goals and grow your business with us.\n      </p>\n      <a [routerLink]=\"['/contact']\" routerLinkActive=\"active\" class=\"btn btn--blue btn--lg\">Contact Us</a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.less":
/*!************************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\n  min-height: auto;\n  padding: 100px 0;\n  overflow: hidden;\n}\n.block--header {\n  background-color: #252525;\n  color: #fff;\n}\n.block--body {\n  padding: 0;\n  border-bottom: 1px solid #DFDFDF;\n}\n.block .col--gray {\n  background: #FBFBFB;\n  border-right: 1px solid #DFDFDF;\n  padding: 8rem 4rem 8rem 8rem;\n}\n.block .block__line {\n  margin: 0 auto;\n  width: 50%;\n  height: 2px;\n  background-color: #e4e4e4;\n  position: relative;\n  max-width: 550px;\n}\n.block .block__dots {\n  position: relative;\n}\n.block .block__dots-item {\n  position: absolute;\n  top: -6px;\n  width: 14px;\n  height: 14px;\n  background-color: #252525;\n  display: inline-block;\n  border: 2px solid #e4e4e4;\n  border-radius: 100%;\n}\n.block .block__dots-item--holder:nth-child(1) {\n  left: 0;\n}\n.block .block__dots-item--holder:nth-child(2) {\n  left: 33.333333%;\n}\n.block .block__dots-item--holder:nth-child(3) {\n  left: 66.666666%;\n}\n.block .block__dots-item--holder:nth-child(4) {\n  left: 100%;\n}\n.block .block__dots-item--active::after {\n  content: \"\";\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background-color: #0fb239;\n  top: 2px;\n  left: 2px;\n  border-radius: 100%;\n}\n.block .block__title {\n  font-size: 8rem;\n  line-height: 11.2rem;\n  font-weight: 700;\n  margin: 0;\n}\n.block .block__subtitle {\n  font-size: 4rem;\n  line-height: 4.5rem;\n  font-weight: 500;\n  margin-bottom: 3rem;\n}\n.block .block__text {\n  text-align: justify;\n  font-size: 2rem;\n  line-height: 2.4rem;\n  font-weight: 400;\n  margin-bottom: 3rem;\n}\n.block .block__text--translate {\n  -webkit-transform: translate(-20px, 15px);\n          transform: translate(-20px, 15px);\n}\n@media only screen and (min-width: 1600px) {\n  .block .block__text {\n    font-size: 1.5rem;\n  }\n}\n@media only screen and (min-width: 1220px) and (max-width: 1599px) {\n  .block {\n    min-height: 30vh;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .block {\n    min-height: 30vh;\n  }\n  .block .block__title {\n    font-size: 6rem;\n  }\n  .block .block__subtitle {\n    font-size: 3rem;\n  }\n  .block .col--gray {\n    padding: 4rem 2rem 4rem 2rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .block {\n    min-height: 30vh;\n  }\n  .block .block__title {\n    font-size: 3rem;\n    line-height: 3.2rem;\n    margin-bottom: 2rem;\n  }\n  .block .block__subtitle {\n    font-size: 2em;\n    line-height: 3rem;\n    margin-bottom: 2rem;\n  }\n  .block .block__text {\n    font-size: 1.5rem;\n    line-height: 1.5rem;\n    margin-bottom: 2rem;\n  }\n  .block .col--white {\n    align-items: center;\n  }\n  .block .col--gray {\n    padding: 4rem 2rem;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .block {\n    min-height: 30vh;\n  }\n  .block .block__title {\n    font-size: 1.8rem;\n    line-height: 2rem;\n    margin-bottom: 1rem;\n  }\n  .block .block__subtitle {\n    font-size: 1.2rem;\n    line-height: 1.5rem;\n    margin-bottom: 1rem;\n  }\n  .block .block__text {\n    font-size: 0.8rem;\n    line-height: 1rem;\n    margin-bottom: 1rem;\n  }\n  .block .block__text--translate {\n    -webkit-transform: translate(-7px, 15px);\n            transform: translate(-7px, 15px);\n  }\n  .block .btn {\n    font-size: 1.5rem;\n    line-height: 2.4rem;\n  }\n  .block .col--white {\n    align-items: center;\n  }\n  .block .col--gray {\n    padding: 2rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
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

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/pages/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.less */ "./src/app/pages/about-page/about-page.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-us-page/contact-us-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/contact-us-page/contact-us-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n  <div class=\"contact__left\">\n    <div class=\"contact__left-img\">\n      <img src=\"https://sevenstars.nl/Assets/img/contact/contact-maico.jpg\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"contact__body\">\n    <div class=\"grid\">\n      <div class=\"col--xlg-2-3 col--lg-2-3 col--md-2-3 col--sm-1-1 col--xs-1-1\">\n        <h2 class=\"t--h3 t--blue\">Have a question?</h2>\n\n        <form [formGroup]=\"requestForm\" (ngSubmit)=\"onSubmit()\">\n          <div>\n            <label class=\"label\">Your name</label>\n            <div class=\"input-group input-group--required\" [ngClass]=\"{ 'isError': f.name.errors && (f.name.dirty || f.name.touched) }\">\n              <input\n               class=\"input-group__input\"\n               type=\"text\"\n               formControlName=\"name\"\n               name=\"userName\">\n            </div>\n          </div>\n          <div>\n            <label class=\"label\">E-mail address</label>\n            <div class=\"input-group input-group--required\" [ngClass]=\"{ 'isError': f.email.errors && (f.email.dirty || f.email.touched) }\">\n              <input\n              class=\"input-group__input\"\n              type=\"text\"\n              formControlName=\"email\"\n              name=\"userEmail\">\n            </div>\n          </div>\n          <div>\n            <label class=\"label\">Telephone number</label>\n            <input\n            class=\"input\"\n            type=\"text\"\n            formControlName=\"telephone\"\n            name=\"userPhone\">\n          </div>\n          <div>\n            <label class=\"label\">Your message</label>\n            <textarea class=\"input\" rows=\"10\" name=\"userMessage\"></textarea>\n          </div>\n\n          <div class=\"checkbox\">\n            <input class=\"checkbox__input\" type=\"checkbox\" id=\"privacy-statement\" formControlName=\"privacy\">\n            <label class=\"checkbox__label\" for=\"privacy-statement\">\n              I do authorize SolidExpert, Ltd. to process my personal data and agree with the privacy statement\n            </label>\n          </div>\n\n          <hr class=\"line line--sm m--v\">\n\n          <div class=\"contact__question-send\">\n            <button class=\"btn btn--blue btn--md\" [disabled]=\"f.name.errors || f.email.errors || f.privacy.invalid\"\n              (click)=\"send()\">Send</button>\n          </div>\n        </form>\n\n      </div>\n\n      <div class=\"col--xlg-1-3 col--lg-1-3 col--md-1-3 col--sm-1-1 col--xs-1-1\">\n        <h3 class=\"t--h3 t--blue m--b-md\">Main office</h3>\n\n        <div class=\"contact__address\">\n          <p class=\"contact__address-text t--semi-bold\">SolidExpert Ltd</p>\n          <p class=\"contact__address-text\">Nemiga 3, Minsk</p>\n          <a href=\"tel:+1(919)3233612\" class=\"contact__address-link\">+1 (919) 323-36-12</a>\n          <a href=\"mailto:info@solidexpert.pro\" class=\"contact__address-link\">info@solidexpert.pro</a>\n        </div>\n\n\n        <h3 class=\"t--h3 t--blue m--v-md\">Social media</h3>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <iframe class=\"contact__map\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.564779469687!2d27.55035277568408!3d53.90393915930507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfeba2244dab%3A0x2fc998fd3e91b368!2sNemiga+3+Shopping+Mall!5e0!3m2!1sen!2sby!4v1544821022807\"\n  frameborder=\"0\" style=\"border:0\" allowfullscreen>\n</iframe> -->\n"

/***/ }),

/***/ "./src/app/pages/contact-us-page/contact-us-page.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/pages/contact-us-page/contact-us-page.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.contact .contact__left {\n  display: block;\n  width: 50%;\n  max-width: 50%;\n  max-height: 100vh;\n  overflow: hidden;\n}\n.contact .contact__left-img {\n  background-image: url(\"/assets/img/contact-page/contact.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  -webkit-clip-path: polygon(0 0, 100% 0, 88% 100%, 0% 100%);\n  clip-path: polygon(0 0, 100% 0, 88% 100%, 0% 100%);\n}\n.contact .contact__left-img img {\n  opacity: 0;\n  visibility: hidden;\n}\n.contact .contact__body {\n  display: block;\n  width: 50%;\n  min-height: 100vh;\n  padding: 100px;\n}\n.contact .contact__body .input:focus {\n  border-color: #54a4ff;\n}\n.contact .contact__address-text {\n  display: block;\n  margin: 0;\n  line-height: 1.5;\n}\n.contact .contact__address-link {\n  display: block;\n  margin: 0;\n  line-height: 1.5;\n  color: #333;\n  text-decoration: underline;\n}\n.contact .contact__question-send {\n  text-align: center;\n}\n.contact .contact__question-send .btn {\n  border: 2px solid #54a4ff;\n}\n.contact .contact__question-send .btn:hover {\n  border-color: #fff;\n}\n@media only screen and (min-width: 1600px) {\n}\n@media only screen and (min-width: 1220px) and (max-width: 1599px) {\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .contact .contact__body {\n    padding: 100px 50px;\n  }\n  .contact .contact__question-send {\n    margin-bottom: 20px;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .contact {\n    flex-wrap: wrap;\n  }\n  .contact .contact__left {\n    display: none;\n  }\n  .contact .contact__body {\n    width: 100%;\n    padding: 100px 30px;\n  }\n  .contact .contact__question-send {\n    margin-bottom: 20px;\n  }\n}\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function ContactUsPageComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.userName = '';
        this.userPhone = '';
        this.userEmail = '';
        this.userMessage = '';
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
    ContactUsPageComponent.prototype.send = function () {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            //  .set('is_company',"false")
            .set('userName', this.userName)
            .set('userPhone', this.userPhone)
            .set('userEmail', this.userEmail)
            .set('userMessage', this.userMessage)
            .set('return_url', 'http://solidexpert.ltd')
            .set('web_form_key', '3a51d614-03b1-43b9-bca2-a3ff717ca08e')
            .set('notify_list', '61560477-f93c-11e8-94e2-6e81647443e7')
            .set('managers_list', '61560477-f93c-11e8-94e2-6e81647443e7,53a72559-aa04-4ae5-89e2-898cb8fc8f23')
            .set('share_type', '0');
        return this.http.post('http://office.solidexpert.ltd/products/crm/httphandlers/webtoleadfromhandler.ashx', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        }).subscribe(function (x) { });
    };
    ContactUsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us-page',
            template: __webpack_require__(/*! ./contact-us-page.component.html */ "./src/app/pages/contact-us-page/contact-us-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-us-page.component.less */ "./src/app/pages/contact-us-page/contact-us-page.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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

module.exports = "<div class=\"dp container-fluid t--white\">\n  <!-- Development backdrop -->\n  <div class=\"dp__backdrop\">\n    <span class=\"col col--1\"></span> <span class=\"col col--2\"></span>\n    <span class=\"col col--3\"></span> <span class=\"col col--4\"></span>\n    <span class=\"col col--5\"></span>\n  </div>\n  <!-- Development content -->\n  <header class=\"dp__title block\">\n    <h1 class=\"dp__title-text position--r t--c t--title m--t-xxlg \">\n      <span class=\"dp__title-text dp__title-text--left position--a\">Devel</span>\n      <span class=\"dp__title-text dp__title-text--right position--a\"\n        >opment</span\n      >\n    </h1>\n  </header>\n  <main class=\"dp__content container \">\n    <section class=\"dp__content-introduction block \">\n      <h2 class=\"t--h2 t--bold\">\n        Title\n      </h2>\n      <h3 class=\"t--h4 \">\n        Subtitle\n      </h3>\n      <p class=\"m--v-lg\">\n          Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\n          Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\n      </p>\n    </section>\n    <section class=\"dp__content-facilities block \">\n      <h2 class=\"t--h1 t--bold\">Title</h2>\n      <h3 class=\"t--h4\">Subtitle</h3>\n      <p class=\"m--v-lg\">\n          Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\n          Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\n      </p>\n    </section>\n    <section class=\"dp__content-examples\">\n      <div class=\"dp__content-examples-headline grid \">\n        <div class=\"col col--1-4 t--h4\">Café</div>\n        <div class=\"col col--1-4 t--h4\">Restaurant</div>\n        <div class=\"col col--1-4 t--h4\">Lounge</div>\n        <div class=\"col col--1-4 t--h4\"></div>\n      </div>\n      <div class=\"grid \">\n        <div class=\"dp__content-examples-slider col col--1-1 \">\n          <app-slider></app-slider>\n        </div>\n      </div>\n    </section>\n    <div class=\"grid grid--collapse\">\n      <section class=\"dp__content-info col col--1-2 \">\n        <h2 class=\"t--h1 t--bold  m--v-lg\">Title</h2>\n        <h3 class=\"t--h4 t--bold \">Adres</h3>\n        <p>’s Gravelandseweg 80 1217 EW Hilversum</p>\n        <a class=\"t--uppercase link link--line\" href=\"\">View in Google Maps</a>\n        <h3 class=\"t--h4 t--bold m--v-md\">How to get to M</h3>\n        <p>\n            Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\n            Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\n        </p>\n        <h3 class=\"t--h4 t--bold m--v-md\">Parking</h3>\n        <p>\n            Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\n            Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\n        </p>\n        <h3 class=\"t--h4 t--bold m--v-md\">Accessibility</h3>\n        <p>\n            Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\n            Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next Simple next\n        </p>\n      </section>\n      <section class=\"dp__content-news col col--1-2 \">\n        <h2 class=\"t--h1 t--bold  m--v-lg\">Agenda</h2>\n        <div class=\"dp__content-news-item position--r  m--v-md\">\n          <p class=\"t--md t--uppercase m\">29 November | 18:00 | M-gebouw</p>\n          <p class=\"t--h5 t--bold\">GrowthMatters workshop: The war on Talent</p>\n        </div>\n        <div class=\"dp__content-news-item position--r m--v-md\">\n        <p class=\"t--md t--uppercase m\">07 December | 12:00 | M-gebouw</p>\n        <p class=\"t--h5 t--bold\">\n          Tineke Live with live performances of Venice & Douwe Bob\n        </p>\n      </div>\n      </section>\n    </div>\n  </main>\n  <a class=\"dp__team block  d--b h--400 \">\n    <div class=\"dp__team-backdrop position--a\"></div>\n    <div class=\"dp__team-inner position--a\">\n      <h2 class=\"t--h1 t--bold\">Who's based here?</h2>\n      <p class=\"t--h5 t--uppercase link link--line\">View all residents</p>\n    </div>\n  </a>\n</div>\n"

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

module.exports = "<div class=\"home-page\">\n  <div class=\"container-fluid\">\n    <!-- Home backdrop -->\n\n    <div class=\"home-page__backdrop\">\n      <span class=\"col col--1\"></span>\n      <span class=\"col col--2\"></span>\n      <span class=\"col col--3\"></span>\n      <span class=\"col col--4\"></span>\n      <span class=\"col col--5\"></span>\n    </div>\n\n\n    <!-- Home content -->\n    <div class=\"grid grid--collapse\">\n      <a href=\"\" class=\"col--1-3 p--h-lg position--r home-page__hover link link--reset\">\n        <div class=\"home-page__img home-page__img--1-1\">\n          <img class=\"home-page__img-img\" src=\"assets/img/about.jpg\" alt=\"\" />\n        </div>\n\n        <div class=\"home-page__flex\">\n          <div>&nbsp;</div>\n          <div>\n            <h1 class=\"t--title\">About <span class=\"t--red\">us</span></h1>\n            <h2>Welkom in M, het nieuwe mediahart van Nederland</h2>\n          </div>\n          <div><a href=\"\" class=\"link link--line t--h5\">Lees meer over</a></div>\n        </div>\n      </a>\n\n      <div class=\"col--1-3\"></div>\n\n      <div class=\"col--1-3 home-page__flex\">\n        <div class=\"h-50\">\n          <div class=\"grid grid--collapse h-100\">\n            <div class=\"col--1-2\">\n              <a class=\"home-page__project home-page__hover\" [routerLink]=\"['/products']\">\n                <p class=\"home-page__project-link link link--line t--h4 t--semi-bold\">\n                  Products\n                </p>\n\n                <div class=\"home-page__img home-page__img--1-1\">\n                  <img class=\"home-page__img-img\" src=\"assets/img/development.jpg\" alt=\"\" />\n                </div>\n              </a>\n            </div>\n            <div class=\"col--1-2\">\n              <a class=\"home-page__project home-page__hover\" [routerLink]=\"['/services']\">\n                <p class=\"home-page__project-link link link--line t--h4 t--semi-bold\">\n                  Services\n                </p>\n\n                <div class=\"home-page__img home-page__img--1-1\">\n                  <img class=\"home-page__img-img\" src=\"assets/img/projects.png\" alt=\"\" />\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"h-50\">\n          <div class=\"grid grid--collapse\">\n            <div class=\"col--1-1 p--h-lg\">\n              <p class=\"t--h5\">\n                We create a complete experience for the technical part of your\n                business.\n              </p>\n              <p class=\"t--h5 t--semi-bold\">\n                We provide our clients with a custom CRM and ERP systems that\n                simplify all the working processes such as communications with\n                clients and prospects, managing internal business processes and\n                monitoring of all types of activities.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<section class=\"block block--about\">\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\n\n  <div class=\"block__overlay block__overlay--video\">\n    <video class=\"block__overlay--video-item\" autoplay loop poster=\"/assets/video/about/poster.jpg\" muted plays-inline>\n      <source src=\"/assets/video/about/movie.mp4\" type=\"video/mp4\" />\n      <source src=\"/assets/video/about/movie.webm\" type=\"video/webm\" />\n      Your browser does not support the video tag.\n    </video>\n  </div>\n\n  <div class=\"block__body\">\n    <div class=\"container\">\n      <div class=\"grid \">\n        <div class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1 push--xlg-1-5 push--lg-1-5 t--c\">\n          <h1 class=\"block__title\">\n            YOUR SOLID SOLUTIONS\n          </h1>\n          <h2 class=\"block__subtitle\">\n            Web & Mobile Custom Software\n            with Core Expertise in CRM Development & Implementation.\n          </h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"block block--blue\">\n  <app-grid-line></app-grid-line>\n\n  <div class=\"block__overlay\">8+</div>\n\n  <div class=\"block__body\">\n    <div class=\"container\">\n      <div class=\"grid\">\n        <div class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1\">\n          <h2 class=\"block__title\">\n            More than 8 years of experience in the software development\n            services.\n          </h2>\n          <h3 class=\"block__subtitle\">\n            We’ll deliver delightful digital experiences for your business and\n            lift all the technical issues off your shoulders.\n          </h3>\n          <ul class=\"block__list m--reset\">\n            <li class=\"block__list-item\">Mobile App Development</li>\n            <li class=\"block__list-item\">Web Development</li>\n            <li class=\"block__list-item\">UX/UI</li>\n            <li class=\"block__list-item\">Your Reliable Dedicated Team</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- <section class=\"block__stack \">\n  <div class=\"block__stack-body grid grid--collapse h-100vh \">\n    <div class=\"block__stack-item col--1-3 p--md\">\n      <h2 class=\"block__title\">\n        Custom Web\n      </h2>\n      <p class=\"block__text\">\n        We listen to you carefully because it’s important to deliver exactly what you requested.\n        We lavish attention on you to deliver even more than you expected.\n        We share our experience in building solid and reasonable architecture & solutions.\n\n        Today the web world offers a variety of solutions both for your business and your customers. We consider the\n        latest trends and choose the most efficient ones to bring you from MVP to scalable products.\n      </p>\n    </div>\n    <div class=\"block__stack-item col--1-3 p--md\">\n      <h2 class=\"block__title\">\n        Mobile App\n      </h2>\n      <p class=\"block__text\">\n        With millions of operations that smart phone users process daily, the mobile industry has become an effective\n        channel to extend your business. The proper usage of these technologies may contribute a lot to businesses by\n        lowering expenses and enhancing productivity within the major business functions.\n      </p>\n    </div>\n    <div class=\"block__stack-item col--1-3 p--md\">\n      <h2 class=\"block__title\">\n        UX/UI DESIGN\n      </h2>\n      <p class=\"block__text\">\n        Something that looks great but is difficult to use is an example of great UI and poor UX. While something very\n        usable that looks terrible is an example of great UX and poor UI.\n        By accommodating the best UI/UX practices and utilizing the amenities of our onsite photo studio, our team is\n        able to create designs of any complexity to develop your branding and advertising campaigns.\n      </p>\n    </div>\n    <div class=\"block__stack-item col--1-3 p--md\">\n      <ul class=\"block__list m--reset\">\n        With the technical expertise in Node.js, AngularJS and React our web development team is able to cope with any\n        engineering challenge to create:\n        <li class=\"block__list-item\">SaaS and Cloud Computing;</li>\n        <li class=\"block__list-item\">CRM & ERP Systems;</li>\n        <li class=\"block__list-item\">High-load Applications;</li>\n        <li class=\"block__list-item\">Enterprise & Intranet Platforms;</li>\n        <li class=\"block__list-item\">E-commerce Solutions;</li>\n        <li class=\"block__list-item\">Geo-based Applications.</li>\n      </ul>\n    </div>\n    <div class=\"block__stack-item col--1-3 p--md\">\n      <ul class=\"block__list m--reset\">\n        By handling the following technologies:\n        <li class=\"block__list-item\">Swift;</li>\n        <li class=\"block__list-item\">Objective-C;</li>\n        <li class=\"block__list-item\">Java;</li>\n        <li class=\"block__list-item\">Kotlin;</li>\n        <li class=\"block__list-item\">React Native;</li>\n        <li class=\"block__list-item\">Cordova;</li>\n        <li class=\"block__list-item\">Ionic;</li>\n        <li class=\"block__list-item\">PhoneGap.</li>\n      </ul>\n    </div>\n    <div class=\"block__stack-item col--1-3 p--md\">\n      <ul class=\"block__list m--reset\">\n        Our services include:\n        <li class=\"block__list-item\">Product Structure and Strategy\n          ;</li>\n        <li class=\"block__list-item\">Prototyping;</li>\n        <li class=\"block__list-item\">Design Research\n          ;</li>\n        <li class=\"block__list-item\">UI Prototyping;</li>\n        <li class=\"block__list-item\">Branding and Graphic Development;</li>\n        <li class=\"block__list-item\">Interactivity and Animation;</li>\n        <li class=\"block__list-item\">Adaptation to All the Devices Screen-size;</li>\n      </ul>\n    </div>\n  </div>\n</section> -->\n\n<section class=\"block block--gray\">\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\n\n  <div class=\"block__overlay\">189K</div>\n\n  <div class=\"block__body\">\n    <div class=\"container\">\n      <div class=\"grid\">\n        <div class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1\">\n          <h2 class=\"block__title\">\n            More than 189K of unique users of our system per 3 years\n          </h2>\n\n          <p class=\"block__text\">Around 1200 of new visitors per day.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"block block--violet\">\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\n\n  <div class=\"block__overlay\">\n    94%\n  </div>\n\n  <div class=\"block__body\">\n    <div class=\"container\">\n      <div class=\"grid\">\n        <div class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1 \">\n          <h2 class=\"block__title\">\n              According to the recent survey, more than 94% of our clients are assured to\n              continue working with us in future & to recommend our services to their contacts.\n          </h2>\n          <p class=\"block__text\">\n            We invite you to explore their comments on your own.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"block block--white\">\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\n\n  <div class=\"block__overlay\">«</div>\n\n  <div class=\"block__body\">\n    <div class=\"container\">\n      <app-slider></app-slider>\n      <!-- <div class=\"grid\">\n        <div class=\"col--xlg-4-6 col--lg-4-6 col--md-1-1 col--sm-1-1 col--xs-1-1 \">\n          <app-slider></app-slider>\n        </div>\n        <div class=\"col--xlg-1-6 col--lg-1-6 col--md-1-1 col--sm-1-1 col--xs-1-1 push--lg-1-6 \">\n          <div class=\"block__logo flex flex--center flex--wrap\">\n            <div class=\"block__logo-item\" [inlineSVG]=\"'/assets/img/logo/SolidExpert-logo-color.svg'\"></div>\n            <div class=\"block__logo-item\" [inlineSVG]=\"'/assets/img/logo/SolidExpert-logo-color.svg'\"></div>\n            <div class=\"block__logo-item\" [inlineSVG]=\"'/assets/img/logo/SolidExpert-logo-color.svg'\"></div>\n            <div class=\"block__logo-item\" [inlineSVG]=\"'/assets/img/logo/SolidExpert-logo-color.svg'\"></div>\n          </div>\n        </div>\n      </div> -->\n    </div>\n  </div>\n</section>\n\n<section class=\"block block--gray\">\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\n\n  <div class=\"block__overlay\">18+</div>\n\n  <div class=\"block__body\">\n    <div class=\"container\">\n      <div class=\"grid\">\n        <div class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1\">\n          <h2 class=\"block__title\">\n            Are you eager to make the digital world better for everyone?\n          </h2>\n          <p class=\"block__text\">\n            Join our ambitious and friendly team to make it happen!\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.less":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 100px 0;\n  overflow: hidden;\n}\n.block.block--about {\n  align-items: center;\n  justify-content: flex-end;\n  background-color: #252525;\n  color: #fff;\n}\n.block.block--gray {\n  align-items: center;\n  justify-content: center;\n  background-color: #252525;\n  color: #fff;\n}\n.block.block--gray .block__title {\n  color: #fff;\n}\n.block.block--gray .block__overlay {\n  color: #303030;\n}\n.block.block--violet {\n  align-items: center;\n  justify-content: center;\n  background-color: #885DF1;\n  color: #fff;\n}\n.block.block--violet .block__title {\n  color: #fff;\n}\n.block.block--violet .block__overlay {\n  color: #744ADD;\n}\n.block.block--white {\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  color: #000;\n}\n.block.block--white .block__overlay {\n  color: #f8f8f8;\n}\n.block.block--blue {\n  align-items: center;\n  justify-content: center;\n  background-color: #54a4ff;\n  color: #fff;\n}\n.block.block--blue .block__title {\n  color: #fff;\n}\n.block.block--blue .block__overlay {\n  color: #4099ff;\n}\n.block .block__title {\n  font-size: 4rem;\n  line-height: 4.2rem;\n  font-weight: 600;\n  margin-bottom: 3rem;\n}\n.block .block__subtitle {\n  font-size: 2.4rem;\n  line-height: 3rem;\n  font-weight: 500;\n  margin-bottom: 3rem;\n}\n.block .block__text {\n  position: relative;\n  font-size: 1rem;\n  line-height: 1.4rem;\n  font-weight: 500;\n  margin-bottom: 3rem;\n}\n.block .block__list {\n  position: relative;\n  font-size: 1rem;\n  line-height: 1.4rem;\n  font-weight: 500;\n  margin-bottom: 3rem;\n}\n.block .block__list-item {\n  position: relative;\n  line-height: 2rem;\n  padding-left: 20px;\n}\n.block .block__list-item:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -2px;\n  display: block;\n  width: 4px;\n  height: 4px;\n  background-color: #fff;\n}\n.block .block__body {\n  position: relative;\n  z-index: 10;\n}\n.block .block__overlay {\n  position: absolute;\n  font-size: 60rem;\n  font-weight: 900;\n  z-index: 1;\n}\n.block .block__overlay.block__overlay--video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  border: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.block .block__overlay.block__overlay--video:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n}\n.block .block__logo {\n  position: relative;\n}\n.block .block__logo-item {\n  width: 12rem;\n  margin: 1rem;\n  height: 3rem;\n}\n@media only screen and (min-width: 1600px) {\n  .block .block__text {\n    font-size: 1.5rem;\n  }\n  .block .block__list {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n  .block .block__logo {\n    flex-direction: column;\n  }\n}\n@media only screen and (min-width: 1220px) and (max-width: 1599px) {\n  .block {\n    padding: 60px 0;\n  }\n  .block .block__overlay {\n    font-size: 56rem;\n  }\n  .block .block__logo {\n    flex-direction: column;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .block {\n    min-height: 50vh;\n  }\n  .block .block__body {\n    padding-top: 50px;\n  }\n  .block .block__overlay {\n    font-size: 45rem;\n  }\n  .block .block__logo-item {\n    width: 10rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .block {\n    min-height: 50vh;\n    padding: 60px 0;\n  }\n  .block.block--about {\n    padding-top: 100px;\n  }\n  .block .block__overlay {\n    font-size: 30rem;\n  }\n  .block .block__title {\n    font-size: 3rem;\n    line-height: 3.2rem;\n    margin-bottom: 2rem;\n  }\n  .block .block__subtitle {\n    font-size: 2rem;\n    line-height: 3rem;\n  }\n  .block .block__text {\n    font-weight: 600;\n  }\n  .block .block__logo-item {\n    width: 8rem;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .block {\n    min-height: 50vh;\n    padding: 60px 0;\n  }\n  .block.block--about {\n    padding-top: 100px;\n  }\n  .block .block__overlay {\n    font-size: 16rem;\n  }\n  .block .block__title {\n    font-size: 1.5rem;\n    line-height: 2rem;\n    margin-bottom: 1rem;\n  }\n  .block .block__subtitle {\n    font-size: 1.2rem;\n    line-height: 1.5rem;\n  }\n  .block .block__text {\n    font-size: 0.8rem;\n    font-weight: 600;\n  }\n  .block .block__logo-item {\n    width: 6rem;\n    margin: 0.5rem;\n  }\n}\n"

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
            styles: [__webpack_require__(/*! ./main-page.component.less */ "./src/app/pages/main-page/main-page.component.less")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/products-list-page/products-list-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/products-list-page/products-list-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block block--green\" *ngFor=\"let item of productList\">\n  <div class=\"block__overlay block__overlay--img\" *ngIf=\"item?.background_image\" [style.background-image]=\"'url(' + item?.background_image + ')'\"></div>\n\n  <div class=\"block__body\">\n    <div class=\"container\">\n      <div class=\"grid\">\n        <div class=\"col--1-1\">\n          <h1 class=\"block__title\" *ngIf=\"item?.title\">{{item?.title}}</h1>\n          <h2 class=\"block__subtitle\" *ngIf=\"item?.subtitle\">\n            {{item?.subtitle}}\n          </h2>\n        </div>\n\n        <div class=\"col--2-5 col--sm-4-5 col--xs-4-5 push--1-5\" *ngIf=\"item?.text\">\n          <p class=\"block__text\">\n            {{item?.text}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/products-list-page/products-list-page.component.less":
/*!****************************************************************************!*\
  !*** ./src/app/pages/products-list-page/products-list-page.component.less ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 100px 0;\n  overflow: hidden;\n}\n.block.block--green {\n  align-items: center;\n  justify-content: center;\n  background-color: #0fb239;\n  color: #fff;\n}\n.block .block__title {\n  font-size: 8rem;\n  line-height: 11.2rem;\n  font-weight: 700;\n  margin-bottom: 3rem;\n}\n.block .block__subtitle {\n  font-size: 4rem;\n  line-height: 4.5rem;\n  font-weight: 500;\n  margin-bottom: 3rem;\n}\n.block .block__text {\n  position: relative;\n  font-size: 2rem;\n  line-height: 2.4rem;\n  font-weight: 400;\n  margin-bottom: 3rem;\n}\n.block .block__body {\n  width: 100%;\n  position: relative;\n  z-index: 10;\n}\n.block .block__overlay {\n  position: absolute;\n  font-size: 60rem;\n  font-weight: 900;\n  z-index: 1;\n}\n.block .block__overlay.block__overlay--img {\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  border: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n@media only screen and (min-width: 1600px) {\n  .block .block__text {\n    font-size: 1.5rem;\n  }\n}\n@media only screen and (min-width: 1220px) and (max-width: 1599px) {\n  .block {\n    padding: 60px 0;\n  }\n  .block .block__overlay {\n    font-size: 56rem;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .block {\n    min-height: 50vh;\n  }\n  .block .block__body {\n    padding-top: 50px;\n  }\n  .block .block__overlay {\n    font-size: 45rem;\n  }\n  .block .block__title {\n    font-size: 6rem;\n  }\n  .block .block__subtitle {\n    font-size: 3rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .block {\n    min-height: 50vh;\n    padding: 60px 0;\n  }\n  .block.block--about {\n    padding-top: 100px;\n  }\n  .block .block__overlay {\n    font-size: 30rem;\n  }\n  .block .block__title {\n    font-size: 3rem;\n    line-height: 3.2rem;\n    margin-bottom: 2rem;\n  }\n  .block .block__subtitle {\n    font-size: 2em;\n    line-height: 3rem;\n  }\n  .block .block__text {\n    font-size: 1.5rem;\n    line-height: 1.5rem;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .block {\n    min-height: 50vh;\n    padding: 60px 0;\n  }\n  .block.block--about {\n    padding-top: 100px;\n  }\n  .block .block__overlay {\n    font-size: 16rem;\n  }\n  .block .block__title {\n    font-size: 1.5rem;\n    line-height: 2rem;\n    margin-bottom: 1rem;\n  }\n  .block .block__subtitle {\n    font-size: 1.2rem;\n    line-height: 1.5rem;\n  }\n  .block .block__text {\n    font-size: 0.8rem;\n    line-height: 1rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/pages/products-list-page/products-list-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/products-list-page/products-list-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductsListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListPageComponent", function() { return ProductsListPageComponent; });
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

var ProductsListPageComponent = /** @class */ (function () {
    function ProductsListPageComponent() {
        this.productList = [
            {
                title: 'PRODUCTS',
                subtitle: "Are you tired of switching between your email client, excel file, calendar and phone in the course of one interaction?\n                This is where CRM comes into play.",
                text: "To date, customer relations management (CRM) continues to be one of the most powerful tools for business automation.\n              A well-tailored custom CRM system centralizes your communication in one place and gives you an advantage to\n              manage all pipeline in a more efficient way.",
                background_image: '/assets/img/product-list/products.jpg',
            },
            {
                title: 'SolidExCRM.com',
                subtitle: 'CRM for your business',
                text: '',
                background_image: '/assets/img/product-list/solidexcrm.jpg',
            },
            {
                title: 'Ineedatractor.com',
                subtitle: 'A modern online service and a mobile application to rent construction equipment and specialized vehicles.',
                text: '',
                background_image: '/assets/img/product-list/ineedatractor.jpg',
            },
        ];
    }
    ProductsListPageComponent.prototype.ngOnInit = function () {
    };
    ProductsListPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-list-page',
            template: __webpack_require__(/*! ./products-list-page.component.html */ "./src/app/pages/products-list-page/products-list-page.component.html"),
            styles: [__webpack_require__(/*! ./products-list-page.component.less */ "./src/app/pages/products-list-page/products-list-page.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsListPageComponent);
    return ProductsListPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/products-page/products-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/products-page/products-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products container-fluid \">\n  <!-- Products backdrop -->\n  <div class=\"products__backdrop\">\n    <span class=\"col col--1\"></span>\n    <span class=\"col col--2\"></span>\n    <span class=\"col col--3\"></span>\n    <span class=\"col col--4\"></span>\n    <span class=\"col col--5\"></span>\n  </div>\n  <!-- Products content -->\n  <header class=\"block \">\n    <h1 class=\"products__title t--title position--r t--title m--t-xxlg t--c\">\n      <span class=\"products__title-text products__title-text--left position--a\">Pro</span>\n      <span class=\"products__title-text products__title-text--right position--a\">ducts</span>\n    </h1>\n  </header>\n  <main class=\"products__content container p--b-lg\">\n    <section class=\"products__content-text grid \">\n      <h2 class=\"t--h1 t--bold\">Coming to watch a broadcast or got a meeting in the building?</h2>\n      <h3 class=\"t--h4\">Below you’ll find all you need to organise your visit</h3>\n      <p class=\"m--v-lg\" >\n        The programmes Zapplive, Opsporing Verzocht and Radar are all made in M.\n        You can also watch broadcasts live from our public gallery.\n      </p>\n    </section>\n    <section class=\"products__content-logo grid grid--collapse m--v-lg\">\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n    </section>\n    <section class=\"products__content-text grid \">\n      <h2 class=\"t--h1 t--bold\">Coming to watch a broadcast or got a meeting in the building?</h2>\n      <h3 class=\"t--h4 \">Below you’ll find all you need to organise your visit</h3>\n      <p class=\"m--v-lg\">\n        The programmes Zapplive, Opsporing Verzocht and Radar are all made in M.\n        You can also watch broadcasts live from our public gallery.\n      </p>\n    </section>\n    <section class=\"products__content-logo grid grid--collapse m--v-lg\">\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n      <div class=\"col col--1-4 t--c t--h4\"><img src=\"/assets/img/page-prod/200.png\" alt=\"logo\"></div>\n    </section>\n    <app-button-form></app-button-form>\n  </main>\n</div>\n"

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

module.exports = "<div class=\"services container-fluid\">\n  <header class=\"services__header block\">\n    <h1 class=\"services__header-title\">\n      SERVICES\n    </h1>\n    <h2 class=\"services__header-subtitle t--r t--italic t--blue t-xs--h4 m--v-lg m-xs--v-md\">\n      Lightweight solutions specifically tailored for your needs & to your\n      requirements.\n    </h2>\n    <h2 class=\"services__header-subtitle t--r t--italic t--blue t-xs--h4 m--v-lg m-xs--v-md\">\n      We make apps that easily integrate with what people need and expect from a\n      trusted digital product.\n    </h2>\n    <h2 class=\"services__header-subtitle t--r t--italic t--blue t-xs--h4 m--v-lg m-xs--v-md\">\n      Our team is experiences to support you with both native or cross-platform\n      mobile development.\n    </h2>\n  </header>\n\n  <main class=\"container\">\n    <article class=\"services__custom grid \">\n      <section class=\"col--md-1-2 col--sm-1-1 col--xs-1-1\">\n        <h2 class=\"services__title t--h3 t-xs--h4\">Custom Web Development</h2>\n        <p class=\"services__text t--h4 t-xs--h5\">\n          We listen to you carefully because it’s important to deliver exactly\n          what you requested. We lavish attention on you to deliver even more\n          than you expected. We share our experience in building solid and\n          reasonable architecture & solutions.\n        </p>\n        <p class=\"services__text t--h4 t-xs--h5\">\n          Today the web world offers a variety of solutions both for your\n          business and your customers. We consider the latest trends and choose\n          the most efficient ones to bring you from MVP to scalable products.\n        </p>\n\n        <ul class=\"services__list\">\n          <span class=\"t--bold\">With the technical expertise in full-stack .Net, Node.js, AngularJS and React our\n            web development team is able to cope with any engineering challenge\n            to create:\n          </span>\n\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">SaaS and Cloud Computing;</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">CRM & ERP Systems;</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">High-load Applications;</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Enterprise & Intranet Platforms;</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">E-commerce Solutions;</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Geo-based Applications.</span>\n          </li>\n        </ul>\n      </section>\n\n      <section class=\"services__img  col--md-1-2 col--sm-1-1 col--xs-1-1\">\n        <div class=\"services__img--custom  h-100\"></div>\n      </section>\n    </article>\n\n    <article class=\"services__mobile grid\">\n      <section class=\"services__img col--md-1-2 col--sm-1-1 col--xs-1-1\">\n        <div class=\"services__img--mobile h-100\"></div>\n      </section>\n\n      <section class=\"col--md-1-2 col--sm-1-1 col--xs-1-1\">\n        <h2 class=\"services__title t--h3 t-xs--h4\">Mobile App Development</h2>\n        <p class=\"services__text t--h4 t-xs--h5\">\n          With millions of operations that smart phone users process daily, the\n          mobile industry has become an effective channel to extend your\n          business. The proper usage of these technologies may contribute a lot\n          to businesses by lowering expenses and enhancing productivity within\n          the major business functions.\n        </p>\n        <ul class=\"services__list \">\n          <span class=\"t--bold\">By handling the following technologies:</span>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Swift</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Objective-C</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Java</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Kotlin</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">React Native</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Cordova</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Ionic</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">PhoneGap</span>\n          </li>\n        </ul>\n        <!--\n          <p class=\"services__mobile-text t--h4 t-xs--h4\">\n            Our team is experiences to support you with both native or\n            cross-platform mobile development.\n          </p>\n          <p class=\"services__mobile-text t--h4 t-xs--h4\">\n            We make apps that easily integrate with what people need and expect\n            from a trusted digital product.\n          </p>\n        -->\n      </section>\n\n      <section class=\"col--1-1 m--t-lg m-xs--t-md\">\n        <p class=\"services__text t--c t--italic t--blue t--h4 t-xs--h5\">\n          CONTUCT US now and get a fully functioning app your customers will\n          love.\n        </p>\n        <app-button-form></app-button-form>\n      </section>\n    </article>\n\n    <article class=\"services__design grid\">\n      <section class=\"col--md-1-2 col--sm-1-1 col--xs-1-1\">\n        <h2 class=\"services__title t--h3 t-xs--h4\">UX/UI DESIGN</h2>\n        <p class=\"services__text t--h4 t-xs--h5\">\n          Something that looks great but is difficult to use is an example of\n          great UI and poor UX. While something very usable that looks terrible\n          is an example of great UX and poor UI.\n        </p>\n        <p class=\"services__text t--h4 t-xs--h5\">\n          By accommodating the best UI/UX practices and utilizing the amenities\n          of our onsite photo studio, our team is able to create designs of any\n          complexity to develop your branding and advertising campaigns.\n        </p>\n        <ul class=\"services__list\">\n          <span class=\"t--bold\">Our services include:</span>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\"> Product Structure and Strategy</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Prototyping</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Design Research</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">UI Prototyping</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Branding and Graphic Development</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Interactivity and Animation</span>\n          </li>\n          <li class=\"services__list-item t--blue\">\n            <span class=\"services__list-text\">Adaptation to All the Devices Screen-size</span>\n          </li>\n        </ul>\n      </section>\n\n      <section class=\"services__img col--md-1-2 col--sm-1-1 col--xs-1-1\">\n        <div class=\"services__img--design h-100\"></div>\n      </section>\n\n      <section class=\"col--1-1 m--t-lg m-xs--t-lg\">\n        <p class=\"services__text t--r t--italic t--blue t--h4 t-xs--h5\">\n          Want to enhance your business with a hi-tech solution?\n        </p>\n        <p class=\"services__text t--r t--italic t--blue t--h4 t-xs--h5\">\n          FILL OUT a form and we’ll get back to you shortly to discuss your next\n          digital successful story!\n        </p>\n      </section>\n    </article>\n  </main>\n  <!-- <app-button-form></app-button-form> -->\n</div>\n"

/***/ }),

/***/ "./src/app/pages/services-page/services-page.component.less":
/*!******************************************************************!*\
  !*** ./src/app/pages/services-page/services-page.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services .services__text {\n  text-align: justify;\n}\n.services .services__list-item {\n  list-style-type: square;\n  list-style-position: inside;\n}\n.services .services__list-text {\n  color: #000;\n}\n.services .services__header {\n  min-height: 50vh;\n  padding-top: 100px;\n}\n.services .services__header-title {\n  text-align: center;\n  color: #222;\n  font-weight: 900;\n  text-transform: uppercase;\n  font-size: 5rem;\n  line-height: 5rem;\n}\n.services .services__header-subtitle {\n  padding-right: 5%;\n}\n.services .services__img--custom {\n  background: url(/assets/img/page-service/custom.jpg) no-repeat;\n  background-size: cover;\n}\n.services .services__img--mobile {\n  background: url(/assets/img/page-service/mobile2.jpg) no-repeat;\n  background-size: cover;\n}\n.services .services__img--design {\n  background: url(/assets/img/page-service/design3.jpg) no-repeat;\n  background-size: cover;\n}\n@media only screen and (min-width: 1600px) {\n}\n@media only screen and (min-width: 1220px) and (max-width: 1599px) {\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .services .services__header {\n    min-height: 40vh;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .services .services__header {\n    min-height: 40vh;\n  }\n  .services .services__header-title {\n    text-align: center;\n    color: #222;\n    font-weight: 900;\n    text-transform: uppercase;\n    font-size: 4rem;\n    line-height: 5rem;\n  }\n  .services .services__img {\n    margin: 10px 0;\n  }\n  .services .services__custom {\n    flex-direction: column-reverse;\n  }\n  .services .services__img {\n    height: 50vh;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .services .services__img {\n    margin: 10px 0;\n  }\n  .services .services__header {\n    min-height: 40vh;\n    padding-top: 50px;\n  }\n  .services .services__header-title {\n    text-align: center;\n    color: #222;\n    font-weight: 900;\n    text-transform: uppercase;\n    font-size: 3rem;\n    line-height: 4rem;\n  }\n  .services .services__custom {\n    flex-direction: column-reverse;\n  }\n  .services .services__img {\n    height: 50vh;\n  }\n}\n"

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
/* harmony import */ var _pages_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/services-page/services-page.component */ "./src/app/pages/services-page/services-page.component.ts");
/* harmony import */ var _pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact-us-page/contact-us-page.component */ "./src/app/pages/contact-us-page/contact-us-page.component.ts");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var _pages_products_list_page_products_list_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/products-list-page/products-list-page.component */ "./src/app/pages/products-list-page/products-list-page.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");


// import { ProductsPageComponent } from './pages/products-page/products-page.component';





var routes = [
    // { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'development', component: _pages_development_page_development_page_component__WEBPACK_IMPORTED_MODULE_1__["DevelopmentPageComponent"] },
    // { path: 'products', component: ProductsPageComponent },
    { path: 'products', component: _pages_products_list_page_products_list_page_component__WEBPACK_IMPORTED_MODULE_5__["ProductsListPageComponent"] },
    { path: 'services', component: _pages_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_2__["ServicesPageComponent"] },
    { path: 'contact', component: _pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsPageComponent"] },
    { path: 'about', component: _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_6__["AboutPageComponent"] },
    { path: '', component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"] },
];
var route = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/ui/button-form/button-form.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ui/button-form/button-form.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <section class=\"page-form t--c\" [ngClass]=\"{'open': isShownForm}\">\n    <button\n      (click)=\"shownForm()\"\n      class=\"page-form__button position--r  t--h1 t--bold t--c  m--v-min m-xs--v-mini \"\n      role=\"button\"\n      aria-label=\"Contact-Button\">\n\n      <span class=\"page-form__button-line page-form__button-line--left position--a\"></span>\n      <span class=\"page-form__button-line page-form__button-line--right position--a\"></span>\n    </button>\n    <div class=\"page-form__body p--md\">\n      <app-form></app-form>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/ui/button-form/button-form.component.less":
/*!***********************************************************!*\
  !*** ./src/app/ui/button-form/button-form.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-form__button {\n  width: 5rem;\n  height: 3rem;\n}\n.page-form__button-line {\n  display: block;\n  width: 20px;\n  height: 3px;\n  background-color: #54a4ff;\n  transition: all 0.4s;\n}\n.page-form__button-line--left {\n  bottom: 50%;\n  left: 25%;\n  -webkit-transform: rotate(25deg);\n          transform: rotate(25deg);\n}\n.page-form__button-line--right {\n  bottom: 50%;\n  left: 50%;\n  -webkit-transform: rotate(-25deg);\n          transform: rotate(-25deg);\n}\n.page-form .page-form__body {\n  display: none;\n  height: 0;\n}\n.page-form.open .page-form__body {\n  display: block;\n  background: #fff;\n  height: auto;\n  padding: 120px 0 60px;\n  transition: height 10s;\n}\n.page-form.open .page-form__button-line {\n  background-color: #000;\n}\n.page-form.open .page-form__button-line--left {\n  -webkit-transform: rotate(-25deg);\n          transform: rotate(-25deg);\n}\n.page-form.open .page-form__button-line--right {\n  -webkit-transform: rotate(25deg);\n          transform: rotate(25deg);\n}\n"

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

module.exports = "<footer class=\"footer container\">\n  <div class=\"grid grid--collapse m--v-md\">\n    <!-- <ul class=\"footer__statment col--md-1-5 col--sm-1-3 col--xs-1-1\">\n      <li>\n        <a class=\"footer__statment-link link link--reset t--uppercase t--bold t--gray \" href=\"\">Privacy statement</a>\n      </li>\n      <li>\n        <a class=\"footer__statment-link link link--reset t--uppercase t--bold t--gray \" href=\"\">Cookie statement</a>\n      </li>\n    </ul> -->\n    <ul class=\"footer__nav footer__nav-left col--1-5\">\n\n      <li>\n        <a class=\"footer__nav-link link link--reset  t--h4 t--bold \" [routerLink]=\"['/services']\">Services</a>\n      </li>\n      <li>\n        <a class=\"footer__nav-link link link--reset  t--h4 t--bold \" [routerLink]=\"['/products']\">Products</a>\n      </li>\n    </ul>\n    <ul class=\"footer__nav footer__nav-right col--1-5\">\n      <!-- <li>\n        <a class=\"footer__nav-link link link--reset  t--h4 t--bold \" [routerLink]=\"['/careers']\">Careers</a>\n      </li> -->\n      <!-- <li>\n        <a class=\"footer__nav-link link link--reset t--h4 t--bold \" [routerLink]=\"['/testimonials']\">Testimonials</a>\n      </li> -->\n      <li>\n        <a class=\"footer__nav-link link link--reset  t--h4 t--bold \" [routerLink]=\"['/about']\">About</a>\n      </li>\n      <li>\n        <a class=\"footer__nav-link link link--reset t--h4 t--bold \" [routerLink]=\"['/contact']\">Contact Us</a>\n      </li>\n    </ul>\n    <div class=\"footer__contact col--md-1-5 col--sm-1-3 col--xs-1-1 \">\n      <ul class=\"footer__contact-list \">\n        <li class=\"footer__contact-list-item\">\n          <a class=\"footer__nav-link link link--reset t--h4 t--bold \" [routerLink]=\"['/']\">\n            Solid Expert Ltd.\n          </a>\n        </li>\n        <!-- LINK TO GOOGLE MAPS ???? -->\n        <li class=\"footer__contact-list-item\">\n          <a class=\"link link--reset link--hover-line\" href=\"\">Nemiga 3, Minsk</a>\n        </li>\n        <li class=\"footer__contact-list-item\">\n          <a class=\"link link--reset link--hover-line\" href=\"tel:+19193233612\">+1-919-323-36-12</a>\n        </li>\n        <li class=\"footer__contact-list-item\">\n          <a class=\"link link--reset link--hover-line\" href=\"mailto:info@solidexpert.pro\">info@solidexpert.pro</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"footer__social col--md-1-5 col--sm-1-3 col--xs-1-1 m-xs--v-mini\">\n      <a class=\"footer__social-link link \" href=\"mailto:info@solidexpert.pro\">\n        <div class=\"svg\" [inlineSVG]=\"'/assets/img/icons/email.svg'\" alt=\"Email\"></div>\n      </a>\n      <a class=\"footer__social-link link\" href=\"https://www.linkedin.com/company/solidexpertltd\" target=\"_blanc\">\n        <div class=\"svg\" [inlineSVG]=\"'/assets/img/icons/linkedin.svg'\" alt=\"Linkedin\"></div>\n      </a>\n      <a class=\"footer__social-link link \" href=\"https://www.facebook.com/solidexpert.ltd/\" target=\"_blanc\">\n        <div class=\"svg\" [inlineSVG]=\"'/assets/img/icons/facebook.svg'\" alt=\"Facebook\"></div>\n      </a>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.less":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  color: #000;\n  background: #fff;\n}\n.footer .link {\n  margin-bottom: 0.8rem;\n}\n.footer .footer__nav-link:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0;\n  background-color: #54a4ff;\n  transition: all 0.5s;\n  height: 2px;\n}\n.footer .footer__nav-link:hover:after {\n  width: 80%;\n}\n.footer .footer__contact-list-item {\n  font-size: 1.2rem;\n}\n.footer .footer__social-link {\n  width: 1.8rem;\n  height: 1.8rem;\n}\n.footer .footer__statment:hover::first-letter {\n  color: #54a4ff;\n}\n.footer .link--hover-line:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0;\n  background-color: #000;\n  transition: all 0.5s;\n  height: 1px;\n}\n.footer .link--hover-line:hover:after {\n  width: 100%;\n}\n.footer .svg {\n  width: 100%;\n  height: 100%;\n}\n.footer .svg:hover {\n  color: #54a4ff;\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .footer .footer__nav {\n    display: none;\n  }\n  .footer .footer__statment {\n    text-align: center;\n  }\n  .footer .footer__contact-list {\n    text-align: center;\n  }\n  .footer .footer__social {\n    text-align: center;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .footer .footer__nav {\n    display: none;\n  }\n  .footer .footer__statment {\n    font-size: 0.6rem;\n    text-align: center;\n  }\n  .footer .footer__contact-list {\n    text-align: center;\n    margin: 1rem 0;\n  }\n  .footer .footer__social {\n    text-align: center;\n  }\n  .footer .footer__social-svg {\n    width: 1.5rem;\n  }\n}\n"

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

module.exports = "<section class=\"form t--c\">\n  <div class=\"grid\">\n    <div class=\"col--md-1-2 col--sm-1-1 col--xs-1-1\">\n      <input class=\"form__input\"\n        name=\"yourName\"\n        type=\"text\"\n        [(ngModel)]=\"yourName\"\n        placeholder=\"Your name\"\n      />\n\n      <input class=\"form__input\"\n        name=\"contactInfo_Phone_1\"\n        [(ngModel)]=\"contactInfo_Phone_1\"\n        type=\"tel\"\n        placeholder=\"Telephone number\"\n      />\n\n      <input class=\"form__input\"\n        name=\"contactInfo_Email_1\"\n        [(ngModel)]=\"contactInfo_Email_1\"\n        type=\"email\"\n        placeholder=\"E-mail address\"\n      />\n\n    </div>\n    <div class=\"col--md-1-2 col--sm-1-1 col--xs-1-1\">\n      <textarea class=\"form__input form__input-message\"\n        name=\"message\"\n        id=\"message\"\n        cols=\"\"\n        rows=\"\"\n        placeholder=\"Your message\"\n      ></textarea>\n    </div>\n  </div>\n\n   <button (click)=\"click()\" class=\"btn btn--md btn--blue m--v-lg m-xs--sm\">\n    Send\n  </button>\n\n\n</section>\n\n"

/***/ }),

/***/ "./src/app/ui/form/form.component.less":
/*!*********************************************!*\
  !*** ./src/app/ui/form/form.component.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form .form__button:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0;\n  background-color: #54a4ff;\n  transition: all 0.5s;\n  height: 3px;\n}\n.form .form__button:hover:after {\n  width: 80%;\n}\n.form .btn {\n  border: 2px solid #54a4ff;\n}\n.form .btn:hover {\n  border-color: #fff;\n}\n.form__input {\n  outline: none;\n  border: none;\n  font-size: 1.5em;\n  min-height: 3.5em;\n  width: 100%;\n  border-bottom: 1px solid #000;\n}\n.form__input::-webkit-input-placeholder {\n  color: #808080;\n  font-size: 1.2em;\n  font-weight: 400;\n}\n.form__input:-ms-input-placeholder {\n  color: #808080;\n  font-size: 1.2em;\n  font-weight: 400;\n}\n.form__input::-ms-input-placeholder {\n  color: #808080;\n  font-size: 1.2em;\n  font-weight: 400;\n}\n.form__input::placeholder {\n  color: #808080;\n  font-size: 1.2em;\n  font-weight: 400;\n}\n.form__input:focus {\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #54a4ff;\n}\n.form__input-message {\n  height: 100%;\n  width: 100%;\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .form__input {\n    font-size: 1rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .form__input {\n    font-size: 1rem;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .form__input {\n    font-size: 0.8rem;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .form__input {\n    font-size: 0.8rem;\n  }\n}\n"

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
            .set('is_company', "false")
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

module.exports = "<div class=\"grid-line\">\n  <div [style.border-color]=\"color\" class=\"grid-line__stroke\" *ngFor=\"let item of ' '.repeat(count).split(''),\"></div>\n</div>"

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

module.exports = ".header .header__burger {\n  position: fixed;\n  display: inline-block;\n  top: 40px;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  padding: 14px 0;\n  z-index: 4;\n}\n.header .header__burger-line {\n  display: block;\n  width: 40px;\n  height: 2px;\n  background-color: #fff;\n  transition: all .4s;\n}\n.header .header__burger-line + .header__burger-line {\n  margin-top: 8px;\n}\n.header .header__body {\n  display: none;\n  height: 0;\n}\n.header .header__list {\n  margin: 0;\n  padding: 0;\n}\n.header .header__link {\n  font-size: 3em;\n  line-height: 3rem;\n  font-style: normal;\n  font-weight: 700;\n  font-stretch: normal;\n  letter-spacing: 0;\n  color: #000;\n  position: relative;\n  display: block;\n  text-decoration: none;\n  padding: 10px 0;\n}\n.header .header__link:after {\n  content: '';\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0;\n  background-color: #f44336;\n  transition: all .5s;\n  height: 5px;\n}\n.header .header__link:hover:after {\n  width: 100px;\n}\n.header.open .header__body {\n  background: #fff;\n}\n.header.open .header__burger-line {\n  background-color: #000;\n}\n.header.open .header__burger-line:nth-child(1) {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.header.open .header__burger-line:nth-child(2) {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.header.open .header__burger-line + .header__burger-line {\n  margin-top: -1px;\n}\n.header.open .header__body {\n  display: block;\n  position: fixed;\n  min-width: 100%;\n  z-index: 3;\n  height: auto;\n  padding: 120px 0 60px;\n  transition: height 10s;\n}\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [ngClass]=\"{'open': isShowMenu}\">\n    <button role=\"button\" aria-label=\"Menu Button\" class=\"header__burger\" (click)=\"showMenu()\">\n      <span class=\"header__burger-line header__burger-line--upper\"></span>\n      <span class=\"header__burger-line header__burger-line--lower\"></span>\n    </button>\n    <div class=\"container header__body\">\n        <div class=\"grid\">\n            <div class=\"col--1-5 push--1-5\">\n                <ul class=\"header__list\">\n                    <li class=\"header__item\">\n                        <a [routerLink]=\"['/']\" class=\"header__link\">Home</a>\n                    </li>\n                    <li class=\"header__item\">\n                         <a [routerLink]=\"['/development']\" class=\"header__link\">Development</a>\n                    </li>\n                    <li class=\"header__item\">\n                        <a [routerLink]=\"['/products']\" class=\"header__link\">Products</a>\n                    </li>\n                    <li class=\"header__item\">\n                        <a [routerLink]=\"['/services']\" class=\"header__link\">Services</a>\n                    </li>\n                    <li class=\"header__item\">\n                        <a [routerLink]=\"['/contact']\" class=\"header__link\">Contact Us</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col--2-5 push--2-5\">\n              <app-form></app-form>\n            </div>\n        </div>\n    </div>\n</div>\n"

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

module.exports = "<nav class=\"nav\"[ngClass]=\"{'open': isShowMenu}\">\n  \t<a routerLink=\"/\">\n\t\t<div class=\"nav__logo\" aria-label=\"My icon\" [inlineSVG]=\"'/assets/svg/logo.svg'\"></div>\n\t</a>\n\n\t<button role=\"button\" aria-label=\"Menu Button\" class=\"nav__burger\" (click)=\"showMenu()\">\n\t\t<span class=\"nav__burger-line nav__burger-line--upper\"></span>\n\t\t<span class=\"nav__burger-line nav__burger-line--lower\"></span>\n\t</button>\n\n  \t<ul class=\"nav__menu nav__menu-links\">\n\t\t<li class=\"nav__item\">\n\t\t\t<a [routerLink]=\"['/products']\" routerLinkActive=\"active\" class=\"nav__link\">Products</a>\n\t\t</li>\n\t\t<li class=\"nav__item\">\n\t\t\t<a [routerLink]=\"['/services']\" routerLinkActive=\"active\" class=\"nav__link\">Services</a>\n\t\t</li>\n\t\t<li class=\"nav__item\">\n\t\t\t<a [routerLink]=\"['/about']\" routerLinkActive=\"active\" class=\"nav__link\">About us</a>\n\t\t</li>\n\t</ul>\n\n\t<ul class=\"nav__menu nav__menu-request\">\n\t\t<li class=\"nav__item\">\n\t\t\t<a [routerLink]=\"[ '/contact' ]\" routerLinkActive=\"active\" class=\"nav__link \">Send Request</a>\n\t\t</li>\n\t</ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/ui/nav/nav.component.less":
/*!*******************************************!*\
  !*** ./src/app/ui/nav/nav.component.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  width: 100%;\n  background-color: #000;\n  color: #fff;\n  padding: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  font-size: 0.8125rem;\n  transition: top 0.2s ease-in-out;\n  height: 54px;\n}\n.nav .nav__burger {\n  position: fixed;\n  display: none;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  padding: 14px 0;\n  z-index: 4;\n}\n.nav .nav__burger-line {\n  display: block;\n  width: 40px;\n  height: 2px;\n  background-color: #fff;\n  transition: all 0.4s;\n}\n.nav .nav__burger-line + .nav__burger-line {\n  margin-top: 8px;\n}\n.nav .nav__logo {\n  position: relative;\n  text-align: right;\n  text-decoration: none;\n  outline: none;\n  box-shadow: none;\n  width: 200px;\n  margin: 4px 0;\n}\n.nav .nav__logo:hover {\n  outline: none;\n  box-shadow: none;\n  text-decoration: none;\n}\n.nav .nav__logo p {\n  font-size: 1.3rem;\n  font-weight: 800;\n  font-style: italic;\n  margin: 0;\n  line-height: 1.1rem;\n  letter-spacing: 0.2px;\n  text-transform: none;\n  color: #fff;\n}\n.nav .nav__menu {\n  display: flex;\n  align-items: center;\n}\n.nav .nav__item {\n  padding: 0 20px;\n}\n.nav .nav__link {\n  display: block;\n  position: relative;\n  padding: 10px 0;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  -webkit-text-decoration: nonte;\n          text-decoration: nonte;\n  box-shadow: none;\n  outline: none;\n  font-size: 0.85rem;\n}\n.nav .nav__link:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 0;\n  bottom: 8px;\n  height: 2px;\n  background: #fff;\n  transition: width 0.3s ease-in-out;\n}\n.nav .nav__link:hover {\n  text-decoration: none;\n  outline: none;\n  box-shadow: none;\n}\n.nav .nav__link:hover:after {\n  width: 100%;\n}\n.nav .nav__link.active {\n  color: #54a4ff;\n}\n.nav .nav__link.active:after {\n  background-color: #54a4ff;\n}\n.nav.open {\n  min-height: 100vh;\n  align-items: flex-start;\n}\n.nav.open .nav__menu {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.nav.open .nav__burger {\n  top: 8px;\n}\n.nav.open .nav__burger-line:nth-child(1) {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.nav.open .nav__burger-line:nth-child(2) {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.nav.open .nav__burger-line + .nav__burger-line {\n  margin-top: -1px;\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .nav .nav__menu-links {\n    display: none;\n  }\n  .nav .nav__burger {\n    display: inline-block;\n  }\n  .nav.open .nav__link {\n    font-size: 4.5rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .nav .nav__menu-links {\n    display: none;\n  }\n  .nav .nav__burger {\n    display: inline-block;\n  }\n  .nav.open .nav__link {\n    font-size: 3.5rem;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .nav .nav__logo {\n    width: 120px;\n    margin: 12px 0;\n  }\n  .nav .nav__menu-links {\n    display: none;\n  }\n  .nav .nav__burger {\n    display: inline-block;\n  }\n  .nav.open .nav__link {\n    font-size: 2.5rem;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .nav .nav__menu-links {\n    display: none;\n  }\n  .nav .nav__burger {\n    display: inline-block;\n  }\n  .nav.open .nav__link {\n    font-size: 2rem;\n  }\n}\n"

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

module.exports = "<div class=\"grid\">\n  <div class=\"col--xlg-4-6 col--lg-4-6 col--md-1-1 col--sm-1-1 col--xs-1-1 \">\n    <carousel [noPause]=\"false\" [interval]=\"30000\">\n      <slide *ngFor=\"let slide of slides\">\n        <h1 class=\"slider__title \">{{slide.company}}</h1>\n\n        <p class=\"slider__text slider__text--mention m--v-lg m-xs--v-md\">\n          {{slide.mention}}\n        </p>\n\n        <p class=\"slider__text t--bold \">{{slide.name}}</p>\n\n        <p class=\"slider__text \">{{slide.position}}</p>\n\n        <!-- <div class=\"carousel-caption\"> </div> -->\n      </slide>\n    </carousel>\n  </div>\n  <div class=\"col--xlg-1-6 col--lg-1-6 col--md-1-1 col--sm-1-1 col--xs-1-1 push--lg-1-6 \">\n    <div class=\"block__logo flex flex--center flex--wrap\">\n      <!-- <div class=\"block__logo-item\" *ngFor=\"let item of slides\" [inlineSVG]=\"{{item.logoPath}}\"></div> -->\n      <img class=\"block__logo-item\" *ngFor=\"let item of slides\" src=\"{{item.logoPath}}\"/>\n      <!-- <span *ngFor=\"let item of slides\">\n        {{item.logoPath}}\n      </span> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/slider/slider.component.less":
/*!*************************************************!*\
  !*** ./src/app/ui/slider/slider.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block--white .carousel-inner {\n  min-height: 50vh;\n  padding: 0 1rem;\n  margin: 1rem 0;\n}\n.block--white .carousel-indicators {\n  bottom: 0;\n}\n.block--white .carousel-indicators li {\n  background-color: #000;\n}\n.block--white li.active {\n  background-color: #54a4ff;\n}\n.block--white .carousel-control-next-icon {\n  background-image: url(/assets/img/icons/right-arrow.svg);\n}\n.block--white .carousel-control-prev-icon {\n  background-image: url(/assets/img/icons/left-arrow.svg);\n}\n.block--white .carousel-control-next {\n  right: -5rem;\n}\n.block--white .carousel-control-prev {\n  left: -5rem;\n}\n.block--white .slider__title {\n  font-size: 4rem;\n  line-height: 4.2rem;\n  font-weight: 600;\n  margin-bottom: 3rem;\n}\n.block--white .slider__text {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 500;\n  padding-left: 3rem;\n}\n.block--white .slider__text--mention::before {\n  content: open-quote;\n  color: #54a4ff;\n}\n.block--white .slider__text--mention::after {\n  content: close-quote;\n  color: #54a4ff;\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .block--white .carousel-inner {\n    min-height: 40vh;\n  }\n  .block--white .carousel-control {\n    display: none;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .block--white .slider__title {\n    font-size: 3rem;\n    line-height: 3.2rem;\n    margin-bottom: 2rem;\n  }\n  .block--white .slider__text {\n    font-weight: 600;\n  }\n  .block--white .carousel-control {\n    display: none;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .block .slider__title {\n    font-size: 1.5rem;\n    line-height: 2rem;\n    margin-bottom: 1rem;\n  }\n  .block .slider__text {\n    font-size: 0.8rem;\n    font-weight: 600;\n  }\n  .block .carousel-control {\n    display: none;\n  }\n}\n"

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
                mention: "A few years ago we decided to improve our business with the help of modern technologies.\n      We investigated different companies in the market, but we were hesitating about the partnership with\n      anybody we had on our checklist till we came across SolidExpert. It was exactly what we were looking\n      for since they delivered the product meeting all our expectations. We do recommend SolidExpert as a\n      trusted, reliable and initiative company able to solve non-routine tasks and build mission-critical\n      apps.",
                name: 'Joe Spencer,',
                position: 'IT Director',
                company: 'PhotoBrief',
                logoPath: '/assets/svg/main-gallery/photobrief.svg'
            },
            {
                mention: "Initially, we reached out to SolidExpert for assistance with CRM system, and very quickly realized\n      that they are a trustworthy business partner. They have demonstrated both technical competence and\n      business domain knowledge. With that expertise, they have been able to develop a CRM system with the\n      functionality that helps our company to grow. We have been very happy with the results of their work\n      and recommended them as a well-qualified and competent entity able to build a custom CRM system of\n      any complexity.",
                name: 'Marvin Gutierrez,',
                position: 'IT Manager',
                company: 'SolidEx CRM',
                logoPath: '/assets/svg/main-gallery/logo-gray.svg'
            },
            {
                mention: "We strongly recommend SolidExpert to anyone looking to develop a complex project.\n      The management of their team is professional and the skills of those we worked with were beyond\n      expectations. Knowing this, we were very comfortable with the flexibility of scaling up as needed,\n      and expanding into other technologies. We are pleased to work with SolidExpert and plan to collaborate with them further.",
                name: 'Fernando Sullivan,',
                position: 'CIO',
                company: 'SalesInteract',
                logoPath: '/assets/img/main-gallery/salesinteract.png'
            },
            {
                mention: "Cooperation with SolidExpert has been a very productive and satisfying experience for us.\n      We appreciate their proactive approach and ability to suggest improvements to a prospective\n      solution on both technical and business levels. At every stage SolidExpert have proven to be\n      a highly professional, qualified and dedicated team. We highly recommend SolidExpert to any\n      company looking for a dependable partner.",
                name: 'Ekaterina Peryshkova,',
                position: 'Project Manager',
                company: 'ABW.by',
                logoPath: '/assets/img/main-gallery/abw.png'
            },
            {
                mention: "Many words come to my mind when considering the partnership with SolidExpert, but i think that the\n       key point that gravitated us towards them is their being clientele-focused. Their team evaluated\n       our vision, our product, asked spot-on questions.....i was immersed in real collaboration. What\n       began as a trial relationship has evolved into an ongoing partnership that will continue growing.",
                name: 'Kohen Lendon,',
                position: 'Team Lead',
                company: 'joinUz.nl',
                logoPath: '/assets/svg/main-gallery/joinuz.svg'
            },
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

module.exports = __webpack_require__(/*! /Users/roma/github/solidexpert/solid/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map