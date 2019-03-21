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



var routes = [];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='main-frame'>\n  <div id='main-frame-content'>\n    <div (click)='upload()' id='input-box' class='square on'>\n      <div class='square-box-content'>\n        <img id='default-input-img' src=\"assets/img/default/input.svg\">\n        <img id='input-img'>\n      </div>\n    </div>\n    <div (click)='download()' id='output-box' class='square'>\n      <div class='square-box-content'>\n        <img id='default-output-img' src=\"assets/img/default/output.svg\">\n        <img id='pending-img' src=\"assets/img/default/pending.svg\">\n        <img id='output-img'>\n      </div>\n    </div>\n  </div>\n</div>\n<div id='main-form'>\n  <input id='uploader' type=\"file\" accept=\"image/*\">\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-frame.widescreen {\n  max-width: 1200px;\n  min-width: 300px; }\n  #main-frame.widescreen:before {\n    content: '';\n    padding-top: calc(50% - 16px);\n    display: block; }\n  #main-frame.widescreen #main-frame-content {\n    flex-direction: unset; }\n  #main-frame.widescreen #main-frame-content .square {\n      width: calc(50% - 8px); }\n  #main-frame {\n  position: relative;\n  max-width: 400px;\n  min-width: 150px;\n  width: 100%;\n  margin: 16px; }\n  #main-frame:before {\n    content: '';\n    padding-top: calc(200% + 16px);\n    display: block; }\n  #main-frame #main-frame-content {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n  #main-frame #main-frame-content .square {\n      position: relative;\n      background: gray;\n      width: 100%;\n      border-radius: 4px; }\n  #main-frame #main-frame-content .square:before {\n        content: '';\n        padding-top: 100%;\n        display: block; }\n  #main-frame #main-frame-content .square.on {\n        cursor: pointer;\n        background: white;\n        box-shadow: 4px 4px 8px gray inset, -4px -4px 8px gray inset; }\n  #main-frame #main-frame-content .square .square-box-content {\n        position: absolute;\n        top: 8px;\n        right: 8px;\n        bottom: 8px;\n        left: 8px;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  #main-frame #main-frame-content .square #default-input-img, #main-frame #main-frame-content .square #default-output-img, #main-frame #main-frame-content .square #pending-img {\n        width: 150px;\n        height: 150px; }\n  #main-frame #main-frame-content .square #input-img, #main-frame #main-frame-content .square #output-img {\n        position: absolute;\n        width: 100%;\n        transition: 1s; }\n  #main-frame #main-frame-content .square #pending-img {\n        -webkit-animation-name: rotate;\n                animation-name: rotate;\n        -webkit-animation-duration: 2s;\n                animation-duration: 2s;\n        -webkit-animation-iteration-count: infinite;\n                animation-iteration-count: infinite;\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear; }\n  #main-frame #main-frame-content #output-box:not(.pending) #pending-img,\n    #main-frame #main-frame-content #input-box:not(.on) #default-input-img,\n    #main-frame #main-frame-content #output-box.pending #default-output-img,\n    #main-frame #main-frame-content #output-box.on #default-output-img {\n      display: none; }\n  #main-frame #main-frame-content #output-box:not(.on) #output-img,\n    #main-frame #main-frame-content #input-box.on #input-img {\n      opacity: 0; }\n  #main-form {\n  display: none; }\n  @-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW9oYXNvbmcvU0VPSEFTT05HL2RhdGEvT25seW91L2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1FLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtFQVBsQjtJQUVJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsY0FBYyxFQUFBO0VBSmxCO0lBU0kscUJBQXFCLEVBQUE7RUFUekI7TUFXTSxzQkFBc0IsRUFBQTtFQUs1QjtFQU1FLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFWZDtJQUVJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsY0FBYyxFQUFBO0VBSmxCO0lBWUksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QixFQUFBO0VBbkJsQztNQStCTSxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxrQkFBa0IsRUFBQTtFQWxDeEI7UUFzQlEsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixjQUFjLEVBQUE7RUF4QnRCO1FBMkJRLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsNERBQTRELEVBQUE7RUE3QnBFO1FBb0NRLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsVUFBVTtRQUNWLFdBQVc7UUFDWCxTQUFTO1FBQ1QsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUIsRUFBQTtFQTNDM0I7UUE4Q1EsWUFBWTtRQUNaLGFBQWEsRUFBQTtFQS9DckI7UUFrRFEsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxjQUFjLEVBQUE7RUFwRHRCO1FBdURRLDhCQUFzQjtnQkFBdEIsc0JBQXNCO1FBQ3RCLDhCQUFzQjtnQkFBdEIsc0JBQXNCO1FBQ3RCLDJDQUFtQztnQkFBbkMsbUNBQW1DO1FBQ25DLHlDQUFpQztnQkFBakMsaUNBQWlDLEVBQUE7RUExRHpDOzs7O01BaUVNLGFBQWEsRUFBQTtFQWpFbkI7O01BcUVNLFVBQVUsRUFBQTtFQUtoQjtFQUNFLGFBQWEsRUFBQTtFQUdmO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTtFQUw3QjtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1mcmFtZS53aWRlc2NyZWVuIHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKDUwJSAtIDE2cHgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICAjbWFpbi1mcmFtZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XG4gICAgLnNxdWFyZSB7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSA4cHgpO1xuICAgIH1cbiAgfVxufVxuXG4jbWFpbi1mcmFtZSB7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwYWRkaW5nLXRvcDogY2FsYygyMDAlICsgMTZweCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxNnB4O1xuICAjbWFpbi1mcmFtZS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLnNxdWFyZSB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICAmLm9uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggZ3JheSBpbnNldCwgLTRweCAtNHB4IDhweCBncmF5IGluc2V0O1xuICAgICAgfVxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgLnNxdWFyZS1ib3gtY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIGJvdHRvbTogOHB4O1xuICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgI2RlZmF1bHQtaW5wdXQtaW1nLCAjZGVmYXVsdC1vdXRwdXQtaW1nLCAjcGVuZGluZy1pbWcge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICB9XG4gICAgICAjaW5wdXQtaW1nLCAjb3V0cHV0LWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgfVxuICAgICAgI3BlbmRpbmctaW1nIHtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgIH1cbiAgICB9XG4gICAgI291dHB1dC1ib3g6bm90KC5wZW5kaW5nKSAjcGVuZGluZy1pbWcsXG4gICAgI2lucHV0LWJveDpub3QoLm9uKSAjZGVmYXVsdC1pbnB1dC1pbWcsXG4gICAgI291dHB1dC1ib3gucGVuZGluZyAjZGVmYXVsdC1vdXRwdXQtaW1nLFxuICAgICNvdXRwdXQtYm94Lm9uICNkZWZhdWx0LW91dHB1dC1pbWcge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI291dHB1dC1ib3g6bm90KC5vbikgI291dHB1dC1pbWcsXG4gICAgI2lucHV0LWJveC5vbiAjaW5wdXQtaW1nIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG59XG5cbiNtYWluLWZvcm0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */"

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
        this.status = 'input';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('load', function () {
            _this.controllDisplay();
            _this.input_img = document.getElementById('input-img');
            _this.output_img = document.getElementById('output-img');
            _this.input_box = document.getElementById('input-box');
            _this.output_box = document.getElementById('output-box');
        });
        window.onresize = this.controllDisplay;
    };
    AppComponent.prototype.controllDisplay = function () {
        var box = document.getElementById('main-frame');
        if (window.innerHeight < window.innerWidth)
            box.classList.add('widescreen');
        else
            box.classList.remove('widescreen');
        var loop_id = setInterval(function () {
            if (window.innerHeight < box.clientHeight + 128) {
                if (box.classList.contains('widescreen')) {
                    box.style.width = (window.innerHeight - 32) * 2 + 'px';
                }
                else {
                    box.style.width = (window.innerHeight - 64) / 2 + 'px';
                }
            }
            else
                box.style.width = '100%';
        }, 100);
        setTimeout(function () { return clearInterval(loop_id); }, 1000);
    };
    AppComponent.prototype.upload = function () {
        var _this = this;
        var uploader = document.getElementById('uploader');
        if (this.status == 'input') {
            uploader.onchange = function () { return _this.startProcess(uploader); };
            uploader.click();
        }
        else if (this.status == 'output') {
            document.getElementById('input-box').classList.add('on');
            document.getElementById('output-box').classList.remove('on');
            document.getElementById('input-img').setAttribute('src', '');
            document.getElementById('output-img').setAttribute('src', '');
            uploader.value = '';
            this.status = 'input';
        }
    };
    AppComponent.prototype.download = function () {
        if (this.status == 'output') {
            var link = document.createElement("a");
            link.download = 'output';
            link.href = this.output_url;
            link.click();
        }
    };
    AppComponent.prototype.beautifyImage = function (img) {
        if (img.clientHeight > img.clientWidth) {
            img.style.width = 'auto';
            img.style.height = '100%';
        }
        else {
            img.style.width = '100%';
            img.style.height = 'auto';
        }
    };
    AppComponent.prototype.startProcess = function (uploader) {
        var _this = this;
        this.status = 'pending';
        var reader = new FileReader();
        reader.readAsDataURL(uploader.files[0]);
        reader.onload = function () {
            _this.input_img.setAttribute('src', reader.result + '');
            var loop_id = setInterval(function () {
                if (_this.input_img.clientHeight > 0) {
                    clearInterval(loop_id);
                    _this.beautifyImage(_this.input_img);
                    _this.input_box.classList.remove('on');
                    _this.input_box.classList.add('pending');
                    _this.output_box.classList.add('pending');
                    setTimeout(function () {
                        _this.output_url = 'assets/img/test/output.png';
                        _this.output_img.setAttribute('src', _this.output_url);
                        var loop_id = setInterval(function () {
                            if (_this.output_img.clientHeight > 0) {
                                clearInterval(loop_id);
                                _this.beautifyImage(_this.output_img);
                                _this.output_box.classList.add('on');
                                _this.input_box.classList.remove('pending');
                                _this.output_box.classList.remove('pending');
                                _this.status = 'output';
                            }
                        }, 100);
                    }, 2000);
                }
            }, 100);
        };
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /Users/seohasong/SEOHASONG/data/Onlyou/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map