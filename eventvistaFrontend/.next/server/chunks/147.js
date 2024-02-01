"use strict";
exports.id = 147;
exports.ids = [147];
exports.modules = {

/***/ 3191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const SEO = ({ pageTitle  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: pageTitle && `${pageTitle}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    httpEquiv: "x-ua-compatible",
                    content: "ie=edge"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: "inabudhabi"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "icon",
                    href: "/assets/images/logo.jpg"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);


/***/ }),

/***/ 2883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/use-sticky.js
var use_sticky = __webpack_require__(3081);
;// CONCATENATED MODULE: ./hooks/scroll-to-top.js



const ScrollToTop = ()=>{
    const { sticky  } = (0,use_sticky/* default */.Z)();
    const [showScroll, setShowScroll] = (0,external_react_.useState)(false);
    const checkScrollTop = ()=>{
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", checkScrollTop);
        return ()=>window.removeEventListener("scroll", checkScrollTop);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            onClick: scrollTop,
            className: `scroll-top scroll-to-target ${sticky ? "open" : ""}`,
            "data-target": "html",
            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "fas fa-angle-up"
            })
        })
    });
};
/* harmony default export */ const scroll_to_top = (ScrollToTop);

;// CONCATENATED MODULE: ./utils/utils.js
const animationCreate = ()=>{
    if (false) {}
    new WOW.WOW({
        live: false
    }).init();
};

;// CONCATENATED MODULE: ./src/layout/wrapper.jsx




const Wrapper = ({ children  })=>{
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            animationCreate();
        }, 500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(scroll_to_top, {})
        ]
    });
};
/* harmony default export */ const wrapper = (Wrapper);


/***/ })

};
;