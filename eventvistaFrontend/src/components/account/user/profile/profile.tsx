import { Button } from "@/utils/forms/button";
import React, { useRef, useState } from "react";
import InputBox from "@/utils/forms/Input";
import { useProfileAction, useProfilePhotoAction } from "@/actions/app.action";
import { ErrorToast } from "@/utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { add_user, update_profile_photo } from "@/redux/features/auth-slice";
import { RootState } from "@/redux/store";
import { Asset } from "@/constants/app";
import { useFormik } from "formik";
import ErrorMsg from "@/utils/forms/error-msg";
import Spinner from "@/utils/forms/spinner";
import PhoneInput from "react-phone-number-input";
import useValidationSchemaHook from "@/utils/validation-schema";

const AccountProfile: React.FC = () => {
  const file_ref = useRef<HTMLInputElement | null>(null);

  const { user, guest_id } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  //
  const [currentState, setcurrentState] = useState("profile");

  const { mutate: ProfileUploadMutate, isLoading: ProfileUploadMutateLoading } =
    useProfilePhotoAction();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let form_data = new FormData();
    form_data.append("avatar", event.target.files ? event.target.files[0] : "");
    ProfileUploadMutate(form_data, {
      onSuccess(data) {
        if (data != null && data.flag == 1) {
          ErrorToast(data.message, "success");
          dispatch(update_profile_photo(data.avatar));
          file_ref.current!.value = "";
        }
      },
    });
  };

  // profile
  // profile save

  const { mutate: profileUpdateAction, isLoading: profileUpdateActionLaoding } =
    useProfileAction();

  const { profileSchema } = useValidationSchemaHook();

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    dirty,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      gender: user?.gender,
      city: user?.city,
    },
    validationSchema: profileSchema,
    onSubmit: (values, { resetForm }) => {
      if (user?.phone == values.phone) delete values.phone;
      profileUpdateAction(values, {
        onSuccess(data) {
          if (data != null && data?.flag == 1) {
            ErrorToast(data.message, "success");
            dispatch(add_user(data.user));
            resetForm({
              values: {
                name: data.user.name,
                email: data.user.email,
                phone: data.user.phone,
                gender: data.user.gender,
                city: data.user.city,
              },
            });
          }
        },
      });
    },
  });

  return (
    <>
      <div className="container-fluid pb-100 pt-100">
        <div className="container">
          <div className="row mb-3 gap-5 d-flex justify-content-center">
            <div className="col-lg-7 ">
              {currentState == "profile" && (
                <div
                  className="row user-profile box-shad "
                  style={{ paddingTop: "35px" }}
                >
                  <div className="col-md-12 ">
                    <div className="container ">
                      <div className="row " style={{ marginBottom: "40px" }}>
                        <div className="col-md-12 ">
                          <label
                            className="upload-profile"
                            htmlFor="ProfileImage"
                          >
                            <div className="edit-profile-username-and-image-maindiv ">
                              <div
                                className="profile-image-div"
                                style={{ minHeight: 100 }}
                              >
                                {!ProfileUploadMutateLoading ? (
                                  <div className="image-div">
                                    <img
                                      src={
                                        user?.avatar
                                          ? Asset(user?.avatar)
                                          : `https://ui-avatars.com/api/?name=${user?.name}&color=fff&background=bae9ba&size=528`
                                      }
                                      className="user-profile-image"
                                      alt=""
                                    />
                                  </div>
                                ) : (
                                  <Spinner />
                                )}
                              </div>

                              <div className="name-image-upload-div">
                                <div className="username-profile-name">
                                  <h3 className="sum-head text-custom-primary">
                                    Upload Profile Pictuire
                                  </h3>
                                  <input
                                    style={{ display: "none" }}
                                    type="file"
                                    ref={file_ref}
                                    onChange={handleFileChange}
                                    id="ProfileImage"
                                  />
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="checkbox-form">
                              <div className="row">
                                <InputBox
                                  col="col-md-12"
                                  required={false}
                                  id="name"
                                  disabled={false}
                                  label={"Name"}
                                  value={values.name}
                                  onChange={handleChange}
                                  placeholder="Name"
                                />
                                {touched.name && (
                                  <ErrorMsg error={errors.name} />
                                )}
                                <InputBox
                                  col="col-md-12"
                                  required={false}
                                  id="email"
                                  disabled={true}
                                  label={"Email"}
                                  value={values.email}
                                  onChange={handleChange}
                                  placeholder="Email Address"
                                />
                                {touched.email && (
                                  <ErrorMsg error={errors.email} />
                                )}
                                <div className="col-md-12">
                                  <div className="checkout-form-list p-relative">
                                    <div className="d-flex justify-content-between">
                                      <label>Mobile Number</label>
                                    </div>
                                    <PhoneInput
                                      className="form-control"
                                      international
                                      defaultCountry="AE"
                                      id="phone"
                                      value={values.phone}
                                      onChange={(e) =>
                                        setFieldValue("phone", e)
                                      }
                                    />
                                  </div>
                                </div>

                                {/* <InputBox col='col-md-12' required={false} id="phone" disabled={false} value={values.phone} type="number" onChange={handleChange} label={'Mobile Number'} placeholder="+971-04-3453986" /> */}
                                {touched.phone && (
                                  <ErrorMsg error={errors.phone} />
                                )}
                                {/* Gender */}
                                <div className="checkout-form-list">
                                  <label
                                    htmlFor="gender"
                                    className="loginEmailLabel"
                                  >
                                    Gender
                                  </label>
                                  <select
                                    onChange={handleChange}
                                    value={values.gender}
                                    onBlur={handleBlur}
                                    id="gender"
                                  >
                                    <option className="light" value="">
                                      Select
                                    </option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                    <option value="other">other</option>
                                  </select>

                                  {touched.gender && (
                                    <ErrorMsg error={errors.gender} />
                                  )}
                                </div>
                                {/* City */}
                                <div className="checkout-form-list">
                                  <label
                                    htmlFor="city"
                                    className="loginEmailLabel"
                                  >
                                    City
                                  </label>
                                  <select
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="city"
                                  >
                                    <option className="light" value="">
                                      Select
                                    </option>
                                    <option value="abu-dhabi">Abu Dhabi</option>
                                    <option value="dubai">Dubai</option>
                                    <option value="sharjah">Sharjah</option>
                                    <option value="ajman">Ajman</option>
                                    <option value="um-al-quwain">
                                      Umm Al-Quwain
                                    </option>
                                    <option value="fujairah">Fujairah</option>
                                    <option value="ras-al-khaimah">
                                      Ras Al Khaimah
                                    </option>
                                  </select>

                                  {touched.city && (
                                    <ErrorMsg error={errors.city} />
                                  )}
                                </div>
                                <InputBox
                                  col="col-md-12"
                                  required={false}
                                  name="phone"
                                  disabled={false}
                                  value={""}
                                  onChange={() => {}}
                                  label={"Password"}
                                  label_btn={
                                    <>
                                      <a
                                        onClick={() =>
                                          setcurrentState("password")
                                        }
                                      >
                                        {" "}
                                        <strong>change</strong>
                                      </a>
                                    </>
                                  }
                                  placeholder="**************"
                                />

                                <div className="col-md-12">
                                  <div className="checkout-form-list create-acc">
                                    {dirty && (
                                      <Button
                                        class="btn btn edit-address-save-change-btn text-white"
                                        spinnerClass="text-light"
                                        type="submit"
                                        Loader={profileUpdateActionLaoding}
                                        Text="Save Changes"
                                      />
                                    )}
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountProfile;
