"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 3081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSticky = ()=>{
    const [sticky, setSticky] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const stickyHeader = ()=>{
        if (window.scrollY > 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener("scroll", stickyHeader);
    }, []);
    return {
        sticky
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSticky);


/***/ }),

/***/ 2085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Al": () => (/* binding */ useSignOutAction),
/* harmony export */   "N3": () => (/* binding */ useResetPasswordAction),
/* harmony export */   "Oc": () => (/* binding */ useResetPasswordVerifyAction),
/* harmony export */   "ec": () => (/* binding */ useSignInAction),
/* harmony export */   "v2": () => (/* binding */ useSignUpAction),
/* harmony export */   "xu": () => (/* binding */ useUpdatePasswordAction)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1450);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_hook_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5213);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth_service__WEBPACK_IMPORTED_MODULE_0__]);
_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// useResetPasswordAction
const useResetPasswordAction = ()=>(0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].reset_password.reset */ .Z.reset_password.reset, {});
// useResetPasswordVerifyAction
const useResetPasswordVerifyAction = ()=>(0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].reset_password.verify */ .Z.reset_password.verify, {});
// useUpdatePasswordAction
const useUpdatePasswordAction = ()=>{
    const { after_signin  } = (0,_hooks_hook_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].reset_password.update_password */ .Z.reset_password.update_password, {
        onSuccess: after_signin
    });
};
// useSignInAction
const useSignInAction = ()=>{
    const { after_signin  } = (0,_hooks_hook_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sign_in */ .Z.sign_in, {
        onSuccess: after_signin
    });
};
// useSignUpAction
const useSignUpAction = ()=>{
    const { after_signin  } = (0,_hooks_hook_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sign_up */ .Z.sign_up, {
        onSuccess: after_signin
    });
};
// useSignUpAction
const useSignOutAction = ()=>(0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sign_out */ .Z.sign_out, {});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9500:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_log_out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9809);
/* harmony import */ var _layout_header_mobile_menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8869);
/* harmony import */ var _layout_header_nav_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5394);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_log_out__WEBPACK_IMPORTED_MODULE_1__]);
_components_log_out__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Sidebar = ({ isActive , setIsActive  })=>{
    const { user , guest_id  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.auth);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `tpsideinfo tp-side-info-area ${isActive ? "tp-sidebar-opened" : ""}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setIsActive(false),
                        className: "tpsideinfo__close",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fal fa-times"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tpsideinfo__logo mb-40",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/assets/images/logo.jpg",
                                alt: "logo"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mobile-menu mean-container d-block d-lg-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mean-bar",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header_mobile_menus__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tpsideinfo__content mb-60",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header_nav_menu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "mobile-menu-login-signup-and-langugage side-icons",
                                children: [
                                    user?.hasOwnProperty("id") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_log_out__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    user?.hasOwnProperty("id") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "tp-bt-btn-banner ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                className: "tp-bt-btn auth-icon-div mr",
                                                href: "/wishlist",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa-solid fa-heart"
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    user?.hasOwnProperty("id") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "tp-bt-btn-banner",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "dropdown",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "tp-bt-btn auth-icon-div mr",
                                                    style: {
                                                        padding: "10px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "",
                                                            type: "button",
                                                            "data-bs-toggle": "dropdown",
                                                            "aria-expanded": "false",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fa-solid fa-user"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: "dropdown-menu shadow-lg account logout ",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                    className: "dropdown-item",
                                                                    href: "/account/profile",
                                                                    children: "Account"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                    className: "dropdown-item",
                                                                    href: "",
                                                                    children: "Account"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }) : ""
                                ]
                            }),
                            !user?.hasOwnProperty("id") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mobile-menu-login-signup-and-langugage mt-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "tp-bt-btn-banner ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "tp-bt-btn mr",
                                            href: "",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa-solid fa-user"
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setIsActive(false),
                className: `body-overlay ${isActive ? "opened" : ""}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9809:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_features_auth_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7128);
/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2085);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_auth_action__WEBPACK_IMPORTED_MODULE_6__]);
_actions_auth_action__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import { requestForToken } from "../../../Helpers/Firebase"
// import { add_user } from "../../../redux/features/auth-slice"




const LogOutComponent = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();
    // const { user, guest_id } = useSelector((state: RootState) => state.auth)
    const { mutate: signOut  } = (0,_actions_auth_action__WEBPACK_IMPORTED_MODULE_6__/* .useSignOutAction */ .Al)();
    // /logout
    const Logout = async ()=>{
        // const token = await requestForToken();
        // if (token === undefined) token = null
        // let cred = {}
        // if (token != null) cred.fcm_token = token
        signOut({}, {
            onSuccess (data) {
                if (data != null && data.flag == 1) {
                    dispatch((0,_redux_features_auth_slice__WEBPACK_IMPORTED_MODULE_5__/* .add_user */ .jb)({}));
                    (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.deleteCookie)("_ca");
                    queryClient.removeQueries();
                    router.push("/");
                    window.location.reload();
                }
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: "cursor-pointer",
        onClick: ()=>{
            Logout();
        },
        children: "Logout"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogOutComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_features_auth_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7128);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4790);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);





const useAuth = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const after_signin = async (data)=>{
        if (data == null) return false;
        if (data.flag === 1) {
            dispatch((0,_redux_features_auth_slice__WEBPACK_IMPORTED_MODULE_0__/* .add_user */ .jb)(data.user));
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("_ca", data.access_token, {
                expires: _utils_helper__WEBPACK_IMPORTED_MODULE_1__/* .expirationDate */ .yf
            });
            (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__/* .ErrorToast */ .PK)(data?.message ?? "", "success");
            if (router.back) {
                router.back();
                return false;
            }
            await router.push("/");
        }
    };
    return {
        after_signin
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuth);


/***/ }),

