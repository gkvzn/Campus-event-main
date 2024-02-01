"use strict";
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 2213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V0": () => (/* binding */ Api),
/* harmony export */   "Xy": () => (/* binding */ ON_PAGE_ROCORDS),
/* harmony export */   "l4": () => (/* binding */ EndPoint),
/* harmony export */   "xR": () => (/* binding */ Asset)
/* harmony export */ });
/* unused harmony exports ServerAssets, Extensions */
const EndPoint = "http://localhost:8080/api/v1";
const ServerAssets = "http://loclahost:8080/";
// allow Extensions
const Extensions = (/* unused pure expression or super */ null && ([
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/jpg",
    "application/x-zip-compressed"
]));
const Asset = (path)=>{
    return ServerAssets + path;
};
// API URLS
const Api = {
    user_module: {
        // user Api
        auth: {
            reset_password: {
                // reset password
                reset: "/users/email/reset/password",
                verify: "/users/email/verify",
                update_password: "/users/email/reset/password/update"
            },
            sign_in: "/users/signin",
            sign_up: "/users/signup",
            sign_out: "/users/signout",
            verify: "/users/verify"
        },
        settings: {
            profile: "/settings/profile",
            change_password: "/settings/change-password",
            profile_photo: "/settings/profile-photo",
            fcm_on_off: "/settings/fcm-on-off"
        },
        gernal: {
            terms_and_conditions: "/app/get-terms-and-conditions",
            page: "/app/get-page",
            contact_us: "/app/get-contact-us",
            send_contact_us: "/app/send-contact-us"
        }
    },
    // event URls
    events_and_spaces: {
        events: {
            wishlist: {
                add: "/events/wishlist/add",
                get: "/events/wishlist/get",
                remove: "/events/wishlist/remove"
            },
            calendar: {
                add_calendar: "/events/wishlist/calender",
                remove_calendar: "/events/wishlist/remove_calendar",
                get_calender: "/events/wishlist/get_calendars"
            },
            all: "/events/all",
            categories: "/events/categories",
            solo: "/events/item",
            events_sidebar: "/events/sidebar"
        }
    }
};
const ON_PAGE_ROCORDS = {
    SHOP: 16,
    EVENTS: 16
};


/***/ }),

/***/ 7128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J2": () => (/* binding */ update_profile_photo),
/* harmony export */   "Tp": () => (/* binding */ update_guest),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "jb": () => (/* binding */ add_user)
/* harmony export */ });
/* unused harmony exports authSlice, user_info, setCurrentItem, setsearchItems */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    user: null,
    guest_id: null,
    // carts 
    currentItem: null,
    searchItems: null
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        add_user: (state, { payload  })=>{
            state.user = payload;
        },
        update_guest: (state, { payload  })=>{
            state.guest_id = payload;
        // setLocalStorage('user', state.user);
        },
        update_profile_photo: (state, { payload  })=>{
            let user = state.user;
            user.avatar = payload;
            state.user = user;
        },
        user_info: (state, { payload  })=>{
            state.user = payload;
        // setLocalStorage('user', state.user);
        },
        setCurrentItem: (state, { payload  })=>{
            state.currentItem = payload;
        },
        setsearchItems: (state, { payload  })=>{
            state.searchItems = payload;
        }
    }
});
const { add_user , update_guest , update_profile_photo , user_info , setCurrentItem , setsearchItems  } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 1450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2213);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2750);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_1__]);
_request__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const auth_service = {
    reset_password: {
        // reset password
        reset: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.auth.reset_password.reset */ .V0.user_module.auth.reset_password.reset, data),
        verify: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.auth.reset_password.verify */ .V0.user_module.auth.reset_password.verify, data),
        update_password: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.auth.reset_password.update_password */ .V0.user_module.auth.reset_password.update_password, data)
    },
    sign_in: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.auth.sign_in */ .V0.user_module.auth.sign_in, data),
    sign_up: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.auth.sign_up */ .V0.user_module.auth.sign_up, data),
    sign_out: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.auth.sign_out */ .V0.user_module.auth.sign_out, data),
    verify: (params)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.user_module.auth.verify */ .V0.user_module.auth.verify, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth_service);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2750:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2213);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4790);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const request = axios__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    baseURL: _constants_app__WEBPACK_IMPORTED_MODULE_0__/* .EndPoint */ .l4,
    timeout: 16000
});
request.interceptors.request.use((config)=>{
    const _ca = (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.getCookie)("_ca");
    // const locale = i18n.language;
    // config.headers.Authorization =
    config.headers = {
        lang: "en",
        Authorization: `Bearer ${_ca}`,
        ...config.params
    };
    return config;
}, (error)=>errorHandler(error));
function errorHandler(error) {
    if (error?.response) {
        if (error?.response?.status === 400) {
            error?.response?.data?.errors.forEach((err)=>{
                (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__/* .ErrorToast */ .PK)(err);
            });
        } else if (error?.response?.status === 401) {
            // removeCookie("user");
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.deleteCookie)("_ca");
            window.location.replace("/signin");
        }
    }
    return Promise.reject(error.response);
}
request.interceptors.response.use((response)=>response.data, errorHandler);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* binding */ extractDateForEvents),
/* harmony export */   "M0": () => (/* binding */ paginateScroll),
/* harmony export */   "PK": () => (/* binding */ ErrorToast),
/* harmony export */   "Sc": () => (/* binding */ strLimit),
/* harmony export */   "av": () => (/* binding */ create_guest_id),
/* harmony export */   "iT": () => (/* binding */ is_login_or_guest),
/* harmony export */   "yf": () => (/* binding */ expirationDate)
/* harmony export */ });
/* unused harmony exports getToken, priceFormatPercentage, getCurrentMonth, PreviousDays, CurrentTimeSmall, getCurrentLocation, getLocationWithLatLng, nick_names, hasNull, payment_methods, event_payment_methods, workspace_payment_methods, CHECKOUT_TYPES, order_status, order_status_real, timeConverter, extractEndDateofCoupon, createEventAmounts, formatCreatedAtDate, formatDeliveryStatus, parseTimeToEventValue, parseDateToDayjsValue, disabledDate, paymentMethodsConversions, openFileInNewTab, redirectNotification */
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6619);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3291);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9416);
/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1901);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cogo_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);






