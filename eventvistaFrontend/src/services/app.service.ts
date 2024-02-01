import { Api } from "@/constants/app";
import request from "./request";
import { CouponsType, FaqType, GenSuccessResponseI, PageType, Pagination, ProfileResponseI, SuccessResponseI } from "@/types_and_interfaces/types";
import { AddressT, UserProfileResponseI } from "@/types_and_interfaces/account_types";

const app_service = {


    settings: {
        profile: (data: any): Promise<UserProfileResponseI> => request.post(Api.user_module.settings.profile, data),
        change_password: (data: any): Promise<SuccessResponseI> => request.post(Api.user_module.settings.change_password, data),
        profile_photo: (data: any): Promise<ProfileResponseI> => request.post(Api.user_module.settings.profile_photo, data),
        fcm_on_off: (data: any): Promise<any> => request.post(Api.user_module.settings.fcm_on_off, data),
    },
   
    gernal: {
        terms_and_conditions: (params?: any): Promise<any> => request.get(Api.user_module.gernal.terms_and_conditions, { params }),
        page: (params?: any): Promise<GenSuccessResponseI<PageType>> => request.get(Api.user_module.gernal.page, { params }),
        contact_us: (params?: any): Promise<any> => request.get(Api.user_module.gernal.contact_us, { params }),
        send_contact_us: (data: any): Promise<any> => request.post(Api.user_module.gernal.send_contact_us, data),

    }

};

export default app_service;
