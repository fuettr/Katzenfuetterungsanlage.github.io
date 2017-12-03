webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_component__ = __webpack_require__("../../../../../src/app/position.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_component__ = __webpack_require__("../../../../../src/app/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_component__ = __webpack_require__("../../../../../src/app/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__update_component__ = __webpack_require__("../../../../../src/app/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error404_component__ = __webpack_require__("../../../../../src/app/error404.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */], data: { title: 'Füttr' } },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'login', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'position',
        component: __WEBPACK_IMPORTED_MODULE_2__position_component__["a" /* PositionComponent */],
        data: { title: 'Füttr - Positionen' }
    },
    {
        path: 'feed',
        component: __WEBPACK_IMPORTED_MODULE_4__feed_component__["a" /* FeedComponent */],
        data: { title: 'Füttr - Fütterung' }
    },
    { path: 'info', component: __WEBPACK_IMPORTED_MODULE_5__info_component__["a" /* InfoComponent */], data: { title: 'Füttr - Info' } },
    {
        path: 'update',
        component: __WEBPACK_IMPORTED_MODULE_6__update_component__["a" /* UpdateComponent */],
        data: { title: 'Füttr - Update' }
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_7__error404_component__["a" /* Error404Component */],
        data: { title: 'Füttr - 404 (not found)' }
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-toggleable-sm navbar-inverse text-nowrap\" style=\"background-color: #191816;\">\n  <button type=\"button\" class=\"navbar-toggler navbar-toggler-right\" (click)=\"toggleState()\" aria-controls=\"Navbar\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand logo\" (click)=\"click()\" routerLink=\"/home\">\n    <img alt=\"Brand\" class=\"logo-picture\" src=\"../favicon.ico\" width=\"48\"> Füttr</a>\n\n\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{'show': navShow}\" id=\"Navbar\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\">\n          <img src=\"assets/home.png\"> Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/feed\">\n          <img src=\"assets/feed.png\"> Fütterung</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/position\">\n          <img src=\"assets/control.png\"> Positionen</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" id=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img src=\"assets/settings.png\"> Einstellungen</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown\">\n          <a class=\"nav-link dropdown-item\" routerLink=\"/info\">\n            <img src=\"assets/info.png\"> Geräteinfo</a>\n          <a class=\"nav-link dropdown-item\" routerLink=\"/update\">\n            <img src=\"assets/update.png\"> Update</a>\n        </div>\n      </li>\n    </ul>\n    <span class=\"nav-link\" style=\"color:#c6bfb9\">{{Time}}</span>\n  </div>\n</nav>\n<p>\n  <br>\n  <br>\n  <br>\n</p>\n<router-outlet *ngIf=\"!cat\"></router-outlet>\n<app-cat *ngIf=\"cat\"></app-cat>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.cat = false;
        this.lick = 0;
        this.navShow = false;
        this.intervalID = setInterval(this.refreshTime.bind(this), 100);
    }
    AppComponent.prototype.refreshTime = function () {
        this.Time = new Date().toLocaleTimeString();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
                return route;
            }
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) { return _this.titleService.setTitle(event['title']); });
    };
    AppComponent.prototype.click = function () {
        this.lick++;
        if (this.lick === 69) {
            this.cat = true;
        }
    };
    AppComponent.prototype.lic = function () {
        this.lick = 0;
    };
    AppComponent.prototype.back = function () {
        this.cat = false;
        this.lick = 0;
    };
    AppComponent.prototype.toggleState = function () {
        var bool = this.navShow;
        this.navShow = bool === false ? true : false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* Title */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__position_component__ = __webpack_require__("../../../../../src/app/position.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__feed_component__ = __webpack_require__("../../../../../src/app/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__info_component__ = __webpack_require__("../../../../../src/app/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__update_component__ = __webpack_require__("../../../../../src/app/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__error404_component__ = __webpack_require__("../../../../../src/app/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__update_service__ = __webpack_require__("../../../../../src/app/update.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__httpget_service__ = __webpack_require__("../../../../../src/app/httpget.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__httpput_service__ = __webpack_require__("../../../../../src/app/httpput.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__time_calculator_service__ = __webpack_require__("../../../../../src/app/time.calculator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cat_cat_component__ = __webpack_require__("../../../../../src/app/cat/cat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__position_component__["a" /* PositionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__feed_component__["a" /* FeedComponent */],
            __WEBPACK_IMPORTED_MODULE_10__info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__update_component__["a" /* UpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_12__error404_component__["a" /* Error404Component */],
            __WEBPACK_IMPORTED_MODULE_17__cat_cat_component__["a" /* CatComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__update_service__["a" /* UpdateService */], __WEBPACK_IMPORTED_MODULE_14__httpget_service__["a" /* HttpgetService */], __WEBPACK_IMPORTED_MODULE_15__httpput_service__["a" /* HttpputService */], __WEBPACK_IMPORTED_MODULE_16__time_calculator_service__["a" /* TimeCalculator */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cat/cat.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe src=\"https://rmdias.github.io/ng2-tic-tac-toe/\" width=\"100%\" height=\"800px\"></iframe>\n<div class=\"text-center\">\n  <button class=\"btn btn-outline-secondary\" (click)=\"back()\">Zurück</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cat/cat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatComponent = (function () {
    function CatComponent(app) {
        this.app = app;
    }
    CatComponent.prototype.back = function () {
        this.app.back();
    };
    return CatComponent;
}());
CatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cat',
        template: __webpack_require__("../../../../../src/app/cat/cat.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object])
], CatComponent);

var _a;
//# sourceMappingURL=cat.component.js.map

/***/ }),

/***/ "../../../../../src/app/error404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"font-size: 40px\">\n    The requested url: <code>{{url}}</code> does not exist on this server <span style=\"color: #c24e4e\">(404)</span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/error404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var Error404Component = (function () {
    function Error404Component(document, app) {
        this.document = document;
        this.app = app;
        this.url = this.document.location.href;
        app.lic();
        this.app.navShow = false;
    }
    return Error404Component;
}());
Error404Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-error404',
        template: __webpack_require__("../../../../../src/app/error404.component.html")
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _a || Object])
], Error404Component);

