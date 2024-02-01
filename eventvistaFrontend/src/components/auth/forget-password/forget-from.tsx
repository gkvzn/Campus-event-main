import React, { useState } from "react";
import { useFormik } from "formik";
import useValidationSchemaHook from "@/utils/validation-schema";
import ErrorMsg from "@/utils/forms/error-msg";
import Link from "next/link";
import { useRouter } from "next/router";
// import { requestForToken } from "../../../Helpers/Firebase";
import { Button } from "@/utils/forms/button";
import { useResetPasswordAction } from "@/actions/auth.action";
import OtpForm from "./otp-form";
import NewPasswordForm from "./new-password-form";

const FogetForm: React.FC = () => {
  const { mutate: resetPasswordAction, isLoading: resetPasswordLoading } =
    useResetPasswordAction();

  // fomrs
  const { resetPasswordSchema } = useValidationSchemaHook();

  const [activity, setactivity] = useState<string>("email");

  const [otp, setOtp] = useState<string>("");

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { email: "" },
      validationSchema: resetPasswordSchema,
      onSubmit: async (values, { resetForm }) => {
        // const token = await requestForToken();
        // if (token === undefined) token = null
        const token = "";
        resetPasswordAction(values, {
          onSuccess(data) {
            if (data.flag == 1) setactivity("otp");
          },
        });
      },
    });

  // useEffect(() => {
  //   if (_ca != undefined) {
  //     router.push('/')
  //   }
  // }, [])

  // handleResetPass

  return (
    <>
      {activity == "email" && (
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
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>

          <div className="tp-login-button pt-30 mb-3">
            {/* <button className="tp-btn-yellow w-100" type="submit"> <Spinner class='text-dark' /> </button> */}
            <Button
              class="tp-btn-yellow w-100"
              Loader={resetPasswordLoading}
              Text="Next"
              type="submit"
              spinnerClass="text-light"
            />
          </div>
        </form>
      )}

      {/* otp */}
      {activity == "otp" && (
        <OtpForm
          email={values.email}
          setactivity={setactivity}
          otp={otp}
          setOtp={setOtp}
        />
      )}

      {/* new password */}

      {activity == "password" && (
        <NewPasswordForm
          email={values.email}
          setactivity={setactivity}
          otp={otp}
          setOtp={setOtp}
        />
      )}
    </>
  );
};

export default FogetForm;
