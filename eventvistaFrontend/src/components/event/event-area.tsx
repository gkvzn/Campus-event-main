import React, { useRef, useState } from "react";
import EventItemArea from "./event-item-area";

const EventArea: React.FC = () => {
  const [mode, setMode] = useState("brands");

  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="shop-area pt-30  pb-130" ref={pageRef}>
        <EventItemArea mode={mode} setMode={setMode} pageRef={pageRef} />
      </div>
    </>
  );
};

export default EventArea;
