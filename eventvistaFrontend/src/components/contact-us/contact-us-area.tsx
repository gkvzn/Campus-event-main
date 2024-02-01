import { Button } from "@/utils/forms/button";
import InputBox from "@/utils/forms/Input";
import { useContactUsAction } from "@/actions/app.action";
import { useFormik } from "formik";
import { ErrorToast } from "@/utils/helper";

import ErrorMsg from "@/utils/forms/error-msg";
import useValidationSchemaHook from "@/utils/validation-schema";

const ContactUsArea: React.FC = () => {
  //

  const { mutate: addContactUsMutate, isLoading: addContactUsLoading } =
    useContactUsAction();

    

  const { ContactUsFormSchema } = useValidationSchemaHook();

  const {
    handleChange,
    handleSubmit,
    values,
    touched,
    dirty,
    setFieldValue,
    errors,
    setErrors,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactUsFormSchema,
    onSubmit: (values, { resetForm }) => {
      addContactUsMutate(values, {
        onSuccess(data) {
          if (data != null && data?.flag == 1) {
            ErrorToast(data.message, "success");
          }
          resetForm();
        },
      });
    },
  });

  return (
    <>
      <div className="container-fluid pb-40 pt-100">
        <div className="container">
          <div className="row mb-3 gap-5 d-flex justify-content-center">
            <div className="col-lg-7 p-0">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="checkbox-form contact-us-form">
                      <div className="row">
                        <InputBox
                          col="col-md-12 input-div"
                          required={false}
                          id="name"
                          onChange={handleChange}
                          disabled={false}
                          value={values.name}
                          label={"Name"}
                          placeholder="Enter your name"
                        />
                        {touched.name && <ErrorMsg error={errors.name} />}
                        <InputBox
                          col="col-md-12 input-div"
                          required={false}
                          onChange={handleChange}
                          id="email"
                          disabled={false}
                          value={values.email}
                          label={"Email Address"}
                          placeholder="Enter your email address"
                        />
                        {touched.email && <ErrorMsg error={errors.email} />}
                        <InputBox
                          col="col-md-12 input-div"
                          required={false}
                          onChange={handleChange}
                          id="phone"
                          disabled={false}
                          value={values.phone}
                          type="number"
                          label={"Mobile Number"}
                          placeholder="Enter your mobile number"
                        />
                        {touched.phone && <ErrorMsg error={errors.phone} />}
                        {/* City */}

                        {touched.subject && <ErrorMsg error={errors.subject} />}
                        <InputBox
                          col="col-md-12 input-div"
                          value={values.subject}
                          onChange={handleChange}
                          required={false}
                          name="subject"
                          disabled={false}
                          id="subject"
                          label={"Subject"}
                          placeholder="Subject"
                        />

                        <div
                          className="col-md-12"
                          style={{ marginBottom: "30px" }}
                        >
                          <div className="contact-us-form-textarea">
                            <textarea
                              className=""
                              value={values.message}
                              onChange={handleChange}
                              id="message"
                              placeholder="Write your message here..."
                              name="message"
                            ></textarea>
                          </div>
                          {touched.message && (
                            <ErrorMsg error={errors.message} />
                          )}
                        </div>
                        <div className="col-md-12 input-div">
                          <div className="checkout-form-list create-acc">
                            <Button
                              class="btn btn edit-address-save-change-btn text-white"
                              spinnerClass="text-light"
                              type="submit"
                              Loader={addContactUsLoading}
                              Text="Submit"
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
      </div>
    </>
  );
};

export default ContactUsArea;
