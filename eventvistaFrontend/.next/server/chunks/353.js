"use strict";
exports.id = 353;
exports.ids = [353];
exports.modules = {

/***/ 7271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IL": () => (/* binding */ useProfileAction),
/* harmony export */   "Mb": () => (/* binding */ useContactUsAction),
/* harmony export */   "kx": () => (/* binding */ useProfilePhotoAction)
/* harmony export */ });
/* unused harmony exports useChangePasswordAction, useFcmOnOffAction, useSendContactusAction */
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4398);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_app_service__WEBPACK_IMPORTED_MODULE_0__]);
_services_app_service__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// profile
const useProfileAction = ()=>(0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_services_app_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].settings.profile */ .Z.settings.profile, {});
// change_password
const useChangePasswordAction = ()=>useMutation(app_service.settings.change_password, {});
// profile_photo
const useProfilePhotoAction = ()=>(0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_services_app_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].settings.profile_photo */ .Z.settings.profile_photo, {});
// fcm_on_off
const useFcmOnOffAction = ()=>useMutation(app_service.settings.fcm_on_off, {});
// send_contact_us
const useSendContactusAction = ()=>useMutation(app_service.gernal.send_contact_us, {});
const useContactUsAction = ()=>(0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_services_app_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gernal.send_contact_us */ .Z.gernal.send_contact_us, {});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4398:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2213);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2750);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_1__]);
_request__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const app_service = {
    settings: {
        profile: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.settings.profile */ .V0.user_module.settings.profile, data),
        change_password: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.settings.change_password */ .V0.user_module.settings.change_password, data),
        profile_photo: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.settings.profile_photo */ .V0.user_module.settings.profile_photo, data),
        fcm_on_off: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.settings.fcm_on_off */ .V0.user_module.settings.fcm_on_off, data)
    },
    gernal: {
        terms_and_conditions: (params)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.gernal.terms_and_conditions */ .V0.user_module.gernal.terms_and_conditions, {
                params
            }),
        page: (params)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.gernal.page */ .V0.user_module.gernal.page, {
                params
            }),
        contact_us: (params)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.gernal.contact_us */ .V0.user_module.gernal.contact_us, {
                params
            }),
        send_contact_us: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.gernal.send_contact_us */ .V0.user_module.gernal.send_contact_us, data)
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app_service);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const InputBox = ({ col ="col-md-12" , required =true , label , type ="text" , placeholder , value , onChange , disabled , name , id , label_btn , addicon =false , btnonClick , label_class =""  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: col,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "checkout-form-list p-relative",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex justify-content-between",
                    children: [
                        label && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: label_class,
                            children: [
                                label,
                                " ",
                                required && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "required",
                                    children: "*"
                                })
                            ]
                        }),
                        label_btn && label_btn
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    required: required,
                    type: type,
                    name: name,
                    id: id,
                    value: value,
                    placeholder: placeholder,
                    disabled: disabled,
                    onChange: onChange
                }),
                addicon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    onClick: btnonClick,
                    className: "location-btn",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/media/icons/location.svg",
                        alt: ""
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputBox);


/***/ }),

/***/ 3982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const HeadBanner = ({ title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "breadcrumb__area breadcrumb__overlay",
            style: {
                backgroundImage: `url(/assets/images/bg.jpeg)`
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "tp-breadcrumb__title",
                children: title
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadBanner);


/***/ })

};
;