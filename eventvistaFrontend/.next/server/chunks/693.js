"use strict";
exports.id = 693;
exports.ids = [693];
exports.modules = {

/***/ 9015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_forms_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(524);


const Button = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: props.class,
            type: props.type,
            disabled: props.disabled ? props.disabled : props.Loader,
            onClick: props.onClick,
            children: props.Loader === false ? props.Text : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_forms_spinner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                class: `text-light ${props.spinnerClass}`
            })
        })
    });
};


/***/ }),

/***/ 4640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ErrorMsg = ({ error  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: error != undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            style: {
                color: "red"
            },
            children: error
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMsg);


/***/ }),

/***/ 524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Spinner = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `spinner-border ` + props.class,
        style: {
            verticalAlign: "middle"
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);


/***/ }),

/***/ 1587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const useValidationSchemaHook = ()=>{
    const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    const aboutSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("name"),
        email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email().label("Email"),
        msg: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(20).label("Message")
    });
    const reviewSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("Name"),
        email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email().label("Email"),
        review: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(20).label("Review")
    });
    // { name: "", email: "", phone: "", gender: "", password: "", re_password: "", city: "", terms_and_conditions: "" }
    const signupSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(5).max(50).label("name"),
        email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("email"),
        phone: yup__WEBPACK_IMPORTED_MODULE_0__.string().matches(phoneRegExp, "phone number is not valid").required().min(9).max(15).label("phone"),
        gender: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("gender"),
        city: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("city"),
        password: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6).required(),
        re_password: yup__WEBPACK_IMPORTED_MODULE_0__.string().oneOf([
            yup__WEBPACK_IMPORTED_MODULE_0__.ref("password"),
            ""
        ]).required(),
        terms_and_conditions: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("Terms & Conditions")
    });
    const signInSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email().label("Email"),
        password: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(3).label("Password")
    });
    const resetPasswordSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email().label("email")
    });
    const updatePasswordSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        password: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6).required(),
        repeat_password: yup__WEBPACK_IMPORTED_MODULE_0__.string().oneOf([
            yup__WEBPACK_IMPORTED_MODULE_0__.ref("password"),
            ""
        ]).required()
    });
    // otp schema
    const otpSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        otp: yup__WEBPACK_IMPORTED_MODULE_0__.number().required().label("Otp")
    });
    const contactSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("Name"),
        email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email().label("Email"),
        msg: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(20).label("Message")
    });
    // change passwor schema
    const ChangePasswordSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        old_password: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(),
        new_password: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6).required(),
        repeat_new_password: yup__WEBPACK_IMPORTED_MODULE_0__.string().oneOf([
            yup__WEBPACK_IMPORTED_MODULE_0__.ref("new_password"),
            ""
        ]).required()
    });
    const ContactUsFormSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(3).max(22).label("Name"),
        email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().max(40).label("Email"),
        phone: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(3).max(50).label("City"),
        subject: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().max(100).label("subject"),
        message: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().max(500).label("Message")
    });
    //contact us schema
    const SchemaContactUs = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        first_name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(3).max(20).label("First name"),
        last_name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(3).max(20).label("Last Name"),
        email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email().label("Email"),
        phone: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(3).max(20).label("Phone"),
        message: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(10).max(400).label("Message")
    });
    // products
    // profileschema
    const profileSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(5).max(50).label("name"),
        phone: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(5).max(15).label("phone"),
        gender: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("gender"),
        city: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("city")
    });
    // add review Schema
    const addReviewSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        rating: yup__WEBPACK_IMPORTED_MODULE_0__.number().required().min(1, "Please Select The Rating.").max(5).label("Rating"),
        reviews: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please Fill Message Field.").min(10).max(1000).label("Message")
    });
    return {
        aboutSchema,
        reviewSchema,
        signupSchema,
        signInSchema,
        resetPasswordSchema,
        updatePasswordSchema,
        otpSchema,
        contactSchema,
        ChangePasswordSchema,
        ContactUsFormSchema,
        SchemaContactUs,
        profileSchema,
        addReviewSchema
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useValidationSchemaHook);


/***/ })

};
;