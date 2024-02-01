import React from "react";
import SigninForm from "./signin-from";
const SigninArea: React.FC = () => {
  return (
    <>
      <div className="tp-login-area email-login-theme  ">
        <div className="container-fluid p-0  ">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-5 col-lg-5 col-12">
              <div className="tp-login-wrapper container  pb-80 d-flex ">
                <div className="tplogin">
                  <div className="tplogin__title">
                    <h1 className="tp-login-title">Welcome to Back</h1>
                  </div>
                  <div className="tplogin__form tplogin__form_email">
                    <SigninForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninArea;