var _a;
//# sourceMappingURL=error404.component.js.map

/***/ }),

/***/ "../../../../../src/app/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1 class=\"bigger-h1\">Fütterungszeiten</h1>\n  <br>\n</div>\n<div class=\"container-fluid bigger\">\n  <form #time=\"ngForm\" (ngSubmit)=\"save(time.value)\">\n    <div class=\"row\">\n      <div class=\"form-group col-sm-6\">\n        <h2>Zeit 1</h2>\n        <div class=\"input-group input-group-lg\">\n          <span class=\"input-group-addon\">\n            <input type=\"checkbox\" id=\"check1\" name=\"time1_active\" [(ngModel)]=\"check1\">\n          </span>\n          <input (keyup)=\"onKey()\" type=\"text\" id=\"time1\" name=\"time1\" [(ngModel)]=\"time1\" pattern=\"(\\d{2}|\\-\\-)\\:(\\d{2}|\\-\\-)\" minlength=\"5\"\n            maxlength=\"5\" #time1_=\"ngModel\">\n          <span class=\"input-group-addon\" [hidden]=\"time1_.pattern || time1_.pristine || time1_.valid\" style=\"background-color: #d9534f\">Format: HH:MM</span>\n          <span class=\"input-group-addon\" [hidden]=\"time1Valid\" style=\"background-color: #d9534f\">Muss gültige Zeit sein</span>\n        </div>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <h2>Zeit 2</h2>\n        <div class=\"input-group input-group-lg\">\n          <span class=\"input-group-addon\">\n            <input type=\"checkbox\" id=\"check2\" name=\"time2_active\" [(ngModel)]=\"check2\">\n          </span>\n          <input (keyup)=\"onKey()\" type=\"text\" id=\"time2\" name=\"time2\" [(ngModel)]=\"time2\" pattern=\"(\\d{2}|\\-\\-)\\:(\\d{2}|\\-\\-)\" minlength=\"5\"\n            maxlength=\"5\" #time2_=\"ngModel\">\n          <span class=\"input-group-addon\" [hidden]=\"time2_.pattern || time2_.pristine || time2_.valid\" style=\"background-color: #d9534f\">Format: HH:MM</span>\n          <span class=\"input-group-addon\" [hidden]=\"time2ValidMin || !time1Valid\" style=\"background-color: #d9534f\">Muss größer als {{time1}} sein</span>\n          <span class=\"input-group-addon\" [hidden]=\"time2Valid\" style=\"background-color: #d9534f\">Muss gültige Zeit sein</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group col-sm-6\">\n        <h2>Zeit 3</h2>\n        <div class=\"input-group input-group-lg\">\n          <span class=\"input-group-addon\">\n            <input type=\"checkbox\" id=\"check3\" name=\"time3_active\" [(ngModel)]=\"check3\">\n          </span>\n          <input (keyup)=\"onKey()\" type=\"text\" id=\"time3\" name=\"time3\" [(ngModel)]=\"time3\" pattern=\"(\\d{2}|\\-\\-)\\:(\\d{2}|\\-\\-)\" minlength=\"5\"\n            maxlength=\"5\" #time3_=\"ngModel\">\n          <span class=\"input-group-addon\" [hidden]=\"time3_.pattern || time3_.pristine || time3_.valid\" style=\"background-color: #d9534f\">Format: HH:MM</span>\n          <span class=\"input-group-addon\" [hidden]=\"time3ValidMin || !time2Valid\" style=\"background-color: #d9534f\">Muss größer als {{time2}} sein</span>\n          <span class=\"input-group-addon\" [hidden]=\"time3Valid\" style=\"background-color: #d9534f\">Muss gültige Zeit sein</span>\n        </div>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <h2>Zeit 4</h2>\n        <div class=\"input-group input-group-lg\">\n          <span class=\"input-group-addon\">\n            <input type=\"checkbox\" id=\"check4\" name=\"time4_active\" [(ngModel)]=\"check4\">\n          </span>\n          <input (keyup)=\"onKey()\" type=\"text\" id=\"time4\" name=\"time4\" [(ngModel)]=\"time4\" pattern=\"(\\d{2}|\\-\\-)\\:(\\d{2}|\\-\\-)\" minlength=\"5\"\n            maxlength=\"5\" #time4_=\"ngModel\">\n          <span class=\"input-group-addon\" [hidden]=\"time4_.pattern || time4_.pristine || time4_.valid\" style=\"background-color: #d9534f\">Format: HH:MM</span>\n          <span class=\"input-group-addon\" [hidden]=\"time4ValidMin || !time3Valid\" style=\"background-color: #d9534f\">Muss größer als {{time3}} sein</span>\n          <span class=\"input-group-addon\" [hidden]=\"time4Valid\" style=\"background-color: #d9534f\">Muss gültige Zeit sein</span>\n        </div>\n      </div>\n    </div>\n  </form>\n  <br>\n  <div class=\"text-center row justify-content-end\">\n    <div class=\"btn-group col-lg-3\">\n      <button type=\"cancel\" class=\"btn btn-secondary\" (click)=\"cancel()\" style=\"z-index: 1020 !important;\">Abbrechen</button>\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"save()\" style=\"z-index: 1020 !important;\" [disabled]=\"!time.form.valid || !time1Valid || !time2ValidMin || !time2Valid || !time3ValidMin || !time3Valid || !time4ValidMin || !time4Valid\">Speichern</button>\n      <button class=\"btn\" style=\"background-color: #2B3E50; z-index: 1010 !important; margin-left: -126px !important; color: #2B3E50\">Gespeichert.</button>\n      <button *ngIf=\"saved\" class=\"btn btn-success savedAnimate\" [@SaveAnimation]=\"savedstate\" disabled>Gespeichert.</button>\n      <button *ngIf=\"failed\" class=\"btn btn-danger failedAnimate\" disabled>Misslungen.</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpget_service__ = __webpack_require__("../../../../../src/app/httpget.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpput_service__ = __webpack_require__("../../../../../src/app/httpput.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__time_calculator_service__ = __webpack_require__("../../../../../src/app/time.calculator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedComponent = (function () {
    function FeedComponent(httpgetService, httpputService, timeCalculator, app) {
        this.httpgetService = httpgetService;
        this.httpputService = httpputService;
        this.timeCalculator = timeCalculator;
        this.app = app;
        this.submit = false;
        this.saved = true;
        this.failed = false;
        this.savedstate = false;
        this.time1Valid = false;
        this.time2ValidMin = false;
        this.time2Valid = false;
        this.time3ValidMin = false;
        this.time3Valid = false;
        this.time4ValidMin = false;
        this.time4Valid = false;
    }
    FeedComponent.prototype.onKey = function () {
        this.doppelpoint();
        this.time1Minutes = this.timeCalculator.toMinutes(this.time1);
        this.time2Minutes = this.timeCalculator.toMinutes(this.time2);
        this.time3Minutes = this.timeCalculator.toMinutes(this.time3);
        this.time4Minutes = this.timeCalculator.toMinutes(this.time4);
        this.time1Valid = this.timeCalculator.isValid(this.time1);
        if (this.time1Minutes === null) {
            this.time2ValidMin = true;
        }
        else {
            this.time2ValidMin = this.time2Minutes > this.time1Minutes;
        }
        this.time2Valid = this.timeCalculator.isValid(this.time2);
        if (this.time2Minutes === null) {
            this.time3ValidMin = true;
        }
        else {
            this.time3ValidMin = this.time3Minutes > this.time2Minutes;
        }
        this.time3Valid = this.timeCalculator.isValid(this.time3);
        if (this.time3Minutes === null) {
            this.time4ValidMin = true;
        }
        else {
            this.time4ValidMin = this.time4Minutes > this.time3Minutes;
        }
        this.time4Valid = this.timeCalculator.isValid(this.time4);
    };
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpgetService.getTimes().then(function (res) {
            _this.time1 = res.time1;
            _this.time2 = res.time2;
            _this.time3 = res.time3;
            _this.time4 = res.time4;
            _this.check1 = res.time1_active;
            _this.check2 = res.time2_active;
            _this.check3 = res.time3_active;
            _this.check4 = res.time4_active;
            _this.onKey();
            _this.app.lic();
            _this.app.navShow = false;
        });
    };
    FeedComponent.prototype.cancel = function () {
        var _this = this;
        this.httpgetService.getTimes().then(function (res) {
            _this.time1 = res.time1;
            _this.time2 = res.time2;
            _this.time3 = res.time3;
            _this.time4 = res.time4;
            _this.check1 = res.time1_active;
            _this.check2 = res.time2_active;
            _this.check3 = res.time3_active;
            _this.check4 = res.time4_active;
        });
    };
    FeedComponent.prototype.save = function () {
        var _this = this;
        var value = {
            time1: this.time1,
            time2: this.time2,
            time3: this.time3,
            time4: this.time4,
            time1_active: this.check1,
            time2_active: this.check2,
            time3_active: this.check3,
            time4_active: this.check4
        };
        this.httpputService
            .putTimes(value)
            .then(function (res) {
            _this.time1 = res.time1;
            _this.time2 = res.time2;
            _this.time3 = res.time3;
            _this.time4 = res.time4;
            _this.check1 = res.time1_active;
            _this.check2 = res.time2_active;
            _this.check3 = res.time3_active;
            _this.check4 = res.time4_active;
            _this.savedstate = true;
            setTimeout(function () {
                _this.savedstate = false;
            }, 1500);
        })
            .catch(function () {
            _this.failed = true;
            setTimeout(function () {
                _this.failed = false;
            }, 1500);
        });
    };
    FeedComponent.prototype.doppelpoint = function () {
        if (this.time1.length === 3) {
            this.doppelpoint1 = true;
        }
        if (this.time1.length === 2) {
            if (!this.doppelpoint1) {
                this.time1 += ':';
                this.doppelpoint1 = true;
            }
        }
        if (this.time1.length === 1) {
            this.doppelpoint1 = false;
        }
        if (this.time2.length === 3) {
            this.doppelpoint2 = true;
        }
        if (this.time2.length === 2) {
            if (!this.doppelpoint2) {
                this.time2 += ':';
                this.doppelpoint2 = true;
            }
        }
        if (this.time2.length === 1) {
            this.doppelpoint2 = false;
        }
        if (this.time3.length === 3) {
            this.doppelpoint3 = true;
        }
        if (this.time3.length === 2) {
            if (!this.doppelpoint3) {
                this.time3 += ':';
                this.doppelpoint3 = true;
            }
        }
        if (this.time3.length === 1) {
            this.doppelpoint3 = false;
        }
        if (this.time4.length === 3) {
            this.doppelpoint4 = true;
        }
        if (this.time4.length === 2) {
            if (!this.doppelpoint4) {
                this.time4 += ':';
                this.doppelpoint4 = true;
            }
        }
        if (this.time4.length === 1) {
            this.doppelpoint4 = false;
        }
    };
    return FeedComponent;
}());
FeedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-feed',
        template: __webpack_require__("../../../../../src/app/feed.component.html"),
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* trigger */])('SaveAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({ 'margin-left': '-126px' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({ 'margin-left': '0' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('300ms'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__httpget_service__["a" /* HttpgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__httpget_service__["a" /* HttpgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__httpput_service__["a" /* HttpputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__httpput_service__["a" /* HttpputService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__time_calculator_service__["a" /* TimeCalculator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__time_calculator_service__["a" /* TimeCalculator */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]) === "function" && _d || Object])
], FeedComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=feed.component.js.map

