import { Api } from "@/constants/app"
import app_service from "@/services/app.service"
import { useMutation } from "react-query"

// profile
export const useProfileAction = () => useMutation(app_service.settings.profile, {

})

// change_password
export const useChangePasswordAction = () => useMutation(app_service.settings.change_password, {

})

// profile_photo
export const useProfilePhotoAction = () => useMutation(app_service.settings.profile_photo, {

})

// fcm_on_off
export const useFcmOnOffAction = () => useMutation(app_service.settings.fcm_on_off, {

})

// send_contact_us
export const useSendContactusAction = () => useMutation(app_service.gernal.send_contact_us, {

})



export const useContactUsAction = () => useMutation(app_service.gernal.send_contact_us, {

})