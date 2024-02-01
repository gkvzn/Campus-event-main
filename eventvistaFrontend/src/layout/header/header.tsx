import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./nav-menu";
import useSticky from "../../../hooks/use-sticky";
import Sidebar from "@/common/sidebar";
import { HeaderPropsType } from "@/types_and_interfaces/header_types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import LogOutComponent from "@/components/log-out";
import { is_login_or_guest } from "@/utils/helper";

const Header: React.FC<HeaderPropsType> = ({ type = "" }) => {
  const { sticky } = useSticky();

  const { user, guest_id } = useSelector((state: RootState) => state.auth);

  const { carts_qty } = useSelector((state: RootState) => state.global);

  const [isActive, setIsActive] = useState(false);

  const attrs = is_login_or_guest(user, guest_id);

  return (
    <>
      {/* mobile header */}
      <div
        id="header-mob-sticky"
        className={`tp-mobile-header-area pt-15 pb-15 d-xl-none ${
          sticky ? "header-sticky" : ""
        } `}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-10">
              <div className="tp-mob-logo">
                <Link href="/">
                  <img src="/assets/images/logo.jpg" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-8 col-2">
              <div className="tp-mobile-bar d-flex align-items-center justify-content-end">
                <div className="tp-bt-btn-banner d-none d-md-block d-xl-none mr-30"></div>

                <button
                  onClick={() => setIsActive(true)}
                  className="tp-menu-toggle mx-3"
                >
                  <i className="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile header */}
      {/* web header */}
      <header className="d-none d-xl-block">
        <div
          className={`header__area tp-home-one ${
            sticky ? "header-sticky" : ""
          }   ${type != "home" ? "header-no-home" : ""}`}
          id="header-sticky"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-8 col-lg-8 d-flex">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/images/logo.jpg" alt="logo" />
                  </Link>
                </div>
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>

              <div className="col-xxl-4 col-lg-4 d-flex align-items-center justify-content-end">
                {user?.hasOwnProperty("id") && (
                  <>
                    {/* <div className="tp-bt-btn-banner ">
                    <Link className="tp-bt-btn auth-icon-div mr" href="">
                      <span><i className="fa-solid fa-magnifying-glass"></i></span>
                    </Link>
                  </div> */}

                    <div className="tp-bt-btn-banner ">
                      <Link
                        className="tp-bt-btn auth-icon-div mr"
                        href="/wishlist"
                      >
                        <span>
                          <i className="fa-solid fa-heart"></i>
                        </span>
                      </Link>
                    </div>

                    <div className="tp-bt-btn-banner ">
                      <Link
                        className="tp-bt-btn auth-icon-div mr"
                        href="/calender"
                      >
                        <span>
                          <i className="fa fa-calendar"></i>
                        </span>
                      </Link>
                    </div>
                  </>
                )}

                {user?.hasOwnProperty("id") ? (
                  <>
                    <div className="tp-bt-btn-banner">
                      <div className="dropdown">
                        <span className="tp-bt-btn auth-icon-div mr">
                          <button
                            className=""
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span>
                              <i className="fa-solid fa-user"></i>
                            </span>
                          </button>
                          <ul className="dropdown-menu account logout ">
                            <li className="first-li">
                              <Link
                                className="dropdown-item"
                                href="/account/profile"
                              >
                                Account
                              </Link>
                            </li>
                            <li className="second-li">
                              <Link className="dropdown-item" href="#">
                                <LogOutComponent />
                              </Link>
                            </li>
                          </ul>
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="tp-bt-btn-banner ">
                    <Link className="tp-bt-btn mr" href="/signin">
                      <span>
                        <i className="fa-solid fa-user"></i>
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* web header */}
      {/* side bar start */}
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      {/* side bar end */}
    </>
  );
};

export default Header;