/***/ }),

/***/ "../../../../../src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-8\">\n      <div class=\"container-fluid\">\n        <div class=\"jumbotron text-center\">\n          <p>Letzte erfolgte Fütterung: {{last_time}} </p>\n          <p>Nächste Fütterung erfolgt um: {{next_time}}</p>\n          <p>Nächste Fütterung erfolgt in: {{next_time_in}}</p>\n        </div>\n        <ul style=\"list-style-type: none; margin-left: -40px;\">\n          <li *ngFor=\"let warning_message of warning_messages\">\n            <div class=\"alert alert-warning alert-dismissable fade show\" role=\"alert\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\" (click)=\"ackwarn(warning_message)\">&times;</span>\n              </button>\n              <strong>Warning! </strong>{{warning_message.warning}}\n            </div>\n          </li>\n        </ul>\n        <ul style=\"list-style-type: none; margin-left: -40px;\">\n          <li *ngFor=\"let error_message of error_messages\">\n            <div class=\"alert alert-danger alert-dismissable fade show\" role=\"alert\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\" (click)=\"ackerr(error_message)\">&times;</span>\n              </button>\n              <strong>Error! </strong>{{error_message.error}}\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <h2 class=\"text-center\">Fütterungszeiten</h2>\n      <div class=\"container-fluid\">\n        <table class=\"table\">\n          <tbody>\n            <tr *ngIf=\"time1_show\">\n              <td class=\"text-right\">\n                <h4>Zeit 1:</h4>\n              </td>\n              <td>\n                <span class=\"btn btn-secondary\">{{time1}}</span>\n              </td>\n            </tr>\n            <tr *ngIf=\"time2_show\">\n              <td class=\"text-right\">\n                <h4>Zeit 2:</h4>\n              </td>\n              <td>\n                <span class=\"btn btn-secondary\">{{time2}}</span>\n              </td>\n            </tr>\n            <tr *ngIf=\"time3_show\">\n              <td class=\"text-right\">\n                <h4>Zeit 3:</h4>\n              </td>\n              <td>\n                <span class=\"btn btn-secondary\">{{time3}}</span>\n              </td>\n            </tr>\n            <tr *ngIf=\"time4_show\">\n              <td class=\"text-right\">\n                <h4>Zeit 4:</h4>\n              </td>\n              <td>\n                <span class=\"btn btn-secondary\">{{time4}}</span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <a href=\"https://internetdefenseleague.org\">\n    <img src=\"https://internetdefenseleague.org/images/badges/final/banner_left.png\" alt=\"Member of The Internet Defense League\"\n    />\n  </a>\n  <a class=\"fixed-bottom text-right\" style=\"margin-bottom: 35px;\" href=\"https://afk.cat/signup?ref=NMYNkIShTYk5\">\n    <img src=\"https://afk.cat/static/img/raf_banner.png\" width=\"25%\">\n  </a>\n  <nav class=\"navbar fixed-bottom\">Maschine: {{machine_state}}</nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpget_service__ = __webpack_require__("../../../../../src/app/httpget.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpput_service__ = __webpack_require__("../../../../../src/app/httpput.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(httpgetService, httpputService, app) {
        this.httpgetService = httpgetService;
        this.httpputService = httpputService;
        this.app = app;
        this.time1_show = false;
        this.time2_show = false;
        this.time3_show = false;
        this.time4_show = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.callMeMaybe();
        setInterval(function () {
            _this.callMeMaybe();
        }, 30000);
        this.app.navShow = false;
    };
    HomeComponent.prototype.callMeMaybe = function () {
        var _this = this;
        this.httpgetService.getWarnings().then(function (res) {
            _this.warning_messages = res.warnings;
        });
        this.httpgetService.getErrors().then(function (res) {
            _this.error_messages = res.errors;
        });
        this.httpgetService.getTimes().then(function (res) {
            _this.time1 = res.time1;
            _this.time2 = res.time2;
            _this.time3 = res.time3;
            _this.time4 = res.time4;
            _this.time1_show = res.time1_active;
            _this.time2_show = res.time2_active;
            _this.time3_show = res.time3_active;
            _this.time4_show = res.time4_active;
        });
        this.httpgetService.getStatus().then(function (res) {
            _this.last_time = res.last_time;
            _this.next_time = res.next_time;
            _this.next_time_in = res.next_time_in;
            _this.machine_state = res.machine_state;
        });
    };
    HomeComponent.prototype.ackwarn = function (warning) {
        var id = { id: warning.id };
        this.httpputService.ackErr(id).subscribe();
    };
    HomeComponent.prototype.ackerr = function (error) {
        var id = { id: error.id };
        this.httpputService.ackErr(id).subscribe();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__httpget_service__["a" /* HttpgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__httpget_service__["a" /* HttpgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__httpput_service__["a" /* HttpputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__httpput_service__["a" /* HttpputService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/httpget.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpgetService = (function () {
    function HttpgetService(http) {
        this.http = http;
        this.api = '/api/callMeMaybe?q=';
        this.ip = '/api/ip';
    }
    HttpgetService.prototype.getWarnings = function () {
        return this.http.get(this.api + 'warnings')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpgetService.prototype.getErrors = function () {
        return this.http.get(this.api + 'errors')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpgetService.prototype.getTimes = function () {
        return this.http.get(this.api + 'times')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpgetService.prototype.getStatus = function () {
        return this.http.get(this.api + 'status')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpgetService.prototype.getInfo = function () {
        return this.http.get(this.api + 'info')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpgetService.prototype.getIp = function () {
        return this.http.get(this.ip)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpgetService.prototype.getPositions = function () {
        return this.http.get(this.api + 'positions')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpgetService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return HttpgetService;
}());
HttpgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpgetService);

var _a;
//# sourceMappingURL=httpget.service.js.map

/***/ }),

