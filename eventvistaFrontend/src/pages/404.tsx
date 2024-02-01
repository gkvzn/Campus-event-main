import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="error_page">
          <Link href="/">
            <img style={{ width: "100%" }} src="/assets/img/404.webp"></img>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error;
