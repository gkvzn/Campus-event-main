"use strict";
exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 9588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ShareComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);




const ShareComponent = ({ ShowModelVisible , setModalVisibility , facebookShare , linkedInShare , twitterShare , whatsappShare  })=>{
    const handleClose = ()=>{
        setModalVisibility(false);
    };
    const handleShow = ()=>{
        setModalVisibility(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Modal, {
            show: ShowModelVisible,
            onHide: handleClose,
            centered: true,
            backdrop: "static",
            onBackdropClick: ()=>handleClose(),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Modal.Header, {
                    onClick: ()=>handleClose(),
                    style: {
                        cursor: "pointer",
                        fontSize: "25px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fa fa-close"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Modal.Body, {
                    className: "modal-body pt-40 pb-40 d-flex justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "profileicons d-flex justify-content-around detailed-share-icons-main-div",
                            style: {
                                width: "90%"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon-div m-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: facebookShare,
                                        target: "_blank",
                                        id: "facebook-share",
                                        className: "",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                fontSize: "27px",
                                                color: "#7B1717"
                                            },
                                            className: "fa-brands fa-facebook"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon-div m-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: whatsappShare,
                                        target: "_blank",
                                        id: "facebook-share",
                                        className: "",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                fontSize: "27px",
                                                color: "#7B1717"
                                            },
                                            className: "fa-brands fa-whatsapp"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon-div m-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: linkedInShare,
                                        target: "_blank",
                                        id: "whatsapp-share",
                                        className: "",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            width: "28",
                                            height: "28",
                                            viewBox: "0 0 20 20",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                                    "clip-path": "url(#clip0_171_2630)",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        "fill-rule": "evenodd",
                                                        "clip-rule": "evenodd",
                                                        d: "M0.833985 2.36468C0.833985 1.95845 0.995356 1.56887 1.2826 1.28162C1.56984 0.994381 1.95943 0.83301 2.36565 0.83301H17.634C17.8353 0.832681 18.0347 0.872062 18.2208 0.948899C18.4068 1.02574 18.5759 1.13852 18.7184 1.28079C18.8608 1.42306 18.9738 1.59203 19.0508 1.77802C19.1278 1.96401 19.1674 2.16336 19.1673 2.36468V17.633C19.1675 17.8344 19.1281 18.0338 19.0511 18.2199C18.9742 18.4059 18.8613 18.575 18.719 18.7174C18.5767 18.8598 18.4076 18.9728 18.2216 19.0498C18.0356 19.1269 17.8362 19.1665 17.6348 19.1663H2.36565C2.16444 19.1663 1.9652 19.1267 1.77932 19.0497C1.59343 18.9726 1.42454 18.8598 1.2823 18.7174C1.14007 18.5751 1.02726 18.4062 0.950337 18.2202C0.873412 18.0343 0.833875 17.8351 0.833985 17.6338V2.36468ZM8.09065 7.82301H10.5732V9.06968C10.9315 8.35301 11.8482 7.70801 13.2257 7.70801C15.8665 7.70801 16.4923 9.13551 16.4923 11.7547V16.6063H13.8198V12.3513C13.8198 10.8597 13.4615 10.018 12.5515 10.018C11.289 10.018 10.764 10.9255 10.764 12.3513V16.6063H8.09065V7.82301ZM3.50732 16.4922H6.18065V7.70801H3.50732V16.4913V16.4922ZM6.56315 4.84301C6.56819 5.0719 6.52746 5.2995 6.44335 5.51244C6.35924 5.72538 6.23344 5.91937 6.07334 6.08304C5.91324 6.2467 5.72207 6.37674 5.51103 6.46552C5.29999 6.55429 5.07335 6.60002 4.8444 6.60002C4.61545 6.60002 4.38881 6.55429 4.17777 6.46552C3.96674 6.37674 3.77556 6.2467 3.61546 6.08304C3.45536 5.91937 3.32956 5.72538 3.24545 5.51244C3.16134 5.2995 3.12061 5.0719 3.12565 4.84301C3.13555 4.39372 3.32097 3.96617 3.64222 3.65192C3.96347 3.33766 4.395 3.16169 4.8444 3.16169C5.2938 3.16169 5.72533 3.33766 6.04658 3.65192C6.36783 3.96617 6.55326 4.39372 6.56315 4.84301Z",
                                                        fill: "#7B1717"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                                        id: "clip0_171_2630",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                            width: "20",
                                                            height: "20",
                                                            fill: "white"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon-div m-3 detailed-linked-in-id",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: twitterShare,
                                        target: "_blank",
                                        id: "twitter-share",
                                        className: "",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            width: "42",
                                            height: "37",
                                            viewBox: "0 0 30 30",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM17.7563 9.80713C17.7637 9.92188 17.7637 10.0415 17.7637 10.1587C17.7637 13.7427 15.0342 17.8711 10.0464 17.8711C8.5083 17.8711 7.08252 17.4243 5.88135 16.6553C6.10107 16.6797 6.31104 16.6895 6.53565 16.6895C7.80518 16.6895 8.97217 16.2598 9.90234 15.5322C8.71094 15.5078 7.70996 14.7266 7.36816 13.6523C7.78564 13.7134 8.16162 13.7134 8.59131 13.6035C7.97785 13.4789 7.42645 13.1457 7.0308 12.6606C6.63515 12.1755 6.41964 11.5684 6.4209 10.9424V10.9082C6.77979 11.1108 7.20215 11.2354 7.64404 11.2524C7.27256 11.0049 6.96792 10.6695 6.75711 10.276C6.5463 9.88244 6.43585 9.443 6.43555 8.99658C6.43555 8.49121 6.56738 8.02979 6.8042 7.62939C7.48511 8.46762 8.33479 9.15318 9.29801 9.64152C10.2612 10.1299 11.3164 10.41 12.395 10.4639C12.0117 8.62061 13.3887 7.12891 15.0439 7.12891C15.8252 7.12891 16.5283 7.45605 17.0239 7.9834C17.6367 7.86865 18.2227 7.63916 18.7451 7.33154C18.5425 7.95898 18.1177 8.48877 17.5537 8.82324C18.1006 8.76465 18.6279 8.61328 19.1162 8.40088C18.7476 8.94287 18.2861 9.42383 17.7563 9.80713Z",
                                                fill: "#7B1717"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 7509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LC": () => (/* binding */ whatsappShareUrl),
/* harmony export */   "mk": () => (/* binding */ facebookShareUrl),
/* harmony export */   "nv": () => (/* binding */ twitterShareUrl),
/* harmony export */   "tQ": () => (/* binding */ linkedInShareUrl)
/* harmony export */ });
// shareConstants.ts
const baseAppUrl = "\"http://localhost:3000\";";
const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${baseAppUrl}`;
const twitterShareUrl = `https://twitter.com/intent/tweet?url=${baseAppUrl}`;
const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${baseAppUrl}}`;
const whatsappShareUrl = `https://api.whatsapp.com/send?text=${baseAppUrl}`;


/***/ })

};
;