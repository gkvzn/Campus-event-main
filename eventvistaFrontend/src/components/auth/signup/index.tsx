import Header from "@/layout/header/header";
import SignUpArea from "./signup-area";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RootState } from "@/redux/store";

export const SignUp: React.FC = () => {
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
      <SignUpArea />
    </>
  );
};

export default SignUp;
