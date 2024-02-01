import Header from "@/layout/header/header";
import SigninArea from "./signin-area";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const SignIn: React.FC = () => {
  const { user, guest_id } = useSelector((state: RootState) => state.auth);

  const { push } = useRouter();
  useEffect(() => {
    // Check if user exists and redirect if needed
    if (user) {
      push("/");
    }
  }, [user]);

  return (
    <>
      <Header />
      <SigninArea />
    </>
  );
};

export default SignIn;
