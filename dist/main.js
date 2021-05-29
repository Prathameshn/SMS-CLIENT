(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+SoS":
/*!************************************************************!*\
  !*** ./src/app/views/catalogue/users/users.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".attibute_main {\n  background-color: #fff;\n}\n\n.table td {\n  padding: 5px 6px !important;\n  vertical-align: middle !important;\n}\n\n.example-form-field {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3VzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsaUNBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7QUFHRiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdHRpYnV0ZV9tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDVweCA2cHggIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuLmV4YW1wbGUtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/prathmesh/SMS-CLIENT/src/main.ts */"zUnb");


/***/ }),

/***/ "4XPS":
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "bVw4");
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.scss */ "ag3Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/account/account.service */ "IRyT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");







let RegisterComponent = class RegisterComponent {
    constructor(router, formBuilder, account) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.account = account;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            // lastName: ["", Validators.required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            // mobile: ["", Validators.required],
            role: ["USER", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
        });
    }
    get f() {
        return this.form.controls;
    }
    onSubmit() {
        console.log("enter", this.form);
        this.submitted = true;
        // reset alerts on submit
        // this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        console.log("this", this.form);
        this.loading = true;
        this.account.register(this.form.value).subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                this.router.navigate(["/login"]);
                console.log("user logged in");
            },
            error: (error) => {
                console.log("error", error);
                // this.alertService.error(error);
                // this.loading = false;
            },
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
], RegisterComponent);



/***/ }),

/***/ "55cD":
/*!**************************************************************************!*\
  !*** ./src/app/views/catalogue/store/add-store/add-store.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-list {\n  width: 500px;\n  max-width: 100%;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.text_name {\n  font-size: 16px;\n}\n\n.example-box {\n  padding: 8px 20px;\n  color: rgba(0, 0, 0, 0.87);\n  border: 1px solid #73818f;\n  box-sizing: border-box;\n  border-radius: 33px;\n  margin: 10px 0px;\n  /* border-radius: 2%; */\n  box-shadow: 1px 2px 9px -2px #eae3e3;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FkZC1zdG9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUFGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0Usc0RBQUE7QUFERjs7QUFRQTtFQUNFLHNEQUFBO0FBTEYiLCJmaWxlIjoiYWRkLXN0b3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWxpc3Qge1xuICB3aWR0aDogNTAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLy8gYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZXh0X25hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzczODE4ZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgLyogYm9yZGVyLXJhZGl1czogMiU7ICovXG4gIGJveC1zaGFkb3c6IDFweCAycHggOXB4IC0ycHggI2VhZTNlMztcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi8vIC5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gfVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuIl19 */");

/***/ }),

/***/ "8B9U":
/*!************************************************************************!*\
  !*** ./src/app/views/catalogue/store/add-store/add-store.component.ts ***!
  \************************************************************************/
/*! exports provided: AddStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStoreComponent", function() { return AddStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_store_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-store.component.html */ "TlYG");
/* harmony import */ var _add_store_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-store.component.scss */ "55cD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/store/store.service */ "ooDN");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");









let AddStoreComponent = class AddStoreComponent {
    constructor(router, formBuilder, subCategory, _snackBar) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.subCategory = subCategory;
        this._snackBar = _snackBar;
        this.horizontalPosition = "right";
        this.verticalPosition = "top";
        this.loading = false;
        this.submitted = false;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.attributesList = [];
        this.selectedAttributes = [];
    }
    ngOnInit() {
        this.subCategoryForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            location: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            attributes: [[""]],
        });
    }
    onKeyUpEvent(event) {
        // console.log(event.target.value);
        this.subCategory.getAttributesList(event.target.value).subscribe((res) => {
            console.log("data", res);
            this.attributesList = res.users;
        }, (error) => {
            console.log("error", error);
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(this.selectedAttributes, event.previousIndex, event.currentIndex);
    }
    deleteAttribute(event) {
        this.selectedAttributes = this.selectedAttributes.filter((x) => x.id !== event.id);
    }
    attributeSelect(event) {
        this.selectedAttributes = [];
        this.selectedAttributes.push(event);
        this.myControl.reset("");
        // let duplicateValue = this.selectedAttributes.find((x) => x.id === event.id);
        // // console.log("_duplicate", duplicateValue);
        // if (duplicateValue == undefined) {
        //   this.selectedAttributes.push(event);
        //   this.myControl.reset("");
        // } else {
        //   this._snackBar.open(`${event.name} is already Selected.`, "End now", {
        //     duration: 1000,
        //     horizontalPosition: this.horizontalPosition,
        //     verticalPosition: this.verticalPosition,
        //   });
        // }
        // console.log("_duplicate", this.selectedAttributes);
    }
    get f() {
        return this.subCategoryForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.subCategoryForm.invalid) {
            return;
        }
        let obj = Object.assign(Object.assign({}, this.subCategoryForm.value), { storeKeeper: this.selectedAttributes[0].id });
        this.loading = true;
        this.subCategory.addSubCategory(obj).subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                this.router.navigate(["/stores"]);
            },
            error: (error) => {
                console.log("error", error);
                // this.alertService.error(error);
                // this.loading = false;
            },
        });
    }
};
AddStoreComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_store_store_service__WEBPACK_IMPORTED_MODULE_6__["SubCategoryService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
AddStoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-add-store",
        template: _raw_loader_add_store_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_store_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_store_store_service__WEBPACK_IMPORTED_MODULE_6__["SubCategoryService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], AddStoreComponent);



/***/ }),

/***/ "8gg5":
/*!**********************************************!*\
  !*** ./src/app/views/error/404.component.ts ***!
  \**********************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./404.component.html */ "nAJl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let P404Component = class P404Component {
    constructor() { }
};
P404Component.ctorParameters = () => [];
P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], P404Component);



/***/ }),

/***/ "AAxh":
/*!************************************************************************!*\
  !*** ./src/app/views/catalogue/add-product/add-product.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-list {\n  width: 500px;\n  max-width: 100%;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.text_name {\n  font-size: 16px;\n}\n\n.example-box {\n  padding: 8px 20px;\n  color: rgba(0, 0, 0, 0.87);\n  border: 1px solid #73818f;\n  box-sizing: border-box;\n  border-radius: 33px;\n  margin: 10px 0px;\n  /* border-radius: 2%; */\n  box-shadow: 1px 2px 9px -2px #eae3e3;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBQUY7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxzREFBQTtBQURGOztBQVFBO0VBQ0Usc0RBQUE7QUFMRiIsImZpbGUiOiJhZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8vIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGV4dF9uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZXhhbXBsZS1ib3gge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MzgxOGY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDMzcHg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDIlOyAqL1xuICBib3gtc2hhZG93OiAxcHggMnB4IDlweCAtMnB4ICNlYWUzZTM7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4vLyAuZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4vLyAgIGJvcmRlcjogbm9uZTtcbi8vIH1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "AoxL":
/*!****************************************************************************!*\
  !*** ./src/app/views/catalogue/store/edit-store/edit-store.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-list {\n  width: 500px;\n  max-width: 100%;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.text_name {\n  font-size: 16px;\n}\n\n.example-box {\n  padding: 8px 20px;\n  color: rgba(0, 0, 0, 0.87);\n  border: 1px solid #73818f;\n  box-sizing: border-box;\n  border-radius: 33px;\n  margin: 10px 0px;\n  /* border-radius: 2%; */\n  box-shadow: 1px 2px 9px -2px #eae3e3;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VkaXQtc3RvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFBRjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFJQTtFQUNFLHNEQUFBO0FBREY7O0FBUUE7RUFDRSxzREFBQTtBQUxGIiwiZmlsZSI6ImVkaXQtc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtbGlzdCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAvLyBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRleHRfbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmV4YW1wbGUtYm94IHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzM4MThmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAzM3B4O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICAvKiBib3JkZXItcmFkaXVzOiAyJTsgKi9cbiAgYm94LXNoYWRvdzogMXB4IDJweCA5cHggLTJweCAjZWFlM2UzO1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLy8gLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuLy8gICBib3JkZXI6IG5vbmU7XG4vLyB9XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4iXX0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    // base_url: "https://api.cosmonest.com/v1/",
    base_url: "http://localhost:3000/v1/",
};


/***/ }),

/***/ "CFL1":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: AttributeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeService", function() { return AttributeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let AttributeService = class AttributeService {
    constructor(http) {
        this.http = http;
    }
    addAttribute(attrObj) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}users`, attrObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // console.log("attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAttributesList(page, perPage) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}users?page=${page}&perPage=${perPage}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // console.log("get attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAttributesBySearch(page, perPage, query, role, isEnabled) {
        let url;
        if (isEnabled !== undefined) {
            url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}users?page=${page}&perPage=${perPage}&search=${query}&isEnabled=${isEnabled}`;
        }
        else if (role !== undefined) {
            url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}users?page=${page}&perPage=${perPage}&search=${query}&role=${role}`;
        }
        else {
            url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}users?page=${page}&perPage=${perPage}&search=${query}`;
        }
        return this.http.get(`${url}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // console.log("get attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    changePage(page, perPage) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}users?page=${page}&perPage=${perPage}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // console.log("get attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAttributeById(id) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}users/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateAttribute(id, attribute) {
        return this.http
            .patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}users/${id}`, attribute)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteAttribute(id) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}users/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
};
AttributeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AttributeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AttributeService);



/***/ }),

/***/ "DodC":
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component */ "JPqG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "ElRR":
/*!********************************************************************!*\
  !*** ./src/app/views/catalogue/edit-user/edit-user.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "G/4p":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ "DodC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "G24w":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/catalogue/store/sub-store/sub-store-list.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"d-flex justify-content-end align-items-baseline pb-3\">\n        <div class=\"form-group pr-2\">\n          <!-- <label for=\"sel1\">Select:</label> -->\n          <select\n            class=\"form-control\"\n            (change)=\"onChangeCategoryType($event.target.value)\"\n            id=\"sel1\"\n          >\n            <option value=\"All\">All</option>\n            <option value=\"MY\">MY</option>\n          </select>\n        </div>\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary\"\n          (click)=\"navigateToAddSubCategory()\"\n        >\n          Add Store\n        </button>\n        <!-- <div class=\"pl-2\">\n          <mat-form-field class=\"example-form-field\">\n            <mat-label>Search</mat-label>\n            <input matInput type=\"text\" [(ngModel)]=\"searchValue\" />\n            <button\n              mat-button\n              *ngIf=\"searchValue\"\n              matSuffix\n              mat-icon-button\n              aria-label=\"Clear\"\n              (click)=\"clearSearch()\"\n            >\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n          <button\n            mat-mini-fab\n            type=\"button\"\n            [disabled]=\"searchValue === ''\"\n            color=\"primary\"\n            (click)=\"categorySearch()\"\n          >\n            <mat-icon>search</mat-icon>\n          </button>\n        </div> -->\n      </div>\n      <table class=\"table table-hover table-bordered\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th>Name</th>\n            <th>Location</th>\n            <th>Phone</th>\n            <th>Store Keeper</th>\n            <th>Operations</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of subCategoryList; let i = index\">\n            <td>{{ item.name }}</td>\n            <td>{{ item.location }}</td>\n            <td>{{ item.phone }}</td>\n            <td>{{ item.storeKeeper.name }}</td>\n            <td>\n              <div class=\"d-flex align-items-center justify-content-around\">\n                <button mat-mini-fab color=\"primary\">\n                  <a\n                    [routerLink]=\"['/edit-stores/', item.id]\"\n                    class=\"text-white\"\n                  >\n                    <mat-icon>mode_edit</mat-icon>\n                  </a>\n                </button>\n                <button\n                  mat-mini-fab\n                  color=\"warn\"\n                  (click)=\"openDialogForSubCategories(item.id, item.name)\"\n                >\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </div>\n              <!-- <a [routerLink]=\"['/catalogue/edit-sub-category/', item.id]\">\n                <i class=\"fa fa-edit\"></i>\n              </a>\n              <a (click)=\"deleteSubCategory(item.id)\">\n                <i class=\"fa fa-trash\"></i>\n              </a> -->\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"d-flex justify-content-end\">\n        <mat-paginator\n          #paginator\n          [pageSize]=\"pageSize\"\n          [pageSizeOptions]=\"[5, 8, 10, 20, 25, 50, 100]\"\n          [showFirstLastButtons]=\"false\"\n          [length]=\"count\"\n          (page)=\"handlePage($event)\"\n        >\n        </mat-paginator>\n        <!-- [pageIndex]=\"currentPage\" -->\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "HwrK":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/confirmation-dialog/confirmation-dialog.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "IL2G":
/*!*****************************************************!*\
  !*** ./src/app/services/product/product.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
    }
    addCategory(attrObj) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}product`, attrObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            //   console.log("attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCategoryList(page, perPage) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}product?page=${page}&perPage=${perPage}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // console.log("get attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    changePage(page, perPage) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}product?page=${page}&perPage=${perPage}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // console.log("get attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getSubcategoryListByQuery(query) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}store?name=${query}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // console.log("get attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCategoriesBySearch(page, perPage, query, store) {
        let url;
        if (store !== undefined) {
            url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}product?page=${page}&perPage=${perPage}&search=${query}&store=${store}`;
        }
        else {
            url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}product?page=${page}&perPage=${perPage}&search=${query}`;
        }
        return this.http.get(`${url}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // console.log("get attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCategoryById(id) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}product/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateCategory(id, attribute) {
        return this.http
            .patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}product/${id}`, attribute)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteCategory(id) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}product/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CategoryService);



/***/ }),

