import { add_user } from "@/redux/features/auth-slice";
import { AppDispatch } from "@/redux/store";
import { signInReponseI } from "@/types_and_interfaces/auth_types";
import { ErrorToast, expirationDate } from "@/utils/helper";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";



const useAuth = () => {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const after_signin = async (data: signInReponseI) => {

        if (data == null) return false;
        if (data.flag === 1) {
            dispatch(add_user(data.user));
            setCookie("_ca", data.access_token, {
                expires: expirationDate
            })
            ErrorToast(data?.message ?? "", 'success')
            if (router.back) { router.back(); return false }
            await router.push('/')

        }
    }

    return { after_signin }
}

export default useAuth
