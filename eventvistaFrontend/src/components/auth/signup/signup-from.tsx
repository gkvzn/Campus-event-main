import React from "react";
import { useFormik } from "formik";

import ErrorMsg from "@/utils/forms/error-msg";
import Link from "next/link";
import { useRouter } from "next/router";
// import { requestForToken } from "../../../Helpers/Firebase";
import { Button } from "@/utils/forms/button";
import { useSignUpAction } from "@/actions/auth.action";
import PhoneInput from "react-phone-number-input";
import useValidationSchemaHook from "@/utils/validation-schema";

const SignUpForm: React.FC = () => {
  const { mutate: user_signup, isLoading: user_signup_loading } =
    useSignUpAction();

  const { signInSchema } = useValidationSchemaHook();

  // use formik
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      gender: "",
      password: "",
      re_password: "",
      terms_and_conditions: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values, { resetForm }) => {
      // const token = await requestForToken();
      // if (token === undefined) token = null
      user_signup(values, {
        onSuccess(data) {
          if (data.flag == 1) resetForm();
        },
      });
    },
  });

  return (
    <form onSubmit={handleSubmit} className="pt-3 pb-4">
      {/* name */}
      <div className="tp-mail">
        <label htmlFor="name" className="loginEmailLabel">
          Name
        </label>
        <input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter your name"
          id="name"
        />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      {/* email */}
      <div className="tp-mail">
        <label htmlFor="email" className="loginEmailLabel">
          Email Address
        </label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter your email address"
          id="email"
        />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      {/* mobile number */}
      <div className="tp-mail">
        <label htmlFor="phone" className="loginEmailLabel">
          Mobile Number
        </label>
        <PhoneInput
          className="form-control"
          international
          defaultCountry="AE"
          id="phone"
          value={values.phone}
          onChange={(e) => setFieldValue("phone", e)}
        />

        {touched.phone && <ErrorMsg error={errors.phone} />}
      </div>
      {/* Gender */}
      <div className="tp-mail">
        <label htmlFor="gender" className="loginEmailLabel">
          Gender
        </label>
        <select
          className={`${values.gender == "" && "light"}`}
          onChange={handleChange}
          onBlur={handleBlur}
          id="gender"
        >
          <option className="light" value="" disabled selected>
            Select
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        {touched.gender && <ErrorMsg error={errors.gender} />}
      </div>

      {/* password */}
      <div className="tp-mail">
        <label htmlFor="password" className="loginEmailLabel">
          Password
        </label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          placeholder="Enter your password"
          id="password"
        />
        {touched.password && <ErrorMsg error={errors.password} />}
      </div>
      {/* repass */}
      <div className="tp-mail">
        <label htmlFor="re_password" className="loginEmailLabel">
          Confirm Password
        </label>
        <input
          value={values.re_password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          placeholder="Enter your confirm password"
          id="re_password"
        />
        {touched.re_password && <ErrorMsg error={errors.re_password} />}
      </div>
      <div className="tp-forgot-password d-flex justify-content-between">
        <div className="checkbox">
          <input
            value={values.terms_and_conditions}
            onChange={handleChange}
            onBlur={handleBlur}
            type="checkbox"
            id="terms_and_conditions"
          />
          <label
            htmlFor="terms_and_conditions"
            className="loginEmailLabel px-2"
          >
            {" "}
            I Agree to{" "}
            <Link href={"/terms-and-condition"}>
              Terms and Condition
            </Link> & <Link href={"/privacy-policy"}>Privacy Policy</Link>{" "}
          </label>
          {touched.terms_and_conditions && (
            <>
              <ErrorMsg error={errors.terms_and_conditions} />
            </>
          )}
        </div>
      </div>
      <div className="tp-login-button mb-3">
        {/* <button className="tp-btn-yellow w-100" type="submit"> <Spinner class='text-dark' /> </button> */}
        <Button
          class="tp-btn-yellow w-100"
          Loader={user_signup_loading}
          Text="Register"
          type="submit"
          spinnerClass="text-light"
        />
      </div>
      <div className="tp-signup d-flex justify-content-center">
        <div className="signin">
          Already have an account? <Link href="/signin">Login</Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