/***/ "IRyT":
/*!*****************************************************!*\
  !*** ./src/app/services/account/account.service.ts ***!
  \*****************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
    }
    login(email, password) {
        console.log("email", email, password);
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}auth/login`, {
            email,
            password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((loginResponse) => {
            console.log("login", loginResponse);
            if (loginResponse.accessToken) {
                localStorage.setItem("accessToken", loginResponse.accessToken);
            }
            if (loginResponse.user) {
                localStorage.setItem("user", JSON.stringify(loginResponse.user));
                localStorage.setItem("role", loginResponse.user.role);
            }
            return loginResponse;
        }));
    }
    subUserLogin(email, password) {
        console.log("email", email, password);
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}auth/subUserlogin`, {
            email,
            password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((loginResponse) => {
            console.log("subUserlogin", loginResponse);
            if (loginResponse.accessToken) {
                localStorage.setItem("accessToken", loginResponse.accessToken);
            }
            if (loginResponse.user) {
                localStorage.setItem("user", JSON.stringify(loginResponse.user));
                localStorage.setItem("role", loginResponse.user.role);
            }
            return loginResponse;
        }));
    }
    getToken() {
        let accessToken = localStorage.getItem("accessToken");
        if (accessToken !== undefined && accessToken !== null) {
            return accessToken;
        }
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem("user");
        // this.userSubject.next(null);
        // this.router.navigate(["/account/login"]);
    }
    register(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}users`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((userResponse) => {
            if (userResponse.token && userResponse.accessToken) {
                localStorage.setItem("accessToken", userResponse.accessToken);
            }
            if (userResponse.user) {
                localStorage.setItem("user", JSON.stringify(userResponse.user));
            }
            // console.log("register", user);
        }));
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AccountService);



/***/ }),

/***/ "JPqG":
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./default-layout.component.html */ "lm8q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_nav */ "c2Qq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");





let DefaultLayoutComponent = class DefaultLayoutComponent {
    constructor(router) {
        this.router = router;
        this.sidebarMinimized = false;
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"];
    }
    toggleMinimize(e) {
        this.sidebarMinimized = e;
    }
    logout() {
        localStorage.clear();
        this.router.navigate(["/login"]);
    }
};
DefaultLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], DefaultLayoutComponent);



/***/ }),

/***/ "Lrxh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "M9KC":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/catalogue/edit-product/edit-product.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\">\n  <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name :</label>\n          <input\n            type=\"text\"\n            formControlName=\"name\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.name.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Name\"\n            id=\"name\"\n          />\n          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"label\">Description :</label>\n          <input\n            type=\"text\"\n            formControlName=\"description\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.description.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Description\"\n            id=\"label\"\n          />\n          <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.description.errors.required\">Description is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"label\">Available Quentity :</label>\n          <input\n            type=\"number\"\n            formControlName=\"availableQuantity\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.availableQuantity.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Available Quentity\"\n            id=\"label\"\n          />\n          <div *ngIf=\"submitted && f.availableQuantity.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.availableQuantity.errors.required\">Available Quentity is required</div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"col-md-4\">\n        <div class=\"form-group form-check\">\n          <label class=\"form-check-label\">\n            <input\n              class=\"form-check-input\"\n              formControlName=\"isEnabled\"\n              [ngClass]=\"{\n                'is-invalid': submitted && f.isEnabled.errors\n              }\"\n              type=\"checkbox\"\n            />\n            Is Enabled\n          </label>\n          <div *ngIf=\"submitted && f.isEnabled.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.isEnabled.errors.required\">Field is required</div>\n          </div>\n        </div>\n      </div> -->\n     <div class=\"col-md-8\">\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Store</mat-label>\n          <input\n            type=\"text\"\n            placeholder=\"Pick one\"\n            aria-label=\"Sub Categories\"\n            matInput\n            (keyup)=\"onKeyUpEvent($event)\"\n            [formControl]=\"myControl\"\n            [matAutocomplete]=\"auto\"\n          />\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n            <mat-option\n              *ngFor=\"let option of subcategoriesList\"\n              [value]=\"option.name\"\n              (onSelectionChange)=\"attributeSelect(option)\"\n            >\n              {{ option.name }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <!-- <div class=\"col-md-6\" *ngIf=\"selectedSubcategories.length > 0\">\n        <div\n          cdkDropList\n          class=\"example-list\"\n          (cdkDropListDropped)=\"drop($event)\"\n        >\n          <div\n            class=\"example-box\"\n            *ngFor=\"let attribute of selectedSubcategories\"\n            cdkDrag\n          >\n            {{ attribute.name }}\n            <span>\n              <button\n                mat-mini-fab\n                color=\"warn\"\n                (click)=\"deleteAttribute(attribute)\"\n              >\n                <mat-icon>delete</mat-icon>\n              </button>\n            </span>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"col-md-8\" *ngIf=\"selectedSubcategories.length > 0\">\n        <mat-card>\n          <p>Selected Sub Categories</p>\n          <hr />\n          <div\n            cdkDropList\n            class=\"example-list\"\n            (cdkDropListDropped)=\"drop($event)\"\n          >\n            <div\n              class=\"example-box\"\n              *ngFor=\"let attribute of selectedSubcategories\"\n              cdkDrag\n            >\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"text_name\">\n                  {{ attribute.name | uppercase }}\n                </div>\n                <mat-chip-list>\n                  <mat-chip color=\"primary\" selected>{{\n                    attribute.code | uppercase\n                  }}</mat-chip>\n                </mat-chip-list>\n                <div>\n                  <button\n                    mat-mini-fab\n                    color=\"warn\"\n                    (click)=\"deleteAttribute(attribute)\"\n                  >\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-end mb-3\">\n      <button type=\"submit\" class=\"btn btn-primary px-4\">Submit</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "O72j":
/*!*******************************************************************************!*\
  !*** ./src/app/views/catalogue/store/sub-store/sub-store-list.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table td {\n  padding: 5px 6px !important;\n  vertical-align: middle !important;\n}\n\n.example-form-field {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N1Yi1zdG9yZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InN1Yi1zdG9yZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHRkIHtcbiAgcGFkZGluZzogNXB4IDZweCAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG5cbi5leGFtcGxlLWZvcm0tZmllbGQge1xuICB3aWR0aDogMjAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "PamP":
/*!**************************************************************!*\
  !*** ./src/app/views/catalogue/product/product.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product.component.html */ "uhC9");
/* harmony import */ var _product_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component.scss */ "Zd2u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/product/product.service */ "IL2G");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/confirmation-dialog/confirmation-dialog.component */ "drq7");








