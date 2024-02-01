import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Verification from "@/utils/Verification";

const PrivateRoute = ({ children, authProps }: any) => {
  const { user } = useSelector((state: RootState) => state.auth);

  const { Verify, isUser, setisUser } = Verification();
  // axios setup

  useEffect(() => {
    // !user?.hasOwnProperty("id") ? Verify() : setisUser(0)
  }, []);

  if (user?.hasOwnProperty("id")) {
    return <>{children}</>;
  }

  return <>loading</>;
};
export default PrivateRoute;
