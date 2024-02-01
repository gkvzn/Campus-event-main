import React, { useState } from "react";
// import { requestForToken } from "../../../Helpers/Firebase";
import { Button } from "@/utils/forms/button";
import OTPInput from "react-otp-input";
import { OtpComponentPropsI } from "@/types_and_interfaces/auth_types";
import { useResetPasswordVerifyAction } from "@/actions/auth.action";
import { ErrorToast } from "@/utils/helper";

const OtpForm: React.FC<OtpComponentPropsI> = ({ email, setactivity, otp, setOtp }) => {


    const { mutate: resetPasswordVerifyAction, isLoading: resetPasswordVerifyFLoading } = useResetPasswordVerifyAction()

    const OtpVerify = async () => {
        if (otp.length != 6) { ErrorToast("Please Fill The Otp Feild."); return false }
        const otpData = {
            email: email,
            otp: otp
        }
        resetPasswordVerifyAction(otpData, {
            onSuccess(data) {
                if (data.flag == 1) setactivity("password")
            }
        })
    }
    // handleResetPass
    return (
        <>
            <div className="tp-mail">
                <OTPInput
                    containerStyle={{ justifyContent: "space-between" }}
                    numInputs={6}
                    renderSeparator={""}
                    value={otp}
                    onChange={setOtp}
                    renderInput={(props) => <input  {...props} className='otp-input' />
                    }
                />
            </div>

            <div className="tp-login-button pt-30 mb-3">
                {/* <button className="tp-btn-yellow w-100" type="submit"> <Spinner class='text-dark' /> </button> */}
                <Button
                    class="tp-btn-yellow w-100 "
                    Loader={resetPasswordVerifyFLoading}
                    onClick={() => OtpVerify()}
                    Text="Verify"
                    type="submit"
                    spinnerClass="text-light"
                />
            </div>
        </>

    );
};


export default OtpForm