let ProductComponent = class ProductComponent {
    constructor(_category, dialog, router) {
        this._category = _category;
        this.dialog = dialog;
        this.router = router;
        this.categoryList = [];
        this.myAllStore = [];
        this.count = 0;
        this.pageSize = 8;
        this.currentPage = 1;
        this.searchValue = "";
    }
    ngOnInit() {
        this.getListOfStores();
    }
    getListCategories() {
        this._category.getCategoryList(this.currentPage, this.pageSize).subscribe((res) => {
            // console.log("res", res);
            if (res.products && res.products.length > 0) {
                this.categoryList = res.products;
                this.count = res.count;
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    getListOfStores() {
        this._category
            .getSubcategoryListByQuery("")
            .subscribe((res) => {
            // console.log("res", res);
            if (res.stores && res.stores.length > 0) {
                this.myAllStore = res.stores;
                this.count = res.count;
                this.onChangeCategoryType(this.myAllStore[0].id);
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    clearSearch() {
        this.searchValue = "";
        this.currentPage = 1;
        this.getListCategories();
    }
    onChangeCategoryType(store) {
        this.searchValue = "";
        this.currentPage = 1;
        // console.log("type", isEnabled);
        this._category
            .getCategoriesBySearch(this.currentPage, this.pageSize, this.searchValue, store)
            .subscribe((res) => {
            this.categoryList = res.products;
            this.count = res.count;
            // if (res.categorys && res.categorys.length > 0) {
            // }
        }, (err) => {
            console.log("err", err);
        });
    }
    categorySearch() {
        this._category
            .getCategoriesBySearch(this.currentPage, this.pageSize, this.searchValue)
            .subscribe((res) => {
            if (res.prooducts && res.prooducts.length > 0) {
                this.categoryList = res.prooducts;
                this.count = res.count;
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    handlePage(event) {
        this.currentPage = event.pageIndex + 1;
        this.pageSize = event.pageSize;
        // console.log("event", event);
        this._category.changePage(this.currentPage, this.pageSize).subscribe((res) => {
            // console.log("res", res);
            if (res.prooducts && res.prooducts.length > 0) {
                this.categoryList = res.prooducts;
                this.count = res.count;
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    updateIsEnabledForCategory(id, name, isEnabled) {
        const dialogRef = this.dialog.open(_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            width: "350px",
            data: `Do you really want to Update ${name} ?`,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                let obj = {
                    isEnabled: isEnabled,
                };
                this._category.updateCategory(id, obj).subscribe({
                    next: () => {
                        this.getListCategories();
                    },
                    error: (error) => {
                        console.log("error", error);
                    },
                });
                // DO SOMETHING
            }
            else {
                this.getListCategories();
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    openDialogForCategories(id, name) {
        const dialogRef = this.dialog.open(_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            width: "350px",
            data: `Do you really want to delete ${name} ?`,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this._category.deleteCategory(id).subscribe((res) => {
                    this.categoryList = this.categoryList.filter((item) => item.id !== id);
                    this.getListCategories();
                    console.log("Attributes deleted successfully!");
                });
                // DO SOMETHING
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    deleteCategory(id) {
        this._category.deleteCategory(id).subscribe((res) => {
            this.categoryList = this.categoryList.filter((item) => item.id !== id);
            this.getListCategories();
            console.log("Attributes deleted successfully!");
        });
    }
    navigateToAddCategory() {
        this.router.navigate(["/add-product"]);
    }
};
ProductComponent.ctorParameters = () => [
    { type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-category",
        template: _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_product_product_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ProductComponent);



/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "nSew");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "wTWu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/account/account.service */ "IRyT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");







let LoginComponent = class LoginComponent {
    constructor(router, formBuilder, account) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.account = account;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ["prathmesh@gmail.com", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ["123123", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
            admin: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    get f() {
        return this.form.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (!this.f.admin.value) {
            this.account.subUserLogin(this.f.email.value, this.f.password.value).subscribe({
                next: () => {
                    // get return url from query parameters or default to home page
                    console.log("user logged in");
                    this.router.navigate(["/users"]);
                },
                error: (error) => {
                    console.log("error", error);
                    // this.router.navigate(["/users"]);
                    // this.alertService.error(error);
                    // this.loading = false;
                },
            });
        }
        else if (this.form.invalid) {
            return;
        }
        else if (this.f.admin.value) {
            // this.loading = true;
            this.account.login(this.f.email.value, this.f.password.value).subscribe({
                next: () => {
                    // get return url from query parameters or default to home page
                    console.log("user logged in");
                    this.router.navigate(["/users"]);
                },
                error: (error) => {
                    console.log("error", error);
                    // this.router.navigate(["/users"]);
                    // this.alertService.error(error);
                    // this.loading = false;
                },
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
], LoginComponent);



/***/ }),

/***/ "QEjV":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/catalogue/store/edit-store/edit-store.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\">\n  <form [formGroup]=\"subCategoryForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name :</label>\n          <input\n            type=\"text\"\n            formControlName=\"name\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.name.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Name\"\n            id=\"name\"\n          />\n          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"label\">Location :</label>\n          <input\n            type=\"text\"\n            formControlName=\"location\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.location.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Location\"\n            id=\"location\"\n          />\n          <div *ngIf=\"submitted && f.location.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.location.errors.required\">Location is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"label\">Phone :</label>\n          <input\n            type=\"text\"\n            formControlName=\"phone\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.phone.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Phone\"\n            id=\"phone\"\n          />\n          <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.phone.errors.required\">Phone is required</div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"comment\">Description :</label>\n          <textarea\n            class=\"form-control\"\n            formControlName=\"description\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.description.errors\n            }\"\n            rows=\"3\"\n            id=\"comment\"\n          ></textarea>\n          <div\n            *ngIf=\"submitted && f.description.errors\"\n            class=\"invalid-feedback\"\n          >\n            <div *ngIf=\"f.description.errors.required\">\n              Description is required\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"col-md-8\">\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Attributes</mat-label>\n          <input\n            type=\"text\"\n            placeholder=\"Pick one\"\n            aria-label=\"Attributes\"\n            matInput\n            (keyup)=\"onKeyUpEvent($event)\"\n            [formControl]=\"myControl\"\n            [matAutocomplete]=\"auto\"\n          />\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n            <mat-option\n              *ngFor=\"let option of attributesList\"\n              [value]=\"option.name\"\n              (onSelectionChange)=\"attributeSelect(option)\"\n            >\n              {{ option.name }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <div class=\"col-md-8\" *ngIf=\"selectedAttributes.length > 0\">\n        <mat-card>\n          <p>Selected StoreKeeper</p>\n          <hr />\n          <div\n            cdkDropList\n            class=\"example-list\"\n            (cdkDropListDropped)=\"drop($event)\"\n          >\n            <div\n              class=\"example-box\"\n              *ngFor=\"let attribute of selectedAttributes\"\n              cdkDrag\n            >\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"text_name\">\n                  {{ attribute.name | uppercase }}\n                </div>\n                <mat-chip-list>\n                  <mat-chip color=\"primary\" selected>{{\n                    attribute.label | uppercase\n                  }}</mat-chip>\n                </mat-chip-list>\n                <div>\n                  <button\n                    mat-mini-fab\n                    color=\"warn\"\n                    (click)=\"deleteAttribute(attribute)\"\n                  >\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-end mb-3\">\n      <button type=\"submit\" class=\"btn btn-primary px-4\">Submit</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons */ "t17N");





let AppComponent = class AppComponent {
    constructor(router, iconSet) {
        this.router = router;
        this.iconSet = iconSet;
        // iconSet singleton
        iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["freeSet"]);
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>',
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]])
], AppComponent);



/***/ }),

/***/ "TlYG":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/catalogue/store/add-store/add-store.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\">\n  <form [formGroup]=\"subCategoryForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name :</label>\n          <input\n            type=\"text\"\n            formControlName=\"name\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.name.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Name\"\n            id=\"name\"\n          />\n          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"label\">Location :</label>\n          <input\n            type=\"text\"\n            formControlName=\"location\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.location.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Location\"\n            id=\"location\"\n          />\n          <div *ngIf=\"submitted && f.location.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.location.errors.required\">Location is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"label\">Phone :</label>\n          <input\n            type=\"text\"\n            formControlName=\"phone\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.phone.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Phone\"\n            id=\"phone\"\n          />\n          <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.phone.errors.required\">Phone is required</div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"col-md-4\">\n        <div class=\"form-group form-check\">\n          <label class=\"form-check-label\">\n            <input\n              class=\"form-check-input\"\n              formControlName=\"isEnabled\"\n              [ngClass]=\"{\n                'is-invalid': submitted && f.isEnabled.errors\n              }\"\n              type=\"checkbox\"\n            />\n            Is Enabled\n          </label>\n          <div *ngIf=\"submitted && f.isEnabled.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.isEnabled.errors.required\">Field is required</div>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"label\">Phone :</label>\n          <textarea\n            class=\"form-control\"\n            formControlName=\"phone\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.phone.errors\n            }\"\n            rows=\"3\"\n            id=\"phone\"\n          ></textarea>\n          <div\n            *ngIf=\"submitted && f.phone.errors\"\n            class=\"invalid-feedback\"\n          >\n            <div *ngIf=\"f.phone.errors.required\">\n              Phone is required\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"col-md-8\">\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Store Keeper</mat-label>\n          <input\n            type=\"text\"\n            placeholder=\"Pick one\"\n            aria-label=\"Attributes\"\n            matInput\n            (keyup)=\"onKeyUpEvent($event)\"\n            [formControl]=\"myControl\"\n            [matAutocomplete]=\"auto\"\n          />\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n            <mat-option\n              *ngFor=\"let option of attributesList\"\n              [value]=\"option.name\"\n              (onSelectionChange)=\"attributeSelect(option)\"\n            >\n              {{ option.name }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <div class=\"col-md-8\" *ngIf=\"selectedAttributes.length > 0\">\n        <mat-card>\n          <p>Selected Store Keeper</p>\n          <hr />\n          <div\n            cdkDropList\n            class=\"example-list\"\n            (cdkDropListDropped)=\"drop($event)\"\n          >\n            <div\n              class=\"example-box\"\n              *ngFor=\"let attribute of selectedAttributes\"\n              cdkDrag\n            >\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"text_name\">\n                  {{ attribute.name | uppercase }}\n                </div>\n                <mat-chip-list>\n                  <mat-chip color=\"primary\" selected>{{\n                    attribute.label | uppercase\n                  }}</mat-chip>\n                </mat-chip-list>\n                <div>\n                  <button\n                    mat-mini-fab\n                    color=\"warn\"\n                    (click)=\"deleteAttribute(attribute)\"\n                  >\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-end mb-3\">\n      <button type=\"submit\" class=\"btn btn-primary px-4\">Submit</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "U5hQ":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/catalogue/users/users.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"d-flex justify-content-end align-items-baseline pb-3\">\n        <div class=\"form-group pr-2\">\n          <select\n            class=\"form-control\"\n            id=\"attribute\"\n            (change)=\"onChangeAttributeType($event.target.value)\"\n          >\n            <option value=\"ADMIN\">ADMIN</option>\n            <option value=\"SUBUSER\">SUBUSER</option>\n          </select>\n        </div>\n        <!-- <div class=\"form-group pr-2\">\n          <select\n            class=\"form-control\"\n            (change)=\"onChangeCategoryType($event.target.value)\"\n            id=\"sel1\"\n          >\n            <option value=\"All\">All</option>\n            <option value=\"true\">Is Enabled</option>\n            <option value=\"false\">Is Disabled</option>\n          </select>\n        </div> -->\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary\"\n          (click)=\"navigateToAddAtrribute()\"\n        >\n          Add User\n        </button>\n        <!-- <div class=\"pl-2\">\n          <mat-form-field class=\"example-form-field\">\n            <mat-label>Search</mat-label>\n            <input matInput type=\"text\" [(ngModel)]=\"searchValue\" />\n            <button\n              mat-button\n              *ngIf=\"searchValue\"\n              matSuffix\n              mat-icon-button\n              aria-label=\"Clear\"\n              (click)=\"clearSearch()\"\n            >\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n          <button\n            mat-mini-fab\n            type=\"button\"\n            [disabled]=\"searchValue === ''\"\n            color=\"primary\"\n            (click)=\"categorySearch()\"\n          >\n            <mat-icon>search</mat-icon>\n          </button>\n        </div> -->\n      </div>\n      <table class=\"table table-hover table-bordered table-md\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th>Name</th>\n            <th>Email</th>\n            <th>Role</th>\n             <!--<th>Is Enabled</th> -->\n            <th>Operations</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of attributesList; let i = index\">\n            <td>{{ item.name }}</td>\n            <td>{{ item.email }}</td>\n            <td>{{ item.role }}</td>\n            <!-- <td>\n              <mat-slide-toggle\n                [(ngModel)]=\"item.isEnabled\"\n                (ngModelChange)=\"updateIsEnabled(item.id, item.name, $event)\"\n              ></mat-slide-toggle>\n            </td> -->\n            <td>\n              <div class=\"d-flex align-items-center justify-content-around\">\n                <button mat-mini-fab color=\"primary\">\n                  <a\n                    [routerLink]=\"['/edit-user/', item.id]\"\n                    class=\"text-white\"\n                  >\n                    <mat-icon>mode_edit</mat-icon>\n                  </a>\n                </button>\n                <button\n                  mat-mini-fab\n                  color=\"warn\"\n                  (click)=\"openDialogForAttribute(item.id, item.name)\"\n                >\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"d-flex justify-content-end\">\n        <mat-paginator\n          #paginator\n          [pageSize]=\"pageSize\"\n          [pageSizeOptions]=\"[5, 8, 10, 20, 25, 50, 100]\"\n          [showFirstLastButtons]=\"false\"\n          [length]=\"count\"\n          (page)=\"handlePage($event)\"\n        >\n        </mat-paginator>\n        <!-- [pageIndex]=\"currentPage\" -->\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "VwpF":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/catalogue/edit-user/edit-user.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\">\n  <form [formGroup]=\"editAttributeForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name :</label>\n          <input\n            type=\"text\"\n            formControlName=\"name\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.name.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Name\"\n            id=\"name\"\n          />\n          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email :</label>\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.email.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Email\"\n            id=\"email\"\n          />\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"password\">Password :</label>\n          <input\n            type=\"text\"\n            formControlName=\"password\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.password.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Password\"\n            id=\"password\"\n          />\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"col-md-4\">\n        <div class=\"form-group form-check\">\n          <label class=\"form-check-label\">\n            <input\n              class=\"form-check-input\"\n              formControlName=\"isEnabled\"\n              [ngClass]=\"{\n                'is-invalid': submitted && f.isEnabled.errors\n              }\"\n              type=\"checkbox\"\n            />\n            Is Enabled\n          </label>\n          <div *ngIf=\"submitted && f.isEnabled.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.isEnabled.errors.required\">Field is required</div>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"comment\">Description :</label>\n          <textarea\n            class=\"form-control\"\n            formControlName=\"description\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.description.errors\n            }\"\n            rows=\"3\"\n            id=\"comment\"\n          ></textarea>\n          <div\n            *ngIf=\"submitted && f.description.errors\"\n            class=\"invalid-feedback\"\n          >\n            <div *ngIf=\"f.description.errors.required\">\n              Description is required\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"attribute\">User Role:</label>\n          <select\n            class=\"form-control\"\n            formControlName=\"role\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.role.errors\n            }\"\n            id=\"attribute\"\n          >\n            <option value=\"ADMIN\">ADMIN</option>\n            <option value=\"SUBUSER\">SUBUSER</option>\n          </select>\n        </div>\n        <div *ngIf=\"submitted && f.role.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.role.errors.required\">Role is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-end mb-3\">\n      <button type=\"submit\" class=\"btn btn-primary px-4\">Submit</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/error/404.component */ "8gg5");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/error/500.component */ "dxhq");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/register/register.component */ "4XPS");
/* harmony import */ var _views_catalogue_users_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/catalogue/users/users.component */ "r/pi");
/* harmony import */ var _views_catalogue_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/catalogue/add-user/add-user.component */ "sy4a");
/* harmony import */ var _views_catalogue_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/catalogue/edit-user/edit-user.component */ "u36D");
/* harmony import */ var _views_catalogue_store_sub_store_sub_store_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/catalogue/store/sub-store/sub-store-list.component */ "ryCN");
/* harmony import */ var _views_catalogue_store_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/catalogue/store/add-store/add-store.component */ "8B9U");
/* harmony import */ var _views_catalogue_store_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/catalogue/store/edit-store/edit-store.component */ "vMY6");
/* harmony import */ var _views_catalogue_product_product_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/catalogue/product/product.component */ "PamP");
/* harmony import */ var _views_catalogue_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/catalogue/add-product/add-product.component */ "mSSH");
/* harmony import */ var _views_catalogue_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/catalogue/edit-product/edit-product.component */ "t4qC");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./helpers/token.interceptor */ "jYO4");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-multiselect-dropdown */ "UPO+");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./angular-material.module */ "rhD1");
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/confirmation-dialog/confirmation-dialog.component */ "drq7");









const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
};

// Import containers














const APP_CONTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutComponent"]];

// Import routing module

// Import 3rd party components







let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_24__["AppAsideModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_31__["MaterialModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_24__["AppBreadcrumbModule"].forRoot(),
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_30__["NgMultiSelectDropDownModule"].forRoot(),
            _coreui_angular__WEBPACK_IMPORTED_MODULE_24__["AppFooterModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_24__["AppHeaderModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_24__["AppSidebarModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_26__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_27__["TabsModule"].forRoot(),
            ng2_charts__WEBPACK_IMPORTED_MODULE_28__["ChartsModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconSetModule"].forRoot(),
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            ...APP_CONTAINERS,
            _views_error_404_component__WEBPACK_IMPORTED_MODULE_11__["P404Component"],
            _views_error_500_component__WEBPACK_IMPORTED_MODULE_12__["P500Component"],
            _views_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _views_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
            _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_32__["ConfirmationDialogComponent"],
            _views_catalogue_users_users_component__WEBPACK_IMPORTED_MODULE_15__["UserComponent"],
            _views_catalogue_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__["AddUserComponent"],
            _views_catalogue_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_17__["EditUserComponent"],
            _views_catalogue_store_sub_store_sub_store_list_component__WEBPACK_IMPORTED_MODULE_18__["StoreListComponent"],
            _views_catalogue_store_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_19__["AddStoreComponent"],
            _views_catalogue_store_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_20__["EditStoreComponent"],
            _views_catalogue_product_product_component__WEBPACK_IMPORTED_MODULE_21__["ProductComponent"],
            _views_catalogue_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_22__["AddProductComponent"],
            _views_catalogue_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_23__["EditProductComponent"]
        ],
        entryComponents: [_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_32__["ConfirmationDialogComponent"]],
        providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"],
            },
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconSetService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_29__["TokenInterceptor"], multi: true },
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "Zd2u":
/*!****************************************************************!*\
  !*** ./src/app/views/catalogue/product/product.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table td {\n  padding: 5px 6px !important;\n  vertical-align: middle !important;\n}\n\n.example-form-field {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUYiLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDVweCA2cHggIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuLmV4YW1wbGUtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "ag3Z":
/*!********************************************************!*\
  !*** ./src/app/views/register/register.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#loginBg {\n  background-image: url('login_bg.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbkJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZ0ltYWdlcy9sb2dpbl9iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "bVw4":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\" id=\"loginBg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card mx-4\">\n            <div class=\"card-body p-4\">\n              <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                <h1>Register</h1>\n                <p class=\"text-muted\">Create your account</p>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      ><i class=\"icon-user\"></i\n                    ></span>\n                  </div>\n                  <input\n                    type=\"text\"\n                    formControlName=\"name\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && f.name.errors\n                    }\"\n                    class=\"form-control\"\n                    placeholder=\"Name\"\n                    autocomplete=\"name\"\n                    required\n                  />\n                  <div\n                    *ngIf=\"submitted && f.name.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <div *ngIf=\"f.name.errors.required\">\n                      Name is required\n                    </div>\n                  </div>\n                </div>\n                <!-- <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      ><i class=\"icon-user\"></i\n                    ></span>\n                  </div>\n                  <input\n                    type=\"text\"\n                    formControlName=\"lastName\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && f.lastName.errors\n                    }\"\n                    class=\"form-control\"\n                    placeholder=\"Last Name\"\n                    autocomplete=\"lastName\"\n                    required\n                  />\n                  <div\n                    *ngIf=\"submitted && f.lastName.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <div *ngIf=\"f.lastName.errors.required\">\n                      Last Name is required\n                    </div>\n                  </div>\n                </div> -->\n                <!-- <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      ><i class=\"icon-user\"></i\n                    ></span>\n                  </div>\n                  <input\n                    type=\"number\"\n                    formControlName=\"mobile\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && f.mobile.errors\n                    }\"\n                    class=\"form-control\"\n                    placeholder=\"Mobile Number\"\n                    autocomplete=\"mobile\"\n                    required\n                  />\n                  <div\n                    *ngIf=\"submitted && f.mobile.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <div *ngIf=\"f.mobile.errors.required\">\n                      Mobile Number is required\n                    </div>\n                  </div>\n                </div> -->\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input\n                    type=\"text\"\n                    formControlName=\"email\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && f.email.errors\n                    }\"\n                    class=\"form-control\"\n                    placeholder=\"Email\"\n                    autocomplete=\"email\"\n                    required\n                  />\n                  <div\n                    *ngIf=\"submitted && f.email.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                  </div>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                  </div>\n                  <select\n                    class=\"form-control\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && f.email.errors\n                    }\"\n                    formControlName=\"role\"\n                    id=\"sel1\"\n                  >\n                    <option value=\"SUBUSER\">SUBUSER</option>\n                    <option value=\"ADMIN\">ADMIN</option>\n                  </select>\n                  <div\n                    *ngIf=\"submitted && f.role.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <div *ngIf=\"f.role.errors.required\">Role is required</div>\n                  </div>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      ><i class=\"icon-lock\"></i\n                    ></span>\n                  </div>\n                  <input\n                    type=\"password\"\n                    formControlName=\"password\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && f.password.errors\n                    }\"\n                    class=\"form-control\"\n                    placeholder=\"Password\"\n                    autocomplete=\"new-password\"\n                    required\n                  />\n                  <div\n                    *ngIf=\"submitted && f.password.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <div *ngIf=\"f.password.errors.required\">\n                      Password is required\n                    </div>\n                    <div *ngIf=\"f.password.errors.minlength\">\n                      Password must be at least 6 characters\n                    </div>\n                  </div>\n                </div>\n                <!-- <div class=\"input-group mb-4\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      ><i class=\"icon-lock\"></i\n                    ></span>\n                  </div>\n                  <input\n                    type=\"password\"\n                    class=\"form-control\"\n                    placeholder=\"Repeat password\"\n                    autocomplete=\"new-password\"\n                    required\n                  />\n                </div> -->\n                <button type=\"submit\" class=\"btn btn-block btn-success\">\n                  Create Account\n                </button>\n              </form>\n            </div>\n            <!-- <div class=\"card-footer p-4\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <button class=\"btn btn-block btn-facebook\" type=\"button\">\n                    <span>facebook</span>\n                  </button>\n                </div>\n                <div class=\"col-6\">\n                  <button class=\"btn btn-block btn-twitter\" type=\"button\">\n                    <span>twitter</span>\n                  </button>\n                </div>\n              </div>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/error/404.component */ "8gg5");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/error/500.component */ "dxhq");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/register/register.component */ "4XPS");
