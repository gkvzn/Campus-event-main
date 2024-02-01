import React from "react";
import HeroBanner from "./hero-banner";
import EventArea from "../event/event-area";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const HomeOne = () => {
  const { home_mode } = useSelector((state: RootState) => state.global);

  return (
    <>
      <HeroBanner />
      <EventArea />
    </>
  );
};

export default HomeOne;
