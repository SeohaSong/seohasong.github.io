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

module.exports = "<div id='main-frame' class='loading'>\n  <div id='main-frame-content'>\n    <div (click)='upload()' id='input-box' class='square on'>\n      <div class='square-box-content'>\n        <img id='default-input-img' src=\"assets/img/default/input.svg\">\n        <img id='input-img'>\n      </div>\n    </div>\n    <div (click)='download()' id='output-box' class='square'>\n      <div class='square-box-content'>\n        <img id='default-output-img' src=\"assets/img/default/output.svg\">\n        <img id='pending-img' src=\"assets/img/default/pending.svg\">\n        <img id='output-img'>\n      </div>\n    </div>\n  </div>\n</div>\n<div id='main-form'>\n  <input id='uploader' type=\"file\" accept=\"image/*\">\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-frame {\n  transition: 1s;\n  position: relative;\n  max-width: 400px;\n  min-width: 150px;\n  width: 100%;\n  margin: 16px; }\n  #main-frame:before {\n    content: '';\n    padding-top: calc(200% + 16px);\n    display: block; }\n  #main-frame #main-frame-content {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n  #main-frame #main-frame-content .square {\n      position: relative;\n      background: gray;\n      width: 100%;\n      border-radius: 4px; }\n  #main-frame #main-frame-content .square:before {\n        content: '';\n        padding-top: 100%;\n        display: block; }\n  #main-frame #main-frame-content .square.on {\n        cursor: pointer;\n        background: white;\n        box-shadow: 4px 4px 8px gray inset, -4px -4px 8px gray inset; }\n  #main-frame #main-frame-content .square .square-box-content {\n        position: absolute;\n        top: 8px;\n        right: 8px;\n        bottom: 8px;\n        left: 8px;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  #main-frame #main-frame-content .square #default-input-img, #main-frame #main-frame-content .square #default-output-img, #main-frame #main-frame-content .square #pending-img {\n        width: 150px;\n        height: 150px; }\n  #main-frame #main-frame-content .square #input-img, #main-frame #main-frame-content .square #output-img {\n        position: absolute;\n        width: 100%;\n        transition: 1s; }\n  #main-frame #main-frame-content .square #pending-img {\n        -webkit-animation-name: rotate;\n                animation-name: rotate;\n        -webkit-animation-duration: 2s;\n                animation-duration: 2s;\n        -webkit-animation-iteration-count: infinite;\n                animation-iteration-count: infinite;\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear; }\n  #main-frame #main-frame-content #output-box:not(.pending) #pending-img,\n    #main-frame #main-frame-content #input-box:not(.on) #default-input-img,\n    #main-frame #main-frame-content #output-box.pending #default-output-img,\n    #main-frame #main-frame-content #output-box.on #default-output-img {\n      display: none; }\n  #main-frame #main-frame-content #output-box:not(.on) #output-img,\n    #main-frame #main-frame-content #input-box.on #input-img {\n      opacity: 0; }\n  #main-frame.loading {\n  opacity: 0; }\n  #main-frame.widescreen {\n  max-width: 1200px;\n  min-width: 300px; }\n  #main-frame.widescreen:before {\n    content: '';\n    padding-top: calc(50% - 16px);\n    display: block; }\n  #main-frame.widescreen #main-frame-content {\n    flex-direction: unset; }\n  #main-frame.widescreen #main-frame-content .square {\n      width: calc(50% - 8px); }\n  #main-form {\n  display: none; }\n  @-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW9oYXNvbmcvU0VPSEFTT05HL2RhdGEvT25seW91L2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1FLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBWGQ7SUFFSSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGNBQWMsRUFBQTtFQUpsQjtJQWFJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEIsRUFBQTtFQXBCbEM7TUFnQ00sa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsa0JBQWtCLEVBQUE7RUFuQ3hCO1FBdUJRLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsY0FBYyxFQUFBO0VBekJ0QjtRQTRCUSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLDREQUE0RCxFQUFBO0VBOUJwRTtRQXFDUSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFVBQVU7UUFDVixXQUFXO1FBQ1gsU0FBUztRQUNULGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CLEVBQUE7RUE1QzNCO1FBK0NRLFlBQVk7UUFDWixhQUFhLEVBQUE7RUFoRHJCO1FBbURRLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsY0FBYyxFQUFBO0VBckR0QjtRQXdEUSw4QkFBc0I7Z0JBQXRCLHNCQUFzQjtRQUN0Qiw4QkFBc0I7Z0JBQXRCLHNCQUFzQjtRQUN0QiwyQ0FBbUM7Z0JBQW5DLG1DQUFtQztRQUNuQyx5Q0FBaUM7Z0JBQWpDLGlDQUFpQyxFQUFBO0VBM0R6Qzs7OztNQWtFTSxhQUFhLEVBQUE7RUFsRW5COztNQXNFTSxVQUFVLEVBQUE7RUFJaEI7RUFDRSxVQUFVLEVBQUE7RUFFWjtFQU1FLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtFQVBsQjtJQUVJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsY0FBYyxFQUFBO0VBSmxCO0lBU0kscUJBQXFCLEVBQUE7RUFUekI7TUFXTSxzQkFBc0IsRUFBQTtFQUs1QjtFQUNFLGFBQWEsRUFBQTtFQUdmO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTtFQUw3QjtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1mcmFtZSB7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwYWRkaW5nLXRvcDogY2FsYygyMDAlICsgMTZweCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgdHJhbnNpdGlvbjogMXM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTZweDtcbiAgI21haW4tZnJhbWUtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5zcXVhcmUge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgJi5vbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IGdyYXkgaW5zZXQsIC00cHggLTRweCA4cHggZ3JheSBpbnNldDtcbiAgICAgIH1cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIC5zcXVhcmUtYm94LWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOHB4O1xuICAgICAgICByaWdodDogOHB4O1xuICAgICAgICBib3R0b206IDhweDtcbiAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgICNkZWZhdWx0LWlucHV0LWltZywgI2RlZmF1bHQtb3V0cHV0LWltZywgI3BlbmRpbmctaW1nIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuICAgICAgI2lucHV0LWltZywgI291dHB1dC1pbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAgIH1cbiAgICAgICNwZW5kaW5nLWltZyB7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGU7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICB9XG4gICAgfVxuICAgICNvdXRwdXQtYm94Om5vdCgucGVuZGluZykgI3BlbmRpbmctaW1nLFxuICAgICNpbnB1dC1ib3g6bm90KC5vbikgI2RlZmF1bHQtaW5wdXQtaW1nLFxuICAgICNvdXRwdXQtYm94LnBlbmRpbmcgI2RlZmF1bHQtb3V0cHV0LWltZyxcbiAgICAjb3V0cHV0LWJveC5vbiAjZGVmYXVsdC1vdXRwdXQtaW1nIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNvdXRwdXQtYm94Om5vdCgub24pICNvdXRwdXQtaW1nLFxuICAgICNpbnB1dC1ib3gub24gI2lucHV0LWltZyB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxufVxuI21haW4tZnJhbWUubG9hZGluZyB7XG4gIG9wYWNpdHk6IDA7XG59XG4jbWFpbi1mcmFtZS53aWRlc2NyZWVuIHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKDUwJSAtIDE2cHgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICAjbWFpbi1mcmFtZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XG4gICAgLnNxdWFyZSB7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSA4cHgpO1xuICAgIH1cbiAgfVxufVxuXG4jbWFpbi1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */"

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
        setTimeout(function () {
            clearInterval(loop_id);
            box.classList.remove('loading');
        }, 1000);
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