/* harmony import */ var _views_catalogue_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/catalogue/users/users.component */ "r/pi");
/* harmony import */ var _views_catalogue_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/catalogue/add-user/add-user.component */ "sy4a");
/* harmony import */ var _views_catalogue_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/catalogue/edit-user/edit-user.component */ "u36D");
/* harmony import */ var _views_catalogue_store_sub_store_sub_store_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/catalogue/store/sub-store/sub-store-list.component */ "ryCN");
/* harmony import */ var _views_catalogue_store_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/catalogue/store/add-store/add-store.component */ "8B9U");
/* harmony import */ var _views_catalogue_store_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/catalogue/store/edit-store/edit-store.component */ "vMY6");
/* harmony import */ var _views_catalogue_product_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/catalogue/product/product.component */ "PamP");
/* harmony import */ var _views_catalogue_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/catalogue/add-product/add-product.component */ "mSSH");
/* harmony import */ var _views_catalogue_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/catalogue/edit-product/edit-product.component */ "t4qC");



// Import Containers














const routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
    },
    {
        path: "404",
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
            title: "Page 404",
        },
    },
    {
        path: "500",
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
            title: "Page 500",
        },
    },
    {
        path: "login",
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        data: {
            title: "Login Page",
        },
    },
    {
        path: "register",
        component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        data: {
            title: "Register Page",
        },
    },
    {
        path: "",
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
            title: "Home",
        },
        children: [
            {
                path: "users",
                component: _views_catalogue_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                data: {
                    title: "User",
                },
            },
            {
                path: "add-user",
                component: _views_catalogue_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__["AddUserComponent"],
                data: {
                    title: "Create User",
                },
            },
            {
                path: "edit-user/:userId",
                component: _views_catalogue_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__["EditUserComponent"],
                data: {
                    title: "Edit User",
                },
            },
            {
                path: "stores",
                component: _views_catalogue_store_sub_store_sub_store_list_component__WEBPACK_IMPORTED_MODULE_11__["StoreListComponent"],
                data: {
                    title: "Store",
                },
            },
            {
                path: "add-stores",
                component: _views_catalogue_store_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_12__["AddStoreComponent"],
                data: {
                    title: "Create Store",
                },
            },
            {
                path: "edit-stores/:storeId",
                component: _views_catalogue_store_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_13__["EditStoreComponent"],
                data: {
                    title: "Edit Store",
                },
            },
            {
                path: "products",
                component: _views_catalogue_product_product_component__WEBPACK_IMPORTED_MODULE_14__["ProductComponent"],
                data: {
                    title: "Product",
                },
            },
            {
                path: "add-product",
                component: _views_catalogue_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_15__["AddProductComponent"],
                data: {
                    title: "Create Product",
                },
            },
            {
                path: "edit-product/:productId",
                component: _views_catalogue_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_16__["EditProductComponent"],
                data: {
                    title: "Edit Product",
                },
            }
        ],
    },
    { path: "**", component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: "legacy" })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "c2Qq":
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
const navItems = [
    {
        name: "Users",
        url: "/users",
        icon: "icon-puzzle",
    },
    {
        name: "Stores",
        url: "/stores",
        icon: "icon-puzzle",
    },
    {
        name: "Products",
        url: "/products",
        icon: "icon-puzzle",
    }
];


