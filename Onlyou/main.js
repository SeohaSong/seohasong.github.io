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

module.exports = "#main-frame {\n  position: relative;\n  max-width: 400px;\n  min-width: 150px;\n  width: 100%;\n  margin: 16px; }\n  #main-frame:before {\n    content: '';\n    padding-top: calc(200% + 16px);\n    display: block; }\n  #main-frame #main-frame-content {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n  #main-frame #main-frame-content .square {\n      position: relative;\n      background: gray;\n      width: 100%;\n      border-radius: 4px; }\n  #main-frame #main-frame-content .square:before {\n        content: '';\n        padding-top: 100%;\n        display: block; }\n  #main-frame #main-frame-content .square.on {\n        cursor: pointer;\n        background: white;\n        box-shadow: 4px 4px 8px gray inset, -4px -4px 8px gray inset; }\n  #main-frame #main-frame-content .square .square-box-content {\n        position: absolute;\n        top: 8px;\n        right: 8px;\n        bottom: 8px;\n        left: 8px;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  #main-frame #main-frame-content .square #default-input-img, #main-frame #main-frame-content .square #default-output-img, #main-frame #main-frame-content .square #pending-img {\n        width: 150px;\n        height: 150px; }\n  #main-frame #main-frame-content .square #input-img, #main-frame #main-frame-content .square #output-img {\n        position: absolute;\n        width: 100%;\n        transition: 1s; }\n  #main-frame #main-frame-content .square #pending-img {\n        -webkit-animation-name: rotate;\n                animation-name: rotate;\n        -webkit-animation-duration: 2s;\n                animation-duration: 2s;\n        -webkit-animation-iteration-count: infinite;\n                animation-iteration-count: infinite;\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear; }\n  #main-frame #main-frame-content #output-box:not(.pending) #pending-img,\n    #main-frame #main-frame-content #input-box:not(.on) #default-input-img,\n    #main-frame #main-frame-content #output-box.pending #default-output-img,\n    #main-frame #main-frame-content #output-box.on #default-output-img {\n      display: none; }\n  #main-frame #main-frame-content #output-box:not(.on) #output-img,\n    #main-frame #main-frame-content #input-box.on #input-img {\n      opacity: 0; }\n  #main-frame.loading:after {\n  content: 'Loading ...';\n  color: white;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  font-size: 32px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n  #main-frame.loading #main-frame-content {\n  opacity: 0; }\n  #main-frame.widescreen {\n  max-width: 1200px;\n  min-width: 300px; }\n  #main-frame.widescreen:before {\n    content: '';\n    padding-top: calc(50% - 16px);\n    display: block; }\n  #main-frame.widescreen #main-frame-content {\n    flex-direction: unset; }\n  #main-frame.widescreen #main-frame-content .square {\n      width: calc(50% - 8px); }\n  #main-form {\n  display: none; }\n  @-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zZW9oYXNvbmcvU0VPSEFTT05HL2RhdGEvT25seW91L2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1FLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFWZDtJQUVJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsY0FBYyxFQUFBO0VBSmxCO0lBWUksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QixFQUFBO0VBbkJsQztNQStCTSxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxrQkFBa0IsRUFBQTtFQWxDeEI7UUFzQlEsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixjQUFjLEVBQUE7RUF4QnRCO1FBMkJRLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsNERBQTRELEVBQUE7RUE3QnBFO1FBb0NRLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsVUFBVTtRQUNWLFdBQVc7UUFDWCxTQUFTO1FBQ1QsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUIsRUFBQTtFQTNDM0I7UUE4Q1EsWUFBWTtRQUNaLGFBQWEsRUFBQTtFQS9DckI7UUFrRFEsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxjQUFjLEVBQUE7RUFwRHRCO1FBdURRLDhCQUFzQjtnQkFBdEIsc0JBQXNCO1FBQ3RCLDhCQUFzQjtnQkFBdEIsc0JBQXNCO1FBQ3RCLDJDQUFtQztnQkFBbkMsbUNBQW1DO1FBQ25DLHlDQUFpQztnQkFBakMsaUNBQWlDLEVBQUE7RUExRHpDOzs7O01BaUVNLGFBQWEsRUFBQTtFQWpFbkI7O01BcUVNLFVBQVUsRUFBQTtFQUloQjtFQUVJLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTtFQVJwQztFQVdJLFVBQVUsRUFBQTtFQUdkO0VBTUUsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0VBUGxCO0lBRUksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixjQUFjLEVBQUE7RUFKbEI7SUFTSSxxQkFBcUIsRUFBQTtFQVR6QjtNQVdNLHNCQUFzQixFQUFBO0VBSzVCO0VBQ0UsYUFBYSxFQUFBO0VBR2Y7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBO0VBTDdCO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWZyYW1lIHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKDIwMCUgKyAxNnB4KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE2cHg7XG4gICNtYWluLWZyYW1lLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAuc3F1YXJlIHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgICYub24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCBncmF5IGluc2V0LCAtNHB4IC00cHggOHB4IGdyYXkgaW5zZXQ7XG4gICAgICB9XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAuc3F1YXJlLWJveC1jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAjZGVmYXVsdC1pbnB1dC1pbWcsICNkZWZhdWx0LW91dHB1dC1pbWcsICNwZW5kaW5nLWltZyB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cbiAgICAgICNpbnB1dC1pbWcsICNvdXRwdXQtaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogMXM7XG4gICAgICB9XG4gICAgICAjcGVuZGluZy1pbWcge1xuICAgICAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgfVxuICAgIH1cbiAgICAjb3V0cHV0LWJveDpub3QoLnBlbmRpbmcpICNwZW5kaW5nLWltZyxcbiAgICAjaW5wdXQtYm94Om5vdCgub24pICNkZWZhdWx0LWlucHV0LWltZyxcbiAgICAjb3V0cHV0LWJveC5wZW5kaW5nICNkZWZhdWx0LW91dHB1dC1pbWcsXG4gICAgI291dHB1dC1ib3gub24gI2RlZmF1bHQtb3V0cHV0LWltZyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjb3V0cHV0LWJveDpub3QoLm9uKSAjb3V0cHV0LWltZyxcbiAgICAjaW5wdXQtYm94Lm9uICNpbnB1dC1pbWcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbn1cbiNtYWluLWZyYW1lLmxvYWRpbmcge1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnTG9hZGluZyAuLi4nO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICAjbWFpbi1mcmFtZS1jb250ZW50IHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4jbWFpbi1mcmFtZS53aWRlc2NyZWVuIHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKDUwJSAtIDE2cHgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICAjbWFpbi1mcmFtZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XG4gICAgLnNxdWFyZSB7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSA4cHgpO1xuICAgIH1cbiAgfVxufVxuXG4jbWFpbi1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */"

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
        box.classList.add('loading');
        if (window.innerHeight < window.innerWidth)
            box.classList.add('widescreen');
        else
            box.classList.remove('widescreen');
        setTimeout(function () {
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
            box.classList.remove('loading');
        }, 500);
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

module.exports = __webpack_require__(/*! /mnt/c/Users/seohasong/SEOHASONG/data/Onlyou/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map