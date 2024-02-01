import React, { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/utils/forms/button";
import ShimmerCard from "@/utils/ShimmerCard";
import { ON_PAGE_ROCORDS } from "@/constants/app";
import FeaturedButton from "./featured_btn";
import EventHeroBanner from "../main/event-hero-banner";
import InputBox from "@/utils/forms/Input";
import { useModelGetEvents } from "../../models/events.model";
import { extractDateForEvents, paginateScroll, strLimit } from "@/utils/helper";
import EventWishListBtn from "./event_wishlist_btn";
import ReactPaginate from "react-paginate";
import SoloEventItem from "./solo-event";

export const ViewAllEventsArea: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
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
    all: "all",
  });

  return (
    <>
      <EventHeroBanner
        title=" You have power over your mind - not outside events. Realize this, and
        you will find strength."
      />

      <div className="container event-main-top-div mt-60" ref={pageRef}>
        <div
          className="row mb-5 main-row-event-and-view-all"
          style={{ marginBottom: "36px !important" }}
        >
          <div className="col-md-12 col-12">
            <div className="tpproduct">
              <h1 className="class-event-home-page-heading text-center">
                Showing {all_events?.data.total} Results
              </h1>
            </div>
          </div>
        </div>
        <div className="row pt-10 mt-50">
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

        {!all_events_loading && all_events?.data && (
          <div className="row">
            <div className="col-12 mt-4 pb-100">
              <div className="basic-pagination text-center mt-15">
                <nav>
                  <ReactPaginate
                    breakLabel="..."
                    activeLinkClassName="bg-brown text-light active"
                    forcePage={currentpage}
                    nextLabel=">"
                    onPageChange={(e) => {
                      setcurrentpage(e.selected);
                      paginateScroll(pageRef);
                    }}
                    pageRangeDisplayed={10}
                    pageCount={all_events.data.last_page}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                  />
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewAllEventsArea;