/***/ "../../../../../src/app/httpput.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpputService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpputService = (function () {
    function HttpputService(http) {
        this.http = http;
        this.api = '/api/putMeHere?q=';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    HttpputService.prototype.putTimes = function (times) {
        return this.http
            .post(this.api + 'times', JSON.stringify(times), {
            headers: this.headers
        })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HttpputService.prototype.ackErr = function (data) {
        return this.http.put(this.api + 'ackErr', JSON.stringify(data), {
            headers: this.headers
        });
    };
    HttpputService.prototype.ackWarn = function (data) {
        return this.http.put(this.api + 'ackWarn', JSON.stringify(data), {
            headers: this.headers
        });
    };
    HttpputService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return HttpputService;
}());
HttpputService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpputService);

var _a;
//# sourceMappingURL=httpput.service.js.map

/***/ }),

/***/ "../../../../../src/app/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1 class=\"bigger-h1\">Geräteinformation</h1>\n</div>\n<div class=\"jumbotron container-fluid\">\n  <div class=\"col-xs-4\">\n    <table class=\"table table-hover\">\n      <tbody>\n        <tr>\n          <td class=\"text-right\">Seriennummer:</td>\n          <td>{{serialnumber}}</td>\n        </tr>\n        <tr>\n          <td class=\"text-right\">Interner Rechner:</td>\n          <td>{{processor}}</td>\n        </tr>\n        <tr>\n          <td class=\"text-right\">WLAN Status:</td>\n          <td>{{wlanstate}}</td>\n        </tr>\n        <tr>\n          <td class=\"text-right\">IP Adresse:</td>\n          <td>{{ipadress}}</td>\n        </tr>\n        <tr>\n          <td class=\"text-right\">Softwareversion:</td>\n          <td>{{version}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-xs-8\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_service__ = __webpack_require__("../../../../../src/app/update.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpget_service__ = __webpack_require__("../../../../../src/app/httpget.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoComponent = (function () {
    function InfoComponent(updateService, httpgetService, app) {
        this.updateService = updateService;
        this.httpgetService = httpgetService;
        this.app = app;
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateService.getVersion().then(function (lVersion) {
            _this.version = lVersion.version.toString();
        });
        this.httpgetService.getInfo().then(function (res) {
            _this.serialnumber = res.serialnumber;
            _this.processor = res.internal;
            _this.wlanstate = res.wlanState;
        });
        this.httpgetService.getIp().then(function (res) {
            _this.ipadress = res.ip;
        });
        this.app.lic();
        this.app.navShow = false;
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-info',
        template: __webpack_require__("../../../../../src/app/info.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__update_service__["a" /* UpdateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__update_service__["a" /* UpdateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__httpget_service__["a" /* HttpgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__httpget_service__["a" /* HttpgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _c || Object])
], InfoComponent);

var _a, _b, _c;
//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "../../../../../src/app/position.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1 class=\"bigger-h1\">Positions-info</h1>\n  <br>\n  <div class=\"row container-fluid\">\n    <div class=\"col-lg\">\n      <h2>Motor 1:</h2>\n      {{motor1}}\n    </div>\n    <div class=\"col-lg\">\n      <h2>Motor 2:</h2>\n      {{motor2}}\n    </div>\n    <div class=\"col-lg\">\n      <h2>Sensor 1:</h2>\n      {{sensor1}}\n    </div>\n    <div class=\"col-lg\">\n      <h2>Sensor 2:</h2>\n      {{sensor2}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/position.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpget_service__ = __webpack_require__("../../../../../src/app/httpget.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionComponent = (function () {
    function PositionComponent(httpgetService, app) {
        this.httpgetService = httpgetService;
        this.app = app;
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpgetService.getPositions().then(function (res) {
            _this.motor1 = res.motor1;
            _this.motor2 = res.motor2;
            _this.sensor1 = res.sensor1;
            _this.sensor2 = res.sensor2;
        });
        this.app.lic();
        this.app.navShow = false;
    };
    return PositionComponent;
}());
PositionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-position',
        template: __webpack_require__("../../../../../src/app/position.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__httpget_service__["a" /* HttpgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__httpget_service__["a" /* HttpgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], PositionComponent);

var _a, _b;
//# sourceMappingURL=position.component.js.map

/***/ }),

