import { Api } from "@/constants/app";
import request from "./request";
import { resetPasswordResponseI, signInReponseI, verifyReponseI } from '@/types_and_interfaces/auth_types';
import { GetDataResponseI, SuccessResponseI } from "@/types_and_interfaces/types";


const auth_service = {
    reset_password: {
        // reset password
        reset: (data: any): Promise<resetPasswordResponseI> => request.post(Api.user_module.auth.reset_password.reset, data),
        verify: (data: any): Promise<SuccessResponseI> => request.post(Api.user_module.auth.reset_password.verify, data),
        update_password: (data: any): Promise<signInReponseI> => request.post(Api.user_module.auth.reset_password.update_password, data)
    },
    sign_in: (data: any): Promise<signInReponseI> => request.post(Api.user_module.auth.sign_in, data),
    sign_up: (data: any): Promise<signInReponseI> => request.post(Api.user_module.auth.sign_up, data),
    sign_out: (data: any): Promise<SuccessResponseI> => request.post(Api.user_module.auth.sign_out, data),
    verify: (params?: any): Promise<verifyReponseI> => request.get(Api.user_module.auth.verify, { params }),



}

export default auth_service;
