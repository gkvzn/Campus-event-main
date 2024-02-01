"use strict";
exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 7642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/social-links.tsx


const SocialLinks = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.facebook.com/",
                className: "",
                target: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/assets/media/icons/footer/facebook.svg",
                    alt: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.instagram.com/",
                className: "",
                target: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/assets/media/icons/footer/instagram.svg",
                    alt: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.youtube.com/",
                className: "",
                target: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/assets/media/icons/footer/youtube.svg",
                    alt: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://pk.linkedin.com/",
                className: "",
                target: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/assets/media/icons/footer/linkdin.svg",
                    alt: ""
                })
            })
        ]
    });
};
/* harmony default export */ const social_links = (SocialLinks);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layout/footer/footer.jsx




const footer_content = {
    contact_info: [
        {
            id: 1,
            title: "Quick Links",
            support_info: [
                " 27 Division St, New York, NY 10002, USA",
                "(+880)52462545632",
                " support@example.com"
            ],
            office_time: "Office Hours: 9AM - 4PM",
            off_day: " Friday - Wekend Day"
        }
    ],
    copy_right_text: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            "\xa9 Copyright \xa9 ",
            new Date().getFullYear(),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: " Theme_pure"
            }),
            ".",
            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                children: " All Rights Reserved Copyright"
            })
        ]
    })
};
const { footer_info , copy_right_text  } = footer_content;
const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-area theme-bg pt-40",
                    style: {
                        background: "#282f37"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-5 col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-widget footer-col-1 mb-20 wow fadeInUp",
                                        "data-wow-delay": ".2s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "footer-widget__title mb-20",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "index",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "footer-widget__logo",
                                                        src: "/assets/images/logo.jpg",
                                                        alt: "logo"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "footer-widget__social",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(social_links, {})
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-3 col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `footer-widget mb-20 wow fadeInUp`,
                                        "data-wow-delay": ".4s",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-widget__links",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "",
                                                            children: "Events"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/about-us",
                                                            children: "About Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/contact-us",
                                                            children: "Contact Us"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-4 col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-widget footer-col-4 mb-20 wow fadeInUp",
                                        "data-wow-delay": ".8s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "footer-widget__title mb-20 SourceSansPro",
                                                children: "Newsletter"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Get updated by upcoming events and products"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-area-bottom theme-bg",
                    style: {
                        background: "#2e363f"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-12 col-lg-12 col-md-12 col-12 ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-widget__copyright footer-bottom-border ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Ⓒ All Rights Reserved."
                                    })
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const footer = (Footer);


/***/ })

};
;