/***/ "../../../../../src/app/time.calculator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeCalculator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeCalculator = (function () {
    function TimeCalculator() {
    }
    TimeCalculator.prototype.toMinutes = function (time) {
        var timeHours;
        var timeMinutes;
        if (time[0] === '-' &&
            time[1] === '-' &&
            time[3] === '-' &&
            time[4] === '-') {
            return null;
        }
        timeHours = parseInt(time[0], 10) * 10;
        timeHours = timeHours + parseInt(time[1], 10);
        timeMinutes = parseInt(time[3], 10) * 10;
        timeMinutes = timeMinutes + parseInt(time[4], 10);
        return timeHours * 60 + timeMinutes;
    };
    TimeCalculator.prototype.isValid = function (time) {
        var timeHours = parseInt(time[0], 10) * 10;
        timeHours = timeHours + parseInt(time[1], 10);
        var timeMinutes = parseInt(time[3], 10) * 10;
        timeMinutes = timeMinutes + parseInt(time[4], 10);
        if (time[0] === '-' &&
            time[1] === '-' &&
            time[3] === '-' &&
            time[4] === '-') {
            return true;
        }
        if (timeHours < 24) {
            if (timeMinutes < 60) {
                return true;
            }
        }
        return false;
    };
    return TimeCalculator;
}());
TimeCalculator = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], TimeCalculator);

