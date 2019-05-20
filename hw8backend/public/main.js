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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Data.ts":
/*!*************************!*\
  !*** ./src/app/Data.ts ***!
  \*************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());



/***/ }),

/***/ "./src/app/animation.ts":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: slideOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutAnimation", function() { return slideOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => DetailPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('5000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_info_detail_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-info/detail-info.component */ "./src/app/detail-info/detail-info.component.ts");




var routes = [
    { path: 'detailInfo/:itemId', component: _detail_info_detail_info_component__WEBPACK_IMPORTED_MODULE_3__["DetailInfoComponent"], data: { state: 'DetailPage' } },
    { path: '', redirectTo: '', pathMatch: 'full', data: { state: 'HomePage' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"col-12 col-md-9 col-lg-9\" style = \"margin: 0 auto;\">\n  <app-form></app-form>\n\n\n  <router-outlet ></router-outlet>\n</div>\n\n\n\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _detail_info_detail_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail-info/detail-info.component */ "./src/app/detail-info/detail-info.component.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");













// import { SortableModule } from 'ngx-bootstrap/sortable';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"],
                _detail_info_detail_info_component__WEBPACK_IMPORTED_MODULE_10__["DetailInfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_11__["RoundProgressModule"],
                //SortableModule.forRoot(),
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_12__["OrderModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.announceClick = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.announceClick$ = this.announceClick.asObservable();
        this.readItemObj = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.readItemObj$ = this.readItemObj.asObservable();
    }
    DataService.prototype.getClickEvent = function (data) {
        // alert('I am in service');
        this.announceClick.next(data);
    };
    DataService.prototype.getItemObj = function (data) {
        //alert('I am in service');
        this.readItemObj.next(data);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/detail-info/SimilarItem.ts":
/*!********************************************!*\
  !*** ./src/app/detail-info/SimilarItem.ts ***!
  \********************************************/
/*! exports provided: SimilarItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarItem", function() { return SimilarItem; });
var SimilarItem = /** @class */ (function () {
    function SimilarItem() {
    }
    return SimilarItem;
}());



/***/ }),

/***/ "./src/app/detail-info/detail-info.component.css":
/*!*******************************************************!*\
  !*** ./src/app/detail-info/detail-info.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li a {\n  color: black;\n}\n\nul li a.active {\n  background-color: black;\n  color: white;\n}\n\nh5{\n  text-align: center;\n}\n\n.moveIntoCircle {\n  left: 10px;\n  top: 40%;\n  position: absolute;\n}\n\nth, td {\n  height: 50px;\n}\n\n.progress-wrapper{\n  position: relative;\n  left: 0;\n  top: 0;\n  background-color: transparent;\n}\n\n.progress{\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLWluZm8vZGV0YWlsLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1pbmZvL2RldGFpbC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCBsaSBhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG51bCBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmg1e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb3ZlSW50b0NpcmNsZSB7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogNDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbnRoLCB0ZCB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuXG4ucHJvZ3Jlc3Mtd3JhcHBlcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnByb2dyZXNze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/detail-info/detail-info.component.html":
/*!********************************************************!*\
  !*** ./src/app/detail-info/detail-info.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"imagesModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Product Images</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <!-- carousal -->\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n          <!-- images -->\n          <div class=\"carousel-inner\">\n            <ng-container *ngFor = \"let imageUrl of imageList; let i=index\">\n              <div *ngIf = \"i === 0\" class=\"carousel-item active\" style = \"border: solid 7px black\">\n                <img [src]=\"imageUrl\" (click) = \"showImageInANewTab($event.target)\" class=\"d-block w-100\" alt=\"...\">\n              </div>\n              <div *ngIf = \"i > 0\" class=\"carousel-item\" style = \"border: solid 7px black\">\n                <img [src]=\"imageUrl\" (click) = \"showImageInANewTab($event.target)\" class=\"d-block w-100\" alt=\"...\">\n              </div>\n            </ng-container>\n          </div>\n          <!-- arrows -->\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- process bar\n<div  class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n</div>  -->\n\n\n\n\n\n\n<div [@slideOut]=\"leave ? 'out' : 'in'\" >\n\n\n\n\n<!-- Title -->\n<h5 *ngIf = \"itemObj?.Title\" >{{itemObj.Title}}</h5>\n<!-- list button -->\n<button (click)=\"goBack()\" class = \"btn\"><img style = \"max-width: 15%;\" src='../../assets/img/baseline_arrow_back_ios_black_18dp.png'>List</button>\n\n<!-- wish list button      (click) = \"modifyWishList(item)\"  -->\n<button style = \"background-color: white; height: 3em; width: 3em; float: right; border:none;\" (click) = \"modifyWishList()\">\n  <i *ngIf = \"!isInLocalStorage()\" class = \"material-icons\" style = \"max-width:96%;\">add_shopping_cart</i>\n  <i *ngIf = \"isInLocalStorage()\" class = \"material-icons\" style = \"max-width: 96%; color: #b8860b;\">remove_shopping_cart</i>\n</button>\n\n<!-- facebook button -->\n<a target=\"_blank\" style = \"height: 2.8em; width: 2.8em; float: right;\"\n   (click) = \"shareToFacebook()\" [href]= \"facebookUrl\"><img style = \"max-width: 96%;\" src = \"http://csci571.com/hw/hw8/Images/facebook.png\"></a>\n\n<!-- Tabs -->\n<div style = \"margin-top: 2%;\">\n  <ul class=\"nav nav-tabs justify-content-end topBottomMargin\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" (click) = clickTab(1) [class.active] = \"selectedTab === 1\"\n         id=\"product-tab\" data-toggle=\"tab\" href=\"#product\" role=\"tab\" aria-controls=\"product\" aria-selected=\"true\">Product</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" (click) = clickTab(2) [class.active] = \"selectedTab === 2\"\n         id=\"photo-tab\" data-toggle=\"tab\" href=\"#photo\" role=\"tab\" aria-controls=\"photo\" aria-selected=\"false\">Photos</a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" (click) = clickTab(3) [class.active] = \"selectedTab === 3\"\n         id=\"shipping-tab\" data-toggle=\"tab\" href=\"#shipping\" role=\"tab\" aria-controls=\"shipping\" aria-selected=\"false\">Shipping</a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" (click) = clickTab(4) [class.active] = \"selectedTab === 4\"\n         id=\"seller-tab\" data-toggle=\"tab\" href=\"#seller\" role=\"tab\" aria-controls=\"seller\" aria-selected=\"false\">Seller</a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" (click) = clickTab(5) [class.active] = \"selectedTab === 5\"\n         id=\"similarItem-tab\" data-toggle=\"tab\" href=\"#similarItem\" role=\"tab\" aria-controls=\"similarItem\" aria-selected=\"false\">Similar Products</a>\n    </li>\n  </ul>\n\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <!-- product tab panel -->\n    <div *ngIf = \"itemObj\" class=\"tab-pane active\" [class.active] = \"selectedTab === 1\"\n         id=\"product\" role=\"tabpanel\" aria-labelledby=\"product-tab\">\n      <table  align = 'center' class = \"resultTable\" style = \"width: 100%;\">\n        <tr *ngIf = \"itemObj.PictureURL\"><td style = 'width: 20%;' class = \"col-6\">Product Images</td>\n          <td class = \"col-6\"><a data-toggle=\"modal\" data-target=\"#imagesModal\" style = \"color: #669999;\">View Product Images Here</a></td></tr>\n        <tr *ngIf = \"itemObj.Subtitle\"><td class = \"col-6\">SubTitles</td><td class = \"col-6\">{{itemObj.Subtitle}}</td></tr>\n        <tr *ngIf = \"itemObj.CurrentPrice?.Value\"><td class = \"col-6\">Price</td><td class = \"col-6\">{{ price }}</td></tr>\n        <tr *ngIf = \"itemObj.Location\"><td class = \"col-6\">Location</td><td class = \"col-6\">{{itemObj.Location}}</td></tr>\n        <tr *ngIf = \"returnPolicy !== ''\"><td class = \"col-6\">Return Policy (US)</td><td class = \"col-6\">{{returnPolicy}}</td></tr>\n        <ng-container *ngIf = \"itemObj.ItemSpecifics?.NameValueList\">\n          <tr *ngFor = \"let specific of itemObj.ItemSpecifics.NameValueList\">\n            <td class = \"col-6\">{{specific.Name}}</td><td class = \"col-6\">{{specific.Value}}</td>\n          </tr>\n        </ng-container>\n      </table>\n    </div>\n\n    <!-- photo tab panel -->\n    <div *ngIf = \"this.googleImageList\" [class.active] = \"selectedTab === 2\"\n         style = \"margin-top: 2%; \" class=\"tab-pane active\"\n         id=\"photo\" role=\"tabpanel\" aria-labelledby=\"photo-tab\">\n\n      <div class=\"flex col-12 col-md-4 col-lg-4\" style = \"display: inline-block; vertical-align: top;\">\n        <div class=\"row\">\n          <div class=\"card\" style = \"border: solid 3px black\">\n            <img (click)=\"showImageInANewTab($event.target)\" style = \"max-width: 100%;\"\n            [src] = \"this.googleImageList[0]\"></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"card\" style = \"border: solid 3px black\">\n            <img (click)=\"showImageInANewTab($event.target)\" style = \"max-width: 100%;\" [src] = \"this.googleImageList[3]\"></div>\n        </div>\n        <div class=\"row\">\n        </div>\n      </div>\n\n      <div class=\"flex col-12 col-md-4 col-lg-4\" style = \"display: inline-block; vertical-align: top;\">\n        <div class=\"row\">\n          <div class=\"card\" style = \"border: solid 3px black\">\n            <img (click)=\"showImageInANewTab($event.target)\" style = \"max-width: 100%;\" [src] = \"this.googleImageList[1]\"></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"card\" style = \"border: solid 3px black\">\n            <img (click)=\"showImageInANewTab($event.target)\" style = \"max-width: 100%;\" [src] = \"this.googleImageList[4]\"></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"card\" style = \"border: solid 3px black\">\n            <img (click)=\"showImageInANewTab($event.target)\" style = \"max-width: 100%;\" [src] = \"this.googleImageList[6]\"></div>\n        </div>\n      </div>\n\n      <div class=\"col-12 col-md-4 col-lg-4\" style = \"display: inline-block; vertical-align: top;\">\n        <div class=\"row\">\n          <div class=\"card\" style = \"border: solid 3px black\">\n            <img (click)=\"showImageInANewTab($event.target)\" style = \"max-width: 100%;\" [src] = \"this.googleImageList[2]\"></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"card\" style = \"border: solid 3px black\">\n            <img (click)=\"showImageInANewTab($event.target)\" style = \"max-width: 100%;\" [src] = \"this.googleImageList[5]\"></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"card\" style = \"border: solid 3px black\">\n            <img (click)=\"showImageInANewTab($event.target)\" style = \"max-width: 100%;\" [src] = \"this.googleImageList[7]\"></div>\n        </div>\n      </div>\n    </div>\n\n    <!-- shipping tab panel -->\n    <div *ngIf = \"selectedItemObj\" class=\"tab-pane active\" [class.active] = \"selectedTab === 3\"\n         id=\"shipping\" role=\"tabpanel\" aria-labelledby=\"shipping-tab\">\n      <table  align = 'center' class = \"resultTable\" style = \"width: 100%;\">\n        <tr *ngIf = \"shippingCost\"><td>Shipping Cost</td><td>{{shippingCost}}</td></tr>\n        <tr *ngIf = \"selectedItemObj.shippingInfo[0]?.shipToLocations\">\n          <td>Shipping Locations</td><td>{{selectedItemObj.shippingInfo[0].shipToLocations}}</td></tr>\n        <tr *ngIf = \"handlingTime\"><td>Handling time</td>\n          <td>{{handlingTime}}&nbsp;Day<ng-container *ngIf = \"handlingTime > 1\">s</ng-container></td></tr>\n        <tr *ngIf = \"expeditedShipping !== undefined\"><td>Expedited Shipping</td>\n          <td><i *ngIf = \"expeditedShipping == 'true' \" class = \"material-icons\" style = \"color: green;\">done</i>\n            <i *ngIf = \"expeditedShipping == 'false'\" class = \"material-icons\" style = \"color: red;\">clear</i></td></tr>\n        <tr *ngIf = \"oneDayShippingAvailable !== undefined\"><td>One Day Shipping</td>\n          <td><i *ngIf = \"oneDayShippingAvailable == 'true'\" class = \"material-icons\" style = \"color: green;\">done</i>\n            <i *ngIf = \"oneDayShippingAvailable == 'false'\" class = \"material-icons\" style = \"color: red;\">clear</i></td></tr>\n        <tr *ngIf = \"selectedItemObj.returnsAccepted !== undefined\"><td>Return Accepted</td>\n          <td><i *ngIf = \"selectedItemObj.returnsAccepted == 'true'\" class = \"material-icons\" style = \"color: green;\">done</i>\n          <i *ngIf = \"selectedItemObj.returnsAccepted == 'false'\" class = \"material-icons\" style = \"color: red;\">clear</i></td></tr>\n      </table>\n    </div>\n\n    <!-- seller tab panel -->\n    <div *ngIf = \"selectedItemObj && itemObj\" class=\"tab-pane active\" [class.active] = \"selectedTab === 4\" id=\"seller\" role=\"tabpanel\" aria-labelledby=\"seller-tab\">\n      <table  align = 'center' class = \"resultTable\" style = \"width: 100%;\">\n        <tr *ngIf = \"itemObj.Seller?.UserID\"><td colspan=\"2\" style = \"text-align: center;\">\n          {{itemObj.Seller.UserID | uppercase}}</td></tr>\n        <tr *ngIf = \"itemObj.Seller?.FeedbackScore\"><td style = \"width: 50%;\">Feedback Score</td>\n          <td style = \"width: 50%;\">{{itemObj.Seller.FeedbackScore}}</td></tr>\n\n        <tr *ngIf = \"popularity\"><td>Popularity</td>\n          <td>\n            <div class=\"progress-wrapper\">\n              <round-progress class=\"progress\" style = \"margin-top: -1.8%; margin-left: -1%;\" [current]=\"popularity\" [max]=\"100\" [radius]=\"20\" [stroke]=\"3\" [color]=\"'#009933'\"></round-progress>\n              <ng-container class=\"progress\">{{popularity}}</ng-container>\n            </div>\n          </td>\n        </tr>\n        <tr *ngIf = \"starColor\"><td>Feedback Rating Star</td>\n          <td><i *ngIf = \"itemObj.Seller.FeedbackScore >= 10000\" class = \"material-icons\" [style.color] = \"starColor\">star</i>\n            <i *ngIf = \"itemObj.Seller.FeedbackScore < 10000\" class = \"material-icons\" [style.color] = \"starColor\">star_border</i></td></tr>\n        <tr *ngIf = \"topRatedSeller\"><td>Top Rated</td>\n          <td><i *ngIf = \"topRatedSeller == 'true'\" class = \"material-icons\" style = \"color: green;\">done</i>\n            <i *ngIf = \"topRatedSeller == 'false'\" class = \"material-icons\" style = \"color: red;\">clear</i></td></tr>\n        <tr *ngIf = \"selectedItemObj.storeInfo && selectedItemObj.storeInfo[0]?.storeName\"><td>Store Name</td>\n          <td>{{selectedItemObj.storeInfo[0].storeName}}</td></tr>\n        <tr *ngIf = \"selectedItemObj.storeInfo && selectedItemObj.storeInfo[0]?.storeURL\"><td>Buy Product At</td>\n          <td><a target=\"_blank\" style = \"color: green;\" [href] = \"selectedItemObj.storeInfo[0].storeURL\">Store</a></td></tr>\n      </table>\n    </div>\n\n    <!-- similar tab panel -->\n    <div class=\"tab-pane active\" [class.active] = \"selectedTab === 5\" id=\"similarItem\" role=\"tabpanel\" aria-labelledby=\"similarItem-tab\">\n      <div *ngIf=\"similarItemsList.length === 0\" class=\"alert alert-warning col-11 justify-content-center\" role=\"alert\" style = \"margin: 0 auto;\">No records.</div>\n\n      <ng-container *ngIf = \"similarItemsList.length > 0\">\n\n\n        <form [formGroup]=\"form\" style = \"margin: 3%;\">\n          <div class = \"row\">\n            <select formControlName=\"orderOption\" (change) = \"clickOrderOption(orderType)\"\n                    class=\"col-12 col-md-2 col-lg-2 inputStyle\"  style = \"background-color: white;\">\n              <option *ngFor=\"let curOrder of orderOptionList\" [ngValue]=\"curOrder\">{{ curOrder.key }}</option>\n            </select>\n\n            <select formControlName=\"orderType\" class=\"col-12 col-md-2 col-lg-2 inputStyle\" #orderType\n                    style = \"background-color: white;\">\n              <option *ngFor=\"let curType of orderTypeList\" [ngValue]=\"curType\">{{ curType.key }}</option>\n            </select>\n          </div>\n        </form>\n\n        <ng-container *ngFor = \"let item of similarItemsList| orderBy: form.get('orderOption').value.value : form.get('orderType').value.value; let i=index\">\n          <ng-container *ngIf = \"i < maxNumOfShowedItem\">\n            <div  class=\"card mb-3\" style=\"max-width: 100%; background-color: black;\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-md-2\">\n                  <img (click)=\"showImageInANewTab($event.target)\" [src] = \"item.imageURL\"\n                       class=\"card-img\" alt=\"...\" style = \"max-height: 140px; max-width: 140px;\">\n                </div>\n                <div class=\"col-md-8\">\n                  <div class=\"card-body\">\n                    <p class=\"card-text\" style = \"margin-bottom: 0%;\">\n                      <a target=\"_blank\" style = \"color: #669999;\" [href] = \"item.viewItemURL\">{{item.title}}</a></p>\n                    <p class=\"card-text\" style = \"margin-bottom: 0%; color: greenyellow;\">Price: ${{item.price}}</p>\n                    <p class=\"card-text\" style = \"margin-bottom: 0%; color: orange;\">Shipping Cost: ${{item.shippingCost}}</p>\n                    <p class=\"card-text\" style = \"margin-bottom: 0%; color: white;\">Days Left: {{item.daysLeft}}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n\n      <div class = \"topBottomMargin\" style = \"text-align: center;\">\n        <button *ngIf = \"similarItemsList.length > 5\" class = \"btn-dark\" (click) = \"changeShowMode()\">\n          <span *ngIf = \"maxNumOfShowedItem === 5\">Show More</span>\n          <span *ngIf = \"maxNumOfShowedItem === 20\">Show Less</span>\n        </button>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/detail-info/detail-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/detail-info/detail-info.component.ts ***!
  \******************************************************/
/*! exports provided: DetailInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailInfoComponent", function() { return DetailInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _SimilarItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SimilarItem */ "./src/app/detail-info/SimilarItem.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");








var DetailInfoComponent = /** @class */ (function () {
    function DetailInfoComponent(ngZone, route, dataService, ///////////////////////
    location, router) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this.location = location;
        this.router = router;
        this.leave = false;
        // data get from results tab panel
        this.selectedItemId = '';
        // nav tabs
        this.selectedTab = 1;
        // api call
        this.nodeUrl = 'http://csci571hw8-236103.appspot.com';
        this.returnPolicy = '';
        this.price = '';
        // facebook
        this.facebookUrl = '';
        // google search
        this.title = '';
        this.googleImageList = new Array(0);
        // similar items
        // similarItemList: any;
        this.similarItemsList = new Array(0);
        this.maxNumOfShowedItem = 5;
        this.orderOptionList = [
            { key: 'Default', value: '' },
            { key: 'Product Name', value: 'title' },
            { key: 'Days Left', value: 'daysLeft' },
            { key: 'Price', value: 'price' },
            { key: 'Shipping Cost', value: 'shippingCost' },
        ];
        this.orderTypeList = [
            { key: 'Ascending', value: false },
            { key: 'Descending', value: true }
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            orderOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.orderOptionList[0]),
            orderType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: this.orderTypeList[0], disabled: true })
        });
        this.ngZone = ngZone;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                if (_this.router.url + '' !== '/') {
                    // this.getSelectedItemId();
                    _this.selectedItemId = _this.route.snapshot.paramMap.get('itemId');
                    _this.dataService.readItemObj$.subscribe(function (data) {
                        _this.selectedItemObj = data;
                        // shopping tab
                        if (_this.selectedItemObj.shippingInfo) {
                            if (_this.selectedItemObj.shippingInfo[0].shippingServiceCost &&
                                _this.selectedItemObj.shippingInfo[0].shippingServiceCost[0].__value__) {
                                _this.shippingCost = _this.selectedItemObj.shippingInfo[0].shippingServiceCost[0].__value__;
                                _this.shippingCost = _this.shippingCost === 0 ? 'Free SHipping' : '$' + _this.shippingCost;
                            }
                            if (_this.selectedItemObj.shippingInfo[0].handlingTime) {
                                _this.handlingTime = _this.selectedItemObj.shippingInfo[0].handlingTime;
                            }
                            if (_this.selectedItemObj.shippingInfo[0].expeditedShipping) {
                                _this.expeditedShipping = _this.selectedItemObj.shippingInfo[0].expeditedShipping;
                                // alert('expeditionShipping' + this.expeditedShipping + ' !expeditionShipping ' +  !this.expeditedShipping);
                            }
                            if (_this.selectedItemObj.shippingInfo[0].oneDayShippingAvailable) {
                                _this.oneDayShippingAvailable = _this.selectedItemObj.shippingInfo[0].oneDayShippingAvailable;
                                // alert('oneDayShipping' + this.oneDayShippingAvailable);
                            }
                        }
                    });
                    _this.callShoppingApi();
                    // this.callGoogleSearchApi();
                }
            }
        });
    }
    DetailInfoComponent.prototype.ngOnInit = function () { };
    DetailInfoComponent.prototype.clickTab = function (tab) {
        this.selectedTab = tab;
    };
    // list button
    DetailInfoComponent.prototype.goBack = function () {
        this.leave = !this.leave;
        // this.delay(10000);
        this.location.back();
    };
    /*async delay(ms: number) {
      await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log('fired'));
    }*/
    // modal
    DetailInfoComponent.prototype.showImageInANewTab = function (target) {
        var url = target.src;
        window.open(url, '_blank');
    };
    // facebook button
    DetailInfoComponent.prototype.shareToFacebook = function () {
        this.facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + this.itemObj.ViewItemURLForNaturalSearch
            + '&quote=Buy ' + this.itemObj.Title + ' at ' + this.price + ' from link below';
        // alert('current url is (in click function)' + this.facebookUrl);
    };
    // wish list button
    DetailInfoComponent.prototype.isInLocalStorage = function () { return this.selectedItemId in localStorage; };
    DetailInfoComponent.prototype.modifyWishList = function () {
        this.dataService.getClickEvent(null);
        // alert('I am in provider');
    };
    // call shopping api
    DetailInfoComponent.prototype.callShoppingApi = function () {
        var _this = this;
        var url = this.nodeUrl + '/shopping/' + this.selectedItemId;
        // alert(url);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', url, true); // "asynchronous"
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
                _this.ngZone.run(function () {
                    var jsonObj = JSON.parse(xmlhttp.responseText);
                    _this.itemObj = jsonObj.Item;
                    if (_this.itemObj.Title) {
                        _this.title = _this.itemObj.Title;
                    }
                    // return policy
                    if (_this.itemObj.ReturnPolicy !== undefined && _this.itemObj.ReturnPolicy.ReturnsAccepted !== undefined) {
                        var days = '';
                        if (_this.itemObj.ReturnPolicy.ReturnsWithin !== undefined) {
                            days = ' within ' + _this.itemObj.ReturnPolicy.ReturnsWithin;
                        }
                        _this.returnPolicy = _this.itemObj.ReturnPolicy.ReturnsAccepted + days;
                    }
                    // price
                    if (_this.itemObj.CurrentPrice.Value) {
                        _this.price = '$' + _this.itemObj.CurrentPrice.Value;
                    }
                    // pictures
                    if (_this.itemObj.PictureURL !== undefined) {
                        _this.imageList = _this.itemObj.PictureURL;
                    }
                    // seller Tab
                    if (_this.selectedItemObj.sellerInfo[0].topRatedSeller) {
                        _this.topRatedSeller = _this.selectedItemObj.sellerInfo[0].topRatedSeller;
                    }
                    if (_this.itemObj.Seller && _this.itemObj.Seller.FeedbackRatingStar) {
                        _this.starColor = _this.itemObj.Seller.FeedbackRatingStar;
                        if (_this.itemObj.Seller && _this.itemObj.Seller.FeedbackScore <= 9) {
                            _this.starColor = 'white';
                        }
                    }
                    if (_this.itemObj.Seller && _this.itemObj.Seller.PositiveFeedbackPercent) {
                        _this.popularity = _this.itemObj.Seller.PositiveFeedbackPercent;
                    }
                });
                _this.callSimilarApi();
            }
        };
    };
    // google search
    DetailInfoComponent.prototype.callGoogleSearchApi = function () {
        var _this = this;
        var url = this.nodeUrl + '/googleSearch/' + encodeURI(this.title);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', url, true); // "asynchronous"
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
                _this.ngZone.run(function () {
                    var jsonObj = JSON.parse(xmlhttp.responseText);
                    var itemObj = jsonObj.items;
                    for (var i = 0; i < itemObj.length; i++) {
                        _this.googleImageList.push(itemObj[i].link);
                    }
                });
            }
        };
    };
    // similar item
    DetailInfoComponent.prototype.callSimilarApi = function () {
        var _this = this;
        var url = this.nodeUrl + '/similarItem/' + this.selectedItemId;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', url, true); // "asynchronous"
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
                _this.ngZone.run(function () {
                    var jsonObj = JSON.parse(xmlhttp.responseText);
                    // this.similarItemList = jsonObj.getSimilarItemsResponse.itemRecommendations.item;
                    var similarItemListObj = jsonObj.getSimilarItemsResponse.itemRecommendations.item;
                    for (var i = 0; i < similarItemListObj.length; i++) {
                        var newItem = new _SimilarItem__WEBPACK_IMPORTED_MODULE_6__["SimilarItem"]();
                        newItem.title = similarItemListObj[i].title ? similarItemListObj[i].title : '';
                        newItem.viewItemURL = similarItemListObj[i].viewItemURL ? similarItemListObj[i].viewItemURL : '#';
                        newItem.imageURL = similarItemListObj[i].imageURL ? similarItemListObj[i].imageURL : '';
                        newItem.price = similarItemListObj[i].buyItNowPrice && similarItemListObj[i].buyItNowPrice.__value__ ?
                            similarItemListObj[i].buyItNowPrice.__value__ : 0;
                        newItem.shippingCost = similarItemListObj[i].shippingCost && similarItemListObj[i].shippingCost.__value__ ?
                            similarItemListObj[i].shippingCost.__value__ : 0;
                        newItem.itemId = similarItemListObj[i].itemId;
                        newItem.daysLeft = 0;
                        if (similarItemListObj[i].timeLeft) {
                            var locOfP = void 0;
                            var locOfD = void 0;
                            var value = similarItemListObj[i].timeLeft;
                            for (var j = 0; j < value.length; j++) {
                                if (value.charAt(j) === 'P' && !locOfP) {
                                    locOfP = j;
                                }
                                if (value.charAt(j) === 'D' && !locOfD) {
                                    locOfD = j;
                                }
                            }
                            newItem.daysLeft = parseInt(value.substring(locOfP + 1, locOfD), 10);
                        }
                        _this.similarItemsList.push(newItem);
                    }
                });
            }
            _this.callGoogleSearchApi();
        };
    };
    DetailInfoComponent.prototype.clickOrderOption = function (orderType) {
        orderType.disabled = this.form.get('orderOption').value.key + '' === 'Default';
    };
    DetailInfoComponent.prototype.changeShowMode = function () {
        if (this.maxNumOfShowedItem === 5) {
            this.maxNumOfShowedItem = 20;
        }
        else {
            this.maxNumOfShowedItem = 5;
        }
    };
    DetailInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-info',
            template: __webpack_require__(/*! ./detail-info.component.html */ "./src/app/detail-info/detail-info.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('slideOut', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                        transform: 'translateX(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                        transform: 'translateX(100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('in => out', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('3000ms')
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./detail-info.component.css */ "./src/app/detail-info/detail-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DetailInfoComponent);
    return DetailInfoComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: white;\n  font-size: 160%;\n  text-align: center;\n  line-height: 260%;\n}\n\nform{\n  background-color: black;\n  padding-bottom: 1%;\n}\n\nlabel{\n  color: white;\n  padding-left: 0px;\n}\n\n.inputStyle{\n  border-radius: 0.3em;\n  height: 2em;\n}\n\n.topBottomMargin{\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\ntable.resultTable tr:hover{\n  background-color: #333333;\n}\n\ntd, th{\n  height: 30%;\n}\n\nimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 80%;\n  height: 80%;\n}\n\n.pagination>li>a{\n  border: none;\n  color: black;\n}\n\n.pagination>li.active>a {\n  background: black;\n  color: white;\n}\n\n@media (max-width: 600px){\n  form{padding-top: 3%;}\n  h1{text-align: left;}\n}\n\n@media(min-width: 600px){\n  div.row{\n    margin: 0 auto;\n    width: 70%;\n  }\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUlBO0VBQ0Usb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxLQUFLLGVBQWUsQ0FBQztFQUNyQixHQUFHLGdCQUFnQixDQUFDO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI2MCU7XG59XG5cbmZvcm17XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogMSU7XG59XG5cbmxhYmVse1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uaW5wdXRTdHlsZXtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIGhlaWdodDogMmVtO1xufVxuXG4udG9wQm90dG9tTWFyZ2lue1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudGFibGUucmVzdWx0VGFibGUgdHI6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG59XG5cbnRkLCB0aHtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cblxuXG5pbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi5wYWdpbmF0aW9uPmxpPmF7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnBhZ2luYXRpb24+bGkuYWN0aXZlPmEge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XG4gIGZvcm17cGFkZGluZy10b3A6IDMlO31cbiAgaDF7dGV4dC1hbGlnbjogbGVmdDt9XG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDYwMHB4KXtcbiAgZGl2LnJvd3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name = \"form\" (click) = \"curZip == '' ? getLoc() : null\" [formGroup]=\"searchForm\" class = \"col-12 col-md-12 col-lg-12\">\n  <h1>Product Search</h1>\n\n  <div class = \"row\">\n    <label class = \"col-12 col-md-3 col-lg-3\">Keyword<p style = \"display: inline; color: red;\">*</p></label>\n    <div class = \"column col-12 col-md-8 col-lg-8\" style = \"padding-left: 0px; padding-right: 0px\">\n      <input (blur) = \"resetKeywordError(keyword, zip, search)\"\n             (keyup) = \"resetKeywordError(keyword, zip, search)\"\n             class = \"form-control inputStyle\" [style.border-color] = \"keywordError === '' ? 'transparent' : 'red'\"\n             type=\"text\" #keyword formControlName=\"keyword\" id = \"keyword\" placeholder=\"Enter Product Name(eg.iPhone 8)\" required>\n      <div style = \"color: red; font-size: 0.8em; margin-top: 1.3%;\">{{ keywordError }}</div>\n    </div>\n  </div>\n\n  <div class = \"row\" style = \"margin-top: 2%; margin-bottom: 2%;\">\n    <label class = \"col-12 col-md-3 col-lg-3\">Category</label>\n    <select formControlName=\"category\" class=\"col-12 col-md-4 col-lg-4 inputStyle\"  style = \"background-color: white;\">\n      <option *ngFor=\"let curCategory of categoryList\" [ngValue]=\"curCategory\">\n        {{ curCategory }}\n      </option>\n    </select>\n  </div>\n\n  <div class = \"row\" style = \"margin-top: 2%; margin-bottom: 1%;\">\n    <label class = \"col-12 col-md-3 col-lg-3\">Condition</label>\n    <div class=\"col-12 col-md-5 col-lg-7\" style = \"padding-left: 0px;\">\n      <label class=\"checkbox-inline\" style = \"margin-right: 6%;\">\n        <input type=\"checkbox\" formControlName=\"conditionOption\"\n               (change)=\"onChangeCondition('New', $event.target.checked)\">&nbsp;New</label>\n      <label class=\"checkbox-inline\" style = \"margin-right: 6%;\">\n        <input type=\"checkbox\" formControlName=\"conditionOption\" value=\"Used\"\n               (change)=\"onChangeCondition('Used', $event.target.checked)\">&nbsp;Used</label>\n      <label class=\"checkbox-inline\">\n        <input type=\"checkbox\" formControlName=\"conditionOption\" value=\"Unspecified\"\n               (change)=\"onChangeCondition('Unspecified', $event.target.checked)\">&nbsp;Unspecified</label>\n    </div>\n  </div>\n\n  <div class = \"row\" style = \"margin-top: 1%; margin-bottom: 2%;\">\n    <label class = \"col-12 col-md-3 col-lg-3\">Shipping Options</label>\n    <div class=\"col-12 col-md-5 col-lg-7\" style = \"padding-left: 0px;\">\n      <label class=\"checkbox-inline\" style = \"margin-right: 6%;\">\n        <input type=\"checkbox\" formControlName=\"shipOption\" value=\"LocalPickupOnly\"\n               (change)=\"onChangeShipOption('LocalPickupOnly', $event.target.checked)\">&nbsp;Local Pickup</label>\n      <label class=\"checkbox-inline\" style = \"margin-right: 6%;\">\n        <input type=\"checkbox\" formControlName=\"shipOption\" value=\"FreeShippingOnly\"\n               (change)=\"onChangeShipOption('FreeShippingOnly', $event.target.checked)\">&nbsp;Free Shipping</label>\n    </div>\n  </div>\n\n  <div class = \"row\" style = \"margin-top: 2%; margin-bottom: 2%;\">\n    <label class = \"col-12 col-md-3 col-lg-3\">Distance (Miles)</label>\n    <input class = \"col-12 col-md-4 col-lg-4 inputStyle\" style = \"padding-left: 0px;\" formControlName = \"distance\"\n           type=\"text\" value = 10 placeholder=10>\n  </div>\n\n\n  <div class = \"row\" style = \"margin-top: 2%; margin-bottom: 0%;\">\n    <label class = \"col-12 col-md-3 col-lg-3\">From<p style = \"display: inline; color: red;\">*</p></label>\n    <div class = \"column col-12 col-md-8 col-lg-8\" style = \"padding-left: 0px; padding-right: 0px\">\n      <div (click)=\"clickCurrentZip(keyword, zip, search)\" class=\"radio\">\n        <label><input type=\"radio\" formControlName=\"zipOption\" checked value = \"curLoc\">&nbsp;Current Location</label></div>\n      <div (click)=\"clickOtherZip(keyword, zip, search)\" class=\"radio\">\n        <label><input type=\"radio\" formControlName=\"zipOption\" value = \"inputLoc\">&nbsp;Other. Please specify zip code</label></div>\n\n      <mat-form-field style = \"width: 100%; margin-top: -3%;\">\n        <input (blur) = \"resetZipInputError(keyword, zip, search)\"\n               (keyup) = \"resetZipInputError(keyword, zip, search); getAutocompleteValue(zip)\"\n               matInput=\"\"  [matAutocomplete]=\"auto\"\n               style = \"background-color: white; margin-bottom: -1.1%; margin-top: -3.8%; border: 0.05em solid transparent;\"\n               [style.border-color] = \"zipInputError === '' ? 'transparent' : 'red'\" class = \"form-control inputStyle\"\n               type=\"text\" #zip formControlName=\"zip\" name = \"zip\" required>\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of options\" [value]=\"option\">{{option}}</mat-option>\n        </mat-autocomplete>\n        <div style = \"color: red; font-size: 0.8em;\"\n             [style.margin-top.%] = \"zipInputError === '' ? 0 : 3\">{{ zipInputError }}</div>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div class = \"row\">\n    <button (click)= onSubmit(zip) type=\"submit\" #search disabled style = \"color: black; margin-right: 5%;\">\n      <img src=\"../../assets/img/baseline_search_black_18dp.png\" style = \"max-width: 30%;\">Search</button>\n    <button (click)=\"clean(keyword, zip, search); results.click()\">\n      <img style = \"max-width: 40%;\" src=\"../../assets/img/baseline_clear_all_black_18dp.png\">Clear</button>\n  </div>\n</form>\n\n<!-- results Tab and Wish List Tab -->\n<ul class=\"nav nav-pills mb-3 justify-content-center topBottomMargin\" id=\"pills-tab\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a (click) = setResultsState()\n       [class.active] = \"resultsTabIsSelected\" [class.btn-dark] = \"resultsTabIsSelected\"\n        class=\"nav-link active btn-dark btn\" id=\"pills-home-tab\" data-toggle=\"pill\" #results\n        href=\"#pills-home\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\">Results</a>\n  </li>\n  <li class=\"nav-item\">\n    <a (click) = clickWishListButton()\n       [class.active] = \"!resultsTabIsSelected\" [class.btn-dark] = \"!resultsTabIsSelected\"\n       class=\"nav-link active btn-dark btn\" id=\"pills-profile-tab\" data-toggle=\"pill\"\n       href=\"#pills-profile\" role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\">Wish List</a>\n  </li>\n</ul>\n\n\n\n\n\n<!-- process bar -->\n<div *ngIf = \"dataIsFetching\" class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n</div>\n\n<div class=\"tab-content\" id=\"pills-tabContent\" *ngIf = \"searchIsClicked && isInSearchResult && keepOutput && !dataIsFetching\">\n  <!-- results tab panel -->\n  <div class=\"tab-pane fade show active\" [class.active] = \"resultsTabIsSelected\"\n       id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n    <!-- error box -->\n    <div *ngIf=\"resultsTabIsSelected && dataList.length === 0\" class = \"alert alert-warning col-11 justify-content-center\" role=\"alert\" style = \"margin: 0 auto;\">No records.</div>\n    <div *ngIf = \"resultsTabIsSelected && dataList.length > 0\">\n\n      <!-- detail button -->\n      <div class=\"text-right\">\n        <button routerLink=\"/detailInfo/{{selectedItemId}}\" class = \"btn\"\n                (click) = \"goToDetailInfo()\" [disabled] = \"noSelectedItemInResults\">Detail\n          <img style = \"max-width: 15%;\" src='../../assets/img/baseline_arrow_forward_ios_black_18dp.png'></button>\n      </div>\n\n      <!-- table -->\n      <table  align = 'center' class = \"resultTable\">\n        <tr>\n          <th style = \"width: 40px\">#</th><th style = 'width: 100px'>Image</th><th style = 'width: 330px'>Title</th>\n          <th style = 'width: 90px'>Price</th><th style = 'width: 150px'>Shipping</th>\n          <th style = 'width: 70px'>Zip</th><th>Seller</th><th>Wish List</th>\n        </tr>\n\n\n        <tr *ngFor = \"let item of dataList; let i=index\" class = \"selectedStyle\" [class.selectedStyle] = \"dataList[i].itemId + '' === selectedItemId\">\n          <ng-container *ngIf = \"item.index > (paginationActiveNum - 1)*10 && item.index <= paginationActiveNum*10 \">\n            <td>{{item.index}}</td>\n            <td><img (click) = \"showImageInANewTab($event.target)\" [src] = \"item.image\"></td>\n            <td><p (click) = \"getItemIdInResults(item, $event.target)\" style = \"color: #0080ff;\"\n                   matTooltip=\"{{item.title}}\" matTooltipPosition=\"below\">{{item.modifiedTitle}}</p></td>\n            <td>{{item.price}}</td>\n            <td>{{item.shipping}}</td>\n            <td>{{item.zip}}</td>\n            <td>{{item.seller}}</td>\n            <td>\n              <button (click) = \"modifyWishList(item)\" style = \"background-color: white; width: 2.7em; height: 2.4em;\">\n                <i *ngIf = \"!isInLocalStorage(item.itemId)\" class = \"material-icons\" style = \"max-width: 95%;\">add_shopping_cart</i>\n                <i *ngIf = \"isInLocalStorage(item.itemId)\" class = \"material-icons\"\n                   style = \"max-width: 95%; color: #b8860b;\">remove_shopping_cart</i>\n              </button>\n            </td>\n          </ng-container>\n        </tr>\n\n\n\n      </table>\n      <!-- bootstrap pagination -->\n      <nav aria-label=\"...\" style = \"margin-top: 2%;\" >\n        <ul class=\"pagination justify-content-center\">\n          <li class=\"page-item\" (click) = \"clickPaginationTab('prev')\"\n              [ngStyle]=\"{'pointer-events': paginationActiveNum === 1 ? 'none' : 'auto'}\">\n            <a class=\"page-link\" href=\"#\" tabindex=\"-1\" style = \"white-space: nowrap;\"\n               [ngStyle]=\"{'color': paginationActiveNum === 1 ? 'lightGrey' : 'black'}\">&laquo; Previous</a></li>\n          <li class=\"page-item active\" (click) = \"clickPaginationTab(1)\" [class.active] = \"paginationActiveNum === 1\">\n            <a class=\"page-link\" href=\"#\">1</a></li>\n          <li class=\"page-item active\" (click) = \"clickPaginationTab(2)\" *ngIf = \"dataList.length > 10\"\n              [class.active] = \"paginationActiveNum === 2\">\n            <a class=\"page-link\" href=\"#\">2</a></li>\n          <li class=\"page-item active\" (click) = \"clickPaginationTab(3)\" *ngIf = \"dataList.length > 20\"\n              [class.active] = \"paginationActiveNum === 3\">\n            <a class=\"page-link\" href=\"#\">3</a></li>\n          <li class=\"page-item active\" (click) = \"clickPaginationTab(4)\" *ngIf = \"dataList.length > 30\"\n              [class.active] = \"paginationActiveNum === 4\">\n            <a class=\"page-link\" href=\"#\">4</a></li>\n          <li class=\"page-item active\" (click) = \"clickPaginationTab(5)\" *ngIf = \"dataList.length > 40\"\n              [class.active] = \"paginationActiveNum === 5\">\n            <a class=\"page-link\" href=\"#\">5</a></li>\n          <li class=\"page-item\" (click) = \"clickPaginationTab('next')\"\n              [ngStyle]=\"{'pointer-events': paginationActiveNum === Math.ceil(dataList.length/10) ? 'none' : 'auto'}\">\n            <a class=\"page-link\" tabindex=\"-1\" href=\"#\" style = \"white-space: nowrap;\"\n               [ngStyle]=\"{'color': paginationActiveNum === Math.ceil(dataList.length/10) ? 'lightGrey' : 'black'}\">Next &raquo;</a></li>\n        </ul>\n      </nav>\n    </div>\n  </div>\n\n\n  <!-- wish List tag panel -->\n  <div  class=\"tab-pane fade active show\" [class.active] = \"!resultsTabIsSelected\"\n        id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n    <!-- detail button -->\n    <div class=\"text-right\">\n      <button routerLink=\"/detailInfo/{{selectedItemId}}\" class = \"btn\"\n              (click) = \"goToDetailInfo()\" [disabled] = \"noSelectedItemInWishList\">Detail\n        <img style = \"max-width: 15%;\" src='../../assets/img/baseline_arrow_forward_ios_black_18dp.png'></button>\n    </div>\n\n    <!-- error box -->\n    <div *ngIf=\"getLocalStorageLength() === 0\" class=\"alert alert-warning col-11 justify-content-center\" role=\"alert\" style = \"margin: 0 auto;\">No records.</div>\n    <table  *ngIf=\"getLocalStorageLength() > 0 && !resultsTabIsSelected\" align = 'center' class = \"resultTable\">\n      <tr>\n        <th style = 'width: 40px'>#</th><th style = 'width: 100px'>Image</th><th style = 'width: 330px'>Title</th>\n        <th style = 'width: 90px'>Price</th><th style = 'width: 150px'>Shipping</th><th>Seller</th><th>Wish List</th>\n      </tr>\n\n\n\n\n      <tr *ngFor = \"let curItem of wishList; let i=index\"  class = \"selectedStyle\"\n          [class.selectedStyle] = \"wishList[i].itemId + '' === selectedItemId\">\n\n\n\n\n        <ng-container *ngIf = \"isInLocalStorage(curItem.itemId)\">\n          <td>{{i+1}}</td>\n          <td><img (click) = \"showImageInANewTab($event.target)\" [src] = \"curItem.image\"></td>\n          <td><p (click) = \"getItemIdInWishList(curItem, $event.target)\" style = \"color: #0080ff;\"\n                 matTooltip=\"{{curItem.title}}\" matTooltipPosition=\"below\">{{curItem.modifiedTitle}}</p></td>\n          <td>{{curItem.price}}</td>\n          <td>{{curItem.shipping}}</td>\n          <td>{{curItem.seller}}</td>\n          <td><button (click) = \"modifyWishList(curItem, $event.target)\" style = \"background-color: white; width: 2.7em; height: 2.4em;\">\n            <i class = \"material-icons\" style = \"max-width: 95%; color: #b8860b;\">remove_shopping_cart</i></button></td>\n        </ng-container>\n      </tr>\n      <tr><td colspan=\"7\"><p style = \"float: right;\">Total Shopping&nbsp;&nbsp;&nbsp;&nbsp;${{totalAmount}}&nbsp;&nbsp;<p></p></td></tr>\n    </table>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Data */ "./src/app/Data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animation */ "./src/app/animation.ts");



 // pagination



var FormComponent = /** @class */ (function () {
    function FormComponent(ngZone, dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        // services
        this.dataList = new Array(0);
        this.Math = Math;
        // results tab
        this.resultsTabIsSelected = true;
        // detail button
        this.selectedItemId = '';
        this.isInSearchResult = true;
        this.searchIsClicked = false;
        // wish List
        this.wishList = new Array(0);
        this.categoryList = ['All Categories', 'Art', 'Baby', 'Books', 'Clothing, Shoes & Accessories',
            'Computers/Tablets & Networking', 'Health & Beauty', 'Music', 'Video Games & Consoles'];
        this.dict = {
            'All Categories': -1, Art: 550, Baby: 2984, Books: 267, 'Clothing, Shoes & Accessories': 11450,
            'Computers/Tablets & Networking': 58058, 'Health & Beauty': 26395,
            Music: 11233, 'Video Games & Consoles': 1249
        };
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            keyword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.categoryList[0]),
            conditionOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            shipOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            distance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('10'),
            zipOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('curLoc'),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true })
        });
        this.curZip = '';
        this.keywordError = '';
        this.zipInputError = '';
        this.keepOutput = true;
        this.options = [];
        this.nodeUrl = 'http://csci571hw8-236103.appspot.com';
        // nodeUrl = 'http://localhost:8080';
        this.conditionList = [];
        this.shipOptionList = [];
        // process bar
        this.dataIsFetching = false;
        // detail button
        this.noSelectedItemInResults = true;
        this.noSelectedItemInWishList = true;
        // pagination
        this.paginationActiveNum = 1;
        // result tab
        this.resultsJson = '';
        // noProduct = false;
        // wishList tab
        this.totalAmount = 0;
        this.ngZone = ngZone;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (_this.router.url + '' === '/') {
                    _this.isInSearchResult = true;
                    _this.resultsTabIsSelected = true;
                }
                else {
                    _this.dataService.announceClick$.subscribe(function (data) {
                        // alert('I am in receiver');
                        _this.modifyWishList(_this.selectedItem);
                    });
                }
            }
        });
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.goToDetailInfo = function () {
        this.isInSearchResult = false;
    };
    // search form
    FormComponent.prototype.getLoc = function () {
        var _this = this;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', 'http://ip-api.com/json', true); // "asynchronous"
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
                _this.ngZone.run(function () {
                    var jsonObj = JSON.parse(xmlhttp.responseText);
                    _this.curZip = jsonObj.zip;
                });
            }
        };
    };
    FormComponent.prototype.checkForm = function (keyword, zip, search) {
        search.disabled = false;
        if (this.curZip === '' || keyword.value === '') {
            search.disabled = true;
            return;
        }
        if (!zip.disabled && !zip.value.match(/^[0-9]{5}$/)) {
            search.disabled = true;
        }
    };
    FormComponent.prototype.getAutocompleteValue = function (zip) {
        var _this = this;
        this.options = [];
        if (this.zipInputError !== '') {
            return;
        }
        var len = 0;
        var url = this.nodeUrl + '/autocomplete/' + zip.value;
        // alert(url);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', url, true); // "asynchronous"
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
                _this.ngZone.run(function () {
                    var jsonObj = JSON.parse(xmlhttp.responseText);
                    var locArray = jsonObj.postalCodes;
                    for (var i = 0; i < locArray.length; i++) {
                        _this.options[len] = locArray[i].postalCode;
                        len++;
                    }
                });
            }
        };
    };
    FormComponent.prototype.resetKeywordError = function (keyword, zip, search) {
        if (keyword.value === '') {
            this.keywordError = 'Please enter a keyword.';
        }
        else {
            this.keywordError = '';
        }
        this.checkForm(keyword, zip, search);
    };
    FormComponent.prototype.resetZipInputError = function (keyword, zip, search) {
        if (zip.disabled) {
            return;
        }
        if (zip.value === '') {
            this.zipInputError = 'Please enter a zip code.';
        }
        else {
            this.zipInputError = '';
        }
        this.checkForm(keyword, zip, search);
    };
    FormComponent.prototype.onChangeCondition = function (condition, isChecked) {
        if (isChecked) {
            this.conditionList.push(condition);
        }
        else {
            var index = this.conditionList.indexOf(condition);
            this.conditionList.splice(index, 1);
        }
    };
    FormComponent.prototype.onChangeShipOption = function (shipOption, isChecked) {
        if (isChecked) {
            this.shipOptionList.push(shipOption);
        }
        else {
            var index = this.shipOptionList.indexOf(shipOption);
            this.shipOptionList.splice(index, 1);
        }
    };
    FormComponent.prototype.clickCurrentZip = function (keyword, zip, search) {
        zip.disabled = true;
        zip.value = '';
        this.zipInputError = '';
        this.checkForm(keyword, zip, search);
    };
    FormComponent.prototype.clickOtherZip = function (keyword, zip, search) {
        zip.disabled = false;
        this.checkForm(keyword, zip, search);
    };
    FormComponent.prototype.clean = function (keyword, zip, search) {
        this.searchForm.reset();
        this.searchForm.patchValue({
            category: this.categoryList[0],
            distance: '10',
            zipOption: 'curLoc'
        });
        this.keywordError = '';
        this.zipInputError = '';
        zip.disabled = true;
        search.disabled = true;
        this.keepOutput = false;
        this.resultsTabIsSelected = true;
        this.dataList.splice(0, this.dataList.length);
        this.dataIsFetching = false;
    };
    FormComponent.prototype.onSubmit = function (zip) {
        var _this = this;
        this.keepOutput = true;
        this.searchIsClicked = true;
        this.dataIsFetching = true;
        this.resultsTabIsSelected = true;
        var zipUsing = zip.disabled ? this.curZip : zip.value;
        var dealtKeyword = encodeURI(this.searchForm.get('keyword').value);
        var conditions = '';
        for (var i = 0; i < this.conditionList.length; i++) {
            conditions += this.conditionList[i];
            conditions += i + 1 === this.conditionList.length ? '' : ',';
        }
        if (conditions !== '') {
            conditions = '&conditionOptions=' + conditions;
        }
        var shipOptions = '';
        for (var i = 0; i < this.shipOptionList.length; i++) {
            shipOptions += this.shipOptionList[i] + ',';
            conditions += i + 1 === this.shipOptionList.length ? '' : ',';
        }
        if (shipOptions !== '') {
            shipOptions = '&shipOptions=' + shipOptions;
        }
        var url = this.nodeUrl + '/productSearchForm?keywords=' + dealtKeyword + '&category=' +
            this.dict[this.searchForm.get('category').value] + '&postalCode=' + zipUsing + '&distance=' +
            this.searchForm.get('distance').value + shipOptions + conditions;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', url, true); // "asynchronous"
        xmlhttp.setRequestHeader('content-type', 'text/html'); /////////////////////
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
                _this.ngZone.run(function () {
                    var jsonObj = JSON.parse(xmlhttp.responseText);
                    _this.resultsJson = jsonObj;
                    _this.dataList.splice(0, _this.dataList.length);
                    var itemList = null;
                    if (jsonObj.findItemsAdvancedResponse && jsonObj.findItemsAdvancedResponse[0].searchResult
                        && jsonObj.findItemsAdvancedResponse[0].searchResult[0].item) {
                        itemList = jsonObj.findItemsAdvancedResponse[0].searchResult[0].item;
                        for (var i = 0; i < itemList.length; i++) {
                            var newItem = new _Data__WEBPACK_IMPORTED_MODULE_4__["Data"]();
                            newItem.index = i + 1;
                            // add image
                            if (itemList[i].galleryURL === undefined) {
                                newItem.image = 'N/A';
                            }
                            else {
                                newItem.image = itemList[i].galleryURL;
                            }
                            // add title
                            if (itemList[i].title === undefined) {
                                newItem.title = 'N/A';
                            }
                            else {
                                newItem.title = itemList[i].title;
                            }
                            if (newItem.title !== 'N/A') {
                                var title = newItem.title + '';
                                var loc = title.length > 35 ? 35 : title.length;
                                var cutTitle = title.substring(0, loc);
                                var modifiedLoc = cutTitle.lastIndexOf(' ') > 0 ? cutTitle.lastIndexOf(' ') : loc;
                                var modifiedTitle = title.substring(0, modifiedLoc);
                                if (loc < title.length) {
                                    modifiedTitle += '...';
                                }
                                newItem.modifiedTitle = modifiedTitle;
                            }
                            // add price
                            if (itemList[i].sellingStatus === undefined || itemList[i].sellingStatus[0].currentPrice === undefined
                                || itemList[i].sellingStatus[0].currentPrice[0].__value__ === undefined
                                || itemList[i].sellingStatus[0].currentPrice[0]['@currencyId'] === undefined) {
                                newItem.price = 'N/A';
                            }
                            else {
                                newItem.price = '$' + itemList[i].sellingStatus[0].currentPrice[0].__value__;
                            }
                            // add shipping
                            if (itemList[i].shippingInfo === undefined || itemList[i].shippingInfo[0].shippingServiceCost === undefined
                                || itemList[i].shippingInfo[0].shippingServiceCost[0].__value__ === undefined
                                || itemList[i].shippingInfo[0].shippingServiceCost[0]['@currencyId'] === undefined) {
                                newItem.shipping = 'N/A';
                            }
                            else {
                                var shippingCostInfo = itemList[i].shippingInfo[0].shippingServiceCost[0];
                                newItem.shipping = shippingCostInfo.__value__ === '0.0' ? 'Free Shipping' : '$' + shippingCostInfo.__value__;
                            }
                            // add zip
                            if (itemList[i].postalCode === undefined) {
                                newItem.zip = 'N/A';
                            }
                            else {
                                newItem.zip = itemList[i].postalCode;
                            }
                            // add Seller
                            if (itemList[i].sellerInfo === undefined || itemList[i].sellerInfo[0].sellerUserName === undefined) {
                                newItem.seller = 'N/A';
                            }
                            else {
                                newItem.seller = itemList[i].sellerInfo[0].sellerUserName;
                            }
                            // add itemId
                            newItem.itemId = itemList[i].itemId;
                            _this.dataList.push(newItem);
                        }
                    }
                    _this.itemList = itemList;
                    _this.dataIsFetching = false;
                });
            }
        };
    };
    FormComponent.prototype.setResultsState = function () {
        this.resultsTabIsSelected = true;
    };
    // wish list
    FormComponent.prototype.clickWishListButton = function () {
        this.resultsTabIsSelected = false;
        this.wishList.splice(0, this.dataList.length);
        this.totalAmount = 0;
        for (var i = 0; i < localStorage.length; i++) {
            var newItem = new _Data__WEBPACK_IMPORTED_MODULE_4__["Data"]();
            var curItemJsonObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
            newItem.index = curItemJsonObj.index;
            newItem.image = curItemJsonObj.image;
            newItem.title = curItemJsonObj.title;
            newItem.modifiedTitle = curItemJsonObj.modifiedTitle;
            newItem.price = curItemJsonObj.price;
            newItem.shipping = curItemJsonObj.shipping;
            newItem.seller = curItemJsonObj.seller;
            newItem.itemId = curItemJsonObj.itemId;
            this.totalAmount += parseFloat(newItem.price.substring(1));
            this.wishList.push(newItem);
        }
    };
    FormComponent.prototype.isInLocalStorage = function (itemId) {
        return itemId in localStorage;
    };
    FormComponent.prototype.getLocalStorageLength = function () { return localStorage.length; };
    // Results Tab functions:
    FormComponent.prototype.modifyWishList = function (item) {
        if (item.itemId in localStorage) {
            localStorage.removeItem(item.itemId);
            this.totalAmount -= parseFloat(item.price.substring(1));
        }
        else {
            localStorage.setItem(item.itemId, JSON.stringify(item));
            this.totalAmount += parseFloat(item.price.substring(1));
        }
    };
    FormComponent.prototype.showImageInANewTab = function (target) {
        var url = target.src;
        window.open(url, '_blank');
    };
    FormComponent.prototype.getItemIdInResults = function (item, target) {
        this.noSelectedItemInResults = false;
        target.parentNode.parentNode.style.backgroundColor = '#bfbfbf';
        this.selectedItemId = item.itemId;
        this.selectedItem = item;
        this.dataService.getItemObj(this.itemList[item.index - 1]);
    };
    FormComponent.prototype.getItemIdInWishList = function (item, target) {
        this.noSelectedItemInWishList = false;
        target.parentNode.parentNode.style.backgroundColor = '#bfbfbf'; //////////////////////////////
        this.selectedItemId = item.itemId;
        this.selectedItem = item;
        this.dataService.getItemObj(this.itemList[item.index - 1]);
    };
    // pagination
    FormComponent.prototype.clickPaginationTab = function (content) {
        if (content === 'prev') {
            this.paginationActiveNum--;
        }
        else if (content === 'next') {
            this.paginationActiveNum++;
        }
        else {
            this.paginationActiveNum = content;
        }
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            animations: [_animation__WEBPACK_IMPORTED_MODULE_6__["slideOutAnimation"]],
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormComponent);
    return FormComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "../../../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jiayingluo/Documents/cs571/HW8/csci571hw8/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map