/***/ }),

/***/ "dO9j":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/catalogue/add-product/add-product.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\">\n  <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name :</label>\n          <input\n            type=\"text\"\n            formControlName=\"name\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.name.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Name\"\n            id=\"name\"\n          />\n          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"label\">Description :</label>\n          <input\n            type=\"text\"\n            formControlName=\"description\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.description.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Description\"\n            id=\"label\"\n          />\n          <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.description.errors.required\">Description is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"label\">Available Quentity :</label>\n          <input\n            type=\"number\"\n            formControlName=\"availableQuantity\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.availableQuantity.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Available Quentity\"\n            id=\"label\"\n          />\n          <div *ngIf=\"submitted && f.availableQuantity.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.availableQuantity.errors.required\">Available Quentity is required</div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"col-md-4\">\n        <div class=\"form-group form-check\">\n          <label class=\"form-check-label\">\n            <input\n              class=\"form-check-input\"\n              formControlName=\"isEnabled\"\n              [ngClass]=\"{\n                'is-invalid': submitted && f.isEnabled.errors\n              }\"\n              type=\"checkbox\"\n            />\n            Is Enabled\n          </label>\n          <div *ngIf=\"submitted && f.isEnabled.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.isEnabled.errors.required\">Field is required</div>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"col-md-5\">\n        <div class=\"form-group\">\n          <label for=\"label\">Sub Categories :</label>\n          <ng-multiselect-dropdown\n            [placeholder]=\"subCategories\"\n            [settings]=\"dropdownSettings\"\n            [data]=\"subCategoriesList\"\n            formControlName=\"subCategories\"\n            (onSelect)=\"onItemSubSelect($event)\"\n            (onSelectAll)=\"onSubSelectAll($event)\"\n          >\n          </ng-multiselect-dropdown>\n        </div>\n      </div> -->\n      <div class=\"col-md-8\">\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Store</mat-label>\n          <input\n            type=\"text\"\n            placeholder=\"Pick one\"\n            aria-label=\"Sub Categories\"\n            matInput\n            (keyup)=\"onKeyUpEvent($event)\"\n            [formControl]=\"myControl\"\n            [matAutocomplete]=\"auto\"\n          />\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n            <mat-option\n              *ngFor=\"let option of subCategoriesList\"\n              [value]=\"option.name\"\n              (onSelectionChange)=\"attributeSelect(option)\"\n            >\n              {{ option.name }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <!-- <div class=\"col-md-6\" *ngIf=\"selectedSubcategoryItems.length > 0\">\n        <div\n          cdkDropList\n          class=\"example-list\"\n          (cdkDropListDropped)=\"drop($event)\"\n        >\n          <div\n            class=\"example-box\"\n            *ngFor=\"let attribute of selectedSubcategoryItems\"\n            cdkDrag\n          >\n            {{ attribute.name }}\n            <span>\n              <button\n                mat-mini-fab\n                color=\"warn\"\n                (click)=\"deleteAttribute(attribute)\"\n              >\n                <mat-icon>delete</mat-icon>\n              </button>\n            </span>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"col-md-8\" *ngIf=\"selectedSubcategoryItems.length > 0\">\n        <mat-card>\n          <p>Selected Sub Categories</p>\n          <hr />\n          <div\n            cdkDropList\n            class=\"example-list\"\n            (cdkDropListDropped)=\"drop($event)\"\n          >\n            <div\n              class=\"example-box\"\n              *ngFor=\"let attribute of selectedSubcategoryItems\"\n              cdkDrag\n            >\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"text_name\">\n                  {{ attribute.name | uppercase }}\n                </div>\n                <mat-chip-list>\n                  <mat-chip color=\"primary\" selected>{{\n                    attribute.descreption | uppercase\n                  }}</mat-chip>\n                </mat-chip-list>\n                <div>\n                  <button\n                    mat-mini-fab\n                    color=\"warn\"\n                    (click)=\"deleteAttribute(attribute)\"\n                  >\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-end mb-3\">\n      <button type=\"submit\" class=\"btn btn-primary px-4\">Submit</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "drq7":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/confirmation-dialog/confirmation-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirmation_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirmation-dialog.component.html */ "i1aT");
/* harmony import */ var _confirmation_dialog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmation-dialog.component.scss */ "HwrK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");





let ConfirmationDialogComponent = class ConfirmationDialogComponent {
    constructor(dialogRef, message) {
        this.dialogRef = dialogRef;
        this.message = message;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
};
ConfirmationDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
ConfirmationDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-confirmation-dialog",
        template: _raw_loader_confirmation_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirmation_dialog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], String])
], ConfirmationDialogComponent);



/***/ }),

/***/ "dxhq":
/*!**********************************************!*\
  !*** ./src/app/views/error/500.component.ts ***!
  \**********************************************/
/*! exports provided: P500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P500Component", function() { return P500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./500.component.html */ "Lrxh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let P500Component = class P500Component {
    constructor() { }
};
P500Component.ctorParameters = () => [];
P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], P500Component);



/***/ }),

/***/ "eG4T":
/*!******************************************************************!*\
  !*** ./src/app/views/catalogue/add-user/add-user.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "gwg1":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/catalogue/add-user/add-user.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\">\n  <form [formGroup]=\"attributeForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name :</label>\n          <input\n            type=\"text\"\n            formControlName=\"name\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.name.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Name\"\n            id=\"name\"\n          />\n          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"label\">Email :</label>\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.email.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Email\"\n            id=\"email\"\n          />\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"password\">Password :</label>\n          <input\n            type=\"text\"\n            formControlName=\"password\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.password.errors\n            }\"\n            class=\"form-control\"\n            placeholder=\"Enter Password\"\n            id=\"password\"\n          />\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"col-md-4\">\n        <div class=\"form-group form-check\">\n          <label class=\"form-check-label\">\n            <input\n              class=\"form-check-input\"\n              formControlName=\"isEnabled\"\n              [ngClass]=\"{\n                'is-invalid': submitted && f.isEnabled.errors\n              }\"\n              type=\"checkbox\"\n            />\n            Is Enabled\n          </label>\n          <div *ngIf=\"submitted && f.isEnabled.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.isEnabled.errors.required\">Field is required</div>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"comment\">Description :</label>\n          <textarea\n            class=\"form-control\"\n            formControlName=\"description\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.description.errors\n            }\"\n            rows=\"3\"\n            id=\"comment\"\n          ></textarea>\n          <div\n            *ngIf=\"submitted && f.description.errors\"\n            class=\"invalid-feedback\"\n          >\n            <div *ngIf=\"f.description.errors.required\">\n              Description is required\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"attribute\">User Role:</label>\n          <select\n            class=\"form-control\"\n            formControlName=\"role\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.type.errors\n            }\"\n            id=\"attribute\"\n          >\n            <option value=\"ADMIN\">ADMIN</option>\n            <option value=\"SUBUSER\">SUBUSER</option>\n          </select>\n        </div>\n        <div *ngIf=\"submitted && f.type.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.type.errors.required\">Role is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-end mb-3\">\n      <button type=\"submit\" class=\"btn btn-primary px-4\">Submit</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "i1aT":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirmation-dialog/confirmation-dialog.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-content>\n  {{ message }}\n</div>\n<div mat-dialog-actions class=\"d-flex justify-content-end pt-4\">\n  <button mat-raised-button color=\"primary\" (click)=\"onNoClick()\">No</button>\n  <button\n    mat-raised-button\n    color=\"warn\"\n    [mat-dialog-close]=\"true\"\n    cdkFocusInitial\n  >\n    Yes\n  </button>\n</div>\n");

/***/ }),

/***/ "jYO4":
/*!**********************************************!*\
  !*** ./src/app/helpers/token.interceptor.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/account/account.service */ "IRyT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let TokenInterceptor = class TokenInterceptor {
    constructor(account, router) {
        this.account = account;
        this.router = router;
        this.AUTH_HEADER = "Authorization";
    }
    intercept(req, next) {
        // if (!req.headers.has("Content-Type")) {
        //   req = req.clone({
        //     headers: req.headers.set("Content-Type", "application/json"),
        //   });
        // }
        req = this.addAuthenticationToken(req);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => { }, (err) => {
            console.log("token error", err);
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (err.status !== 401) {
                    return;
                }
                this.router.navigate(["login"]);
                //   if (err.status === 401) {
                //   }
            }
        }));
    }
    addAuthenticationToken(request) {
        let token = this.account.getToken();
        // console.log("token", token);
        if (token !== undefined && token !== null) {
            return request.clone({
                headers: request.headers.set(this.AUTH_HEADER, "Bearer " + token),
            });
        }
        else {
            return request;
        }
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _services_account_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_account_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], TokenInterceptor);



/***/ }),

