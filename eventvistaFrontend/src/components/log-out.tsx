import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import { requestForToken } from "../../../Helpers/Firebase"
// import { add_user } from "../../../redux/features/auth-slice"
import { deleteCookie } from "cookies-next";

import { useQueryClient } from "react-query";
import { add_user } from "@/redux/features/auth-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useSignOutAction } from "@/actions/auth.action";

const LogOutComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const queryClient = useQueryClient();
  // const { user, guest_id } = useSelector((state: RootState) => state.auth)
  const { mutate: signOut } = useSignOutAction();

  // /logout
  const Logout = async () => {
    // const token = await requestForToken();
    // if (token === undefined) token = null
    // let cred = {}
    // if (token != null) cred.fcm_token = token

    signOut(
      {},
      {
        onSuccess(data) {
          if (data != null && data.flag == 1) {
            dispatch(add_user({}));
            deleteCookie("_ca");
            queryClient.removeQueries();
            router.push("/");
            window.location.reload();
          }
        },
      }
    );
  };

  return (
    <a
      className="cursor-pointer"
      onClick={() => {
        Logout();
      }}
    >
      Logout
    </a>
  );
};

export default LogOutComponent;