/***/ 7265:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nav_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5394);
/* harmony import */ var _hooks_use_sticky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3081);
/* harmony import */ var _common_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9500);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_log_out__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9809);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4790);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_sidebar__WEBPACK_IMPORTED_MODULE_5__, _components_log_out__WEBPACK_IMPORTED_MODULE_7__]);
([_common_sidebar__WEBPACK_IMPORTED_MODULE_5__, _components_log_out__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Header = ({ type =""  })=>{
    const { sticky  } = (0,_hooks_use_sticky__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { user , guest_id  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.auth);
    const { carts_qty  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.global);
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const attrs = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_8__/* .is_login_or_guest */ .iT)(user, guest_id);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "header-mob-sticky",
                className: `tp-mobile-header-area pt-15 pb-15 d-xl-none ${sticky ? "header-sticky" : ""} `,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-4 col-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "tp-mob-logo",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/assets/images/logo.jpg",
                                            alt: "logo"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-8 col-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "tp-mobile-bar d-flex align-items-center justify-content-end",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tp-bt-btn-banner d-none d-md-block d-xl-none mr-30"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>setIsActive(true),
                                            className: "tp-menu-toggle mx-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "far fa-bars"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: "d-none d-xl-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `header__area tp-home-one ${sticky ? "header-sticky" : ""}   ${type != "home" ? "header-no-home" : ""}`,
                    id: "header-sticky",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-xxl-8 col-lg-8 d-flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "logo",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/assets/images/logo.jpg",
                                                    alt: "logo"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "main-menu",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                id: "mobile-menu",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nav_menu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-xxl-4 col-lg-4 d-flex align-items-center justify-content-end",
                                    children: [
                                        user?.hasOwnProperty("id") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "tp-bt-btn-banner ",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        className: "tp-bt-btn auth-icon-div mr",
                                                        href: "/wishlist",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa-solid fa-heart"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "tp-bt-btn-banner ",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        className: "tp-bt-btn auth-icon-div mr",
                                                        href: "/calender",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-calendar"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        user?.hasOwnProperty("id") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "tp-bt-btn-banner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "dropdown",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "tp-bt-btn auth-icon-div mr",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                className: "",
                                                                type: "button",
                                                                "data-bs-toggle": "dropdown",
                                                                "aria-expanded": "false",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa-solid fa-user"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "dropdown-menu account logout ",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "first-li",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "/account/profile",
                                                                            children: "Account"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "second-li",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_log_out__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tp-bt-btn-banner ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "tp-bt-btn mr",
                                                href: "/signin",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa-solid fa-user"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_sidebar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isActive: isActive,
                setIsActive: setIsActive
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu_data = [
    {
        id: 1,
        mega_menu: false,
        has_dropdown: false,
        title: "Home",
        link: "/",
        active: ""
    },
    {
        id: 2,
        mega_menu: false,
        has_dropdown: false,
        title: "Events",
        link: "view-all-events",
        active: ""
    },
    {
        id: 3,
        mega_menu: false,
        has_dropdown: false,
        title: "About",
        link: "about-us",
        active: ""
    },
    {
        id: 4,
        mega_menu: false,
        has_dropdown: false,
        title: "Contact Us",
        link: "/contact-us",
        active: ""
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu_data);


/***/ }),

/***/ 8869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6864);



// internal

const MobileMenus = ()=>{
    const [navTitle, setNavTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    //openMobileMenu
    const openMobileMenu = (menu)=>{
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: "mean-nav",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenus);


/***/ }),

/***/ 5394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6864);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





const NavMenu = ({ num =false  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: _menu_data__WEBPACK_IMPORTED_MODULE_3__/* ["default"].map */ .Z.map((menu, index)=>menu.has_dropdown ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "has-dropdown",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: `${router.asPath == menu.link && "active"}`,
                            href: menu.link,
                            children: [
                                num && index <= 9 ? `0${index + 1 + "."}` : num && index + 1 + ".",
                                menu.title
                            ]
                        }),
                        menu.has_dropdown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "sub-menu",
                            children: menu.sub_menus && menu.sub_menus.map((sub_m, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: sub_m.link,
                                        children: sub_m.title
                                    })
                                }, i))
                        })
                    ]
                }, menu.id) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: `${router.asPath == menu.link && "active"}`,
                        href: menu.link,
                        children: [
                            num && index <= 9 ? `0${index + 1 + "."}` : num && index + 1 + ".",
                            menu.title
                        ]
                    })
                }, menu.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMenu);


/***/ })

};
;