/***/ "lm8q":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [navbarBrandRouterLink]=\"['/users']\"\n  [navbarBrandFull]=\"{\n    src: 'assets/img/brand/logo.svg',\n    width: 89,\n    height: 25,\n    alt: 'CoreUI Logo'\n  }\"\n  [fixed]=\"true\"\n  [navbarBrandMinimized]=\"{\n    src: 'assets/img/brand/sygnet.svg',\n    width: 30,\n    height: 30,\n    alt: 'CoreUI Logo'\n  }\"\n  [sidebarToggler]=\"'lg'\"\n  [asideMenuToggler]=\"'lg'\"\n>\n  <ul class=\"nav navbar-nav d-md-down-none\">\n    <!-- <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\n    </li>\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Users</a>\n    </li>\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </li> -->\n  </ul>\n  <ul class=\"nav navbar-nav ml-auto\">\n    <!-- <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span></a>\n    </li>\n    <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>\n    </li>\n    <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\n    </li> -->\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a\n        class=\"nav-link\"\n        data-toggle=\"dropdown\"\n        href=\"#\"\n        role=\"button\"\n        aria-haspopup=\"true\"\n        aria-expanded=\"false\"\n        dropdownToggle\n        (click)=\"(false)\"\n      >\n        <img\n          src=\"assets/img/avatars/1.jpg\"\n          class=\"img-avatar\"\n          alt=\"admin@bootstrapmaster.com\"\n        />\n      </a>\n      <div\n        class=\"dropdown-menu dropdown-menu-right\"\n        *dropdownMenu\n        aria-labelledby=\"simple-dropdown\"\n      >\n        <!-- <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div> -->\n        <!-- <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a> -->\n        <!-- <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-dark\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a> -->\n        <div class=\"divider\"></div>\n        <!-- <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a> -->\n        <a class=\"dropdown-item\" (click)=\"logout()\" href=\"#\"\n          ><i class=\"fa fa-lock\"></i> Logout</a\n        >\n      </div>\n    </li>\n  </ul>\n</app-header>\n<div class=\"app-body\" style=\"background-color: #fff\">\n  <app-sidebar\n    #appSidebar\n    [fixed]=\"true\"\n    [display]=\"'lg'\"\n    [minimized]=\"sidebarMinimized\"\n    (minimizedChange)=\"toggleMinimize($event)\"\n  >\n    <app-sidebar-nav\n      [navItems]=\"navItems\"\n      [perfectScrollbar]\n      [disabled]=\"appSidebar.minimized\"\n    ></app-sidebar-nav>\n    <app-sidebar-minimizer></app-sidebar-minimizer>\n  </app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n    <!-- Breadcrumb -->\n    <!-- breaking change 'cui-breadcrumb' -->\n    <cui-breadcrumb>\n      <!-- Breadcrumb Menu-->\n      <!-- <li class=\"breadcrumb-menu d-md-down-none\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n          <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\n          <a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n        </div>\n      </li> -->\n    </cui-breadcrumb>\n    <!-- deprecation warning for 'app-breadcrumb' -->\n    <!--<ol class=\"breadcrumb\">-->\n    <!--<app-breadcrumb></app-breadcrumb>-->\n    <!--&lt;!&ndash; Breadcrumb Menu&ndash;&gt;-->\n    <!--<li class=\"breadcrumb-menu d-md-down-none\">-->\n    <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">-->\n    <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>-->\n    <!--<a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>-->\n    <!--<a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n    <!--</div>-->\n    <!--</li>-->\n    <!--</ol>-->\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- /.container-fluid -->\n  </main>\n  <!-- <app-aside [fixed]=\"true\" [display]=\"false\" [ngClass]=\"'test'\">\n    <tabset>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\n        <div class=\"list-group list-group-accent\">\n          <div class=\"list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small\">Today</div>\n          <div class=\"list-group-item list-group-item-accent-warning list-group-item-divider\">\n            <div class=\"avatar float-right\">\n              <img class=\"img-avatar\" src=\"assets/img/avatars/7.jpg\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div>Meeting with\n              <strong>Lucas</strong>\n            </div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  1 - 3pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-location-pin\"></i>  Palo Alto, CA</small>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-info\">\n            <div class=\"avatar float-right\">\n              <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div>Skype with\n              <strong>Megan</strong>\n            </div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  4 - 5pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-social-skype\"></i>  On-line</small>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small\">Tomorrow</div>\n          <div class=\"list-group-item list-group-item-accent-danger list-group-item-divider\">\n            <div>New UI Project -\n              <strong>deadline</strong>\n            </div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  10 - 11pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-home\"></i>  creativeLabs HQ</small>\n            <div class=\"avatars-stack mt-2\">\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/2.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/3.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/5.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n            </div>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-success list-group-item-divider\">\n            <div>\n              <strong>#10 Startups.Garden</strong> Meetup</div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  1 - 3pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-location-pin\"></i>  Palo Alto, CA</small>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-primary list-group-item-divider\">\n            <div>\n              <strong>Team meeting</strong>\n            </div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  4 - 6pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-home\"></i>  creativeLabs HQ</small>\n            <div class=\"avatars-stack mt-2\">\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/2.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/3.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/5.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/7.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/8.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </tab>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-speech\"></i></ng-template>\n        <div class=\"p-3\">\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n        </div>\n      </tab>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-settings\"></i></ng-template>\n        <div class=\"p-3\">\n          <h6>Settings</h6>\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-4\">\n              <small><b>Option 1</b></small>\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\" checked>\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n              </label>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n            </div>\n          </div>\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 2</b></small>\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\">\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n              </label>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n            </div>\n          </div>\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 3</b></small>\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\">\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n            </div>\n          </div>\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 4</b></small>\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\" checked>\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n              </label>\n            </div>\n          </div>\n          <hr>\n          <h6>System Utilization</h6>\n          <div class=\"text-uppercase mb-1 mt-4\"><small><b>CPU Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>Memory Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">11444GB/16384MB</small>\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 1 Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">243GB/256GB</small>\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 2 Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">25GB/256GB</small>\n        </div>\n      </tab>\n    </tabset>\n  </app-aside> -->\n</div>\n<app-footer>\n  <!-- <span><a href=\"#\">Cosmonest</a> &copy; 2021.</span>\n  <span class=\"ml-auto\"\n    >Powered by <a href=\"https://coreui.io/angular\">Cosmonest</a></span\n  > -->\n</app-footer>\n");

/***/ }),

/***/ "mSSH":
/*!**********************************************************************!*\
  !*** ./src/app/views/catalogue/add-product/add-product.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-product.component.html */ "dO9j");
/* harmony import */ var _add_product_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-product.component.scss */ "AAxh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/product/product.service */ "IL2G");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");









let AddProductComponent = class AddProductComponent {
    constructor(router, formBuilder, _category, _snackBar) {
        this.router = router;
        this.formBuilder = formBuilder;
        this._category = _category;
        this._snackBar = _snackBar;
        this.horizontalPosition = "right";
        this.verticalPosition = "top";
        this.loading = false;
        this.submitted = false;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.subCategoriesList = [];
        this.selectedSubcategoryItems = [];
    }
    ngOnInit() {
        this.categoryForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            availableQuantity: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subCategories: [[""], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    onKeyUpEvent(event) {
        // console.log(event.target.value);
        this._category.getSubcategoryListByQuery(event.target.value).subscribe((res) => {
            // console.log("data", res);
            if (res.stores && res.stores.length > 0) {
                this.subCategoriesList = res.stores;
            }
        }, (error) => {
            console.log("error", error);
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(this.selectedSubcategoryItems, event.previousIndex, event.currentIndex);
    }
    deleteAttribute(event) {
        this.selectedSubcategoryItems = this.selectedSubcategoryItems.filter((x) => x.id !== event.id);
    }
    attributeSelect(event) {
        this.selectedSubcategoryItems = [];
        this.selectedSubcategoryItems.push(event);
        this.myControl.reset("");
        // let duplicateValue = this.selectedSubcategoryItems.find(
        //   (x) => x.id === event.id
        // );
        // // console.log("_duplicate", duplicateValue);
        // if (duplicateValue == undefined) {
        //   this.selectedSubcategoryItems.push(event);
        //   this.myControl.reset("");
        // } else {
        //   this._snackBar.open(`${event.name} is already Selected.`, "End now", {
        //     duration: 1000,
        //     horizontalPosition: this.horizontalPosition,
        //     verticalPosition: this.verticalPosition,
        //   });
        // }
    }
    get f() {
        return this.categoryForm.controls;
    }
    onSubmit() {
        console.log("clcked");
        alert(":");
        this.submitted = true;
        if (this.categoryForm.invalid) {
            return;
        }
        let obj = Object.assign(Object.assign({}, this.categoryForm.value), { store: this.selectedSubcategoryItems[0].id });
        this.loading = true;
        this._category.addCategory(obj).subscribe({
            next: () => {
                this.router.navigate(["/products"]);
            },
            error: (error) => {
                console.log("error", error);
                // this.alertService.error(error);
                // this.loading = false;
            },
        });
    }
};
AddProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
AddProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-add-product",
        template: _raw_loader_add_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_product_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_product_product_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], AddProductComponent);



/***/ }),

/***/ "nAJl":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "nSew":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\" id=\"loginBg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                  <h1>Login</h1>\n                  <p class=\"text-muted\">Sign In to your account</p>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"\n                        ><i class=\"icon-user\"></i\n                      ></span>\n                    </div>\n                    <input\n                      type=\"text\"\n                      formControlName=\"email\"\n                      [ngClass]=\"{\n                        'is-invalid': submitted && f.email.errors\n                      }\"\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      autocomplete=\"email\"\n                      required\n                    />\n                    <div\n                      *ngIf=\"submitted && f.email.errors\"\n                      class=\"invalid-feedback\"\n                    >\n                      <div *ngIf=\"f.email.errors.required\">\n                        Email is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"\n                        ><i class=\"icon-lock\"></i\n                      ></span>\n                    </div>\n                    <input\n                      type=\"password\"\n                      formControlName=\"password\"\n                      [ngClass]=\"{\n                        'is-invalid': submitted && f.password.errors\n                      }\"\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      autocomplete=\"new-password\"\n                      required\n                    />\n                    <div\n                      *ngIf=\"submitted && f.password.errors\"\n                      class=\"invalid-feedback\"\n                    >\n                      <div *ngIf=\"f.password.errors.required\">\n                        Password is required\n                      </div>\n                      <div *ngIf=\"f.password.errors.minlength\">\n                        Password must be at least 6 characters\n                      </div>\n                    </div>\n                  </div> \n                  <div class=\"input-group mb-4\">\n                    <!-- <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"\n                        ><i class=\"icon-lock\"></i\n                      ></span>\n                    </div> -->\n                    <label class=\"switch\">\n                      <input type=\"checkbox\"\n                      formControlName=\"admin\"\n                      [ngClass]=\"{\n                        'is-invalid': submitted && f.admin.errors\n                      }\"\n                      class=\"form-control\"\n                      placeholder=\"Admin\"\n                      autocomplete=\"new-admin\"\n                      required\n                      >\n                      <span class=\"slider round\"></span>\n                    </label>\n                    <!-- <input\n                      type=\"checkbox\"\n                      formControlName=\"admin\"\n                      [ngClass]=\"{\n                        'is-invalid': submitted && f.admin.errors\n                      }\"\n                      class=\"form-control\"\n                      placeholder=\"Admin\"\n                      autocomplete=\"new-admin\"\n                      required\n                    /> -->\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"submit\" class=\"btn btn-primary px-4\">\n                        Login\n                      </button>\n                    </div>\n                    <!-- <div class=\"col-6 text-right\">\n                      <button type=\"submit\" class=\"btn btn-link px-0\">\n                        Forgot password?\n                      </button>\n                    </div> -->\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div\n              class=\"card text-white bg-primary py-5 d-md-down-none\"\n              style=\"width: 44%\"\n            >\n              <div class=\"card-body text-center\">\n                <div>\n                  <h2>Sign up</h2>\n                  <!-- <p>\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua.\n                  </p> -->\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-primary active mt-3\"\n                    [routerLink]=\"'/register'\"\n                  >\n                    Register Now!\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "ooDN":
/*!*************************************************!*\
  !*** ./src/app/services/store/store.service.ts ***!
  \*************************************************/
/*! exports provided: SubCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryService", function() { return SubCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let SubCategoryService = class SubCategoryService {
    constructor(http) {
        this.http = http;
    }
    addSubCategory(attrObj) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}store`, attrObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            //   console.log("attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getSubCategoryList(page, perPage) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}store?page=${page}&perPage=${perPage}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // console.log("get attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getSubCategoriesBySearch(page, perPage, query, storeKeeper) {
        let url;
        if (storeKeeper !== undefined) {
            url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}store?page=${page}&perPage=${perPage}&search=${query}&storeKeeper=${storeKeeper}`;
        }
        else {
            url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}store?page=${page}&perPage=${perPage}&search=${query}`;
        }
        return this.http.get(`${url}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // console.log("get attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    changePage(page, perPage) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}store?page=${page}&perPage=${perPage}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // console.log("get attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAttributesList(query) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}users?name=${query}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // console.log("get attribute", response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getSubCategoryById(id) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}store/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateSubCategory(id, attribute) {
        return this.http
            .patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}store/${id}`, attribute)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteSubCategory(id) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url}store/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
};
SubCategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SubCategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], SubCategoryService);



/***/ }),

/***/ "r/pi":
/*!**********************************************************!*\
  !*** ./src/app/views/catalogue/users/users.component.ts ***!
  \**********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./users.component.html */ "U5hQ");
/* harmony import */ var _users_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component.scss */ "+SoS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/confirmation-dialog/confirmation-dialog.component */ "drq7");