//# sourceMappingURL=time.calculator.service.js.map

/***/ }),

/***/ "../../../../../src/app/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1 class=\"bigger-h1\">Update</h1>\n  <br>\n</div>\n<div class=\"container-fluid\">\n  <h4>Klick the button to check for updates:</h4>\n  <br>\n  <button type=\"button\" class=\"btn btn-secondary btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Check for updates</button>\n</div>\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Update</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{message}}</p>\n        <div *ngIf=\"show\">{{newVersion}}</div>\n        <div *ngIf=\"progress\" class=\"progress\">\n          <div class=\"progress-bar bg-success progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\"\n            aria-valuemax=\"100\" style=\"width: 100%; color: black;\">{{prgbar}}</div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"!show2\" type=\"button\" class=\"btn btn-secondary\" (click)=\"refresh()\">Check again</button>\n        <button *ngIf=\"show2\" type=\"button\" class=\"btn btn-secondary\">Check again</button>\n        <button *ngIf=\"show\" type=\"button\" class=\"btn btn-primary\" (click)=\"update()\">Update {{updater}}</button>\n        <button *ngIf=\"show2\" type=\"button\" class=\"btn btn-primary\">Update {{updater}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"shutdownModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          <strong>WARNING!</strong>\n        </h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Do you really want to shutdown? Your device will power off and can't be started via the network again. You have to\n          pull the power cable and put it back in.</p>\n        <img src=\"/assets/put_it_back.jpg\" width=\"100%\" class=\"text-center\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"shutdown()\">Shutdown</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-inverse\" style=\"background-color: #191816;\">\n  <form class=\"form-inline\">\n    <img src=\"assets/shutdown.png\" data-toggle=\"modal\" data-target=\"#shutdownModal\">\n  </form>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_service__ = __webpack_require__("../../../../../src/app/update.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateComponent = (function () {
    function UpdateComponent(updateService, app) {
        this.updateService = updateService;
        this.app = app;
        this.show = false;
        this.show2 = false;
        this.progress = false;
    }
    UpdateComponent.prototype.update = function () {
        var _this = this;
        this.message = '';
        this.show = false;
        this.show2 = true;
        this.progress = true;
        this.prgbar = 'updating...';
        this.updater = 'in progress...';
        this.updateService.getUpdate();
        this.interval = setInterval(function () {
            _this.get1 = _this.updateService.stillThere().catch(function (error) {
                console.log('restarting...');
                _this.prgbar = 'restarting...';
                _this.get2 = _this.updateService.stillThere().then(function (value) {
                    console.log('updated...');
                    _this.message = 'updated';
                    clearInterval(_this.interval);
                    location.reload();
                    _this.show2 = false;
                    _this.progress = false;
                    _this.updater = '';
                });
            });
        }, 1000);
    };
    UpdateComponent.prototype.shutdown = function () {
        this.updateService.shutdown();
    };
    UpdateComponent.prototype.refresh = function () {
        var _this = this;
        this.message = 'Checking for updates...';
        this.t1 = Date.now();
        this.updateService
            .checkUpdate()
            .then(function (version) {
            _this.version = version;
            _this.updateService
                .getVersion()
                .then(function (lVersion) {
                _this.lVersion = lVersion;
                if (_this.version.version !== _this.lVersion.version) {
                    _this.t = _this.t2 = Date.now() - _this.t1;
                    _this.message = 'Update found in ' + _this.t + 'ms:';
                    _this.show = true;
                    _this.newVersion = _this.version.version.toString();
                }
                else {
                    _this.t = _this.t2 = Date.now() - _this.t1;
                    _this.message = 'Up to date in ' + _this.t + 'ms';
                }
            })
                .catch(function (err) {
                alert(err);
            });
        })
            .catch(function (err) {
            alert(err);
        });
    };
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = 'Checking for updates...';
        this.t1 = this.t1 = Date.now();
        this.app.lic();
        this.app.navShow = false;
        this.updateService
            .checkUpdate()
            .then(function (version) {
            _this.version = version;
            _this.updateService
                .getVersion()
                .then(function (lVersion) {
                _this.lVersion = lVersion;
                if (_this.version.version !== _this.lVersion.version) {
                    _this.t = _this.t2 = Date.now() - _this.t1;
                    _this.message = 'Update found in ' + _this.t + 'ms:';
                    _this.show = true;
                    _this.newVersion = _this.version.version.toString();
                }
                else {
                    _this.t = _this.t2 = Date.now() - _this.t1;
                    _this.message = 'Up to date in ' + _this.t + 'ms';
                }
            })
                .catch(function (err) {
                alert(err);
            });
        })
            .catch(function (err) {
            alert(err);
        });
    };
    return UpdateComponent;
}());
UpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-update',
        template: __webpack_require__("../../../../../src/app/update.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__update_service__["a" /* UpdateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__update_service__["a" /* UpdateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], UpdateComponent);

var _a, _b;
//# sourceMappingURL=update.component.js.map

/***/ }),

/***/ "../../../../../src/app/update.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var UpdateService = (function () {
    function UpdateService(http) {
        this.http = http;
        this.getUrl = 'api/getUpdate';
        this.checkUrl = 'https://raw.githubusercontent.com/Katzenfuetterungsanlage/fuettr_prototype/master/version.json';
        this.lVersionUrl = 'api/version';
        this.shutdownUrl = 'api/shutdown';
    }
    UpdateService.prototype.getUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(this.getUrl)
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError)];
            });
        });
    };
    UpdateService.prototype.shutdown = function () {
        return this.http.get(this.shutdownUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UpdateService.prototype.checkUpdate = function () {
        return this.http.get(this.checkUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UpdateService.prototype.getVersion = function () {
        return this.http.get(this.lVersionUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UpdateService.prototype.stillThere = function () {
        return this.http.get(this.lVersionUrl).toPromise();
    };
    UpdateService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return UpdateService;
}());
UpdateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UpdateService);

var _a;
//# sourceMappingURL=update.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map