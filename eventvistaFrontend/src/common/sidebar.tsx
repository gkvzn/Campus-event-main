import LogOutComponent from "@/components/log-out";
import MobileMenus from "@/layout/header/mobile-menus";
import NavMenu from "@/layout/header/nav-menu";
import ImagePopup from "@/modals/ImagePopup";
import { RootState } from "@/redux/store";
import { SideBarProps } from "@/types_and_interfaces/header_types";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Sidebar: React.FC<SideBarProps> = ({ isActive, setIsActive }) => {
  const { user, guest_id } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <div
        className={`tpsideinfo tp-side-info-area ${
          isActive ? "tp-sidebar-opened" : ""
        }`}
      >
        <button
          onClick={() => setIsActive(false)}
          className="tpsideinfo__close"
        >
          <i className="fal fa-times"></i>
        </button>
        <div className="tpsideinfo__logo mb-40">
          <Link href="/">
            <img src="/assets/images/logo.jpg" alt="logo" />
          </Link>
        </div>

        <div className="mobile-menu mean-container d-block d-lg-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        <div className="tpsideinfo__content mb-60">
          <NavMenu />
          {/* <p className=" d-none d-xl-block">
            Our mission is to ensure the generation of accurate and precise
            findings.
          </p>
          <span>Contact Us</span>
          <a href="#">
            <i className="fa-solid fa-star"></i>Ta-134/A, Gulshan Badda Link
          </a>
          <a href="tel:61383766284">
            <i className="fa-solid fa-star"></i>61 383 766 284
          </a>
          <a href="mailto:noreply@envato.com">
            <i className="fa-solid fa-star"></i>noreply@envato.com
          </a> */}

          <ul className="mobile-menu-login-signup-and-langugage  side-icons">
            {user?.hasOwnProperty("id") && <LogOutComponent />}
            <br />
            {user?.hasOwnProperty("id") && (
              <>
                <li className="tp-bt-btn-banner ">
                  <Link className="tp-bt-btn auth-icon-div mr" href="/wishlist">
                    <span>
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </Link>
                </li>
              </>
            )}

            {user?.hasOwnProperty("id") ? (
              <>
                <li className="tp-bt-btn-banner">
                  <div className="dropdown">
                    <span
                      className="tp-bt-btn auth-icon-div mr"
                      style={{ padding: "10px" }}
                    >
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
                      <ul className="dropdown-menu shadow-lg  account logout ">
                        <Link className="dropdown-item" href="/account/profile">
                          Account
                        </Link>
                        <Link className="dropdown-item" href="">
                          Account
                        </Link>
                      </ul>
                    </span>
                  </div>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
          {!user?.hasOwnProperty("id") && (
            <ul>
              <li className="mobile-menu-login-signup-and-langugage mt-4">
                <div className="tp-bt-btn-banner ">
                  <a className="tp-bt-btn mr" href="">
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div
        onClick={() => setIsActive(false)}
        className={`body-overlay ${isActive ? "opened" : ""}`}
      ></div>
    </>
  );
};

export default Sidebar;
