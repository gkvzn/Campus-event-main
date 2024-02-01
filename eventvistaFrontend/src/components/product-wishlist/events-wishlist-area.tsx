import React from "react";
import { useModelGetEventsWishlist } from "@/models/events.model";
import SoloEventItem from "../event/solo-event";

// cart product
const EventsWishlistArea: React.FC = () => {
  const {
    data: wishlist,
    isLoading: wishlistLoading,
    refetch: wishlist_refetch,
  } = useModelGetEventsWishlist();

  return (
    <>
      {!wishlistLoading ? (
        wishlist && (
          <div className="container container event-main-top-div mt-60">
            <div className="row pt-10">
              {wishlist.data.length === 0 ? (
                <h4 className="text-danger pb-50 text-center">
                  No Events found in the wishlist
                </h4>
              ) : (
                wishlist.data.map((event) => (
                  <SoloEventItem
                    key={event.id}
                    event={event.event}
                    loading={wishlistLoading}
                    eventsRefetch={wishlist_refetch}
                  />
                ))
              )}
            </div>
          </div>
        )
      ) : (
        <div className="text-center mt-40 mb-40">
          <h3 className="text-primary">Loading....!</h3>{" "}
          {/* Replace with your preferred loading spinner component */}
        </div>
      )}
    </>
  );
};

export default EventsWishlistArea;
