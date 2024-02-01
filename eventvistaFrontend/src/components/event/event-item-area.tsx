import React, { useEffect, useState } from "react";
import { ShopItemsProps } from "@/types_and_interfaces/shop_types";
import { ON_PAGE_ROCORDS } from "@/constants/app";
import { useModelGetEvents } from "@/models/events.model";
import SoloEventItem from "./solo-event";

export const EventItemArea: React.FC<ShopItemsProps> = ({ mode, pageRef }) => {
  // currentPage
  const [currentpage, setcurrentpage] = useState<number>(0);

  // after querycall

  const {
    data: all_events,
    isLoading: all_events_loading,
    refetch: eventsRefetch,
    isFetching: isEventsFetching,
  } = useModelGetEvents({
    take: ON_PAGE_ROCORDS.EVENTS,
    page: currentpage + 1,
  });

  useEffect(() => {
    setcurrentpage(0);
  }, [mode]);

  if (all_events_loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="text-primary">Loading.....!</h3>
      </div>
    );
  }

  return (
    <>
      <div className="container event-main-top-div">
        <div className="row mb-5 main-row-event-and-view-all">
          <div className="col-md-6 col-6">
            <div className="tpproduct">
              <h1 className="class-event-home-page-heading text-danger">
                Your Recommendations
              </h1>
            </div>
          </div>
          <div className="col-md-6 col-6">
            <div className="tpfilter d-flex align-items-center"></div>
          </div>
        </div>
        <div className="row pt-10">
          {!all_events_loading &&
            all_events?.data.data.map((event) => {
              return (
                <SoloEventItem
                  key={event.id}
                  event={event}
                  loading={all_events_loading}
                  eventsRefetch={eventsRefetch}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default EventItemArea;
