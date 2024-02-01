import React from "react";
import { useFormik } from "formik";
import useValidationSchemaHook from "@/utils/validation-schema";
import ErrorMsg from "@/utils/forms/error-msg";
// import { requestForToken } from "../../../Helpers/Firebase";
import { Button } from "@/utils/forms/button";
import { OtpComponentPropsI } from "@/types_and_interfaces/auth_types";
import { useUpdatePasswordAction } from "@/actions/auth.action";
import { ErrorToast } from "@/utils/helper";

const NewPasswordForm: React.FC<OtpComponentPropsI> = ({
  email,
  setactivity,
  otp,
  setOtp,
}) => {
  const { mutate: newPassword, isLoading: newPasswordLoading } =
    useUpdatePasswordAction();

  const { updatePasswordSchema } = useValidationSchemaHook();

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { email, otp, password: "", repeat_password: "" },
      validationSchema: updatePasswordSchema,
      onSubmit: async (values, { resetForm }) => {
        // const token = await requestForToken();
        // if (token === undefined) token = null
        const token = "";
        newPassword(values, {
          onSuccess(data) {
            if (data.flag == 1) setactivity("email");
          },
        });
        resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      {/* password */}
      <div className="tp-mail">
        <label htmlFor="password" className="loginEmailLabel">
          New Password
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
        <label htmlFor="repeat_password" className="loginEmailLabel">
          Confirm Password
        </label>
        <input
          value={values.repeat_password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          id="repeat_password"
          placeholder="Enter your confirm password"
        />
        {touched.repeat_password && <ErrorMsg error={errors.repeat_password} />}
      </div>

      <div className="tp-login-button pt-30 mb-3">
        <Button
          class="tp-btn-yellow w-100 "
          Loader={newPasswordLoading}
          Text="Save"
          type="submit"
          spinnerClass="text-light"
        />
      </div>
    </form>
  );
};

export default NewPasswordForm;