let UserComponent = class UserComponent {
    constructor(attribute, dialog, router) {
        this.attribute = attribute;
        this.dialog = dialog;
        this.router = router;
        this.attributesList = [];
        this.count = 0;
        this.pageSize = 8;
        this.currentPage = 1;
        this.searchValue = "";
    }
    ngOnInit() {
        // console.log("called");
        this.getListAttributes();
    }
    getListAttributes() {
        this.attribute.getAttributesList(this.currentPage, this.pageSize).subscribe((res) => {
            console.log("res", res);
            if (res.users && res.users.length > 0) {
                this.attributesList = res.users;
                this.count = res.count;
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    clearSearch() {
        this.searchValue = "";
        this.currentPage = 1;
        this.getListAttributes();
    }
    onChangeAttributeType(role) {
        this.searchValue = "";
        this.currentPage = 1;
        // console.log("type", isEnabled);
        if (role !== "All") {
            console.log("enter");
            this.attribute
                .getAttributesBySearch(this.currentPage, this.pageSize, this.searchValue, role)
                .subscribe((res) => {
                this.attributesList = res.users;
                this.count = res.count;
                // if (res.categorys && res.categorys.length > 0) {
                // }
            }, (err) => {
                console.log("err", err);
            });
        }
        else {
            console.log("else");
            this.clearSearch();
        }
    }
    onChangeCategoryType(type) {
        this.searchValue = "";
        this.currentPage = 1;
        let isEnabled = type === "false" ? false : true;
        // console.log("type", isEnabled);
        if (type === "true" || type === "false") {
            console.log("enter");
            this.attribute
                .getAttributesBySearch(this.currentPage, this.pageSize, this.searchValue, isEnabled)
                .subscribe((res) => {
                this.attributesList = res.attributes;
                this.count = res.count;
                // if (res.categorys && res.categorys.length > 0) {
                // }
            }, (err) => {
                console.log("err", err);
            });
        }
        else {
            console.log("else");
            this.clearSearch();
        }
    }
    categorySearch() {
        this.attribute
            .getAttributesBySearch(this.currentPage, this.pageSize, this.searchValue)
            .subscribe((res) => {
            if (res.attributes && res.attributes.length > 0) {
                this.attributesList = res.attributes;
                this.count = res.count;
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    handlePage(event) {
        this.currentPage = event.pageIndex + 1;
        this.pageSize = event.pageSize;
        // console.log("event", event);
        this.attribute.changePage(this.currentPage, this.pageSize).subscribe((res) => {
            // console.log("res", res);
            if (res.attributes && res.attributes.length > 0) {
                this.attributesList = res.attributes;
                this.count = res.count;
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    openDialogForAttribute(id, name) {
        const dialogRef = this.dialog.open(_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            width: "350px",
            data: `Do you really want to delete ${name} ?`,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.attribute.deleteAttribute(id).subscribe((res) => {
                    this.attributesList = this.attributesList.filter((item) => item.id !== id);
                    this.getListAttributes();
                    console.log("Attributes deleted successfully!");
                });
                // DO SOMETHING
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    updateIsEnabled(id, name, isEnabled) {
        const dialogRef = this.dialog.open(_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            width: "350px",
            data: `Do you really want to Update ${name} ?`,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                let obj = {
                    isEnabled: isEnabled,
                };
                this.attribute.updateAttribute(id, obj).subscribe({
                    next: () => {
                        this.getListAttributes();
                    },
                    error: (error) => {
                        console.log("error", error);
                    },
                });
                // DO SOMETHING
            }
            else {
                this.getListAttributes();
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    // enableChanged(id, isEnabled) {
    //   // console.log("err", id, isEnabled);
    //   let obj = {
    //     isEnabled: isEnabled,
    //   };
    //   this.attribute.updateAttribute(id, obj).subscribe({
    //     next: () => {
    //       this.getListAttributes();
    //     },
    //     error: (error) => {
    //       console.log("error", error);
    //     },
    //   });
    // }
    deleteAttribute(id) {
        this.attribute.deleteAttribute(id).subscribe((res) => {
            this.attributesList = this.attributesList.filter((item) => item.id !== id);
            this.getListAttributes();
            console.log("Attributes deleted successfully!");
        });
    }
    navigateToAddAtrribute() {
        this.router.navigate(["/add-user"]);
    }
};
UserComponent.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["AttributeService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-attributes",
        template: _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_users_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["AttributeService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], UserComponent);



/***/ }),

/***/ "rhD1":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
















let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        ],
        declarations: [],
        exports: [
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        ],
    })
], MaterialModule);



/***/ }),

/***/ "ryCN":
/*!*****************************************************************************!*\
  !*** ./src/app/views/catalogue/store/sub-store/sub-store-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StoreListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreListComponent", function() { return StoreListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sub_store_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sub-store-list.component.html */ "G24w");
/* harmony import */ var _sub_store_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub-store-list.component.scss */ "O72j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/store/store.service */ "ooDN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/confirmation-dialog/confirmation-dialog.component */ "drq7");








let StoreListComponent = class StoreListComponent {
    constructor(subCategory, dialog, router) {
        this.subCategory = subCategory;
        this.dialog = dialog;
        this.router = router;
        this.subCategoryList = [];
        this.count = 0;
        this.pageSize = 8;
        this.currentPage = 1;
        this.searchValue = "";
    }
    ngOnInit() {
        console.log("called");
        this.getListSubCategories();
    }
    getListSubCategories() {
        this.subCategory
            .getSubCategoryList(this.currentPage, this.pageSize)
            .subscribe((res) => {
            // console.log("res", res);
            if (res.stores && res.stores.length > 0) {
                this.subCategoryList = res.stores;
                this.count = res.count;
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    clearSearch() {
        this.searchValue = "";
        this.currentPage = 1;
        this.getListSubCategories();
    }
    onChangeCategoryType(type) {
        this.searchValue = "";
        this.currentPage = 1;
        let user = localStorage.getItem('user');
        user = JSON.parse(user);
        let storeKeeper = type == "MY" ? user.id : undefined;
        // console.log("type", isEnabled);
        this.subCategory
            .getSubCategoriesBySearch(this.currentPage, this.pageSize, this.searchValue, storeKeeper)
            .subscribe((res) => {
            this.subCategoryList = res.stores;
            this.count = res.count;
            // if (res.categorys && res.categorys.length > 0) {
            // }
        }, (err) => {
            console.log("err", err);
        });
    }
    categorySearch() {
        this.subCategory
            .getSubCategoriesBySearch(this.currentPage, this.pageSize, this.searchValue)
            .subscribe((res) => {
            if (res.stores && res.stores.length > 0) {
                this.subCategoryList = res.stores;
                this.count = res.count;
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    handlePage(event) {
        this.currentPage = event.pageIndex + 1;
        this.pageSize = event.pageSize;
        // console.log("event", event);
        this.subCategory.changePage(this.currentPage, this.pageSize).subscribe((res) => {
            // console.log("res", res);
            if (res.stores && res.stores.length > 0) {
                this.subCategoryList = res.stores;
                this.count = res.count;
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    openDialogForSubCategories(id, name) {
        const dialogRef = this.dialog.open(_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            width: "350px",
            data: `Do you really want to delete ${name} ?`,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.subCategory.deleteSubCategory(id).subscribe((res) => {
                    this.subCategoryList = this.subCategoryList.filter((item) => item.id !== id);
                    this.getListSubCategories();
                    console.log("Attributes deleted successfully!");
                });
                // DO SOMETHING
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    updateIsEnabledForSubCategory(id, name, isEnabled) {
        const dialogRef = this.dialog.open(_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            width: "350px",
            data: `Do you really want to Update ${name} ?`,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                let obj = {
                    isEnabled: isEnabled,
                };
                this.subCategory.updateSubCategory(id, obj).subscribe({
                    next: () => {
                        this.getListSubCategories();
                    },
                    error: (error) => {
                        console.log("error", error);
                    },
                });
                // DO SOMETHING
            }
            else {
                this.getListSubCategories();
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    deleteSubCategory(id) {
        this.subCategory.deleteSubCategory(id).subscribe((res) => {
            this.subCategoryList = this.subCategoryList.filter((item) => item.id !== id);
            this.getListSubCategories();
            console.log("Attributes deleted successfully!");
        });
    }
    navigateToAddSubCategory() {
        this.router.navigate(["/add-stores"]);
    }
};
StoreListComponent.ctorParameters = () => [
    { type: _services_store_store_service__WEBPACK_IMPORTED_MODULE_5__["SubCategoryService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
StoreListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-sub-store-list",
        template: _raw_loader_sub_store_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sub_store_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_store_service__WEBPACK_IMPORTED_MODULE_5__["SubCategoryService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], StoreListComponent);



/***/ }),

/***/ "sy4a":
/*!****************************************************************!*\
  !*** ./src/app/views/catalogue/add-user/add-user.component.ts ***!
  \****************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-user.component.html */ "gwg1");
/* harmony import */ var _add_user_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user.component.scss */ "eG4T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user/user.service */ "CFL1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");







let AddUserComponent = class AddUserComponent {
    constructor(router, formBuilder, attribute) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.attribute = attribute;
        this.loading = false;
        this.submitted = false;
        this.attributeType = "";
        this.min = 0;
        this.max = 0;
        this.text = "";
        this.number = 0;
        this.options = [
            {
                email: "",
                value: "",
            },
        ];
    }
    ngOnInit() {
        this.attributeForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            isEnabled: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            role: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    get f() {
        return this.attributeForm.controls;
    }
    addOption() {
        this.options.push({
            email: "",
            value: "",
        });
    }
    removeOption(i) {
        this.options.splice(i, 1);
    }
    onSubmit() {
        this.submitted = true;
        if (this.attributeForm.invalid) {
            return;
        }
        let obj = Object.assign(Object.assign({}, this.attributeForm.value), { options: [] });
        this.loading = true;
        this.attribute.addAttribute(obj).subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                this.router.navigate(["/users"]);
            },
            error: (error) => {
                console.log("error", error);
                // this.alertService.error(error);
                // this.loading = false;
            },
        });
    }
};
AddUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["AttributeService"] }
];
AddUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-add-user",
        template: _raw_loader_add_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_user_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["AttributeService"]])
], AddUserComponent);



/***/ }),

/***/ "t4qC":
/*!************************************************************************!*\
  !*** ./src/app/views/catalogue/edit-product/edit-product.component.ts ***!
  \************************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-product.component.html */ "M9KC");
/* harmony import */ var _edit_product_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-product.component.scss */ "zdj8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/product/product.service */ "IL2G");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/store/store.service */ "ooDN");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");










let EditProductComponent = class EditProductComponent {
    constructor(router, route, formBuilder, _category, _subCategory, _snackBar) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this._category = _category;
        this._subCategory = _subCategory;
        this._snackBar = _snackBar;
        this.horizontalPosition = "right";
        this.verticalPosition = "top";
        this.loading = false;
        this.submitted = false;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.subcategoriesList = [];
        this.totalSubcategories = [];
        this.selectedSubcategories = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.params["productId"];
        this.categoryForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            availableQuantity: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subCategories: [[""], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.getcategoryById();
    }
    getcategoryById() {
        this._category.getCategoryById(this.id).subscribe((res) => {
            this.categoryForm.patchValue({
                name: res.name,
                description: res.description,
                store: res.store,
                availableQuantity: res.availableQuantity,
            });
            this.selectedSubcategories = [res.store];
        }, (err) => {
            console.log("data", err);
        });
    }
    onKeyUpEvent(event) {
        this._category.getSubcategoryListByQuery(event.target.value).subscribe((res) => {
            if (res.stores && res.stores.length > 0) {
                this.subcategoriesList = res.stores;
            }
        }, (error) => {
            console.log("error", error);
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["moveItemInArray"])(this.selectedSubcategories, event.previousIndex, event.currentIndex);
    }
    deleteAttribute(event) {
        this.selectedSubcategories = this.selectedSubcategories.filter((x) => x.id !== event.id);
    }
    attributeSelect(event) {
        this.selectedSubcategories = [];
        this.selectedSubcategories.push(event);
        this.myControl.reset("");
        // let duplicateValue = this.selectedSubcategories.find(
        //   (x) => x.id === event.id
        // );
        // if (duplicateValue == undefined) {
        //   this.selectedSubcategories.push(event);
        //   this.myControl.reset("");
        // } else {
        //   this._snackBar.open(`${event.name} is already Selected.`, "End now", {
        //     duration: 1000,
        //     horizontalPosition: this.horizontalPosition,
        //     verticalPosition: this.verticalPosition,
        //   });
        // }
    }
    // getSubCategoryList() {
    //   this._subCategory.getSubCategoryList().subscribe(
    //     (res) => {
    //       // console.log("res", res);
    //       if (res.subSubCategorys && res.subSubCategorys.length > 0) {
    //         this.totalSubcategories = res.subSubCategorys;
    //       }
    //       // console.log("res", this.subCategoriesList);
    //     },
    //     (err) => {
    //       console.log("err", err);
    //     }
    //   );
    // }
    onItemSelect(item) {
        console.log(item);
    }
    onSelectAll(items) {
        console.log(items);
    }
    onItemSubSelect(item) {
        console.log(item);
    }
    onSubSelectAll(items) {
        console.log(items);
    }
    get f() {
        return this.categoryForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.categoryForm.invalid) {
            return;
        }
        let obj = Object.assign(Object.assign({}, this.categoryForm.value), { store: this.selectedSubcategories[0].id });
        this.loading = true;
        this._category.updateCategory(this.id, obj).subscribe({
            next: () => {
                this.router.navigate(["/products"]);
            },
            error: (error) => {
                console.log("error", error);
                // this.alertService.error(error);
                // this.loading = false;
            },
        });
    }
};
EditProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
    { type: _services_store_store_service__WEBPACK_IMPORTED_MODULE_7__["SubCategoryService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }
];
EditProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-edit-product",
        template: _raw_loader_edit_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_product_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_product_product_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"],
        _services_store_store_service__WEBPACK_IMPORTED_MODULE_7__["SubCategoryService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
], EditProductComponent);



/***/ }),

/***/ "u36D":
/*!******************************************************************!*\
  !*** ./src/app/views/catalogue/edit-user/edit-user.component.ts ***!
  \******************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-user.component.html */ "VwpF");
/* harmony import */ var _edit_user_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-user.component.scss */ "ElRR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user/user.service */ "CFL1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");







let EditUserComponent = class EditUserComponent {
    constructor(router, formBuilder, route, attribute) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.attribute = attribute;
        this.loading = false;
        this.submitted = false;
        this.attributeType = "";
        this.text = "";
        this.number = 0;
        this.options = [
            {
                label: "",
                value: "",
            },
        ];
    }
    ngOnInit() {
        this.id = this.route.snapshot.params["userId"];
        this.editAttributeForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            isEnabled: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            role: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.editAttributeForm.controls["type"].valueChanges.subscribe((value) => {
            if (value === "RANGE" || value === "AREA") {
                this.min;
                this.max;
            }
            if (value === "CURRENCY" || value === "NUMBER") {
                this.number;
            }
            if (value === "TEXT") {
                this.text;
            }
            this.attributeType = value;
        });
        this.getAttributeById();
    }
    getAttributeById() {
        this.attribute.getAttributeById(this.id).subscribe((res) => {
            // this.attributeType = res.type;
            // if (res.type === "RANGE" || res.type === "AREA") {
            //   this.min = res.value.min;
            //   this.max = res.value.max;
            // } else if (res.type === "CURRENCY" || res.type === "NUMBER") {
            //   this.number = res.value.data;
            // } else if (res.type === "TEXT") {
            //   this.text = res.value.data;
            // } else if (res.type === "OPTIONS") {
            //   this.options = res.options;
            // }
            this.editAttributeForm.patchValue({
                name: res.name,
                email: res.email,
                password: res.password,
                role: res.role,
                description: res.description,
            });
        }, (err) => {
            console.log("data", err);
        });
    }
    get f() {
        return this.editAttributeForm.controls;
    }
    addOption() {
        this.options.push({
            label: "",
            value: "",
        });
    }
    removeOption(i) {
        this.options.splice(i, 1);
    }
    onSubmit() {
        this.submitted = true;
        let obj = Object.assign(Object.assign({}, this.editAttributeForm.value), { options: [] });
        this.loading = true;
        this.attribute.updateAttribute(this.id, obj).subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                this.router.navigate(["/users"]);
            },
            error: (error) => {
                console.log("error", error);
            },
        });
    }
};
EditUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["AttributeService"] }
];
EditUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-edit-user",
        template: _raw_loader_edit_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_user_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["AttributeService"]])
], EditUserComponent);



