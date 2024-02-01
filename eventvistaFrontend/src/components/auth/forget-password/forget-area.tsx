import React from 'react';
import FogetForm from './forget-from';

const FogetArea: React.FC = () => {
    return (
        <>
            <div className="tp-login-area email-login-theme  ">
                <div className="container-fluid p-0  ">
                    <div className="row ">
                        <div className="col-xl-6 col-lg-6 col-12 m-none loginFormEmail-right-side-image">
                            <div className="tp-login-thumb login-space  d-flex justify-content-center h-100 px-4">

                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-12">
                            <div className="tp-login-wrapper container  pb-80 d-flex ">
                                <div className="tplogin">
                                    <div className="tplogin__title">
                                        <h1 className="tp-login-title">Forget Password</h1>
                                    </div>
                                    <div className="tplogin__form tplogin__form_email">
                                        <FogetForm />
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

export default FogetArea