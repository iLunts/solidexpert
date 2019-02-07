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

module.exports = "<!-- <app-header ></app-header> -->\r\n<app-nav></app-nav>\r\n<!-- <app-header [ngClass]=\"{'open': isShowMenu}\"></app-header> -->\r\n<router-outlet></router-outlet>\r\n<!-- <router-outlet [ngClass]=\"{'open': isShowMenu}\"></router-outlet> -->\r\n<app-footer></app-footer>\r\n"

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
/* harmony import */ var _pages_poducts_details_poducts_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/poducts-details/poducts-details.component */ "./src/app/pages/poducts-details/poducts-details.component.ts");
/* harmony import */ var _ui_poducts_details_block_first_block_first_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ui/poducts-details/block-first/block-first.component */ "./src/app/ui/poducts-details/block-first/block-first.component.ts");
/* harmony import */ var _ui_poducts_details_block_second_block_second_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ui/poducts-details/block-second/block-second.component */ "./src/app/ui/poducts-details/block-second/block-second.component.ts");
/* harmony import */ var _ui_poducts_details_block_third_block_third_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ui/poducts-details/block-third/block-third.component */ "./src/app/ui/poducts-details/block-third/block-third.component.ts");
/* harmony import */ var _ui_poducts_details_block_fourth_block_fourth_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ui/poducts-details/block-fourth/block-fourth.component */ "./src/app/ui/poducts-details/block-fourth/block-fourth.component.ts");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/esm5/ngx-wow.es5.js");
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
                _pages_poducts_details_poducts_details_component__WEBPACK_IMPORTED_MODULE_25__["PoductsDetailsComponent"],
                _ui_poducts_details_block_first_block_first_component__WEBPACK_IMPORTED_MODULE_26__["BlockFirstComponent"],
                _ui_poducts_details_block_second_block_second_component__WEBPACK_IMPORTED_MODULE_27__["BlockSecondComponent"],
                _ui_poducts_details_block_third_block_third_component__WEBPACK_IMPORTED_MODULE_28__["BlockThirdComponent"],
                _ui_poducts_details_block_fourth_block_fourth_component__WEBPACK_IMPORTED_MODULE_29__["BlockFourthComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _routing__WEBPACK_IMPORTED_MODULE_17__["route"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"].forRoot(),
                ng_inline_svg__WEBPACK_IMPORTED_MODULE_22__["InlineSVGModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                ngx_wow__WEBPACK_IMPORTED_MODULE_30__["NgwWowModule"],
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

module.exports = "<!-- <div class=\"about\">\r\n\r\n</div> -->\r\n<section class=\"block block--header\">\r\n  <h1 class=\"block__title t--c\">ABOUT US</h1>\r\n  <!-- <h2 class=\"block__subtitle t--c t--gray\"> There will be a slogan  </h2>\r\n  <div class=\"block__line\"> \r\n    <ul class=\"block__dots\">\r\n      <li class=\"block__dots-item block__dots-item--holder block__dots-item--active\">\r\n        <p class=\"block__text block__text--translate\">Text</p>\r\n      </li>\r\n      <li class=\"block__dots-item block__dots-item--holder\">\r\n        <p class=\"block__text block__text--translate\">Text</p>\r\n      </li>\r\n      <li class=\"block__dots-item block__dots-item--holder\">\r\n        <p class=\"block__text block__text--translate\">Text</p>\r\n      </li>\r\n      <li class=\"block__dots-item block__dots-item--holder\">\r\n        <p class=\"block__text block__text--translate\">Text</p>\r\n      </li>\r\n    </ul>\r\n  </div> -->\r\n</section>\r\n<section class=\"block block--body\">\r\n  <div class=\"grid grid--collapse\">\r\n    <div class=\"col--md-2-4 col--sm-1-1 col--xs-1-1 col--gray\">\r\n      <p class=\"block__text\">\r\n        With a solid software development experience, we’ve started as a group of like-minded people to help companies\r\n        on the way of their digital transformation. Shaping our team, we always strive to choose the best of the best\r\n        to serve you on your project. Nowadays we’re a company of talented people who can bring to life Web and Mobile\r\n        solutions of any complexity.\r\n      </p>\r\n      <p class=\"block__text\">\r\n        Our mission is to help our clients to achieve their business goals. For deeper understanding of our customers’\r\n        needs, we carefully examine their business and immerse deeply in the essence of the task.\r\n      </p>\r\n      <p class=\"block__text\">\r\n        We meet deadlines and guarantee the quality, since time is the only finite and most precious resource.\r\n      </p>\r\n      <p class=\"block__text\">\r\n        We build efficient means of communication and provide full support at all the stages of cooperation.\r\n      </p>\r\n    </div>\r\n    <div class=\"col--lg-1-4 col--md-1-2 col--sm-1-1 col--xs-1-1 col--white flex flex--column flex--center p--md\">\r\n      <h3 class=\"block__subtitle\">Let’s talk business! </h3>\r\n      <p class=\"block__text\">\r\n        Reach your goals and grow your business with us.\r\n      </p>\r\n      <a [routerLink]=\"['/contact']\" routerLinkActive=\"active\" class=\"btn btn--blue btn--lg\">Contact Us</a>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

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

module.exports = "<div class=\"contact\">\r\n  <div class=\"contact__left\">\r\n    <div class=\"contact__left-img\">\r\n      <img src=\"https://sevenstars.nl/Assets/img/contact/contact-maico.jpg\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"contact__body\">\r\n    <div class=\"grid\">\r\n      <div class=\"col--xlg-2-3 col--lg-2-3 col--md-2-3 col--sm-1-1 col--xs-1-1\">\r\n        <h2 class=\"t--h3 t--blue\">Have a question?</h2>\r\n\r\n        <form [formGroup]=\"requestForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div>\r\n            <label class=\"label\">Your name</label>\r\n            <div class=\"input-group input-group--required\" [ngClass]=\"{ 'isError': f.name.errors && (f.name.dirty || f.name.touched) }\">\r\n              <input\r\n               class=\"input-group__input\"\r\n               type=\"text\"\r\n               formControlName=\"name\"\r\n               name=\"userName\">\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <label class=\"label\">E-mail address</label>\r\n            <div class=\"input-group input-group--required\" [ngClass]=\"{ 'isError': f.email.errors && (f.email.dirty || f.email.touched) }\">\r\n              <input\r\n              class=\"input-group__input\"\r\n              type=\"text\"\r\n              formControlName=\"email\"\r\n              name=\"userEmail\">\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <label class=\"label\">Telephone number</label>\r\n            <input\r\n            class=\"input\"\r\n            type=\"text\"\r\n            formControlName=\"telephone\"\r\n            name=\"userPhone\">\r\n          </div>\r\n          <div>\r\n            <label class=\"label\">Your message</label>\r\n            <textarea class=\"input\" rows=\"10\" name=\"userMessage\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"checkbox\">\r\n            <input class=\"checkbox__input\" type=\"checkbox\" id=\"privacy-statement\" formControlName=\"privacy\">\r\n            <label class=\"checkbox__label\" for=\"privacy-statement\">\r\n              I do authorize SolidExpert, Ltd. to process my personal data and agree with the privacy statement\r\n            </label>\r\n          </div>\r\n\r\n          <hr class=\"line line--sm m--v\">\r\n\r\n          <div class=\"contact__question-send\">\r\n            <button class=\"btn btn--blue btn--md\" [disabled]=\"f.name.errors || f.email.errors || f.privacy.invalid\"\r\n              (click)=\"send()\">Send</button>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n\r\n      <div class=\"col--xlg-1-3 col--lg-1-3 col--md-1-3 col--sm-1-1 col--xs-1-1\">\r\n        <h3 class=\"t--h3 t--blue m--b-md\">Main office</h3>\r\n\r\n        <div class=\"contact__address\">\r\n          <p class=\"contact__address-text t--semi-bold\">SolidExpert Ltd</p>\r\n          <p class=\"contact__address-text\">Nemiga 3, Minsk</p>\r\n          <a href=\"tel:+1(919)3233612\" class=\"contact__address-link\">+1 (919) 323-36-12</a>\r\n          <a href=\"mailto:info@solidexpert.pro\" class=\"contact__address-link\">info@solidexpert.pro</a>\r\n        </div>\r\n\r\n\r\n        <h3 class=\"t--h3 t--blue m--v-md\">Social media</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <iframe class=\"contact__map\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.564779469687!2d27.55035277568408!3d53.90393915930507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfeba2244dab%3A0x2fc998fd3e91b368!2sNemiga+3+Shopping+Mall!5e0!3m2!1sen!2sby!4v1544821022807\"\r\n  frameborder=\"0\" style=\"border:0\" allowfullscreen>\r\n</iframe> -->\r\n"

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

module.exports = "<div class=\"home-page\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Home backdrop -->\r\n\r\n    <div class=\"home-page__backdrop\">\r\n      <span class=\"col col--1\"></span>\r\n      <span class=\"col col--2\"></span>\r\n      <span class=\"col col--3\"></span>\r\n      <span class=\"col col--4\"></span>\r\n      <span class=\"col col--5\"></span>\r\n    </div>\r\n\r\n\r\n    <!-- Home content -->\r\n    <div class=\"grid grid--collapse\">\r\n      <a href=\"\" class=\"col--1-3 p--h-lg position--r home-page__hover link link--reset\">\r\n        <div class=\"home-page__img home-page__img--1-1\">\r\n          <img class=\"home-page__img-img\" src=\"assets/img/about.jpg\" alt=\"\" />\r\n        </div>\r\n\r\n        <div class=\"home-page__flex\">\r\n          <div>&nbsp;</div>\r\n          <div>\r\n            <h1 class=\"t--title\">About <span class=\"t--red\">us</span></h1>\r\n            <h2>Welkom in M, het nieuwe mediahart van Nederland</h2>\r\n          </div>\r\n          <div><a href=\"\" class=\"link link--line t--h5\">Lees meer over</a></div>\r\n        </div>\r\n      </a>\r\n\r\n      <div class=\"col--1-3\"></div>\r\n\r\n      <div class=\"col--1-3 home-page__flex\">\r\n        <div class=\"h-50\">\r\n          <div class=\"grid grid--collapse h-100\">\r\n            <div class=\"col--1-2\">\r\n              <a class=\"home-page__project home-page__hover\" [routerLink]=\"['/products']\">\r\n                <p class=\"home-page__project-link link link--line t--h4 t--semi-bold\">\r\n                  Products\r\n                </p>\r\n\r\n                <div class=\"home-page__img home-page__img--1-1\">\r\n                  <img class=\"home-page__img-img\" src=\"assets/img/development.jpg\" alt=\"\" />\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"col--1-2\">\r\n              <a class=\"home-page__project home-page__hover\" [routerLink]=\"['/services']\">\r\n                <p class=\"home-page__project-link link link--line t--h4 t--semi-bold\">\r\n                  Services\r\n                </p>\r\n\r\n                <div class=\"home-page__img home-page__img--1-1\">\r\n                  <img class=\"home-page__img-img\" src=\"assets/img/projects.png\" alt=\"\" />\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"h-50\">\r\n          <div class=\"grid grid--collapse\">\r\n            <div class=\"col--1-1 p--h-lg\">\r\n              <p class=\"t--h5\">\r\n                We create a complete experience for the technical part of your\r\n                business.\r\n              </p>\r\n              <p class=\"t--h5 t--semi-bold\">\r\n                We provide our clients with a custom CRM and ERP systems that\r\n                simplify all the working processes such as communications with\r\n                clients and prospects, managing internal business processes and\r\n                monitoring of all types of activities.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<section class=\"block block--about\">\r\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\r\n\r\n  <div class=\"block__overlay block__overlay--video\">\r\n    <video class=\"block__overlay--video-item\" autoplay loop poster=\"/assets/video/about/poster.jpg\" muted plays-inline>\r\n      <source src=\"/assets/video/about/movie.mp4\" type=\"video/mp4\" />\r\n      <source src=\"/assets/video/about/movie.webm\" type=\"video/webm\" />\r\n      Your browser does not support the video tag.\r\n    </video>\r\n  </div>\r\n\r\n  <div class=\"block__body\">\r\n    <div class=\"container\">\r\n      <div class=\"grid \">\r\n        <div class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1 push--xlg-1-5 push--lg-1-5 t--c\">\r\n          <h1 class=\"block__title\">\r\n            YOUR SOLID SOLUTIONS\r\n          </h1>\r\n          <h2 class=\"block__subtitle\">\r\n            Web & Mobile Custom Software\r\n            with Core Expertise in CRM Development & Implementation.\r\n          </h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"block block--blue\">\r\n  <app-grid-line></app-grid-line>\r\n\r\n  <div class=\"block__overlay\">8+</div>\r\n\r\n  <div class=\"block__body\">\r\n    <div class=\"container\">\r\n      <div class=\"grid\">\r\n        <div class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1\">\r\n          <h2 class=\"block__title\">\r\n            More than 8 years of experience in the software development\r\n            services.\r\n          </h2>\r\n          <h3 class=\"block__subtitle\">\r\n            We’ll deliver delightful digital experiences for your business and\r\n            lift all the technical issues off your shoulders.\r\n          </h3>\r\n          <ul class=\"block__list m--reset\">\r\n            <li class=\"block__list-item\">Mobile App Development</li>\r\n            <li class=\"block__list-item\">Web Development</li>\r\n            <li class=\"block__list-item\">UX/UI</li>\r\n            <li class=\"block__list-item\">Your Reliable Dedicated Team</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- <section class=\"block__stack \">\r\n  <div class=\"block__stack-body grid grid--collapse h-100vh \">\r\n    <div class=\"block__stack-item col--1-3 p--md\">\r\n      <h2 class=\"block__title\">\r\n        Custom Web\r\n      </h2>\r\n      <p class=\"block__text\">\r\n        We listen to you carefully because it’s important to deliver exactly what you requested.\r\n        We lavish attention on you to deliver even more than you expected.\r\n        We share our experience in building solid and reasonable architecture & solutions.\r\n\r\n        Today the web world offers a variety of solutions both for your business and your customers. We consider the\r\n        latest trends and choose the most efficient ones to bring you from MVP to scalable products.\r\n      </p>\r\n    </div>\r\n    <div class=\"block__stack-item col--1-3 p--md\">\r\n      <h2 class=\"block__title\">\r\n        Mobile App\r\n      </h2>\r\n      <p class=\"block__text\">\r\n        With millions of operations that smart phone users process daily, the mobile industry has become an effective\r\n        channel to extend your business. The proper usage of these technologies may contribute a lot to businesses by\r\n        lowering expenses and enhancing productivity within the major business functions.\r\n      </p>\r\n    </div>\r\n    <div class=\"block__stack-item col--1-3 p--md\">\r\n      <h2 class=\"block__title\">\r\n        UX/UI DESIGN\r\n      </h2>\r\n      <p class=\"block__text\">\r\n        Something that looks great but is difficult to use is an example of great UI and poor UX. While something very\r\n        usable that looks terrible is an example of great UX and poor UI.\r\n        By accommodating the best UI/UX practices and utilizing the amenities of our onsite photo studio, our team is\r\n        able to create designs of any complexity to develop your branding and advertising campaigns.\r\n      </p>\r\n    </div>\r\n    <div class=\"block__stack-item col--1-3 p--md\">\r\n      <ul class=\"block__list m--reset\">\r\n        With the technical expertise in Node.js, AngularJS and React our web development team is able to cope with any\r\n        engineering challenge to create:\r\n        <li class=\"block__list-item\">SaaS and Cloud Computing;</li>\r\n        <li class=\"block__list-item\">CRM & ERP Systems;</li>\r\n        <li class=\"block__list-item\">High-load Applications;</li>\r\n        <li class=\"block__list-item\">Enterprise & Intranet Platforms;</li>\r\n        <li class=\"block__list-item\">E-commerce Solutions;</li>\r\n        <li class=\"block__list-item\">Geo-based Applications.</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"block__stack-item col--1-3 p--md\">\r\n      <ul class=\"block__list m--reset\">\r\n        By handling the following technologies:\r\n        <li class=\"block__list-item\">Swift;</li>\r\n        <li class=\"block__list-item\">Objective-C;</li>\r\n        <li class=\"block__list-item\">Java;</li>\r\n        <li class=\"block__list-item\">Kotlin;</li>\r\n        <li class=\"block__list-item\">React Native;</li>\r\n        <li class=\"block__list-item\">Cordova;</li>\r\n        <li class=\"block__list-item\">Ionic;</li>\r\n        <li class=\"block__list-item\">PhoneGap.</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"block__stack-item col--1-3 p--md\">\r\n      <ul class=\"block__list m--reset\">\r\n        Our services include:\r\n        <li class=\"block__list-item\">Product Structure and Strategy\r\n          ;</li>\r\n        <li class=\"block__list-item\">Prototyping;</li>\r\n        <li class=\"block__list-item\">Design Research\r\n          ;</li>\r\n        <li class=\"block__list-item\">UI Prototyping;</li>\r\n        <li class=\"block__list-item\">Branding and Graphic Development;</li>\r\n        <li class=\"block__list-item\">Interactivity and Animation;</li>\r\n        <li class=\"block__list-item\">Adaptation to All the Devices Screen-size;</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</section> -->\r\n\r\n<section class=\"block block--gray\">\r\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\r\n\r\n  <div class=\"block__overlay\">189K</div>\r\n\r\n  <div class=\"block__body\">\r\n    <div class=\"container\">\r\n      <div class=\"grid\">\r\n        <div class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1\">\r\n          <h2 class=\"block__title\">\r\n            More than 189K of unique users of our system per 3 years\r\n          </h2>\r\n\r\n          <p class=\"block__text\">Around 1200 of new visitors per day.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"block block--violet\">\r\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\r\n\r\n  <div class=\"block__overlay\">\r\n    94%\r\n  </div>\r\n\r\n  <div class=\"block__body\">\r\n    <div class=\"container\">\r\n      <div class=\"grid\">\r\n        <div class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1 \">\r\n          <h2 class=\"block__title\">\r\n              According to the recent survey, more than 94% of our clients are assured to\r\n              continue working with us in future & to recommend our services to their contacts.\r\n          </h2>\r\n          <p class=\"block__text\">\r\n            We invite you to explore their comments on your own.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"block block--white\">\r\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\r\n\r\n  <div class=\"block__overlay\">«</div>\r\n\r\n  <div class=\"block__body\">\r\n    <div class=\"container\">\r\n      <app-slider></app-slider>\r\n      <!-- <div class=\"grid\">\r\n        <div class=\"col--xlg-4-6 col--lg-4-6 col--md-1-1 col--sm-1-1 col--xs-1-1 \">\r\n          <app-slider></app-slider>\r\n        </div>\r\n        <div class=\"col--xlg-1-6 col--lg-1-6 col--md-1-1 col--sm-1-1 col--xs-1-1 push--lg-1-6 \">\r\n          <div class=\"block__logo flex flex--center flex--wrap\">\r\n            <div class=\"block__logo-item\" [inlineSVG]=\"'/assets/img/logo/SolidExpert-logo-color.svg'\"></div>\r\n            <div class=\"block__logo-item\" [inlineSVG]=\"'/assets/img/logo/SolidExpert-logo-color.svg'\"></div>\r\n            <div class=\"block__logo-item\" [inlineSVG]=\"'/assets/img/logo/SolidExpert-logo-color.svg'\"></div>\r\n            <div class=\"block__logo-item\" [inlineSVG]=\"'/assets/img/logo/SolidExpert-logo-color.svg'\"></div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"block block--gray\">\r\n  <app-grid-line [color]=\"'rgba(255, 255, 255, 0.1)'\"></app-grid-line>\r\n\r\n  <div class=\"block__overlay\">18+</div>\r\n\r\n  <div class=\"block__body\">\r\n    <div class=\"container\">\r\n      <div class=\"grid\">\r\n        <div class=\"col--xlg-3-5 col--lg-3-5 col--md-1-1 col--sm-1-1 col--xs-1-1\">\r\n          <h2 class=\"block__title\">\r\n            Are you eager to make the digital world better for everyone?\r\n          </h2>\r\n          <p class=\"block__text\">\r\n            Join our ambitious and friendly team to make it happen!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

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

/***/ "./src/app/pages/poducts-details/poducts-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/poducts-details/poducts-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details container-fluid\">\r\n  <app-block-first></app-block-first>\r\n  <app-block-second></app-block-second>\r\n  <app-block-third></app-block-third>\r\n  <app-block-fourth></app-block-fourth>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/poducts-details/poducts-details.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/pages/poducts-details/poducts-details.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details {\n  background: #EEF1F1;\n  padding: 10rem 0;\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .details {\n    padding: 5rem 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/pages/poducts-details/poducts-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/poducts-details/poducts-details.component.ts ***!
  \********************************************************************/
/*! exports provided: PoductsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoductsDetailsComponent", function() { return PoductsDetailsComponent; });
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

var PoductsDetailsComponent = /** @class */ (function () {
    function PoductsDetailsComponent() {
    }
    PoductsDetailsComponent.prototype.ngOnInit = function () {
    };
    PoductsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-poducts-details',
            template: __webpack_require__(/*! ./poducts-details.component.html */ "./src/app/pages/poducts-details/poducts-details.component.html"),
            styles: [__webpack_require__(/*! ./poducts-details.component.less */ "./src/app/pages/poducts-details/poducts-details.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], PoductsDetailsComponent);
    return PoductsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/products-list-page/products-list-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/products-list-page/products-list-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block block--green\" *ngFor=\"let item of productList\">\r\n  <div class=\"block__overlay block__overlay--img\" *ngIf=\"item?.background_image\" [style.background-image]=\"'url(' + item?.background_image + ')'\"></div>\r\n\r\n  <div class=\"block__body\">\r\n    <div class=\"container\">\r\n      <div class=\"grid\">\r\n        <div class=\"col--1-1\">\r\n          <h1 class=\"block__title\" *ngIf=\"item?.title\">{{item?.title}}</h1>\r\n          <h2 class=\"block__subtitle\" *ngIf=\"item?.subtitle\">\r\n            {{item?.subtitle}}\r\n          </h2>\r\n        </div>\r\n\r\n        <div class=\"col--2-5 col--sm-4-5 col--xs-4-5 push--1-5\" *ngIf=\"item?.text\">\r\n          <p class=\"block__text\">\r\n            {{item?.text}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<div class=\"services container-fluid\">\r\n  <header class=\"services__header block\">\r\n    <h1 class=\"services__header-title\">\r\n      SERVICES\r\n    </h1>\r\n    <h2 class=\"services__header-subtitle t--r t--italic t--blue t-xs--h4 m--v-lg m-xs--v-md\">\r\n      Lightweight solutions specifically tailored for your needs & to your\r\n      requirements.\r\n    </h2>\r\n    <h2 class=\"services__header-subtitle t--r t--italic t--blue t-xs--h4 m--v-lg m-xs--v-md\">\r\n      We make apps that easily integrate with what people need and expect from a\r\n      trusted digital product.\r\n    </h2>\r\n    <h2 class=\"services__header-subtitle t--r t--italic t--blue t-xs--h4 m--v-lg m-xs--v-md\">\r\n      Our team is experiences to support you with both native or cross-platform\r\n      mobile development.\r\n    </h2>\r\n  </header>\r\n\r\n  <main class=\"container\">\r\n    <article class=\"services__custom grid \">\r\n      <section class=\"col--md-1-2 col--sm-1-1 col--xs-1-1\">\r\n        <h2 class=\"services__title t--h3 t-xs--h4\">Custom Web Development</h2>\r\n        <p class=\"services__text t--h4 t-xs--h5\">\r\n          We listen to you carefully because it’s important to deliver exactly\r\n          what you requested. We lavish attention on you to deliver even more\r\n          than you expected. We share our experience in building solid and\r\n          reasonable architecture & solutions.\r\n        </p>\r\n        <p class=\"services__text t--h4 t-xs--h5\">\r\n          Today the web world offers a variety of solutions both for your\r\n          business and your customers. We consider the latest trends and choose\r\n          the most efficient ones to bring you from MVP to scalable products.\r\n        </p>\r\n\r\n        <ul class=\"services__list\">\r\n          <span class=\"t--bold\">With the technical expertise in full-stack .Net, Node.js, AngularJS and React our\r\n            web development team is able to cope with any engineering challenge\r\n            to create:\r\n          </span>\r\n\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">SaaS and Cloud Computing;</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">CRM & ERP Systems;</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">High-load Applications;</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Enterprise & Intranet Platforms;</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">E-commerce Solutions;</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Geo-based Applications.</span>\r\n          </li>\r\n        </ul>\r\n      </section>\r\n\r\n      <section class=\"services__img  col--md-1-2 col--sm-1-1 col--xs-1-1\">\r\n        <div class=\"services__img--custom  h-100\"></div>\r\n      </section>\r\n    </article>\r\n\r\n    <article class=\"services__mobile grid\">\r\n      <section class=\"services__img col--md-1-2 col--sm-1-1 col--xs-1-1\">\r\n        <div class=\"services__img--mobile h-100\"></div>\r\n      </section>\r\n\r\n      <section class=\"col--md-1-2 col--sm-1-1 col--xs-1-1\">\r\n        <h2 class=\"services__title t--h3 t-xs--h4\">Mobile App Development</h2>\r\n        <p class=\"services__text t--h4 t-xs--h5\">\r\n          With millions of operations that smart phone users process daily, the\r\n          mobile industry has become an effective channel to extend your\r\n          business. The proper usage of these technologies may contribute a lot\r\n          to businesses by lowering expenses and enhancing productivity within\r\n          the major business functions.\r\n        </p>\r\n        <ul class=\"services__list \">\r\n          <span class=\"t--bold\">By handling the following technologies:</span>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Swift</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Objective-C</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Java</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Kotlin</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">React Native</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Cordova</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Ionic</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">PhoneGap</span>\r\n          </li>\r\n        </ul>\r\n        <!--\r\n          <p class=\"services__mobile-text t--h4 t-xs--h4\">\r\n            Our team is experiences to support you with both native or\r\n            cross-platform mobile development.\r\n          </p>\r\n          <p class=\"services__mobile-text t--h4 t-xs--h4\">\r\n            We make apps that easily integrate with what people need and expect\r\n            from a trusted digital product.\r\n          </p>\r\n        -->\r\n      </section>\r\n\r\n      <section class=\"col--1-1 m--t-lg m-xs--t-md\">\r\n        <p class=\"services__text t--c t--italic t--blue t--h4 t-xs--h5\">\r\n          CONTUCT US now and get a fully functioning app your customers will\r\n          love.\r\n        </p>\r\n        <app-button-form></app-button-form>\r\n      </section>\r\n    </article>\r\n\r\n    <article class=\"services__design grid\">\r\n      <section class=\"col--md-1-2 col--sm-1-1 col--xs-1-1\">\r\n        <h2 class=\"services__title t--h3 t-xs--h4\">UX/UI DESIGN</h2>\r\n        <p class=\"services__text t--h4 t-xs--h5\">\r\n          Something that looks great but is difficult to use is an example of\r\n          great UI and poor UX. While something very usable that looks terrible\r\n          is an example of great UX and poor UI.\r\n        </p>\r\n        <p class=\"services__text t--h4 t-xs--h5\">\r\n          By accommodating the best UI/UX practices and utilizing the amenities\r\n          of our onsite photo studio, our team is able to create designs of any\r\n          complexity to develop your branding and advertising campaigns.\r\n        </p>\r\n        <ul class=\"services__list\">\r\n          <span class=\"t--bold\">Our services include:</span>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\"> Product Structure and Strategy</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Prototyping</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Design Research</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">UI Prototyping</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Branding and Graphic Development</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Interactivity and Animation</span>\r\n          </li>\r\n          <li class=\"services__list-item t--blue\">\r\n            <span class=\"services__list-text\">Adaptation to All the Devices Screen-size</span>\r\n          </li>\r\n        </ul>\r\n      </section>\r\n\r\n      <section class=\"services__img col--md-1-2 col--sm-1-1 col--xs-1-1\">\r\n        <div class=\"services__img--design h-100\"></div>\r\n      </section>\r\n\r\n      <section class=\"col--1-1 m--t-lg m-xs--t-lg\">\r\n        <p class=\"services__text t--r t--italic t--blue t--h4 t-xs--h5\">\r\n          Want to enhance your business with a hi-tech solution?\r\n        </p>\r\n        <p class=\"services__text t--r t--italic t--blue t--h4 t-xs--h5\">\r\n          FILL OUT a form and we’ll get back to you shortly to discuss your next\r\n          digital successful story!\r\n        </p>\r\n      </section>\r\n    </article>\r\n  </main>\r\n  <!-- <app-button-form></app-button-form> -->\r\n</div>\r\n"

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
/* harmony import */ var _pages_poducts_details_poducts_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/poducts-details/poducts-details.component */ "./src/app/pages/poducts-details/poducts-details.component.ts");


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
    { path: 'products/:shortcut', component: _pages_poducts_details_poducts_details_component__WEBPACK_IMPORTED_MODULE_7__["PoductsDetailsComponent"] },
];
var route = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/ui/button-form/button-form.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ui/button-form/button-form.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <section class=\"page-form t--c\" [ngClass]=\"{'open': isShownForm}\">\r\n    <button\r\n      (click)=\"shownForm()\"\r\n      class=\"page-form__button position--r  t--h1 t--bold t--c  m--v-min m-xs--v-mini \"\r\n      role=\"button\"\r\n      aria-label=\"Contact-Button\">\r\n\r\n      <span class=\"page-form__button-line page-form__button-line--left position--a\"></span>\r\n      <span class=\"page-form__button-line page-form__button-line--right position--a\"></span>\r\n    </button>\r\n    <div class=\"page-form__body p--md\">\r\n      <app-form></app-form>\r\n    </div>\r\n  </section>\r\n"

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

module.exports = "<footer class=\"footer container\">\r\n  <div class=\"grid grid--collapse m--v-md\">\r\n    <!-- <ul class=\"footer__statment col--md-1-5 col--sm-1-3 col--xs-1-1\">\r\n      <li>\r\n        <a class=\"footer__statment-link link link--reset t--uppercase t--bold t--gray \" href=\"\">Privacy statement</a>\r\n      </li>\r\n      <li>\r\n        <a class=\"footer__statment-link link link--reset t--uppercase t--bold t--gray \" href=\"\">Cookie statement</a>\r\n      </li>\r\n    </ul> -->\r\n    <ul class=\"footer__nav footer__nav-left col--1-5\">\r\n\r\n      <li>\r\n        <a class=\"footer__nav-link link link--reset  t--h4 t--bold \" [routerLink]=\"['/services']\">Services</a>\r\n      </li>\r\n      <li>\r\n        <a class=\"footer__nav-link link link--reset  t--h4 t--bold \" [routerLink]=\"['/products']\">Products</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"footer__nav footer__nav-right col--1-5\">\r\n      <!-- <li>\r\n        <a class=\"footer__nav-link link link--reset  t--h4 t--bold \" [routerLink]=\"['/careers']\">Careers</a>\r\n      </li> -->\r\n      <!-- <li>\r\n        <a class=\"footer__nav-link link link--reset t--h4 t--bold \" [routerLink]=\"['/testimonials']\">Testimonials</a>\r\n      </li> -->\r\n      <li>\r\n        <a class=\"footer__nav-link link link--reset  t--h4 t--bold \" [routerLink]=\"['/about']\">About</a>\r\n      </li>\r\n      <li>\r\n        <a class=\"footer__nav-link link link--reset t--h4 t--bold \" [routerLink]=\"['/contact']\">Contact Us</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"footer__contact col--md-1-5 col--sm-1-3 col--xs-1-1 \">\r\n      <ul class=\"footer__contact-list \">\r\n        <li class=\"footer__contact-list-item\">\r\n          <a class=\"footer__nav-link link link--reset t--h4 t--bold \" [routerLink]=\"['/']\">\r\n            Solid Expert Ltd.\r\n          </a>\r\n        </li>\r\n        <!-- LINK TO GOOGLE MAPS ???? -->\r\n        <li class=\"footer__contact-list-item\">\r\n          <a class=\"link link--reset link--hover-line\" href=\"\">Nemiga 3, Minsk</a>\r\n        </li>\r\n        <li class=\"footer__contact-list-item\">\r\n          <a class=\"link link--reset link--hover-line\" href=\"tel:+19193233612\">+1-919-323-36-12</a>\r\n        </li>\r\n        <li class=\"footer__contact-list-item\">\r\n          <a class=\"link link--reset link--hover-line\" href=\"mailto:info@solidexpert.pro\">info@solidexpert.pro</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"footer__social col--md-1-5 col--sm-1-3 col--xs-1-1 m-xs--v-mini\">\r\n      <a class=\"footer__social-link link \" href=\"mailto:info@solidexpert.pro\">\r\n        <div class=\"svg\" [inlineSVG]=\"'/assets/img/icons/email.svg'\" alt=\"Email\"></div>\r\n      </a>\r\n      <a class=\"footer__social-link link\" href=\"https://www.linkedin.com/company/solidexpertltd\" target=\"_blanc\">\r\n        <div class=\"svg\" [inlineSVG]=\"'/assets/img/icons/linkedin.svg'\" alt=\"Linkedin\"></div>\r\n      </a>\r\n      <a class=\"footer__social-link link \" href=\"https://www.facebook.com/solidexpert.ltd/\" target=\"_blanc\">\r\n        <div class=\"svg\" [inlineSVG]=\"'/assets/img/icons/facebook.svg'\" alt=\"Facebook\"></div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

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

module.exports = "<section class=\"form t--c\">\r\n  <div class=\"grid\">\r\n    <div class=\"col--md-1-2 col--sm-1-1 col--xs-1-1\">\r\n      <input class=\"form__input\"\r\n        name=\"yourName\"\r\n        type=\"text\"\r\n        [(ngModel)]=\"yourName\"\r\n        placeholder=\"Your name\"\r\n      />\r\n\r\n      <input class=\"form__input\"\r\n        name=\"contactInfo_Phone_1\"\r\n        [(ngModel)]=\"contactInfo_Phone_1\"\r\n        type=\"tel\"\r\n        placeholder=\"Telephone number\"\r\n      />\r\n\r\n      <input class=\"form__input\"\r\n        name=\"contactInfo_Email_1\"\r\n        [(ngModel)]=\"contactInfo_Email_1\"\r\n        type=\"email\"\r\n        placeholder=\"E-mail address\"\r\n      />\r\n\r\n    </div>\r\n    <div class=\"col--md-1-2 col--sm-1-1 col--xs-1-1\">\r\n      <textarea class=\"form__input form__input-message\"\r\n        name=\"message\"\r\n        id=\"message\"\r\n        cols=\"\"\r\n        rows=\"\"\r\n        placeholder=\"Your message\"\r\n      ></textarea>\r\n    </div>\r\n  </div>\r\n\r\n   <button (click)=\"click()\" class=\"btn btn--md btn--blue m--v-lg m-xs--sm\">\r\n    Send\r\n  </button>\r\n\r\n\r\n</section>\r\n\r\n"

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

module.exports = "<div class=\"header\" [ngClass]=\"{'open': isShowMenu}\">\r\n    <button role=\"button\" aria-label=\"Menu Button\" class=\"header__burger\" (click)=\"showMenu()\">\r\n      <span class=\"header__burger-line header__burger-line--upper\"></span>\r\n      <span class=\"header__burger-line header__burger-line--lower\"></span>\r\n    </button>\r\n    <div class=\"container header__body\">\r\n        <div class=\"grid\">\r\n            <div class=\"col--1-5 push--1-5\">\r\n                <ul class=\"header__list\">\r\n                    <li class=\"header__item\">\r\n                        <a [routerLink]=\"['/']\" class=\"header__link\">Home</a>\r\n                    </li>\r\n                    <li class=\"header__item\">\r\n                         <a [routerLink]=\"['/development']\" class=\"header__link\">Development</a>\r\n                    </li>\r\n                    <li class=\"header__item\">\r\n                        <a [routerLink]=\"['/products']\" class=\"header__link\">Products</a>\r\n                    </li>\r\n                    <li class=\"header__item\">\r\n                        <a [routerLink]=\"['/services']\" class=\"header__link\">Services</a>\r\n                    </li>\r\n                    <li class=\"header__item\">\r\n                        <a [routerLink]=\"['/contact']\" class=\"header__link\">Contact Us</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col--2-5 push--2-5\">\r\n              <app-form></app-form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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

module.exports = "<nav class=\"nav\"[ngClass]=\"{'open': isShowMenu}\">\r\n  \t<a routerLink=\"/\">\r\n\t\t<div class=\"nav__logo\" aria-label=\"My icon\" [inlineSVG]=\"'/assets/svg/logo.svg'\"></div>\r\n\t</a>\r\n\r\n\t<button role=\"button\" aria-label=\"Menu Button\" class=\"nav__burger\" (click)=\"showMenu()\">\r\n\t\t<span class=\"nav__burger-line nav__burger-line--upper\"></span>\r\n\t\t<span class=\"nav__burger-line nav__burger-line--lower\"></span>\r\n\t</button>\r\n\r\n  \t<ul class=\"nav__menu nav__menu-links\">\r\n\t\t<li class=\"nav__item\">\r\n\t\t\t<a [routerLink]=\"['/products']\" routerLinkActive=\"active\" class=\"nav__link\">Products</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav__item\">\r\n\t\t\t<a [routerLink]=\"['/services']\" routerLinkActive=\"active\" class=\"nav__link\">Services</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav__item\">\r\n\t\t\t<a [routerLink]=\"['/about']\" routerLinkActive=\"active\" class=\"nav__link\">About us</a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class=\"nav__menu nav__menu-request\">\r\n\t\t<li class=\"nav__item\">\r\n\t\t\t<a [routerLink]=\"[ '/contact' ]\" routerLinkActive=\"active\" class=\"nav__link \">Send Request</a>\r\n\t\t</li>\r\n\t</ul>\r\n</nav>\r\n"

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

/***/ "./src/app/ui/poducts-details/block-first/block-first.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/ui/poducts-details/block-first/block-first.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"first-block grid\">\r\n  <div class=\"first-block__description col--lg-2-6 col--md-4-6 col--sm-4-6 col--xs-4-6 push--lg-1-6 push--md-1-6 push--sm-1-6 push--xs-1-6\">\r\n\r\n   <h1 class=\"title\">Your Favorite Devices Mockup Pack</h1>\r\n   <h3 class=\"subtitle\">for Sketch and Photoshop</h3>\r\n   <p class=\"text\">\r\n     Super clean, minimalistic, stylized mockup collection with awesome customization features and huge resolution\r\n   </p>\r\n   <img class=\"arrow\"\r\n        alt=\"arrow down\"\r\n        src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBDMTE0LjgzMywwLDAsMTE0Ljg0NCwwLDI1NnMxMTQuODMzLDI1NiwyNTYsMjU2czI1Ni0xMTQuODQ0LDI1Ni0yNTZTMzk3LjE2NywwLDI1NiwweiBNMzcwLjIwOCwzMTYuODc1ICAgIEwyNjMuNTQyLDQyMy41NDJjLTQuMTY3LDQuMTY3LTEwLjkxNyw0LjE2Ny0xNS4wODMsMEwxNDEuNzkyLDMxNi44NzVjLTMuMDQyLTMuMDUyLTMuOTU4LTcuNjM1LTIuMzEzLTExLjYyNSAgICBjMS42NDYtMy45OSw1LjU0Mi02LjU4Myw5Ljg1NC02LjU4M2gzMmMyLjgzMywwLDUuNTQyLDEuMTI1LDcuNTQyLDMuMTI1bDQ1Ljc5Miw0NS43OTJWOTZjMC01Ljg5Niw0Ljc3MS0xMC42NjcsMTAuNjY3LTEwLjY2NyAgICBoMjEuMzMzYzUuODk2LDAsMTAuNjY3LDQuNzcxLDEwLjY2NywxMC42Njd2MjUxLjU4M2w0NS43OTItNDUuNzkyYzItMiw0LjcwOC0zLjEyNSw3LjU0Mi0zLjEyNWgzMiAgICBjNC4zMTMsMCw4LjIwOCwyLjU5NCw5Ljg1NCw2LjU4M0MzNzQuMTY3LDMwOS4yNCwzNzMuMjUsMzEzLjgyMywzNzAuMjA4LDMxNi44NzV6IiBmaWxsPSIjNTRhNGZmIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\" />\r\n  </div>\r\n\r\n  <div class=\"first-block__picture col--lg-3-6 col--md-4-6 col--sm-4-6 col--xs-4-6 push--lg-1-6 push--md-1-6 push--sm-1-6 push--xs-1-6 position--r\">\r\n   <!-- <img class=\"first-block__picture-backdrop img position--r\" src=\"https://uploads-ssl.webflow.com/5a4e0f14056b6a0001011f8d/5a4e0f14056b6a0001011fe9_Svg%20Bg.svg\" alt=\"backdrop\"> -->\r\n   <img class=\"first-block__picture-main img position--a\" src=\"/assets/img/product-list/details/laptop.png\" alt=\"laptop\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/poducts-details/block-first/block-first.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/ui/poducts-details/block-first/block-first.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".first-block {\n  height: 100%;\n}\n.first-block .first-block__description {\n  height: 100vh;\n  z-index: 2;\n}\n.first-block .first-block__picture-main {\n  top: 0px;\n  left: 0px;\n}\n.first-block .arrow {\n  transition: all 1s;\n  margin-top: 8rem;\n}\n.first-block .arrow:hover {\n  -webkit-transform: scale3d(1.2, 1.2, 1.2);\n  transform: scale3d(1.2, 1.2, 1.2);\n}\n.first-block .img {\n  width: 100%;\n  max-width: 100%;\n}\n.first-block .title {\n  font-size: 6rem;\n  line-height: 6.5rem;\n  font-weight: 500;\n  margin-bottom: 2rem;\n  color: #54a4ff;\n}\n.first-block .subtitle {\n  font-size: 2rem;\n  line-height: 2.5rem;\n  font-weight: 500;\n  margin-bottom: 2rem;\n  color: #A7AEB3;\n}\n.first-block .text {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 400;\n  margin-bottom: 1.5rem;\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .first-block .first-block__description {\n    height: 30vh;\n  }\n  .first-block .first-block__picture {\n    height: 50vh;\n  }\n  .first-block .title {\n    font-size: 4rem;\n    line-height: 4.5rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .first-block .first-block__description {\n    height: 30vh;\n  }\n  .first-block .first-block__picture {\n    height: 50vh;\n  }\n  .first-block .title {\n    font-size: 3rem;\n    line-height: 3.5rem;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .first-block .first-block__description {\n    height: 100%;\n  }\n  .first-block .first-block__picture {\n    height: 30vh;\n  }\n  .first-block .title {\n    font-size: 2rem;\n    line-height: 2.5rem;\n    font-weight: 600;\n  }\n  .first-block .subtitle {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n  .first-block .arrow {\n    width: 2rem;\n    margin-top: 4rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/ui/poducts-details/block-first/block-first.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ui/poducts-details/block-first/block-first.component.ts ***!
  \*************************************************************************/
/*! exports provided: BlockFirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockFirstComponent", function() { return BlockFirstComponent; });
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

var BlockFirstComponent = /** @class */ (function () {
    function BlockFirstComponent() {
    }
    BlockFirstComponent.prototype.ngOnInit = function () {
    };
    BlockFirstComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-first',
            template: __webpack_require__(/*! ./block-first.component.html */ "./src/app/ui/poducts-details/block-first/block-first.component.html"),
            styles: [__webpack_require__(/*! ./block-first.component.less */ "./src/app/ui/poducts-details/block-first/block-first.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockFirstComponent);
    return BlockFirstComponent;
}());



/***/ }),

/***/ "./src/app/ui/poducts-details/block-fourth/block-fourth.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ui/poducts-details/block-fourth/block-fourth.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fourht-block grid\">\r\n  <!-- <h2 class=\"col--4-6 push--1-6 title\">Unlimited possibilities</h2> -->\r\n  <div class=\"fourht-block__description col--4-6 push--1-6\">\r\n    <div class=\"grid\">\r\n      <h2 class=\"col--3-5 title\">Unlimited possibilities</h2>\r\n      <div class=\"fourht-block__description-left position--r col--lg-3-5 col--md--1-1 \">\r\n        <h3 class=\"subtitle--black w--60\">For beautiful stylized presentations</h3>\r\n        <img class=\"fourht-block__description-left-img img position--a\" src=\"/assets/img/product-list/details/presentation.png\" alt=\"presentation style\">\r\n      </div>\r\n      <div class=\"fourht-block__description-right position--r col--lg-2-5 col--md-1-1\">\r\n        <div class=\"fourht-block__description-right-backdrop\">\r\n          <img class=\"fourht-block__description-right-img img\" src=\"/assets/img/product-list/details/media.png\" alt=\"media style\">\r\n          <h3 class=\"subtitle--black\">For social media posts</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/poducts-details/block-fourth/block-fourth.component.less":
/*!*****************************************************************************!*\
  !*** ./src/app/ui/poducts-details/block-fourth/block-fourth.component.less ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fourht-block .fourht-block__description {\n  z-index: 2;\n}\n.fourht-block .fourht-block__description-left {\n  height: 90vh;\n  padding: 4rem;\n  background-color: #E1E5E6;\n  border-radius: 10px;\n}\n.fourht-block .fourht-block__description-left-img {\n  left: 0px;\n  bottom: 0px;\n}\n.fourht-block .fourht-block__description-right {\n  margin-top: -10%;\n  border-radius: 10px;\n}\n.fourht-block .fourht-block__description-right-backdrop {\n  padding: 15% 10%;\n  background-color: #fff;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n.fourht-block .fourht-block__description-right-img {\n  margin-bottom: 8rem;\n}\n.fourht-block .w--60 {\n  width: 60%;\n}\n.fourht-block .img {\n  width: 100%;\n  max-width: 100%;\n}\n.fourht-block .title {\n  font-size: 6rem;\n  line-height: 6.5rem;\n  font-weight: 500;\n  margin-bottom: 2rem;\n  color: #54a4ff;\n}\n.fourht-block .subtitle {\n  font-size: 2rem;\n  line-height: 2.5rem;\n  font-weight: 500;\n  margin-bottom: 2rem;\n  color: #A7AEB3;\n}\n.fourht-block .subtitle--black {\n  color: #535261;\n  font-size: 3.8rem;\n  line-height: 4rem;\n  font-weight: 500;\n  margin-bottom: 2rem;\n}\n.fourht-block .text {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 400;\n  margin-bottom: 1.5rem;\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .fourht-block {\n    height: 100%;\n  }\n  .fourht-block .fourht-block__description-left {\n    height: 60vh;\n  }\n  .fourht-block .fourht-block__description-right {\n    padding-left: 0;\n    margin-top: 1rem;\n  }\n  .fourht-block .fourht-block__description-right-img {\n    margin-bottom: 2rem;\n  }\n  .fourht-block .title {\n    font-size: 3rem;\n    line-height: 3.5rem;\n    font-weight: 500;\n    margin-bottom: 2rem;\n    color: #54a4ff;\n  }\n  .fourht-block .subtitle--black {\n    color: #535261;\n    font-size: 2.8rem;\n    line-height: 3rem;\n    font-weight: 500;\n    margin-bottom: 2rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .fourht-block {\n    height: 100%;\n  }\n  .fourht-block .fourht-block__description-left {\n    height: 60vh;\n  }\n  .fourht-block .fourht-block__description-right {\n    padding-left: 0;\n    margin-top: 1rem;\n  }\n  .fourht-block .fourht-block__description-right-img {\n    margin-bottom: 2rem;\n  }\n  .fourht-block .title {\n    font-size: 3rem;\n    line-height: 3.5rem;\n    font-weight: 500;\n    margin-bottom: 2rem;\n    color: #54a4ff;\n  }\n  .fourht-block .subtitle--black {\n    color: #535261;\n    font-size: 2rem;\n    line-height: 2.5rem;\n    font-weight: 500;\n    margin-bottom: 2rem;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .fourht-block {\n    height: 100%;\n  }\n  .fourht-block .fourht-block__description-left {\n    height: 60vh;\n  }\n  .fourht-block .fourht-block__description-right {\n    padding-left: 0;\n    margin-top: 1rem;\n  }\n  .fourht-block .fourht-block__description-right-img {\n    margin-bottom: 2rem;\n  }\n  .fourht-block .title {\n    font-size: 2rem;\n    line-height: 2.5rem;\n    font-weight: 600;\n  }\n  .fourht-block .subtitle {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n  .fourht-block .subtitle--black {\n    font-size: 1.6rem;\n    line-height: 1.8rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/ui/poducts-details/block-fourth/block-fourth.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui/poducts-details/block-fourth/block-fourth.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlockFourthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockFourthComponent", function() { return BlockFourthComponent; });
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

var BlockFourthComponent = /** @class */ (function () {
    function BlockFourthComponent() {
    }
    BlockFourthComponent.prototype.ngOnInit = function () {
    };
    BlockFourthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-fourth',
            template: __webpack_require__(/*! ./block-fourth.component.html */ "./src/app/ui/poducts-details/block-fourth/block-fourth.component.html"),
            styles: [__webpack_require__(/*! ./block-fourth.component.less */ "./src/app/ui/poducts-details/block-fourth/block-fourth.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockFourthComponent);
    return BlockFourthComponent;
}());



/***/ }),

/***/ "./src/app/ui/poducts-details/block-second/block-second.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ui/poducts-details/block-second/block-second.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"second-block grid\">\r\n    <div class=\"second-block__picture col--lg-1-6 col--md-2-10 col--sm-2-10 col--xs-4-10 push--lg-1-6 push--md-1-10 push--sm-1-10 push--xs-3-10 position--r\">\r\n      <!-- <div class=\" second-block__picture-backdrop  position--a\"> </div> -->\r\n      <img class=\" second-block__picture-main img position--a\" src=\"/assets/img/product-list/details/tel.png\" alt=\"phone\">\r\n      <img  class=\"second-block__picture-icon position--a\" alt=\"arrow\" src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBDMTE0LjgzMywwLDAsMTE0Ljg0NCwwLDI1NnMxMTQuODMzLDI1NiwyNTYsMjU2czI1Ni0xMTQuODQ0LDI1Ni0yNTZTMzk3LjE2NywwLDI1NiwweiBNMzcwLjIwOCwzMTYuODc1ICAgIEwyNjMuNTQyLDQyMy41NDJjLTQuMTY3LDQuMTY3LTEwLjkxNyw0LjE2Ny0xNS4wODMsMEwxNDEuNzkyLDMxNi44NzVjLTMuMDQyLTMuMDUyLTMuOTU4LTcuNjM1LTIuMzEzLTExLjYyNSAgICBjMS42NDYtMy45OSw1LjU0Mi02LjU4Myw5Ljg1NC02LjU4M2gzMmMyLjgzMywwLDUuNTQyLDEuMTI1LDcuNTQyLDMuMTI1bDQ1Ljc5Miw0NS43OTJWOTZjMC01Ljg5Niw0Ljc3MS0xMC42NjcsMTAuNjY3LTEwLjY2NyAgICBoMjEuMzMzYzUuODk2LDAsMTAuNjY3LDQuNzcxLDEwLjY2NywxMC42Njd2MjUxLjU4M2w0NS43OTItNDUuNzkyYzItMiw0LjcwOC0zLjEyNSw3LjU0Mi0zLjEyNWgzMiAgICBjNC4zMTMsMCw4LjIwOCwyLjU5NCw5Ljg1NCw2LjU4M0MzNzQuMTY3LDMwOS4yNCwzNzMuMjUsMzEzLjgyMywzNzAuMjA4LDMxNi44NzV6IiBmaWxsPSIjNTRhNGZmIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\" />\r\n    </div>\r\n    <div class=\"second-block__description col--lg-2-6 col--md-4-10 col--sm-4-10 col--xs-8-10 push--lg-2-6 push--md-3-10 push--xs-1-10 push--sm-3-10 \">\r\n     <h2 class=\"title\">Easy-to-use</h2>\r\n     <h3 class=\"subtitle\">Just choose mockup, open in your favorite software and paste your screenshot.</h3>\r\n     <p class=\"text\">\r\n        For Sketch version you also need to install free Magic Mirror plugin.\r\n     </p>\r\n     <button class=\"btn btn--md btn--blue\"> Button 1</button>\r\n     <button class=\"btn btn--md btn--blue\"> Button 2</button>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/ui/poducts-details/block-second/block-second.component.less":
/*!*****************************************************************************!*\
  !*** ./src/app/ui/poducts-details/block-second/block-second.component.less ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".second-block .second-block__description {\n  z-index: 2;\n  height: 90vh;\n}\n.second-block .second-block__picture-main {\n  top: 0px;\n  left: 0px;\n}\n.second-block .second-block__picture-icon {\n  transition: all 1s;\n  top: 0px;\n  right: 0px;\n}\n.second-block .second-block__picture-icon:hover {\n  -webkit-transform: scale3d(1.2, 1.2, 1.2);\n  transform: scale3d(1.2, 1.2, 1.2);\n}\n.second-block .img {\n  width: 100%;\n  max-width: 100%;\n}\n.second-block .title {\n  font-size: 6rem;\n  line-height: 6.5rem;\n  font-weight: 500;\n  margin-bottom: 2rem;\n  color: #54a4ff;\n}\n.second-block .btn {\n  border: 2px solid #54a4ff;\n  height: 4rem;\n  width: 40%;\n  transition: all 1s;\n  margin-right: 5%;\n}\n.second-block .btn:hover {\n  border-color: #EEF1F1;\n}\n.second-block .subtitle {\n  font-size: 2rem;\n  line-height: 2.5rem;\n  font-weight: 500;\n  margin-bottom: 2rem;\n  color: #A7AEB3;\n}\n.second-block .text {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 400;\n  margin-bottom: 1.5rem;\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .second-block .second-block__description {\n    height: 50vh;\n  }\n  .second-block .title {\n    font-size: 4rem;\n    line-height: 4.5rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .second-block .second-block__description {\n    height: 50vh;\n  }\n  .second-block .title {\n    font-size: 3rem;\n    line-height: 3.5rem;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .second-block {\n    flex-wrap: wrap-reverse;\n  }\n  .second-block .second-block__picture {\n    margin-top: 4rem;\n    height: 50vh;\n  }\n  .second-block .second-block__picture-icon {\n    width: 2rem;\n  }\n  .second-block .second-block__description {\n    height: 100%;\n  }\n  .second-block .title {\n    font-size: 2rem;\n    line-height: 2.5rem;\n    font-weight: 600;\n  }\n  .second-block .subtitle {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/ui/poducts-details/block-second/block-second.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui/poducts-details/block-second/block-second.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlockSecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSecondComponent", function() { return BlockSecondComponent; });
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

var BlockSecondComponent = /** @class */ (function () {
    function BlockSecondComponent() {
    }
    BlockSecondComponent.prototype.ngOnInit = function () {
    };
    BlockSecondComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-second',
            template: __webpack_require__(/*! ./block-second.component.html */ "./src/app/ui/poducts-details/block-second/block-second.component.html"),
            styles: [__webpack_require__(/*! ./block-second.component.less */ "./src/app/ui/poducts-details/block-second/block-second.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockSecondComponent);
    return BlockSecondComponent;
}());



/***/ }),

/***/ "./src/app/ui/poducts-details/block-third/block-third.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/ui/poducts-details/block-third/block-third.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"third-block grid\">\r\n  <div class=\"third-block__description col--lg-2-6 col--md-4-10 col--sm-4-10 col--xs-8-10 push--lg-1-6 push--md-1-10 push--sm-1-10 push--xs-1-10\">\r\n    <h2 class=\"title\">Easily change colors of each device</h2>\r\n    <h3 class=\"subtitle\"></h3>\r\n    <p class=\"text\">\r\n      In each device shadows and reflections are in separate layers, this allows you to change the color of objects and accurately adjust lighting\r\n    </p>\r\n    <button class=\"btn btn--md btn--blue\"> Button 1</button>\r\n    <button class=\"btn btn--md btn--blue\"> Button 2</button>\r\n  </div>\r\n\r\n  <div class=\"third-block__picture col--lg-3-6 col--md-5-10 col--sm-5-10 col--xs-8-10 push--lg-1-6  push--sm-1-10 push--xs-1-10 position--r\">\r\n   <img class=\"third-block__picture-main img position--a\"\r\n   src=\"/assets/img/product-list/details/screen.png\"\r\n      alt=\"screen\"\r\n    >\r\n    <!-- <img class=\"third-block__picture-mouse img position--a\"\r\n    src=\"/assets/img/product-list/details/mouse.png\"\r\n      alt=\"mouse\"\r\n    > -->\r\n    <!-- <img class=\"third-block__picture-keyboard img position--a\"\r\n      src=\"/assets/img/product-list/details/keyboard.png\"\r\n      alt=\"keyboard\"\r\n    > -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/poducts-details/block-third/block-third.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/ui/poducts-details/block-third/block-third.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".third-block {\n  height: 100%;\n}\n.third-block .third-block__description {\n  height: 90vh;\n  z-index: 2;\n}\n.third-block .third-block__picture {\n  padding-left: 0;\n}\n.third-block .third-block__picture-keyboard {\n  top: 0px;\n  left: 0px;\n}\n.third-block .third-block__picture-mouse {\n  top: 0px;\n  left: 0px;\n}\n.third-block .img {\n  width: 100%;\n  max-width: 100%;\n}\n.third-block .title {\n  font-size: 6rem;\n  line-height: 6.5rem;\n  font-weight: 500;\n  margin-bottom: 2rem;\n  color: #54a4ff;\n}\n.third-block .btn {\n  border: 2px solid #54a4ff;\n  height: 4rem;\n  width: 40%;\n  transition: all 1s;\n  margin-right: 5%;\n}\n.third-block .btn:hover {\n  border-color: #EEF1F1;\n}\n.third-block .subtitle {\n  font-size: 2rem;\n  line-height: 2.5rem;\n  font-weight: 500;\n  margin-bottom: 2rem;\n  color: #A7AEB3;\n}\n.third-block .text {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 400;\n  margin-bottom: 1.5rem;\n}\n@media only screen and (min-width: 1024px) and (max-width: 1219px) {\n  .third-block .third-block__description {\n    height: 100%;\n  }\n  .third-block .third-block__picture {\n    height: 40vh;\n  }\n  .third-block .title {\n    font-size: 4rem;\n    line-height: 4.5rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .third-block .third-block__description {\n    height: 100%;\n  }\n  .third-block .third-block__picture {\n    height: 50vh;\n  }\n  .third-block .title {\n    font-size: 3rem;\n    line-height: 3.5rem;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .third-block .third-block__description {\n    height: 100%;\n  }\n  .third-block .third-block__picture {\n    margin-top: 4rem;\n    height: 40vh;\n  }\n  .third-block .title {\n    font-size: 2rem;\n    line-height: 2.5rem;\n    font-weight: 600;\n  }\n  .third-block .subtitle {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/ui/poducts-details/block-third/block-third.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ui/poducts-details/block-third/block-third.component.ts ***!
  \*************************************************************************/
/*! exports provided: BlockThirdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockThirdComponent", function() { return BlockThirdComponent; });
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

var BlockThirdComponent = /** @class */ (function () {
    function BlockThirdComponent() {
    }
    BlockThirdComponent.prototype.ngOnInit = function () {
    };
    BlockThirdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-third',
            template: __webpack_require__(/*! ./block-third.component.html */ "./src/app/ui/poducts-details/block-third/block-third.component.html"),
            styles: [__webpack_require__(/*! ./block-third.component.less */ "./src/app/ui/poducts-details/block-third/block-third.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockThirdComponent);
    return BlockThirdComponent;
}());



/***/ }),

/***/ "./src/app/ui/slider/slider.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/slider/slider.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid\">\r\n  <div class=\"col--xlg-4-6 col--lg-4-6 col--md-1-1 col--sm-1-1 col--xs-1-1 \">\r\n    <carousel [noPause]=\"false\" [interval]=\"30000\">\r\n      <slide *ngFor=\"let slide of slides\">\r\n        <h1 class=\"slider__title \">{{slide.company}}</h1>\r\n\r\n        <p class=\"slider__text slider__text--mention m--v-lg m-xs--v-md\">\r\n          {{slide.mention}}\r\n        </p>\r\n\r\n        <p class=\"slider__text t--bold \">{{slide.name}}</p>\r\n\r\n        <p class=\"slider__text \">{{slide.position}}</p>\r\n\r\n        <!-- <div class=\"carousel-caption\"> </div> -->\r\n      </slide>\r\n    </carousel>\r\n  </div>\r\n  <div class=\"col--xlg-1-6 col--lg-1-6 col--md-1-1 col--sm-1-1 col--xs-1-1 push--lg-1-6 \">\r\n    <div class=\"block__logo flex flex--center flex--wrap\">\r\n      <!-- <div class=\"block__logo-item\" *ngFor=\"let item of slides\" [inlineSVG]=\"{{item.logoPath}}\"></div> -->\r\n      <img class=\"block__logo-item\" *ngFor=\"let item of slides\" src=\"{{item.logoPath}}\"/>\r\n      <!-- <span *ngFor=\"let item of slides\">\r\n        {{item.logoPath}}\r\n      </span> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = __webpack_require__(/*! C:\Users\artur.kuznetsov.SOLIDEXPERT\Documents\solidexpert\solid\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map