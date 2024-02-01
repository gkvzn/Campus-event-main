import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { useModelGetEventsCalendar } from "@/models/events.model";
import { format } from "date-fns"; // Import the format function

// cart product
const EventCalenderAarea: React.FC = () => {
  const {
    data: EventData,
    isLoading: eventLoading,
    refetch: wishlist_refetch,
  } = useModelGetEventsCalendar();

  // // place order
  const events = EventData?.data || [];

  // Convert events to FullCalendar format
  const eventss = events.map((event) => {
    const eventDate = event.event.start_date
      ? new Date(event.event.start_date)
      : null;
    const today = new Date();

    let color;
    if (!eventDate) {
      color = "blue"; // Default color for events with no date
    } else if (isSameDay(eventDate, today)) {
      color = "green"; // Event is today
    } else if (isBefore(eventDate, today)) {
      color = "red"; // Event date has passed
    } else {
      color = "blue"; // Event date is in the future
    }

    return {
      title:
        event.event.name +
        " - " +
        event.event.start_time_renew +
        " to  " +
        event.event.end_time_renew,
      date: eventDate ? format(eventDate, "yyyy-MM-dd") : "",

      color: color,
    };
  });

  // Helper functions
  function isSameDay(date1: any, date2: any) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  function isBefore(date1: any, date2: any) {
    return date1 < date2;
  }

  return (
    <>
      {!eventLoading ? (
        EventData && (
          <>
            <div className="container container event-main-top-div mt-0">
              <div className="row pt-10">
                {EventData.data.length === 0 ? (
                  <h3 className="text-center pt-40 pb-40 text-danger">
                    No Events found in the Calendar
                  </h3>
                ) : (
                  <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={eventss}
                  />
                )}
              </div>
            </div>
          </>
        )
      ) : (
        <div className="text-center mt-40 mb-40">
          <h3 className="text-primary">Loading....!</h3>{" "}
        </div>
      )}
    </>
  );
};

export default EventCalenderAarea;
