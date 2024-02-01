import React, { useEffect } from "react";
import { useFormik } from "formik";
import useValidationSchemaHook from "@/utils/validation-schema";

import ErrorMsg from "@/utils/forms/error-msg";
import Link from "next/link";
import { requestForToken } from "../../../constants/firebase";
import { Button } from "@/utils/forms/button";
import { useSignInAction } from "@/actions/auth.action";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const SigninForm: React.FC = () => {
  const { user, guest_id } = useSelector((state: RootState) => state.auth);

  const { push } = useRouter();
  useEffect(() => {
    // Check if user exists and redirect if needed
    if (user) {
      push("/");
    }
  }, [user]);


  const { signInSchema } = useValidationSchemaHook();

  const { mutate: SignInAction, isLoading } = useSignInAction();

  const initialVal: any = { email: "", password: "", guest_id: guest_id };
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: initialVal,
      validationSchema: signInSchema,
      onSubmit: async (values, { resetForm }) => {
        let token = await requestForToken();
        if (token === undefined) {
          token = null;
          delete values.fcm_token;
        }
        if (token != undefined && token != null) values.fcm_token = token;
        SignInAction(values);
        resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
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
        {touched.email && <ErrorMsg error={errors.email as string} />}
      </div>
      <div className="tp-mail">
        <label htmlFor="Password" className="loginEmailLabel">
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
        {touched.password && <ErrorMsg error={errors.password as string} />}
      </div>
      <div className="tp-forgot-password d-flex justify-content-between">
        <div className="checkbox">
          <input
            type="checkbox"
            id="Remember"
            name="fav_language"
            value="Remember"
          />{" "}
          <label htmlFor="Remember" className="loginEmailLabel">
            Remember Me
          </label>
        </div>
        <div className="forgot">
          <Link href="/forget-password">Forget Password?</Link>
        </div>
      </div>
      <div className="tp-login-button mb-3">
        {/* <button className="tp-btn-yellow w-100" type="submit"> <Spinner class='text-dark' /> </button> */}
        <Button
          class="tp-btn-yellow w-100"
          Loader={isLoading}
          Text="Login"
          type="submit"
          spinnerClass="text-light"
        />
      </div>
      <div className="tp-signup d-flex justify-content-center">
        <div className="signin">
          Don’t have an account? <Link href="/signup">Sign up</Link>
        </div>
      </div>
    </form>
  );
};

export default SigninForm;