const customParseFormat = __webpack_require__(4125);
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend(customParseFormat);
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_3___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().tz.setDefault("Asia/Dubai");
const getToken = ()=>{
    return getCookie("_ca");
};
// strlimit
const strLimit = (string = "", limit = 0)=>{
    if (string.length <= limit) {
        return string;
    }
    return string.slice(0, limit) + "...";
};
const priceFormatPercentage = (price)=>{
    return Math.round(price) + "" + " % ";
};
// get current month
const getCurrentMonth = ()=>{
    return dayjs().tz("Asia/Dubai").format("MMMM YYYY");
};
const PreviousDays = (day = 3)=>{
    const previousDays = [];
    for(let i = 0; i < day; i++){
        const previousDay = dayjs().tz("Asia/Dubai").subtract(i + 1, "day");
        const name = previousDay.format("ddd");
        const date = previousDay.format("D");
        previousDays.push({
            name,
            date
        });
    }
    return previousDays;
};
const CurrentTimeSmall = (time)=>{
    const currentTime = dayjs().tz("Asia/Dubai").format("HH");
    // const isLessThan = currentTime.isBefore(comparisonTime);
    return (time.split(":")[0] ?? 24) > currentTime;
};
const ErrorToast = (Message, type = "error", heading = "")=>{
    if (type == "error") {
        cogo_toast__WEBPACK_IMPORTED_MODULE_4___default().error(Message, {
            position: "top-right",
            heading: "Error"
        });
        return false;
    }
    if (type == "success") {
        cogo_toast__WEBPACK_IMPORTED_MODULE_4___default().success(Message, {
            position: "top-right",
            heading: heading
        });
        return false;
    }
};
const getCurrentLocation = async (setFieldValue, set_get_location)=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position)=>{
            const { latitude , longitude  } = position.coords;
            try {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=` + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
                const data = await response.json();
                if (data.results.length > 0) {
                    const result = data.results[0];
                    const placeName = result.formatted_address;
                    const city = result.address_components.find((component)=>component.types.includes("locality"))?.long_name;
                    setFieldValue("city", city);
                    setFieldValue("address_1", placeName);
                    setFieldValue("lat", latitude);
                    setFieldValue("long", longitude);
                }
            } catch (error) {
                console.error("Error retrieving location information:", error);
            } finally{
                set_get_location(false);
            }
        }, (error)=>{
            console.error("Error getting current position:", error);
        });
    } else {
        console.error("Geolocation is not supported by your browser");
    }
};
const getLocationWithLatLng = async (lat, lng, setFieldValue, set_get_location)=>{
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=` + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
        const data = await response.json();
        if (data.results.length > 0) {
            const result = data.results[0];
            const placeName = result.formatted_address;
            const city = result.address_components.find((component)=>component.types.includes("locality"))?.long_name;
            setFieldValue("city", city);
            setFieldValue("address_1", placeName);
        }
    } catch (error) {
        console.error("Error retrieving location information:", error);
    } finally{
        set_get_location(false);
    }
};
// gues id genrate
const create_guest_id = ()=>{
    let prev_id = window.sessionStorage.getItem("guestId");
    if (prev_id == null) {
        let random = Math.floor(Math.random() * 1000000 + 1);
        window.sessionStorage.setItem("guestId", random.toString());
        prev_id = random.toString();
    }
    return prev_id;
// window.sessionStorage.setItem('guestId',Math.floor((Math.random()*1000000)+1))
};
const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 3);
const nick_names = (/* unused pure expression or super */ null && ([
    "Home",
    "Work",
    "Other"
]));
const hasNull = (array)=>{
    // Iterate through the array
    for(let i = 0; i < array.length; i++){
        // Check if the current element is null
        if (array[i] == null) {
            return true; // Found a null element, return true
        }
    }
    // No null element found in the array
    return false;
};
// ex
const is_login_or_guest = (user, guest_id)=>{
    return {
        attr_one: !user?.hasOwnProperty("id") && guest_id != null ? {
            guest_id: guest_id
        } : {},
        attr_two: !user?.hasOwnProperty("id") && guest_id == null ? false : true,
        attr_three: !user?.hasOwnProperty("id") ? false : true
    };
};
// export const payment_methods = ['STRIPE', 'APPLE_PAY', 'GOOGLE_PAY', 'PAYPAL', 'COD']
const payment_methods = (/* unused pure expression or super */ null && ([
    "STRIPE"
]));
const event_payment_methods = (/* unused pure expression or super */ null && ([
    "STRIPE",
    "COTTB"
]));
const workspace_payment_methods = (/* unused pure expression or super */ null && ([
    "STRIPE"
]));
const CHECKOUT_TYPES = {
    STRIPE: "STRIPE",
    APPLE_PAY: "APPLE_PAY",
    GOOGLE_PAY: "GOOGLE_PAY",
    PAYPAL: "PAYPAL",
    COD: "COD",
    CASH_ON_THE_TICKET_BOX: "COTTB"
};
const order_status = [
    {
        "name": "Confirmed",
        "value": "order-confirmed"
    },
    {
        "name": "Processing",
        "value": "order-processed"
    },
    {
        "name": "Shipped",
        "value": "order-shipped"
    },
    {
        "name": "Delivered",
        "value": "order-delivered"
    }
];
const order_status_real = (/* unused pure expression or super */ null && ([
    "order-confirmed",
    "order-processed",
    "order-shipped",
    "order-delivered"
]));
// pageScroll
const paginateScroll = (pageRef)=>{
    if (pageRef.current) pageRef.current.scrollIntoView({
        behavior: "smooth"
    });
};
// convert a a time
const timeConverter = (time)=>{
    const utcTime = dayjs.utc(time, "HH:mm:ss");
    const convertedTime = utcTime.format("hh:mm A");
    return convertedTime;
};
// date extraxt details
const extractDateForEvents = (date)=>{
    const utcDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default().utc(date);
    // Extract day, month, and year
    const day = utcDate.format("DD");
    const month = utcDate.format("MMM");
    const year = utcDate.format("YYYY");
    return {
        day,
        month,
        year
    };
};
const extractEndDateofCoupon = (date)=>{
    const utcDate = dayjs.unix(date);
    // Extract day, month, and year
    const day = utcDate.format("DD");
    const month = utcDate.format("MMM");
    const year = utcDate.format("YYYY");
    return {
        day,
        month,
        year
    };
};
// create event amounts
const createEventAmounts = (event_types, values)=>{
    let subtotal = 0;
    event_types.forEach((item)=>{
        const qty_evaluation = values[`${item.name}_qty`] * item.price;
        subtotal = subtotal + qty_evaluation;
    });
    const total = subtotal - values.discount;
    return {
        subtotal,
        total
    };
};
const formatCreatedAtDate = (createdAtTimestamp)=>{
    const createdAtDate = new Date(createdAtTimestamp);
    const formattedDate = `${createdAtDate.getDate()} ${createdAtDate.toLocaleString("default", {
        month: "short"
    })}, ${createdAtDate.getFullYear()} | ${createdAtDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    })}`;
    return formattedDate;
};
const formatDeliveryStatus = (deliveryStatus)=>{
    // Remove dash and capitalize each word
    const formattedStatus = deliveryStatus.replace(/-/g, " ").replace(/\b\w/g, (char)=>char.toUpperCase());
    return formattedStatus;
};
const parseTimeToEventValue = (timeString)=>{
    const parsedTime = dayjs(timeString, "hh:mm A");
    if (parsedTime.isValid()) return parsedTime;
    return null;
};
const parseDateToDayjsValue = (date)=>{
    const parsedTime = dayjs(date, "YYYY-MM-DD");
    if (parsedTime.isValid()) return parsedTime;
    return null;
};
const disabledDate = (current)=>{
    // Disable dates before today
    return current ? current.isBefore(dayjs().startOf("day")) : false;
};
// string conversions
const paymentMethodsConversions = (method)=>{
    if (CHECKOUT_TYPES.STRIPE == method) return "online";
    if (CHECKOUT_TYPES.CASH_ON_THE_TICKET_BOX == method) return "cash.on.the.ticket.box";
    return method;
};
const openFileInNewTab = async (data, id)=>{
    const blob = new Blob([
        data
    ]);
    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);
    // Create an invisible <a> element to trigger the download
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "Booking_" + id + ".pdf";
    // Set the desired download filename
    // Append the <a> element to the document
    document.body.appendChild(a);
    // Trigger a click event on the <a> element to initiate the download
    a.click();
    // Remove the <a> element and revoke the Blob URL
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
};
const redirectNotification = (from)=>{
    let path = "/";
    if (from == "products") path = "/account/order-history";
    if (from == "events") path = "/account/event-history";
    if (from == "workspaces") path = "/account/workspace-history";
    return path;
};


/***/ })

};
;