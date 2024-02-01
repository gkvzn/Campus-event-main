import React from "react";
import Footer from "./footer/footer";
import Header from "@/layout/header/header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const route = useRouter()
  return (
    <div>
      <Header type={route.asPath == "/" && "home"} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
