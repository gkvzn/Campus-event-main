import SocialLinks from "@/common/social-links";
import Link from "next/link";
import React from "react";

const footer_content = {
  contact_info: [
    {
      id: 1,
      title: "Quick Links",
      support_info: [
        " 27 Division St, New York, NY 10002, USA",
        "(+880)52462545632",
        " support@example.com",
      ],
      office_time: "Office Hours: 9AM - 4PM",
      off_day: " Friday - Wekend Day",
    },
  ],
  copy_right_text: (
    <>
      © Copyright © {new Date().getFullYear()}
      <Link href="/"> Theme_pure</Link>.<i> All Rights Reserved Copyright</i>
    </>
  ),
};

const { footer_info, copy_right_text } = footer_content;
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area theme-bg pt-40" style={{ background: "#282f37" }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-5  col-lg-6 col-md-6">
                <div
                  className="footer-widget footer-col-1 mb-20 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4 className="footer-widget__title mb-20">
                    <a href="index">
                      <img className="footer-widget__logo" src="/assets/images/logo.jpg" alt="logo" />
                    </a>
                  </h4>
                  <p>
                    <br />
                    <br />
                  </p>
                  <div className="footer-widget__social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              {
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div
                    className={`footer-widget mb-20 wow fadeInUp`}
                    data-wow-delay=".4s"
                  >
                    <div className="footer-widget__links">
                      <ul>

                        <li >
                          <Link href="">Events</Link>
                        </li>
                        <li >
                          <Link href="/about-us">About Us</Link>
                        </li>
                        <li >
                          <Link href="/contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              }

              <div className="col-xl-4 col-lg-6 col-md-6">
                <div
                  className="footer-widget footer-col-4 mb-20 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="footer-widget__title mb-20 SourceSansPro">
                    Newsletter
                  </h4>
                  <p>
                    Get updated by upcoming events and products
                  </p>
                  {/* <div className="footer-widget__newsletter p-relative">
                    <form action="#" className="d-flex gap-3">
                      <input type="email" placeholder="Email Address" />
                      <button className="footer-widget__fw-news-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area-bottom theme-bg" style={{ background: "#2e363f" }}>
          <div className="container ">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12 ">
                <div className="footer-widget__copyright footer-bottom-border ">
                  <span>Ⓒ All Rights Reserved.</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
