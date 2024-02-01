import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "cookies-next";
import { create_guest_id } from "@/utils/helper";
import Verification from "@/utils/Verification";
import { AppDispatch, RootState } from "@/redux/store";
import { update_guest } from "@/redux/features/auth-slice";


const BaseLayout = ({ children, authProps }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    const { user } = useSelector((state: RootState) => state.auth)
    const { Verify } = Verification()

    const _ca = getCookie('_ca')

    useEffect(() => {
        if (!user?.hasOwnProperty("id") && authProps == undefined && _ca != undefined) Verify()
    }, [])

    useEffect(() => {
        if (user?.hasOwnProperty("id"))
            window.sessionStorage.removeItem('guestId')
        else
            dispatch(update_guest(create_guest_id()))
    }, [user])


    return (
        <>
            {children}
        </>
    )
}
export default BaseLayout