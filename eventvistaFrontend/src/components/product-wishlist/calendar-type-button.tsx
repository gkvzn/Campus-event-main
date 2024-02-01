import React, { useState } from "react";
import EventCalenderAarea from "./event-calender-area";

const CalendarTypeButton: React.FC = () => {
  const [mode, setMode] = useState("calender"); // brands   // artistics

  return (
    <>
      <EventCalenderAarea />
    </>
  );
};

export default CalendarTypeButton;
