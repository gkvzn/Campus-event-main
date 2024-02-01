"use strict";
exports.id = 329;
exports.ids = [329];
exports.modules = {

/***/ 329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lf": () => (/* binding */ useModelGetEventsCalendar),
/* harmony export */   "SK": () => (/* binding */ useModelGetEventsWishlist),
/* harmony export */   "YB": () => (/* binding */ useModelGetSingleEvent),
/* harmony export */   "z7": () => (/* binding */ useModelGetEvents)
/* harmony export */ });
/* unused harmony exports useModelGetContact, useModelGetContactUsData, useModelGetEventCategories, useModelGetEventSidebar */
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4398);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5735);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_app_service__WEBPACK_IMPORTED_MODULE_0__, _services_events_service__WEBPACK_IMPORTED_MODULE_1__]);
([_services_app_service__WEBPACK_IMPORTED_MODULE_0__, _services_events_service__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// get Events
const useModelGetEvents = (data)=>{
    const { events  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.filters);
    if (events.query != "") data.query = events.query;
    data.min = events.min;
    if (events.max != 0) data.max = events.max;
    if (events.date != "") data.date = events.date;
    if (events.time != "") data.time = events.time;
    if (events.interest.length > 0) data.interest = events.interest;
    if (events.category != 0) data.category = events.category;
    if (events.from_date != "") data.from_date = events.from_date;
    if (events.to_date != "") data.to_date = events.to_date;
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "events",
        data
    ], ()=>_services_events_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].all */ .Z.all(data), {
        keepPreviousData: true,
        staleTime: 6 * (60 * 1000)
    });
};
const useModelGetContact = (data)=>{
    return useQuery([
        "contact",
        data
    ], ()=>app_service.gernal.page(data), {
        keepPreviousData: true,
        staleTime: 6 * (60 * 1000)
    });
};
const useModelGetContactUsData = ()=>{
    return useQuery([
        "contactUs"
    ], ()=>app_service.gernal.contact_us(), {
        keepPreviousData: true,
        staleTime: 6 * (60 * 1000)
    });
};
const useModelGetEventCategories = (data)=>{
    return useQuery([
        "events_categories",
        data
    ], ()=>events_service.categories(data), {
        staleTime: 55 * (60 * 1000),
        cacheTime: 60 * (60 * 1000),
        keepPreviousData: true
    });
};
const useModelGetSingleEvent = (data)=>(0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "solo_event",
        data
    ], ()=>_services_events_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].solo */ .Z.solo(data));
const useModelGetEventsWishlist = (enable = true, data = {})=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("events_wishlist", ()=>_services_events_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].wishlist.get */ .Z.wishlist.get(data), {
        enabled: enable
    });
};
const useModelGetEventsCalendar = (enable = true, data = {})=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("events_calendar", ()=>_services_events_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCalender */ .Z.getCalender(data), {
        enabled: enable
    });
};
const useModelGetEventSidebar = ()=>{
    return useQuery([
        "event_sidebar"
    ], ()=>events_service.events_sidebar({}), {
        keepPreviousData: true,
        staleTime: 6 * (60 * 1000)
    });
};

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

/***/ 5735:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2213);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2750);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_1__]);
_request__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const events_service = {
    wishlist: {
        get: (params)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.events_and_spaces.events.wishlist.get */ .V0.events_and_spaces.events.wishlist.get, {
                params
            }),
        add: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.events_and_spaces.events.wishlist.add */ .V0.events_and_spaces.events.wishlist.add, data),
        remove: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.events_and_spaces.events.wishlist.remove */ .V0.events_and_spaces.events.wishlist.remove, {
                data
            })
    },
    addCalendae: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.events_and_spaces.events.calendar.add_calendar */ .V0.events_and_spaces.events.calendar.add_calendar, data),
    getCalender: (params)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.events_and_spaces.events.calendar.get_calender */ .V0.events_and_spaces.events.calendar.get_calender, {
            params
        }),
    removeCalendar: (data)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.events_and_spaces.events.calendar.remove_calendar */ .V0.events_and_spaces.events.calendar.remove_calendar, {
            data
        }),
    all: (params)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.events_and_spaces.events.all */ .V0.events_and_spaces.events.all, {
            params
        }),
    categories: (params)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.events_and_spaces.events.categories */ .V0.events_and_spaces.events.categories, {
            params
        }),
    solo: (params)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.events_and_spaces.events.solo */ .V0.events_and_spaces.events.solo, {
            params
        }),
    events_sidebar: (params)=>_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .Api.events_and_spaces.events.events_sidebar */ .V0.events_and_spaces.events.events_sidebar, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events_service);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;