import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/utils/forms/button";

const PrivacPolicyArea: React.FC = () => {
  //
  const [currentState, setcurrentState] = useState("profile");
  return (
    <>
      <div className="container-fluid pb-70 pt-50">
        <div className="container">
          <p className="about-us-p-description">
            Welcome to In Abu Dhabi, your ultimate guide to the vibrant and
            captivating capital city of the United Arab Emirates. At Explore Abu
            Dhabi, we are passionate about showcasing the richness and diversity
            of this incredible destination, providing you with the tools and
            insights to make the most of your visit
          </p>
          <div className="about-title-heading mt-4">
            <h2>Our Mission:</h2>
            <p className="about-us-p-description">
              At Explore Abu Dhabi, our mission is to be the go-to resource for
              anyone looking to discover the hidden gems, iconic landmarks, and
              unique experiences that make Abu Dhabi truly special. Whether
              you're a first-time visitor or a seasoned traveler, our goal is to
              enhance your journey by offering comprehensive information and
              expert recommendations.
            </p>
          </div>
          <div className="about-title-heading mt-4">
            <h2>What Sets Us Apart:</h2>
            <ul className="about-us-ul">
              <li>
                <p className="about-us-li-p-description">
                  At Explore Abu Dhabi, our mission is to be the go-to resource
                  for anyone looking to discover the hidden gems, iconic
                  landmarks, and unique experiences that make Abu Dhabi truly
                  special. Whether you're a first-time visitor or a seasoned
                  traveler, our goal is to enhance your journey by offering
                  comprehensive information and expert recommendations.
                </p>
              </li>
              <li>
                <p className="about-us-li-p-description">
                  At Explore Abu Dhabi, our mission is to be the go-to resource
                  for anyone looking to discover the hidden gems, iconic
                  landmarks, and unique experiences that make Abu Dhabi truly
                  special. Whether you're a first-time visitor or a seasoned
                  traveler, our goal is to enhance your journey by offering
                  comprehensive information and expert recommendations.
                </p>
              </li>
              <li>
                <p className="about-us-li-p-description">
                  At Explore Abu Dhabi, our mission is to be the go-to resource
                  for anyone looking to discover the hidden gems, iconic
                  landmarks, and unique experiences that make Abu Dhabi truly
                  special. Whether you're a first-time visitor or a seasoned
                  traveler, our goal is to enhance your journey by offering
                  comprehensive information and expert recommendations.
                </p>
              </li>
              <li>
                <p className="about-us-li-p-description">
                  At Explore Abu Dhabi, our mission is to be the go-to resource
                  for anyone looking to discover the hidden gems, iconic
                  landmarks, and unique experiences that make Abu Dhabi truly
                  special. Whether you're a first-time visitor or a seasoned
                  traveler, our goal is to enhance your journey by offering
                  comprehensive information and expert recommendations.
                </p>
              </li>
            </ul>
          </div>
          <div className="about-title-heading mt-4">
            <h2>Our Commitment to Excellence::</h2>
            <p className="about-us-p-description">
              We are committed to delivering accurate, up-to-date, and reliable
              information. Our team works tirelessly to keep our content fresh
              and relevant, ensuring that you have access to the latest
              happenings and trends in Abu Dhabi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacPolicyArea;
