import { ChangePasswordProps } from "@/types_and_interfaces/account_types";
import { ErrorToast } from "@/utils/helper";
import { Button } from "@/utils/forms/button";
import ErrorMsg from "@/utils/forms/error-msg";
import { InputBoxProps } from "@/types_and_interfaces/types";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useChangePasswordAction } from "@/actions/app.action";
import useValidationSchemaHook from "@/utils/validation-schema";

const ChangePassword: React.FC<ChangePasswordProps> = ({ setcurrentState }) => {
  // profile update mutation
  const {
    mutate: PasswordChangeMutate,
    isLoading: ProfileUpdateMutateLoading,
  } = useChangePasswordAction();

  const { ChangePasswordSchema } = useValidationSchemaHook();

  const { handleChange, handleSubmit, values, touched, dirty, errors } =
    useFormik({
      initialValues: {
        old_password: "",
        new_password: "",
        repeat_new_password: "",
      },
      validationSchema: ChangePasswordSchema,
      onSubmit: (values, { resetForm }) => {
        PasswordChangeMutate(values, {
          onSuccess(data) {
            if (data != null && data?.flag == 1) {
              ErrorToast(data.message, "success");
              resetForm();
            }
          },
        });
      },
    });

  return (
    <>
      <div className="row  box-shad py-5">
        <div className="col-md-12">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="checkbox-form">
                    <div className="d-flex gap-3 align-item-center set-head">
                      <a
                        className="cusrsor-pointer"
                        onClick={() => {
                          setcurrentState("profile");
                        }}
                      >
                        <img src="/assets/media/icons/back-arrow.svg" alt="" />
                      </a>{" "}
                      <h3>Change Password</h3>
                    </div>
                    <div className="row">
                      <InputBox
                        col="col-md-12"
                        name="old_password"
                        value={values.old_password}
                        onChange={handleChange}
                        required={false}
                        label={"Current Password"}
                        placeholder="**************"
                        type="password"
                      />
                      {touched.old_password && (
                        <ErrorMsg error={errors.old_password} />
                      )}
                      <InputBox
                        col="col-md-12"
                        name="new_password"
                        value={values.new_password}
                        onChange={handleChange}
                        required={false}
                        label={"New Password"}
                        placeholder="**************"
                        type="password"
                      />
                      {touched.new_password && (
                        <ErrorMsg error={errors.new_password} />
                      )}
                      <InputBox
                        col="col-md-12"
                        name="repeat_new_password"
                        value={values.repeat_new_password}
                        onChange={handleChange}
                        required={false}
                        label={"Confirm New Password"}
                        type="password"
                        placeholder="**************"
                      />
                      {touched.repeat_new_password && (
                        <ErrorMsg error={errors.repeat_new_password} />
                      )}
                      <div className="col-md-12">
                        <div className="checkout-form-list create-acc">
                          <Button
                            class="btn btn edit-address-save-change-btn text-white"
                            spinnerClass="text-light"
                            type="submit"
                            Loader={ProfileUpdateMutateLoading}
                            Text="Save Changes"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;

const InputBox: React.FC<InputBoxProps> = ({
  col = "col-md-12",
  required = true,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled,
  name,
  id,
}) => {
  return (
    <div className={col}>
      <div className="checkout-form-list">
        {label && (
          <label>
            {label} {required && <span className="required">*</span>}
          </label>
        )}
        <input
          required={required}
          type={type}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