/***/ }),

/***/ "uhC9":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/catalogue/product/product.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"d-flex justify-content-end align-items-baseline pb-2\">\n        <div class=\"form-group pr-2\">\n          <!-- <label for=\"sel1\">Select:</label> -->\n          <select\n            class=\"form-control\"\n            (change)=\"onChangeCategoryType($event.target.value)\"\n            id=\"sel1\"\n          >\n            <option *ngFor=\"let item of myAllStore; let i = index\" value=\"{{item.id}}\" >{{item.name}}</option>\n          </select>\n        </div>\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary\"\n          (click)=\"navigateToAddCategory()\"\n        >\n          Add Product\n        </button>\n        <!-- <div class=\"pl-2\">\n          <mat-form-field class=\"example-form-field\">\n            <mat-label>Search</mat-label>\n            <input matInput type=\"text\" [(ngModel)]=\"searchValue\" />\n            <button\n              mat-button\n              *ngIf=\"searchValue\"\n              matSuffix\n              mat-icon-button\n              aria-label=\"Clear\"\n              (click)=\"clearSearch()\"\n            >\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n          <button\n            mat-mini-fab\n            type=\"button\"\n            [disabled]=\"searchValue === ''\"\n            color=\"primary\"\n            (click)=\"categorySearch()\"\n          >\n            <mat-icon>search</mat-icon>\n          </button>\n        </div> -->\n      </div>\n      <table class=\"table table-hover table-bordered\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th>Name</th>\n            <th>Description</th>\n            <th>Store</th>\n            <th>Available Count</th>\n            <th>Operations</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of categoryList; let i = index\">\n            <td>{{ item.name }}</td>\n            <td>{{ item.description }}</td>\n            <td class=\"text-center\">\n              {{ item.store.name }}\n            </td>\n            <td>\n              {{ item.availableQuantity }}\n            </td>\n            <td>\n              <div class=\"d-flex align-items-center justify-content-around\">\n                <button mat-mini-fab color=\"primary\">\n                  <a\n                    [routerLink]=\"['/edit-product/', item.id]\"\n                    class=\"text-white\"\n                  >\n                    <mat-icon>mode_edit</mat-icon>\n                  </a>\n                </button>\n                <button\n                  mat-mini-fab\n                  color=\"warn\"\n                  (click)=\"openDialogForCategories(item.id, item.name)\"\n                >\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"d-flex justify-content-end\">\n        <mat-paginator\n          #paginator\n          [pageSize]=\"pageSize\"\n          [pageSizeOptions]=\"[5, 8, 10, 20, 25, 50, 100]\"\n          [showFirstLastButtons]=\"false\"\n          [length]=\"count\"\n          (page)=\"handlePage($event)\"\n        >\n        </mat-paginator>\n        <!-- [pageIndex]=\"currentPage\" -->\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "vMY6":
/*!**************************************************************************!*\
  !*** ./src/app/views/catalogue/store/edit-store/edit-store.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStoreComponent", function() { return EditStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_store_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-store.component.html */ "QEjV");
/* harmony import */ var _edit_store_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-store.component.scss */ "AoxL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/store/store.service */ "ooDN");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/user/user.service */ "CFL1");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");










let EditStoreComponent = class EditStoreComponent {
    constructor(router, route, attribute, formBuilder, subCategory, _snackBar) {
        this.router = router;
        this.route = route;
        this.attribute = attribute;
        this.formBuilder = formBuilder;
        this.subCategory = subCategory;
        this._snackBar = _snackBar;
        this.horizontalPosition = "right";
        this.verticalPosition = "top";
        this.loading = false;
        this.submitted = false;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.attributesList = [];
        this.totalAttributes = [];
        this.selectedAttributes = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.params["storeId"];
        this.subCategoryForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            location: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            attributes: [[""]]
        });
        this.getSubCategoryById();
    }
    onKeyUpEvent(event) {
        this.subCategory.getAttributesList(event.target.value).subscribe((res) => {
            this.attributesList = res.users;
        }, (error) => {
            console.log("error", error);
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(this.selectedAttributes, event.previousIndex, event.currentIndex);
    }
    deleteAttribute(event) {
        this.selectedAttributes = this.selectedAttributes.filter((x) => x.id !== event.id);
    }
    attributeSelect(event) {
        this.selectedAttributes = [];
        this.selectedAttributes.push(event);
        this.myControl.reset("");
        // let duplicateValue = this.selectedAttributes.find((x) => x.id === event.id);
        // if (duplicateValue == undefined) {
        //   this.selectedAttributes.push(event);
        //   this.myControl.reset("");
        // } else {
        //   this._snackBar.open(`${event.name} is already Selected.`, "End now", {
        //     duration: 1000,
        //     horizontalPosition: this.horizontalPosition,
        //     verticalPosition: this.verticalPosition,
        //   });
        // }
        // console.log("_duplicate", this.selectedAttributes);
    }
    get f() {
        return this.subCategoryForm.controls;
    }
    getSubCategoryById() {
        this.subCategory.getSubCategoryById(this.id).subscribe((res) => {
            // console.log("res", res);
            this.subCategoryForm.patchValue({
                name: res.name,
                location: res.location,
                phone: res.phone,
                storeKeeper: res.storeKeeper,
            });
            this.selectedAttributes = [res.storeKeeper];
        }, (err) => {
            console.log("data", err);
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.subCategoryForm.invalid) {
            return;
        }
        let obj = Object.assign(Object.assign({}, this.subCategoryForm.value), { storeKeeper: this.selectedAttributes[0].id });
        this.loading = true;
        this.subCategory.updateSubCategory(this.id, obj).subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                this.router.navigate(["/stores"]);
            },
            error: (error) => {
                console.log("error", error);
            },
        });
    }
};
EditStoreComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["AttributeService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_store_store_service__WEBPACK_IMPORTED_MODULE_6__["SubCategoryService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }
];
EditStoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-edit-store",
        template: _raw_loader_edit_store_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_store_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["AttributeService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_store_store_service__WEBPACK_IMPORTED_MODULE_6__["SubCategoryService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
], EditStoreComponent);



/***/ }),

/***/ "wTWu":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#loginBg {\n  background-image: url('login_bg.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGOztBQUdBO0VBR0UsMkJBQUE7QUFBRjs7QUFHQSxvQkFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luQmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnSW1hZ2VzL2xvZ2luX2JnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQgeyBcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    useJit: true,
    preserveWhitespaces: true
})
    .catch(err => console.log(err));


/***/ }),

/***/ "zdj8":
/*!**************************************************************************!*\
  !*** ./src/app/views/catalogue/edit-product/edit-product.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-list {\n  width: 500px;\n  max-width: 100%;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.text_name {\n  font-size: 16px;\n}\n\n.example-box {\n  padding: 8px 20px;\n  color: rgba(0, 0, 0, 0.87);\n  border: 1px solid #73818f;\n  box-sizing: border-box;\n  border-radius: 33px;\n  margin: 10px 0px;\n  /* border-radius: 2%; */\n  box-shadow: 1px 2px 9px -2px #eae3e3;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VkaXQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUFGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0Usc0RBQUE7QUFERjs7QUFRQTtFQUNFLHNEQUFBO0FBTEYiLCJmaWxlIjoiZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWxpc3Qge1xuICB3aWR0aDogNTAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLy8gYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZXh0X25hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzczODE4ZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgLyogYm9yZGVyLXJhZGl1czogMiU7ICovXG4gIGJveC1zaGFkb3c6IDFweCAycHggOXB4IC0ycHggI2VhZTNlMztcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi8vIC5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gfVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuIl19 */");

/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map